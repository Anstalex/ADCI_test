const btnControlPopup = document.querySelector('.footer__button');
const footerPopup = document.querySelector('.footer__head');
const popup = document.querySelector('.popup');
const outLayer = document.querySelector('.out-layer');
const mobileButton = document.querySelector('.mobile-button');
const navigation = document.querySelector('.navigation');

const closeModal = () => {
    outLayer.classList.add('hidden');
    popup.classList.add('hidden');
}

const openModal = () => {
    outLayer.classList.remove('hidden');
    popup.classList.remove('hidden');
}

const handler = (element, event, method) => {
    element.addEventListener(event, method);
}

handler(btnControlPopup, 'click', () => {
    footerPopup.classList.toggle('close');
    btnControlPopup.classList.toggle('arrow_up');
});

handler(document, 'click', (e) => {
    const target = e.target;
    if ((!target.closest('.popup') || (target.matches('.popup__cross'))) &&
        (!target.matches('.controls__item'))) {
        closeModal();
    }else if(target.matches('.controls__item')){
        openModal();
    }
});
    handler(mobileButton,'click',function (){
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    })


     const $owl = $('.owl-carousel');
    $owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
