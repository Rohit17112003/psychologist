"use client";
import { useRouter } from "next/navigation";

const reviewsData = [
  {
    name: "Subham Roy",
    date: "4/8/23",
    review:
      "Dr. Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
    rating: 5,
    img: "../image/Ellipse 1.svg",
  },
  {
    name: "Subhan Roy",
    date: "4/8/23",
    review:
      "Dr. Ramesh provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
    rating: 5,
    img: "../image/Ellipse 2.svg",
  },
];

const reviewsData2 = [
  {
    name2: "Ramesh Kumar",
    date2: "4/8/23",
    review2:
      "provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
    rating2: 5,
    img2: "../image/Ellipse 3.svg",
  },
  {
    name2: "Ramesh Kumar",
    date2: "4/8/23",
    review2:
      "provided excellent care and attention during my visits. I felt confident in their expertise and appreciated their friendly demeanor.",
    rating2: 5,
    img2: "../image/Ellipse 4.svg",
  },
];

const ReviewCard = ({ name, date, review, rating, img }) => {

  return (
    <div className="bg-white px-6 py-2">
      <div className="flex items-center gap-2">
        <img src={img} alt="Ellipse" className="rounded-full" />
        <h3 className="text-hcolor md:text-md abril text-sm">{name}</h3>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-md flex text-[#2CB24B]">
          {Array.from({ length: rating }).map((_, i) => (
            <i
              key={i}
              className={`ri-star-s-fill ${
                i === rating - 1 ? "text-[#D9D9D9]" : ""
              }`}
            ></i>
          ))}
        </p>
        <p className="text-sm text-[#bdbbbb]">{date}</p>
      </div>

      <p className="mt-1 text-sm text-[#2D5356D6]">{review}</p>
    </div>
  );
};

const ReviewCard2 = ({ name2, date2, review2, rating2, img2 }) => {
  return (
    <div className="bg-white px-6 py-2">
      <div className="flex items-center gap-2">
        <img src={img2} alt="Ellipse" className="rounded-full" />
        <h3 className="text-hcolor md:text-md abril text-sm">{name2}</h3>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-md flex text-[#2CB24B]">
          {Array.from({ length: rating2 }).map((_, i) => (
            <i
              key={i}
              className={`ri-star-s-fill ${
                i === rating2 - 1 ? "text-[#D9D9D9]" : ""
              }`}
            ></i>
          ))}
        </p>
        <p className="text-sm text-[#bdbbbb]">{date2}</p>
      </div>

      <p className="mt-1 text-sm text-[#2D5356D6]">{review2}</p>
    </div>
  );
};

const ReviewFeedback = () => {
  const allReviews = reviewsData;
  const ceoReviews = reviewsData2;
    const router = useRouter();
  const handlePatientReviews = () => {
    router.push("/patient-reviews");
  };

    const handleSeoFeedback = () => {
    router.push("/seo-feedback");
  };


  return (
    <section className="mt-12 flex flex-col gap-7 md:flex-row md:gap-6">
      {/* Larger Container */}
      <div className="flex-[3] rounded-xl border-x border-gray-100">
        <div className="text-light flex justify-between rounded-t-xl bg-[#386B67] px-6 py-3">
          <h4 className="md:text-md abril text-sm">
            Patient Reviews for Doctors
          </h4>
          <p className="cursor-pointer text-sm" onClick={handlePatientReviews}>See All</p>
        </div>
        {allReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      {/* Smaller Container */}
      <div className="flex-[3] rounded-xl border-x border-gray-100">
        <div className="text-light flex justify-between rounded-t-xl bg-[#4D9691] px-6 py-3">
          <h4 className="md:text-md abril text-sm">CEO Office Feedback</h4>
          <p className="cursor-pointer text-sm" onClick={handleSeoFeedback}>See All</p>
        </div>
        {ceoReviews.map((review, index) => (
          <ReviewCard2 key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewFeedback;
