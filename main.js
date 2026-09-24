const numeroSenha = document.querySelector('.parametro-senha__texto')
const camposenha =document.querySelector("campo-senha")

const forcasenha = document.querySelector('.forca')


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

        if(tamanhoSenha> 0 ){
            tamanhoSenha--;
    numeroSenha.textContent = tamanhoSenha;
    gera 
        }

        
    
}

botoes[1].onclick = almentar;

function almentar(){
    tamanhoSenha++;
    numeroSenha.textContent = tamanhoSenha;



}

// checkbox[0]
//c
//
//

// função para classificar a senha
function classificar senha(){

forcasenha.classList.remove('forte')'medio' 'fraco'



    if(o tamanho da senha > 11)
        forcasenha.classList.add 
    else if 
    else classList.remove('fraco')

}
