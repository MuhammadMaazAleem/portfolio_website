"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-7 h-px" style={{ background: "var(--accent)" }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)", letterSpacing: "0.12em" }}>
            Skills &amp; Technologies
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading font-light leading-tight mb-16"
          style={{ fontSize: "clamp(38px, 5vw, 60px)", color: "var(--highlight)", letterSpacing: "0.03em" }}
        >
          My technical{" "}
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>arsenal.</span>
        </motion.h2>

        <div className="flex flex-col gap-6">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="glass"
              style={{ padding: "40px 44px", borderWidth: "1.5px" }}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-mono text-xs tracking-widest uppercase font-semibold"
                    style={{ color: "var(--highlight)", letterSpacing: "0.14em" }}>
                    {category.category}
                  </h3>
                </div>
                {category.note && (
                  <span className="hidden md:block font-mono text-xs"
                    style={{ color: "rgba(192,200,216,0.5)", letterSpacing: "0.02em" }}>
                    {category.note}
                  </span>
                )}
              </div>

              {/* Separator */}
              <div className="mb-8" style={{ height: "1.5px", background: "var(--border)" }} />

              {category.note && (
                <p className="block md:hidden font-mono text-xs mb-6"
                  style={{ color: "rgba(192,200,216,0.5)", letterSpacing: "0.02em" }}>
                  {category.note}
                </p>
              )}

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: si * 0.04 + ci * 0.04 }}
                    className="skill-pill"
                  >
                    <div className="w-3.5 h-3.5 relative flex-shrink-0">
                      <Image src={skill.icon} alt={skill.name} fill className="object-contain" unoptimized />
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="divider mt-28" />
    </section>
  );
}
