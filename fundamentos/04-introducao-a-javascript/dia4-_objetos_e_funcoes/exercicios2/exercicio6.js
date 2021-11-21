// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// 5! = 5 x 4 x 3 x 2 x 1

// recursiva: uma função chama ela mesma.

function fatorial(n){
    let fat = 1;
    for(let c = n; c > 1; c--){
        fat += c
    }
    return fat
}

console.log(fatorial(5))


// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4!
// n! = n x (n-1)!
// 1! = 1
// fonte: https://www.youtube.com/watch?v=mc3TKp2XzhI&ab_channel=CursoemV%C3%ADdeo