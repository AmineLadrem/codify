import Image from "next/image";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}
