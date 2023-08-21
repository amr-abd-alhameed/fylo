"use client";import { useState } from "react";
import FeatureBox from "./FeatureBox";
import icon1 from "../../public/assets/icon-access-anywhere.svg";
import icon2 from "../../public/assets/icon-security.svg";
import icon3 from "../../public/assets/icon-collaboration.svg";
import icon4 from "../../public/assets/icon-any-file.svg";
const Feature = () => {
  const [items, setItems] = useState([
    {
      icon: icon1,
      title: "Acces your files,anywhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: icon2,
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: icon3,
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
    {
      icon: icon4,
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
    },
  ]);
  return (
    <section className="pb-[150px] " id="feature">
      <div className="container ">
        <div
          className=" grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] max-w-full mx-auto
    "
        >
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
