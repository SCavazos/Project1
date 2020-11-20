let seen = document.getElementById("pokemon_seen");
let shiny = document.getElementById("pokemon_shiny");
let pokemon_shiny_rate = "";

const button = document.getElementById("pokemon_rate");
button.addEventListener("click", function storePokemonInfo(seen, shiny) {

    pokemon_shiny_rate = parseInt(shiny) / parseInt(seen) * 100;

    document.getElementById("result").innerHTML = (`Your shiny rate is ${pokemon_shiny_rate} %`);
});

