const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const closeNav = document.getElementById('closeNav');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('open');
});

closeNav.addEventListener('click', () => {
  navLinks.classList.remove('open');
});

// Slider auto-switch
let slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);



function openpop() {
  document.getElementById("popup").style.display = "block"
  document.getElementById("overlay").style.display = "block"
}
function closepop() {
  document.getElementById("popup").style.display = "none"
  document.getElementById("overlay").style.display = "none"

}
function togglelogoMenu(){
  document.getElementById("shopSide").classList.toggle("show")
  document.getElementById("overlays").classList.toggle("show")

}
document.getElementById("popup").addEventListener("click", function(e) {
  e.stopPropagation();
});

function openModal(imgElement) {
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
modal.style.display = "flex";
modalImg.src = imgElement.src;
}

function closeModal() {
document.getElementById("imageModal").style.display = "none";
}

function toggleNav() {
  const nav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
}