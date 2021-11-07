const peça;
// source: https://www.ludijogos.com/multiplayer/xadrez/regras/
switch (peça.toLowerCase()) {
    case "rei":
        console.log("O rei pode mover-se em todas as direções");
        break
    case "rainha":
        console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
        break
    case "bispo":
        console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
        break
    case "cavalo":
        console.log("O movimento do cavalo é em forma de “L”")
        break;
    default:
    console.log("Não é uma peça de xadrez")
    break;
}