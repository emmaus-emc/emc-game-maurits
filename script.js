/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 600;
var vijandY = 0;
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY=vijandY+2
  if (vijandY>680) {
    vijandY=-5
  }

    
  // kogel

  // speler
  if (keyIsDown(38)) {spelerY -= 20 }
  if (keyIsDown(37)) {spelerX -= 20 }
  if (keyIsDown(39)) {spelerX += 20 }
  if (keyIsDown(40)) {spelerY += 20 }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
// botsing speler tegen muur
  if (spelerY > 675){
    spelerY = 675;}
   if (spelerX > 1240){
     spelerX = 1240;}
     if (spelerX < 10){
      spelerX = 10;}
      if (spelerY < 5){
        spelerY = 5;}


  // botsing speler tegen vijand
  if (vijandX-spelerX < 50 && 
    vijandX-spelerX > -50 && 
    vijandY-spelerY < 50 && 
    vijandY-spelerY > -50) {
    console.log("botsing")
  }
     

    }; 

  // botsing kogel tegen vijand


/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
fill("grey");
rect(0,0,1280,720);
 



// body vijand

  fill("grey");
  ellipse(vijandX + 15, vijandY + 20, 60, 50);

  //ogen vijand
  fill("black");
  ellipse(vijandX, vijandY + 15, 10, 10);
  fill("black");
  ellipse(vijandX + 30, vijandY + 15, 10, 10);
  

  //mond vijand
  fill("pink");
  ellipse(vijandX + 15, vijandY + 25, 20, 20);






  // kogel

  // speler
  // body
  
  fill("blue");
  ellipse(spelerX + 15, spelerY + 20, 50, 50);

  // ogen

  fill("black");
  ellipse(spelerX, spelerY + 15, 10, 10);
  fill("black");
  ellipse(spelerX + 30, spelerY + 15, 10, 10);
  fill("white");
  ellipse(spelerX - 3, spelerY + 15, 5, 5);
  fill("white");
  ellipse(spelerX + 33, spelerY + 15, 5, 5);


  // mond
  


  // punten en health





};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt ????n keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */


function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}