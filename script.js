const dialogRef = document.getElementById("imageDialog");

function openDialog(index) {
    currentIndex = index;
    current = index + 1;
    updateImage();
    updateCounter();
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
    currentIndex = 0;
    current = 1;
}

let current = 1;
const max = 12;

function updateCounter() {
    document.getElementById('imageCounter').innerText = `${current}/${max}`;
}

function plusSlides() {
    current = (current % max) + 1;
    updateCounter();
}

function minusSlides() {
    current = (current - 2 + max) % max + 1;
    updateCounter();
}

const images = [
    "./img/pics/kosovo.1.jpg",
    "./img/pics/kosovo.2.1.jpg",
    "./img/pics/kosovo.3.jpg",
    "./img/pics/kosovo.4.jpg",
    "./img/pics/kosovo.5.jpg",
    "./img/pics/albania.6.jpg",
    "./img/pics/albania.7.1.jpg",
    "./img/pics/albania.8.jpg",
    "./img/pics/albania.9.jpg",
    "./img/pics/albania.10.jpg",
    "./img/pics/albania.11.1.jpg",
    "./img/pics/albania.12.jpg"
];

let currentIndex = 0;

function updateImage() {
    document.getElementById('dialogImages').src = images[currentIndex];
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}