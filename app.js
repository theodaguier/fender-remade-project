// Hamburger Menu 

let body = document.querySelector('body')
let toggleBtn = document.querySelector('.toggle');
let openBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.closeBtn');
let menu = document.querySelector('.menu--mobile--container')

function toggleMenu () {
    if (toggleBtn.classList.contains('noactive')) {
        toggleBtn.classList.remove('noactive');
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
        menu.style.display = "block";
        body.style.overflowY = "hidden"
    }else {
        toggleBtn.classList.add('noactive');
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
        menu.style.display = "none";
        body.style.overflowY = "auto"
    }
}

toggleBtn.addEventListener('click', toggleMenu);