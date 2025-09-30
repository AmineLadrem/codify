export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-2 sm:pb-3 md:pb-4">
      {/* Badge Component */}
      <div
        className="inline-flex items-center mb-8 sm:mb-10 md:mb-12 px-3 sm:px-4"
        style={{
          maxWidth: "343px",
          width: "auto",
          height: "36px",
          borderRadius: "100px",
          gap: "8px",
          padding: "8px 12px",
          background: "#28837173",
          border: "1px solid transparent",
          backgroundClip: "padding-box",
          position: "relative",
        }}
      >
        {/* Gradient Border */}
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: "100px",
            padding: "1px",
            background: "linear-gradient(0deg, #38DDBC, #38DDBC)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        {/* Sparkle Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 sm:w-5 sm:h-5"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="#CAD5FF"
          />
          <path
            d="M19 3L20 6L23 7L20 8L19 11L18 8L15 7L18 6L19 3Z"
            fill="#CAD5FF"
          />
        </svg>
        <span
          className="text-xs sm:text-sm md:text-base"
          style={{
            background: "#CAD5FF",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          From an idea to a revolutionary website
        </span>
      </div>

      {/* Big Heading */}
      <h1
        className="mb-6 sm:mb-8 px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          lineHeight: "1.2",
          letterSpacing: "-0.02em",
          textAlign: "center",
          maxWidth: "1000px",
          background: "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 18.57%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        We engineer your
        <br />
        ideas into reality
      </h1>

      {/* Paragraph */}
      <p
        className="mb-8 sm:mb-10 md:mb-12 px-4 text-sm sm:text-base md:text-lg lg:text-xl"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          lineHeight: "1.6",
          letterSpacing: "0px",
          textAlign: "center",
          color: "#B7B7B7",
          maxWidth: "800px",
        }}
      >
        From websites to software, We craft scalable solutions that
        <span className="hidden sm:inline"><br /></span>
        <span className="sm:hidden"> </span>
        help businesses grow, adapt, and lead in the digital era
      </p>

      {/* Get Started Button */}
      <div className="relative mb-12 sm:mb-16 md:mb-20">
        <button
          className="transition-all hover:bg-white/5 w-48 sm:w-52 md:w-[215px] h-9 sm:h-10 md:h-[38px]"
          style={{
            borderRadius: "10566.32px",
            border: "none",
            background: "transparent",
            boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 1), 0px 0px 0px 1.06px rgba(255, 255, 255, 0.1), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
          }}
        >
          <span
            className="text-xs sm:text-sm"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "25.36px",
              letterSpacing: "0px",
              textTransform: "uppercase",
              color: "#A1A1AA",
            }}
          >
            Get Started With Us
          </span>
        </button>
        {/* Bottom gradient line */}
        <div
          className="w-20 sm:w-24 md:w-[107.69px]"
          style={{
            position: "absolute",
            bottom: "-1px",
            left: "50%",
            transform: "translateX(-50%)",
            height: "1.06px",
            background: "linear-gradient(90deg, rgba(51, 245, 227, 0) 0%, #33F5E3 50%, rgba(51, 245, 227, 0) 100%)",
          }}
        />
      </div>

      {/* Learn More Text */}
      <div className="flex flex-col items-center gap-3 sm:gap-4">
        <span
          className="text-xs sm:text-sm"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            lineHeight: "25.36px",
            letterSpacing: "0px",
            color: "#A1A1AA",
          }}
        >
          Learn more about us
        </span>
        {/* Down Arrow */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce sm:w-6 sm:h-6"
        >
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="#A1A1AA"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
