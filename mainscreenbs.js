
function mainScreen() {
  isMainScreen = 1;
  gameNumber = 0;
  game2count = 0;
  background(200);
  removeElements();

  //Title
  fill(1);
  textSize(32);
  text('FMS Project App', 170, 50);

  //Button 1
  button_1 = createButton('Trace the Line');
  button_1.position(100, 100);
  button_1.size(400, 90);
  button_1.style('background-color', 'red');
  button_1.style('font-size', '25px');
  button_1.style('font-color', 180, 300, 0);
  button_1.mousePressed(Instructions1);

  //Button 2
  button_2 = createButton('Click Dots Till Green');
  button_2.position(100, 220);
  button_2.size(400, 90);
  button_2.style('font-size', '25px');
  button_2.style('background-color', 'blue');
  button_2.mousePressed(Instructions2);

  //Button 3
  button_3 = createButton('Drag and Drop the Shape');
  button_3.position(100, 340);
  button_3.size(400, 90);
  button_3.style('font-size', '25px');
  button_3.style('background-color', 'green');
  button_3.mousePressed(Instructions3);

}
