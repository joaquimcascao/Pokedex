import { Search } from "lucide-react";
import { useState } from "react";

export const PokedexHomepage = () => {
	const [pokemonSearch, setPokemonSearch] = useState("");

	const handleSearch = async () => {
		if (!pokemonSearch.trim()) return;
		console.log("Sending to backend!", pokemonSearch.toLowerCase());
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	return (
		<div className="relative flex justify-center items-center min-h-screen bg-zinc-900">
			<div className="absolute top-6 right-8 text-zinc-100 hover:text-zinc-400 transition-colors font-medium">
				<a href="/signup">Signup</a>
			</div>
			<div className="absolute top-6 right-22 text-zinc-100 hover:text-zinc-400 transition-colors font-medium">
				<a href="/login">Login |</a>
			</div>
			<div className="flex items-center justify-center flex-col gap-2">
				<h1 className="text-zinc-100 text-7xl">Pokédex</h1>
				<div className=" group flex bg-zinc-800 rounded-4xl items-center pl-3 hover:text-zinc-900 transition-all duration-300">
					<Search className="text-zinc-100" />
					<input type="text"
						placeholder="Type a pokemon's name" className="text-zinc-100 py-2 px-4 w-64 outline-0" value={pokemonSearch}
						onChange={(e) => setPokemonSearch(e.target.value)}
						onKeyDown={handleKeyDown} />
				</div>
				<p className="text-zinc-500 text-sm mt-2">Press Enter to search</p>
			</div>
		</div>
	)
}