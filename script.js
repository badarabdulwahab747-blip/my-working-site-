function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("active");
}
function copyAllText() {
  const text = document.getElementById("content").innerText;
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("All text copied successfully!");
    })
    .catch(() => {
      alert("Copy failed. Please try manually.");
    });
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#navLinks a').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById("navLinks");
      if (nav) nav.classList.remove("active");
    });
  });
});