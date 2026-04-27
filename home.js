function perfil() {
    window.location.href = "perfil.html"
}

function sair() {
    window.location.href = "login.html"
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