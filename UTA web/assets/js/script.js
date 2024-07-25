const header = document.querySelector('.header');
const photo = document.querySelector('.photo');
const osnova = document.querySelector('.osnova');
const osnovaHeight = osnova.offsetHeight;
const headerHeight = header.offsetHeight;
const photoHeight = photo.scrollY;


window.addEventListener('scroll', () => {
    shapka()
})

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