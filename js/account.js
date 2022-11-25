'use strict';

const main = document.querySelector('main'),
    uid = document.getElementById('uid'),
    checkBtn1 = main.querySelector('.checkBtn1'),
    checkBtn2 = main.querySelector('.checkBtn2'),
    upw = document.getElementById('upw'),
    upw2 = document.getElementById('upw2'),
    umail = document.getElementById('umail'),
    checkBtn3 = main.querySelector('.checkBtn3'),
    phone = document.getElementById('phone'),
    phone_num = document.getElementById('phone_num'),
    checkBtn4 = main.querySelector('.checkBtn4'),
    Btn4_box = main.querySelector('.Btn4_box'),
    button_submit = main.querySelector('.button_submit'),
    uname = document.getElementById('uname'),
    addressbutton = document.querySelector('.addressbutton'),
    account_p = main.querySelector('.account_p'),
    account_p2 = main.querySelector('.account_p2'),
    address_input = document.getElementById('address_input');


// ======모달참조
const modal = main.querySelector('.modal_container'),
    bg = main.querySelector('.bg'),
    body = document.querySelector('body'),
    header = document.querySelector('header'),
    modal_p = modal.querySelector('p'),
    closeBtn = main.querySelector('.closeBtn');

// ==========정규식

// const regex = /^[a-zA-Z0-9]{4,12}$/
const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{10,20}$/;
const regMail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// ===================================================


let clr1,clr2,clr3;
checkBtn1.addEventListener('click', () => {
    const result = regex.test(uid.value);

    if (result) {
        modal_f("사용할 수 있는 아이디 입니다");
        clr1 = true;
    }
    else {
        modal_f("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
    }

});

uid.addEventListener('keydown', () => {
    setTimeout(() => {
        if (clr1) {
            clr1 = false;
        }
    }, 50)
});

umail.addEventListener('keydown',() => {
    
    setTimeout(() => {
        if (clr2) {
            clr2 = false;
        }
    }, 50)
});

phone.addEventListener('keydown', ()=> {
    setTimeout(()=>{
        if(clr3) {
            clr3 = false;
        }
    },50)
})

upw.addEventListener('keydown', () => {
    setTimeout(()=>{
        const result = regPass.test(upw.value);
        upw_input(account_p,result);


    },50)
});

upw2.addEventListener('keydown', () => {
    setTimeout(()=>{
        const check = upw.value == upw2.value
        upw_input(account_p2,check);


    },50)
});

function upw_input(zz,iff) {
    if (iff) {
        zz.classList.add('account_hidden');
    } else {
        zz.classList.remove('account_hidden');
    }
}

checkBtn2.addEventListener('click', () => {
    const result = regMail.test(umail.value);

    if (result) {
        modal_f("사용할 수 있는 이메일 입니다");
        clr2 = true;
    } else if (umail.value == "") {
        modal_f("이메일을 입력해 주세요")
    }
    else {
        modal_f("이메일 형식으로 입력해 주세요");
    }

});

phone.addEventListener('keydown',() => {
    setTimeout(() => {
        nmph_input(checkBtn3,phone.value.length >= 11);
    }, 50);
} );

function nmph_input(zz,iff) {
    if (iff) {

        zz.style.background = "lightSalmon";
        zz.style.cursor = "pointer";
        zz.removeAttribute('disabled');
        zz.classList.remove('button_opacity');
    } else {

        zz.classList.add('button_opacity');
        zz.style.cursor = "default";
        zz.setAttribute('disabled', '');
    }
}

checkBtn3.addEventListener('click', () => {
    modal_f("인증번호가 발송되었습니다. 인증번호를 입력해 주세요.");
    Btn4_box.style.display = "flex";
});

// ======폰번인증

checkBtn4.addEventListener('click', () => {
    if (phone_num.value == "1234567") {
        modal_f("인증완료");
        phone_num.value = "";
        checkBtn4.classList.add('button_opacity');
        checkBtn4.style.cursor = "default";
        checkBtn4.setAttribute('disabled', '');
        Btn4_box.style.display = "none";

        clr3 = true;
    } else {
        modal_f("잘못된 인증코드입니다.");
    }
});

phone_num.addEventListener('keydown', () => {
    setTimeout(() => {
        nmph_input(checkBtn4,phone_num.value.length >= 7);
    }, 50);
});


// =====전송버튼

button_submit.addEventListener('click', () => {
    const clrCheck = clr1 ==true && clr2 == true && clr3 == true;

    if(clrCheck && upw.value == upw2.value && uname.value != "" && address_input.value != "") {
        button_submit.setAttribute('type','submit');
    } else {
        modal_f("양식을 확인해주세요");
    }
});

// =======주소검색

// const addressbutton = document.querySelector(".addressbutton");


addressbutton.addEventListener('click', function () {
    var width = 500;
    var height = 600;
    new daum.Postcode({
        width: width,
        height: height
    }).open({
        left: (window.screen.width / 2) - (width / 2),
        top: (window.screen.height / 2) - (height / 2)
    });
})


// ==================== 모달 

const open = () => {
    modal.classList.remove('hidden');
    body.classList.add('scroll_none');
}

const close = () => {
    modal.classList.add('hidden');
    body.classList.remove('scroll_none');
}

function modal_f(str) {
    open();
    modal_p.textContent = str;
}

closeBtn.addEventListener('click', close);
bg.addEventListener('click', close);