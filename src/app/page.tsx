import Image from "next/image";
import Navbar from "./sections/navbar";
import Hero from "./sections/hero";
import About from "./sections/about";
import Team from "./sections/team";
import Services from "./sections/services";
import Process from "./sections/process";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Process />
      <section
        id="portfolio"
        className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 relative"
      >
        {/* Ellipse top-left - same as About (viewBox 201×335, no clipping) */}
        <div className="absolute top-0 left-0 pointer-events-none overflow-hidden hidden sm:block" style={{ width: "201px", height: "335px", zIndex: 1 }}>
          <Image
            src="/Ellipse 2463 (1).svg"
            alt=""
            width={201}
            height={335}
            className="opacity-60"
          />
        </div>
        {/* Ellipse top-right - same as Contact right (2463 (4), viewBox 280×335, no clipping) */}
        <div className="absolute top-50 right-0 pointer-events-none overflow-hidden hidden lg:block" style={{ width: "280px", height: "335px", zIndex: 1 }}>
          <Image
            src="/Ellipse 2463 (4).svg"
            alt=""
            width={280}
            height={335}
            className="opacity-60"
          />
        </div>
        {/* Portfolio Label with Vectors (same style as Process) */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12 relative" style={{ zIndex: 10 }}>
          <Image
            src="/Vector 13.svg"
            alt=""
            width={233}
            height={24}
            className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
          />
          <span
            className="mx-1 sm:mx-1.5 md:mx-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: "-1.8px",
              textAlign: "center",
              color: "rgba(173, 178, 177, 1)",
              opacity: 1,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            Portfolio
          </span>
          <Image
            src="/Vector 9.svg"
            alt=""
            width={233}
            height={24}
            className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
          />
        </div>
        <div className="relative" style={{ zIndex: 10 }}>
          <PortfolioSection />
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
