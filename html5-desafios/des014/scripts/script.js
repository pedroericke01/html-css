 /* ligando as 2 principais tags que meu script precisa para funcionar: */
    const opcoes = window.document.querySelector('header > nav');
    const botao = window.document.querySelector('header > span');
    
    /* será necessário implementar um meio de controle do tamanho de tela, visando
    no momento que a tela do dispositio ser igual ou ultrapassar 770px os links de
    opções sejam exixbidos automaticamente, sem ficar travando:*/
    window.addEventListener("resize", ()=>{
        if(window.innerWidth >= 770){
            opcoes.style.display='block';
        }else{
            opcoes.style.display='none';
        }
    })

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