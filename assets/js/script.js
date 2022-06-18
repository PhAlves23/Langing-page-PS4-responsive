const menuList = document.getElementById("menuList");
const menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", toggleMenu);

menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "130px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
