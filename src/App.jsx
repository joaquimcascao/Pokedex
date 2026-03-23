import { LoginPage } from "./components/LoginPage";
import { PokedexHomepage } from "./components/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<PokedexHomepage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
		</BrowserRouter>
	)
}

export default App;