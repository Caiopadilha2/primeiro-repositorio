// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


// fontes: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// split ==> O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. 
// reverse ==> O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
// O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.



function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string){
        return true;
    } else {
        return false;
    }
}    
console.log(verificaPalindrome("apos a sopa"))
