// VAR SECTION

// Selects the button that shows and hides the menu
var hamburgerMenu = document.querySelector("header button");

// Selects the PomPomPurin image
var pomPomPurin = document.querySelector("footer img:nth-of-type(2)");

// Selects media query that sees whether dark mode is turned on or off
var darkModeDetect = window.matchMedia("(prefers-color-scheme:dark)")

// Adds and removes class on clicks
hamburgerMenu.addEventListener("click", toggleMenu);

// Selects the whole document
var root = document.querySelector(":root");

// Selects Gudetama image in subscribe
var gudetama = document.querySelector(".home section img");



// OPEN NAVIGATION AND CHANGE ICON
function toggleMenu() {  
 // Puts the function on the right element
  var nav = document.querySelector("header nav ul:nth-of-type(2)");
  nav.classList.toggle("showMenu");

  // Changes icon from hamburger menu to closed
  var menuIcon = document.querySelector("header nav:nth-of-type(1) ul li:nth-of-type(1) img");
  if (nav.classList.contains("showMenu")) {
    menuIcon.src="../images/close.svg";
  } else {
    menuIcon.src="../images/hamburger-menu.svg";
  }
}



// POMPOMPURIN ANIMATION -> https://www.youtube.com/watch?v=_5Bu3JY-ZHc followed this tutorial and changed it to classes
// Defines the observer
observer = new IntersectionObserver((entries) => {
    // Shows in console log whether image is in viewport with all the details
    console.log(entries);

    // Adds the animation class to the image if any part of the image is in viewport
    if(entries[0].intersectionRatio > 0) {
        pomPomPurin.classList.add("pompompurin-animation");
    }
    // If it's not in viewport it gets removed
    else {
        pomPomPurin.classList.remove("pompompurin-animation");
    }
})

// Makes the observer observe whether the image is in the viewport
observer.observe(pomPomPurin);



// DARK MODE LIGHT MODE BUTTON
// Works roughly the same as the header button
var darkMode = document.querySelector('header nav ul:nth-of-type(2) li button');
darkMode.addEventListener("click", darkModeToggle);

function darkModeToggle() {
    root.classList.toggle("darkMode");

    // Changes text on button press
    if (root.classList.contains("darkMode")) {
      darkMode.innerText ="Light mode";
    } else {
      darkMode.innerText ="Dark mode";
    }
}



// DARK MODE DETECTOR -> https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia used this for some guidance
function darkModeAuto() {
  if (darkModeDetect.matches) { 
    root.classList.add("darkMode");
  } else {
    root.classList.remove("darkMode");
  }

  // Changes text on auto
  if (root.classList.contains("darkMode")) {
    darkMode.innerText ="Light mode";
  } else {
    darkMode.innerText ="Dark mode";
  }
}

// Triggers function
darkModeDetect.addEventListener("change", darkModeAuto);



// GUDETAMA THEME SONG EASTER EGG
gudetama.addEventListener("click", () => {
  var gudetamaTheme = new Audio("./sfx/gudetama-theme.mp3"); //src: https://www.youtube.com/watch?v=GKokWX011B4
  gudetamaTheme.play();
})