const numeroSenha = document.querySelector('.parametro-senha__texto')
const campoSenha = document.querySelector('#campo-senha')

const forcaSenha = document.querySelector(".forca")

campoSenha.value = 'Aqui vai aparecer a senha.'
// OPEN IN WEBVIEW
let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// minusculas, numeros e simbolos

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const checkbox = document.querySelectorAll('.checkbox')

for(let i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

// checkbox[0] = maiusculas
// checkbox[1] =
// checkbox[2] =
// checkbox[3] =


const botoes = document.querySelectorAll('.parametro-senha__botao')


// pega o 1º botão = -
botoes[0].onclick = diminuir;

// função diminuir
function diminuir(){
    // diminui de 1 em 1 e mostra na tela

    if(tamanhoSenha > 0){
        tamanhoSenha--;
        numeroSenha.textContent = tamanhoSenha;
        geraSenha()
    }

   
}

// BOTAO DE AUMENTAR
botoes[1].onclick = aumentar

function aumentar(){
    // diminui de 1 em 1 e costra na tela
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;
    geraSenha()
}


// fUNÇÃO DE CRIAR A SENHA ALEATÓRIA
geraSenha()

function geraSenha(){

let alfabeto = ''
// local que verufica qual checkebox clicada
if(checkbox[0]).checkbox
alfabeto = alfabeto +letrasMaiusculas
if(checkbox[1]).checkbox
alfabeto = alfabeto + letrasMinusculas
if(checkbox)[2].
alfabeto = alfabeto + numeros





    let senha = ''
    // LOOP - Repetições
    for(let i = 0; i < tamanhoSenha; i++){
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + letrasMaiusculas[numeroAleatorio]
    }
    campoSenha.value = senha;
    classificarSenha()
}


// Função para classificar a senha
function classificarSenha(){

    forcaSenha.classList.remove('forte', 'media', 'fraca')

    if(tamanhoSenha > 11){
        forcaSenha.classList.add('forte')
    }else if(tamanhoSenha < 7){
        forcaSenha.classList.add('fraca')
    }else{
        forcaSenha.classList.add('media')
    }
}