const modalMain = document.getElementById('modal_main')
modalMain.classList.add('modal_active');

const modalClose = document.querySelectorAll('.modal__close')
const modalSuccess = document.getElementById('modal_success')
for (let p = 0; p < modalClose.length; p++) {
    modalClose[p].onclick = () => {
        modalMain.classList.remove('modal_active')
        modalSuccess.classList.remove('modal_active')
    }
};

const showSuccess = document.querySelector('.show-success')
showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active')
};