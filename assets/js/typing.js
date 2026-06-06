const words = [
  "Belajar. Gagal. Ulangi.",
  "Building Skills Every Day.",
  "Front-End Developer."
];

let wordIndex = 0;
let charIndex = 0;

const typing =
document.getElementById("typing");

function type(){

  if(charIndex < words[wordIndex].length){

    typing.textContent +=
    words[wordIndex][charIndex];

    charIndex++;

    setTimeout(type,80);

  }else{

    setTimeout(erase,1500);

  }

}

function erase(){

  if(charIndex > 0){

    typing.textContent =
    words[wordIndex].substring(
      0,
      charIndex-1
    );

    charIndex--;

    setTimeout(erase,40);

  }else{

    wordIndex =
    (wordIndex+1)%words.length;

    setTimeout(type,400);

  }

}

type();
