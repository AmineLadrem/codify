import Image from "next/image";

export default function Process() {
  return (
    <section
      id="process"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 relative min-h-[500px] md:min-h-[700px] lg:min-h-[857px]"
    >
      {/* Ellipse Background - Middle */}
      <div className="absolute pointer-events-none hidden md:block" style={{ left: '35%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: '481px', height: '522px' }}>
        <Image 
          src="/Ellipse 2464 (2).svg" 
          alt="" 
          width={481} 
          height={522}
          style={{ opacity: 0.5, filter: 'brightness(2.5)' }}
        />
      </div>
      {/* Process Label with Vectors */}
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12 relative" style={{ zIndex: 10 }}>
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
        className="w-full max-w-[660px] relative"
        style={{
          minHeight: "148px",
          opacity: 1,
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "0px",
          zIndex: 10,
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

      {/* Mobile View - Vertical Timeline */}
      <div className="block lg:hidden w-full max-w-[600px] mx-auto mt-12 px-4 relative" style={{ zIndex: 10 }}>
        {[
          { number: "01.svg", icon: "Send 1.svg", title: "Discovery & Strategy", desc: "We start by understanding your goals and vision.", color: "rgba(66, 255, 217, 1)" },
          { number: "02.svg", icon: "Pen.svg", title: "Design", desc: "Creating beautiful and intuitive user experiences.", color: "rgba(66, 255, 217, 1)" },
          { number: "03.svg", icon: "Display 1.svg", title: "Development", desc: "Building robust and scalable solutions.", color: "rgba(26, 190, 157, 1)" },
          { number: "04.svg", icon: "Tick Circle.svg", title: "Testing", desc: "Ensuring quality through rigorous testing.", color: "rgba(0, 142, 114, 1)" },
          { number: "05.svg", icon: "Work.svg", title: "Deployment", desc: "Launching your product to the world.", color: "rgba(3, 123, 99, 1)" },
          { number: "06.svg", icon: "Happy  1.svg", title: "Support", desc: "Ongoing support and maintenance.", color: "rgba(248, 150, 30, 1)" },
        ].map((step, index) => (
          <div key={index} className="flex items-start gap-4 mb-8">
            {/* Number */}
            <div className="flex-shrink-0">
              <Image src={`/${step.number}`} alt={`Step ${index + 1}`} width={30} height={45} />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "rgba(71, 76, 76, 0.3)" }}>
                  <Image src={`/${step.icon}`} alt="" width={32} height={24} />
                </div>
                <div>
                  <h3 className="text-base font-semibold" style={{
                    fontFamily: "Inter, sans-serif",
                    color: step.color,
                    marginBottom: "4px",
                  }}>
                    {step.title}
                  </h3>
                  <div style={{
                    width: "80px",
                    height: "2px",
                    background: step.color,
                    borderRadius: "2px",
                  }} />
                </div>
              </div>
              <p className="text-sm" style={{
                fontFamily: "Inter, sans-serif",
                color: "rgba(183, 183, 183, 1)",
                lineHeight: "1.6",
              }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View - Visual timeline composed of 23 SVGs (numbers, bases, icons, connectors) */}
      <div className="relative w-full max-w-[1300px] h-[500px] mt-16 hidden lg:block mx-auto" style={{ zIndex: 10 }}>
        {/* Modern animated gradient lines with flowing particles */}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
          <defs>
            <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38DDBC" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#38DDBC" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38DDBC" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F8961E" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#F8961E" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F8961E" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Path 1 to 2 */}
          <path id="path1" d="M 190 105 Q 270 130, 350 190" stroke="url(#flowGradient1)" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
          <circle r="3" fill="#38DDBC" opacity="0.9">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#path1"/>
            </animateMotion>
          </circle>
          
          {/* Path 2 to 3 */}
          <path id="path2" d="M 360 190 Q 420 140, 530 105" stroke="url(#flowGradient1)" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
          <circle r="3" fill="#38DDBC" opacity="0.9">
            <animateMotion dur="3s" begin="0.6s" repeatCount="indefinite">
              <mpath href="#path2"/>
            </animateMotion>
          </circle>
          
          {/* Path 3 to 4 */}
          <path id="path3" d="M 530 105 Q 610 140, 690 190" stroke="url(#flowGradient1)" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
          <circle r="3" fill="#38DDBC" opacity="0.9">
            <animateMotion dur="3s" begin="1.2s" repeatCount="indefinite">
              <mpath href="#path3"/>
            </animateMotion>
          </circle>
          
          {/* Path 4 to 5 */}
          <path id="path4" d="M 700 190 Q 760 140, 870 105" stroke="url(#flowGradient1)" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
          <circle r="3" fill="#38DDBC" opacity="0.9">
            <animateMotion dur="3s" begin="1.8s" repeatCount="indefinite">
              <mpath href="#path4"/>
            </animateMotion>
          </circle>
          
          {/* Path 5 to 6 - Orange */}
          <path id="path5" d="M 870 105 Q 970 145, 1090 230" stroke="url(#flowGradient2)" strokeWidth="2.5" fill="none" opacity="0.6" strokeLinecap="round" />
          <circle r="3" fill="#F8961E" opacity="0.9">
            <animateMotion dur="3s" begin="2.4s" repeatCount="indefinite">
              <mpath href="#path5"/>
            </animateMotion>
          </circle>
        </svg>

        {/* Step 01 - Top Left */}
        <div style={{ position: "absolute", left: 50, top: 0, width: 283, height: 210, zIndex: 1 }}>
          <Image src="/Vector 18.svg" alt="" width={283} height={210} />
          <Image src="/Send 1.svg" alt="" width={64} height={38} style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%, -50%)" }} />
          <Image src="/01.svg" alt="01" width={38} height={58} style={{ position: "absolute", left: 55, top: 0 }} />
          
          {/* Text Frame Below Platform */}
          <div style={{
            position: "absolute",
            left: "45%",
            top: 180,
            transform: "translateX(-50%)",
            width: 173,
            height: 121,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}>
            {/* Heading with underline */}
            <div style={{ position: "relative", width: "fit-content" }}>
              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "left",
                verticalAlign: "middle",
                color: "rgba(66, 255, 217, 1)",
                margin: 0,
                marginBottom: "8px",
              }}>
                Discovery & Strategy
              </h3>
              {/* Cyan underline - shorter width */}
              <div style={{
                width: "120px",
                height: "3px",
                background: "linear-gradient(90deg, #37FFD5 0%, #22D5BD 100%)",
                borderRadius: "2px",
              }} />
            </div>
            
            {/* Description */}
            <p style={{
              width: 165,
              height: 80,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              lineHeight: "22px",
              textAlign: "left",
              color: "rgba(194, 194, 194, 1)",
              margin: 0,
              marginTop: "8px",
            }}>
              We start by understanding your goals, challenges, and vision to design the right solution.
            </p>
          </div>
        </div>

        {/* Step 02 - Bottom */}
        <div style={{ position: "absolute", left: 220, top: 150, width: 283, height: 210, zIndex: 1 }}>
          <Image src="/Vector 14.svg" alt="" width={283} height={210} />
          <Image src="/Pen.svg" alt="" width={76} height={49} style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%, -50%)" }} />
          <Image src="/02.svg" alt="02" width={46} height={63} style={{ position: "absolute", left: 55, top: 0 }} />
          
          {/* Text Frame Below Platform */}
          <div style={{
            position: "absolute",
            left: "55%",
            top: 180,
            transform: "translateX(-50%)",
            width: 173,
            height: 121,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}>
            {/* Heading with underline */}
            <div style={{ position: "relative", width: "fit-content" }}>
              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "left",
                verticalAlign: "middle",
                color: "rgba(66, 255, 217, 1)",
                margin: 0,
                marginBottom: "8px",
              }}>
                Planning & Design
              </h3>
              {/* Cyan underline */}
              <div style={{
                width: "120px",
                height: "3px",
                background: "linear-gradient(90deg, #37FFD5 0%, #22D5BD 100%)",
                borderRadius: "2px",
              }} />
            </div>
            
            {/* Description */}
            <p style={{
              width: 165,
              height: 80,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              lineHeight: "22px",
              textAlign: "left",
              color: "rgba(194, 194, 194, 1)",
              margin: 0,
              marginTop: "8px",
            }}>
              Wireframes, prototypes, and user-centric designs that set the foundation for development.
            </p>
          </div>
        </div>

        {/* Step 03 - Top */}
        <div style={{ position: "absolute", left: 390, top: 0, width: 283, height: 210, zIndex: 1 }}>
          <Image src="/Vector 15.svg" alt="" width={283} height={210} />
          <Image src="/Display 1.svg" alt="" width={64} height={38} style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%, -50%)" }} />
          <Image src="/03.svg" alt="03" width={47} height={63} style={{ position: "absolute", left: 55, top: 0 }} />
          
          {/* Text Frame Below Platform */}
          <div style={{
            position: "absolute",
            left: "55%",
            top: 180,
            transform: "translateX(-50%)",
            width: 173,
            height: 121,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}>
            {/* Heading with underline */}
            <div style={{ position: "relative", width: "fit-content" }}>
              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "left",
                verticalAlign: "middle",
                color: "rgba(26, 190, 157, 1)",
                margin: 0,
                marginBottom: "8px",
              }}>
                Development
              </h3>
              {/* Green underline */}
              <div style={{
                width: "120px",
                height: "3px",
                background: "rgba(26, 190, 157, 1)",
                borderRadius: "2px",
              }} />
            </div>
            
            {/* Description */}
            <p style={{
              width: 165,
              height: 80,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              lineHeight: "22px",
              textAlign: "left",
              color: "rgba(194, 194, 194, 1)",
              margin: 0,
              marginTop: "8px",
            }}>
              Agile and iterative coding, ensuring quality, scalability, and transparency throughout.
            </p>
          </div>
        </div>

        {/* Step 04 - Bottom */}
        <div style={{ position: "absolute", left: 560, top: 150, width: 283, height: 210, zIndex: 1 }}>
          <Image src="/Vector 16.svg" alt="" width={283} height={210} />
          <Image src="/Tick Circle.svg" alt="" width={64} height={38} style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%, -50%)" }} />
          <Image src="/04.svg" alt="04" width={48} height={64} style={{ position: "absolute", left: 55, top: 0 }} />
          
          {/* Text Frame Below Platform */}
          <div style={{
            position: "absolute",
            left: "60%",
            top: 180,
            transform: "translateX(-50%)",
            width: 173,
            height: 121,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}>
            {/* Heading with underline */}
            <div style={{ position: "relative", width: "fit-content" }}>
              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "left",
                verticalAlign: "middle",
                color: "rgba(0, 142, 114, 1)",
                margin: 0,
                marginBottom: "8px",
              }}>
                Test & Quality
              </h3>
              {/* Teal underline */}
              <div style={{
                width: "120px",
                height: "3px",
                background: "rgba(0, 142, 114, 1)",
                borderRadius: "2px",
              }} />
            </div>
            
            {/* Description */}
            <p style={{
              width: 165,
              height: 80,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              lineHeight: "22px",
              textAlign: "left",
              color: "rgba(194, 194, 194, 1)",
              margin: 0,
              marginTop: "8px",
            }}>
              Rigorous testing to deliver a stable, secure, and high-performance product.
            </p>
          </div>
        </div>

        {/* Step 05 - Top */}
        <div style={{ position: "absolute", left: 730, top: 0, width: 283, height: 210, zIndex: 1 }}>
          <Image src="/Vector 23.svg" alt="" width={283} height={210} />
          <Image src="/Work.svg" alt="" width={65} height={38} style={{ position: "absolute", left: "50%", top: "38%", transform: "translate(-50%, -50%)" }} />
          <Image src="/05.svg" alt="05" width={47} height={63} style={{ position: "absolute", left: 55, top: 0 }} />
          
          {/* Text Frame Below Platform */}
          <div style={{
            position: "absolute",
            left: "60%",
            top: 180,
            transform: "translateX(-50%)",
            width: 173,
            height: 121,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}>
            {/* Heading with underline */}
            <div style={{ position: "relative", width: "fit-content" }}>
              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "left",
                verticalAlign: "middle",
                color: "rgba(3, 123, 99, 1)",
                margin: 0,
                marginBottom: "8px",
              }}>
                Launch & Delivery
              </h3>
              {/* Dark teal underline */}
              <div style={{
                width: "120px",
                height: "3px",
                background: "rgba(3, 123, 99, 1)",
                borderRadius: "2px",
              }} />
            </div>
            
            {/* Description */}
            <p style={{
              width: 165,
              height: 80,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              lineHeight: "22px",
              textAlign: "left",
              color: "rgba(194, 194, 194, 1)",
              margin: 0,
              marginTop: "8px",
            }}>
              Smooth deployment with all the support needed for a successful launch.
            </p>
          </div>
        </div>

        {/* Step 06 - Bottom - Orange variant with larger base */}
        <div style={{ position: "absolute", left: 900, top: 110, width: 376, height: 303, zIndex: 1 }}>
          <Image src="/Vector 17.svg" alt="" width={376} height={303} />
          <Image src="/Happy  1.svg" alt="" width={64} height={37} style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)" }} />
          <Image src="/06.svg" alt="06" width={47} height={63} style={{ position: "absolute", left: 100, top: 40 }} />
          
          {/* Text Frame Below Platform */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: 220,
            transform: "translateX(-50%)",
            width: 173,
            height: 121,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}>
            {/* Heading with underline */}
            <div style={{ position: "relative", width: "fit-content" }}>
              <h3 style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "17px",
                lineHeight: "32px",
                letterSpacing: "0px",
                textAlign: "left",
                verticalAlign: "middle",
                color: "rgba(248, 150, 30, 1)",
                margin: 0,
                marginBottom: "8px",
              }}>
                Support & Growth
              </h3>
              {/* Orange underline */}
              <div style={{
                width: "120px",
                height: "3px",
                background: "rgba(248, 150, 30, 1)",
                borderRadius: "2px",
              }} />
            </div>
            
            {/* Description */}
            <p style={{
              width: 165,
              height: 80,
              opacity: 1,
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              lineHeight: "22px",
              textAlign: "left",
              color: "rgba(194, 194, 194, 1)",
              margin: 0,
              marginTop: "8px",
            }}>
              Continuous improvements, updates, and maintenance to help your product evolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

