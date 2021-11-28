function setup() {
  createCanvas(600, 450);
  //background(200);
  let button_1;
  let button_2;
  let button_3;
  let button_back;
  let button_next_level;
}

function draw() {
  if (isMainScreen == 1) mainScreen();


  if (gameNumber == 1) pass;

  if (gameNumber == 2 && isCircle == 1) {
    background(200);
    fill(1);
    textSize(32);
    text('FMS Project App', 170, 50);

    noStroke();
    //Circle 1
    fill(r, g, b);
    circle(420, 200, 50);

    //Circle 2
    noStroke();
    fill(r1, g1, b1);
    circle(210, 120, 50);

    //Circle 3
    noStroke();
    fill(r2, g2, b2);
    circle(150, 280, 50);

    fill(0);
    textSize(30);
    text('Time: ' + timer, 450, 100);

    if (frameCount % 60 == 0 && timer > 0) {
      timer--;
    }

    if (timer == 0) {
      text("GAME OVER", width / 2, height * 0.7);
    }
  }

  if (gameNumber == 3 && isGameThree) {
    background(200);
    dotting()

    //circle 1
    noStroke();
    fill('red');
    ellipse(x, y, diameter, diameter);

    if (dragging) {
      x = mouseX;
      y = mouseY;
      noStroke();
      fill('red');
      ellipse(x, y, diameter, diameter);

    }

  }
}


