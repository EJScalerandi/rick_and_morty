const http = require('http');
const PORT = 3001;
const { getCharById } = require('./controllers/getCharById'); // Asegúrate de que la importación sea correcta

http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url, method } = req;

  if (url.startsWith("/rickandmorty/character/")) {
    // Dividir la URL en partes utilizando una barra como separador
    const parts = url.split("/");
    // Obtener el ID del personaje
    const id = parts[parts.length - 1];

    try {
      // Llama a la función getCharById y pasa el ID como parámetro
      await getCharById(req, res, id);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
