"use client";
// LinkedIn: https://www.linkedin.com/in/muhammad-maaz-aleem-b16b1028b

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 50);
    });
    return unsubscribe;
  }, [scrollY]);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(10, 14, 26, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(192, 200, 216, 0.1)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="font-heading text-xl md:text-2xl text-highlight font-light tracking-wide"
              style={{ letterSpacing: "0.03em" }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              Muhammad Maaz Aleem
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${activeSection === link.href.replace("#", "") ? "active" : ""}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-accent hover:text-highlight transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? "all" : "none" }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60]"
        style={{ background: "rgba(10, 14, 26, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center mb-16">
            <span className="font-heading text-xl text-highlight">Menu</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="text-accent hover:text-highlight transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading text-4xl text-accent hover:text-highlight transition-colors"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: mobileOpen ? 0 : -40, opacity: mobileOpen ? 1 : 0 }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="mt-auto">
            <p className="font-mono text-xs text-accent opacity-40">
              muhammadmaazaleem@gmail.com
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
