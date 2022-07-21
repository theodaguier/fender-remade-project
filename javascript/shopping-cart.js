let shoppingCart = document.querySelector('.shopping-cart');
let cartMenu = document.querySelector('.cart-menu');
let cartClose = document.querySelector('.cart-close')

// Function Pop Menu

function cart () {
    if (cartMenu.classList.contains('noactive')) {
        cartMenu.classList.add('active');
        cartMenu.style.display = "flex";
    }else {
        cartMenu.classList.add('noactive');
        cartMenu.style.display = "none";
    }
}

shoppingCart.addEventListener('click', cart);
cartClose.addEventListener('click', function(){
    cartMenu.style.display = "none";
});
