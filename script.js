// code below handles the toggle effect of the active nav on the header section

// selects all nav links and converts them to an array element right after
const navLinks = [...document.querySelectorAll(".nav-links")];

// attaches a click event listener to each nav link
function navToggleHandler() {
  navLinks.forEach((link) => {
    link.addEventListener("click", navToggler);
  });
}

function navToggler(event) {
  // removes nav-links-active class from previous link
  navLinks.forEach((link) => {
    if (link.classList.contains("nav-links-active")) {
      link.classList.remove("nav-links-active");
    }
  });

  // adds the nav-links-active class to the clicked nav-link element
  event.target.classList.add("nav-links-active");
}

navToggleHandler();
