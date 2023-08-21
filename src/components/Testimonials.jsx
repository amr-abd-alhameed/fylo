"use client";
import Image from "next/image";
import quote from "../../public/assets/bg-quotes.png";
import { useState } from "react";
import TestimonialBox from "./TestimonialBox";
import logo1 from "../../public/assets/profile-1.jpg";
import logo2 from "../../public/assets/profile-2.jpg";
import logo3 from "../../public/assets/profile-3.jpg";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: logo1,
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: logo2,
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: logo3,
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);
  return (
    <section className="pb-[350px] mt-[150px]" id="team">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <Image src={quote} alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {testData.map((item) => (
            <TestimonialBox
              key={item.id}
              desc={item.desc}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
