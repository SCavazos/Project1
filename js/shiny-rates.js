function storePokemonInfo() {
    const pokemon_seen = document.getElementById("pokemon_seen").value;
    const pokemon_shiny = document.getElementById("pokemon_shiny").value;
    const pokemon_shiny_rate = parseInt(pokemon_shiny) / parseInt(pokemon_seen);
    document.getElementById("result").innerHTML = (`Your shiny rate is ${pokemon_shiny_rate}`);
}

const button = document.getElementById("pokemon_rate");
button.addEventListener("click", storePokemonInfo);

