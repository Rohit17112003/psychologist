import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";
import InboxTable from "./Dashboard/Inbox";

const HomePage = () => {
  const { stats } = data;
  return (
    <>
      <div className="space-y-5 px-0 capitalize md:px-6">
        <section className="grid gap-5 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatContainer key={index} index={index} {...stat} />
          ))}
        </section>
      </div>

      <InboxTable/>

      <section className="grid gap-5 lg:grid-cols-4 mt-10">
        <div className="container-bg h-80 lg:col-span-2">
          <h4 className="rounded-t-xl bg-[#843ED4] p-2 text-sm text-white">
            Total No. of Auctions till Completed
          </h4>
        </div>
        <div className="container-bg h-80">
          <h4 className="rounded-t-xl bg-[#6425FE] p-2 text-sm text-white">
            Total No. of Action Products
          </h4>
        </div>
        <div className="container-bg h-80">
          <h4 className="rounded-t-xl bg-[#FF8A00] p-2 text-sm text-white">
            All Ongoing Auctions
          </h4>
        </div>
      </section>
    </>
  );
};

export default HomePage;
