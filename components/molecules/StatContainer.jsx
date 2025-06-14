const StatContainer = ({ index, icon, title, value }) => {
  return (
    <div
      className={`space-y-1 rounded-lg px-5 pt-4 pb-2 shadow ${index < 4 ? "bg-[#56A6A0]" : "bg-primary"} text-light`}
    >
      <h2 className="Sans flex items-center gap-3 font-medium">
        <img src={icon} />

        <span className="text-[1rem] md:text-[1.1rem]">{title}</span>
      </h2>

      <div className="flex items-center justify-between">
        <p className="relative bottom-0 pt-3 text-[1.2rem] font-bold md:text-[1.4rem]">
          {value}
        </p>
        <div>
          <span className={`bg-light rounded-full p-1 ${index < 3 ? "hidden" : ""} cursor-pointer`}>
            <i className="ri-arrow-right-line text-primary font-medium"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatContainer;
