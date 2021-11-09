// EXEMPLO FOR DENTRO DE FOR


let qtd = 10;
let ingredientes = ["queijo","presunto","maionese"];
let sacola = [];
for(let index = 0; index < qtd ; index+=1){

    let pao = [];
if (index == qtd / 2){
    sacola.push("Estamos na metade dos pães")
    }   
    for( let index = 0; index < ingredientes.length; index+=1){
    pao.push(ingredientes[index])
    }
    sacola.push(pao);
    } 
console.log("sacola: " , sacola)