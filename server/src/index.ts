import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { joueurs as joueursInit } from './joueurs.js';

// Convertir l'URL du module en chemin de fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let joueurs = joueursInit;

const app = express();
app.use(cors());
app.use(express.json());
// Servir les fichiers statiques du dossier build de React
app.use(express.static(path.join(__dirname, '../../dist')));

// Route API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/joueurs', (req, res) => {
  res.json(joueurs);
});

app.get('/api/joueurs/sorted', (req, res) => {
  res.json(joueurs.sort((joueurA, joueurB) => {
    return joueurB.piecesOr - joueurA.piecesOr
  }));
});

// Gérer le routage côté client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

app.put('/api/joueurs/:id', (req, res) => {
  const { params: { id: idUser }, body: { value } } = req;
  const userIndex = joueurs.findIndex(user => user.id === parseInt(idUser));
  if(joueurs[userIndex].piecesOr + value < 0){
    res.status(400).json({message: "La maison ne fait pas crédit"});;
  }else{
    joueurs[userIndex].piecesOr += value
    res.json(joueurs)
  }
})



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});