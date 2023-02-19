var prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos2 = window.pageYOffset;
  if (prevScrollpos2 > currentScrollPos2) {
    document.getElementById("head-hide2").style.top = "0";
  } else {
    document.getElementById("head-hide2").style.top = "-100px";
  }
  prevScrollpos2 = currentScrollPos2;
}



