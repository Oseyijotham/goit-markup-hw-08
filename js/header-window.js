(() => {
  const refs = {
    openModalBtn: document.querySelector("[header-window-open]"),
    closeModalBtn: document.querySelector("[header-window-close]"),
    siteBody: document.querySelector("body"),
    //headerWindow: document.querySelector(".header-window"),
    modal: document.querySelector("[header-window]"),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('menu__is-hidden');
    refs.siteBody.classList.toggle("body__no-scroll");
    //refs.headerWindow.classList.toggle("header-window__scroll");
  }
})();