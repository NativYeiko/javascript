// Horloge
setInterval(function() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
  var clock= document.getElementById('clock')
    clock.innerText = clockTime;
},1000);


/*
 * Calculatrice en Javascript.
 */
//================================== Var definitions. ======================================
var nb1 = 0, nb2 = 0;
/* Operation type. */
var op = 'null';
var cpt = 0;
//============================== Add numbers on 'screen'.===================================
function ajouteChiffre(form,val)
{
	form.texte.value += val;
}
//============== Test if a comma has already been appended or not. =========================
function ajoutePoint(form)
{
	if (form.texte.value.length == 0)
	{
		form.texte.value = "0.";
	}
	else
	{
		var j = 0;
		for (var i=0;i<form.texte.value.length;i++)
		{
			if (form.texte.value.charAt(i) == ".")
			{
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : (alert("D\351j\340 entr\351."));
	}
}
//============================== Set operation type. ========================================
function setOp(opType)
{
	if (op == 'null')
	{
		op = opType;
	}
	else
	{
		alert("Vous \352tes d\351j\340 en train de faire une " + op + ".");
		form.texte.value = "";
	}
}
//===================================== Reset. ===============================================
function raz(form)
{
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}
//=============================== Store variables. ===========================================
function store(form)
{
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0)) // op is set after first var storage
	{
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1))
	{
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	/* else: do nothing. */
}
/*
 * Workaround for unwanted behavior: when entering the first variable and clicking equal the var will get stored.
 */
function storeEq(form)
{
	if (cpt == 1)
	{
		store(form);
	}
}
//================================== Calcul. ===============================================
function calc(form)
{
	/* Break if the user clicked on the equal button without entering 2 variables. */
	if (cpt < 2) // We don't use (nbX == 0) check because 0 can be a user-entered value.
	{
		alert("Il faut deux nombres pour pouvoir faire un calcul.");
	}
	else
	{
		if (op == "somme")
		{
			form.affichage.value = parseInt(nb1) + parseInt(nb2);
		}
		else if (op == "soustraction")
		{
			form.affichage.value = parseInt(nb1) - parseInt(nb2);
		}
		else if (op == "multiplication")
		{
			form.affichage.value = nb1 * nb2;
		}
		else if (op == "division")
		{
			if (nb2 == 0)
			{
				alert("On ne peut pas diviser par z\351ro.");
			}
			else
			{
				form.affichage.value = nb1 / nb2;
			}
		}
	}
}

// Todo list

// Création "close" button et l'ajouter à chaque élément de la liste
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Cliquez sur un bouton de fermeture pour masquer l'élément de la liste en cours
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// ajoute un symbole "coché" en cliquant sur un élément
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Créer un nouvel élément de liste en cliquant sur le bouton "Ajouter"
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

//Convertiseur Monnais

var url = 'http://data.fixer.io/api/latest?access_key=eff16e17710c78fc46dd4c53f27e92af&base=EUR&symbols=GBP,JPY,EUR,USD,RUB,CNY,CAD,BTC,BTE';

// define from currency, to currency, and amount

 function recupererValeur() {
// execute the conversion using the "convert" endpoint:
$.ajax({
    url: url,
    dataType: 'jsonp',

    success: function(res,status,req) {

      console.log(res.rates);
      console.log(status);
      var taux = res.rates
        , from = document.getElementById('from').value
        , to = document.getElementById('to').value
        , amount = document.getElementById('fromAmount').value

        var result = amount * taux[to] / taux[from]


      document.getElementById("toAmount").value=result


    }
})};

//Compteur de mots

var print = function(msg){
  document.getElementById("output").innerHTML = "Length is " + msg;
}
document.getElementById("btn").onclick = function(event) {
  print(document.getElementById('str').value.length);
}

// Conctac Form


local = localStorage;
$(document).ready(function () {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"]);
    }
    if (localStorage["email"]) {
      $('#email').val(localStorage["email"]);
    }
    if (localStorage["selected"]) {
      $('#selected').val(localStorage["selected"]);
    }
    if (localStorage["newletter"]) {
      $('#newletter').val(localStorage["newletter"]);
    }
    if (localStorage["message"]) {
      $('#message').val(localStorage["message"]);
    }
    if (localStorage["submit"]) {
      $('#submit').val(localStorage["submit"]);
    }
  }
  init();
});
$('.stored').change(function () {
  localStorage[$(this).attr('name')] = $(this).val();
});
