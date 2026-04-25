const form = document.querySelector(".form-contato");

form.addEventListener("submit", function(event){

    event.preventDefault(); 

    const nome = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const mensagem = form.querySelector("textarea").value.trim();

    // validação
    if(nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Digite um email válido.");
        return;
    }

    alert("Mensagem enviada com sucesso! 🐾");

    form.reset();
});