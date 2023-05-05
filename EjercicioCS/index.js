const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let { data: { results } } = response;
  let characters = results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
    };
  });

  let strCharacters = characters
    .map((personaje) => Object.values(personaje).join(","))
    .join("\n");

  const titles = Object.keys(characters[0]).join(",");

  const final = titles.concat("\n", strCharacters);

  await fs.writeFile(path.join(__dirname, "data.csv"), final);
  // console.log(path.join(__dirname, 'data.csv'))
  console.log(titles);
};

main();
