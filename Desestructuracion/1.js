const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) //Muestra por consola Tesla
console.log(otherRandomCar) //Muestra por consola Mercedes, ya que pasa a la siguiente posicion del arreglo