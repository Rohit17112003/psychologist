const Textarea = ({ id, onChange, placeholder, value, name, style }) => {
  return (
    <textarea
      className={`${style} h-20 w-full bg-[#f3f3f3] rounded-xl border border-gray-200  px-3 py-2 outline-0 placeholder:text-slate-700`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    ></textarea>
  );
};

export default Textarea;
