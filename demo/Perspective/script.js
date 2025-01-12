const cube = document.querySelector('.cube');
let isAnimating = true;

cube.addEventListener('click', () => {
  isAnimating = !isAnimating;
  if (isAnimating) {
    cube.style.animation = 'rotate 10s infinite linear';
  } else {
    cube.style.animation = 'none';
  }
});
