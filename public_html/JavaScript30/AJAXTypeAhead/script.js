// Katie Nordberg 9-13-2021

/* I have never ever EVER been able to work with json files, or fetch - or promises in general. This is the first time I have been able to get anything like this to work. Granted, there is probably some way to do it without uploading my json file online and then having to fetch it. But it was important to me to use fetch in this project. And I'm so proud that its working! */
const endpoint = 'https://raw.githubusercontent.com/Katie-N/JavaScript2/master/public_html/JavaScript30/AJAXTypeAhead/petOwnerStats.json';
let states = [];

fetch(endpoint).then(blob => blob.json()).then(data => states = data);

// ADDME: Search for less than/greater than percentage too
// I added this function to remove any characters that should not be in the RegExp so there are no errors thrown Ex. (, ), +, *, \, [, ?. I found this function here
function cleanAString(dirtyString) {
  let clean = dirtyString.replace(/[^a-zA-Z]/g, '');
  return clean;
}

function findMatches(wordToMatch, states) {
  let cleanString = cleanAString(wordToMatch);

  return states.filter(state => {
    const regex = new RegExp(cleanString, "gi");
    return state.state.match(regex) || state.petsPercentage.match(state.petsPercentage > regex);
  })
}

// ADDME Format number to be percentage
function displayMatches() {
  // I changed the code to only display the top 10 results instead of all of them. But if I would later need to have all of the matches I still have access to the original array.
  const matchArray = findMatches(this.value, states);
  const shortenedMatchList = matchArray.slice(0, 10);

  const html = shortenedMatchList.map(state => {
    const cleanString = cleanAString(this.value);
    const regex = new RegExp(cleanString, "gi");
    const search = state.state.replace(regex, `<span class="highlight">${cleanString}</span>`);
    return `
      <li>
        <span class="name">${search}</span>
        <span class="petPopulation">${state.petsPercentage}</span>
      </li>
    `
  }).join("");

  suggestions.innerHTML = html;
}

const searchInput = document.getElementById("search");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("keyup", displayMatches);
