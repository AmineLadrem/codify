"use client";
import Image from "next/image";
import { useRef, useState, MouseEvent, useEffect } from "react";

export default function Team() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollStartRef = useRef(0);
  const startXRef = useRef(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const teamMembers = [
    { name: "Rimel ARAB", role: "UI/UX Designer", image: "/rymel.png" },
    { name: "Abd-Ul-Haq Amine LADREM", role: "Software Engineer", image: "/amine.png" },
    { name: "Islem CHETTOUF", role: "Founder & Software Engineer", image: "/islem.png" },
    { name: "DALIL Faycel", role: "Software Engineer", image: "/dalil.png" },
    { name: "Mohammed YOUNSI", role: "Founder & Projects Manager", image: "/moh.png" },
    { name: "Abdenour GAECEM", role: "AI Engineer", image: "/abdenour.png" },
  ];

  const cardWidth = 300;
  const gap = 32; // gap-8
  const itemWidth = cardWidth + gap;
  const cardCount = teamMembers.length;
  const arrayWidth = cardCount * itemWidth - gap; // exact width of one set

  // Infinite circular scroll – seamless loop (runs during grab too)
  const adjustScrollLoop = (mouseX?: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const pos = container.scrollLeft;
    let didLoop = false;
    if (pos >= arrayWidth * 2 - 200) {
      container.scrollLeft = pos - arrayWidth;
      scrollStartRef.current = container.scrollLeft;
      didLoop = true;
    } else if (pos <= 200) {
      container.scrollLeft = pos + arrayWidth;
      scrollStartRef.current = container.scrollLeft;
      didLoop = true;
    }
    if (didLoop && mouseX !== undefined) {
      startXRef.current = mouseX;
    }
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsGrabbing(true);
    const rect = scrollContainerRef.current.getBoundingClientRect();
    startXRef.current = e.pageX - rect.left;
    scrollStartRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsGrabbing(false);
  };

  const handleMouseUp = () => {
    adjustScrollLoop();
    setIsGrabbing(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isGrabbing || !scrollContainerRef.current) return;
    e.preventDefault();
    const rect = scrollContainerRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollStartRef.current - walk;
    adjustScrollLoop(x);
  };

  // Islem (index 2) et Mohammed (index 4) au centre par défaut
  const islemIndex = 2;
  const younsiIndex = 4;
  const viewportW = 1240;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const arrW = cardCount * (cardWidth + gap) - gap;
      const centerOffset =
        ((islemIndex + younsiIndex) / 2) * itemWidth + cardWidth / 2 - viewportW / 2;
      const initialScroll = arrW + Math.max(0, Math.min(centerOffset, arrW - viewportW));
      container.scrollLeft = initialScroll;
    }
  }, [cardCount, cardWidth, gap, islemIndex, younsiIndex, viewportW, itemWidth]);

  const imageSize = 320;

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
              scrollContainerRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
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
              scrollContainerRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
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
          onScroll={() => adjustScrollLoop()}
        >

        {/* Render cards 3 times for infinite circular scroll */}
        {[...teamMembers, ...teamMembers, ...teamMembers].map((member, index) => (
          <div
            key={index}
            className="group relative rounded-3xl flex-shrink-0 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02]"
            style={{
              width: `${cardWidth}px`,
              zIndex: 10,
              background: "linear-gradient(145deg, rgba(30, 32, 32, 0.95) 0%, rgba(18, 20, 20, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{
                boxShadow: "inset 0 0 0 1px rgba(55, 255, 213, 0.15), 0 0 40px -10px rgba(55, 255, 213, 0.2)",
              }}
            />

            {/* Photo area with gradient accent */}
            <div className="relative flex items-center justify-center pt-10 pb-4">
              <div className="absolute inset-0 h-32 bg-gradient-to-b from-teal-500/5 to-transparent" />
              <div
                className="relative rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105"
                style={{
                  width: imageSize * 0.7,
                  height: imageSize * 0.7,
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(55, 255, 213, 0.08)",
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={imageSize}
                  height={imageSize}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: "center 28%",
                    transform:
                    member.image === "/amine.png"
                      ? "scale(1)"
                      : member.image === "/islem.png"
                        ? "scale(1.1)"
                        : "scale(1.05)",
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 pt-0 text-center relative">
              <h3
                className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-teal-400"
                style={{
                  fontFamily: "Inter, sans-serif",
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                {member.name}
              </h3>
              <p
                className="text-sm mt-1.5 font-medium"
                style={{
                  color: "rgba(148, 163, 184, 1)",
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {member.role}
              </p>
            </div>

            {/* Footer */}
            <div
              className="flex items-center justify-center gap-2.5 px-6 py-3.5"
              style={{
                background: "rgba(0, 0, 0, 0.2)",
                borderTop: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#34d399", boxShadow: "0 0 12px rgba(52, 211, 153, 0.6)" }}
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">
                Available
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-teal-400/80">
                Core Team
              </span>
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
