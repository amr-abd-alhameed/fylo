"use client";import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const scrollRef = useRef();
  const [links, setLinks] = useState(["Features", "Team", "SignIn"]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollRef.current.style.padding = "20px 0px";
        scrollRef.current.style.background = "#0c1524";
      } else {
        scrollRef.current.style.background = "transparent";
        scrollRef.current.style.padding = "64px 0px";
      }
    });
  }, []);
  return (
    <header
      ref={scrollRef}
      className="    py-16 fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 "
    >
      <div className="container flex items-center justify-between gap-[30px] sm:gap-[0px] flex-col sm:flex-row">
        <Link href="/">
          <Image src={logo} width={90} height={90} alt={"logo Image"} />
        </Link>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <Link
                  className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300"
                  href={`#${link.toLowerCase()}`}
                  id={`#${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
