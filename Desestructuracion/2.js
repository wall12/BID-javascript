const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // no muestra nada ya que se produce un error por 'name' no definido
console.log(otherName);//no muestra nada ya que no se ejecuta