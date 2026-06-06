const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".project-card img").forEach(img => {

  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });

});

modal.addEventListener("click", () => {
  modal.style.display = "none";
});

