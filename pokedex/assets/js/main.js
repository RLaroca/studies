const newList = document.getElementById("pokemonList");
const button = document.getElementById("loadMore");
const limit = 5;
let offset = 0;



function loadPokemons(offset, limit){

    function convert(pokemon){
        return 
    }

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {newList.innerHTML += pokemons.map(
        (pokemon) => 
            `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.id}</span>
                <span class="name">${(pokemon.name).toUpperCase()}</span>
                <div class="detail">
                    <ol class="pokemonList">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li> `).join("")}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>` 
    ).join("")})


}

loadPokemons(offset, limit);

button.addEventListener('click', () => {
    offset += limit
    loadPokemons(offset, limit)
})








