// CLICK
document.querySelectorAll('p').forEach(item => {
  item.addEventListener('click', () => {
    item.style.color = 'blue';
  });
});

// MOUSEOVER
const logo = document.querySelector('.logo-heading');
logo.addEventListener("mouseover", () => {
  logo.style.borderBottom = '2px solid black';
});

// MOUSEOUT
logo.addEventListener("mouseout", () => {
  logo.style.borderBottom = '0px solid black';
});

// KEYDOWN
const body = document.querySelector('body');
body.addEventListener("keydown", () => {
  body.style.backgroundColor = "lightgrey";
});

// WHEEL
document.querySelector('.intro').addEventListener('wheel', (wheel));
function wheel() {
  this.style.color = 'blue';
}

// DOUBLECLICK
const newImg = document.querySelector('.intro img');
newImg.addEventListener('dblclick', () => {
  newImg.src= 'img/bus2.png';
});

// RESIZE
window.addEventListener('resize', () => {
  newImg.src = 'img/bus2.png';
});

// DRAGSTART
const imgContent = document.querySelector('.img-content img');
imgContent.addEventListener('dragstart', function(event) {
  event.target.src = 'img/bus2.png';
}, false);

// DRAGEND
imgContent.addEventListener('dragend', function(event) {
  event.target.src = 'img/adventure.jpg';
}, false);

// LOAD
window.addEventListener('load', () => {
  console.log('Page is fully loaded!');
});
