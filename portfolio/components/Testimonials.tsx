"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-16"
        >
          <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
          >
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-light leading-tight mb-16"
          style={{ fontSize: "clamp(38px, 5vw, 60px)", color: "var(--highlight)", letterSpacing: "0.03em" }}
        >
          What people{" "}
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>say.</span>
        </motion.h2>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass p-10 md:p-12"
              >
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="mb-6"
                  style={{ color: "rgba(192,200,216,0.25)" }}
                />

                {/* Quote text */}
                <blockquote
                  className="font-heading text-xl md:text-2xl text-highlight leading-relaxed mb-8 font-light italic"
                  style={{ letterSpacing: "0.02em" }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center font-mono text-xs font-medium"
                    style={{
                      background: "rgba(192,200,216,0.1)",
                      border: "1px solid var(--border)",
                      color: "var(--highlight)",
                    }}
                  >
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p
                      className="font-body font-medium text-sm"
                      style={{ color: "var(--highlight)", letterSpacing: "0.02em" }}
                    >
                      {testimonials[active].name}
                    </p>
                    <p
                      className="font-mono text-xs"
                      style={{ color: "rgba(192,200,216,0.5)", letterSpacing: "0.02em" }}
                    >
                      {testimonials[active].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300"
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === active ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background:
                      i === active
                        ? "var(--accent)"
                        : "rgba(192,200,216,0.25)",
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,200,216,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "var(--glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={15} />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--accent)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,200,216,0.4)";
                  (e.currentTarget as HTMLElement).style.background = "var(--glow)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
                aria-label="Next testimonial"
              >
                <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  );
}
