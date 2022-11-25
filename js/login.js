'use strict';

const main = document.querySelector('main'),
loginBtn = main.querySelector('.loginbutton'),
loginId = document.getElementById('uid'),
loginPw = document.getElementById('pw'),
login = document.querySelector('.login'),
login_li = login.getElementsByTagName('li'),
inputTag = main.getElementsByClassName('login-input'),
loginDiv = main.querySelector('.logindiv'),
nav = document.querySelector('nav');

// ======모달참조
const modal = main.querySelector('.modal_container'),
bg = main.querySelector('.bg'),
body = document.querySelector('body'),
header = document.querySelector('header'),
modal_p = modal.querySelector('p'),
closeBtn = main.querySelector('.closeBtn');

let value;


const open = () => {
    modal.classList.remove('hidden');
    body.classList.add('scroll_none');
    header.style.position = 'static';
    nav.style.zIndex = '0';
}

const close = () => {
    modal.classList.add('hidden');
    body.classList.remove('scroll_none');
    header.style.position = 'sticky';
    nav.style.zIndex = '2';
}

loginBtn.addEventListener('click', () => {

    if(loginId.value == ""){
        modal_f("아이디를 입력해 주세요");
    } else if(loginPw.value == "") {
        modal_f("비밀번호를 입력해 주세요");
    } else if((loginId.value !="test")||(loginPw.value != "1234")) {
        modal_f("아이디,비밀번호를 확인해주세요");
    } else {
        loginBtn.setAttribute('type', 'submit');
    }

});

loginDiv.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        loginBtn.click();
    }
});


function modal_f (str) {
    open();
    modal_p.textContent = str;
}

closeBtn.addEventListener('click', close);
bg.addEventListener('click', close);

