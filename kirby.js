// Bilder
var imgstartname = loadImage("schriftKirby.png");
var imgstartname2 = loadImage("SuperCoin.png");
var imgplay = loadImage("play.png");
var imgcontrols = loadImage("controls.png");
var imggameover = loadImage("gameover.png");
var imgvictory = loadImage("victory.png");
var imgendkirby = loadImage("ende.png");
var imgrestart = loadImage("restart.png");
var imgsad = loadImage("sadkirby.png");
var imglvl1 = loadImage("Level1.png");
var imglvl2 = loadImage("Level2.png");
var imglvl3 = loadImage("Level3.png");
var schild1 = loadImage("schildlvl1.png");
var schild2 = loadImage("schildlvl2.png");
var schild3 = loadImage("schildlvl3.png");
var imgstanding = loadImage("stehen.png");
var imgleft = loadImage("left.png");
var imgright = loadImage("right.png");
var imgpfeil1 = loadImage("pfeill.png");
var imgpfeil2 = loadImage("pfeilr.png");
var imgfly = loadImage("flying.png");
var imgspace = loadImage("space.png");
var imgback = loadImage("back.png");
var imgwalkingleft = loadImage("laufenlinks.png");
var imgwalkingleft2 = loadImage("laufenlinks2.png");
var imgwalkingright = loadImage("laufenrechts.png");
var imgwalkingright2 = loadImage("laufenrechts2.png");
var imgflying = loadImage("fliegenhoch.png");
var imgflying2 = loadImage("fliegenhoch2.png");
var imgflyingleft = loadImage("fliegenlinks.png");
var imgflyingleft2 = loadImage("fliegenlinks2.png");
var imgflyingright = loadImage("fliegenrechts.png");
var imgcoin = loadImage("coin.png");
var imgflyingright2 = loadImage("fliegenrechts2.png");
var imgbox = loadImage("box.png");
var imgausdauer = loadImage("lowendurance.png");
var imgstachel = loadImage("stachel.png");
var imgwaddledeelinks = loadImage("monster.png");
var imgwaddledeerechts = loadImage("monster2.png");
var imgfliegelinks = loadImage("monsterfliege.png");
var imgfliegerechts = loadImage("monsterfliege2.png");
var imgkracko = loadImage("monster3.png");
var imgwarning = loadImage("warning.png");
// Counter für Bilderwechsel bei Bewegung
var countl = 0;
var countr = 0;
var countf = 0;
var countfl = 0;
var countfr = 0;
var countwaddledee = 0;
var countfliege = 0;
var countkracko = 0;
// Zähler wie viele Coins eingesammelt sind
var coinzähler = 0;
// Fliegen, Stehen und Fallen
var flying = false;
var flyingleft = false;
var flyingright = false;
var standing = false;
var fall = 0;
var fallstart = false;
// Game Over
var over = false;
// für Startscreen
var startlvl1 = false;
var startlvl2 = false;
var startlvl3 = false;
var controlstart = false;
var back = false;
var start = false;
// Endscreen und back zu Menü
var end = false;
// Kirbys Position am Anfang in Lvl1
var kirbyX = -20;
var kirbyY = 235;
// Ausdauer beim Fliegen
var aus = 0;
// Vektoren für Coinhit
var vkirby = createVector();
var vcoin = createVector(557, 177);
var vcoin2 = createVector(292, 328);
var vcoin3 = createVector(292, 407);
var vcoin4 = createVector(874, 123);
var vwaddledee = createVector();
var vfliege = createVector();
var vkracko = createVector();
// Coin
var coinx = 0;
var coiny = 0;
var coincollect = false;
var coincollect2 = false;
var coincollect3 = false;
var coincollect4 = false;
// Waddle Dee
var waddledeex = 95;
var waddledeey = 235;
// Fliege
var fliegex = 20;
var fliegey = 50;
// Kracko
var krackox = 360;
var krackoy = 370;

// Funktionen

// Control Screen
function controls() {
  background(0);
  image(imgcontrols, 398, 40);
  image(imgleft, 150, 270);
  image(imgright, 350, 270);
  image(imgfly, 625, 265);
  image(imgback, 20, 20);
  image(imgspace, 625, 218);
  image(imgpfeil1, 165, 218);
  image(imgpfeil2, 365, 218);
  noFill();
  stroke(255);
  strokeWeight(1);
  rect(150, 200, 50, 50);
  rect(350, 200, 50, 50);
  rect(550, 200, 200, 50);
  if (mouseX >= 20 && mouseX <= 60 && mouseY >= 20 && mouseY <= 40) {
    strokeWeight(2);
    line(10, 50, 70, 50);
  }
}
// Wenn man auf play,controls oder back klickt
function mousePressed() {
  if (
    mouseX >= 430 &&
    mouseX <= 490 &&
    mouseY >= 270 &&
    mouseY <= 310 &&
    over === false
  ) {
    start = true;
    startlvl1 = true;
  }
  if (
    mouseX >= 400 &&
    mouseX <= 515 &&
    mouseY >= 360 &&
    mouseY <= 395 &&
    start === false
  ) {
    controls();
    controlstart = true;
    back = false;
  }
  if (
    mouseX >= 20 &&
    mouseX <= 60 &&
    mouseY >= 20 &&
    mouseY <= 40 &&
    controlstart === true
  ) {
    back = true;
  }
  if (
    mouseX >= 430 &&
    mouseX <= 530 &&
    mouseY >= 250 &&
    mouseY <= 280 &&
    over === true
  ) {
    start = true;
    startlvl1 = true;
    over = false;
    countl = 0;
    countr = 0;
    countf = 0;
    countfl = 0;
    countfr = 0;
    coinzähler = 0;
    flying = false;
    flyingleft = false;
    flyingright = false;
    standing = false;
    fall = 0;
    fallstart = false;
    kirbyX = -20;
    kirbyY = 235;
    aus = 0;
    coincollect = false;
    startlvl2 = false;
    startlvl3 = false;
  }
  if (
    mouseX >= 410 &&
    mouseX <= 450 &&
    mouseY >= 440 &&
    mouseY <= 460 &&
    end === true
  ) {
    countl = 0;
    countr = 0;
    countf = 0;
    countfl = 0;
    countfr = 0;
    countwaddledee = 0;
    countfliege = 0;
    countkracko = 0;
    coinzähler = 0;
    flying = false;
    flyingleft = false;
    flyingright = false;
    standing = false;
    fall = 0;
    fallstart = false;
    over = false;
    startlvl1 = false;
    startlvl2 = false;
    startlvl3 = false;
    controlstart = false;
    back = false;
    start = false;
    end = false;
    kirbyX = -20;
    kirbyY = 235;
    aus = 0;
    vkirby = createVector();
    vcoin = createVector(557, 177);
    vcoin2 = createVector(292, 328);
    vcoin3 = createVector(292, 407);
    vcoin4 = createVector(874, 123);
    vwaddledee = createVector();
    vfliege = createVector();
    vkracko = createVector();
    coinx = 0;
    coiny = 0;
    coincollect = false;
    coincollect2 = false;
    coincollect3 = false;
    coincollect4 = false;
    waddledeex = 95;
    waddledeey = 235;
    fliegex = 20;
    fliegey = 50;
    krackox = 360;
    krackoy = 370;
  }
}
// Startscreen
function startscreen() {
  background(0);
  image(imgstartname, 310, 60);
  image(imgstartname2, 295, 160);
  image(imgplay, 430, 270);
  image(imgcontrols, 400, 360);
  if (mouseX >= 430 && mouseX <= 490 && mouseY >= 270 && mouseY <= 310) {
    stroke(255);
    strokeWeight(3);
    line(420, 320, 495, 320);
  }
  if (mouseX >= 400 && mouseX <= 515 && mouseY >= 360 && mouseY <= 395) {
    line(390, 405, 525, 405);
  }
}
// Level 1
function level1() {
  image(imglvl1, 0, 0, imglvl1.width / 6, imglvl1.height / 6);
  menübar();
  image(schild1, 150, 0, schild1.width / 10, schild1.height / 10);
}
// Level 2
function level2() {
  image(imglvl2, 0, 0, imglvl2.width / 6, imglvl2.height / 6);
  menübar();
  image(schild2, 350, 0, schild2.width / 10, schild2.height / 10);
  coincollect = false;
}
// Level 3
function level3() {
  image(imglvl3, 0, 0, imglvl3.width / 6, imglvl3.height / 6);
  menübar();
  image(schild3, 495, 0, schild3.width / 10.5, schild3.height / 10.5);
  coincollect = false;
}
// Coin
function coin() {
  if (coincollect === false && startlvl1 === true) {
    image(
      imgcoin,
      coinx + 220,
      coiny - 10,
      imgcoin.width / 8,
      imgcoin.height / 8
    );
  }
  if (coincollect2 === false && startlvl2 === true) {
    image(
      imgcoin,
      coinx - 45,
      coiny + 140,
      imgcoin.width / 8,
      imgcoin.height / 8
    );
  }
  if (coincollect3 === false && startlvl3 === true) {
    image(
      imgcoin,
      coinx - 45,
      coiny + 220,
      imgcoin.width / 8,
      imgcoin.height / 8
    );
  }
  if (coincollect4 === false && startlvl3 === true) {
    image(
      imgcoin,
      coinx + 537,
      coiny - 65,
      imgcoin.width / 8,
      imgcoin.height / 8
    );
  }
}
// Menübar unten
function menübar() {
  fill(248, 169, 223);
  stroke(0);
  rect(0, 510, 912, 90);
  fill(0);
  noStroke();
  textSize(30);
  text(coinzähler + " x", 770, 563);
  image(imgcoin, 320, 255, imgcoin.width / 5, imgcoin.height / 5);
  fill(255, 100, 117);
  noStroke();
  rect(100, 540, aus + 150, 30, 0, 20, 20, 0);
  noFill();
  stroke(255, 13, 89);
  rect(100, 540, 150, 30, 0, 20, 20, 0);
  image(imgbox, 10, 517, imgbox.width / 16, imgbox.height / 16);
  if (aus < -100) {
    image(
      imgausdauer,
      300,
      537,
      imgausdauer.width / 10,
      imgausdauer.height / 10
    );
  }
}
// Game Over
function gameover() {
  background(0);
  image(imggameover, 200, 50);
  image(imgsad, 0, 130, imgsad.width / 6, imgsad.height / 6);
  image(imgrestart, 430, 250);
  if (mouseX >= 430 && mouseX <= 530 && mouseY >= 250 && mouseY <= 280) {
    line(420, 290, 540, 290);
  }
}
// Endscreen
function endscreen() {
  background(0);
  image(imgvictory, 330, 50);
  image(imgendkirby, 0, 130, imgendkirby.width / 6, imgendkirby.height / 6);
  image(imgback, 410, 440);
  if (mouseX >= 410 && mouseX <= 450 && mouseY >= 440 && mouseY <= 465) {
    stroke(255);
    strokeWeight(3);
    line(400, 470, 460, 470);
  }
}

function draw() {
  clear();
  background(0);
  startscreen();
  // LEVEL 1 wann aufgerufen

  if (start === true && startlvl1 === true) {
    // Kreise Coin und Kirby - für Vektoren
    noFill();
    stroke(255);
    ellipse(kirbyX + 54.5, kirbyY + 29, 58);
    ellipse(557, 177, 30);
    level1();
    // Spikes für GetPixel
    fill(190, 190, 190);
    noStroke();
    triangle(449, 75, 470, 75, 463, 135);
    triangle(470, 75, 496, 75, 486, 121);
    triangle(495, 75, 513, 75, 506, 111);
    triangle(512, 75, 535, 75, 526, 121);
    triangle(532, 75, 558, 75, 549, 131);
    triangle(557, 75, 575, 75, 569, 115);
    triangle(574, 75, 596, 75, 588, 121);
    triangle(450, 256, 462, 224, 469, 256);
    triangle(468, 256, 482, 209, 490, 256);
    triangle(488, 256, 505.8, 197, 515, 256);
    triangle(514, 256, 525.5, 225, 531, 256);
    triangle(530, 256, 545, 210, 553, 256);
    triangle(552, 256, 569, 210, 578, 256);
    triangle(577, 256, 591, 202, 599, 256);
    // Bild Spikes
    image(imgstachel, 0, 0, imgstachel.width / 6, imgstachel.height / 6);
  }

  // LEVEL 2 wann aufgerufen

  if (start === true && startlvl2 === true) {
    // Kreise Coin, Waddledee & Fliege = gleich
    noFill();
    stroke(255);
    ellipse(292, 328, 30);
    ellipse(waddledeex + 54.5, waddledeey + 29, 50);
    level2();
    startlvl1 = false;
  }

  // LEVEL 3 wann aufgerufen

  if (start === true && startlvl3 === true) {
    ellipse(krackox + 106, krackoy + 60, 100);
    ellipse(292, 407, 30);
    ellipse(874, 123, 30);
    level3();
    image(
      imgkracko,
      krackox,
      krackoy,
      imgkracko.width / 25,
      imgkracko.height / 25
    );
    startlvl1 = false;
    startlvl2 = false;
  }
  // Coin aufrufen
  coin();
  // Controlscreen und Back-Funktion
  if (controlstart === true) {
    controls();
  }
  if (back === true) {
    controlstart = false;
  }
  // Game Over
  if (over === true) {
    start = false;
    gameover();
  }
  // Endscreen
  if (end === true) {
    endscreen();
    start = false;
  }
  // Fallen vom Block
  if (fallstart === true) {
    fall = fall + 0.3;
    kirbyY = kirbyY + fall;
  }
  // Ausdauer und Tod durch Ausdauer
  if (flying === true && keyIsDown(32) && startlvl1 === true) {
    aus = aus - 1;
    if (aus < -150) {
      over = true;
      startlvl1 = false;
    }
  }
  if (flying === true && keyIsDown(32) && startlvl2 === true) {
    aus = aus - 0.6;
    if (aus < -150) {
      over = true;
      startlvl2 = false;
    }
  }
  if (flying === true && keyIsDown(32) && startlvl3 === true) {
    aus = aus - 0.45;
    if (aus < -150) {
      over = true;
      startlvl3 = false;
    }
  }

  // Punkte an Kirby für Tot Level 1
  var pixelmitteoben = get(kirbyX + 54, kirbyY + 7);
  var pixelmitte = get(kirbyX + 55, kirbyY + 10);
  var pixelobenlinks = get(kirbyX + 30, kirbyY + 10);
  var pixelobenrechts = get(kirbyX + 78, kirbyY + 10);
  var pixelmitteunten = get(kirbyX + 56, kirbyY + 58);

  // Bedienung

  // Links und Rechts nicht gedrückt
  if (
    !keyIsDown(37) &&
    !keyIsDown(39) &&
    flying === false &&
    flyingleft === false &&
    flyingright === false &&
    start === true
  ) {
    image(
      imgstanding,
      kirbyX,
      kirbyY,
      imgstanding.width / 50,
      imgstanding.height / 50
    );
    standing = true;
    flying = false;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }
  //Leertaste nicht gedrückt
  else if (!keyIsDown(32) && flying === true && start === true) {
    image(
      imgflying2,
      kirbyX,
      kirbyY,
      imgflying2.width / 50,
      imgflying2.height / 50
    );
    kirbyY = kirbyY + 2;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }
  // Links laufen
  if (
    keyIsDown(37) &&
    flying === false &&
    flyingleft === false &&
    start === true
  ) {
    if (countl >= 0 && countl <= 6) {
      image(
        imgwalkingleft,
        kirbyX,
        kirbyY,
        imgwalkingleft.width / 50,
        imgwalkingleft.height / 50
      );
    } else if (countl > 6 && countl <= 12) {
      image(
        imgwalkingleft2,
        kirbyX,
        kirbyY,
        imgwalkingleft2.width / 50,
        imgwalkingleft2.height / 50
      );
    }
    if (countl >= 12) {
      countl = 0;
    }
    countl++;
    kirbyX = kirbyX - 3;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }
  // Rechts laufen
  if (
    keyIsDown(39) &&
    flying === false &&
    flyingright === false &&
    start === true
  ) {
    if (countr >= 0 && countr <= 6) {
      image(
        imgwalkingright,
        kirbyX,
        kirbyY,
        imgwalkingright.width / 50,
        imgwalkingright.height / 50
      );
    } else if (countr > 6 && countr <= 12) {
      image(
        imgwalkingright2,
        kirbyX,
        kirbyY,
        imgwalkingright2.width / 50,
        imgwalkingright2.height / 50
      );
    }
    if (countr >= 12) {
      countr = 0;
    }
    countr++;
    kirbyX = kirbyX + 3;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }
  // Fliegen
  if (
    keyIsDown(32) &&
    flyingleft === false &&
    flyingright === false &&
    start === true
  ) {
    if (countf >= 0 && countf <= 6) {
      image(
        imgflying,
        kirbyX,
        kirbyY,
        imgflying.width / 50,
        imgflying.height / 50
      );
    } else if (countf > 6 && countf <= 12) {
      image(
        imgflying2,
        kirbyX,
        kirbyY,
        imgflying2.width / 50,
        imgflying2.height / 50
      );
    }
    if (countf >= 12) {
      countf = 0;
    }
    countf++;
    kirbyY = kirbyY - 3;
    flying = true;
    standing = false;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }
  // Rechts fliegen
  if (keyIsDown(32) && keyIsDown(39) && start === true) {
    flyingright = true;
    flying = true;
    standing = false;
  } else {
    flyingright = false;
  }
  if (flyingright === true) {
    if (countfr >= 0 && countfr <= 6) {
      image(
        imgflyingright,
        kirbyX,
        kirbyY,
        imgflyingright.width / 50,
        imgflyingright.height / 50
      );
    } else if (countfr > 6 && countfr <= 12) {
      image(
        imgflyingright2,
        kirbyX,
        kirbyY,
        imgflyingright2.width / 50,
        imgflyingright2.height / 50
      );
    }
    if (countfr >= 12) {
      countfr = 0;
    }
    countfr++;
    kirbyY = kirbyY - 3;
    kirbyX = kirbyX + 3;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }
  // Links fliegen
  if (keyIsDown(32) && keyIsDown(37) && start === true) {
    flyingleft = true;
    flying = true;
    standing = false;
  } else {
    flyingleft = false;
  }
  if (flyingleft === true) {
    if (countfl >= 0 && countfl <= 6) {
      image(
        imgflyingleft,
        kirbyX,
        kirbyY,
        imgflyingleft.width / 50,
        imgflyingleft.height / 50
      );
    } else if (countfl > 6 && countfl <= 12) {
      image(
        imgflyingleft2,
        kirbyX,
        kirbyY,
        imgflyingleft2.width / 50,
        imgflyingleft2.height / 50
      );
    }
    if (countfl >= 12) {
      countfl = 0;
    }
    countfl++;
    kirbyX = kirbyX - 3;
    kirbyY = kirbyY - 3;
    vkirby = createVector(kirbyX + 54.5, kirbyY + 29);
  }

  // LEVEL 1 Grenzen und Tode

  if (startlvl1 === true) {
    if (
      kirbyX >= -86 &&
      kirbyX <= 20 &&
      flying === true &&
      kirbyY > 235 &&
      startlvl1 === true
    ) {
      kirbyY = 235;
      flying = false;
    }
    if (kirbyX <= 46 && kirbyY >= 240 && kirbyY <= 290 && startlvl1 === true) {
      kirbyX = 46;
    }
    if (
      kirbyX >= 20 &&
      kirbyX <= 46 &&
      kirbyY >= 235 &&
      kirbyY < 290 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl1 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX > 20 &&
      kirbyX <= 358 &&
      kirbyY > 290 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl1 === true
    ) {
      fallstart = false;
      kirbyY = 290;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX >= 46 &&
      kirbyX <= 358 &&
      flying === true &&
      kirbyY > 290 &&
      startlvl1 === true
    ) {
      kirbyY = 290;
      flying = false;
    }
    if (
      kirbyX >= 358 &&
      kirbyX < 560 &&
      kirbyY >= 236 &&
      kirbyY <= 290 &&
      startlvl1 === true
    ) {
      kirbyX = 358;
    }
    if (
      kirbyX >= 560 &&
      kirbyX <= 829 &&
      kirbyY > 235 &&
      flying === true &&
      startlvl1 === true
    ) {
      kirbyY = 235;
      flying = false;
    }
    if (
      kirbyX >= 570 &&
      kirbyX <= 586 &&
      kirbyY === 235 &&
      startlvl1 === true
    ) {
      kirbyX = 586;
    }
    if (kirbyX <= -26 && startlvl1 === true) {
      kirbyX = -26;
    }
    if (kirbyX >= 822 && startlvl1 === true) {
      kirbyX = 822;
    }
    if (kirbyY <= 0 && flying === true && startlvl1 === true) {
      kirbyY = 0;
    }
    if (
      kirbyY >= 0 &&
      kirbyY <= 50 &&
      kirbyX >= 346 &&
      kirbyX <= 520 &&
      startlvl1 === true
    ) {
      kirbyX = 346;
    }
    if (
      kirbyY >= 0 &&
      kirbyY <= 50 &&
      kirbyX >= 521 &&
      kirbyX <= 595 &&
      startlvl1 === true
    ) {
      kirbyX = 595;
    }
    if (
      pixelmitteoben[0] === 190 &&
      pixelmitteoben[1] === 190 &&
      pixelmitteoben[2] === 190 &&
      startlvl1 === true
    ) {
      over = true;
      startlvl1 = false;
    }
    if (
      pixelmitteunten[0] === 190 &&
      pixelmitteunten[1] === 190 &&
      pixelmitteunten[2] === 190 &&
      startlvl1 === true
    ) {
      over = true;
      startlvl1 = false;
    }
    if (
      pixelobenlinks[0] === 190 &&
      pixelobenlinks[1] === 190 &&
      pixelobenlinks[2] === 190 &&
      startlvl1 === true
    ) {
      over = true;
      startlvl1 = false;
    }
    if (
      pixelobenrechts[0] === 190 &&
      pixelobenrechts[1] === 190 &&
      pixelobenrechts[2] === 190 &&
      startlvl1 === true
    ) {
      over = true;
      startlvl1 = false;
    }
    if (
      pixelmitte[0] === 190 &&
      pixelmitte[1] === 190 &&
      pixelmitte[2] === 190 &&
      startlvl1 === true
    ) {
      over = true;
      startlvl1 = false;
    }
  }

  // Coinhit in Level1
  var distance = vkirby.dist(vcoin);
  if (distance <= 23) {
    coincollect = true;
  }
  if (coincollect === true) {
    coinzähler = 1;
  }
  if (kirbyX >= 808 && kirbyY === 235 && coincollect === true) {
    startlvl2 = true;
    kirbyX = -20;
    kirbyY = 306;
    aus = 0;
  }

  // LEVEL 2 Grenzen, Monster & Tode

  if (startlvl2 === true) {
    // Bewegung Waddle Dee
    if (countwaddledee < 45 && start === true) {
      waddledeex = waddledeex + 1;
      vwaddledee = createVector(waddledeex + 54.5, waddledeey + 29);
      image(
        imgwaddledeerechts,
        waddledeex,
        waddledeey,
        imgwaddledeelinks.width / 50,
        imgwaddledeelinks.height / 50
      );
    } else if (countwaddledee > 45 && start === true) {
      image(
        imgwaddledeelinks,
        waddledeex,
        waddledeey,
        imgwaddledeerechts.width / 50,
        imgwaddledeerechts.height / 50
      );
      waddledeex = waddledeex - 1;
      vwaddledee = createVector(waddledeex + 54.5, waddledeey + 29);
    }
    if (countwaddledee >= 90 && start === true) {
      countwaddledee = 0;
      waddledeex = 95;
    }
    countwaddledee = countwaddledee + 0.7;
    // Bewegung Fliege
    if (countfliege < 180 && start === true) {
      fliegex = fliegex + 0.9;
      vfliege = createVector(fliegex + 54.5, fliegey + 29);
      image(
        imgfliegerechts,
        fliegex,
        fliegey,
        imgfliegerechts.width / 50,
        imgfliegerechts.height / 50
      );
    } else if (countfliege > 180 && start === true) {
      image(
        imgfliegelinks,
        fliegex,
        fliegey,
        imgfliegelinks.width / 50,
        imgfliegelinks.height / 50
      );
      fliegex = fliegex - 0.9;
      vfliege = createVector(fliegex + 54.5, fliegey + 29);
    }
    if (countfliege >= 360 && start === true) {
      countfliege = 0;
      fliegex = 20;
    }
    countfliege = countfliege + 0.9;
    // Anfang Kirby
    if (
      flying === true &&
      kirbyX >= -26 &&
      kirbyX <= 31 &&
      kirbyY > 306 &&
      startlvl2 === true
    ) {
      kirbyY = 306;
      flying = false;
    }
    if (kirbyX <= -26 && kirbyY === 306 && startlvl2 === true) {
      kirbyX = -26;
    }
    if (flying === true && kirbyX <= -26 && startlvl2 === true) {
      kirbyX = -26;
    }
    if (flying === true && kirbyY <= 0 && startlvl2 === true) {
      kirbyY = 0;
    }
    if (kirbyX >= 31 && kirbyX <= 37 && kirbyY === 306 && startlvl2 === true) {
      kirbyX = 31;
    }
    if (
      kirbyX >= 31 &&
      kirbyX <= 37 &&
      flying === true &&
      kirbyY <= 306 &&
      kirbyY >= 235 &&
      startlvl2 === true
    ) {
      kirbyX = 31;
    }
    if (
      kirbyX >= 208 &&
      kirbyX <= 328 &&
      kirbyY >= 306 &&
      flying === true &&
      startlvl2 === true
    ) {
      kirbyY = 306;
      flying = false;
    }
    if (
      kirbyX >= 37 &&
      kirbyX <= 200 &&
      flying === true &&
      kirbyY >= 235 &&
      startlvl2 === true
    ) {
      kirbyY = 235;
      flying = false;
    }
    if (
      kirbyY >= 235 &&
      kirbyY < 306 &&
      kirbyX >= 37 &&
      kirbyX <= 50 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl2 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX < 50 &&
      kirbyY > 306 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl2 === true
    ) {
      fallstart = false;
      kirbyY = 306;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyY >= 235 &&
      kirbyY < 306 &&
      kirbyX >= 208 &&
      kirbyX <= 310 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl2 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX > 208 &&
      kirbyX <= 310 &&
      kirbyY > 306 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl2 === true
    ) {
      fallstart = false;
      kirbyY = 306;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX >= 220 &&
      kirbyX <= 227 &&
      kirbyY === 306 &&
      startlvl2 === true
    ) {
      kirbyX = 227;
    }
    if (
      kirbyX >= 220 &&
      kirbyX <= 227 &&
      kirbyY <= 306 &&
      kirbyY >= 235 &&
      flying === true &&
      startlvl2 === true
    ) {
      kirbyX = 227;
    }
    if (kirbyX > 328 && kirbyX <= 695 && kirbyY >= 306 && startlvl2 === true) {
      over = true;
    }
    if (
      kirbyX >= 710 &&
      kirbyX <= 810 &&
      kirbyY >= 235 &&
      flying === true &&
      startlvl2 === true
    ) {
      flying = false;
      kirbyY = 235;
    }
    if (
      kirbyX <= 710 &&
      kirbyX >= 680 &&
      kirbyY >= 235 &&
      flying === false &&
      flyingright === false &&
      flyingleft === false &&
      startlvl2 === true
    ) {
      fallstart = true;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (kirbyX >= 827 && kirbyY === 235 && startlvl2 === true) {
      kirbyX = 827;
    }
  }
  // Tod durch Waddle Dee
  var distancewaddledee = vwaddledee.dist(vkirby);
  if (distancewaddledee <= 40 && startlvl2 === true) {
    over = true;
  }
  // Tod durch Fliege
  var distancefliege = vfliege.dist(vkirby);
  if (distancefliege <= 40 && startlvl2 === true) {
    over = true;
  }
  //Coinhit in Level 2
  var distance2 = vkirby.dist(vcoin2);
  if (distance2 <= 23 && startlvl2 === true) {
    coincollect2 = true;
  }
  if (coincollect2 === true && startlvl2 === true) {
    coinzähler = 2;
  }
  if (kirbyX >= 817 && kirbyY === 235 && coincollect2 === true) {
    startlvl3 = true;
    kirbyX = -17;
    kirbyY = 235;
    aus = 0;
  }

  // LEVEL 3 Grenzen, Monster & Tode
  if (startlvl3 === true) {
    // Kracko - Endboss
    if (countkracko < 80 && start === true) {
      krackox = krackox + 1;
      vkracko = createVector(krackox + 106, krackoy + 29);
    } else if (countkracko > 80 && countkracko < 120 && start === true) {
      krackoy = krackoy - 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    } else if (countkracko > 120 && countkracko < 200) {
      krackox = krackox + 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    } else if ((countkracko > 200) & (countkracko < 280)) {
      krackox = krackox - 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    } else if (countkracko > 280 && countkracko < 320) {
      krackoy = krackoy + 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    } else if (countkracko > 320 && countkracko < 410) {
      krackox = krackox - 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    } else if (countkracko > 410 && countkracko < 470) {
      krackoy = krackoy - 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    } else if (countkracko > 470 && countkracko < 530) {
      krackoy = krackoy + 1;
      vkracko = createVector(krackox + 106, krackoy + 60);
    }
    if (countkracko >= 530 && start === true) {
      countkracko = 0;
      krackox = 360;
      krackoy = 370;
    }
    countkracko = countkracko + 0.7;
    // Anfang Kirby
    if (kirbyX <= -27 && kirbyY === 235 && startlvl3 === true) {
      kirbyX = -27;
    }
    if (
      kirbyX <= -27 &&
      flying === true &&
      kirbyY <= 235 &&
      startlvl3 === true
    ) {
      kirbyX = -27;
    }
    if (kirbyY <= 0 && flying === true && startlvl3 === true) {
      kirbyY = 0;
    }
    if (
      kirbyX >= -27 &&
      kirbyX <= 46 &&
      flying === true &&
      kirbyY > 235 &&
      startlvl3 === true
    ) {
      flying = false;
      kirbyY = 235;
    }
    if (kirbyX >= 45 && kirbyX <= 50 && kirbyY === 235 && startlvl3 === true) {
      kirbyX = 45;
    }
    if (
      kirbyX >= 45 &&
      kirbyX <= 55 &&
      flying === true &&
      kirbyY <= 235 &&
      kirbyY >= 167 &&
      startlvl3 === true
    ) {
      kirbyX = 45;
    }
    if (
      kirbyX >= 47 &&
      kirbyX <= 172 &&
      kirbyY >= 167 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyY = 167;
      flying = false;
    }
    if (
      kirbyX >= 172 &&
      kirbyX <= 180 &&
      kirbyY === 167 &&
      startlvl3 === true
    ) {
      kirbyX = 172;
    }
    if (
      kirbyX >= 172 &&
      kirbyX <= 200 &&
      kirbyY <= 167 &&
      kirbyY >= 95 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyX = 172;
    }
    if (
      kirbyX >= 190 &&
      kirbyX <= 340 &&
      kirbyY >= 95 &&
      kirbyY <= 100 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyY = 95;
      flying = false;
    }
    if (
      kirbyX <= 190 &&
      kirbyX >= 140 &&
      kirbyY >= 95 &&
      kirbyY < 167 &&
      startlvl3 === true &&
      flying === false &&
      flyingleft === false &&
      flyingright === false
    ) {
      fallstart = true;
    } else if (
      kirbyX <= 190 &&
      kirbyX >= 60 &&
      kirbyY > 167 &&
      startlvl3 === true &&
      flying === false &&
      flyingleft === false &&
      flyingright === false
    ) {
      fallstart = false;
      kirbyY = 167;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX <= 65 &&
      kirbyX >= 0 &&
      kirbyY >= 167 &&
      kirbyY < 235 &&
      startlvl3 === true &&
      flying === false &&
      flyingleft === false &&
      flyingright === false
    ) {
      fallstart = true;
    } else if (
      kirbyX <= 65 &&
      kirbyX >= -27 &&
      kirbyY > 235 &&
      startlvl3 === true &&
      flying === false &&
      flyingleft === false &&
      flyingright === false
    ) {
      fallstart = false;
      kirbyY = 235;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX >= 345 &&
      kirbyX <= 460 &&
      kirbyY >= 95 &&
      kirbyY < 442 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX > 290 &&
      kirbyX <= 460 &&
      kirbyY > 442 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = false;
      fall = 0;
      kirbyY = 442;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX >= 408 &&
      kirbyX <= 415 &&
      kirbyY >= 0 &&
      kirbyY <= 310 &&
      startlvl3 === true
    ) {
      kirbyX = 408;
    }
    if (
      kirbyX >= 415 &&
      kirbyX <= 588 &&
      kirbyY <= 330 &&
      startlvl3 === true &&
      flying === true
    ) {
      kirbyY = 330;
    }
    if (
      kirbyX >= 190 &&
      kirbyX <= 549 &&
      kirbyY > 442 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyY = 442;
      flying = false;
    }
    if (kirbyX <= 237 && kirbyY === 442 && startlvl3 === true) {
      kirbyX = 237;
    }
    if (
      kirbyX <= 237 &&
      kirbyY <= 442 &&
      kirbyY >= 360 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyX = 237;
    }
    if (
      kirbyX >= 237 &&
      kirbyX <= 345 &&
      kirbyY <= 370 &&
      kirbyY >= 330 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyY = 370;
    }
    if (
      kirbyX <= 375 &&
      kirbyX >= 360 &&
      kirbyY <= 370 &&
      kirbyY >= 95 &&
      startlvl3 === true
    ) {
      kirbyX = 375;
    }
    if (kirbyX >= 549 && kirbyY === 442 && startlvl3 === true) {
      kirbyX = 549;
    }
    if (
      kirbyX >= 560 &&
      kirbyX <= 690 &&
      kirbyY > 403 &&
      startlvl3 === true &&
      flying === true
    ) {
      flying = false;
      kirbyY = 403;
    }
    if (
      kirbyX >= 549 &&
      kirbyX <= 560 &&
      kirbyY <= 442 &&
      kirbyY >= 403 &&
      flying === true &&
      startlvl3 === true
    ) {
      kirbyX = 549;
    }
    if (kirbyX >= 690 && kirbyY === 403 && startlvl3 === true) {
      kirbyX = 690;
    }
    if (
      kirbyX < 570 &&
      kirbyX >= 500 &&
      kirbyY >= 403 &&
      kirbyY < 442 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX < 560 &&
      kirbyX >= 500 &&
      kirbyY > 442 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = false;
      fall = 0;
      kirbyY = 442;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX <= 612 &&
      kirbyX >= 600 &&
      kirbyY >= 0 &&
      kirbyY <= 310 &&
      startlvl3 === true
    ) {
      kirbyX = 612;
    }
    if (
      kirbyX >= 690 &&
      kirbyX <= 700 &&
      flying === true &&
      kirbyY <= 403 &&
      kirbyY >= 310 &&
      startlvl3 === true
    ) {
      kirbyX = 690;
    }
    if (
      kirbyX >= 700 &&
      kirbyX <= 824 &&
      flying === true &&
      kirbyY > 310 &&
      startlvl3 === true
    ) {
      kirbyY = 310;
      flying = false;
    }
    if (kirbyX >= 824 && startlvl3 === true) {
      kirbyX = 824;
    }
    if (
      kirbyX >= 672 &&
      kirbyX <= 824 &&
      kirbyY > 98 &&
      kirbyY <= 110 &&
      startlvl3 === true &&
      flying === true
    ) {
      flying = false;
      kirbyY = 98;
    }
    if (kirbyX >= 639 && kirbyY > 99 && kirbyY <= 160 && startlvl3 === true) {
      kirbyX = 639;
    }
    if (
      kirbyX >= 672 &&
      kirbyX <= 824 &&
      kirbyY < 180 &&
      kirbyY >= 160 &&
      startlvl3 === true
    ) {
      kirbyY = 180;
    }
    if (
      kirbyX <= 658 &&
      kirbyX >= 612 &&
      kirbyY >= 98 &&
      kirbyY < 403 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX <= 710 &&
      kirbyX >= 570 &&
      kirbyY > 403 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = false;
      kirbyY = 403;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
    if (
      kirbyX <= 720 &&
      kirbyX >= 670 &&
      kirbyY >= 310 &&
      kirbyY < 403 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = true;
    } else if (
      kirbyX < 720 &&
      kirbyX >= 600 &&
      kirbyY > 403 &&
      flying === false &&
      flyingleft === false &&
      flyingright === false &&
      startlvl3 === true
    ) {
      fallstart = false;
      kirbyY = 403;
      fall = 0;
    } else if (flying === true) {
      fallstart = false;
      fall = 0;
    }
  }
  // Tod durch Kracko
  var distancekracko = vkracko.dist(vkirby);
  if (distancekracko <= 70 && startlvl3 === true) {
    over = true;
  }
  //Coinhit in Level 3
  var distance3 = vkirby.dist(vcoin3);
  var distance4 = vkirby.dist(vcoin4);
  if (distance3 <= 23 && startlvl3 === true) {
    coincollect3 = true;
  }
  if (distance4 <= 23 && startlvl3 === true) {
    coincollect4 = true;
  }
  if (coincollect3 === true && coincollect4 === false && startlvl3 === true) {
    coinzähler = 3;
  } else if (
    coincollect3 === true &&
    coincollect4 === true &&
    startlvl3 === true
  ) {
    coinzähler = 4;
  }
  if (coincollect4 === true && coincollect3 === true && startlvl3 === true) {
    coinzähler = 4;
  } else if (
    coincollect4 === true &&
    coincollect3 === false &&
    startlvl3 === true
  ) {
    coinzähler = 3;
  }
  if (
    kirbyX >= 824 &&
    kirbyY === 310 &&
    coincollect3 === true &&
    coincollect4 === true
  ) {
    end = true;
  }
}
