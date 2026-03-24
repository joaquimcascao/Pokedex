import { LoginPage } from "./components/LoginPage";
import { PokedexHomepage } from "./components/Pokedex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUpPage } from "./components/SignUpPage";
import { AccountCreated } from "./components/AccountCreated";

function App() {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<PokedexHomepage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/accountcreated" element={<AccountCreated />} />
		</Routes>
		</BrowserRouter>
	)
}

export default App;