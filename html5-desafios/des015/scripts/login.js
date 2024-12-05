/* capturando dados do furmulário, com javascript, atribuir ID ou class a elementos
é importante para suas respectivas manipulações: */
const formulario = window.document.getElementById("formulario");
var txt_email = window.document.getElementById('email');
var txt_senha = window.document.getElementById('senha');

/* adicionando um ouvidor de submits no botão principal do formulário */
formulario.addEventListener("submit", ()=>{
    let email = String(txt_email.value).trim().toLowerCase();
    let senha = String(txt_senha.value).trim().toLowerCase();

    window.alert(`Olá ${email}, seja bem vindo, sua senha é ${senha}`);
});
