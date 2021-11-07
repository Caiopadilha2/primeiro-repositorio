// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const ang1 = 27;
const ang2 = 61;
const ang3 = 82;

if ((ang1 + ang2 + ang3 === 180)){
    console.log("Este é um triângulo")
}
else if ((ang1 < 0) || (ang2 < 0) || (ang3 < 0)){
    console.log("Ângulo não válido")
}
else{
    console.log("Não é um triângulo")
}