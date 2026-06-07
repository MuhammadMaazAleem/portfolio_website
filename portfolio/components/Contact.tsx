"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  const socials = [
    {
      icon: <GithubIcon size={16} />,
      label: "GitHub",
      href: "https://github.com/MuhammadMaazAleem",
      value: "@MuhammadMaazAleem",
    },
    {
      icon: <LinkedinIcon size={16} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-maaz-aleem-b16b1028b",
      value: "muhammad-maaz-aleem",
    },
    {
      icon: <Mail size={16} />,
      label: "Email",
      href: "mailto:muhammadmaazaleem@gmail.com",
      value: "muhammadmaazaleem@gmail.com",
    },
    {
      icon: <MapPin size={16} />,
      label: "Location",
      href: "#",
      value: "Islamabad, Pakistan",
    },
  ];

  return (
    <section id="contact" className="section" style={{ position: "relative" }}>
      {/* Background orbs */}
      <div className="orb-bg-2" style={{ bottom: "0%", right: "0%" }} />
      <div className="orb-bg-1" style={{ top: "5%", left: "0%" }} />

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
          Get In Touch
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Left — heading + socials ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading font-light leading-tight"
              style={{
                fontSize: "clamp(36px, 4.5vw, 60px)",
                color: "var(--highlight)",
                lineHeight: "1.05",
                marginBottom: "24px",
                letterSpacing: "0.01em",
              }}
            >
              Let&apos;s build something{" "}
              <span
                style={{
                  color: "rgba(192,200,216,0.7)",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                remarkable.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-body mb-12"
              style={{
                fontSize: "15px",
                lineHeight: "1.8",
                color: "rgba(192,200,216,0.55)",
                maxWidth: "380px",
                letterSpacing: "0.01em",
              }}
            >
              Open to freelance projects, collaborations, and full-time opportunities.
              Drop me a message — I reply fast.
            </motion.p>

            {/* ── Socials ── */}
            <div>
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="social-row"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "8px";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.paddingLeft = "0px";
                  }}
                >
                  <div className="social-icon-box">
                    {s.icon}
                  </div>
                  <div>
                    <p
                      className="font-mono"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "rgba(192,200,216,0.4)",
                        textTransform: "uppercase",
                        marginBottom: "3px",
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      className="font-body"
                      style={{
                        fontSize: "14px",
                        color: "var(--highlight)",
                        fontWeight: "400",
                      }}
                    >
                      {s.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Right — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              background: "rgba(15,22,41,0.75)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(192,200,216,0.1)",
              borderRadius: "16px",
              padding: "48px",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      color: "rgba(192,200,216,0.4)",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="form-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="font-mono"
                    style={{
                      display: "block",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      color: "rgba(192,200,216,0.4)",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="font-mono"
                  style={{
                    display: "block",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "rgba(192,200,216,0.4)",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="font-mono"
                  style={{
                    display: "block",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    color: "rgba(192,200,216,0.4)",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="form-input resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={sending || sent}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "16px 40px",
                  borderRadius: "6px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  border: "none",
                  cursor: sending || sent ? "not-allowed" : "pointer",
                  background: sent ? "rgba(192,200,216,0.1)" : "rgba(192,200,216,1)",
                  color: sent ? "var(--accent)" : "#0A0E1A",
                  opacity: sending ? 0.7 : 1,
                  transition: "all 0.3s ease",
                  marginTop: "8px",
                }}
                onMouseEnter={(e) => {
                  if (!sending && !sent) {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(192,200,216,0.28)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
                  }
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                {sending ? (
                  <>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "2px solid #0A0E1A",
                        borderTopColor: "transparent",
                        animation: "spin 1s linear infinite",
                      }}
                    />
                    Sending...
                  </>
                ) : sent ? (
                  "Message sent ✓"
                ) : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
