import Image from "next/image";import React from "react";
import logo from "../../public/assets/illustration-stay-productive.png";
import logo2 from "../../public/assets/icon-arrow.svg";

import Link from "next/link";
const StayProductive = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <h3 className="capitalize font-medium text-[35px] leading-[50px] ">
            stay Productive <br />
            whenever you are
          </h3>
          <div className="tracking-[0.8px] text-sm font-normal my-[15px]">
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
              beatae, laboriosam enim voluptatum quia
            </p>
            <p className="mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed
              beatae, laboriosam enim voluptatum quia
            </p>
          </div>
          <Link
            href="/"
            className="capitalize text-primary hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] w-fit "
          >
            see how dev amr works
            <Image
              src={logo2}
              alt="arrow image"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
