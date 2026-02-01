'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 md:py-6">
      <div 
        className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 backdrop-blur-sm"
        style={{
          borderRadius: "20px",
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
            borderRadius: "20px",
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
        <div className="flex-shrink-0 z-10">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Codify Agency"
              width={80}
              height={26}
              className="w-20 h-auto sm:w-24 md:w-[104.31px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="text-white capitalize cursor-pointer nav-link relative text-sm xl:text-base"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                lineHeight: "24px",
                letterSpacing: "0px",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex-shrink-0 z-10 p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

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

        {/* Contact Us Button - Desktop */}
        <button
          className="hidden lg:flex flex-shrink-0 rounded-full items-center justify-center"
          style={{
            width: "120px",
            height: "36px",
            border: "1.5px solid transparent",
            background: "transparent",
            position: "relative",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.background = "rgba(51, 245, 227, 0.05)";
            const span = e.currentTarget.querySelector('span');
            if (span) {
              (span as HTMLElement).style.color = "#33F5E3";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.background = "transparent";
            const span = e.currentTarget.querySelector('span');
            if (span) {
              (span as HTMLElement).style.color = "#A1A1AA";
            }
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
            className="text-xs xl:text-sm"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "0px",
              textTransform: "uppercase",
              color: "#A1A1AA",
              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-[72px] sm:top-[76px] left-4 right-4 backdrop-blur-md rounded-2xl overflow-hidden z-40"
          style={{
            background: "rgba(0, 0, 0, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-white capitalize px-6 py-3 hover:bg-white/5 transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                {link.name}
              </a>
            ))}
            <button
              className="mx-6 mt-4 rounded-full transition-all hover:bg-white/5"
              style={{
                height: "38px",
                border: "1.5px solid rgba(255, 255, 255, 0.2)",
                background: "transparent",
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                textTransform: "uppercase",
                color: "#A1A1AA",
              }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
