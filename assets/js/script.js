
const header = document.querySelector('.header');
const photo = document.querySelector('.photo');
const osnova = document.querySelector('.osnova');
const thanks = document.querySelector('.thx');
const button = document.querySelector('.order_button');

const nametext = document.querySelector('#name');
const emailtext = document.querySelector('#email');
const numbertext = document.querySelector('#phonenumber');
var whatsapp = document.querySelector('#checkbox1');
var phone_checkbox = document.querySelector('#checkbox2');
var email_checkbox = document.querySelector('#checkbox3');

const osnovaHeight = osnova.offsetHeight;
const headerHeight = header.offsetHeight;
const photoHeight = photo.scrollY;



function shapka(){
    let scrollDistance = window.scrollY;

    if (scrollDistance >= osnovaHeight+3){
        header.style.position = "fixed";
        photo.style.marginTop = `${headerHeight}`

    }else{
        header.style.position = "relative";
        photo.style.marginTop = null
    }
}
shapka()

window.addEventListener('scroll', () =>{
    let scrollDistance = window.scrollY;

    if (scrollDistance >= osnovaHeight+3){
        header.style.position = "fixed";
        photo.style.marginTop = `${headerHeight}`

    }else{
        header.style.position = "relative";
        photo.style.marginTop = null
    }
})

button.addEventListener('click', () =>{
    if (nametext.value != '' && numbertext.value !=''){
        thanks.innerHTML = 'Спасибо что связались с нами! Мы вам перезвоним.';
        thanks.style.display = 'block';

        fetch('http://localhost:3000/api', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },

              body: JSON.stringify({name: nametext.value,
                                    email: emailtext.value,
                                    number: numbertext.value,
                                    whatsappbool: whatsapp.checked, 
                                    emailbool: email_checkbox.checked,
                                    phonebool:phone_checkbox.checked })
            })
          .then((response) => response.json())
          .then((json) => console.log(json));

    
        nametext.value = '';
        emailtext.value = '';
        numbertext.value = '';
        whatsapp.checked = false;
        email_checkbox.checked = false;
        phone_checkbox.checked = false;

    }else{
        thanks.innerHTML = 'Неправильно введены данные!';
        thanks.style.display = 'block';
        }
})