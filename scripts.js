// メニューの開閉
function openMenu() {
  document.getElementById('menu').classList.add('open');
}

function closeMenu() {
  document.getElementById('menu').classList.remove('open');
}

// ローディングアニメーション
window.onload = function() {
  document.getElementById('loader').style.display = 'none';
}

// ダークモードの切り替え
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '10px';
darkModeToggle.style.backgroundColor = '#ff8c00';
darkModeToggle.style.color = '#fff';
darkModeToggle.style.border = 'none';
darkModeToggle.style.cursor = 'pointer';

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.innerText = 'Light Mode';
  } else {
    darkModeToggle.innerText = 'Dark Mode';
  }
});

