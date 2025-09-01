function actionMenu() {
  const toggleMenuButton = document.getElementById("toggle-menu");
  const smallMenu = document.getElementById("small-menu");
  toggleMenuButton.addEventListener("click", ()=> {
    smallMenu.classList.toggle("hidden");
    smallMenu.classList.toggle("opacity-0");
    smallMenu.classList.toggle("pointer-events-none");
  });
}
actionMenu();
