// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'limao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['morango', 'laranja', 'pera'];

const fruitSalad = (fruit, additional) => {
  const frutasComAdicionais = [...specialFruit, ...additionalItens];
  return frutasComAdicionais;
};

console.log(fruitSalad(specialFruit, additionalItens));
console.log(specialFruit);
console.log(additionalItens);