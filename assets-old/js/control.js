let anim = true;

document.getElementById("toggleAnim").onclick = () => {
  anim = !anim;
  document.body.style.transition = anim ? "all .3s" : "none";
};

document.getElementById("toggleSound").onclick = () => {
  alert("Sound belum diaktifkan (placeholder)");
};
