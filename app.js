async function getInfo() {
    try {
        const resposta = await fetch("http://localhost:8080/cliente");
        const dados = await resposta.text();
        document.getElementById("getInfo").innerText = dados;

    } catch (error) {
        alert("erro" + error);
    }
}

async function setInfo() {
    const nomeInput = document.getElementById("nome").value;
    const emailInput = document.getElementById("email").value;
    const dataImput = document.getElementById("data").value;

    const cliente = {
        nome: nomeInput,
        email: emailInput,
        dataDoCadastro:dataImput
    };
    
    if(!nomeInput || !emailInput || !dataImput) return alert("Digite Alguma Coisa");

    try {
        

    const resposta = await fetch("http://localhost:8080/cliente", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente) 
    });

        const data = await resposta.json();
        document.getElementById("imput").innerText = "Cliente: " + data.nome + " Cadastrado Com Sulcesso!!";
    } catch (error) {
        alert("erro no envio" + error)
    }
}