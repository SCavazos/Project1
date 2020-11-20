//------------ endpoint for pokedex entry info -----
// https://pokeapi.co/api/v2/pokemon/${name}
// need id, name, height, weight, type
// https://pokeapi.co/api/v2/pokemon-species/${name}
// need flavor text from here 

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let pokemonName = urlParams.get('name');

let pokemonInfo = "";


fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  .then(response => response.json())
  .then(data => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.name}`)
    .then(response => response.json())
    .then(textData => {
        console.log(textData);
        console.log(data);

        Object.entries(data).forEach(info => { 

            if (info[0] === "id" || info[0] === "name" || info[0] === "type") {
                pokemonInfo = pokemonInfo + `<div>${info[0]}: ${info[1]}</div>`
            };

            if (info[0] === "height") {

                pokemonInfo = pokemonInfo + `<div>${info[0]}: ${info[1]} M</div>`;
            };

            if (info[0] === "weight") {

                pokemonInfo = pokemonInfo + `<div>${info[0]}: ${info[1]} KG</div>`;
            };


        });

        document.getElementById("sprite").innerHTML = `<a href="http://pokemondb.net/pokedex/${data.name}"><img src="https://img.pokemondb.net/sprites/black-white/shiny/${data.name}.png" alt="${data.name}"></img></a>`;

        document.getElementById("pokemon_info").innerHTML = pokemonInfo;

        document.getElementById("pokemon_flavor_text").innerHTML = textData.flavor_text_entries[6].flavor_text;

    });
});

