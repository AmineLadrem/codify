'use client';

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "Blog", href: "#blog" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <div 
        className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4 backdrop-blur-sm"
        style={{
          borderRadius: "32px",
          border: "1px solid transparent",
          background: "rgba(0, 0, 0, 0.4)",
          backgroundClip: "padding-box",
          position: "relative",
        }}
      >
        {/* Gradient Border */}
        <div
          style={{
            position: "absolute",
            inset: -1,
            borderRadius: "32px",
            padding: "1px",
            background: "linear-gradient(268.79deg, #0E4D47 -18.22%, #0B0C10 124.63%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Codify Agency"
              width={104.31}
              height={33.98}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-white capitalize cursor-pointer nav-link relative"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0px",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <style jsx>{`
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #38DDBC, #0D7769);
            transition: width 0.3s ease-in-out;
          }
          .nav-link:hover::after {
            width: 100%;
          }
          .nav-link:hover {
            color: #38DDBC;
          }
        `}</style>

        {/* Contact Us Button */}
        <button
          className="flex-shrink-0 rounded-full transition-all hover:bg-white/5"
          style={{
            width: "137.91px",
            height: "38px",
            border: "1.5px solid transparent",
            background: "transparent",
            position: "relative",
          }}
        >
          {/* Gradient Border */}
          <div
            style={{
              position: "absolute",
              inset: -1.5,
              borderRadius: "9999px",
              padding: "1.5px",
              background: "linear-gradient(84.71deg, #031919 3.64%, #061F1F 53.81%, #0B3E3E 81.73%, #115D5D 91.67%, #FFFFFF 102.09%)",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "13.9px",
              lineHeight: "24px",
              letterSpacing: "0px",
              textTransform: "uppercase",
              color: "#A1A1AA",
            }}
          >
            Contact Us
          </span>
        </button>
      </div>
    </nav>
  );
}
