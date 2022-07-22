let img_slider = document.getElementsByClassName('c-items');
let etape = 0;
let count = img_slider.length;

function enleverActiveImages() {
    for(let i = 0 ; i < count ; i++) {
        img_slider[i].classList.remove('active');
    }
}

// Add eventListener

let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

suivant.addEventListener('click', function() {
    etape++;
    if(etape >= count) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

precedent.addEventListener('click', function() {
    etape--;
    if (etape < 0) {
        etape = count-1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add('active');
})

// hover animation nav 

function anim() {
    precedent.classList.add('anim');
    suivant.classList.add('anim');
}

function stopAnim() {
    setTimeout(function() {
        precedent.classList.remove('anim');
        suivant.classList.remove('anim');
    },500);
}