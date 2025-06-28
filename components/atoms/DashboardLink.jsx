"use client";
import Link from "next/link";
import { useState } from "react";

const DashboardLink = ({
  active = false,
  label = "Label",
  heroIcon,
  subMenu = [],
  route = "#",
  handleClick = () => {},
}) => {
  const [isSubMenOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    if (subMenu.length > 0) {
      setIsSubMenuOpen((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <li
        onClick={handleClick}
        className="flex w-full items-center justify-between"
      >
        <Link
          href={route}
          onClick={toggleSubMenu}
          className={`${
            active
              ? "bg-primary/10 text-primary"
              : "text-secondary bg-transparent"
          } hover:bg-primary/5 hover:text-primary flex w-full flex-row items-center justify-between rounded-md px-1 py-2.5 transition-all duration-200`}
        >
          <span className="text-md flex items-center gap-1.5">
            
             <span
              className={`ml-2 ${label === "Log out" ? "text-red-600" : "text-gray-800"}`}
            >
            <i className={`${heroIcon} ri-lg`}></i>
            </span>
            <span
              className={`ml-2 ${label === "Log out" ? "text-red-600" : "text-gray-800"}`}
            >
              {label}
            </span>
          </span>
          {subMenu.length > 0 && (
            <i
              className={`${
                isSubMenOpen ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"
              } ri-lg text-primary`}
            ></i>
          )}
        </Link>
      </li>

      {subMenu.length > 0 && (
        <div className={`flex-col gap-1 ${isSubMenOpen ? "flex" : "hidden"}`}>
          {subMenu.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="hover:bg-primary/10 hover:text-primary ms-6 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-gray-500"
            >
              <i className={`${item.icon} ri-md`}></i>
              <span className="capitalize">{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardLink;
