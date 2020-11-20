// ----- Re-written to pass user input as parameters. Funcitonality remains the same----- //

function calculateRate(seen, shiny) {
    return (parseInt(shiny) / parseInt(seen)) * 100;
  };

  function storePokemonInfo() {

    const seen = document.getElementById("pokemon_seen").value;
    const shiny = document.getElementById("pokemon_shiny").value;
    const pokemon_shiny_rate = calculateRate(seen, shiny)

    document.getElementById("result").innerHTML = (`Your shiny rate is ${pokemon_shiny_rate}%`);
  };

  const button = document.getElementById("pokemon_rate");
  button.addEventListener("click", storePokemonInfo);





// ----- Original Function Code ----- //
// function storePokemonInfo() {

//     let seen = document.getElementById("pokemon_seen").value;
//     let shiny = document.getElementById("pokemon_shiny").value;
//     let pokemon_shiny_rate = (parseInt(shiny) / parseInt(seen)) * 100;
//     document.getElementById("result").innerHTML = (`Your shiny rate is ${pokemon_shiny_rate} %`);

// };


// const button = document.getElementById("pokemon_rate");
// button.addEventListener("click", storePokemonInfo);