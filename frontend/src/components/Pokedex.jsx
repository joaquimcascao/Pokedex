import { Search } from "lucide-react";
import { AuthButton } from "./AuthButton";
import { useState } from "react";
import { TypeLayout } from "./TypeLayout";

export const PokedexHomepage = () => {

	const [query, setQuery] = useState("")
	const [banner, setBanner] = useState("")

	const handleSearch = async (e) => {
		e.preventDefault()
		if (!query) return

		if (query !== "") {
			try {
				const response = await fetch("http://localhost:3001/api/pokemon", {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: query
					})
				})
				const data = await response.json()
				console.log(data)
				setBanner(data)
			} catch (e) {
				console.log(`Error:`, e)
			}
		}
	}

	return (
		<div className="relative flex justify-center items-center min-h-screen bg-zinc-900 font-sans">

			<div className="absolute top-6 right-8 flex gap-4 items-center text-zinc-400 font-medium">
				<a href="/login" className="hover:text-zinc-100 transition-colors">Login</a>
				<span className="text-zinc-700">|</span>
				<a href="/signup" className="hover:text-zinc-100 transition-colors">Signup</a>
			</div>

			<div className="flex items-center justify-center flex-col gap-2">

				<h1 className="text-zinc-100 text-7xl font-bold tracking-tight flex items-center">
					Pokédex
				</h1>

				<div className="group flex bg-zinc-800/50 border border-zinc-700/50 rounded-full items-center pl-4 pr-1 py-1 focus-within:border-zinc-500 transition-all duration-300">
					<Search className="text-zinc-500 size-5" />
					<form onSubmit={handleSearch}>
						<input
							id="search"
							type="text"
							placeholder="Type a pokemon's name"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="bg-transparent text-zinc-100 py-2 px-3 w-72 outline-0 placeholder:text-zinc-500"
						/>
						<AuthButton type="submit" variant="minimal">
							Search
						</AuthButton>
					</form>

				</div>
				{banner && (
					<div className="flex gap-5 p-5 border-2 rounded-lg bg-zinc-800/50 outline-0">
						<div className="w-28 h-28 bg-zinc-900 rounded-lg outline-3">
							<img
								src={banner?.sprites?.front_default}
								alt="pokemon"
								className="w-full h-full object-contain"
							/>
						</div>
						<div className="flex-col">
							<div className="flex gap-2">
							<h1 className="text-zinc-100 font-bold text-2xl">
								{banner?.name.toUpperCase()}
							</h1>
							<h2 className="text-zinc-400 font-bold text-2xl">#{banner?.id}</h2>
							</div>
							<TypeLayout
								type={banner?.types[0]?.type?.name}
								typeTwo={banner?.types[1]?.type?.name}
								banner={banner}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
