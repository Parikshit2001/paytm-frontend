function Button({ label, onClick }) {
  return (
    <div>
      <button onClick={onClick} className="border w-full p-2 text-white bg-black rounded-lg">{label}</button>
    </div>
  );
}

export default Button;
