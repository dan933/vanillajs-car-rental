let navButton = document.getElementById("btn-mobile-nav");
let closeButton = document.getElementById("btn-mobile-nav-close");

let overlay = document.getElementById("nav-overlay");

let mainContent = document.getElementsByTagName("section");
let compactNavButtons = document.getElementsByClassName("btn-close");

if (navButton) {
  navButton.onclick = () => {
    overlay.classList.remove("hidden");
    for (let index = 0; index < mainContent.length; index++) {
      const element = mainContent[index];
      element.classList.add("hidden");
    }
  };
}

if (closeButton) {
  closeButton.onclick = () => {
    overlay.classList.add("hidden");
    for (let index = 0; index < mainContent.length; index++) {
      const element = mainContent[index];
      element.classList.remove("hidden");
    }
  };
}

for (let index = 0; index < compactNavButtons.length; index++) {
  const button = compactNavButtons[index];

  button.onclick = () => {
    overlay.classList.add("hidden");
    for (let index = 0; index < mainContent.length; index++) {
      const element = mainContent[index];
      element.classList.remove("hidden");
    }
  };
}
