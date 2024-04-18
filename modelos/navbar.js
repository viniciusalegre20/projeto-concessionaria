

const button = document.getElementById('button');

function toggleMenu() {

    const nav = document.getElementById('nav');

    //toggle adiciona caso não tenha remova caso tenha a classe active
    nav.classList.toggle('active');

}

button.addEventListener('click', toggleMenu );

