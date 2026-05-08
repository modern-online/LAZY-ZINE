let tailleCircle = 20;

// "circles" est un tableau vide.
// Un tableau sert à stocker plusieurs éléments dans une seule variable.
// Ici, on va y ranger tous nos cercles.
let circles = [];

function setup() {
  let cnv = createCanvas(2000, 2000);
  cnv.parent("p5");
  frameRate(120);

  // Cette boucle "for" répète le même bloc de code 100 fois.
  // On s'en sert ici pour créer 100 cercles au départ.
  //
  // let i = 0      -> on commence à compter à 0
  // i < 100        -> on continue tant que i est plus petit que 100
  // i++            -> à chaque tour, on ajoute 1 à i
  //
  // En résumé :
  // cette boucle permet de fabriquer plusieurs éléments automatiquement,
  // au lieu d'écrire le même code 100 fois à la main.
  for (let i = 0; i < 100; i++) {

    // "push()" ajoute un nouvel élément à la fin du tableau "circles".
    // Ici, à chaque tour de boucle, on ajoute un nouvel objet
    // qui contient les informations d’un cercle.
    circles.push({
      pos: random(tailleCircle / 2, width - tailleCircle / 2),
      jeRetourne: false,
      y: random(height - tailleCircle / 2)
    });
  }
}

function draw() {
  background(0, 0, 0, 0);
  fill("red");
  noStroke();

  // Cette boucle parcourt le tableau "circles" élément par élément.
  //
  // i commence à 0, car dans un tableau en JavaScript,
  // le premier élément est à l’index 0.
  //
  // circles.length = le nombre total d’éléments dans le tableau.
  // Donc la boucle continue jusqu’au dernier cercle.
  for (let i = 0; i < circles.length; i++) {

    // circles[i] veut dire :
    // "je prends l’élément numéro i dans le tableau circles"
    //
    // À chaque tour, "c" devient donc un cercle différent.
    let c = circles[i];

    let etat = moveCircle(c.pos, c.jeRetourne);
    c.pos = etat.position;
    c.jeRetourne = etat.etat;

    circle(c.pos, c.y, tailleCircle);
  }
}

function moveCircle(pos, jeRetourne) {
  if (pos < width - tailleCircle / 2 && jeRetourne == false) {
    pos++;
  } else if (pos > tailleCircle / 2) {
    jeRetourne = true;
    pos--;
  } else {
    jeRetourne = false;
  }

  return { position: pos, etat: jeRetourne };
}