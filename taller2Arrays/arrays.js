let altura = [1.75, 1.78, 1.79, 1.82, 1.69]
console.log(altura + "\n")

let sumatorio = 0;
for (let persona = 0; persona < altura.length; persona++) {
    // sumo todas las edades del array y lo guardo en la variable sumatorio
    sumatorio += altura[persona];
}
console.log(`la suma de la edades es ${sumatorio}`)


let promedio = sumatorio / altura.length

let masAltas = 0;
let masBajas = 0;

for (let persona = 0; persona < altura.length; persona++) {

    if (altura[persona] > promedio) {
        masAltas++;

    } else if (altura[persona] < promedio) {
        masBajas++;
    }

}

console.log(`
    el promedio de altura es ${promedio} cm,  
    ${masAltas} personas son más altas que el promedio 
    y ${masBajas} personas son más bajas que el promedio
    `)


let fruits = ["manzana", "pera", "platano", "cereza"]
//agrega un elemento al final del arreglo
fruits.push("mango")
console.log(fruits, "se agregó el mando al final del arreglo")

//agrega un elemento al inicio del arreglo
fruits.unshift("fresa")
console.log(fruits, "se agrega la fresa al principio del arrgelo")

//elimina el último elemento del arreglo
fruits.pop()
console.log(fruits, "se eliminó el mango del arreglo")

//elimina el primer elemento del arreglo
fruits.shift()
console.log(fruits, "se eliminó la fresa del arreglo\n")


console.log(`el platano esta en la posicion ${fruits.indexOf("platano")}\n`)


// modiqué la estructura del array para que este ahora sea un array de objectos indicando la posicion y el en el array y su valor
fruits = Object.entries(fruits).map(([key, value]) => ({ index: key, valor: value }))

console.log(fruits) // aquí se comprueba el estado del arreglo
