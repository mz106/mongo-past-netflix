const fs = require("fs");
// const { movie } = require("./models.js")

exports.createMovie = (id, name, year, director) => {
  const movie = new movie({id: id, name: name, year: year, director: director});
  console.log(movie)
};


