"use client";import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/assets/logo.svg";
import logo2 from "../../public/assets/icon-location.svg";
import logo3 from "../../public/assets/icon-phone.svg";
import logo4 from "../../public/assets/icon-email.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [contact, setContact] = useState([
    { icon: logo3, text: "+20121212121" },
    { icon: logo4, text: "example@fylo.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <footer className="bg-[#0c1524] pt-[350px] md:pt-[200px] pb-[100px]">
      <div className="container ">
        <Link href="/">
          <Image src={logo} className="object-contain w-[175px] h-[66px]" />
        </Link>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-4 max-w-full w-[340px]">
            <Image src={logo2} className="object-contain w-[18px] h-[18px]" />
            <p className="font-normal text-sm tracking-[0.8px]">
              lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. A,
              tempore? Vero adipisci eveniet voluptatibus cupiditateLorem ipsum
              dolor sit amet consectetur
            </p>
          </div>
          <div>
            {contact.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((item) => (
              <li key={item}>
                <Link
                  href={item.toLowerCase()}
                  className=" hover:text-primary transition-all duration-200 text-base"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <Link href={item} className="group">
                  <div className="w-[40px] h-[40px] centering border border-white rounded-[50%]">
                    {item === "facebook" ? (
                      <FaFacebookF className="  group-hover:text-primary transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className="  group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className="  group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
