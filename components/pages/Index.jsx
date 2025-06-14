import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";
import InboxTable from "./Dashboard/Inbox";
import InboxDiv from "./Dashboard/InboxDiv";

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

      <InboxTable />

      <InboxDiv />
    </>
  );
};

export default HomePage;
