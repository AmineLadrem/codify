"use client";

import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative"
      style={{
        minHeight: "795px",
      }}
    >
      {/* Ellipse Background - Between First Two Cards */}
      <div className="absolute pointer-events-none overflow-hidden hidden lg:block" style={{ left: '27%', top: '290px', width: '280px', height: '335px' }}>
        <Image 
          src="/Ellipse 2463 (4).svg" 
          alt="" 
          width={280} 
          height={335}
          className="opacity-60"
        />
      </div>
      <div className="absolute pointer-events-none overflow-hidden hidden lg:block" style={{ left: '60%', top: '400px', width: '280px', height: '335px' }}>
        <Image 
          src="/Ellipse 2463 (4).svg" 
          alt="" 
          width={280} 
          height={335}
          className="opacity-60"
        />
      </div>
      {/* Our Services Label with Vectors */}
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
        {/* Left Vector */}
        <Image
          src="/Vector 13.svg"
          alt=""
          width={233}
          height={24}
          className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
        />
        
        {/* Our Services Text */}
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
          Our Services
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

      {/* Frame */}
      <div
        className="w-full max-w-[660px]"
        style={{
          minHeight: "148px",
          opacity: 1,
          marginTop: "5px",
          padding: "0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* What We Do ? Text */}
        <div
          className="w-full max-w-[320px] text-2xl sm:text-3xl md:text-4xl lg:text-[44.9px] px-4"
          style={{
            height: "auto",
            opacity: 1,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            lineHeight: "1.3",
            letterSpacing: "-1.8px",
            textAlign: "center",
            background: "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 64.75%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          What We Do ?
        </div>

        {/* Description Text */}
        <div
          className="w-full max-w-[660px] mt-4 px-4 text-sm sm:text-base"
          style={{
            minHeight: "auto",
            opacity: 1,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            lineHeight: "1.6",
            textAlign: "center",
            color: "rgba(183, 183, 183, 1)",
          }}
        >
          We craft tailored software solutions designed to help your business grow, scale, and stay ahead of the competition.
        </div>
      </div>

      {/* New Frame Below */}
      <div
        className="mx-auto w-full max-w-[1150px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4"
        style={{
          opacity: 1,
          marginTop: "70px",
          alignItems: "flex-end",
        }}
      >
        {/* Service Cards */}
        {[1, 2, 3, 4].map((card, index) => (
          <div
            key={card}
            className="relative group w-full max-w-[272px] mx-auto"
            style={{
              height: "272px",
              borderRadius: "11.33px",
              background: "rgba(71, 76, 76, 0.2)",
              opacity: 1,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.background = "rgba(71, 76, 76, 0.35)";
              // Change chapeau color
              const chapeau = e.currentTarget.querySelector('.chapeau') as HTMLElement;
              if (chapeau) {
                chapeau.style.background = "rgba(248, 150, 30, 1)";
              }
              // Change blur color
              const blur = e.currentTarget.querySelector('.chapeau-blur') as HTMLElement;
              if (blur) {
                blur.style.background = "rgba(248, 150, 30, 0.8)";
                blur.style.opacity = "1";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(71, 76, 76, 0.2)";
              // Reset chapeau color
              const chapeau = e.currentTarget.querySelector('.chapeau') as HTMLElement;
              if (chapeau) {
                chapeau.style.background = "rgba(34, 213, 189, 1)";
              }
              // Reset blur color
              const blur = e.currentTarget.querySelector('.chapeau-blur') as HTMLElement;
              if (blur) {
                blur.style.background = "rgba(34, 213, 189, 0.8)";
                blur.style.opacity = "0.8";
              }
            }}
          >
            {/* Gradient Border */}
            <div
              className="transition-all duration-400"
              style={{
                position: "absolute",
                inset: -0.71,
                borderRadius: "11.33px",
                padding: "0.71px",
                background: "linear-gradient(137.54deg, #22D5BD 2.03%, #15796B 97.97%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
                zIndex: -1,
                boxShadow: "0 0 0 rgba(34, 213, 189, 0)",
                transition: "box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(34, 213, 189, 0.5), 0 0 40px rgba(34, 213, 189, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 rgba(34, 213, 189, 0)";
              }}
            />
            
            {/* Chapeau */}
            <div
              className="chapeau"
              style={{
                position: "absolute",
                width: "68px",
                height: "21.958332061767578px",
                top: "-11px",
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "2.13px",
                background: "rgba(34, 213, 189, 1)",
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                transition: "all 0.4s ease",
              }}
            />
            {/* Chapeau Shadow Blur */}
            <div
              className="chapeau-blur"
              style={{
                position: "absolute",
                width: "80px",
                height: "20px",
                top: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(34, 213, 189, 0.8)",
                filter: "blur(15px)",
                opacity: 0.8,
                transition: "all 0.4s ease",
              }}
            />
            
            {/* Card Content - First Card */}
            {index === 0 && (
              <>
                <div
                  className="group-hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "221px",
                    height: "auto",
                    margin: "0 auto",
                    marginTop: "40px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "26.35px",
                    lineHeight: "36.38px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    background: "linear-gradient(96.94deg, #EDFEFF 0.91%, #0D7377 122.3%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  UI/UX
                  <br />
                  Design
                </div>
                <div
                  style={{
                    width: "221px",
                    margin: "0 auto",
                    marginTop: "20px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "19.27px",
                    lineHeight: "36.38px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    color: "rgba(163, 167, 177, 1)",
                  }}
                >
                  Intuitive interfaces and seamless experiences that engage users.
                </div>
              </>
            )}
            
            {/* Card Content - Second Card */}
            {index === 1 && (
              <>
                <div
                  className="group-hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "221px",
                    height: "auto",
                    margin: "0 auto",
                    marginTop: "40px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "26.35px",
                    lineHeight: "36.38px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    background: "linear-gradient(96.94deg, #EDFEFF 0.91%, #0D7377 122.3%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Web
                  <br />
                  Development
                </div>
                <div
                  style={{
                    width: "221px",
                    margin: "0 auto",
                    marginTop: "20px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "19.27px",
                    lineHeight: "36.38px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    color: "rgba(163, 167, 177, 1)",
                  }}
                >
                  Modern, responsive, and scalable websites tailored to your goals.
                </div>
              </>
            )}
            
            {/* Card Content - Third Card */}
            {index === 2 && (
              <>
                <div
                  className="group-hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "221px",
                    height: "auto",
                    margin: "0 auto",
                    marginTop: "40px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "26.35px",
                    lineHeight: "36.38px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    background: "linear-gradient(96.94deg, #EDFEFF 0.91%, #0D7377 122.3%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Mobile
                  <br />
                  Development
                </div>
                <div
                  style={{
                    width: "221px",
                    margin: "0 auto",
                    marginTop: "20px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "19.27px",
                    lineHeight: "26px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    color: "rgba(163, 167, 177, 1)",
                  }}
                >
                  Cross-platform mobile apps designed for performance and usability.
                </div>
              </>
            )}
            
            {/* Card Content - Fourth Card */}
            {index === 3 && (
              <>
                <div
                  className="group-hover:scale-105 transition-transform duration-300"
                  style={{
                    width: "221px",
                    height: "auto",
                    margin: "0 auto",
                    marginTop: "40px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 700,
                    fontSize: "26.35px",
                    lineHeight: "36.38px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    background: "linear-gradient(96.94deg, #EDFEFF 0.91%, #0D7377 122.3%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Video
                  <br />
                  Editing
                </div>
                <div
                  style={{
                    width: "221px",
                    margin: "0 auto",
                    marginTop: "20px",
                    opacity: 1,
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontSize: "19.27px",
                    lineHeight: "26px",
                    letterSpacing: "0px",
                    textAlign: "center",
                    verticalAlign: "middle",
                    textTransform: "capitalize",
                    color: "rgba(163, 167, 177, 1)",
                  }}
                >
                  Engaging video content crafted to captivate and inspire your audience.
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

