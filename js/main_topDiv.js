'use strict';

// 상단 div 숨기기 

let space = document.querySelector('.space'),
    spaceBtn = space.querySelector('.space-close');

spaceBtn.addEventListener('click', function () {
    space.style.visibility = 'hidden';
    spaceBtn.style.visibility = 'hidden';
    space.style.height = 0 + 'px';
});

// 버튼 클릭 시 검색 페이지 넘어가기 / alert 팝업 뜨기 

let searchDiv = document.querySelector('.search'),
    button = searchDiv.querySelector('.button'),
    buttonInput = document.getElementById('search_input');

function search(e) {
    let searchInput = buttonInput.value;

    if (searchInput == "") {
        e.preventDefault();
        alert("검색어를 입력해 주세요");
    }
}

buttonInput.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        button.click();
    }
});

button.addEventListener('click', function (e) {
    search(e);
});

