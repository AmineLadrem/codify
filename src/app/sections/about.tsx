import Image from "next/image";

export default function About() {
  return (
    <section 
      id="about"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-2 sm:pt-3 md:pt-4 pb-12 sm:pb-16 md:pb-20 relative"
      style={{
        minHeight: "auto",
      }}
    >
    
      <div className="absolute top-0 left-0 pointer-events-none overflow-hidden hidden sm:block" style={{ width: '201px', height: '335px' }}>
        <Image 
          src="/Ellipse 2463 (1).svg" 
          alt="" 
          width={201} 
          height={335}
          className="opacity-60"
        />
      </div>

     
      <div className="absolute bottom-0 right-0 pointer-events-none overflow-hidden hidden sm:block" style={{ width: '188px', height: '230px' }}>
        <Image 
          src="/Ellipse 2463 (2).svg" 
          alt="" 
          width={188} 
          height={230}
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
          About Us
        </span>
        
    
        <Image
          src="/Vector 9.svg"
          alt=""
          width={233}
          height={24}
          className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
        />
      </div>
      
   
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 mt-8 sm:mt-12 md:mt-16 items-center lg:items-start lg:justify-between">
    
        <div className="w-full lg:w-auto lg:flex-1 max-w-[660px]">
   
          <div
            className="w-full max-w-[453px] mx-auto lg:mx-0"
            style={{
              height: "auto",
              minHeight: "40px",
              borderRadius: "14px",
              border: "1px solid transparent",
              background: "rgba(6, 52, 52, 0.58)",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              position: "relative",
            }}
          >
          
            <div
              style={{
                position: "absolute",
                inset: -1,
                borderRadius: "14px",
                padding: "1px",
                background: "linear-gradient(90.14deg, #37FFD5 0.02%, #115D5D 99.98%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
                zIndex: -1,
              }}
            />
            <span
              className="text-xs sm:text-sm md:text-[15px] text-center"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                lineHeight: "1.8",
                letterSpacing: "0px",
                color: "rgba(183, 183, 183, 1)",
                opacity: 1,
              }}
            >
              Building digital solutions that empower businesses to grow.
            </span>
          </div>
          
        
          <h2
            className="mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl lg:text-[44.9px] text-center lg:text-left"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              lineHeight: "1.4",
              letterSpacing: "-0.02em",
              background: "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 64.75%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            What is CODIFY AGENCY ?
          </h2>
          
       
          <p
            className="mt-6 sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl text-center lg:text-left"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "1.6",
              letterSpacing: "0px",
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            We are a team of passionate developers, designers, and problem-solvers dedicated to transforming ideas into scalable software. Our mission is to help startups and enterprises build reliable digital products that drive innovation, efficiency, and growth. With expertise in modern technologies and a client-first approach, we deliver solutions that make an impact.
          </p>
        </div>
        
     
        <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
  <video
    width={395}
    height={352}
    className="w-64 sm:w-80 md:w-96 lg:w-[395px] h-auto rounded-2xl border border-gray-700/50"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/logo-animated.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      </div>
      
    </section>
  );
}
