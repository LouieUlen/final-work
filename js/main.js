// слайдер
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// модальное окно
let btn = document.getElementById('open__modal');
let modal = document.getElementById('modal');
let close = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// проверка заполенения формы
function foo() {
    let message = "";
    let Name = document.getElementById("name").value;
    if (Name == "") {
        message = message + "Введите имя\n";
    }
    let Phone = document.getElementById("phone").value;
    if (Phone == "") {
        message = message + "Введите телефон\n";
    }
    let Check = document.getElementById("check");
    if (Check.checked == false) {
        message = message + "Согласитесь с политикой конфиденциальности";
    }
    if (message == "") {
        alert("Мы вам скоро перезвоним!");
    } else {
        alert(message);
    }
}