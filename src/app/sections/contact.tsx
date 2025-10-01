"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 relative"
      style={{
        minHeight: "400px",
      }}
    >
      {/* Ellipse Background - Left Side */}
      <div className="absolute left-0 pointer-events-none overflow-hidden hidden lg:block" style={{ top: '500px', width: '280px', height: '335px' }}>
        <Image 
          src="/Ellipse 2463 (4).svg" 
          alt="" 
          width={280} 
          height={335}
          className="opacity-60"
        />
      </div>

      {/* Ellipse Background - Top Right */}
      <div className="absolute right-0 pointer-events-none overflow-hidden hidden lg:block" style={{ top: '50px', width: '280px', height: '335px' }}>
        <Image 
          src="/Ellipse 2463 (4).svg" 
          alt="" 
          width={280} 
          height={335}
          className="opacity-60"
        />
      </div>
      {/* Contact Label with Vectors */}
      <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
        {/* Left Vector */}
        <Image
          src="/Vector 13.svg"
          alt=""
          width={233}
          height={24}
          className="hidden sm:block w-32 md:w-40 lg:w-[233px] h-auto"
        />
        
        {/* Contact Text */}
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
          Contact
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

      {/* Badge Component - Left aligned with more bottom spacing */}
      <div className="w-full max-w-[1200px] mx-auto mt-24 sm:mt-28 md:mt-32">
        <div className="flex justify-start mb-8">
          <div
            className="inline-flex items-center px-3 sm:px-4"
            style={{
              maxWidth: "343px",
              width: "auto",
              height: "auto",
              minHeight: "38px",
              borderRadius: "100px",
              gap: "8px",
              padding: "9px 14px",
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
                lineHeight: "1.4",
                letterSpacing: "0%",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
                Let's Build Something Great Together.
            </span>
          </div>
        </div>

        {/* Heading Frame */}
        <div className="w-full max-w-[500px] mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44.9px]" style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            lineHeight: "1.3",
            letterSpacing: "-1.8px",
            verticalAlign: "middle",
            background: "linear-gradient(102.61deg, #EDFEFF 12.74%, #D8F5F6 64.75%, #0D7769 82.45%), linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            margin: 0,
          }}>
            # Let's Build Something Great Together.
          </h2>
        </div>

        {/* Social Media Icons */}
        <div style={{
          display: "flex",
          gap: "20px",
          marginBottom: "64px",
        }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/codify_agency?igsh=Y2F1MzBlY2lqM2hz"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(131, 58, 180, 0.1) 0%, rgba(253, 29, 29, 0.1) 50%, rgba(252, 176, 69, 0.1) 100%)",
              border: "1px solid rgba(253, 29, 29, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(131, 58, 180, 0.2) 0%, rgba(253, 29, 29, 0.2) 50%, rgba(252, 176, 69, 0.2) 100%)";
              e.currentTarget.style.borderColor = "rgba(253, 29, 29, 0.5)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0px 8px 20px rgba(253, 29, 29, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(131, 58, 180, 0.1) 0%, rgba(253, 29, 29, 0.1) 50%, rgba(252, 176, 69, 0.1) 100%)";
              e.currentTarget.style.borderColor = "rgba(253, 29, 29, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Image src="/instagram1.svg" alt="Instagram" width={24} height={24} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/213675659562"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.1) 100%)",
              border: "1px solid rgba(37, 211, 102, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(37, 211, 102, 0.2) 0%, rgba(18, 140, 126, 0.2) 100%)";
              e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.5)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0px 8px 20px rgba(37, 211, 102, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(37, 211, 102, 0.1) 0%, rgba(18, 140, 126, 0.1) 100%)";
              e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.2)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Image src="/whatsapp2.svg" alt="WhatsApp" width={24} height={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:contact.codifyagency@gmail.com"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(34, 213, 189, 0.15)",
              border: "1px solid rgba(34, 213, 189, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(34, 213, 189, 0.25)";
              e.currentTarget.style.borderColor = "rgba(34, 213, 189, 0.6)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0px 8px 20px rgba(34, 213, 189, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(34, 213, 189, 0.15)";
              e.currentTarget.style.borderColor = "rgba(34, 213, 189, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <Image src="/emaill.svg" alt="Email" width={24} height={24} />
          </a>
        </div>
      </div>

      {/* Contact Content */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2">
          {/* Add content here */}
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2">
          <div
            className="w-full max-w-[519px] mx-auto lg:mx-0"
            style={{
              height: "auto",
              borderRadius: "13.6px",
              background: "rgba(2, 35, 37, 0.4)",
              border: "1px solid transparent",
              position: "relative",
              opacity: 1,
              marginTop: "0",
            }}
          >
            {/* Gradient Border */}
            <div
              style={{
                position: "absolute",
                inset: -1,
                borderRadius: "13.6px",
                padding: "1px",
                background: "linear-gradient(180deg, #22D5BD 0%, #033435 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
                zIndex: -1,
              }}
            />
            
            {/* Form Content */}
            <div className="p-6 sm:p-8" style={{ 
              display: "flex",
              flexDirection: "column",
              gap: "13.6px",
            }}>
              {/* Text Frame 1 - Heading */}
              <div className="w-full" style={{
                opacity: 1,
                display: "flex",
                alignItems: "center",
              }}>
                <h3 className="text-xl sm:text-2xl lg:text-[25.49px]" style={{
                  fontFamily: "Gabarito, sans-serif",
                  fontWeight: 700,
                  lineHeight: "1.3",
                  letterSpacing: "0%",
                  color: "rgba(255, 255, 255, 1)",
                  margin: 0,
                }}>
                  Get instant access !
                </h3>
              </div>

              {/* Text Frame 2 - Description */}
              <div className="w-full" style={{
                opacity: 1,
                display: "flex",
                alignItems: "center",
                marginTop: "2px",
                marginBottom: "24px",
              }}>
                <p className="text-sm sm:text-base" style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.5",
                  letterSpacing: "0%",
                  color: "rgba(176, 176, 176, 1)",
                  margin: 0,
                }}>
                  an app designed to track your progress and motivate your efforts.
                </p>
              </div>

              {/* Input Field 1 - Name */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Name"
                className="w-full"
                style={{
                  height: "41.392765045166016px",
                  borderRadius: "6.8px",
                  border: `0.85px solid ${focusedField === "name" ? "rgba(34, 213, 189, 1)" : "rgba(213, 215, 218, 1)"}`,
                  background: "rgba(0, 8, 8, 0.55)",
                  boxShadow: focusedField === "name" 
                    ? "0px 0px 0px 3px rgba(34, 213, 189, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)" 
                    : "0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)",
                  padding: "0 16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "20.39px",
                  color: "rgba(255, 255, 255, 1)",
                  outline: "none",
                  transition: "all 0.3s ease",
                  marginBottom: "6.8px",
                }}
              />

              {/* Input Field 2 - WhatsApp */}
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                onFocus={() => setFocusedField("whatsapp")}
                onBlur={() => setFocusedField(null)}
                placeholder="Phone Number"
                className="w-full"
                style={{
                  height: "41.392765045166016px",
                  borderRadius: "6.8px",
                  border: `0.85px solid ${focusedField === "whatsapp" ? "rgba(34, 213, 189, 1)" : "rgba(213, 215, 218, 1)"}`,
                  background: "rgba(0, 8, 8, 0.55)",
                  boxShadow: focusedField === "whatsapp" 
                    ? "0px 0px 0px 3px rgba(34, 213, 189, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)" 
                    : "0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)",
                  padding: "0 16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "20.39px",
                  color: "rgba(255, 255, 255, 1)",
                  outline: "none",
                  transition: "all 0.3s ease",
                  marginBottom: "6.8px",
                }}
              />

              {/* Input Field 3 - Email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="Email"
                className="w-full"
                style={{
                  height: "41.392765045166016px",
                  borderRadius: "6.8px",
                  border: `0.85px solid ${focusedField === "email" ? "rgba(34, 213, 189, 1)" : "rgba(213, 215, 218, 1)"}`,
                  background: "rgba(0, 8, 8, 0.55)",
                  boxShadow: focusedField === "email" 
                    ? "0px 0px 0px 3px rgba(34, 213, 189, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)" 
                    : "0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)",
                  padding: "0 16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "20.39px",
                  color: "rgba(255, 255, 255, 1)",
                  outline: "none",
                  transition: "all 0.3s ease",
                  marginBottom: "6.8px",
                }}
              />

              {/* Input Field 4 - Message */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder="Message"
                className="w-full"
                style={{
                  height: "80px",
                  borderRadius: "6.8px",
                  border: `0.85px solid ${focusedField === "message" ? "rgba(34, 213, 189, 1)" : "rgba(213, 215, 218, 1)"}`,
                  background: "rgba(0, 8, 8, 0.55)",
                  boxShadow: focusedField === "message" 
                    ? "0px 0px 0px 3px rgba(34, 213, 189, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)" 
                    : "0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)",
                  padding: "12px 16px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "20.39px",
                  color: "rgba(255, 255, 255, 1)",
                  outline: "none",
                  resize: "none",
                  transition: "all 0.3s ease",
                }}
              />

              {/* Submit Button */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                <div style={{ position: "relative" }}>
                  <button
                    type="submit"
                    className="transition-all hover:bg-white/5"
                    style={{
                      width: "110px",
                      height: "32px",
                      borderRadius: "10566.32px",
                      border: "none",
                      background: "transparent",
                      boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 1), 0px 0px 0px 1.06px rgba(255, 255, 255, 0.35), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      // Handle form submission here
                      console.log({ name, whatsapp, email, message });
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.background = "rgba(51, 245, 227, 0.05)";
                      const span = e.currentTarget.querySelector('span') as HTMLElement;
                      if (span) {
                        span.style.color = "#33F5E3";
                      }
                      const line = e.currentTarget.nextElementSibling as HTMLElement;
                      if (line) {
                        line.style.opacity = "0";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "transparent";
                      const span = e.currentTarget.querySelector('span') as HTMLElement;
                      if (span) {
                        span.style.color = "#A1A1AA";
                      }
                      const line = e.currentTarget.nextElementSibling as HTMLElement;
                      if (line) {
                        line.style.opacity = "0.8";
                      }
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "25.36px",
                        letterSpacing: "0px",
                        textTransform: "uppercase",
                        color: "#A1A1AA",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        display: "inline-block",
                      }}
                    >
                      Submit
                    </span>
                  </button>
                  {/* Bottom gradient line */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-1px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "65px",
                      height: "1.06px",
                      background: "linear-gradient(90deg, rgba(51, 245, 227, 0) 0%, #33F5E3 50%, rgba(51, 245, 227, 0) 100%)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      opacity: 0.8,
                    }}
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

