let buttonBurgers = document.querySelector('.burger-menu-buttons');
let headerMenu = document.querySelector('.header-menu');

buttonBurgers.onclick = function() {
    if (headerMenu.classList.contains('header-menu')){
        headerMenu.classList.toggle('menu-active');
        buttonBurgers.classList.toggle('burger-menu');
    }else {
        headerMenu.classList.toggle('header-menu');
    
    }

}
