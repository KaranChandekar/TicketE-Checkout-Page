const InputField = ({ label, placeholder, type }) => {
  return (
    <div className="w-96 rounded-xl border border-solid border-light-gray relative px-4 py-5">
      <label className="text-xs text-primary-gray absolute left-4 -top-2 bg-white px-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-dark-gray outline-none px-1"
      />
    </div>
  );
};
export default InputField;
