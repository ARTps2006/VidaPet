let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (usuarioLogado) {
    document.getElementById("nome").value = usuarioLogado.nome || "";
    document.getElementById("email").value = usuarioLogado.email || "";
    document.getElementById("telefone").value = usuarioLogado.telefone || "";
    document.getElementById("senha").value = usuarioLogado.senha || "";
    document.getElementById("data").value = usuarioLogado.data || "";
} else {
    alert("Nenhum usuário logado!");
    window.location.href = "login.html";
}

function salvarAlteracoes(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const data = document.getElementById("data").value;

    if (!nome || !email || !telefone || !senha) {
        alert("Preencha todos os campos obrigatórios!");
        return;
    }

    usuarioLogado.nome = nome;
    usuarioLogado.email = email;
    usuarioLogado.telefone = telefone;
    usuarioLogado.senha = senha;
    usuarioLogado.data = data;

    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

    // Atualiza a lista de usuários
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const index = usuarios.findIndex(u => u.usuario === usuarioLogado.usuario);
    if (index !== -1) {
        usuarios[index] = usuarioLogado;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }

    alert("Alterações salvas com sucesso!");
}