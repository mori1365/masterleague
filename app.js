const header = document.querySelector('header');
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})
let menu = document.getElementById('menu');
let nav = document.querySelector(".nav");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle('open');
}
window.onscroll = () => {
    menu.classList.remove("bx-x");
    nav.classList.remove('open');
}