"use client" 

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

const ReviewCard = ({ name, date, review, rating ,img}) => {
  return (
    <div className="bg-white px-6 py-2">
   <div className="flex items-center gap-2">
   <img src={img} alt="Ellipse" className="rounded-full"/>
       <h3 className="text-hcolor md:text-md text-sm abril">{name}</h3>
   </div>
      <div className="flex items-center gap-2">
        <p className="flex text-md text-[#2CB24B]">
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

const ReviewCard2 = ({ name2, date2, review2, rating2 ,img2}) => {
  return (
    <div className="bg-white px-6 py-2">
   <div className="flex items-center gap-2">
   <img src={img2} alt="Ellipse" className="rounded-full"/>
       <h3 className="text-hcolor md:text-md  text-sm abril ">{name2}</h3>
   </div>
      <div className="flex items-center gap-2">
        <p className="flex text-md text-[#2CB24B]">
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

const InboxDiv = () => {
  const allReviews = reviewsData;
  const ceoReviews = reviewsData2;

  return (
    <section className="mt-12 flex md:flex-row flex-col md:w-9/13 md:gap-5 gap-7">
      {/* Larger Container */}
      <div className="flex-[4] rounded-xl border-x border-gray-100">
        <h4 className="md:text-md text-sm text-light rounded-t-xl bg-[#386B67] px-6 py-3  abril">
          Patient Reviews for Doctors
        </h4>
        {allReviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      {/* Smaller Container */}
      <div className="flex-[3] rounded-xl border-x border-gray-100">
        <h4 className="md:text-md text-sm text-light rounded-t-xl bg-[#4D9691] px-6 py-3  abril">
          CEO Office Feedback
        </h4>
        {ceoReviews.map((review, index) => (
          <ReviewCard2 key={index} {...review} />
        ))}
      </div>
    </section>
  );
};


export default InboxDiv;
