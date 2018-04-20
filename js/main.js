// Conditions

//conditions ?  expression1 : expression2
/*
function laclef(boolean) {
  return boolean
}

var ouvrirlaporte = laclef(false) ? "vous pouvez entrer" : "porte fermée"

function laclef() {
  if (laclef(true)) {
    return "vous pouvez entrer"
  }else {
    return "porte fermée"
  }
}

//

function A(x) {
   function B(y) {
      function C(z) {

         console.log(x + y + z);
      }
      C(3);
   }
   B(2);
}
A(1); // crée un message d'alerte avec 6 (= 1 + 2 + 3)
*/

var setBGColor = new Function("document.body.style.backgroundColor = 'red';"),
    document.form1.colorButton.onclick = setBGColor
