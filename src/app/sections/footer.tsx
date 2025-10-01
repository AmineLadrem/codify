"use client";

import Image from "next/image";

const navigationLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="w-full flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 md:py-0"
      style={{
        minHeight: "auto",
        background: "rgba(40, 52, 48, 0.24)",
        opacity: 1,
      }}
    >
      <div
        className="w-full max-w-[1440px] relative"
        style={{
          minHeight: "371px",
          opacity: 1,
        }}
      >
        {/* Inner Frame */}
        <div
          className="relative md:absolute flex flex-col md:flex-row w-full md:w-[1240px] md:h-[276px] md:top-[60px] md:left-[100px] gap-8 md:gap-[80px]"
          style={{
            opacity: 1,
          }}
        >
          {/* Left Section - Logo and Description */}
          <div className="relative md:absolute w-full md:w-[320px] md:top-0 md:left-0">
            {/* Logo */}
            <div className="mb-5">
              <Image 
                src="/logo.svg" 
                alt="Codify Agency Logo" 
                width={120} 
                height={40}
              />
            </div>

            {/* Description text */}
            <div
              className="max-w-[287px]"
              style={{
                opacity: 1,
                fontFamily: "var(--font-m-plus-1), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "-3%",
                color: "rgba(173, 178, 177, 1)",
                marginBottom: "40px",
              }}
            >
              Building digital solutions that transform your business and drive growth.
            </div>

            {/* Social Media Icons */}
            <div style={{ display: "flex", gap: "12px" }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/codify_agency?igsh=Y2F1MzBlY2lqM2hz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
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
                <Image src="/instagram1.svg" alt="Instagram" width={20} height={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/213675659562"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(37, 211, 102, 0.1)",
                  border: "1px solid rgba(37, 211, 102, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(37, 211, 102, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.5)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(37, 211, 102, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(37, 211, 102, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(37, 211, 102, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Image src="/whatsapp2.svg" alt="WhatsApp" width={20} height={20} />
              </a>

              {/* Gmail */}
              <a
                href="mailto:contact.codifyagency@gmail.com"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
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
                <Image src="/emaill.svg" alt="Email" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="relative md:absolute w-full md:w-auto md:top-0 md:left-[420px]">
            <h3
              style={{
                fontFamily: "var(--font-m-plus-1), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 1)",
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  style={{
                    fontFamily: "var(--font-m-plus-1), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "rgba(173, 178, 177, 1)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "rgba(34, 213, 189, 1)";
                    e.currentTarget.style.transform = "translateX(5px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(173, 178, 177, 1)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Services */}
          <div className="relative md:absolute w-full md:w-auto md:top-0 md:left-[620px]">
            <h3
              style={{
                fontFamily: "var(--font-m-plus-1), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 1)",
                marginBottom: "20px",
              }}
            >
              Our Services
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing", "SEO Optimization", "Cloud Solutions"].map((service) => (
                <span
                  key={service}
                  style={{
                    fontFamily: "var(--font-m-plus-1), sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    color: "rgba(173, 178, 177, 1)",
                  }}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Far Right Section - Contact Info */}
          <div className="relative md:absolute w-full md:w-auto md:top-0 md:left-[860px]">
            <h3
              style={{
                fontFamily: "var(--font-m-plus-1), sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 1)",
                marginBottom: "20px",
              }}
            >
              Get In Touch
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.codifyagency@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-m-plus-1), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgba(173, 178, 177, 1)",
                  transition: "all 0.3s ease",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(34, 213, 189, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(173, 178, 177, 1)";
                }}
              >
                contact.codifyagency@gmail.com
              </a>
              <a
                href="https://wa.me/213675659562"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-m-plus-1), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgba(173, 178, 177, 1)",
                  transition: "all 0.3s ease",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(34, 213, 189, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(173, 178, 177, 1)";
                }}
              >
                +213 675 659 562
              </a>
              <a
                href="https://www.instagram.com/codify_agency?igsh=Y2F1MzBlY2lqM2hz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-m-plus-1), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgba(173, 178, 177, 1)",
                  transition: "all 0.3s ease",
                  width: "fit-content",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(34, 213, 189, 1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(173, 178, 177, 1)";
                }}
              >
                @codify_agency
              </a>
              <span
                style={{
                  fontFamily: "var(--font-m-plus-1), sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "rgba(173, 178, 177, 1)",
                }}
              >
                Available 24/7
              </span>
            </div>
          </div>


          {/* Copyright text at bottom left */}
          <div
            className="relative md:absolute w-full md:w-[300px] md:bottom-0 md:left-0 mt-8 md:mt-0 text-center md:text-left"
            style={{
              opacity: 1,
              fontFamily: "var(--font-m-plus-1), sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "rgba(173, 178, 177, 1)",
            }}
          >
            © 2025 Codify Agency. All Rights Reserved.
          </div>

          {/* Cookie notice at bottom right */}
          <div
            className="relative md:absolute w-full md:w-[300px] md:bottom-0 md:right-0 mt-4 md:mt-0 text-center md:text-right"
            style={{
              opacity: 1,
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "0%",
              color: "rgba(173, 178, 177, 1)",
            }}
          >
            This page uses cookies. See cookies details here.
          </div>
        </div>
      </div>
    </footer>
  );
}

