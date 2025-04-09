const images = document.getElementsByClassName('img');
let number = 0;

function changeImages() {
    images[number].classList.remove('active');
    number=(number+1)%images.length;
    images[number].classList.add('active');
}

setInterval(changeImages, 3000);
