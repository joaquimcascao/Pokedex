import express from 'express';
import cors from 'cors';
import pokemonRoutes from './routes/pokemonRoutes.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: ['https://pokedex-joaquim.vercel.app', 'http://localhost:5173']
}));

app.use(express.json());

app.use('/api', pokemonRoutes);

router.post('/pokemon', getPokemon);
router.all('/keepalive', (req, res) => res.status(200).send('OK'));

app.listen(PORT, () => {
    console.log(`Backend running: http://localhost:${PORT}`);
});