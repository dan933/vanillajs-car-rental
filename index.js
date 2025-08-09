let navButton = document.getElementById("btn-mobile-nav");
let closeButton = document.getElementById("btn-mobile-nav-close");
let overlay = document.getElementById("nav-overlay");
let compactNavButtons = document.getElementsByClassName("btn-close");

let content = document.querySelectorAll("main,footer,header");

if (navButton) {
  navButton.onclick = () => {
    overlay.classList.remove("hidden");

    for (let index = 0; index < content.length; index++) {
      const element = content[index];
      element.classList.add("hidden");
    }
  };
}

if (closeButton) {
  closeButton.onclick = () => {
    overlay.classList.add("hidden");

    for (let index = 0; index < content.length; index++) {
      const element = content[index];

      element.classList.remove("hidden");
    }
  };
}
