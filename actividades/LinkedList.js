//Agrego readline para poder parar el programa en cada ejemplo
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





class Nodo {
    constructor (dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor () {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(dato) {
        let nodo = new Nodo(dato);
        if (this.cabeza === null) {
            this.cabeza = nodo;
            this.cola = nodo;
        } else {
            this.cola.siguiente = nodo;
            this.cola = nodo;
        }
    }

    mostrar() {
        // Recorrer la lista y mostrarla con su indice
        let nodo = this.cabeza;
        let i = 0;
        while (nodo !== null) {
            if (typeof nodo.dato === 'object') {
                console.log(`Indice: ${i} Dato: ${JSON.stringify(nodo.dato)}`);
            } else {
                console.log(`Indice: ${i} Dato: ${nodo.dato}`);
            }
            i++;
            nodo = nodo.siguiente;
        }
    }

    cambiarposicionbyindex(posicion1, posicion2) {
        let nodo = this.cabeza;
        let i = 0;
        let nodo1 = null;
        let nodo2 = null;
        while (nodo !== null) {
            if (i === posicion1) {
                nodo1 = nodo;
            }
            if (i === posicion2) {
                nodo2 = nodo;
            }
            i++;
            nodo = nodo.siguiente;
        }
        let temp = nodo1.dato;
        nodo1.dato = nodo2.dato;
        nodo2.dato = temp;
    }

    eliminarbyindex(posicion) {
        let nodo = this.cabeza;
        let i = 0;
        let nodo1 = null;
        let nodo2 = null;
        while (nodo !== null) {
            if (i === posicion) {
                nodo1 = nodo;
            }
            if (i === posicion + 1) {
                nodo2 = nodo;
            }
            i++;
            nodo = nodo.siguiente;
        }
        nodo1.siguiente = nodo2.siguiente;
    }
}


class Cola {
    constructor () {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(dato) {
        let nodo = new Nodo(dato);
        if (this.cabeza === null) {
            this.cabeza = nodo;
            this.cola = nodo;
        } else {
            this.cola.siguiente = nodo;
            this.cola = nodo;
        }
    }

    mostrar() {
        // Recorrer la lista y mostrarla con su indice
        let nodo = this.cabeza;
        let i = 0;
        while (nodo !== null) {
            if (typeof nodo.dato === 'object') {
                console.log(`Indice: ${i} Dato: ${JSON.stringify(nodo.dato)}`);
            } else {
                console.log(`Indice: ${i} Dato: ${nodo.dato}`);
            }
            i++;
            nodo = nodo.siguiente;
        }
    }

    eliminar() {
        let nodo = this.cabeza;
        this.cabeza = nodo.siguiente;
    }
}

class Pila {
    constructor () {
        this.cabeza = null;
        this.cola = null;
    }

    agregar(dato) {
        let nodo = new Nodo(dato);
        if (this.cabeza === null) {
            this.cabeza = nodo;
            this.cola = nodo;
        } else {
            nodo.siguiente = this.cabeza;
            this.cabeza = nodo;
        }
    }

    mostrar() {
        let nodo = this.cabeza;
        let i = 0;
        while (nodo !== null) {
            if (typeof nodo.dato === 'object') {
                console.log(`Indice: ${i} Dato: ${JSON.stringify(nodo.dato)}`);
            } else {
                console.log(`Indice: ${i} Dato: ${nodo.dato}`);
            }
            i++;
            nodo = nodo.siguiente;
        }
    }

    eliminar() {
        let nodo = this.cabeza;
        this.cabeza = nodo.siguiente;
    }
}

rl.question('Listas enlazadas click siguiente...', listaenlazada);

function listaenlazada() {
    let lista = new ListaEnlazada();
    lista.agregar(1);
    lista.agregar(2);
    lista.agregar(3);
    lista.agregar(4);
    lista.agregar(5);

    // Mostrar la lista
    console.log();
    console.log();
    console.log('Lista original -------------------------------------------------');
    lista.mostrar();
    console.log();

    console.log('Cambiar la posicion 1 por la 3 -----------------------------------');
    lista.cambiarposicionbyindex(1, 3);
    console.log();

    console.log('Lista con el cambio -------------------------------------------------');
    lista.mostrar();
    console.log();

    console.log('Eliminar el elemento en la posicion 1 ------------------------------');
    lista.eliminarbyindex(1);
    console.log();

    console.log('Lista con el cambio -------------------------------------------------');
    lista.mostrar();

    rl.question('Lista Enlazada Clase empleado...', listaenlazadaempleado);
}

function listaenlazadaempleado() {
    console.log();
    console.log();

    console.log('Ejemplo de uso de la clase Empleado y listas enlazadas -----------');
    class Empleado {
        constructor (nombre, salario, puesto) {
            this.nombre = nombre;
            this.salario = salario;
            this.puesto = puesto;
        }
    }

    let empleado = new Empleado('Juan', 1000000, 'Gerente');

    let empleado2 = new Empleado('Pedro', 500000, 'Empleado');

    let empleado3 = new Empleado('Maria', 800000, 'Empleado');

    let listaEmpleados = new ListaEnlazada();

    listaEmpleados.agregar(empleado);
    listaEmpleados.agregar(empleado2);
    listaEmpleados.agregar(empleado3);

    listaEmpleados.mostrar();
    console.log();

    console.log('Cambiar la posicion 1 por la 2 -----------------------------------');
    listaEmpleados.cambiarposicionbyindex(1, 2);
    console.log();

    console.log('Lista con el cambio -------------------------------------------------');
    listaEmpleados.mostrar();
    console.log();

    rl.question('Ejemplo de cola...', ejemploCola);

}


function ejemploCola() {
    let cola = new Cola();

    cola.agregar(1);
    cola.agregar(2);
    cola.agregar(3);
    cola.agregar(4);
    cola.agregar(5);
    console.log();
    console.log();

    // Mostrar la lista
    console.log('Cola original -------------------------------------------------');
    cola.mostrar();
    console.log();

    console.log('Eliminar el primer elemento -----------------------------------');
    cola.eliminar();
    console.log();

    console.log('Cola con el cambio -------------------------------------------------');

    cola.mostrar();
    console.log();

    console.log('Usar eliminar en la cola -----------------------------------');
    cola.eliminar();
    console.log();

    console.log('Cola con el cambio -------------------------------------------------');
    console.log();

    cola.mostrar();

    rl.question('Ejemplo de pila...', ejemploPila);

}

function ejemploPila() {
    let pila = new Pila();

    pila.agregar(1);
    pila.agregar(2);
    pila.agregar(3);
    pila.agregar(4);
    pila.agregar(5);
    console.log();
    console.log();

    // Mostrar la lista
    console.log('Pila original -------------------------------------------------');
    pila.mostrar();
    console.log();

    console.log('Eliminar el primer elemento -----------------------------------');
    pila.eliminar();
    console.log();

    console.log('Pila con el cambio -------------------------------------------------');


    pila.mostrar();
    console.log();

    console.log('Usar eliminar en la pila -----------------------------------');
    pila.eliminar();
    console.log();

    console.log('Pila con el cambio -------------------------------------------------');

    pila.mostrar();
    console.log();

    rl.question('Fin de los ejemplos...', rl.close());
}