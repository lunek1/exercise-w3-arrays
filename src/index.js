Arrays
let pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

// print out, in a sentence, how many pokemons I have.
// like: "I have x pokemons!"
const countThem = () => {
  const numberOfPokemons = pokemons.length;
  console.log(`I have ${numberOfPokemons} pokemons!`);
};

countThem();

// order the pokemons alphabetically
const orderThem = () => {
  pokemons.sort(); // Sorts the pokemons array alphabetically
  console.log("Pokemons ordered alphabetically:", pokemons);
};

orderThem();

// reverse the order of the pokemons
const flipThem = () => {
  pokemons.reverse(); // Reverses the order of the pokemons array
  console.log("Pokemons reversed:", pokemons);
};

flipThem();

// print the pokemons in UPPERCASE letters
const makeThemBig = () => {
  pokemons.forEach(pokemon => {
    console.log(pokemon.toUpperCase());
  });
};

makeThemBig();

// only print the pokemons that starts with B
const onlyTheBs = () => {
  pokemons.forEach(pokemon => {
    console.log(pokemon.onlyTheBs());
  });
};


// remove all pokemons that starts with C, you have to change to let 
const notTheCs = () => {
  pokemons = pokemons.filter(pokemon => !pokemon.startsWith("C"));
};

notTheCs();
console.log(pokemons);

// print out name and index of all pokemons
// like: number x - Squirtle
const nameAndIdThanks = () => {
  pokemons.forEach((pokemon, index) => {
    console.log(`Number ${index + 1} - ${pokemon}`);
  });
};

nameAndIdThanks();

// add a pokemon with a name of your choice to the list,
// print the list so you see its there.
const catchPokemon = name => {
  pokemons.push(name);
};

catchPokemon("Mewtwo");
console.log(pokemons);

// check the pokemons to see if a specific pokemon is in the array
const didICatchIt = name => {
  return pokemons.includes(name);
};

console.log(didICatchIt("Pikachu"));

// add the pokemon "Clefairy" in the third place of the array
// print the list so you see its there.
const addInThirdPlace = () => {
  pokemons.splice(2, 0, "Clefairy");
};

addInThirdPlace();
console.log(pokemons);

// ***BONUS***
// find the pokemon with the longest name
const theLongestName = () => {
  return pokemons.reduce((longestPokemon, currentPokemon) => currentPokemon.length > longestPokemon.length ? currentPokemon : longestPokemon, "");
};

console.log(theLongestName());

