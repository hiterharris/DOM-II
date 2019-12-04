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
const background = document.querySelector('*');
document.addEventListener('keydown', () => {
  if(background.style.backgroundColor != 'black'){
    background.style.backgroundColor = 'black';
    background.style.color = 'whitesmoke';
  }
});

document.addEventListener('keypress', () => {
  if(background.style.backgroundColor != 'white'){
    background.style.backgroundColor = 'white';
    background.style.color = 'black';
  }
});

// WHEEL
document.querySelector('.intro').addEventListener('wheel', (wheel));
function wheel() {
  this.style.color = 'red';
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
