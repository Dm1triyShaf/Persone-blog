const modalBtn = document.querySelectorAll('[data-modal');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');


modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContant = modal.querySelector('.modal__content');

        modalContant.addEventListener('click', event => {
            event.stopPropagation();
        }); 

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(()=>  {
            modalContant.style.transform = 'none';
            modalContant.style.opacity = '1';
        }, 2);

        
    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal)
    });
}); 

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget

        closeModal(currentModal)
    });
}); 

function closeModal(currentModal) {
    let modalContant = currentModal.querySelector('.modal__content');
    modalContant.removeAttribute('style');

        setTimeout(()=> {
            currentModal.classList.remove('show');
            body.classList.remove('no-scroll');
    }, 250)
}