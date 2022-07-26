//import d'express
const express = require('express');
//gestion des erreurs cors
const cors = require('cors');

//gestion des variables d'environnements
const dotenv = require('dotenv');
dotenv.config();

//import de mon fichier json
const data = require('./data.json');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  return res.json(data);
});

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log('Server started');
  });
} else {
  app.listen(3200, () => {
    console.log('Server started');
  });
}
