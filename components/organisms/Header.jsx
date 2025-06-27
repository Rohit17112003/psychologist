import Link from "next/link";

const Header = ({ isSidebarOpen, setIsSidebarOpen, pageTitle }) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-white px-5 py-5  md:px-8">
      <div className="flex items-center gap-4 sm:gap-0">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <Link href="/" className="text-gray-800">
          <h1 className="md:text-3xl text-xl font-bold text-nowrap capitalize">
            {pageTitle}
          </h1>
        </Link>
      </div>

      <div className="flex w-2/3 flex-row items-center justify-end gap-2">
        {
          <div className="flex items-center gap-6">
           <Link href="/notification" className="mt-3">
             <span>
              <i className="ri-notification-3-fill ri-lg text-primary "></i>
              <p className="bg-red-500 text-light Lato h-5 w-5 rounded-full text-[0.8rem] flex items-center justify-center -mt-9 ml-2.5 absolute">2</p>
            </span>
           </Link>
            <Link href="/">
             {/* <img src="../image/profile.svg" alt="profile" className="rounded-full"/> */}
            </Link>
          </div>
        }
      </div>
    </header>
  );
};

export default Header;
