(() => {
  const refs = {
    openModalBtn: document.querySelector('[header-window-open]'),
    closeModalBtn: document.querySelector('[header-window-close]'),
    modal: document.querySelector('[header-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('menu__is-hidden');
  }
})();