
//Get the button:
mybutton = document.getElementById("totoppls");
btnzswitch = document.getElementById("modeSwitcher");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    btnzswitch.style.display = "flex";
  } else {
    mybutton.style.display = "none";
    btnzswitch.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// lightfunction = document.querySelector("#dark").addEventListener("click", () => {
//   if (document.querySelector("#dark").click) {
//     document.body.style = 'background-color: rgba(14, 14, 14, 1)  !important';
//     [...document.querySelectorAll(".mod_dark, .mod_dark > p")].forEach(element => element.style.color = "white");

//   }
// })

// darkfunction = document.querySelector("#light").addEventListener("click", () => {
//   if (document.querySelector("#light").click) {
//     document.body.style = 'background-color: white  !important';
//     [...document.querySelectorAll(".mod_dark, .mod_dark > p")].forEach(element => element.style.color = "black");


//   }
// })
// Save the user's preference when they click the light or dark button
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
