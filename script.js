const input = document.getElementById("search-input");
const button = document.getElementById("search-button");

// elements to fill with data

const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeDisplay = document.getElementById("sprite-container");

const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const typesElement = document.getElementById("types");

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
  } catch (error) {
    alert("Pokemon not found");
    console.log(error);
  }
};

const displayData = (data) => {
  const { name, id, weight, height, stats, sprites, types } = data;

  pokeName.textContent = `${name.toUpperCase()}`;
  pokeId.textContent = `#${id}`;
  pokeWeight.textContent = `Weight: ${weight}`;
  pokeHeight.textContent = `Height: ${height}`;
  pokeDisplay.innerHTML = `<img id="sprite" src="${sprites.front_default}" alt="${name}" />`;

  const typesArray = types.map((type) => type.type.name.toUpperCase());
  typesElement.innerHTML = "";
  typesArray.forEach((type) => {
    typesElement.innerHTML += `<h4 class="type">${type}</h4>`;
    console.log(type);
  });

  hp.textContent = stats[0].base_stat;
  attack.textContent = stats[1].base_stat;
  defense.textContent = stats[2].base_stat;
  specialAttack.textContent = stats[3].base_stat;
  specialDefense.textContent = stats[4].base_stat;
  speed.textContent = stats[5].base_stat;
};

const cleanInput = (str) => {
  return str.toLowerCase();
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("button clicked", "input value: ", input.value);
  const pokemonToSearch = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${cleanInput(
    input.value
  )}`;
  fetchData(pokemonToSearch);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("button clicked", "input value: ", input.value);
    const pokemonToSearch = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${cleanInput(
      input.value
    )}`;
    fetchData(pokemonToSearch);
  }
});
