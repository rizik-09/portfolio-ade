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

function reveal() {

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(item => {

    const windowHeight = window.innerHeight;
    const elementTop = item.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", reveal);

reveal();


