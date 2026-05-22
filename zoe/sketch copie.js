let angle = 0;
let w = 25;
let ma;

function setup() {
  let canvas = createCanvas(2000, 1000,WEBGL);
  canvas.parent ("canvas-conteneur");
  ma = atan(1 / sqrt(1));

  slider = createSlider(0, 255);
  slider.position(10, 800);
  slider.size(150);

}

function draw() {
  background(255);
  ortho();
  
  let q = slider.value();

  console.log(q);

  ambientLight(q);
  directionalLight(0,255,0,-1,-0.5);
  

  //translate(0,50,-50);
  rotateX(-QUARTER_PI);
  rotateY(ma);
  //rotate(angle*0.25);
  

  rectMode(CENTER);
  //rect(0, 0, 0, 100);
  
  rotateX((angle * 0.2));
  
  
  let offset = 0;
  for (let z=0 ;z < height; z+=w) {
    for (let x=0 ; x < width; x+=w) {
    push();
    let d = dist(x,z,width/2, height/2);
    let a = angle + offset + d/-150; 
    let h = map(sin(a), -1,1,0,100);
 
    translate(x-700+h, -400+h, d-150);
    specularMaterial(200,100,255);
    let c = map(h, 0, 100, 0, 255);
    fill(d*c,h, c*0.5);

    box(w-h, h+2, w-5);
  //rect(x-width/2 + w, 0, w-2 ,h);
    pop();
  
}
      offset += 0.1;
    }

  angle += 0.1;
}