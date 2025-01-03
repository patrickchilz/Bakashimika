const images = [...document.querySelectorAll('.image')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

images.forEach((item, i) => {
    item.addEventListener('click', () =>{
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) =>{
    let path = '../profiles/patrick/p${i+1}.jpg';
    largeImage.src = path;
    imageIndex.innerHTML = '0${i+1}';
    index = i;
}

closeBtn.addEventListener('click', () =>{
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () =>{
    if(index > 0){
        updateImage(index - 1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length -1){
        updateImage(index + 1);
    }
})