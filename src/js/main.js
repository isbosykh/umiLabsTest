import SmoothScroll from 'smooth-scroll';
import {WOW} from 'wowjs';

window.addEventListener('DOMContentLoaded', function () {

    let scroll = new SmoothScroll('a[href*="#"]');

    let form = document.getElementById('form');
    let fieldName = document.getElementById('fieldName');
    let fieldEMail = document.getElementById('fieldEMail');
    let fieldPhoneNumber = document.getElementById('fieldPhoneNumber');
    let fieldAdditional = document.getElementById('fieldAdditional');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (fieldName.value === '') {
            fieldName.placeholder = 'Введите фамилию и имя';
            console.log('Name is not valid');
        } else console.log('Name is valid');

        if (isEmailValid()) {
            fieldEMail.placeholder = 'Введите почту';
            console.log('Email is not valid');
        } else console.log('Email is valid');

        if (fieldPhoneNumber.value.length === 11) {
            console.log('Number is valid');
        } else fieldPhoneNumber.placeholder = 'Введите номер телефона';
    });

    function isEmailValid(string) {
        return !/^[\S]+@[\w]+\.[\w.]+$/i.test(string);
    }

    new WOW(
        {live: false}
    ).init();
});


