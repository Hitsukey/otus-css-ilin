const body = document.querySelector('body');
const btnOpenModal = document.querySelector('#modalTrigger');
const btnOpenModalMobile = document.querySelector('#modalTriggerMobile');

const modal = document.querySelector('#modalWindow');
const btnCloseModal = document.querySelector('#modalWindowClose');

const handleModalSwitch = () => {
  modal.classList.toggle('modal--closed');
  body.classList.toggle('body--scroll-locked');
}

btnOpenModal.addEventListener('click', handleModalSwitch)
btnOpenModalMobile.addEventListener('click', handleModalSwitch)
btnCloseModal.addEventListener('click', handleModalSwitch);