var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("head-container").style.top = "0";
  } else {
    document.getElementById("head-container").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}







