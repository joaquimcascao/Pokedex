import express from 'express';
import cors from 'cors';
import { Router } from 'express';
import { getPokemon } from '../controllers/pokemonController.js';

const router = Router();

router.post('/pokemon', getPokemon);
router.all('/keepalive', (req, res) => res.status(200).send('OK'));

export default router;

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: ['https://pokedex-joaquim.vercel.app', 'http://localhost:5173']
}));

app.use(express.json());

app.use('/api', pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Backend running: http://localhost:${PORT}`);
});