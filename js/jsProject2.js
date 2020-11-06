fetch('https://pokeapi.co/api/v2/pokemon-species')
  .then(response => response.json())
  .then(data => console.log(data));