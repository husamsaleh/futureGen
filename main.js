
//Get the button:
mybutton = document.getElementById("totoppls");
btnzswitch = document.getElementById("modeSwitcher");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 560 || document.documentElement.scrollTop > 560) {
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

lightfunction = document.querySelector("#dark").addEventListener("click", () => {
  if (document.querySelector("#dark").click) {
    document.body.style =  'background-color: rgba(33, 33, 33, 1)  !important';
  }
})

darkfunction = document.querySelector("#light").addEventListener("click", () => {
  if (document.querySelector("#light").click) {
    document.body.style =  'background-color: white  !important';

  }
})