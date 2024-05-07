function showSidebar() {
  var sidebar = document.getElementById("navBar");
  var shade = document.getElementById("navBar2");

  if (sidebar.style.left === "0px" || sidebar.style.left === "") {
    sidebar.style.left = "-75vw"; // Move the sidebar off-screen
    shade.style.display = "none";
  } else {
    sidebar.style.left = "0"; // Move the sidebar on-screen
    sidebar.style.display = "block";
    shade.style.display = "block";
  }
}
