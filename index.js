// hasId
// Implementa una función llamada hasId que admita como parámetro un objeto
// y compruebe si dicho objeto tiene una propiedad llamada id(debe devolver
// booleano true / false).

// TIP: No accedas a 'id' con punto (.) o con corchetes ([]).

const obj = {
  id: 1,
  first_name: "Noelle",
  last_name: "Rosenblatt",
  email: "nrosenblatt0@apache.org",
  gender: "Female",
  ip_address: "97.196.115.101",
};

const hasId = ({ id }) => id != undefined;

console.log(hasId(obj));

// hasId(obj)

// head
// Implementa una función llamada head tal que, dado un array como entrada,
// devuelva el primer elemento.

// TIP: No utilices el corchete ([]) para acceder a la posición 0.

const names = ["Manolo", "Mari Carmen", "Nicolás", "Carmen"];

const head = ([first]) => first;

console.log(head(names));

// tail
// Implementa una función llamada tail tal que, dado un array como entrada,
// devuelva un nuevo array con todos los elementos menos el primero.

//TIP: No se debe modificar el array de entrada. Piensa en destructuring y rest.

const names2 = ["Manolo", "Mari Carmen", "Nicolás", "Carmen"];

const tail = ([, ...name]) => name;

console.log(tail(names2));

// swapFirstToLast
// Implementa una función llamada swapFirstToLast tal que, dado un array como
// entrada, devuelva un nuevo array donde el primer elemento ha sido colocado
// en la última posición.

//  No se debe modificar el array de entrada. Piensa en destructuring y rest.

const names3 = ["Manolo", "Mari Carmen", "Nicolás", "Carmen"];

const swapFirstToLast = ([first, ...names]) => [...names, first];

console.log(swapFirstToLast(names3));

// exclueId
// Implementa una función llamada excludeId tal que, dado un objeto como entrada,
// devuelva dicho objeto clonado excepto la propiedad id si la hubiera.

// TIP: No modifiques el objeto de entrada. Piensa en destructuring y rest.

const obj2 = {
  id: 1,
  first_name: "Noelle",
  last_name: "Rosenblatt",
  email: "nrosenblatt0@apache.org",
  gender: "Female",
  ip_address: "97.196.115.101",
};

const exclueId = ({ id, ...rest }) => rest;

console.log(exclueId(obj2));

// wordsStartingWithA
// Implementa una función llamada wordsStartingWithA tal que, dado un array de palabras
// como entrada, devuelva otro array filtrado con aquellas palabras que empiecen por a.

// TIP: No utilices bucles.

const flowers = ["Amapola", "Rosa", "Acacias", "Margarita"];

const wordsStartingWithA = (flowers) =>
  flowers.filter(([flower]) => flower.toLowerCase() == "a");

console.log(wordsStartingWithA(flowers));

// concat
// Implementa una función llamada concat tal que admita múltiples argumentos de tipo string y
// devuelva otro string con la concatenación de todos, separados por |.

const concat = (...items) => items.join(" | ");

console.log(concat("hola", "adios", "bienvenido", "hasta luego"));

// multArray
// Implementa una función llamada multArray que admita un array de números (arr) y otro parámetro
// que sea un número (x) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.

// TIP: No utilices bucles.

const array = [1, 2, 3, 4, 5, 6, 7];

const multArray = (array, n) => array.map((item) => item * n);

console.log(multArray(array, 3));

// calcMult
// Implementa una función llamada calcMult que admita múltiples números como argumento y devuelva
// como resultado el producto de todos ellos.

const calcMult = (...numbers) =>
  numbers.reduce((acc, number) => acc * number, 1);

console.log(calcMult(2, 4, 6, 8, 10));

// swapFirstSecond
// Implementa una función swapFirstSecond tal que dado un array, devuelva un nuevo array donde el
// primer elemento ha sido intercambiado por el segundo.

// TIP: No modifiques el array de entrada original.

const names4 = ["Manolo", "Mari Carmen", "Nicolás", "Carmen"];

const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];

console.log(swapFirstSecond(names));

// firstEqual
// Implementa una función firstEqual tal que admita multiples strings como argumento de entrada así
// como un carácter cualquiera, y devuelva un booleano indicando si todos los strings comienzan por
// dicho carácter o no.

// TIP: No utilices bucles. No accedas al primer carácter con corchetes ([]).

const firstEqual = (c, ...strings) =>
  strings.every(([first]) => first.toLowerCase() === c);

console.log(firstEqual("a", "Amapola", "azul", "anciano", "Andar"));

//longest
//Implementa una función longest que admita múltiples arrays como entrada, y devuelva el array más largo.

//TIP: No utilices bucles. Hay diversas formas de hacerlo.

const longest = (...arrays) =>
  arrays
    .sort((a, b) => (a.length > b.length ? -1 : 1))
    .reduce((array) => array);

console.log(
  longest(
    [1, 2],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5, 6]
  )
);

// searchInStringV1
// Implementa una función llamada searchInStringV1 tal que dado un string como parámetro y también un carácter,
// devuelva cuantas veces aparece dicho carácter en el string.
// TIP: No utilices bucles.

// TIP: Convierte el string a un array mediante Array.from().

const searchInStringV1 = (string, c) =>
  Array.from(string).reduce((acc, letter) => (letter === c ? acc + 1 : acc), 0);

console.log(searchInStringV1("amapola", "a"));

// searchInStringV2
// Implementa el mismo ejercicio de antes, llamando a la función searchInStringV2, encontrando otra alternativa sin usar reduce.

// TIP: No utilices bucles.

// TIP: Convierte el string a un array mediante Array.from().

const searchInStringV2 = (string, c) => {
  let acc = 0;
  Array.from(string).map((letter) => {
    if (letter === c) acc++;
  });
  return acc;
};

console.log(searchInStringV2("amapolaaaaa", "a"));

// sortCharacters
// Implementa una función llamada sortCharacters tal que dado un string, lo devuelva con sus letras ordenadas
// alfabéticamente.

// TIP: No utilices bucles. No modifiques el string original de entrada.

// TIP: Convierte el string a un array mediante Array.from().

const sortCharacters = (string) =>
  Array.from(string)
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(sortCharacters("manolo"));

//  shout
// Implementa una función llamada shout tal que, dadas múltiples palabras como entrada, devuelva todas las palabras
// concatenadas en un texto donde aparezcan en mayúsculas y con exclamaciones.

// TIP: No utilices bucles

const shout = (...strings) =>
  strings.reduce((acc, string) => `${acc} ${string.toUpperCase()}! `, "");

console.log(shout("hola", "adios", "bienvenido", "hasta luego"));

// Lista de la compra
// Dada la siguiente lista de la compra:

const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

// A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.

const addVat = (vat, products) =>
  products.map((product) => ({ ...product, vat: product.price * 0.21 }));

console.log(addVat("vat", shoppingCart));

// B. Ordena la lista de más a menos unidades.

const sortCart = (products) =>
  products.sort((a, b) => (a.units > b.units ? -1 : 1));

console.log(sortCart(shoppingCart));

// C. Obtén el subtotal gastado en droguería.

const getSubTotal = (products) =>
  products.reduce((acc, product) => {
    if (product.category === "Droguería") acc += product.price * product.units;
    return acc;
  }, 0);

console.log(getSubTotal(shoppingCart));

// // D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.

// //TIP: No utilices bucles.

const listProducts = (products) =>
  products
    .sort((a, b) => (a.category > b.category ? 1 : -1))
    .map((product) =>
      console.log(`${product.product} -> ${product.price * product.units}€`)
    );

listProducts(shoppingCart);
