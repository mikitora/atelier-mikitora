function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  const content = document.getElementById('mainContent');
  menu.classList.toggle('active');
  content.classList.toggle('shifted');
}
