const flashMessage = (text, type = 'warn', duration = 5000) => {

  const flashDiv = document.getElementById('flash');
  flashDiv.dataset.type = type;
  flashDiv.innerText = text;
  flashDiv.classList.add('visible');
  flashDiv.style.animationDuration = `${duration / 1000}s`;

  setTimeout(() => {
    flashDiv.classList.remove('visible');
  }, duration);

}
