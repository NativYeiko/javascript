function () {
  window.onfocus = function() {
     document.body.style.backgroundColor = 'white';
  };
  var setBGColor = new Function("document.body.style.backgroundColor = 'white';");
  document.form1.colorButton.onclick = setBGColor;
}
let me = "Yannick";
let mAge = 29;
let result = `Je suis ${me} et j'ai ${mAge} ans`;

//exo js6
conts TYPE_CAR = 0;
conts TYPE_BUS = 1;

var createVehicule = function (type = TYPE_CAR, color = 'blue', brand = 'MyBrand')
   =>{ return {ç
    type : type,
    color: color,
    brand: brand,

    isCar: () => {
      return this.type === TYPE_CAR;
    }
  }
}
let car = createVehicule();
let bus = createVehicule(TYPE_BUS, 'red', 'MyBus');
console.log(car, bus);
console.log(car.isCar());
``
