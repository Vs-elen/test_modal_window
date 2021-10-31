let modal = document.querySelector('.content__modal');
let openButton = document.querySelector('.content__button');
let closeButton = document.querySelector('.content__modal-close');

openButton.addEventListener('click', () => modal.classList.add('content__modal_opened'));
closeButton.addEventListener('click', () => modal.classList.remove('content__modal_opened'));
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('content__modal_opened');
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('content__modal_opened');
  }
})