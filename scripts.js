const sidebar = document.getElementById('sidebar');
const menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

let startX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const swipeDistance = endX - startX;

  if (swipeDistance > 100) {
    sidebar.classList.add('open');
  } else if (swipeDistance < -100) {
    sidebar.classList.remove('open');
  }
});
