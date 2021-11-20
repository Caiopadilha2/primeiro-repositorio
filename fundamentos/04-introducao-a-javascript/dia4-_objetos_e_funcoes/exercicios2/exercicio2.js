// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorIndice(array){
    
    let maiorNumero = 0;
    let maiorIndex = 0;

    for(index = 0; index < array.length; index++){
        console.log("index do momento " + index);
        if(array[index] > maiorNumero){
            console.log(index);
            maiorNumero = array[index];
            maiorIndex = index;
        }
    }
    return maiorIndex;
}


console.log(maiorIndice([2, 3, 6, 7, 10, 1]))

