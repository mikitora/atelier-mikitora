document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("side-menu").classList.toggle("active");
});

document.addEventListener('click', function(e) {
    if (!document.getElementById('menu-icon').contains(e.target) && !document.getElementById('side-menu').contains(e.target)) {
        document.getElementById("side-menu").classList.remove("active");
    }
});
