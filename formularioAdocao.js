function perfil() {
    window.location.href = "perfil.html";
}

function sair() {
    window.location.href = "login.html";
}

const formulario = document.querySelector(".form-adocao");

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputs = formulario.querySelectorAll("input, select, textarea");

    let vazio = false;

    inputs.forEach(function (campo) {

        if (campo.value.trim() === "") {
            vazio = true;
        }

    });

    if (vazio) {

        alert("Preencha todos os campos!");
        return;
    }

    alert("Formulário enviado com sucesso! 🐾");

    formulario.reset();

});