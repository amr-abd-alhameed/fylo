import Image from "next/image";
import React from "react";
import logo from "../../public/assets/illustration-intro.png";
import bg from "../../public/assets/bg-curvy-desktop.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <section className=" bg-[#1c2230]">
      <div className="centering pt-52 container flex-col">
        <div className="max-w-full w-[750px] mb-[30px]">
          <Image src={logo} alt="landing image" className="w-full h-fit" />
        </div>
        <div className="text-white text-center ">
          <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
            All your files in one secure location,
            <br />
            accessible anywhere.
          </h1>
          <p className=" font-normal text-lg px-[15px] md:mx-auto md:w-[600px] max-w-full mb-[30px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iste deserunt totam itaque nisi veniam voluptas vel, eos aliquam
            nulla impedit commodi.
          </p>
        </div>
        <Link
          href="/"
          className="w-[280px] h-[60px] btn centering rounded-[30px] text-white font-medium capitalize"
        >
          get starting
        </Link>
      </div>
      <div className="w-full h-[200px]">
        <Image alt="background image" src={bg} className="w-full h-full" />
      </div>
    </section>
  );
};

export default Landing;
