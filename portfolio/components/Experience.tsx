"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ position: "relative" }}>
      {/* Background orbs */}
      <div className="orb-bg-1" style={{ top: "20%", left: "0%" }} />
      <div className="orb-bg-2" />

      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-label"
          style={{ marginBottom: "16px" }}
        >
          Experience &amp; Education
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-light leading-tight"
          style={{
            fontSize: "clamp(40px, 5vw, 72px)",
            color: "var(--highlight)",
            lineHeight: "1.05",
            marginBottom: "80px",
            letterSpacing: "0.01em",
          }}
        >
          My journey{" "}
          <span
            style={{
              color: "rgba(192,200,216,0.7)",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            so far.
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Center gradient line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 timeline-line hidden md:block"
            aria-hidden
          />

          <div className="space-y-14 md:space-y-20">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: item.side === "left" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  item.side === "right" ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Timeline Card */}
                <div
                  className={`w-full md:w-[calc(50%-44px)] timeline-card ${
                    item.side === "right" ? "md:ml-11" : "md:mr-11"
                  }`}
                >
                  {/* Date pill */}
                  <div className="mb-5">
                    <span className="date-pill">
                      {item.duration}
                    </span>
                  </div>

                  {/* Role */}
                  <h3
                    className="font-heading font-light mb-2"
                    style={{
                      fontSize: "24px",
                      color: "var(--highlight)",
                      letterSpacing: "0.01em",
                      lineHeight: "1.2",
                    }}
                  >
                    {item.role}
                  </h3>

                  {/* Organization */}
                  <div
                    className="flex items-center gap-1.5 mb-6 font-mono"
                    style={{
                      fontSize: "11px",
                      color: "rgba(192,200,216,0.55)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    <MapPin size={11} />
                    {item.organization}
                  </div>

                  {/* Thin separator line */}
                  <div
                    style={{
                      height: "1px",
                      background: "rgba(192,200,216,0.08)",
                      marginBottom: "20px",
                    }}
                  />

                  {/* Bullet details — custom styled */}
                  <ul style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {item.details.map((detail, di) => (
                      <li
                        key={di}
                        className="font-body"
                        style={{
                          paddingLeft: "20px",
                          position: "relative",
                          fontSize: "14px",
                          lineHeight: "1.7",
                          color: "rgba(192,200,216,0.68)",
                          letterSpacing: "0.01em",
                        }}
                      >
                        <span
                          style={{
                            content: "",
                            position: "absolute",
                            left: 0,
                            top: "11px",
                            width: "5px",
                            height: "1px",
                            background: "rgba(192,200,216,0.4)",
                            display: "inline-block",
                          }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 items-center justify-center">
                  <div className="timeline-dot" />
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-[calc(50%-44px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="divider" style={{ marginTop: "96px" }} />
    </section>
  );
}
