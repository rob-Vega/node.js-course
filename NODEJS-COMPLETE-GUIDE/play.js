const myName = "Roberto";
let myAge = 25;
const hasHobbies = true;
// console.log(myName);

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return (`Name is ${userName}, age is ${userAge} and the user has hobbies ${userHasHobbies}`);
}

const add = (a, b) => a + b;
const addOne = a => a + 1;

console.log(summarizeUser(myName, myAge, hasHobbies));

console.log(add(2, 5));
console.log(addOne(2));

// Objetos, propiedades y métodos

const person = {
    name: "Roberto",
    age: 25,
    // con arrow functions this. hace refercia al objeto Global
    // greet: () => {
    //     console.log('Hi, I am ' + this.name)
    // }
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

console.log(person);
person.greet();

// Array y métodos de Array

const hobbies = ['VideoGames', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

// .map crea un nuevo array que nos permite modificar un array existente.
/*
console.log(hobbies.map(hobby => `Hobby ${hobby}`));
console.log(hobbies);
*/

// Reference types
hobbies.push('Programming');
console.log(hobbies);
// Aqui podemos editar la constante hobbies debido a que esta  solo guarda la "dirección" en donde se encuentran sus valores y esta dirección no ha cambiado esto debido a que los array tanto como los objetos son "reference type". 

// Operadores Spread y Rest.

const copiedArray = hobbies.slice();

// Spread
// Lo que hace este operador es que toma un array u objeto y lo "esparce", en este caso dentro de un array.
const anotherCopiedArray = [...hobbies];

console.log(copiedArray);
console.log(anotherCopiedArray);

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

// Rest 
// Es lo contrario al operador Spread, se puede utilar para definir varios parametros y luego transformalo en un array.
const toAnotherArray = (...args) => {
    return args;
}

console.log(toArray(1, 5, 6, 2));

// Desestructurando

const anotherPerson = {
    name: "Nicolás",
    age: 25,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
}

// const printName = (personData) => {
//     console.log(personData.name);
// }

// Desestructurando objectos con el nombre de la propiedad del objeto.

const printName = ({ name }) => {
    console.log(name);
}

printName(anotherPerson);

const { name, age } = anotherPerson;
console.log(name, age);

// Desestructurando arrays por posisicon del elemento.

const books = ['myBook', 'notMyBook'];
const [first, second] = books;
console.log(first, second);

// Código asincrono y promesas
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(anotherText => {
            console.log(anotherText);
        });
}, 2000);

console.log('Hi!');
console.log('Bye!');