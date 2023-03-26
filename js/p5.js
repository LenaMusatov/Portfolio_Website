// Inspiratie uit: https://codepen.io/zainzafar/pen/oNypoEr
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


const colors = [
  "#7c4ab6",
  "#7c4ab6",
  "#7953bf",
  "#7953bf",
  "#755cc7",
  "#755cc7",
  "#7065cf",
  "#7065cf",
  "#6c6dd6",
  "#6c6dd6",
  "#6776dd",
  "#6776dd",
  "#627ee4",
  "#627ee4",
  "#5d85ea",
  "#5d85ea",
  "#578df0",
  "#578df0",
  "#5295f5",
  "#5295f5",
  "#4d9dfa",
  "#49a4ff"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();