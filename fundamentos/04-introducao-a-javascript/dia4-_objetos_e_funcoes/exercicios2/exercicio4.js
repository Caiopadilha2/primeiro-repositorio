// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maiorArray(nomes) {

    let maiorNome = nomes[0];

    for(index = 0; index < nomes.length; index++) {
    if(nomes[index].length > maiorNome.length){
        maiorNome = nomes[index];
    }        
  }
  return maiorNome;
}

console.log(maiorArray(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
