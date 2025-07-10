const intro = document.getElementById('intro');
const main = document.getElementById('main-content');
const sound = document.getElementById('intro-sound');

// Auto play intro and then load main content
window.addEventListener('DOMContentLoaded', () => {
  sound.play();

  // Wait 2.5 seconds before switching to main
  setTimeout(() => {
    intro.style.display = 'none';
    main.style.display = 'block';
  }, 2500);
});
