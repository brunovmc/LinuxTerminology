
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 370 || document.documentElement.scrollTop > 370) {
    document.getElementById("inputTitle").style.fontSize = "28px";
      document.getElementById("inputTitle").style.margin = "0 0 0 65%";
      document.getElementById("myInput").style.width = "40%";

  } else {
    document.getElementById("inputTitle").style.fontSize = "60px";
      document.getElementById("inputTitle").style.margin = "0 0 0 23%";
        document.getElementById("myInput").style.width = "70%";

  }
}


function searchList() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("myUL");
  var text = myInput.innerHTML;
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

sortListDir();


function toggleDocs(event) {

    if (event.target && event.target.className == 'clickable-heading') {

        var next = event.target.nextElementSibling;


        if (next.style.display == "inline-block") {
            next.style.display = "none";

        } else {
            next.style.display = "inline-block";
        }
    }
}

document.addEventListener('click', toggleDocs, true);




function sidenav(event){

  if (event.target && event.target.className == 'sidenav') {

      var element = event.target;


      if (element.style.display == "inline-block") {
          element.style.display = "none";

      } else {
          element.style.display = "inline-block";
      }
  }
}
window.addEventListener('click', sidenav, true);
