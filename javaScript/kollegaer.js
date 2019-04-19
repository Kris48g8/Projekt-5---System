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