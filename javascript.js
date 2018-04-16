
window.addEventListener('keydown',zmienPozycje) 

//Niestety tylko tyle udalo mi sie zrobic w wyznaczonym terminie. Rozumiem jesli to bedzie za malo na zaliczenie. Niestety nie udalo mi sie wykryc w Chrome, pomimo licznych prob,
// dwoch telefonow na laptopie Lenovo z Windowsem 10

// Nasluchiwanie naciskania klawiszy oraz wywolywanie funcji zmien pozycje po nacisnieciu
let pozycjaX = 100;
let pozycjaY = 100;

let xmlns = "http //www.w3.org/2000/svg"

let dziura = document.createElementNS(xmlns,'circle');       // Uchwycenie elementu html circle dziura
let kulka2 = document.getElementById('kulka2');              // Uchwycenie elementu htlm circle kulka2

const arena = document.querySelector('#arena');

arena.appendChild(dziura);

function zmienPozycje(e) {                   // definicja funkcji zmien pozycje. Po nacisnieciu klawiszy strzalek dodanie lub odjecie 5 od pozycjiX/Y. W ten sposob przesuwa sie kulka.
    console.log(e);
      let tag = e.keyCode;

      switch(tag)
      {
        case 38:
        pozycjaY -=5;
        break;
        case 40:
        pozycjaY +=5;
        break;
        case 37:
        pozycjaX -=5;
        break;
        case 39:
        pozycjaX +=5;
        break;
      }

      kulka2.setAttribute('cx',pozycjaX);
      kulka2.setAttribute('cy',pozycjaY);

    }
 

    

