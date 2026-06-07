"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "5th", label: "Semester" },
  { value: "2+", label: "Years Coding" },
  { value: "15+", label: "Projects Built" },
  { value: "7", label: "Certifications" },
];

const bio = [
  "Computer Science student at Air University, Islamabad (5th Semester). MERN Stack Developer venturing into Machine Learning — building production-grade web applications from the ground up.",
  "Co-founded a 3-person freelance software agency in 2025. I lead full-stack architecture, client delivery, and technical strategy — turning requirements into scalable, polished products.",
  "Driven by impact, not just code. I build interfaces people love, systems that hold, and experiences that convert. Open to freelance, collaboration, and ambitious projects.",
];

export default function About() {
  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      {/* Background orbs */}
      <div className="orb-bg-1" />
      <div className="orb-bg-2" />

      <div className="container">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label mb-12"
        >
          About Me
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* ── Left: Bio ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading font-light leading-tight"
              style={{
                fontSize: "clamp(40px, 5vw, 72px)",
                color: "var(--highlight)",
                lineHeight: "1.05",
                marginBottom: "56px",
                letterSpacing: "0.01em",
              }}
            >
              Building software that{" "}
              <em
                style={{
                  color: "rgba(192,200,216,0.7)",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                matters.
              </em>
            </motion.h2>

            <div className="flex flex-col gap-5">
              {bio.map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="font-body"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.85",
                    color: "rgba(192, 200, 216, 0.65)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* ── Stats Row ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="stats-row"
            >
              {stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div
              style={{
                width: "100%",
                maxWidth: "340px",
                aspectRatio: "4/5",
                borderRadius: "16px",
                border: "1px solid rgba(192,200,216,0.15)",
                boxShadow: "0 0 60px rgba(192,200,216,0.06)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(10,14,26,0.72) 100%)",
                }}
              />

              <Image
                src="/profile.png"
                alt="Muhammad Maaz Aleem"
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover object-top"
                priority
              />

              {/* Corner brackets */}
              {[
                { top: 12, left: 12, borderTop: true, borderLeft: true },
                { top: 12, right: 12, borderTop: true, borderRight: true },
                { bottom: 12, left: 12, borderBottom: true, borderLeft: true },
                { bottom: 12, right: 12, borderBottom: true, borderRight: true },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute z-20 w-6 h-6"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    bottom: pos.bottom,
                    right: pos.right,
                    borderTop: pos.borderTop ? "1.5px solid rgba(192,200,216,0.4)" : undefined,
                    borderLeft: pos.borderLeft ? "1.5px solid rgba(192,200,216,0.4)" : undefined,
                    borderBottom: pos.borderBottom ? "1.5px solid rgba(192,200,216,0.4)" : undefined,
                    borderRight: pos.borderRight ? "1.5px solid rgba(192,200,216,0.4)" : undefined,
                  }}
                />
              ))}

              {/* Elegant location badge — bottom-left, glassmorphism pill */}
              <div className="location-badge">
                📍 Islamabad · Open to Work
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="divider" style={{ marginTop: "96px" }} />
    </section>
  );
}
