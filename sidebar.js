function showSidebar() {
  var sidebar = document.getElementById("navBar");
  var shade = document.getElementById("navBar2");

  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block"; // Show the sidebar
    shade.style.display = "block";
  } else {
    sidebar.style.display = "none"; // Hide the sidebar
    shade.style.display = "none";
  }
}
