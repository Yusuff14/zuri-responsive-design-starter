const nav_links = document.querySelector('.nav_links');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);

function show(){
    nav_links.style.display = 'flex';
    nav_links.style.top = '0';
}