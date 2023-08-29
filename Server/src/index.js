const http = require('http');
const characters = require('./utils/data.js'); 
const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const {url} = req;

  if(url.includes("/rickandmorty/character")){
    const parts = url.split("/");
    const id = parts[parts.length - 1];
    const character = characters.find((ch) => ch.id === parseInt(id));

    if(character){
      res.writeHead (200, {'Content-Type': 'application/json'});
      return res.end(flavioJSON.stringify(character));
    }
    else{
      res.writeHead(404, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify({error: "Character not found"}));
    }
  }
  

  }).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


