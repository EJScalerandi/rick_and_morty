const axios = require('axios');

const getCharById = (req, res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      // Extrae los datos relevantes de la respuesta
      const { id, name, status, species, gender, origin, image } = response.data;

      // Crea un objeto con las propiedades requeridas
      const characterData = {
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      };

      // Devuelve una respuesta en formato JSON con el personaje obtenido
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(characterData));
    })
    .catch((error) => {
      // Maneja el error y devuelve una respuesta de error
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    });
};

module.exports = { getCharById };
