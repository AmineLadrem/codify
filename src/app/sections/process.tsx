import Image from "next/image";

export default function Process() {
  return (
    <section
      id="process"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20"
      style={{
        minHeight: "857px",
      }}
    >
      {/* Process Label with Vectors */}
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
        {/* Left Vector */}
        <Image
          src="/Vector 13.svg"
          alt=""
          width={233}
          height={24}
          className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
        />
        
        {/* Process Text */}
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
          Process
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
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "0px",
        }}
      >
        {/* How We Work Text */}
        <div
          className="w-full max-w-[400px] text-2xl sm:text-3xl md:text-4xl lg:text-[44.9px] px-4"
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
          How We Work ?
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
          We follow a clear, collaborative process to turn your ideas into successful digital products delivered on time and built to last.
        </div>
      </div>
    </section>
  );
}

