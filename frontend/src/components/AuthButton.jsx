export const AuthButton = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="cursor-pointer bg-red-600 text-zinc-50 p-2 rounded-md hover:bg-red-700 transition-colors"
    >
      {children}
    </button>
  );
};