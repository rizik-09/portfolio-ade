const text = [
  "Student RPL.",
  "Belajar. Gagal. Ulangi.",
  "Target: lebih jago dari kemarin."
];

let i = 0, j = 0;
const speed = 70;
const el = document.getElementById("typing");

function type() {
  if (j < text[i].length) {
    el.innerHTML += text[i][j];
    j++;
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    el.innerHTML = text[i].substring(0, j - 1);
    j--;
    setTimeout(erase, speed / 2);
  } else {
    i = (i + 1) % text.length;
    setTimeout(type, speed);
  }
}

type();
