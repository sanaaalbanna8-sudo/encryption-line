(function () {
  var button = document.getElementById("theme");
  if (!button) return;
  var root = document.documentElement;

  function label() {
    button.textContent = root.classList.contains("dark") ? "الوضع الفاتح" : "الوضع الداكن";
  }

  label();
  button.addEventListener("click", function () {
    root.classList.toggle("dark");
    try {
      localStorage.setItem("encryption-explain-theme", root.classList.contains("dark") ? "dark" : "light");
    } catch (err) {}
    label();
  });
})();
