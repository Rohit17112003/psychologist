import nav from "@/public/database/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DashboardLink from "../atoms/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = nav;
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    setShowLogoutModal(true);
  };

  const proceedLogout = () => {
    setShowLogoutModal(false);
    router.replace("/auth/signin");
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 transform bg-white transition-transform duration-300 md:relative md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 md:w-80 xl:w-80`}
      >
        <nav className="flex h-full flex-col gap-2 py-4 md:gap-7">
          <div className="flex px-8 md:mt-5">
            <Link href="/">
              <h1 className="text-hcolor text-[1.4rem] font-bold md:text-[2.5rem]">
                LOGO
              </h1>
            </Link>
          </div>

          <div className="flex px-8 md:mt-8">
            <Link href="/">
              <h1 className="abril text-hcolor text-[1.2rem] font-bold md:text-4xl">
                OVERVIEW
              </h1>
            </Link>
          </div>

          <ul className="scrollbar-hidden flex h-full w-full flex-col gap-2 overflow-y-scroll px-6 text-lg md:text-xl md:mt-5">
            <div className="flex w-full flex-col gap-2">
              {navigation.map((item, index) => {
                const { route, label, icon, children } = item;
                return (
                  <DashboardLink
                    key={index}
                    active={path === route}
                    route={route}
                    label={label}
                    heroIcon={icon}
                    handleClick={() => setIsSidebarOpen(false)}
                    subMenu={children || []}
                  />
                );
              })}

              <DashboardLink
                route="#"
                label="Log out"
                heroIcon="ri-logout-circle-line"
                handleClick={confirmLogout}
              />

              <div className="md:pr-26 pr-26 pb-12 flex relative justify-center mt-10">
                <img
                  src="../image/Question.svg"
                  alt="Question"
                  className="absolute -mt-7"
                />
                <div className="text-light flex flex-col justify-center rounded-xl bg-blue-600 md:px-0 px-2 pt-12 pb-5 jakarta">
                  <h1 className="text-center text-[1.1rem] md:text-[1.4rem]">
                    Help Center
                  </h1>
                  <p className="text-center text-[0.65rem] md:text-[0.66rem] px-4 md:py-3 py-2">
                    Having Trouble in Exploring Please contact us for more
                    questions.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-light hover:text-light rounded-lg px-3 py-1.5 text-[0.7rem] text-blue-500 hover:bg-black md:text-[0.8rem] cursor-pointer">
                      Go To Help Center
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </div>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000079] bg-opacity-30">
          <div className="bg-white p-6 rounded-lg shadow-md w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 text-sm bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={proceedLogout}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;