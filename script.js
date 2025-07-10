// Theme toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.removeItem('theme');
  }
});

// Intro logic
const intro = document.getElementById('intro');
const main = document.getElementById('main-content');
const btn = document.getElementById('enter-btn');
const sound = document.getElementById('intro-sound');

btn.addEventListener('click', () => {
  intro.style.display = 'none';
  main.style.display = 'block';
  sound.play();
});
