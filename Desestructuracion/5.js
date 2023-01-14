const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
  }
  const { key } = lastTest;
  const { secondKey } = lastTest;
  const [ ,willThisWork] = secondKey;
  //Predict the output
  console.log(key); //muestra 'value'
  console.log(secondKey); //muestra el arreglo [1,5,1,8,3,3]
  console.log(secondKey[0]); //muestra el valor que se encuentra en la posicion 0 de arreglo secondKey '1'
  console.log(willThisWork); // muestra el siguiente numero del arreglo '5'