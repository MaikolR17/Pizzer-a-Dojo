function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
  var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.salsas = salsas;
    return pizza;
}

var pizza1 = pizzaOven("estiloChicago", "tradicional", ["mozzarella"], ["pepperoni","salchicha",]);
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano","marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var masa = [
  "tradicional",
  "lanzada a mano",
  "chicago",
  "con borde relleno",
  "con borde de salchichas"
]

var salsa = [
  "barbacoa",
  "salsa blanca",
  "marinara",
  "tradicional",
  "salsa de tomate",
]

var quesos = [
  "cheddar",
  "mozzarella",
  "queso de sandwich",
  "queso paraguay",
  "parmesano",
  "provolone"
]

var toppings = [
  "aceituna",
  "lomito",
  "pollo catupiry",
  "choclo",
  "cebolla",
  "cebolla caramelizada",
  "calabresa",
  "picaña"
]

function cantidadRandom(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}

function eleccionRandom(arr){
  var i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function pizzaRandom() {
  var pizza = {};
  pizza.masa = eleccionRandom(masa);
  pizza.salsa = eleccionRandom(salsa);
  pizza.quesos = [];
  pizza.toppings = [];
  for (var i = 0; i < cantidadRandom(3, 1); i++){
    pizza.quesos.push(eleccionRandom(quesos));
  }
  for (var i = 0; i < cantidadRandom(4, 1); i++){
    pizza.toppings.push(eleccionRandom(toppings));
  }
  return pizza;
}

console.log(pizzaRandom());
console.log(pizzaRandom());