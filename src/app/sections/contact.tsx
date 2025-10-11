"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });

  // Validation functions
  const validateName = (value: string): string => {
    if (!value.trim()) {
      return "Name is required";
    }
    if (value.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s'-]+$/.test(value)) {
      return "Name can only contain letters, spaces, hyphens and apostrophes";
    }
    if (value.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    return "";
  };

  const validateEmail = (value: string): string => {
    if (!value.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (value: string): string => {
    if (!value.trim()) {
      return ""; // Phone is optional
    }
    // Remove all non-digit characters for validation
    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length < 8) {
      return "Phone number must be at least 8 digits";
    }
    if (digitsOnly.length > 15) {
      return "Phone number must be less than 15 digits";
    }
    if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
      return "Phone number can only contain numbers, spaces, +, -, (, )";
    }
    return "";
  };

  const validateMessage = (value: string): string => {
    if (!value.trim()) {
      return "Message is required";
    }
    if (value.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    if (value.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const whatsappError = validatePhone(whatsapp);
    const messageError = validateMessage(message);

    setFieldErrors({
      name: nameError,
      email: emailError,
      whatsapp: whatsappError,
      message: messageError
    });

    // Check if there are any errors
    if (nameError || emailError || whatsappError || messageError) {
      setErrorMessage("Please fix the errors above");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setName("");
        setEmail("");
        setWhatsapp("");
        setMessage("");
        setFieldErrors({ name: "", email: "", whatsapp: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
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

      {/* Contact Content */}
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start mt-24 sm:mt-28 md:mt-32">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2">
          {/* Badge Component */}
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

          {/* Heading */}
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

          {/* Social Media*/}
          <div style={{
            display: "flex",
            gap: "20px",
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
              href="mailto:contact@codify-agency.com"
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

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/codifyagencyteam"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
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
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
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

              {/* Description */}
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

              {/* Name */}
              <div className="w-full">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (fieldErrors.name) {
                      setFieldErrors({ ...fieldErrors, name: validateName(e.target.value) });
                    }
                  }}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => {
                    setFocusedField(null);
                    setFieldErrors({ ...fieldErrors, name: validateName(name) });
                  }}
                  placeholder="Name *"
                  className="w-full"
                  style={{
                    height: "41.392765045166016px",
                    borderRadius: "6.8px",
                    border: `0.85px solid ${
                      fieldErrors.name 
                        ? "rgba(255, 59, 48, 1)" 
                        : focusedField === "name" 
                        ? "rgba(34, 213, 189, 1)" 
                        : "rgba(213, 215, 218, 1)"
                    }`,
                    background: "rgba(0, 8, 8, 0.55)",
                    boxShadow: fieldErrors.name
                      ? "0px 0px 0px 3px rgba(255, 59, 48, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)"
                      : focusedField === "name" 
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
                    marginBottom: "4px",
                  }}
                />
                {fieldErrors.name && (
                  <p style={{
                    color: "rgba(255, 59, 48, 1)",
                    fontSize: "11px",
                    marginTop: "4px",
                    marginBottom: "6.8px",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {fieldErrors.name}
                  </p>
                )}
                {!fieldErrors.name && <div style={{ marginBottom: "6.8px" }} />}
              </div>

              {/* WhatsApp */}
              <div className="w-full">
                <input
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => {
                    setWhatsapp(e.target.value);
                    if (fieldErrors.whatsapp) {
                      setFieldErrors({ ...fieldErrors, whatsapp: validatePhone(e.target.value) });
                    }
                  }}
                  onFocus={() => setFocusedField("whatsapp")}
                  onBlur={() => {
                    setFocusedField(null);
                    setFieldErrors({ ...fieldErrors, whatsapp: validatePhone(whatsapp) });
                  }}
                  placeholder="Phone Number (optional)"
                  className="w-full"
                  style={{
                    height: "41.392765045166016px",
                    borderRadius: "6.8px",
                    border: `0.85px solid ${
                      fieldErrors.whatsapp 
                        ? "rgba(255, 59, 48, 1)" 
                        : focusedField === "whatsapp" 
                        ? "rgba(34, 213, 189, 1)" 
                        : "rgba(213, 215, 218, 1)"
                    }`,
                    background: "rgba(0, 8, 8, 0.55)",
                    boxShadow: fieldErrors.whatsapp
                      ? "0px 0px 0px 3px rgba(255, 59, 48, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)"
                      : focusedField === "whatsapp" 
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
                    marginBottom: "4px",
                  }}
                />
                {fieldErrors.whatsapp && (
                  <p style={{
                    color: "rgba(255, 59, 48, 1)",
                    fontSize: "11px",
                    marginTop: "4px",
                    marginBottom: "6.8px",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {fieldErrors.whatsapp}
                  </p>
                )}
                {!fieldErrors.whatsapp && <div style={{ marginBottom: "6.8px" }} />}
              </div>

              {/* Email */}
              <div className="w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (fieldErrors.email) {
                      setFieldErrors({ ...fieldErrors, email: validateEmail(e.target.value) });
                    }
                  }}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => {
                    setFocusedField(null);
                    setFieldErrors({ ...fieldErrors, email: validateEmail(email) });
                  }}
                  placeholder="Email *"
                  className="w-full"
                  style={{
                    height: "41.392765045166016px",
                    borderRadius: "6.8px",
                    border: `0.85px solid ${
                      fieldErrors.email 
                        ? "rgba(255, 59, 48, 1)" 
                        : focusedField === "email" 
                        ? "rgba(34, 213, 189, 1)" 
                        : "rgba(213, 215, 218, 1)"
                    }`,
                    background: "rgba(0, 8, 8, 0.55)",
                    boxShadow: fieldErrors.email
                      ? "0px 0px 0px 3px rgba(255, 59, 48, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)"
                      : focusedField === "email" 
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
                    marginBottom: "4px",
                  }}
                />
                {fieldErrors.email && (
                  <p style={{
                    color: "rgba(255, 59, 48, 1)",
                    fontSize: "11px",
                    marginTop: "4px",
                    marginBottom: "6.8px",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {fieldErrors.email}
                  </p>
                )}
                {!fieldErrors.email && <div style={{ marginBottom: "6.8px" }} />}
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (fieldErrors.message) {
                      setFieldErrors({ ...fieldErrors, message: validateMessage(e.target.value) });
                    }
                  }}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => {
                    setFocusedField(null);
                    setFieldErrors({ ...fieldErrors, message: validateMessage(message) });
                  }}
                  placeholder="Message *"
                  className="w-full"
                  style={{
                    height: "80px",
                    borderRadius: "6.8px",
                    border: `0.85px solid ${
                      fieldErrors.message 
                        ? "rgba(255, 59, 48, 1)" 
                        : focusedField === "message" 
                        ? "rgba(34, 213, 189, 1)" 
                        : "rgba(213, 215, 218, 1)"
                    }`,
                    background: "rgba(0, 8, 8, 0.55)",
                    boxShadow: fieldErrors.message
                      ? "0px 0px 0px 3px rgba(255, 59, 48, 0.1), 0px 0.85px 1.7px 0px rgba(10, 13, 18, 0.05)"
                      : focusedField === "message" 
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
                    marginBottom: "4px",
                  }}
                />
                {fieldErrors.message && (
                  <p style={{
                    color: "rgba(255, 59, 48, 1)",
                    fontSize: "11px",
                    marginTop: "4px",
                    marginBottom: "8px",
                    fontFamily: "Inter, sans-serif",
                  }}>
                    {fieldErrors.message}
                  </p>
                )}
                {!fieldErrors.message && <div style={{ marginBottom: "8px" }} />}
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  background: "rgba(34, 213, 189, 0.1)",
                  border: "1px solid rgba(34, 213, 189, 0.3)",
                  marginTop: "12px",
                }}>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#38DDBC",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <span>✓</span>
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  background: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  marginTop: "12px",
                }}>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#EF4444",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}>
                    <span>✕</span>
                    <span>{errorMessage}</span>
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                <div style={{ position: "relative" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="transition-all hover:bg-white/5"
                    style={{
                      width: "110px",
                      height: "32px",
                      borderRadius: "10566.32px",
                      border: "none",
                      background: "transparent",
                      boxShadow: "0px 0px 0px 0px rgba(255, 255, 255, 1), 0px 0px 0px 1.06px rgba(255, 255, 255, 0.35), 0px 0px 0px 0px rgba(0, 0, 0, 0)",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.6 : 1,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onClick={handleSubmit}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
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
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
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
                      {isSubmitting ? "Sending..." : "Submit"}
                    </span>
                  </button>
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

