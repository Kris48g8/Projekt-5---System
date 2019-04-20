window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function myFunctionTwo() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


/* vælg kollegaer knap */

/* show and hide funtion */




function dropdown() {
 document.getElementById("dropdownjavascript").classList.toggle("vis");
}

/* luk dropdown når man klikker udenfor boksen */

window.onclick = function(event) {
  if (!event.target.matches('.dropdownbutton')) {
    var dropdowns = document.getElementsByClassName("dropdownindhold");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('vis')) {
        openDropdown.classList.remove('vis');
      }
    }
  }
}




/* index alert/prompt */

function glemtbruger() {
    let bruger = prompt("Hvis du har glemt dit brugernavn, indtast din email her:");
}

function glemtkode() {
    let bruger = prompt("Hvis du har glemt din kode, indtast din email her:");
}






/* Kollega feedback valg */

function kollegaValgt() {
    document.getElementById("kolvalgt").innerHTML = "Kollega valgt"
    document.getElementById("valgtekol").innerHTML = "Lars Nielsen"
}




//Autosave funktion


document.addEventListener("DOMContentLoaded", function() {
    manuelAutosaver();
});
var active = false;
function manuelAutosaver() {
    window.setInterval(function() {
        if (active === false) {
            active = true;

            //Made with jQuery giving it an fade effect.
            //$('.notify').fadeIn();

            //This is raw Javascript, calling the css display on an object. This case setting it to block(visible)
            document.getElementById('notifier').style.display = "block";

            //This is a test to see if the function is working correctly in the console. You can remove this!
            console.log("active now TRUE" + active);
        } else {
            active = false;

            //Made with jQuery giving it an fade effect.
            //$('.notify').fadeOut();

            //This is raw Javascript, calling the css display on an object. This case setting it to none(invisible)
            document.getElementById('notifier').style.display = "none";

            //This is a test to see if the function is working correctly in the console. You can remove this!
            console.log("active now FALSE" + active);
        }
        }, 7500);
}