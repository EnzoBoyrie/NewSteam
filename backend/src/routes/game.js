import express from 'express';
import { getDb } from '../db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const db = getDb();
    const games = await db.collection('games').find().toArray();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const db = getDb();
    const result = await db.collection('games').insertOne(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;