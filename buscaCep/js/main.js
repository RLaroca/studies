
function consulta(){
    let cep = document.querySelector("#cep").value;

    if(cep.length !== 8){
        alert("Número de CEP inválido");
        return
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
    .then((response) => {response.json().then(displayData)})

    function displayData(dados){
        let display = document.getElementById("results");
        if(dados.erro){
            display.innerHTML = `<p>Endereço não encontrado</p>`
        }else
        {        
                display.innerHTML = `
                                        <p>${dados.logradouro}</p>
                                        <p>${dados.cep}</p>
                                        <p>${dados.bairro}</p>
                                        <p>${dados.localidade}</p>
                                    `
        }
    }

}

function addUf(){
    const ufs = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
    const ufList = document.getElementById("uf");

    ufs.forEach((uf) => {
        let item = `<option value="${uf}">${uf}</option>`
        ufList.innerHTML += item;
        
    });
}
addUf();

async function searchAdress(){
    let uf = document.getElementById("uf").value;
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let url = `https://viacep.com.br/ws/${uf}/${city}/${street}/json/`;
    if(street.length<=3 || city.length<=3){
        alert(`Digite um endereço valido`)
    }else{

    const response = await fetch(url);
    const data = await response.json();
    
    if(data.erro || data[0] == null){
        alert (`Endereço não encontrado`)
        console.log(data);
    }else{
        
        let display = document.getElementById("results");
        
        data.forEach((ads) => display.innerHTML = 
            `
            <p>${ads.cep}</p>
            <p>${ads.logradouro}</p>
            <p>${ads.localidade}</p>
            <p>${ads.uf}</p>
            `
        )
        
        
    }
}
}
