async function getInfo() {
    try {
        const resposta = await fetch("http://localhost:8080/cliente");
        const dados = await resposta.json();
        
        

        const lista = document.getElementById("listaResultados");
        lista.innerHTML = ""; 

        dados.forEach(cliente => {
            const p = document.createElement("p");
            p.innerText = "Nome: " + cliente.nome + " | Email: " + cliente.email;
            lista.appendChild(p);
        });

    } catch (error) {
        alert("erro" + error);
    }
}



let clientes = [];




async function setInfo() {
    const nomeInput = document.getElementById("nome").value;
    const emailInput = document.getElementById("email").value;
    const dataImput = document.getElementById("data").value;

    const cliente = {
        nome: nomeInput,
        email: emailInput,
        dataDoCadastro:dataImput
    };
    
    if(!nomeInput || !emailInput || !dataImput) {

      
        return  document.getElementById("imput").innerText = "Algum Campo esta Vasio";
    }
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


        document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
}

async function deletar() {

    try {
        const deletar = await fetch("http://localhost:8080/cliente/deletarconta",{
            method: "DELETE"
        });
        getInfo();
    } catch (error) {
          alert("erro" + error);
    }

    
}