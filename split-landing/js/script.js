const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container-fluid');
const button = document.querySelector('.btn');




left.addEventListener('mouseenter', () => {
  left.classList.add('big');
  right.classList.add('small');

})

left.addEventListener('mouseleave', () => {
  left.classList.remove('big');
  right.classList.remove('small');
})

right.addEventListener('mouseenter', () => {
  right.classList.add('big');
  left.classList.add('small');
})

right.addEventListener('mouseleave', ()=> {
  right.classList.remove('big');
  left.classList.remove('small');
})
