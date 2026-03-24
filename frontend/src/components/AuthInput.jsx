export const AuthInput = ({ type, placeholder }) => {
  return (
    <input 
      type={type}
      placeholder={placeholder} 
      className="outline-0 resize-none bg-zinc-900 p-2 rounded-md text-zinc-50" 
    />
  );
};