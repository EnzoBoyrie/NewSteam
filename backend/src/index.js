import express from 'express';
import { connectToDatabase } from './db.js';
import gamesRouter from './routes/game.js';
import userRouter from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use('/api/games', gamesRouter);
app.use('/api/users', userRouter);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
});