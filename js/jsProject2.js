let pokemonList

// Test Function

function handleClick(event) {

    console.log(event.target.alt);
    console.log(event.target.dataset.url);
};

// API Request and Callback Function

fetch('https://pokeapi.co/api/v2/pokedex/kanto')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.pokemon_entries.forEach(pokemon => { 
        const name = pokemon.pokemon_species.name;
        const url = pokemon.pokemon_species.url;
        pokemonList = pokemonList + `<img src= "https://img.pokemondb.net/sprites/black-white/normal/${name}.png" alt= "${name}" onclick="handleClick(event)" data-url="${url}">`

    })

    document.getElementById("kantoPokemon").innerHTML = pokemonList;
    });



// selectElement.addEventListener('change', (event) => {
//     const result = document.querySelector('.result');
//     result.textContent = `You like ${event.target.value}`;
//     console.log(event);

// }); 

