const hamburger = document.querySelector('.hamburger',),
      opismenu = document.querySelector('.opis-menu',),
      menu = document.querySelector('.menu'),
      closes = document.querySelector('.menu__close');

// hamburger.addEventListener('click', () =>{
//     menu.classList.add('active');
// });

// closes.addEventListener('click', () =>{
//     menu.classList.remove('active');
// });

function menuActive (item) {
    item.addEventListener('click', () =>{
        menu.classList.toggle('active');
    });
}

menuActive(opismenu);
menuActive(hamburger);
menuActive(closes);

const interests = document.querySelectorAll('.skills__ratings-interest'),
      scales = document.querySelectorAll('.skills__ratings-scale span');

interests.forEach((item, i) => {
    scales[i].style.width = item.innerHTML;
});

/* const ERROR_MESSAGE = 'some error'
const SUCCESS_MESSAGE = 'successfule send'
let colorMessage;

const form = document.querySelector(".form");
form.addEventListener('subitm', formSend);

 async function formSend(event) {
    event.preventDefault();


    const vormData = new FormData(form);

    let response = await fetch('php/index.php' , {
        reathod: 'POST',
        body: FormData,
        mode: 'no-cors'
    });

    if (response.ok) {
        colorMessage = 'linear-gradient(to right, #00b09b, #96c93d)';
        showTost(SUCCESS_MESSAGE,  colorMessage);
        form.reset();
    }else{
       
        colorMessage = 'linear-gradient(to right, red, red)';
        showTost(ERROR_MESSAGE,  colorMessage);
    }
}

function showTost (message, colorMessage) {
    Toastify({
        text: "message",
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true, 
        style: {
          background: " colorMessage",
        },
      }).showToast();
}
      
 */


// валидация форм
const validation = new JustValidate('.contacts__form');

validation
    .addField('#name', [
        {
        rule: 'required',
        errorMessage: 'Введите свое имя'
        },
        {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите более 2х символов'
        },
        {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Максимально 30 символов'
        },
    ])
    .addField('#email', [
        {
        rule: 'required',
        errorMessage: 'Введите ваш email'
        },
        {
        rule: 'email',
        errorMessage: 'Введите корретный адрес'
        }
    ])
    .addField('#checkbox', [
        {
        rule: 'required',
        errorMessage: 'поставте галочку'
        }
    ]).onSuccess((event) => {
        let formData = new FormData(event.target); 
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
                    alert('Відправлено');
                }
            }
        }; 
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        event.target.reset();
    });

 /*    const promo__validation = new JustValidate('.promo__order');

promo__validation
    .addField('#promo__input__name', [
        {
        rule: 'required',
        errorMessage: 'Введите свое имя'
        },
        {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите более 2х символов'
        },
        {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Максимально 30 символов'
        },
    ])
    .addField('#promo__checkbox', [
        {
        rule: 'required',
        errorMessage: 'поставте галочку'
        }
    ]).onSuccess((event) => {
        let formData = new FormData(event.target); 
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4){
                if (xhr.status === 200) {
                    alert('Відправлино');
                }
            }
        } 
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        event.target.reset();
    }); */