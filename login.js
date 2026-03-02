function home() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagemErro");

    mensagem.classList.remove("mostrar");
    mensagem.innerText = "";

    if (email === "" || senha === "") {
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.classList.add("mostrar"); 
        return;
    }

        if (!email.includes("@gmail.com")) {
        mensagem.innerText = "Digite um email válido com @.com";
        mensagem.classList.add("mostrar");
        return;
    }

    if (senha.length < 6) {
    mensagem.innerText = "A senha deve ter pelo menos 6 caracteres!";
    mensagem.classList.add("mostrar");
    return;
}


    window.location.href = "home.html";
}