function cadastrar() {
    const nome = document.getElementById("nome").value.trim();
    const usuario = document.getElementById("usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

    const mensagemErro = document.getElementById("mensagemErro");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    mensagemErro.classList.remove("mostrar");
    mensagemSucesso.classList.remove("mostrar");

    // Validação de campos
    if (!nome || !usuario || !email || !telefone || !senha || !confirmarSenha) {
        mensagemErro.textContent = "Preencha todos os campos!";
        mensagemErro.classList.add("mostrar");
        return;
    }

    if (senha !== confirmarSenha) {
        mensagemErro.textContent = "As senhas não são iguais!";
        mensagemErro.classList.add("mostrar");
        return;
    }

    if (senha.length < 6) {
        mensagemErro.textContent = "A senha deve ter pelo menos 6 caracteres!";
        mensagemErro.classList.add("mostrar");
        return;
    }

    // Recupera usuários existentes
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se já existe o usuário ou email
    if (usuarios.some(u => u.usuario === usuario || u.email === email)) {
        mensagemErro.textContent = "Usuário ou e-mail já cadastrado!";
        mensagemErro.classList.add("mostrar");
        return;
    }

    // Cria novo usuário
    const novoUsuario = { nome, usuario, email, telefone, senha };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensagemSucesso.textContent = "Cadastro realizado com sucesso! Redirecionando para login...";
    mensagemSucesso.classList.add("mostrar");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}