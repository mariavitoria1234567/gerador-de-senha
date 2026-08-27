const numeroSenha = document.querySelector('.parametro-senha__texto')
const camposenha =document.querySelector("campo-senha")

camposenha.volume ='aqui vai aparecer a senha'

letramaisculas =' ABCDEFGHIJKLMNOPQRSTUVWXYZSENHA'

tamanhoSenha = 8
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao')



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