const coursel = document.querySelector('.comment');
const arrowButtons = document.querySelectorAll('.arrow');
let isDragging = false, startX, stratScrollLeft;
const firstCardWidth = coursel.querySelector('.commentCard').offsetWidth;
const registerButton = document.querySelector('#registerButton');
const form = document.querySelector('.wrapperForm');
const closeButton = document.querySelector('span.fa-close');
const login = document.querySelector('#login');
const register = document.querySelector('#register');
const wrapperForm = document.querySelector('.wrapperForm');
const registerForm = document.querySelector('.registerForm');
const loginForm = document.querySelector('.loginForm');
const textInput = document.querySelectorAll('.textInput');
const mobileInput = document.querySelectorAll('.mobileInput');
const passwordInput = document.querySelectorAll('.passwordInput');
const suggest = document.querySelector('.suggest');
const closeButton2 = document.querySelector('.closeButton2');
const toggleTheme = document.querySelectorAll('.toggleColor');

function toggleMenu()
{
    const hamburgerButton = document.getElementById('hamburgerButton').classList;
    const navMenu = document.getElementById('navMenu').classList;
    if(hamburgerButton.contains('active'))
    {
        hamburgerButton.remove('active');
        navMenu.remove('active');
    }
    else
    {
        hamburgerButton.add('active');
        navMenu.add('active');
    }
}

arrowButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        coursel.scrollLeft += btn.classList.contains('left') ? -firstCardWidth : firstCardWidth;
    })
})

function dragStart(e)
{
    isDragging = true;
    coursel.classList.add('dragging');
    startX = e.pageX;
    stratScrollLeft = coursel.scrollLeft;
}

function dragging(e)
{
    if (!isDragging) return;
    coursel.scrollLeft = stratScrollLeft - (e.pageX - startX);
}

function dragStop(e)
{
    isDragging = false;
    coursel.classList.remove('dragging');
}

coursel.addEventListener('mousedown', dragStart);
coursel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);

registerButton.addEventListener('click', ()=> {
        form.classList.add('active');
        let newDiv = document.createElement('div');
        newDiv.style.width = '100%';
        newDiv.style.height = '100%';
        newDiv.style.position = 'fixed';
        newDiv.style.top = '0';
        newDiv.style.left = '0';
        newDiv.style.backdropFilter = 'blur(16px)';
        newDiv.style.backgroundColor = 'rgba(0, 0, 0, .25)';
        document.body.appendChild(newDiv);
})

closeButton.addEventListener('click', ()=> {
        form.classList.remove('active');
        document.body.removeChild(document.body.lastElementChild)
})

login.addEventListener('click', ()=> {
    registerForm.style.right = '1000%';
    loginForm.style.left = '0';
    wrapperForm.style.height = '350px';
});

register.addEventListener('click', ()=> {
    loginForm.style.left = '1000%';
    registerForm.style.right = '0';
    wrapperForm.style.height = '500px';
});

for (let i=0;i<textInput.length;i++)
    textInput[i].addEventListener('keypress', textValidation);

for (let i=0;i<mobileInput.length;i++)
    mobileInput[i].addEventListener('keypress', numberValidation);

for (let i=0;i<passwordInput.length;i++)
    passwordInput[i].addEventListener('keyup', passwordValidation);

function textValidation(e)
{
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 32)
        return;
    else
        e.preventDefault();
}

function numberValidation(e)
{
    if (e.keyCode >= 48 && e.keyCode <= 57)
        return;
    else
        e.preventDefault();
}

function passwordValidation()
{
    const passwordValue = passwordInput[0].value;
    const rePasswordValue = passwordInput[1].value;
    passwordInput[0].addEventListener('blur', function() {
        passwordInput[1].focus();
    })
    passwordInput[1].addEventListener('blur', function() {
        if (passwordValue != rePasswordValue)
        {
            for (let i=0;i<passwordInput.length;i++)
            {
                passwordInput[i].style.borderBottom = '1px solid red';
                passwordInput[i].nextElementSibling.style.color = 'red';
            }
        }
        else
        {
            for (let i=0;i<passwordInput.length;i++)
            {
                passwordInput[i].style.borderBottom = '1px solid green';
                passwordInput[i].nextElementSibling.style.color = 'green';
            }
        }
    })
}

setTimeout(function() {
    suggest.classList.add('active')
}, 5000)

setTimeout(function() {
    suggest.classList.remove('active')
}, 15000)

closeButton2.addEventListener('click', () => {
    suggest.style.display = 'none';
})

toggleTheme.forEach((item, index) => {
    item.addEventListener('click', function() {
        if (index == 0)
            document.body.style.backgroundColor = 'burlywood';
        else if (index == 1)
        
            document.body.style.backgroundColor = 'white';
        else
            document.body.style.backgroundColor = 'darkgray';
    })
})