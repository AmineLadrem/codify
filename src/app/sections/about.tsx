import Image from "next/image";

export default function About() {
  return (
    <section 
      id="about"
      className="flex flex-col items-center px-8 py-16"
      style={{
        minHeight: "773px",
      }}
    >
      <Image
        src="/Frame 1618874015 (1).svg"
        alt="About Us"
        width={520}
        height={24}
      />
      
      {/* Content Container - Responsive to Navbar Width */}
      <div className="max-w-[1440px] mx-auto w-full flex gap-5 mt-16 justify-between">
        {/* Left Content Frame */}
        <div
          style={{
            width: "660px",
            height: "344px",
            position: "relative",
          }}
        >
          {/* Inner Frame with Gradient Border */}
          <div
            style={{
              width: "453px",
              height: "40px",
              borderRadius: "14px",
              border: "1px solid transparent",
              background: "rgba(6, 52, 52, 0.58)",
              padding: "4px 11px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              position: "absolute",
              left: "0px",
              top: "0px",
            }}
          >
            {/* Gradient Border */}
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
              style={{
                width: "500px",
                height: "32px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "center",
                color: "rgba(183, 183, 183, 1)",
                opacity: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
            >
              Building digital solutions that empower businesses to grow.
            </span>
          </div>
          
          {/* What is CODIFY AGENCY ? Text */}
          <h2
            style={{
              position: "absolute",
              left: "0px",
              top: "55px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "44.9px",
              lineHeight: "84px",
              letterSpacing: "-1.8px",
              background: "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 64.75%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            What is CODIFY AGENCY ?
          </h2>
          
          {/* Description Text */}
          <p
            style={{
              position: "absolute",
              left: "0px",
              top: "154px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "32px",
              letterSpacing: "0px",
              color: "rgba(255, 255, 255, 1)",
              maxWidth: "630px",
            }}
          >
            We are a team of passionate developers, designers, and problem-solvers dedicated to transforming ideas into scalable software. Our mission is to help startups and enterprises build reliable digital products that drive innovation, efficiency, and growth. With expertise in modern technologies and a client-first approach, we deliver solutions that make an impact.
          </p>
        </div>
        
        {/* Right Frame - Logo Card */}
        <Image
          src="/Frame 1618874014 (1).svg"
          alt="Codify Agency"
          width={395}
          height={352}
        />
      </div>
      
    </section>
  );
}
