const hamburgerButton = document.getElementById('hamburgerButton').classList;
const navMenu = document.getElementById('navMenu').classList;
const coursel = document.querySelector('.comment');
const arrowButtons = document.querySelectorAll('.arrow');
const firstCardWidth = document.querySelector('.commentCard').offsetWidth;
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
const passwordSection = document.querySelectorAll('.passwordSection');
const passwordInput = document.querySelectorAll('.passwordInput');
const suggest = document.querySelector('.suggest');
const closeButton2 = document.querySelector('.closeButton2');
const toggleTheme = document.querySelectorAll('.toggleColor');
let isDragging = false, startX, stratScrollLeft;

function toggleMenu() {
    hamburgerButton.toggle('active');
    navMenu.toggle('active');
};

arrowButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        coursel.scrollLeft += btn.classList.contains('left') ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    coursel.classList.add('dragging');
    startX = e.pageX;
    stratScrollLeft = coursel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    coursel.scrollLeft = stratScrollLeft - (e.pageX - startX);
};

const dragStop = (e) => {
    isDragging = false;
    coursel.classList.remove('dragging');
};

coursel.addEventListener('mousedown', dragStart);
coursel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);

registerButton.addEventListener('click', () => {
    form.classList.add('active');
    registerForm.classList.add('active');
    let newDiv = document.createElement('div');
    newDiv.classList.add('blurPage');
    document.body.appendChild(newDiv);
});

closeButton.addEventListener('click', () => {
    form.classList.remove('active');
    registerForm.classList.remove('active');
    loginForm.classList.remove('active');
    document.body.lastElementChild.remove();
});

login.addEventListener('click', () => {
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

register.addEventListener('click', () => {
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

const textValidation = (e) => {
    if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode == 32)
        return;
    else
        e.preventDefault();
}

const numberValidation = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57)
        return;
    else
        e.preventDefault();
}

const passwordValidation = () => {
    const passwordValue = passwordInput[0].value;
    const rePasswordValue = passwordInput[1].value;
    passwordInput[0].addEventListener('blur', () => {
        passwordInput[1].focus();
    });
    passwordInput[1].addEventListener('blur', () => {
        if (passwordValue != rePasswordValue) {
            for (let i = 0; i < passwordInput.length; i++) {
                passwordSection[i].classList.remove('success');
                passwordSection[i].classList.add('error');
            };
        }
        else {
            for (let i = 0; i < passwordInput.length; i++) {
                passwordSection[i].classList.remove('error');
                passwordSection[i].classList.add('success');
            };
        };
    });
};

for (let i = 0; i < textInput.length; i++)
    textInput[i].addEventListener('keypress', textValidation);

for (let i = 0; i < mobileInput.length; i++)
    mobileInput[i].addEventListener('keypress', numberValidation);

for (let i = 0; i < passwordInput.length; i++)
    passwordInput[i].addEventListener('keyup', passwordValidation);

setTimeout(function () {
    suggest.classList.add('active');
}, 5000);

setTimeout(function () {
    suggest.classList.remove('active');
}, 15000);

closeButton2.addEventListener('click', () => {
    suggest.classList.remove('active');
});