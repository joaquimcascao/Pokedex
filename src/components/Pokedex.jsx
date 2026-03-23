import { Search } from "lucide-react";
export const PokedexHomepage = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-zinc-900">
			<div className="flex items-center justify-center flex-col gap-2">
				<h1 className="text-zinc-100 text-7xl">Pokedex</h1>
				<div className="flex bg-zinc-800 rounded-4xl items-center pl-3">
					<Search className="text-zinc-100" />
					<input type="text" placeholder="Type a pokemon's name" className="text-zinc-100 py-2 px-4 w-64 outline-0" />
				</div>
			</div>
		</div>
	)
}