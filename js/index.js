tailwind.config = {
  theme: {
    extend: {
      colors: {

      }
    }
  }
}
//

window.onscroll = function () { showBgMenu() };
window.onload = function () { showBgMenu() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function showBgMenu() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("bg-[#00000099]", "top-0")
  } else {
    navbar.classList.remove("bg-[#00000099]", "top-0");
  }
}

document.getElementById("menu-toggle").onclick = function () {
  document.getElementById("modal-wrapper").classList.remove("hidden");
}
document.getElementById("menu-close").onclick = function () {
  document.getElementById("modal-wrapper").classList.add("hidden");
}

document.getElementsByClassName("menu-wrapper")[0].onclick = function () {
  document.getElementById("modal-wrapper").classList.add("hidden");
}