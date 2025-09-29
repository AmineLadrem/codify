export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-16">
      {/* Badge Component */}
      <div
        className="inline-flex items-center mb-12"
        style={{
          width: "343px",
          height: "36px",
          borderRadius: "100px",
          gap: "12px",
          padding: "8px 10px",
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
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
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
          style={{
            background: "#CAD5FF",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            fontSize: "16px",
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
        className="mb-8"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: "71.9px",
          lineHeight: "84px",
          letterSpacing: "-1.8px",
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
        className="mb-12"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "19.8px",
          lineHeight: "32px",
          letterSpacing: "0px",
          textAlign: "center",
          color: "#B7B7B7",
          maxWidth: "800px",
        }}
      >
        From websites to software, We craft scalable solutions that
        <br />
        help businesses grow, adapt, and lead in the digital era
      </p>

      {/* Get Started Button */}
      <div className="relative mb-20">
        <button
          className="transition-all hover:bg-white/5"
          style={{
            width: "215px",
            height: "38px",
            borderRadius: "10566.32px",
            border: "1px solid rgba(161, 161, 170, 0.5)",
            background: "transparent",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14.69px",
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
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "107.69px",
            height: "1.06px",
            background: "linear-gradient(90deg, rgba(51, 245, 227, 0) 0%, #33F5E3 50%, rgba(51, 245, 227, 0) 100%)",
          }}
        />
      </div>

      {/* Learn More Text */}
      <div className="flex flex-col items-center gap-4">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14.69px",
            lineHeight: "25.36px",
            letterSpacing: "0px",
            color: "#A1A1AA",
          }}
        >
          Learn more about us
        </span>
        {/* Down Arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-bounce"
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
