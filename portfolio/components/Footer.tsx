"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative py-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left — name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="font-heading text-lg"
              style={{ color: "var(--highlight)", letterSpacing: "0.03em" }}
            >
              Muhammad Maaz Aleem
            </p>
            <p
              className="font-mono text-xs mt-1"
              style={{ color: "rgba(192,200,216,0.4)", letterSpacing: "0.015em" }}
            >
              Designed &amp; Built by Muhammad Maaz Aleem · {new Date().getFullYear()}
            </p>
          </motion.div>

          {/* Center — socials */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-5"
          >
            {[
              { icon: <GithubIcon size={16} />, href: "https://github.com/MuhammadMaazAleem", label: "GitHub" },
              { icon: <LinkedinIcon size={16} />, href: "https://www.linkedin.com/in/muhammad-maaz-aleem-b16b1028b", label: "LinkedIn" },
              { icon: <Mail size={16} />, href: "mailto:muhammadmaazaleem@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="transition-colors duration-200"
                style={{ color: "rgba(192,200,216,0.4)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--highlight)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(192,200,216,0.4)")
                }
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          {/* Right — back to top */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={scrollTop}
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "rgba(192,200,216,0.4)", letterSpacing: "0.02em" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--highlight)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "rgba(192,200,216,0.4)")
            }
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
