let headerNav = document.querySelector('.header');

window.onscroll = function () {

    if (pageYOffset > 0){
        headerNav.style.position = "fixed";
    } else {
        headerNav.style.position = "sticky";
    }
}