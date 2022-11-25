const adress_add_button = document.querySelector(".adress_add_button"),
    content = document.querySelector(".content"),
    content_adress_2 = content.querySelector('.content_adress_2'),
    fixBtn = content_adress_2.getElementsByTagName('button'),
    address_fix_content = document.querySelector('.address_fix_content'),
    fix_address = address_fix_content.querySelector('.fix_address'),
    fix_name = address_fix_content.querySelector('.fix_name'),
    fix_call = address_fix_content.querySelector('.fix_call'),
    address_fix_button = address_fix_content.querySelector('.address_fix_button'),
    content_adress_1 = content.querySelector(".content_adress_1"),
    [fix_check, fix_cancel] = address_fix_button.querySelectorAll('button'),
    content_adress_box = content.querySelector(".content_adress_box"),
    content_adress = content.querySelector(".content_adress");

adress_add_button.addEventListener('click', function () {
    var width = 500;
    var height = 600;

    new daum.Postcode({
        width: width,
        height: height,
        oncomplete: function (data) {
            content_adress.innerHTML +=
                `<div class="content_adress_box">
                <div><input type="radio" name="adress_select"></div>
        <div>
        <span>${data.address}&nbsp;</span>
        <span></span>
        </div>
        <div></div>
        <div></div>
        <div>
        <button></button>
        </div>
</div>`
        }
    }).open({
        left: (window.screen.width / 2) - (width / 2),
        top: (window.screen.height / 2) - (height / 2)
    });
})

let fixName;
let fixCall;
let fixAddress;
let addresOj;

content_adress.addEventListener("click", function (e) {
    addresOj = e.target.closest('button');

    if (this.contains(addresOj)) {
        address_fix_content.classList.remove('hidden');
        fixAddress = addresOj.parentNode.parentNode.children[1];

        fixName = addresOj.parentNode.previousSibling.previousSibling.previousSibling.previousSibling;
        fixCall = addresOj.parentNode.previousSibling.previousSibling;
        fix_address.nextSibling.nextSibling.value = '';
        fix_name.nextSibling.nextSibling.value = fixName.textContent;
        fix_call.nextSibling.nextSibling.value = fixCall.textContent;

        fix_address.textContent = fixAddress.children[0].textContent;
    }
})

fix_check.addEventListener('click', function () {
    fixAddress.children[1].textContent = fix_address.nextSibling.nextSibling.value;
    fixName.textContent = fix_name.nextSibling.nextSibling.value;
    fixCall.textContent = fix_call.nextSibling.nextSibling.value;
    address_fix_content.classList.add('hidden');
})


fix_cancel.addEventListener('click', function () {
    addresOj.parentNode.parentNode.remove();
    address_fix_content.classList.add('hidden');
})
