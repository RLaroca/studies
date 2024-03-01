
function consulta(){
    let cep = document.querySelector("#cep").value;

    if(cep.length !== 8){
        alert("Número de CEP inválido");
        return
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data);
            displayData(data);
        })
    })

    function displayData(dados){
        let display = document.getElementById("results");
        display.innerHTML = `
                                <p>${dados.logradouro}</p>
                                <p>${dados.cep}</p>
                                <p>${dados.bairro}</p>
                                <p>${dados.localidade}</p>
                            `
    }

}