const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

document.querySelectorAll(".skill").forEach(skill => {
  skill.addEventListener("click", () => {
    modalText.innerText = skill.dataset.info;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

/* TUTUP JIKA KLIK AREA GELAP */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
