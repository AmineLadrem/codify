import Image from "next/image";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Team from "./sections/team";
import Services from "./sections/services";
import Process from "./sections/process";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Process />
    </>
  );
}
