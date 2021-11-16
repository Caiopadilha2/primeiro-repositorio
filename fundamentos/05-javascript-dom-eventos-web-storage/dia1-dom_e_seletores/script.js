let cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "green"

let urgentes = document.getElementsByClassName('emergency-tasks')[0];
urgentes.style.backgroundColor = 'red';

let cabecalhoUrgentes = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < cabecalhoUrgentes.length; index += 1) {
  cabecalhoUrgentes[index].style.backgroundColor = 'purple';
}

let naoUrgentes = document.getElementsByClassName('no-emergency-tasks')[0];
naoUrgentes.style.backgroundColor = 'orange';

let cabecalhoNaoUrgentes = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < cabecalhoNaoUrgentes.length; index += 1) {
  cabecalhoNaoUrgentes[index].style.backgroundColor = 'black';
}

let rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'green';