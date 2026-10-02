const navlinks = document.getElementById("navlinks");
const navlinksholder = document.getElementById("navlinksholder")
const hamburgerbutton = document.getElementById("hamburgerbutton")
const btn = document.getElementById("expand-menu-button");




const mediaQuery = 'screen and (max-width: 800px)';

const mql = window.matchMedia(mediaQuery);



var smallScreen = "false";

const mediaChanged = (e) => {
    // reset whenever screen changes form
    document.getElementById("expand-menu-button").setAttribute("aria-expanded", "false");

    if (e.matches) {
        // small screen
        smallScreen = "true";
        navlinksholder.style.display = "none";
        // console.log("small screen");
    } else {
        navlinksholder.style.display = "block";
        // navlinks.style.transform = "translate(0px, -100%)";
        navlinks.style.transform = "translate(0px, 0px)";
        navlinksholder.style.height = "auto";
        navlinksholder.style.borderTop = "none";
        hamburgerbutton.style.background = "none";
        smallScreen = "false";
        // console.log("big screen");
    }
}

mql.addEventListener('change', mediaChanged);

// navlinksholder.style.background = "red";

// if (smallScreen == "true") {
//     btn.addEventListener("click", menuClick());
// }


function menuClick() {
    var x = btn.getAttribute("aria-expanded");

    if (x == "true") {
        // hide menu
        // need to get this work only when in thin mode

        x = "false"
        navlinks.style.transform = "translate(0px, -100%)";
        navlinksholder.style.display = "none";
        navlinksholder.style.height = "0px";
        navlinksholder.style.borderTop = "none";
        hamburgerbutton.style.background = "none";

    } else {
        // expand menu
        x = "true"
        navlinksholder.style.display = "block";

        navlinksholder.style.height = "auto";
        navlinks.style.transform = "translate(0px, 0px)";
        navlinksholder.style.borderTop = "2px solid rgb(129, 114, 101)";
        hamburgerbutton.style.background = "rgb(237, 230, 222)";

        //         window.setTimeout(function() {
        //   document.getElementById('fade3').className += ' fade-in'
        // }, 50)

    }

    document.getElementById("expand-menu-button").setAttribute("aria-expanded", x);
}

btn.addEventListener("click", menuClick);


// want to close menu when escape key is pressed

// function escKeyDown() {

// }

// document.addEventListener("keydown");