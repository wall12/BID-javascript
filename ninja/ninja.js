class Ninja {
    constructor(nombre, salud = 0, velocidad = 3, fuerza = 3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName() {
        console.log(this.nombre);
    }
    showStats() {
        return(`El nombre es: ${this.nombre}, su fuerza es: ${this.fuerza}, la velocidad es: ${this.velocidad}, la salud es: ${this.salud}`);
    }
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.drinkSake();
console.log(ninja1.showStats()); 
