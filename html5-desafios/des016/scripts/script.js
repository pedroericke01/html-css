/* ligando os principais elementos do html ao javascirpt
para manipula-los corretamente: */
const opcoes = window.document.querySelector('header > nav');
const botao = window.document.querySelector('header > span.material-symbols-outlined');
    
/* adicinando um ouvidor de cliques no botão */
botao.addEventListener('click', ()=>{
    if(opcoes.style.display != "block"){
        opcoes.style.display = "block";
    }else{
        opcoes.style.display = "none";
    }
});
