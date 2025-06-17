const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const close = document.querySelector(".close");

document.querySelectorAll(".projeto img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
