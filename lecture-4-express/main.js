const express = require("express");
const pokedex = require("./pokedex");

// for (let p of pokedex) {
//   console.log("taco", p);
// }

const app = express();

// Read (list) all pokemon
app.get("/pokemon-as-object", (req, res) => {
  //   const data = {}; // start with empty OBJECT

  //   for (let p of pokedex) {
  //     data[p[0]] = p[1];
  //   }

  //   res.json(data);

  // This is the same as the logic above (but much simpler)
  res.json(Object.fromEntries(pokedex));
});

app.get("/pokemon-as-array-of-tuples", (req, res) => {
  //   const data = []; // start with empty ARRAY

  //   for (let p of pokedex) {
  //     data.push([p[0], p[1]]);
  //   }

  //   res.json(data);

  // This is the same as the logic above (but much simpler)
  res.json(Array.from(pokedex));
});

app.get("/pokemon-as-array-of-objects", (req, res) => {
  const data = [];

  for (let p of pokedex) {
    data.push({
      name: p[0],
      ...p[1],
    });
  }

  res.json(data);
});

app.listen(3456, () => {
  console.log("Server started successfully using port 3456!!!");
});
