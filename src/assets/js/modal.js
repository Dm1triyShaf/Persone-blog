const modalBtn = document.querySelectorAll('[data-modal');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.target;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);

        modal.classList.add('show');
        body.classList.add('no-scroll');
        

    });
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    });
}); 