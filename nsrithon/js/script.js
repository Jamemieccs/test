// Copy to clipboard
let contactInfo = document.querySelectorAll('#info>p');
contactInfo.forEach((info) => {
    info.addEventListener('click', () => {
        console.log('clicked');
        console.log(info.textContent);
        navigator.clipboard.writeText(info.textContent);
    })
})

// Scroll to top
let btnTop = document.querySelector('.scrollup');
window.onscroll = () => { scrollFunction() };
const scrollFunction = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        btnTop.classList.add('show');
    }
    else {
        btnTop.classList.remove('show');

    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    
    this.setTimeout(function(){
        loader.style.display = "none";
    },1500)
}) 
