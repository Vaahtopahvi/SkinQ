// Sulkee listan jos käyttäj klikkaa listan ulkopuolelle
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
  
    
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //tällä listaa selataan
function browseList() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    dropdown = document.getElementById("myDropdown");
    if (input.value.trim() != '') {
      dropdown.classList.add('show');
    } else {
      dropdown.classList.remove('show');
    }

    //filteröidään pois muut mitä ei haeta
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }