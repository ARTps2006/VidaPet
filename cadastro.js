const botao = document.querySelector("button");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagemErro");

botao.addEventListener("click", function () {

    if (nome.value === "" || email.value === "" || senha.value === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.classList.add("mostrar");
        return;
    }

    if (!email.value.includes("@") || !email.value.includes(".")) {
        mensagem.style.color = "red";
        mensagem.textContent = "Digite um email válido com @gmail.com";
        mensagem.classList.add("mostrar");
        return;
    }

    if (senha.value.length < 6) {
        mensagem.style.color = "red";
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.classList.add("mostrar");
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";
    mensagem.classList.add("mostrar");
});