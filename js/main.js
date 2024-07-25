
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


let text = document.getElementById("text");
let count = document.getElementById("count");


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    text.style.top = value * 1 + 'px'; 
    count.style.top = value * 0.9 + 'px';
})

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

