let seletor = document.getElementById('opcoesJogador');
let escolhaJogador = seletor.options[seletor.selectedIndex].text;
let botao = document.querySelector('.jogo__botao');
let btnJogarNovamente = document.querySelector('#jogarNovamente');
let resultado = document.querySelector('.jogo__resultado');
let opcoes = ['Pedra','Papel','Tesoura','Lagarto','Spock'];
let escolhaComputador = opcoes[Math.floor(opcoes.length * Math.random())];

function imagemJogador(escolhaJogador){
    switch(escolhaJogador){
        case 'Escolha':
            resultado.innerHTML = 'Escolha uma das opções';
            break;
        case 'Pedra':
            document.querySelector('#imagemPedra').style.display = 'initial';
            break;
        case 'Papel':
            document.querySelector('#imagemPapel').style.display = 'initial';
            break;
        case 'Tesoura':
            document.querySelector('#imagemTesoura').style.display = 'initial';
            break;
        case 'Lagarto':
            document.querySelector('#imagemLagarto').style.display = 'initial';
            break;
        case 'Spock':
            document.querySelector('#imagemSpock').style.display = 'initial';
            break;
        default:
            resultado.innerHTML = 'Escolha uma das opções';
    }
};
 
function imagemComputador(){
    let opcao = document.querySelector('#opcao');
    opcao.innerHTML = escolhaComputador;
    switch(escolhaComputador){
        case 'Pedra':
            document.querySelector('#imagemPedra2').style.display = 'initial';
            break;
        case 'Papel':
            document.querySelector('#imagemPapel2').style.display = 'initial';
            break;
        case 'Tesoura':
            document.querySelector('#imagemTesoura2').style.display = 'initial';
            break;
        case 'Lagarto':
            document.querySelector('#imagemLagarto2').style.display = 'initial';
            break;
        case 'Spock':
            document.querySelector('#imagemSpock2').style.display = 'initial';
            break;
        default:
            resultado.innerHTML = 'Erro';
    }
}

function resultadoRodada(escolhaJogador,escolhaComputador){
    let escolhas = [escolhaComputador,escolhaJogador];
    if (escolhaComputador == escolhaJogador){
        resultado.innerHTML = 'Empate'
    }else if(escolhaJogador == 'Escolha'){
        resultado.innerHTML = 'Escolha uma das opções'
    }else{
        if (escolhas.includes('Pedra') && escolhas.includes('Papel')){
            document.querySelector('#papelPedra').style.display = 'initial';
        }else if (escolhas.includes('Pedra') && escolhas.includes('Tesoura')){
            document.querySelector('#pedraTesoura').style.display = 'initial';
        }else if (escolhas.includes('Pedra') && escolhas.includes('Lagarto')){
            document.querySelector('#pedraLagarto').style.display = 'initial';
        }else if (escolhas.includes('Pedra') && escolhas.includes('Spock')){
            document.querySelector('#spockPedra').style.display = 'initial';
        }else if (escolhas.includes('Papel') && escolhas.includes('Tesoura')){
            document.querySelector('#tesouraPapel').style.display = 'initial';
        }else if (escolhas.includes('Papel') && escolhas.includes('Lagarto')){
            document.querySelector('#lagartoPapel').style.display = 'initial';
        }else if (escolhas.includes('Papel') && escolhas.includes('Spock')){
            document.querySelector('#papelSpock').style.display = 'initial';
        }else if (escolhas.includes('Tesoura') && escolhas.includes('Lagarto')){
            document.querySelector('#tesouraLagarto').style.display = 'initial';
        }else if (escolhas.includes('Tesoura') && escolhas.includes('Spock')){
            document.querySelector('#spockTesoura').style.display = 'initial';
        }else if (escolhas.includes('Lagarto') && escolhas.includes('Spock')){
            document.querySelector('#lagartoSpock').style.display = 'initial';
        }
    }
}

function jogarNovamente(){
    botao.style.display = 'none';
    btnJogarNovamente.style.display = 'initial';
    btnJogarNovamente.addEventListener('click',function(){
        location.reload();
    })
}
var resultadoFinal = function(){
    imagemJogador(escolhaJogador);
    imagemComputador();
    resultadoRodada(escolhaJogador,escolhaComputador);
    jogarNovamente();
}

botao.onclick = resultadoFinal;


