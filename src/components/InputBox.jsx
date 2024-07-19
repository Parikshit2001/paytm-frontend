function InputBox({ label, placeholder, onChange, value, type="text" }) {
  return (
    <div className="flex flex-col items-start mb-4">
      <p className="font-medium mb-1">{label}</p>
      <div className="w-full">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className="w-full p-1 border rounded"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default InputBox;
