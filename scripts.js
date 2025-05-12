// メニューの表示切替
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

// メニューボタンがクリックされた時にメニューを表示
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// スワイプでメニューを表示（右スワイプ）
let touchStartX = 0;
let touchEndX = 0;

document.body.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.body.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) { // 右スワイプ
        menu.classList.add('show');
    } else if (touchStartX - touchEndX > 50) { // 左スワイプ
        menu.classList.remove('show');
    }
});

// ページ遷移時にメニューを隠す
window.addEventListener('load', () => {
    menu.classList.remove('show');
});
