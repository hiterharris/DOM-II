// MOUSEOVER
document.querySelector('.logo-heading').addEventListener("mouseover", mouseOver);
document.querySelector('.logo-heading').addEventListener("mouseout", mouseOut);
function mouseOver() {
    document.querySelector('.logo-heading').style.borderBottom = '2px solid black';
  }
function mouseOut() {
document.querySelector('.logo-heading').style.borderBottom = '0px solid black';  
}

// KEYDOWN
document.querySelector('body').addEventListener("keydown", keydown);
function keydown() {
  document.querySelector('body').style.backgroundColor = "lightgrey";
}

// WHEEL
document.querySelector('.intro p').addEventListener("wheel", wheel);
function wheel() {
  this.style.fontSize = "24px";
}