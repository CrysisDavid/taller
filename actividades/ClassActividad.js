class Rectangulo {
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
        return (console.log(`altura ${this.alto} ancho ${this.ancho}`))
    }
    perimetro() {
        return console.log("el perimetro del triangulo es", (this.alto + this.ancho) * 2);
    };
    area() {
        return (
            console.log("el area del triangulo es", (this.alto * this.ancho) / 2)
        )
    }
}

class Hunano {
    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    introduce() {
        return console.log(`mi nombre es ${this.nombre} soy ${this.edad >= 18 ? 'mayor de edad' : 'menor de edad'} tengo ${this.edad}`)
    }
}

class Empleado {
    constructor (nombre, salario, cargo) {
        this.nombre = nombre;
        this.salario = salario;
        this.cargo = cargo;
    }
    aumento(aumento) {
        this.salario += this.salario * aumento
        return (console.log(`recibí un aumento de ${aumento} ahora mi salario ${this.salario}$`))
    }
    introduce() {
        return console.log(`mi nombre es ${this.nombre} soy ${this.cargo} y mi salario es ${this.salario}$`)
    }
}







let Empleado1 = new Empleado("Andrés", 900000, "Practicante")
Empleado1.introduce()
Empleado1.aumento(0.5)
console.log()
let Triangulo = new Rectangulo(5, 10)
Triangulo.perimetro()
Triangulo.area()
console.log()
let Cristian = new Hunano("Cristian", 17)
Cristian.introduce()