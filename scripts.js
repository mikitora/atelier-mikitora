
### 7. **`scripts.js` (JavaScript)**
スワイプやメニューの動作などを追加します。

```javascript
// メニューの表示切替
const menu = document.querySelector('.menu');
const toggleMenu = () => {
    menu.classList.toggle('show');
};

// メニューの開閉処理（例: ハンバーガーアイコンなど）
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
