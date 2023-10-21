function toggleAccordion() {
  var accordionHeaders = document.getElementsByClassName("accordion-collapse");
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  if (screenWidth <= 450) {
    for (var i = 0; i < accordionHeaders.length; i++) {
      accordionHeaders[i].classList.remove("show");
    }
  } else {
    for (var j = 0; j < accordionHeaders.length; j++) {
      accordionHeaders[j].classList.add("show");
    }
  }
}

toggleAccordion();

window.addEventListener("resize", toggleAccordion);