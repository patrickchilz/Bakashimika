let launchDate = new Date("Nov 10, 2024 12:00:00").getTime();

let timer = setInterval(tick, 1000);
function tick (){
    let now = new Date().getTime();
    let t = launchDate - now;

    if(t > 0){
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        let secs = Math.floor((t % (1000 * 60 )) / 1000);
        if (secs < 10) { secs = "0" + secs; }

        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector('#count').innerText = time;
    }
}

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let sky = document.getElementById("sky");
let guy = document.getElementById("guy");
let text = document.getElementById("text");
let count = document.getElementById("count");


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    sky.style.top = value * 0.5 + 'px';
    guy.style.left = value * 0.5 + 'px';
    text.style.top = value * 1 + 'px'; 
    count.style.top = value * 0.9 + 'px';
})
