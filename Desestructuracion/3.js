const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //muestra por consola '12345'
console.log(hashedPassword); // devuelve indefinido 

