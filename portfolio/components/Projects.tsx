"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { projects } from "@/data/projects";

function TechPill({ name }: { name: string }) {
  return (
    <span className="tech-tag">
      {name}
    </span>
  );
}

function ProjectLinks({ github, live }: { github: string; live: string }) {
  return (
    <div
      className="flex items-center gap-5 pt-4"
      style={{ borderTop: "1px solid rgba(192,200,216,0.08)" }}
    >
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-mono text-xs transition-all duration-200"
        style={{ color: "rgba(192,200,216,0.5)", letterSpacing: "0.04em" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = "var(--highlight)";
          (e.currentTarget as HTMLElement).style.textDecoration = "underline";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = "rgba(192,200,216,0.5)";
          (e.currentTarget as HTMLElement).style.textDecoration = "none";
        }}
      >
        <GithubIcon size={13} />
        View Code
      </a>
      {live !== "Not deployed" && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-xs transition-all duration-200"
          style={{ color: "rgba(192,200,216,0.5)", letterSpacing: "0.04em" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "var(--highlight)";
            (e.currentTarget as HTMLElement).style.textDecoration = "underline";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "rgba(192,200,216,0.5)";
            (e.currentTarget as HTMLElement).style.textDecoration = "none";
          }}
        >
          <ExternalLink size={12} />
          Live Demo
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" style={{ position: "relative" }}>
      {/* Background orbs */}
      <div className="orb-bg-2" style={{ top: "15%", right: "0%", bottom: "auto" }} />
      <div className="orb-bg-1" style={{ bottom: "5%", top: "auto" }} />

      <div className="container">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-label"
          style={{ marginBottom: "16px" }}
        >
          Selected Projects
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
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
          Things I&apos;ve{" "}
          <span
            style={{
              color: "rgba(192,200,216,0.7)",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            built.
          </span>
        </motion.h2>

        {/* ── Featured Project ── */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mb-8 overflow-hidden"
            style={{
              background: "rgba(15,22,41,0.8)",
              border: "1px solid rgba(192,200,216,0.1)",
              borderRadius: "16px",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              transition: "all 0.4s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,200,216,0.25)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(192,200,216,0.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(192,200,216,0.1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Visual / Code panel — 2/5 */}
              <div
                className="lg:col-span-2 relative h-56 lg:h-auto min-h-[280px] overflow-hidden"
                style={{ borderRight: "1px solid rgba(192,200,216,0.08)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 40%, rgba(192,200,216,0.08) 0%, transparent 60%), linear-gradient(135deg, rgba(15,22,41,0.5) 0%, rgba(10,14,26,0.97) 100%)",
                  }}
                />
                {/* Subtle grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(192,200,216,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192,200,216,0.03) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                {/* Styled code block */}
                <div className="absolute inset-0 flex flex-col justify-center px-6">
                  <div className="code-block" style={{ background: "rgba(0,0,0,0.45)" }}>
                    {/* Running indicator */}
                    <div
                      className="flex items-center gap-2 mb-4"
                      style={{
                        borderBottom: "1px solid rgba(192,200,216,0.08)",
                        paddingBottom: "10px",
                        marginBottom: "12px",
                      }}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "#4ade80",
                          boxShadow: "0 0 6px #4ade80",
                          display: "inline-block",
                        }}
                      />
                      <span
                        className="font-mono"
                        style={{ fontSize: "10px", color: "rgba(192,200,216,0.4)", letterSpacing: "0.1em" }}
                      >
                        ● running
                      </span>
                    </div>
                    <div>
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-fn">app</span>{" "}
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>=</span>{" "}
                      <span className="code-fn">express</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>();</span>
                    </div>
                    <div>
                      <span className="code-fn">app</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>.</span>
                      <span className="code-keyword">use</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>(</span>
                      <span className="code-fn">cors</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>());</span>
                    </div>
                    <div>
                      <span className="code-fn">mongoose</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>.</span>
                      <span className="code-keyword">connect</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>(</span>
                      <span className="code-string">URI</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>);</span>
                    </div>
                    <div>
                      <span className="code-fn">app</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>.</span>
                      <span className="code-keyword">listen</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>(</span>
                      <span className="code-string">3000</span>
                      <span style={{ color: "rgba(192,200,216,0.5)" }}>);</span>
                    </div>
                  </div>
                </div>
                {/* Featured badge */}
                <div
                  className="absolute top-5 left-5 font-mono text-xs px-3 py-1.5 rounded-md"
                  style={{
                    background: "rgba(192,200,216,0.1)",
                    border: "1px solid rgba(192,200,216,0.25)",
                    color: "var(--accent)",
                    letterSpacing: "0.08em",
                  }}
                >
                  ✦ Featured
                </div>
              </div>

              {/* Content side — 3/5 */}
              <div className="lg:col-span-3 flex flex-col justify-between" style={{ padding: "48px" }}>
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <h3
                      className="font-heading font-light leading-snug"
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 30px)",
                        color: "var(--highlight)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {featured.name}
                    </h3>
                    <ArrowUpRight size={20} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 4 }} />
                  </div>
                  <p
                    className="font-body mb-8"
                    style={{
                      fontSize: "14px",
                      color: "rgba(192,200,216,0.62)",
                      lineHeight: "1.85",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {featured.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featured.tech.map((t) => (
                      <TechPill key={t} name={t} />
                    ))}
                  </div>
                </div>
                <ProjectLinks github={featured.github} live={featured.live} />
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="flex flex-col justify-between"
              style={{
                background: "rgba(15,22,41,0.75)",
                border: "1px solid rgba(192,200,216,0.1)",
                borderRadius: "16px",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                padding: "32px",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(192,200,216,0.25)";
                el.style.boxShadow = "0 0 40px rgba(192,200,216,0.06), 0 8px 32px rgba(0,0,0,0.3)";
                el.style.transform = "translateY(-3px)";
                const arrow = el.querySelector(".hover-arrow") as HTMLElement;
                if (arrow) arrow.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(192,200,216,0.1)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
                const arrow = el.querySelector(".hover-arrow") as HTMLElement;
                if (arrow) arrow.style.opacity = "0";
              }}
            >
              {/* Arrow icon top-right, appears on hover */}
              <div
                className="hover-arrow absolute top-5 right-5"
                style={{
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  color: "rgba(192,200,216,0.5)",
                  fontSize: "18px",
                }}
              >
                ↗
              </div>

              <div>
                <div className="flex items-start justify-between mb-4" style={{ paddingRight: "24px" }}>
                  <h3
                    className="font-heading font-light leading-snug"
                    style={{
                      fontSize: "20px",
                      color: "var(--highlight)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {project.name}
                  </h3>
                </div>
                <p
                  className="font-body mb-5"
                  style={{
                    fontSize: "14px",
                    color: "rgba(192,200,216,0.58)",
                    lineHeight: "1.85",
                    letterSpacing: "0.01em",
                  }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <TechPill key={t} name={t} />
                  ))}
                </div>
              </div>
              <ProjectLinks github={project.github} live={project.live} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/MuhammadMaazAleem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs transition-all duration-200"
            style={{ color: "rgba(192,200,216,0.35)", letterSpacing: "0.08em" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--highlight)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(192,200,216,0.35)")}
          >
            <GithubIcon size={13} />
            View all repositories on GitHub
            <ArrowUpRight size={12} />
          </a>
        </motion.div>
      </div>

      <div className="divider" style={{ marginTop: "112px" }} />
    </section>
  );
}
