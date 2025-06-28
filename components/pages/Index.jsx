import StatContainer from "../molecules/StatContainer";
import data from "@/public/database/nav.json";
import Quires from "./Dashboard/Quires";
import ReviewFeedback from "./Dashboard/ReviewFeedback";

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

      <Quires />

      <ReviewFeedback />
    </>
  );
};

export default HomePage;
