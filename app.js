// Hamburger Menu 

let toggleBtn = document.querySelector('.toggle');
let openBtn = document.querySelector('.openBtn');
let closeBtn = document.querySelector('.closeBtn');

function toggleMenu () {
    if (toggleBtn.classList.contains('noactive')) {
        toggleBtn.classList.remove('noactive');
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
    }else {
        toggleBtn.classList.add('noactive');
        openBtn.style.display = "block";
        closeBtn.style.display = "none";
    }
}

toggleBtn.addEventListener('click', toggleMenu);
