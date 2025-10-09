"use client";
import Image from "next/image";
import { useRef, useState, MouseEvent, useEffect } from "react";

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsGrabbing(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsGrabbing(false);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isGrabbing || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Infinite circular scroll effect
  const handleScroll = () => {
    if (!scrollContainerRef.current || isGrabbing) return;
    const container = scrollContainerRef.current;
    const itemWidth = 280 + 32; // card width + gap
    const arrayWidth = itemWidth * 8; // 8 cards
    
    if (container.scrollLeft >= arrayWidth * 2 - 100) {
      container.scrollLeft = arrayWidth;
    } else if (container.scrollLeft <= 100) {
      container.scrollLeft = arrayWidth;
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Set initial scroll position to middle copy
      const itemWidth = 280 + 32;
      const arrayWidth = itemWidth * 8;
      container.scrollLeft = arrayWidth;
    }
  }, []);

  const teamMembers = [
    {
      name: "Rimel ARAB",
      role: "UI/UX Designer",
      image: "/rymel.png",
      width: 280,
      height: 256,
      style: {
        opacity: 1,
        objectFit: 'cover' as const,
        objectPosition: 'center top',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "Abd-Ul-Haq Amine LADREM",
      role: "Co-Founder & Software Engineer",
      image: "/amine.png",
      width: 280,
      height: 256,
      style: {
        opacity: 100,
        objectFit: 'cover' as const,
        objectPosition: 'center top',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "Islem CHETTOUF",
      role: "CEO & Front-end Developer",
      image: "/islem.png",
      width: 280,
      height: 256,
      style: {
        opacity: 100,
        objectFit: 'cover' as const,
        objectPosition: 'center',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "DALIL Faycel",
      role: "Back-end Developer",
      image: "/dalil.png",
      width: 280,
      height: 256,
      style: {
        opacity: 1,
        objectFit: 'cover' as const,
        objectPosition: 'center top',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "Mohammed YOUNSI",
      role: "Founder & Projects Manager",
      image: "/moh.png",
      width: 280,
      height: 256,
      style: {
        opacity: 1,
        objectFit: 'cover' as const,
        objectPosition: 'center top',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "Abdenour GAECEM",
      role: "Projects Manager",
      image: "/abdenour.png",
      width: 280,
      height: 256,
      style: {
        opacity: 1,
        objectFit: 'cover' as const,
        objectPosition: 'center top',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "Yanis LALOUANI",
      role: "Marketing",
      image: "/yanis.png",
      width: 280,
      height: 256,
      style: {
        opacity: 1,
        objectFit: 'cover' as const,
        objectPosition: 'bottom',
        width: '100%',
        height: '100%',
      }
    },
    {
      name: "Elyes OUAHIB",
      role: "Video Editor",
      image: "/yasu.png",
      width: 280,
      height: 256,
      style: {
        opacity: 1,
        objectFit: 'cover' as const,
        objectPosition: 'center',
        width: '100%',
        height: '100%',
      }
    },
  ];

  return (
    <section
      id="team"
      className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative"
      style={{
        minHeight: "1000px",
      }}
    >
    
      <div className="absolute top-0 right-0 pointer-events-none overflow-hidden hidden sm:block" style={{ width: '183px', height: '121px' }}>
        <Image 
          src="/Ellipse 2463 (3).svg" 
          alt="" 
          width={183} 
          height={121}
          className="opacity-60"
        />
      </div>

     
      <div className="absolute left-0 pointer-events-none overflow-hidden hidden sm:block" style={{ top: '80px', width: '340px', height: '519px' }}>
        <Image 
          src="/Ellipse 2464 (1).svg" 
          alt="" 
          width={340} 
          height={519}
          className="opacity-60"
        />
      </div>

    
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
        
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
          Our Team
        </span>
        
        {/* Right Vector */}
        <Image
          src="/Vector 9.svg"
          alt=""
          width={233}
          height={24}
          className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
        />
      </div>

      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <h2
          className="mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-[44.9px] px-4"
          style={{
            maxWidth: "677px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            lineHeight: "1.3",
            letterSpacing: "-0.02em",
            verticalAlign: "middle",
            background:
              "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 64.75%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 1,
          }}
        >
          Meet the People Behind the Code
        </h2>
        <p
          className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "1.6",
            color: "rgba(183, 183, 183, 1)",
            textAlign: "center",
          }}
        >
          Our talented team of developers, designers, and innovators work together to transform your ideas into exceptional digital solutions. With diverse expertise and a shared passion for excellence, we deliver results that exceed expectations.
        </p>
      </div>

      {/* Team Cards - Horizontal Scroll with Infinite Loop */}
      <div className="w-full max-w-[1240px] mx-auto relative mt-8 overflow-visible">
        {/* Left Arrow */}
        <button
          onClick={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
            }
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            cursor: "pointer",
            left: "-70px",
            background: "transparent",
            border: "none",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(55, 255, 213, 0.6))",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0px 0px 15px rgba(55, 255, 213, 0.9))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0px 0px 8px rgba(55, 255, 213, 0.6))";
            }}
          >
            <path d="M15 18L9 12L15 6" stroke="#37FFD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
            }
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            cursor: "pointer",
            right: "-70px",
            background: "transparent",
            border: "none",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0px 0px 8px rgba(55, 255, 213, 0.6))",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0px 0px 15px rgba(55, 255, 213, 0.9))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "drop-shadow(0px 0px 8px rgba(55, 255, 213, 0.6))";
            }}
          >
            <path d="M9 18L15 12L9 6" stroke="#37FFD5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Horizontal scrollable container with drag-to-scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto pb-4 px-4 pt-4 select-none"
          style={{ 
            scrollbarWidth: 'none',
            cursor: isGrabbing ? 'grabbing' : 'grab',
            msOverflowStyle: 'none',
            scrollBehavior: 'auto',
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >

        {/* Render cards 3 times for infinite circular scroll */}
        {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
          <div
            key={index}
            className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-4 flex-shrink-0"
            style={{
              background: "linear-gradient(180deg, rgba(55,255,213,0.35) 0%, rgba(55,255,213,0.05) 100%)",
              zIndex: 10,
              width: "280px",
            }}
          >
            <div
              className="relative rounded-2xl bg-black/40 backdrop-blur-md overflow-hidden h-full flex flex-col"
              style={{ border: "1px solid rgba(255, 255, 255, 0.06)" }}
            >
              {/* Header strip */}
              <div
                className="relative h-52 sm:h-60 md:h-64"
                style={{
                  background:
                    "linear-gradient(180deg, #F8961E 0%, #107478 100%)",
                }}
              >
                {/* Avatar Icon Background */}
                <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    width={member.width}
                    height={member.height}
                    style={member.style}
                  />
                </div>

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 z-[1]"
                 
                />
                
              </div>

              {/* Spacer */}
              <div className="h-4" />

              {/* Content */}
              <div className="px-4 sm:px-5 pt-1 pb-3 text-center flex-1 flex flex-col">
                <h3
                  className="text-base sm:text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#37FFD5]"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "rgba(173, 178, 177, 1)", fontFamily: "Inter, sans-serif" }}
                >
                  {member.role}
                </p>

                <div className="mt-1.5 flex justify-center flex-wrap gap-1.5 mb-3">
                  {["Reliable", "Problem Solver", "Team Player"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs"
                      style={{
                        background: "rgba(55,255,213,0.06)",
                        border: "1px solid rgba(55,255,213,0.12)",
                        color: "#B7B7B7",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#37FFD5", boxShadow: "0 0 12px #37FFD5" }}
                  />
                  <span className="text-[11px] uppercase tracking-wider" style={{ color: "#ADB2B1" }}>
                    Available
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="#37FFD5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider" style={{ color: "#37FFD5" }}>
                    Core Team
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
