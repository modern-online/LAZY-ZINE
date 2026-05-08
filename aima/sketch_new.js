// FOR Loop Simulator

let taille = 60;
let x = 0;
let y = 0;
let repetitions = 0;
let alpha = 50;
let red = 80;
let blue = 10;
let prevBlue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  frameRate(120);
}

// FOR LOOP fait la même chose
// sauf d'un coup, dans un seul frame. 
function draw() {
  noStroke();
  ellipseMode(CENTER);
  fill(red, 0, blue, alpha);
  circle(x, y, taille);
  if (alpha <= 255) {
    alpha = alpha + 15;
  } 
  
  else if (y <= height) {
    y += taille;
    alpha = 50;
    red += 1;
    blue = 0;
    taille += .007;
  }
  
  else if (x <= width) {
    x += taille;
    y = 0;
    alpha = 50;
   red += 1;
    blue = blue + prevBlue + 10;
    prevBlue = blue + 10;
  }
}