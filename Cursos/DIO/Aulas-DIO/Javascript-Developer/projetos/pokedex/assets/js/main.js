function convertPokemonToLi(pokemon) {
    return `
     <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map(type => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.image}">
        </div>
    </li>
    `;
}



const pokemonList = document.getElementById('pokemonList');

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(response => response.json())
    .then(jsonBody => jsonBody.results)
    .then((pokemons = []) => {
        pokemons.forEach((val) => {
            fetch(val.url)
                .then(response => response.json())
                .then(pokemonSingle => {

                    const pokemon = {
                        name: pokemonSingle.name,
                        order: pokemonSingle.order,
                        types: pokemonSingle.types.map(t => t.type.name),
                        image: pokemonSingle.sprites.other['official-artwork'].front_default
                            || pokemonSingle.sprites.front_default
                    };

                    pokemonList.innerHTML += convertPokemonToLi(pokemon);
                });
        });
    });
