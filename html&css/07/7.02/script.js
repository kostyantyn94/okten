const header = document.querySelector('header');
const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
  if (window.scrollY > header.offsetHeight) {
    header.classList.add('small');
    container.classList.add('widther');
  } else {
    header.classList.remove('small');
    container.classList.remove('widther');
  }
});
