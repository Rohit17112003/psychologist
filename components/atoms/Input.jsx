const Input = ({ id, placeholder, type, name, onChange, value }) => (
  <label
    className="flex items-center w-full gap-4 rounded-lg border border-gray-200 bg-[#0078D4]/10 p-3"
    htmlFor=""
  >
    <i className="ri-hashtag ri-xl text-[#0078D4]"></i>
    <input
      className="placeholder:text-secondary placeholder:font-medium font-medium w-full outline-0"
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      required
    />
  </label>
);

export default Input;
