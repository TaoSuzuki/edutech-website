// 共通ヘッダー・フッター読み込みスクリプト
function includeHTML(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      // ヘッダーの場合、動的JSも再実行
      if (id === 'header') {
        const script = document.createElement('script');
        script.id = 'mobileMenuToggle';
        script.textContent = `document.addEventListener("DOMContentLoaded", function () { const menuToggle = document.getElementById("menuToggle"); const mobileMenu = document.getElementById("mobileMenu"); menuToggle.addEventListener("click", function () { mobileMenu.classList.toggle("hidden"); const icon = menuToggle.querySelector("i"); if (mobileMenu.classList.contains("hidden")) { icon.classList.remove("ri-close-line"); icon.classList.add("ri-menu-line"); } else { icon.classList.remove("ri-menu-line"); icon.classList.add("ri-close-line"); } }); const mobileMenuLinks = mobileMenu.querySelectorAll("a"); mobileMenuLinks.forEach((link) => { link.addEventListener("click", function () { mobileMenu.classList.add("hidden"); const icon = menuToggle.querySelector("i"); icon.classList.remove("ri-close-line"); icon.classList.add("ri-menu-line"); }); }); });`;
        document.body.appendChild(script);
      }
    });
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById('header')) includeHTML('header', 'header.html');
  if (document.getElementById('footer')) includeHTML('footer', 'footer.html');
});
