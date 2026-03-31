# Pokédex

> A full-stack Pokédex that lets you search any Pokémon and explore its types, abilities, and weaknesses through a clean and minimalist interface.
## Preview

![Demo](assets/demo.gif)

**Live Demo:** [pokedex-joaquim.vercel.app](https://pokedex-joaquim.vercel.app)

---

## Features

- Search any Pokémon by name
- Explore Pokémon information, including types, abilities, and weaknesses

---

## Tech Stack

**Frontend**
- React (Vite)
- React Router
- Tailwind CSS v4
- Deployed on Vercel

**Backend**
- Node.js + Express
- REST API
- Deployed on Render

**External API**
- [PokéAPI](https://pokeapi.co) — free, open Pokémon data

## Running Locally

**1. Clone the repo**
```bash
git clone https://github.com/joaquimcascao/Pokedex.git
cd Pokedex
```

**2. Start the backend**
```bash
cd backend
npm install
node src/server.js
```

**3. Start the frontend**
```bash
cd frontend
npm install
npm run dev
```

**4. (Optional) Create a `.env` file in `frontend/`**

Only needed if your backend runs on a different port:
```
VITE_API_URL=http://localhost:3001
```
> By default, the frontend already points to `localhost:3001`.

## Author

**Joaquim Cascão** — [GitHub](https://github.com/joaquimcascao)