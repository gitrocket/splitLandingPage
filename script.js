const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');


leftSide.addEventListener('mouseenter', () => {
    leftSide.classList.add('active');
})

leftSide.addEventListener('mouseleave', () => {
    leftSide.classList.remove('active');
})

rightSide.addEventListener('mouseenter', () => {
    rightSide.classList.add('active');
})

rightSide.addEventListener('mouseleave', () => {
    rightSide.classList.remove('active');
})
