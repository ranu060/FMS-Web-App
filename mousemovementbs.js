
function mousePressed() {
  c = get(mouseX, mouseY);
  print('color: ' + c);
  print('mouse position: ' + mouseX, mouseY)
  print('game number ' + gameNumber);

  //for level 2
  let c1 = get(420, 200);
  let c2 = get(210, 120);
  let c3 = get(150, 280);

  if (gameNumber == 1) {
    if (c[2] == 255) {
      print('Start drawing');
      isDraw = 1;
      //print('is draw: ' + isDraw);
    }

  }

  if (gameNumber == 2) {
    let canPress1 = 1;
    let canPress2 = 1;
    let canPress3 = 1;

    if (c1[0] == 0 && c1[1] == 250 && c1[2] == 0) {
      canPress1 = 0;
      circleGreen1 = true;
    }

    if (c2[0] == 0 && c2[1] == 250 && c2[2] == 0) {
      canPress2 = 0;
      circleGreen2 = true;
    }

    if (c3[0] == 0 && c3[1] == 250 && c3[2] == 0) {
      canPress3 = 0;
      circleGreen3 = true;
    }

    let d1 = dist(mouseX, mouseY, 420, 200);
    if (d1 < 25 && canPress1 == 1) {
      // Pick new random color values
      r = random(colorRed);
      g = random(colorGreen);
      b = random(colorBlue);
    }

    let d2 = dist(mouseX, mouseY, 210, 120);
    if (d2 < 25 && canPress2 == 1) {
      r1 = random(colorRed1);
      g1 = random(colorGreen1);
      b1 = random(colorBlue1);
    }

    let d3 = dist(mouseX, mouseY, 150, 280);
    if (d3 < 25 && canPress3 == 1) {
      r2 = random(colorRed2);
      g2 = random(colorGreen2);
      b2 = random(colorBlue2);
    }

  }

  if (gameNumber == 3) {
    if (dist(x, y, mouseX, mouseY) < diameter / 2) {
      dragging = true;

    }
  }
}


function mouseReleased() {
  c = get(mouseX, mouseY);
  //print(c);
  if (gameNumber == 1) {
    if (c[0] == 255) {
      print('Stop drawing')
      isDraw = 0;
      isEndScreen = 1;
    }

    if (isEndScreen == 1) {
      print('levelNum: ' + isNextLevel);

      score = CountPixel();
      score = nf(score, 2, 2);
      background(200);
      fill(0, 128, 0);
      textSize(32);
      text('GAME COMPLETE', 150, 90);
      fill(0, 128, 0);
      textSize(32);
      text('Score: ' + score + '%', 190, 135);

      if (isNextLevel == 0) {
        button_next_level = createButton('Next Level');
        button_next_level.position(200, 170);
        button_next_level.size(200, 40);
        button_next_level.style('font-size', '25px');
        button_next_level.style('background-color', 'green');
        button_next_level.mousePressed(Next1);
        isEndScreen = 0;
      }
    }


  }

  // HERRERERE
  if (gameNumber == 2) {
    if (circleGreen1 == true && circleGreen2 == true && circleGreen3 == true) {
      //background(200);
      isEndScreen = 1;
    }

    if (isEndScreen == 1) {
      isCircle = 0;
      background(200);
      fill(0, 128, 0);
      textSize(32);
      text('GAME COMPLETE', 150, 90);
      fill(0, 128, 0);
      textSize(32);
      text('Score: idk yet', 190, 135);

      button_next_level = createButton('Next Level');
      button_next_level.position(200, 225);
      button_next_level.size(200, 40);
      button_next_level.style('font-size', '25px');
      button_next_level.style('background-color', 'green');
      button_next_level.mousePressed(Next2);
      isEndScreen = 0;
      circleGreen1 = false;
      circleGreen2 = false;
      circleGreen3 = false;
    }



  }


  if (gameNumber == 3) {
    dragging = false;
  }

}


function mouseDragged() {
  c = get(mouseX, mouseY);

  // Game 1 Drag
  if (gameNumber == 1 && c[0] == 0 && isDraw == 1) {
    fill('green')
    circle(mouseX, mouseY, 5)
  }
}
