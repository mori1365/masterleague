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
var fullscreen = document.getElementById('fullscreen');
var iframe = fullscreen.querySelector('iframe');
var closebtn = fullcontainer.querySelector(".closebtn");

function openfull(url){
    fullscreen.style.display="block";
    iframe.src = url;
}
function closebtnfull(){
    fullscreen.style.display="none";
    iframe.src = '';
}


        

