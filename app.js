const header = document.querySelector('.nav');
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.scrollY > 140)
})


const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
const ss = document.querySelector(".ss");
const sosha = document.querySelector(".sosha");
ss.addEventListener("click", function(){
    if(sosha.style.opacity==="0"){
        sosha.style.opacity= "1"
    }else{
        sosha.style.opacity = "0"
    }
});


// master
var fullscreen = document.getElementById('fullscreen');
var iframe = fullscreen.querySelector('iframe');
var closebtn = fullcontainer.querySelector(".closebtn");

function openfullscreen(url){
    fullscreen.style.display="block";
    iframe.src = url;
}
function closebtnfull(){
    fullscreen.style.display="none";
    iframe.src = '';
}




    
  