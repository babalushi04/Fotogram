const dialogRef = document.getElementById("imageDialog");
let currentIndex = 0;


const IMAGES = [
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
  "./img/pics/albania12.jpg"
];

function openDialog(index) {
  currentIndex = index;
  updateImage();
  updateCounter();
  dialogRef.showModal();
}

function closeDialog() {
  dialogRef.close();
  currentIndex = 0;
  updateCounter();
}

function closeOnOutsideClick(event) {
  const DIALOG = document.getElementById("imageDialog");
  const RECT = DIALOG.getBoundingClientRect();

  const CLICKED_INSIDE =
    event.clientX >= RECT.left &&
    event.clientX <= RECT.right &&
    event.clientY >= RECT.top &&
    event.clientY <= RECT.bottom;

  if (!CLICKED_INSIDE) {
    DIALOG.close();
  }
}

function updateCounter() {
  document.getElementById('imageCounter').innerText = `${currentIndex + 1}/${IMAGES.length}`;
}

function updateImage() {
  document.getElementById('dialogImages').src = IMAGES [currentIndex];
}

function plusSlides() {
  currentIndex = (currentIndex + 1) % IMAGES.length;
  updateImage();
  updateCounter();
}

function minusSlides() {
  currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  updateImage();
  updateCounter();
}

function handleKey(event) {
  if (!dialogRef.open) return;

  if (event.key === 'ArrowRight') {
    plusSlides();
  } else if (event.key === 'ArrowLeft') {
    minusSlides();
  } else if (event.key === 'Escape') {
    closeDialog();
  }
}

function enterToOpen(event, index) {
  if (event.key === 'Enter') {
    openDialog(index);
  }
}
