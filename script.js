let verEscolhas = document.getElementById('escolhas')
let resultado = document.getElementById('resultado')

function pedra(){
    let machine = Math.floor(Math.random() * 3)

    if (machine == 0){
    machine = 'Pedra'
    } else if (machine == 1){
    machine = 'Papel'
    } else if (machine == 2){
    machine = 'Tesoura'
    }

    if (machine == 'Pedra'){
        resultado.innerHTML = 'Empate'
    } else if (machine == 'Papel'){
        resultado.innerHTML = 'Maquina ganhou'
    } else if (machine == 'Tesoura'){
        resultado.innerHTML = 'Jogador ganhou'
    }

    verEscolhas.innerHTML = `A escolha da maquina foi: ${machine} <br> A escolha do jogador foi: Pedra` 		 
}

function papel(){
    let machine = Math.floor(Math.random() * 3)

    if (machine == 0){
    machine = 'Pedra'
    } else if (machine == 1){
    machine = 'Papel'
    } else if (machine == 2){
    machine = 'Tesoura'
    }

    if (machine == 'Pedra'){
        resultado.innerHTML = 'Jogador ganhou'
    } else if (machine == 'Papel'){
        resultado.innerHTML = 'Empate'
    } else if (machine == 'Tesoura'){
        resultado.innerHTML = 'Maquina ganhou'
    }

    verEscolhas.innerHTML = `A escolha da maquina foi: ${machine} <br> A escolha do jogador foi: Papel`
}

function tesoura(){
    let machine = Math.floor(Math.random() * 3)

    if (machine == 0){
    machine = 'Pedra'
    } else if (machine == 1){
    machine = 'Papel'
    } else if (machine == 2){
    machine = 'Tesoura'
    }

    if (machine == 'Pedra'){
        resultado.innerHTML = 'Maquina ganhou'
    } else if (machine == 'Papel'){
        resultado.innerHTML = 'Jogador ganhou'
    } else if (machine == 'Tesoura'){
        resultado.innerHTML = 'Empate'
    }

    verEscolhas.innerHTML = `A escolha da maquina foi: ${machine} <br> A escolha do jogador foi: Tesoura`	
}