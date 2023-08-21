import Image from "next/image";import React from "react";
const FeatureBox = ({ title, icon, desc }) => {
  return (
    <div className="text-white centering flex-col text-center">
      <Image
        src={icon}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default FeatureBox;
