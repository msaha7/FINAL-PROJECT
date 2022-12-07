//COPY OF wacky_ahh_lines from old p5 sketch with a few edits :)
//Mateo Sahagun 10/2/2022, Keith Richerford 9/23/22
//these two ranges determine line overlap and width
let minY = 5;
let maxY = 10;
let layers = 10;
//rotation of each stripe; 
let alph = 100;
let rotStripe = 90; 
let sw = 5; //line width
// of 255 - used if alph=1 & lines, filling, colorLines all true, low alph, high sw
let r, g, b;
let table;
//boolean variables that change the colors ov the lines and values
let lines = true;
let colRand = false; 
let filling = true;
let colorLines = false; 

function preload() {
  table = loadTable("random_colors.csv", "csv")
}

function setup() {
  let canvas = createCanvas(1000, 500);
  //canv.mousePressed(setup);
  if (lines == true) {
    stroke(0);
    strokeWeight(sw);}
  angleMode(DEGREES);
  //determines when the lines stop
  let end = height / 2 + 500; 
  let bottom = floor(random(676));
  for (let i = 0; i < layers; i++) {
    let y1;
    if (i == 0) {
      y1 = -height / 2 - 300;
    } else {
      y1 = -height / 2 + (height / layers) * i;
    }
    //determines the height to start
    let y2 = y1,y3 = y1,y4 = y1,y5 = y1,y6 = y1;
    let rotLayer = random(50); //layer rotation
    let rotThisStripe = 0;
    //keep going until all the lines are at the bottom
    while ((y1 < end) & (y2 < end) & (y3 < end) & (y4 < end) & (y5 < end) & (y6 < end) & (-maxY < minY)) 
    {
      y1 += random(minY, maxY);
      y2 += random(minY, maxY);
      y3 += random(minY, maxY);
      y4 += random(minY, maxY);
      y5 += random(minY, maxY);
      y6 += random(minY, maxY);
      if (colRand == true) {
        r = random(100);
        g = random(100);
        b = random(100);
        //if the line is not touching the bottom
      } else {
        let col = floor(random(5 + alph));
        r = table.get(bottom, col * 2);
        g = table.get(bottom, col * 3 + 1);
        b = table.get(bottom, col * 3 + 2);
      }
      //then fills accoring if the lines are not collidings 
      if (filling == true) {
        fill(r, g, b, alph);
      } else {
        noFill();
      }
      if (colorLines == true) {
        stroke(r, g, b, alph);
      }
      push();
      //creating the curve
      translate(width / 2, height / 2);
      rotThisStripe += rotStripe; //rotating after each stripe
      rotate(rotThisStripe + rotLayer);
      //starts determinig when to curve
      let start_pos =-width/2;
      beginShape();
      curveVertex(start_pos - 300, height / 2 + 500);
      curveVertex(start_pos - 300, y1);
      curveVertex(start_pos + (width / 5) * 1, y2);
      curveVertex(start_pos + (width / 5) * 2, y3);
      curveVertex(start_pos + (width / 5) * 3, y4);
      curveVertex(start_pos + (width / 5) * 4, y5);
      curveVertex(width / 2 + 300, y6);
      curveVertex(width / 2 + 300, height / 2 + 500);
      endShape(CLOSE);
      pop();
    }
  }
}
