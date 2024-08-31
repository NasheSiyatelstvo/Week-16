"use strict";

const myForm = document.getElementById('registrationForm');
const myButton = myForm.querySelector('button[type="submit"]');

const field1 = myForm.name;
const field2 = myForm.email;
const field3 = myForm.age;
const field4 = myForm.profession;
const field5 = myForm.password;
const checkbox1 = myForm.agree;

const err1 = document.getElementById('nameError');
const err2 = document.getElementById('emailError');
const err3 = document.getElementById('ageError');
const err4 = document.getElementById('professionError');
const err5 = document.getElementById('passwordError');
const err6 = document.getElementById('agreeError');

const checkField1 = () => {
    const value1 = field1.value.trim();
    if (value1.length < 2 || value1.length > 20 || !/^[A-Za-zА-Яа-я\s]+$/.test(value1)) {
        err1.textContent = 'Имя должно содержать от 2 до 20 букв и только буквы с пробелами.';
        return false;
    }
    err1.textContent = '';
    return true;
};

const checkField2 = () => {
    const value2 = field2.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value2)) {
        err2.textContent = 'Введите корректный email.';
        return false;
    }
    err2.textContent = '';
    return true;
};

const checkField3 = () => {
    const value3 = field3.value.trim();
    if (!value3 || isNaN(value3) || value3 <= 0) {
        err3.textContent = 'Введите корректный возраст.';
        return false;
    }
    err3.textContent = '';
    return true;
};

const checkField4 = () => {
    if (!field4.value) {
        err4.textContent = 'Выберите профессию.';
        return false;
    }
    err4.textContent = '';
    return true;
};

const checkField5 = () => {
    const value5 = field5.value.trim();
    if (value5.length < 8 || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value5)) {
        err5.textContent = 'Пароль должен содержать минимум 8 символов, одну заглавную букву, одну строчную букву и одну цифру.';
        return false;
    }
    err5.textContent = '';
    return true;
};

const checkCheckbox1 = () => {
    if (!checkbox1.checked) {
        err6.textContent = 'Вы должны согласиться с условиями.';
        return false;
    }
    err6.textContent = '';
    return true;
};

const checkForm = () => {
    const valid1 = checkField1();
    const valid2 = checkField2();
    const valid3 = checkField3();
    const valid4 = checkField4();
    const valid5 = checkField5();
    const valid6 = checkCheckbox1();

    const formValid = valid1 && valid2 && valid3 && valid4 && valid5 && valid6;

    myButton.disabled = !formValid;
    return formValid;
};

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (checkForm()) {
        console.log({
            name: field1.value,
            email: field2.value,
            age: field3.value,
            gender: myForm.gender.value,
            profession: field4.value,
            password: field5.value,
            agree: checkbox1.checked
        });
        myForm.reset();
        myButton.disabled = true;
    }
});

const formInputs = myForm.querySelectorAll('input, select');
formInputs.forEach(input => {
    input.addEventListener('focus', () => input.style.borderColor = '#00ff00');
    input.addEventListener('blur', () => input.style.borderColor = '');
    input.addEventListener('input', checkForm);
});