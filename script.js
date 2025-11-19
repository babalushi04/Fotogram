let dialogRef = document.getElementById("imageDialog");
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

function newFunction() {
  let dialogRef = document.getElementById("imageDialog");
  const MAX = IMAGES.length;
  let currentIndex = 0;
  return { currentIndex, current, dialogRef };
}

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
  current = (current % IMAGES.length) + 1;
  updateCounter();
  currentIndex = (currentIndex + 1) % IMAGES.length;
  updateImage();
}

function minusSlides() {
  current = (current - 2 + IMAGES.length) % IMAGES.length + 1;
  updateCounter();
  currentIndex = (currentIndex - 1 + IMAGES.length) % IMAGES.length;
  updateImage();
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
