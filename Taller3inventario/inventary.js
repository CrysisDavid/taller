const prompt = require('prompt-sync')()

/**
 * si va a ejecutar el archivo debe tener instalado prompt-sync de lo contrario no se podrá ejecutar
 * 
 * @intructions
 * npm init -en caso de no tener iniciado node-
 * npm install prompt-sync
 */

let tineda = {
    nombre: "La tienda de Remington",
    products: [ // products es un atributo del objecto tienda, y este a la vez es un arreglo de objectos que contiene la info de los productos
        {
            id: 1,
            name: "papa",
            price: 1.99,
            cantidad: 10,
        },
        {
            id: 2,
            name: "cebolla",
            price: 0.99,
            cantidad: 20
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
                name: undefined,
                price: undefined,
                cantidad: undefined
            }

            let id = prompt("ingresar el id: ") // creo la variable id
            while (tineda.products.find((p) => p.id == id)) { // el id debe ser unico ya que este nos permite diferencias e identificar productos
                id = prompt("el id debe ser unico intenta con otro: ")// si el id ingresado por el user ya esta en el inventario entra a un ciclo
            };
            products.id = parseInt(id); // agregar el id al objecto 

            /*
            * al igual que con el id para el resto de atributos se hará lo mismo, se crea la variable y la variable se le asigna al atributo
            * como se muestra en las siguientes líneas
            */

            let nombre = prompt("nombre del producto: ")
            products.name = nombre;

            let precio = prompt("precio: ")
            products.price = parseInt(precio);

            let cantidad = prompt("cantidad: ")
            products.cantidad = parseInt(cantidad);

            tineda.products.push(products)

            addMore = prompt("¿deseas agregar otro producto? (si/no)") // se reasigna la variable addMore

        } while (addMore.toLowerCase() == "si") // si el user desea agregar más se repite todo el proceso hasta que el user desea finalizar
        openStore()


    },


    updateQuantity: () => { // con este método se actualiza la cantida de un producto seleccionado, sus parametros son el id y la cantidad a asignar
        let retry = "si"

        do {
            let idToUpdate = prompt("ingresar el id del producto a actualizar: ") //id del producto a actualizar


            let filteredProduct = tineda.products.filter((product) => product.id == idToUpdate) // filtro el producto que coincida con el indicado por el user y lo asigno a filteredProduct

            if (filteredProduct.length > 0) { // si el producto existe en el inventario

                let cantidadToUpdate = prompt("ingresar la cantidad a actualizar: ") // cantidad a actualizar

                let updatedProduct = filteredProduct[0] // se crea el objecto con el valor de filteredProducts

                updatedProduct.cantidad = parseInt(cantidadToUpdate) // y se accede a su atributo cantidad para actualizarlo con la cantidad indicada por el user, ahora el objecto estará actualizado con la cantidad

                tineda.products = tineda.products.filter((tienda) => tienda.id != idToUpdate) // se filtra y a su se reasigna el arreglo products con todos los valores que no coincidan con el id indicado, para asi poder elimiar el valor antiguo

                tineda.products.push(updatedProduct)// finalmente se agregan el objecto actualizado a ese arreglo
                console.log("cantidad actualizada\n")
                console.table(updatedProduct)// finalmente  se muestra el objecto actualizado

            } else console.log("el producto no existe")

            retry = prompt("¿actualizar otro producto? si/no: ")
        }
        while (retry.toLowerCase() == "si")
        openStore()
    },


    verProductos: () => {
        console.table(tineda.products)
        openStore()
    }
};

const Menu = () => {
    console.log(`
        Bienvenido a la tienda de ${tineda.nombre}
        \n
        1. Agregar producto
        2. Actualizar producto
        3. Ver productos
        4. Salir
        `)
}

// 

const openStore = () => {
    Menu()
    let option = prompt("")
    switch (option) {
        case "1":
            tineda.agregar()// llamada al metodo agregar()
            break
        case "2":
            tineda.updateQuantity()// llamada al metodo updateQuantity()
            break
        case "3":
            tineda.verProductos()// llamada al metodo verProductos()
            break
        case "4":
            console.log("adiós")
            break
        default:
            console.log("opcion invalida")
            break

    }

};


openStore()