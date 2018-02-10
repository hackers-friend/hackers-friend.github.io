/* 
 * Copyright (C) 2018 Rajan Kumar
 *  rkking@live.com
 */


      /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("menu_i").setAttribute("onclick","closeNav()");
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu_i").setAttribute("onclick","openNav()");
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
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
};
var fsl = document.getElementById("fb");
var xx = "https://www.facebook.com/sharer.php?u="+window.location.href;
fsl.setAttribute("href",xx);
var tsl = document.getElementById("twitter");
var yy = "https://twitter.com/home?status="+window.location.href;
tsl.setAttribute("href",yy);
var lsl = document.getElementById("linkedin");
var zz = "https://www.linkedin.com/shareArticle?mini=true&url="+window.location.href+"&title=HackersFriend.com&summary=&source=";
lsl.setAttribute("href",zz);
document.getElementById("news").innerHTML="<marquee onmouseover=\"this.stop();\" onmouseout=\"this.start();\" scrollamount=\"10\"><a href=\"http://www.hackersfriend.com/workshops/w1.html\"><b style=\"color:red\">Upcoming workshop: </b>Python from zero to hero @ BTM Layout, Banglore</marquee></a>";