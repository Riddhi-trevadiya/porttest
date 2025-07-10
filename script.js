window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const main = document.getElementById('main-content');
  const audio = document.getElementById('intro-sound');

  audio.play().catch(() => {});
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
  }, 1000);
});
