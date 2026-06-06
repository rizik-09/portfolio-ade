const hiddenElements =
document.querySelectorAll("section");

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach(el => {

el.classList.add("hidden-section");

observer.observe(el);

});
