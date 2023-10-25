
document.getElementById("menu-button").addEventListener("click", function () {
  var menu = document.getElementById("header_link_elements");
  if (menu.style.display === "block" || menu.style.display === "") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
