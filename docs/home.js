window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").className = "n-nav-fixed";
  } else {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").className = "n-nav";
  }
}