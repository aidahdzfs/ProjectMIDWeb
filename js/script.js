// toggle class active hamburger
const navbarNav = document.querySelector ('.navbar-nav');

//hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//toggle cls active searchform
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-btn').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//active shoppingcart
const shoppingCart = document.querySelector ('.shopping-cart');

document.querySelector('#shopping-cart-btn').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


//klik luar sidebar elemen
const hamburger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-btn');
const scb = document.querySelector('#shopping-cart-btn')

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if(!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});

//modal box
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailButton1 = document.querySelector('.item-detail-btn1');

itemDetailButton1.onclick = (e) => {
    itemDetailModal1.style.display = 'flex';
    e.preventDefault();
};
//tombol close click
document.querySelector('#close1').onclick = (e) => {
    itemDetailModal1.style.display = 'none';
    e.preventDefault();
};

//modal box
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButton2 = document.querySelector('.item-detail-btn2');

itemDetailButton2.onclick = (e) => {
    itemDetailModal2.style.display = 'flex';
    e.preventDefault();
};
//tombol close click
document.querySelector('#close2').onclick = (e) => {
    itemDetailModal2.style.display = 'none';
    e.preventDefault();
};
