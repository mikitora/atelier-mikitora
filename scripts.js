// メニュー（タブ）の開閉機能
document.getElementById("menuButton").addEventListener("click", function() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open"); // サイドバーを表示・非表示
});
