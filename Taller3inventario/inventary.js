const prompt = require('prompt-sync')()
let tineda = {
    products: [ // products es un atributo del objecto tienda, y este a la vez es un arreglo de objectos que contiene la info de los productos
        {
            id: "1",
            name: "papa",
            price: "1.99",
            cantidad: "10"
        },
        {
            id: "2",
            name: "cebolla",
            price: "0.99",
            cantidad: "20"
        },
    ],

    agregar: () => { // metodo necesario para agregar un producto al inventario

        /**
         * esta variabe se usará para darle la opción al user de agreagr más productos más adelante, 
         * por ahora se inicia como "si" para entrar al ciclo
         */
        let addMore = "si"

        do {

            let products = { // a este objecto se le actualizarán sus atributos durante la ejecución
                id: undefined,
                nombre: undefined,
                precio: undefined,
                cantidad: undefined
            }

            let id = prompt("ingresar el id: ") // creo la variable id
            while (tineda.products.find((p) => p.id == id)) { // el id debe ser unico ya que este nos permite diferencias e identificar productos
                id = prompt("el id debe ser unico intenta con otro: ")// si el id ingresado por el user ya esta en el inventario entra a un ciclo
            };
            products.id = id; // agregar el id al objecto 

            /*
            * al igual que con el id para el resto de atributos se hará lo mismo, se crea la variable y la variable se le asigna al atributo
            * como se muestra en las siguientes líneas
            */

            let nombre = prompt("nombre del producto: ")
            products.nombre = nombre;

            let precio = prompt("precio: ")
            products.precio = precio;

            let cantidad = prompt("cantidad: ")
            products.cantidad = cantidad;

            tineda.products.push(products)

            addMore = prompt("¿deseas agregar otro producto? (si/no)") // se reasigna la variable addMore

        } while (addMore.toLowerCase() == "si") // si el user desea agregar más se repite todo el proceso hasta que el user desea finalizar

        console.log(JSON.stringify(tineda.products, null, 4))// JSON.stringify() es un parser que permiter parsear objectos a json

    },


    updateQuantity: (id, cantidad) => { // con este método se actualiza la cantida de un producto seleccionado, sus parametros son el id y la cantidad a asignar

        let filteredProduct = tineda.products.filter((product) => product.id == id) // filtro el producto que coincida con el indicado por el user y lo asigno a filteredProduct

        if (filteredProduct.length > 0) { // si el producto existe en el inventario

            let updatedProduct = filteredProduct[0] // se crea el objecto con el valor de filteredProducts

            updatedProduct.cantidad = cantidad // y se accede a su atributo cantidad para actualizarlo con la cantidad indicada por el user, ahora el objecto estará actualizado con la cantidad

            tineda.products = tineda.products.filter((tienda) => tienda.id != id) // se filtra y a su se reasigna el arreglo products con todos los valores que no coincidan con el id indicado, para asi poder elimiar el valor antiguo

            tineda.products.push(updatedProduct)// finalmente se agregan el objecto actualizado a ese arreglo

            console.log(`cantidad actualizada\n${JSON.stringify(updatedProduct, null, 4)}`)// finalmente  se muestra el objecto actualizado

        } else console.log("el producto no existe")
    }
}

// 


tineda.agregar()


let idToUpdate = prompt("ingresar el id del producto a actualizar: ") //id del producto a actualizar
let cantidadToUpdate = prompt("ingresar la cantidad a actualizar: ") // cantidad a actualizar

tineda.updateQuantity(idToUpdate, cantidadToUpdate)// llamada al metodo updateQuantity()

console.log(tineda.products)

