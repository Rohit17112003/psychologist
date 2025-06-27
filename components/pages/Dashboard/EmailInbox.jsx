"use client";
import { useRouter } from "next/navigation";
import { HiDotsVertical } from "react-icons/hi";

const EmailInbox = () => {
  const router = useRouter();
  return (
    <>
      <div className="rounded-2xl bg-[#2D5356] py-4 pl-4 text-white md:flex-row md:pl-6">
        <h1 className="text-md font-semibold md:text-[1.5rem]">
          <span>
            <i
              onClick={() => router.back()}
              className="ri-arrow-left-line mr-2 cursor-pointer font-normal md:mr-9"
            ></i>
          </span>
          Quires
        </h1>
      </div>
      <div className="text-primary bg-light mt-6 overflow-x-auto rounded-md border border-gray-50">
        <div className="flex justify-between gap-2 px-4 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00000013] md:h-10.5 md:w-10.5">
              <i className="ri-user-fill text-[0.9rem] text-[#0000001f] md:text-[1.3rem]"></i>
            </span>
            <div className="leading-4 md:leading-5">
              <h1 className="abril text-[0.7rem] md:text-[1.1rem] text-secondary">
                Michelle Rivera
                <span className="alegreya md:text-[0.8rem] text-[0.7rem] text-primary">
                  <a href="mailto:michelle.rivera@example.com">
                    &lt;michelle.rivera@example.com&gt;
                  </a>
                </span>
              </h1>
              <p className="alegreya flex items-center text-[0.85rem]">
                to me <i className="ri-arrow-drop-down-fill text-[1.3rem]"></i>
              </p>
            </div>
          </div>
          <div className="md:flex hidden items-center gap-4 text-[1.25rem]">
            <p className="text-[0.7rem] md:text-[0.78rem] Roboto ">
              9:14 AM (8 hours ago)
            </p>
            <i className="ri-star-line"></i>
            <HiDotsVertical />
          </div>
        </div>
        <p className="alegreya md:px-12 px-4 md:pt-4 pb-56 text-[0.9rem] md:text-[1.2rem]">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis
          id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore
          cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt
          sint deserunt ut voluptate aute id deserunt nisi.
        </p>
      </div>
    </>
  );
};

export default EmailInbox;
