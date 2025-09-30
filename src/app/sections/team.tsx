import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "CHETTOUF Islem",
      role: "CEO & Front-end Developer",
      image: "/IMG_0810_bg_removed.png.png",
    },
    {
      name: "Abd-Ul-Haq Amine Ladrem",
      role: "Back-end Developer",
      image: "/awpr.png",
    },
    {
      name: "ARAB Rimel",
      role: "UI/UX Designer",
      image: "/image 12.svg",
    },
    {
      name: "DALIL",
      role: "back-end Developer",
      image: "/team-4.jpg",
    },
  ];

  return (
    <section
      id="team"
      className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
      style={{
        minHeight: "906px",
      }}
    >
      {/* Our Team Label with Vectors */}
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
        {/* Left Vector */}
        <Image
          src="/Vector 13.svg"
          alt=""
          width={233}
          height={24}
          className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
        />
        
        {/* Our Team Text */}
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

      {/* Team Grid */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "linear-gradient(180deg, rgba(55,255,213,0.35) 0%, rgba(55,255,213,0.05) 100%)",
            }}
          >
            <div
              className="relative rounded-2xl bg-black/40 backdrop-blur-md overflow-hidden"
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
                {/* For Designer: Show full image in background */}
                {member.role === "UI/UX Designer" && (
                  <div className="absolute inset-0 z-0 flex items-end justify-center pb-0">
                    <div className="relative w-[90%] h-[95%]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 350px, (max-width: 768px) 380px, 420px"
                      />
                    </div>
                  </div>
                )}
                
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 z-[1]"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(35,182,188,0.2) 0%, rgba(5,52,54,0.2) 100%)",
                  }}
                />
                
                {/* Concentric circles */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-[2]" style={{ opacity: 0.3 }}>
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "120px",
                      height: "120px",
                      border: "1.5px solid rgba(163,167,177,0.5)",
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "180px",
                      height: "180px",
                      border: "1.5px solid rgba(163,167,177,0.4)",
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "240px",
                      height: "240px",
                      border: "1.5px solid rgba(163,167,177,0.3)",
                    }}
                  />
                </div>
                
              </div>

              {/* Spacer */}
              <div className="h-4" />

              {/* Content */}
              <div className="px-4 sm:px-5 pt-1 pb-3 text-center">
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

                <div className="mt-1.5 flex justify-center flex-wrap gap-1.5">
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
              <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 border-t border-white/5">
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
    </section>
  );
}
