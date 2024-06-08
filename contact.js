let btnSubmit = document.querySelector('.submit');
let modal = document.querySelector('.modal-container');

if (btnSubmit) {
  btnSubmit.addEventListener('click', function () {
    modal.classList.add('show');

    const next = document.querySelector('.next');
    next.setAttribute('value', 'contact.html');
  });
}