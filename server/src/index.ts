import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
// Convertir l'URL du module en chemin de fichier
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
// Servir les fichiers statiques du dossier build de React
app.use(express.static(path.join(__dirname, '../../dist')));

// Route API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Gérer le routage côté client
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});