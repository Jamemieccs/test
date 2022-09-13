// scroll botton
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

// typing effect
let typingEffect = new Typed(".multi-text", {
    strings: ["Developer", "Designer", "Coder", "Thinker"],
    loop: true,
    typeSpeed: 100,
    backDelay: 1500,
})

let contactInfo = document.querySelectorAll('#info>p');
contactInfo.forEach((info) => {
    info.addEventListener('click', () => {
        navigator.clipboard.writeText(info.textContent);
    })
})

const send = () => { alert(`nothing happened`) }