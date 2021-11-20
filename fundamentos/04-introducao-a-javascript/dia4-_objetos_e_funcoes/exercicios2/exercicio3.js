// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

function search(numeros){
    // fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
    let menorNumero = numeros[0];
    
    for(index = 1; index < numeros.length; index++){
        if(numeros[index] < menorNumero){
            menorNumero = numeros[index];
        
        }
    }
    return menorNumero;
}    
console.log(search([2, 4, 6, 7, 10, 0, -3]));