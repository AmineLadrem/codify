import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 md:pb-20"
      style={{
        minHeight: "795px",
      }}
    >
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

      {/* Section Title and Description */}
      <div className="max-w-[1440px] mx-auto w-full">
        <div
          className="mx-auto text-center"
          style={{
            maxWidth: "660px",
            opacity: 1,
          }}
        >
          {/* Title */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44.9px] px-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              lineHeight: "84px",
              letterSpacing: "-1.8px",
              verticalAlign: "middle",
              background:
                "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 64.75%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 1,
            }}
          >
            What We Do?
          </h2>

          {/* Description */}
          <p
            className="mt-1 text-base sm:text-lg md:text-xl px-4"
            style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            lineHeight: "1.6",
            color: "rgba(183, 183, 183, 1)",
            textAlign: "center",
            }}
          >
            We craft tailored software solutions designed to help your business grow, scale, and stay ahead of the competition
          </p>
        </div>

        {/* Service Cards Container */}
        <div
          className="mx-auto mt-12 sm:mt-16 md:mt-20"
          style={{
            maxWidth: "1150px",
            width: "100%",
            opacity: 1,
          }}
        >
          {/* Cards Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4"
            style={{
              gap: "20px",
            }}
          >
            {/* Card 1 */}
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "272px",
                height: "272px",
                borderRadius: "11.33px",
                backgroundColor: "rgba(71, 76, 76, 0.2)",
                opacity: 1,
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "11.33px",
                  padding: "0.71px",
                  background: "linear-gradient(137.54deg, #22D5BD 2.03%, #15796B 97.97%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              
              {/* Card Content */}
              <div
                className="relative z-10 p-6"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "11.33px",
                }}
              >
                <h3 className="text-white text-xl font-semibold">Service 1</h3>
                <p className="text-gray-400 text-sm">Description for service 1</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "272px",
                height: "272px",
                borderRadius: "11.33px",
                backgroundColor: "rgba(71, 76, 76, 0.2)",
                opacity: 1,
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "11.33px",
                  padding: "0.71px",
                  background: "linear-gradient(137.54deg, #22D5BD 2.03%, #15796B 97.97%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              
              {/* Card Content */}
              <div
                className="relative z-10 p-6"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "11.33px",
                }}
              >
                <h3 className="text-white text-xl font-semibold">Service 2</h3>
                <p className="text-gray-400 text-sm">Description for service 2</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "272px",
                height: "272px",
                borderRadius: "11.33px",
                backgroundColor: "rgba(71, 76, 76, 0.2)",
                opacity: 1,
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "11.33px",
                  padding: "0.71px",
                  background: "linear-gradient(137.54deg, #22D5BD 2.03%, #15796B 97.97%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              
              {/* Card Content */}
              <div
                className="relative z-10 p-6"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "11.33px",
                }}
              >
                <h3 className="text-white text-xl font-semibold">Service 3</h3>
                <p className="text-gray-400 text-sm">Description for service 3</p>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "272px",
                height: "272px",
                borderRadius: "11.33px",
                backgroundColor: "rgba(71, 76, 76, 0.2)",
                opacity: 1,
                overflow: "hidden",
                margin: "0 auto",
              }}
            >
              {/* Gradient Border */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "11.33px",
                  padding: "0.71px",
                  background: "linear-gradient(137.54deg, #22D5BD 2.03%, #15796B 97.97%)",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              
              {/* Card Content */}
              <div
                className="relative z-10 p-6"
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "11.33px",
                }}
              >
                <h3 className="text-white text-xl font-semibold">Service 4</h3>
                <p className="text-gray-400 text-sm">Description for service 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
