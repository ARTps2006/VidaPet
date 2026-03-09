function cadastrar() {

const nome = document.getElementById("nome");
const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");

const mensagemErro = document.getElementById("mensagemErro");
const mensagemSucesso = document.getElementById("mensagemSucesso");

mensagemErro.classList.remove("mostrar");
mensagemSucesso.classList.remove("mostrar");

if (nome.value === "" || usuario.value === "" || email.value === "" || telefone.value === "" || senha.value === "" || confirmarSenha.value === "") {

mensagemErro.textContent = "Preencha todos os campos!";
mensagemErro.classList.add("mostrar");
return;

}

if (senha.value !== confirmarSenha.value) {

mensagemErro.textContent = "As senhas não são iguais!";
mensagemErro.classList.add("mostrar");
return;

}

if (senha.value.length < 6) {

mensagemErro.textContent = "A senha deve ter pelo menos 6 caracteres!";
mensagemErro.classList.add("mostrar");
return;

}

mensagemSucesso.textContent = "Cadastro realizado com sucesso!";
mensagemSucesso.classList.add("mostrar");

}