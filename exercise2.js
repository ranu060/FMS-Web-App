function Instructions2() {
  isMainScreen = 0;
  gameNumber = 2;
  removeElements();
  background(200);
  fill(1);
  textSize(32);
  text('Click Dots Till Green', 170, 50);

  fill(1);
  textSize(20);
  text('Click on the dots until they turn green before the timer', 50, 100);
  text('runs out.', 50, 130);

  button_game1 = createButton('Play Click Dots Till Green');
  button_game1.position(125, 200);
  button_game1.size(350, 50);
  button_game1.style('font-size', '25px');
  button_game1.style('background-color', 'green');
  button_game1.mousePressed(Exercise2);


  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'red');
  button_back.mousePressed(mainScreen);
}

function Exercise2() {
  isMainScreen = 0;
  gameNumber = 2;
  isCircle = 1;
  print('game', gameNumber);

  r = 0;
  b = 0;
  g = 0;
  r1 = 0;
  b1 = 0;
  g1 = 0;
  r2 = 0;
  b2 = 0;
  g2 = 0;

  removeElements();

  // Back Button
  button_back = createButton('Home');
  button_back.position(100, 340);
  button_back.size(400, 70);
  button_back.style('font-size', '25px');
  button_back.style('background-color', 'blue');
  button_back.mousePressed(mainScreen);

}

function Next2() {

}
