function Instructions1() {
  isMainScreen = 0;
  gameNumber = 1;
  removeElements();
  background(200);
  fill(1);
  textSize(32);
  text('Trace the Line', 170, 50);

  fill(1);
  textSize(20);
  text('Click the blue "Start" circle to start.', 50, 100);
  text('Press and hold left click over the black line to trace it.', 50, 130);
  text('Release the mouse over the red "End" circle to finish.', 50, 160);

  button_game1 = createButton('Play Trace the Line');
  button_game1.position(150, 200);
  button_game1.size(300, 50);
  button_game1.style('font-size', '25px');
  button_game1.style('background-color', 'green');
  button_game1.mousePressed(Exercise1);


  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'red');
  button_back.mousePressed(mainScreen);
}


function Exercise1() {
  isMainScreen = 0;
  gameNumber = 1;
  isNextLevel = 0;
  removeElements();
  background(200);
  fill(1);
  textSize(32);
  text('Trace the Line 1', 170, 50);

  fill(0, 0, 255);
  textSize(25);
  text('Start', 30, 65);

  fill(255, 0, 0);
  textSize(25);
  text('End', 484, 285);

  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'red');
  button_back.mousePressed(mainScreen);

  fill(200);
  strokeWeight(5);
  stroke(0);
  beginShape();
  curveVertex(90, 90); curveVertex(90, 80); curveVertex(50, 110);
  curveVertex(150, 140); curveVertex(60, 170); curveVertex(50, 200);
  curveVertex(60, 150); curveVertex(220, 220); curveVertex(300, 250);
  curveVertex(300, 200); curveVertex(500, 250); curveVertex(120, 90);
  endShape();
  noStroke();
  fill('blue');
  circle(89, 79, 25);
  fill('red')
  circle(502, 251, 25);

  //IMPORTANT countBlack = 3740

}

function Next1() {
  isNextLevel = 1;
  isEndScreen = 0;
  removeElements();
  background(200);

  fill(1);
  textSize(32);
  text('Trace the Line 2', 170, 50);

  fill(0, 0, 255);
  textSize(25);
  text('Start', 30, 65);

  fill(255, 0, 0);
  textSize(25);
  text('End', 484, 285);

  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'red');
  button_back.mousePressed(mainScreen);

  fill(200);
  strokeWeight(1);
  stroke(0);
  beginShape();
  curveVertex(90, 90); curveVertex(90, 80); curveVertex(50, 110);
  curveVertex(150, 140); curveVertex(60, 170); curveVertex(50, 200);
  curveVertex(60, 150); curveVertex(220, 220); curveVertex(300, 250);
  curveVertex(300, 200); curveVertex(500, 250); curveVertex(120, 90);
  endShape();

  noStroke();
  fill('blue');
  circle(89, 79, 25);
  fill('red');
  circle(502, 251, 25);

  //countBlack = 412
}

function CountPixel() {
  countGreen = 0;
  countBlack = 0;


  for (pixelX = 0; pixelX < 600; pixelX++) {
    for (pixelY = 0; pixelY < 450; pixelY++) {

      color = get(pixelX, pixelY);
      //counting black pixels
      if (color[0] == 0 && color[1] == 0 && color[2] == 0) {
        ++countBlack;
      }

      // if (color[0] == 0 && color[1] == 128 && color[2] == 0) {
      //   ++countGreen;
      // }
    }
  }

  print('countBlack: ' + countBlack);
  //print('countGreen: ' + countGreen);

  if (isNextLevel == 0) {
    completion = 100 - ((countBlack / 3740) * 100);
  }

  if (isNextLevel == 1) {
    completion = 100 - ((countBlack / 412) * 100);
  }

  return completion;
}