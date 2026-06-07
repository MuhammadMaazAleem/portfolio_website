"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Animated Background Orbs ── */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[-10%] right-[-5%] w-[900px] h-[750px] pointer-events-none"
        animate={{ scale: [1, 1.07, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(192,200,216,0.07) 0%, transparent 65%)",
          }}
        />
      </motion.div>
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[650px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(100,120,180,0.05) 0%, transparent 65%)",
          }}
        />
      </motion.div>

      <div
        className="container relative z-10 flex flex-col min-h-screen justify-center"
        style={{ paddingTop: "100px", paddingBottom: "160px" }}
      >
        <div style={{ maxWidth: "820px" }}>

          {/* ── Availability Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-2"
            style={{ marginBottom: "40px" }}
          >
            <span className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80, 0 0 16px rgba(74,222,128,0.3)" }}
              />
              <span
                className="font-mono text-xs uppercase"
                style={{ color: "rgba(192,200,216,0.55)", letterSpacing: "0.2em" }}
              >
                Available for work
              </span>
            </span>
          </motion.div>

          {/* ── Name ── */}
          <div className="overflow-hidden" style={{ marginBottom: "4px" }}>
            <motion.h1
              className="font-heading font-light leading-tight"
              style={{
                fontSize: "clamp(48px, 8.5vw, 96px)",
                color: "var(--highlight)",
                letterSpacing: "0.01em",
                lineHeight: "1.05",
              }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Muhammad Maaz
            </motion.h1>
          </div>
          <div className="overflow-hidden" style={{ marginBottom: "48px" }}>
            <motion.h1
              className="font-heading font-light leading-tight"
              style={{
                fontSize: "clamp(48px, 8.5vw, 96px)",
                letterSpacing: "0.01em",
                lineHeight: "1.05",
              }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{
                  color: "rgba(192,200,216,0.7)",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Aleem
              </span>
            </motion.h1>
          </div>

          {/* ── Role Tags ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
            style={{ marginBottom: "32px" }}
          >
            {/* Green dot before first tag */}
            <span
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
            />
            {["MERN Stack Developer", "ML Enthusiast", "Co-Founder"].map((tag) => (
              <span
                key={tag}
                style={{
                  border: "1px solid rgba(192,200,216,0.2)",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  letterSpacing: "0.06em",
                  color: "rgba(192,200,216,0.7)",
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* ── Description ── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-body leading-relaxed"
            style={{
              fontSize: "16px",
              color: "rgba(192, 200, 216, 0.62)",
              maxWidth: "560px",
              letterSpacing: "0.01em",
              lineHeight: "1.9",
              marginBottom: "48px",
            }}
          >
            Full-stack engineer building production software. 5th year at Air University, Islamabad.
            Co-founded a freelance software agency shipping real products to real clients.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4"
            style={{ marginBottom: "56px" }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              View Work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
            <a href="mailto:muhammadmaazaleem@gmail.com" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          {/* ── GitHub + Email subtle row ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex items-center gap-5"
            style={{
              paddingTop: "24px",
              borderTop: "1px solid rgba(192,200,216,0.07)",
            }}
          >
            <a
              href="https://github.com/MuhammadMaazAleem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity duration-200"
              style={{ color: "rgba(192,200,216,0.4)", opacity: 1 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <GithubIcon size={13} />
              <span
                className="font-mono"
                style={{ fontSize: "12px", letterSpacing: "0.06em", color: "rgba(192,200,216,0.4)" }}
              >
                MuhammadMaazAleem
              </span>
            </a>
            <span style={{ width: "1px", height: "12px", background: "rgba(192,200,216,0.15)" }} />
            <a
              href="mailto:muhammadmaazaleem@gmail.com"
              className="font-mono transition-opacity duration-200"
              style={{ fontSize: "12px", letterSpacing: "0.04em", color: "rgba(192,200,216,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(192,200,216,0.8)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(192,200,216,0.4)")}
            >
              muhammadmaazaleem@gmail.com
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="scroll-indicator">
        <ChevronDown size={16} style={{ color: "rgba(192,200,216,0.4)" }} />
      </div>
    </section>
  );
}
