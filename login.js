function home() {
    const emailOuUsuario = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const mensagem = document.getElementById("mensagemErro");

    mensagem.classList.remove("mostrar");
    mensagem.innerText = "";

    if (!emailOuUsuario || !senha) {
        mensagem.innerText = "Preencha todos os campos!";
        mensagem.classList.add("mostrar");
        return;
    }

    if (senha.length < 6) {
        mensagem.innerText = "A senha deve ter pelo menos 6 caracteres!";
        mensagem.classList.add("mostrar");
        return;
    }

    // Recupera usuários
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se existe usuário
    const usuarioEncontrado = usuarios.find(u =>
        (u.email === emailOuUsuario || u.usuario === emailOuUsuario) && u.senha === senha
    );

    if (!usuarioEncontrado) {
        mensagem.innerText = "Usuário ou senha incorretos!";
        mensagem.classList.add("mostrar");
        return;
    }

    // Salva usuário logado
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));

    // Redireciona para home
    window.location.href = "home.html";
}