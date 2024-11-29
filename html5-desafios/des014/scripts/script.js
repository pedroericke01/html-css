 /* ligando as 2 principais tags que meu script precisa para funcionar: */
    const opcoes = window.document.querySelector('header > nav');
    const botao = window.document.querySelector('header > input[type=button]');

    /* criando variáve contadora de cliques que me permitirá controlar a exibição e
    ocultar a lista de opções de links disponíveis no front end: */
    var cont_cliques = null
    /* adicionando um ouvidor de eventos de 'click' no meu botão do html5*/
    botao.addEventListener('click', ()=>{
        /* esse novo valor será acrescentado após cada clique do usuário: */
        cont_cliques+=1
        
        if(cont_cliques % 2 == 0){
            opcoes.style.display='none';
            
        }else{
            opcoes.style.display='block';
        }
    })