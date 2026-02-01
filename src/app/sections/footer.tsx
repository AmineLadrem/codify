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
      className="w-full px-4 sm:px-6 md:px-8 pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-12"
      style={{
        background: "rgba(40, 52, 48, 0.24)",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Main content - single column flow on mobile, row on desktop */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-10 md:gap-16 mb-6 sm:mb-10">
          {/* Left Section - Logo and Description */}
          <div className="w-full sm:min-w-0 md:max-w-[320px]">
            {/* Logo */}
            <div className="mb-4 sm:mb-5">
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
                marginBottom: "20px",
              }}
            >
              Building digital solutions businesses can depend on.
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap gap-3 sm:gap-[12px]">
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
                href="mailto:contact@codify-agency.com"
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

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/codifyagencyteam"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "rgba(10, 102, 194, 0.1)",
                  border: "1px solid rgba(10, 102, 194, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(10, 102, 194, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(10, 102, 194, 0.5)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0px 8px 20px rgba(10, 102, 194, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(10, 102, 194, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(10, 102, 194, 0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Quick Links + Services - side by side on mobile for compact layout */}
          <div className="flex flex-row gap-6 sm:gap-10 md:gap-16 sm:flex-1 w-full sm:w-auto">
          <div className="w-full sm:w-auto sm:min-w-0 flex-1 min-w-[120px]">
            <h3
              className="mb-3 sm:mb-5"
              style={{
                fontFamily: "var(--font-m-plus-1), sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
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

          <div className="w-full sm:w-auto sm:min-w-0 flex-1 min-w-[120px]">
            <h3
              className="mb-3 sm:mb-5"
              style={{
                fontFamily: "var(--font-m-plus-1), sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                lineHeight: "24px",
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Our Services
            </h3>
            <div className="flex flex-col gap-2 sm:gap-3">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Video Editing", "Automation and AI"].map((service) => (
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
          </div>
        </div>

        {/* Bottom bar - integrated, no heavy separator on mobile */}
        <div
          className="pt-5 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left"
          style={{
            fontFamily: "var(--font-m-plus-1), sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(173, 178, 177, 1)",
          }}
        >
          <span>© 2025 Codify Agency. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

