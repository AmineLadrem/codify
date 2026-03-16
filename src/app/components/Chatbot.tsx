"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

type Message = { role: "user" | "assistant"; content: string };

const WELCOME_MESSAGES = [
  "Hi! Looking to build an app or a website?",
  "Welcome to Codify! How can I help you scale today?",
  "Hey there! Need web dev, AI, or marketing help? Ask me anything.",
  "Hi! Ready to turn your idea into a product? What are you thinking about?",
  "Welcome! We do web, custom AI, and marketing. What can I help with?",
  "Hello! Here to chat about your project or just explore what we offer?",
  "Hi! Looking for a dev team or some AI magic? Let’s talk.",
  "Welcome to Codify Agency. What would you like to know?",
  "Hey! Need a custom website, AI tool, or a marketing boost? I'm here to help.",
  "Hi there! Codify Agency builds websites, AI solutions, and runs campaigns. What's on your mind?",
  "Welcome! Whether it's a new site, an AI project, or growth—ask me anything.",
  "Hello! Thinking about a project or just curious what we do? Say hi.",
  "Hi! We're Codify—web, AI, and marketing. How can I help you today?",
  "Hey! Got a project in mind or want to know more about our services?",
  "Welcome in! What can Codify do for you—build, automate, or grow?",
];

function pickRandomWelcome(): string {
  return WELCOME_MESSAGES[Math.floor(Math.random() * WELCOME_MESSAGES.length)];
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg">("md");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // When user opens chat and there are no messages, show a random welcome (no API call)
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: pickRandomWelcome() }]);
    }
  }, [isOpen, messages.length]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setError(null);
    setIsLoading(true);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message ?? "" },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
    // Shift+Enter allows new lines in the input
  };

  // Expanded: cap height; on phones use full width (inset via parent) + dvh for browser chrome
  const panelSize = isExpanded
    ? "h-[min(560px,calc(100dvh-5rem))] max-h-[calc(100dvh-5rem)] w-full sm:w-[min(520px,calc(100vw-2rem))]"
    : "h-[min(480px,calc(100dvh-7rem))] w-full sm:h-[480px] sm:w-[380px]";

  const messageTextSize =
    fontSize === "sm" ? "text-xs" : fontSize === "lg" ? "text-base" : "text-sm";
  const proseSize = fontSize === "sm" ? "prose-sm" : fontSize === "lg" ? "prose-base" : "prose-sm";

  return (
    <>
      {/* Toggle button — pulse when closed */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D7769] text-white shadow-lg transition hover:bg-[#0a5f54] focus:outline-none focus:ring-2 focus:ring-[#38DDBC] focus:ring-offset-2 sm:bottom-6 sm:right-6 ${!isOpen ? "chatbot-pulse" : ""}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          className={`fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] left-4 right-4 z-40 flex flex-col overflow-hidden rounded-2xl border border-[#0D7769]/30 bg-[rgba(0,5,4,0.98)] shadow-xl sm:bottom-24 sm:left-auto sm:right-6 ${panelSize}`}
        >
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-2 border-b border-[#0D7769]/30 bg-[#0D7769]/20 px-3 py-3 sm:px-4">
            <span className="min-w-0 shrink font-semibold text-white">Codify Agency</span>
            <div className="flex min-w-0 shrink-0 flex-wrap items-center justify-end gap-2">
              {/* Font size: Small / Medium / Large */}
              <div className="flex items-center gap-0.5 rounded-md bg-[#0D7769]/20 p-0.5">
                {(["sm", "md", "lg"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFontSize(size)}
                    className={`rounded px-2 py-1 text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-[#38DDBC] ${
                      fontSize === size ? "bg-[#0D7769] text-white" : "text-[#38DDBC] hover:bg-[#0D7769]/30"
                    }`}
                    title={size === "sm" ? "Small text" : size === "md" ? "Medium text" : "Large text"}
                  >
                    {size === "sm" ? "A-" : size === "md" ? "A" : "A+"}
                  </button>
                ))}
              </div>
              {isExpanded ? (
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  className="rounded p-1.5 text-[#38DDBC] transition hover:bg-[#0D7769]/30 focus:outline-none focus:ring-2 focus:ring-[#38DDBC]"
                  aria-label="Collapse to small size"
                  title="Collapse to small"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  className="rounded p-1.5 text-[#38DDBC] transition hover:bg-[#0D7769]/30 focus:outline-none focus:ring-2 focus:ring-[#38DDBC]"
                  aria-label="Expand chat"
                  title="Expand"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              )}
              <span className="text-xs text-[#38DDBC]">AI Assistant</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.role === "user"
                    ? `ml-8 rounded-lg bg-[#0D7769]/30 px-3 py-2 ${messageTextSize} text-white`
                    : `mr-8 rounded-lg bg-[#38DDBC]/10 px-3 py-2 ${messageTextSize} text-gray-200`
                }
              >
                {msg.role === "assistant" ? (
                  <div className={`prose prose-invert ${proseSize} max-w-none`}>
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                ) : (
                  msg.content
                )}
              </div>
            ))}
            {error && (
              <p className="rounded-lg bg-red-500/20 px-3 py-2 text-sm text-red-300">
                {error}
              </p>
            )}
            {(isLoading || isTyping) && (
              <div className="mr-8 flex items-center gap-2 rounded-lg bg-[#38DDBC]/10 px-3 py-2">
                <span className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#38DDBC]" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#38DDBC]" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-[#38DDBC]" style={{ animationDelay: "300ms" }} />
                </span>
                <span className="text-sm text-[#38DDBC]">Codify AI is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-[#0D7769]/30 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 rounded-lg border border-[#0D7769]/50 bg-[rgba(0,5,4,0.8)] px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-[#38DDBC] focus:outline-none focus:ring-1 focus:ring-[#38DDBC]"
              />
              <button
                type="button"
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="rounded-lg bg-[#0D7769] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0a5f54] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
