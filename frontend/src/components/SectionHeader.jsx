import elementColors from "../data/elementColors.json";

export const SectionHeader = ({ title, type }) => {
    return (
        <div className="flex items-center gap-1.5 mt-2 mb-2">
			<span className={`w-0.5 h-3 rounded-full ${elementColors[type]}`} />
			<h2 className="text-zinc-400 font-semibold text-xs">{title}</h2>
		</div>
    )
}