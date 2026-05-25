function perfil() {
    window.location.href = "perfil.html";
}

function sair() {
    window.location.href = "login.html";
}

function animais(){
        window.location.href = "animais.html";

}

let indice = 0;
const depoimentos = document.querySelectorAll(".depoimento");

function mostrarDepoimento() {
    depoimentos.forEach((d) => {
        d.classList.remove("ativo");
    });

    depoimentos[indice].classList.add("ativo");
}

function proximo() {
    indice++;

    if (indice >= depoimentos.length) {
        indice = 0;
    }

    mostrarDepoimento();
}

function anterior() {
    indice--;

    if (indice < 0) {
        indice = depoimentos.length - 1;
    }

    mostrarDepoimento();
}

//Comentários//

const form = document.getElementById("form-comentario");
const input = document.getElementById("input-comentario");
const lista = document.getElementById("lista-comentarios");

let comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

function renderizarComentarios() {
    lista.innerHTML = "";

    comentarios.forEach((comentario) => {
        const div = document.createElement("div");
        div.classList.add("comentario");
        div.textContent = comentario;
        lista.appendChild(div);
    });
}

renderizarComentarios();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const texto = input.value.trim();

    if (texto === "") return;

    comentarios.push(texto);

    localStorage.setItem("comentarios", JSON.stringify(comentarios));

    input.value = "";

    renderizarComentarios();
});