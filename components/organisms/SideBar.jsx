import nav from "@/public/database/nav.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import DashboardLink from "../atoms/DashboardLink";

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const path = usePathname();
  const router = useRouter();
  const { navigation } = nav;

  const handleLogout = () => {
    router.replace("/auth/signin");
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 transform bg-white  transition-transform duration-300 md:relative md:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } w-80 md:w-80 xl:w-80`}
    >
      <nav className="flex h-full flex-col gap-7 py-4">
        <div className="flex px-8 mt-5">
          <Link href="/">
            <h1 className="text-[2.5rem] font-bold text-hcolor">LOGO</h1>
          </Link>
        </div>

        <div className="flex px-8 mt-8">
          <Link href="/">
            <h1 className="text-4xl font-bold abril text-hcolor">OVERVIEW</h1>
          </Link>
        </div>

        <ul className="flex h-full w-full flex-col gap-2 text-xl overflow-y-scroll scrollbar-hidden px-8 mt-5">
          <div className="flex w-full flex-col gap-2">
            {navigation.map((item, index) => {
              const { route, label, icon, subMenu } = item;
              return (
                <DashboardLink
                  key={index}
                  active={path === route}
                  route={route}
                  label={label}
                  heroIcon={icon}
                  handleClick={() => setIsSidebarOpen(false)}
                  subMenu={subMenu}
                />
              );
            })}

            <DashboardLink
              route="#"
              label="Log out"
              heroIcon="ri-logout-circle-line"
              handleClick={handleLogout}
            />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
