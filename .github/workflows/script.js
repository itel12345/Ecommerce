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
