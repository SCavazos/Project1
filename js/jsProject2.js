let pokemonList = "";

// Test Function

// function handleClick(event) {

//     console.log(event.target.alt);
//     console.log(event.target.dataset.url);

// };

// API Request and Callback Function

fetch('https://pokeapi.co/api/v2/pokedex/kanto')
  .then(response => response.json())
  .then(data => {
    // console.log(data);

    data.pokemon_entries.forEach(pokemon => { 
        const name = pokemon.pokemon_species.name;
        const url = pokemon.pokemon_species.url;
        pokemonList = pokemonList + `<a href="pokemon.html?name=${name}"><img src= "https://img.pokemondb.net/sprites/black-white/normal/${name}.png" alt= "${name}" data-url="${url}"></a>`

    })

    document.getElementById("kantoPokemon").innerHTML = pokemonList;
    });



