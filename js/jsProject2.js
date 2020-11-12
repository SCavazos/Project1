let pokemonList

function handleClick(event) {

    console.log(event.target.alt);
   

};

fetch('https://pokeapi.co/api/v2/pokedex/kanto')
  .then(response => response.json())
  .then(data => {
    console.log(data);

    data.pokemon_entries.forEach(pokemon => { 
        const name = pokemon.pokemon_species.name;
        const url = pokemon.pokemon_species.url;
        console.log("url", url);
        pokemonList = pokemonList + `<a><img src= "https://img.pokemondb.net/sprites/black-white/normal/${name}.png" alt= "${name}" onclick="handleClick(event)"></a>`

    })

    
    document.getElementById("kantoPokemon").innerHTML = pokemonList;
    });



// selectElement.addEventListener('change', (event) => {
//     const result = document.querySelector('.result');
//     result.textContent = `You like ${event.target.value}`;
//     console.log(event);

// }); 

