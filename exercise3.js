

class Dot {
  constructor(id, xs, ys, width) {
    this.xs = xs
    this.ys = ys
    this.width = width;
    this.id = id;
  }
  place() {
    fill('blue')
    ellipse(this.xs, this.ys, this.width, this.width)
  }
  remove() {
    fill('grey')
    this.width = 0;
    ellipse(this.xs, this.ys, this.width, this.width)
  }
}

function Exercise3() {
  removeElements();
  isGameThree = true

  ellipse(x, y, diameter, diameter);

  // Back Button
  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'green');
  button_back.mousePressed(mainScreen);
}

function dotting() {
  let dot = new Dot(0, 100, 200, list[0]); let dot1 = new Dot(1, 200, 50, list[1]);
  let dot2 = new Dot(2, 300, 100, list[2]); let dot3 = new Dot(3, 380, 280, list[3]);
  let dot4 = new Dot(4, 150, 300, list[4]); let dot5 = new Dot(5, 440, 150, list[5]);
  let derk = new Dot(6, 304, 180, list[6]);

  dot.place(); dot1.place();
  dot2.place(); dot3.place();
  dot4.place(); dot5.place();
  derk.place();

  if (abs(x - dot.xs) <= 28 && abs(y - dot.ys) <= 28) list[0] = 0;
  if (abs(x - dot1.xs) <= 28 && abs(y - dot1.ys) <= 28) list[1] = 0;
  if (abs(x - dot2.xs) <= 28 && abs(y - dot2.ys) <= 28) list[2] = 0;
  if (abs(x - dot3.xs) <= 28 && abs(y - dot3.ys) <= 28) list[3] = 0;
  if (abs(x - dot4.xs) <= 28 && abs(y - dot4.ys) <= 28) list[4] = 0;
  if (abs(x - dot5.xs) <= 28 && abs(y - dot5.ys) <= 28) list[5] = 0;
  if (abs(x - derk.xs) <= 28 && abs(y - derk.ys) <= 28) list[6] = 0;
}
function Instructions3() {
  isMainScreen = 0;
  gameNumber = 3;
  removeElements();
  background(200);
  fill(1);
  textSize(32);
  text('Trace the Line', 170, 50);

  fill(1);
  textSize(20);
  text('Click and hold the red circle to begin.', 50, 100);
  text('Drag red circle to blue circles until they all disappear', 50, 130);
  text('Click the button below to begin', 50, 160);

  button_game3 = createButton('Play Drag and Drop');
  button_game3.position(150, 200);
  button_game3.size(300, 50);
  button_game3.style('font-size', '25px');
  button_game3.style('background-color', 'green');
  button_game3.mousePressed(Exercise3);


  // Back Button
  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'green');
  button_back.mousePressed(mainScreen);
}
