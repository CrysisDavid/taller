let altura = [1.75, 1.78, 1.79, 1.82, 1.69]
console.log(altura)
let sumatorio = altura[0] + altura[1] + altura[2] + altura[3] + altura[4]
let promedio = sumatorio / altura.length


let masAltas = 0;
let masBajas = 0;

for (let persona = 0; persona < altura.length; 1) {

    if (altura[persona] > promedio) {
        masAltas++;

    } else if (altura[persona] < promedio) {
        masBajas++;
    }
    persona++;

}

console.log(`
    el promedio de altura es ${promedio} cm,  
    ${masAltas} personas son más altas que el promedio 
    y ${masBajas} personas son más bajas que el promedio
    `)


let fruits = ["manzana", "pera", "platano", "cereza"]
//agrega un elemento al final del arreglo
fruits.push("mango")
console.log(fruits)

//agrega un elemento al inicio del arreglo
fruits.unshift("fresa")
console.log(fruits)

//elimina el último elemento del arreglo
fruits.pop()
console.log(fruits)

//elimina el primer elemento del arreglo
fruits.shift()
console.log(fruits)


console.log(`el platano esta en la posicion ${fruits.indexOf("platano")}`)
fruits = Object.entries(fruits).map(([key, value]) => ({ posición: key, valor: value }))
console.log(fruits)
