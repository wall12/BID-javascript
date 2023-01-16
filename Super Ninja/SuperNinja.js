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

class Sensei extends Ninja {
    constructor(nombre){
        super(nombre, 200 , 10, 10);
        this.sabiduria = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
//ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
