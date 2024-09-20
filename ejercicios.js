/* Definime un array con 10 números, 
sumalos e imprimime el resultado por consola */

let arrayDeNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumaDeNumeros = (elemento) => {
  let suma = 0;
  for (let i = 0; i < elemento.length; i++) {
    suma += elemento[i];
  }
  return suma;
};

console.log(sumaDeNumeros(arrayDeNumero));

/* Basados en el array creado anteriormente,
 obteneme el número mas grande del array */

let numeroMasGrande = Math.max(...arrayDeNumero);

console.log(numeroMasGrande);

/* Basados en el array creado anteriormente,
  decime si existe por lo menos un duplicado */

const duplicado = () => {};

/* Basados en el array creado anteriormente agrega 3 números que quieras */

/* arrayDeNumero.push(5,6,7);
  console.log(arrayDeNumero); */

/*Basados en el array creado anteriormente, suma todos los impares */

const sumarImpares = (elemento) => {
  let suma = 0;

  for (let i = 0; i < elemento.length; i++) {
    if (elemento[i] % 2 !== 0) {
      suma += elemento[i];
    }
  }
  return suma;
};

console.log(sumarImpares(arrayDeNumero));

/* Crea un nuevo array con varios objetos que representen diferentes personas */

let Personas = [
  {
    nombre: "Macarena",
    edad: 20,
    domicilio: { provincia: "Buenos aires", direccion: "chacabuco 23" },
  },
  {
    nombre: "Lucia",
    edad: 50,
    domicilio: { provincia: "Salta", direccion: "Fernandez 123" },
  },
  {
    nombre: "Jorge",
    edad: 15,
    domicilio: { provincia: "Mendoza", direccion: "Salta 523" },
  },
  {
    nombre: "Lucia",
    edad: 25,
    domicilio: { provincia: "San luis", direccion: "Comunicaciones 55" },
  },
  {
    nombre: "Pepe",
    edad: 80,
    domicilio: { provincia: "Corrientes", direccion: "Chaco 123" },
  },
];

/* Basados en el array creado anteriormente, cambia el nombre de la 3er persona */

Personas[2].nombre = "Maria";
console.log(Personas[2].nombre);

/*Basados en el array creado anteriormente,
 devolveme un nuevo array con el nombre de las personas*/

let nombres = Personas.map((persona) => persona.nombre);

console.log(nombres);

/* Basados en el array creado anteriormente, devolveme la persona que se llame “Pepe” */

let buscandoAPepe = Personas.find((persona) => persona.nombre === "Pepe");

console.log(buscandoAPepe);

/* Basados en el array creado anteriormente, 
 decime si existe una persona llamada “Carlos” */

let buscandoACarlos = Personas.some((persona) => persona.nombre === "Carlos");

console.log(buscandoACarlos);

/* Basados en el array creado anteriormente, cual es el promedio de edades */

const promedioDeEdades = () => {
  let suma = 0;
  for (let i = 0; i < Personas.length; i++) {
    suma += Personas[i].edad;
  }

  let resultado = suma / Personas.length;

  return resultado;
};

console.log(promedioDeEdades());

/* Basados en el array creado anteriormente, agrega 3 nuevas personas */

Personas.push(
  { nombre: "Graciela", edad: 15 },
  { nombre: "Micaela", edad: 20 },
  { nombre: "Jose", edad: 20 }
);

console.log(Personas);

/* Basados en el array creado anteriormente, reemplaza la 4ta persona por una nueva*/

Personas[3] = { nombre: "Marta", edad: 40 };

console.log(Personas[3]);

/* Basados en el array creado anteriormente, borra la persona en la posicion 6 */

/* Basados en el array creado anteriormente, agrega una persona al principio de la lista */

/* Basados en el array creado anteriormente, agrega una persona al fina de la lista */

Personas.push({ nombre: "Martita", edad: 90 });

/* Basados en el array creado anteriormente, decime si existe una persona que viva en buenos aires
(la persona tiene que tener un atributo del tipo objeto que tenga provincia y direccion)*/

let viveEnBuenosAires = Personas.some(
  (persona) => persona.domicilio.provincia === "Buenos aires" && persona.domicilio.direccion
);

console.log(viveEnBuenosAires);
