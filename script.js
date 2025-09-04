let menuBar = document.getElementById('menubar');
let linkButton = document.querySelector('.link-button');

menuBar.addEventListener('click', () => {
    linkButton.classList.toggle('menu')
})