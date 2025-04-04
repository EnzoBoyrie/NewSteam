import express from 'express';
import pool from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const games = await pool.query('SELECT * FROM games');
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;