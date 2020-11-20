
const seen = document.getElementById("pokemon_seen").value;
const shiny = document.getElementById("pokemon_shiny").value;

const button = document.getElementById("pokemon_rate");
button.addEventListener("click", storePokemonInfo(seen, shiny));


function storePokemonInfo(seen, shiny) {

    let pokemon_shiny_rate = (parseInt(shiny) / parseInt(seen)) * 100;
    document.getElementById("result").innerHTML = (`Your shiny rate is ${pokemon_shiny_rate}`);
};

