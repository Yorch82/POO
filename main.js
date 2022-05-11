// Ejercicio POO 1:

// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class persona {
    constructor (nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(this.nombre + " tiene " + this.edad + " años y género " + this.genero)
    }
};

let yorch = new persona("Yorch", 39, "masculino")

yorch.obtDetalles();


// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class student extends persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar() {
        console.log(this.nombre + " tiene " + this.edad + " años y género " + this.genero + ". Estudia un "+ this.curso + " de " + this.grupo);
    }
};

let estudianteYorch = new student ("Yorch", 39, "masculino", "bootcamp", "fullstack");

estudianteYorch.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class profesor extends persona {
    constructor (nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    asignar() {
        console.log(this.nombre + " tiene " + this.edad + " años y género " + this.genero + ". Es profesor de "+ this.asignatura + " de nivel " + this.nivel)
    }
}

let profesorYorch = new profesor ("Yorch", 39, "masculino", "matemáticas", "alto")

profesorYorch.asignar();