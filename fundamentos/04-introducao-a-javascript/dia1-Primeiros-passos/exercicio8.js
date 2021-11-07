// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 2;
const b = 5;
const c = 7;

if ( a % 2 === 0 ||  b % 2 === 0 || c % 2 === 0){
    console.log("Tem uma constante par")
}
else {
    console.log("Todos são ímpar")
}   