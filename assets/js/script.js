/*
Case Sensitive:reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()-dá para acessar todos, então será o mais usado
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let imagem = document.querySelector('#imagem')


function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'green'
       nomeOk = true
    }
 
 }

 function validaEmail() {
     let txtEmail = document.querySelector('#txtEmail')

     if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
         txtEmail.innerHTML = 'Email Inválido'
         txtEmail.style.color = 'red    '

     } else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true


     }
 }

 function validaAssunto(){

    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto é muito grande, máximo 100 caracteres'
        txtAssunto.style.display= 'block'
    } else{
        txtAssunto.style.display = 'block'
        assuntoOk = true

    }
 }
 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar!')
    }
 }
 function imagemZoom() {
    imagem.style.width = '800px'
    imagem.style.height = '600px'
 }
 
 function imagemNormal() {
    imagem.style.width = '400px'
    imagem.style.height = '250px'
 }