import elementColors from "../data/elementColors.json";

export const AtributteLayout = ({ attribute }) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-2">
        {attribute.map((type) => (
          <span
            key={type}
            className={`${elementColors[type]} text-white font-bold text-sm uppercase px-3 py-1 rounded-full shadow-md`}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};