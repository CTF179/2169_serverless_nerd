const pokeInput = document.createElement("div");
const numberInput = document.createElement("input");
const buttonInput = document.createElement("input");

const pokeDisplay = document.createElement("div");
const pokeNameHeader = document.createElement("h3");
const pokeImage = document.createElement("img");

pokeInput.id = "poke-input";
numberInput.type = "number";
numberInput.id = "number-input";
buttonInput.type = "button";
buttonInput.id = "button-input";

buttonInput.value = "Submit";

pokeDisplay.id = "poke-display";

document.querySelector("body").appendChild(pokeInput);
document.querySelector("body").appendChild(pokeDisplay);

pokeInput.appendChild(numberInput);
pokeInput.appendChild(document.createElement("br"));
pokeInput.appendChild(buttonInput);

pokeDisplay.appendChild(pokeImage);
pokeDisplay.appendChild(document.createElement("br"));
pokeDisplay.appendChild(pokeNameHeader);

/**
 * The fetch api is a modern js interface for making network requests
 *
 * It provides a powerful and flexible way to work with network requests compared to AJAX
 */

// basic Fetch request

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

// Send Data post

// fetch("post example", {
//     method: "POST",
//     headers: {
//         'Content-Type': "application/json"
//     },
//     body: JSON.stringify({message: "hello"})
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

numberInput.addEventListener("change", () => {
  searchPokeApi(numberInput.value);
});

async function searchPokeApi(number) {
  let url = `https://pokeapi.co/api/v2/pokemon/${number}`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    updatePokeDisplay(data);
  } catch (error) {
    console.error(error);
  }
}

function updatePokeDisplay(pokeData) {
  pokeNameHeader.textContent = pokeData.name;
  pokeImage.src = pokeData.sprites.front_default;
}
