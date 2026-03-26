import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.post('/api/pokemon', async (req, res) => {
    const POKEMON_NAME = req.body.name?.toLowerCase()

    if (!POKEMON_NAME) {
        return res.status(400).json({ error: "Pokémon name is required" });
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${POKEMON_NAME}`)

        if(!response.ok) {
            return res.status(404).json({ error: `Pokemon not found`})
        }

        const data = await response.json()
        return res.json(data)

    } catch (e) {
        console.error("Server error:", e);
        return res.status(500).json({ e: "Error fetching data from the PokéAPI" });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});