
//Get the button:
mybutton = document.getElementById("totoppls");
btnzswitch = document.getElementById("modeSwitcher");





if (window.innerWidth > 601) {
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
      btnzswitch.style.display = "flex";
    } else {
      mybutton.style.display = "none";
      btnzswitch.style.display = "none";
    }
  }
  window.onscroll = function () { scrollFunction() };
}
if (window.innerWidth < 600) {
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      mybutton.style.display = "block";
      btnzswitch.style.display = "flex";
    } else {
      mybutton.style.display = "none";
      btnzswitch.style.display = "none";
    }
  }
  window.onscroll = function () { scrollFunction() };
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

lightfunction = document.querySelector("#dark").addEventListener("click", () => {
  localStorage.setItem("theme", "dark");
  document.body.style = 'background-color: rgba(14, 14, 14, 1)  !important';
  [...document.querySelectorAll(".mod_dark, .mod_dark > p")].forEach(element => element.style.color = "white");
});

darkfunction = document.querySelector("#light").addEventListener("click", () => {
  localStorage.setItem("theme", "light");
  document.body.style = 'background-color: white  !important';
  [...document.querySelectorAll(".mod_dark, .mod_dark > p")].forEach(element => element.style.color = "black");
});

// Retrieve the user's preference when the page loads
let theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.style = 'background-color: rgba(14, 14, 14, 1)  !important';
  [...document.querySelectorAll(".mod_dark, .mod_dark > p")].forEach(element => element.style.color = "white");
} else if (theme === "light") {
  document.body.style = 'background-color: white  !important';
  [...document.querySelectorAll(".mod_dark, .mod_dark > p")].forEach(element => element.style.color = "black");
}


window.onload = function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  }, false);
  document.addEventListener("keydown", function (e) {
    //document.onkeydown = function(e) {
    // "I" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      disabledEvent(e);
    }
    // "J" key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      disabledEvent(e);
    }
    // "S" key + macOS
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
      disabledEvent(e);
    }
    // "U" key
    if (e.ctrlKey && e.keyCode == 85) {
      disabledEvent(e);
    }
    // "F12" key
    if (event.keyCode == 123) {
      disabledEvent(e);
    }
  }, false);
  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
    e.preventDefault();
    return false;
  }
}

