import express from 'express';
import gamesRouter from './routes/games.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/games', gamesRouter);

app.listen(PORT, () => {
  console.log(`Le back est sur le port http://localhost:${PORT}`);
});