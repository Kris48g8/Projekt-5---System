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


//Autosave funktion


document.addEventListener("DOMContentLoaded", function() {
    manuelAutosaver();
});
var active = false;
function manuelAutosaver() {
    window.setInterval(function() {
        if (active === false) {
            active = true;
            /* Javascript der kalder hvordan et css skal display i dette tilfælde "block"(visible) */
            document.getElementById('notifier').style.display = "block";
        } else {
            active = false;
            /* Javascript der kalder hvordan et css skal display i dette tilfælde "none"(invisible) */
            document.getElementById('notifier').style.display = "none";

        }
        }, 2500);
}