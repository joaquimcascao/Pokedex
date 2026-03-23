import { LoginPage } from "./components/LoginPage";
import { PokedexHomepage } from "./components/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./components/SignUpPage";

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<PokedexHomepage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignUpPage />} />
		</Routes>
		</BrowserRouter>
	)
}

export default App;