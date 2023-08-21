import Feature from "@/components/Feature";
import GetStarted from "@/components/GetStarted";
import Landing from "@/components/Landing";
import StayProductive from "@/components/StayProductive";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Landing />
      <Feature />
      <StayProductive />
      <Testimonials />
      <GetStarted />
    </>
  );
}
