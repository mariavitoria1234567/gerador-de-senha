const numeroSenha = document.querySelector('.parametro-senha__texto')
const camposenha =document.querySelector("campo-senha")

camposenha.volume ='aqui vai aparecer a senha'

letramaisculas =' ABCDEFGHIJKLMNOPQRSTUVWXYZSENHA'

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')

const checkbox = document.querySelectorA11('.checkbox')

for(let i = 0; i <checkbox.longth; i++){
    checkbox[i].onclick = geranha;

}

// checkbox[0]
// checkbox[0]






botoes[0].onclick = diminuir;

function diminuir(){
    tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
}

botoes[1].onclick = almentar;

function almentar(){
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;



}