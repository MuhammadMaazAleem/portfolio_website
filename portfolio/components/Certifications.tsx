"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import Image from "next/image";
import { Award } from "lucide-react";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

  return (
    <section id="certifications" className="section" style={{ position: "relative" }}>
      {/* Background orbs */}
      <div className="orb-bg-1" style={{ top: "10%" }} />
      <div className="orb-bg-2" style={{ bottom: "5%" }} />

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
          Certifications
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
            marginBottom: "56px",
            letterSpacing: "0.01em",
          }}
        >
          Credentials &amp;{" "}
          <span
            style={{
              color: "rgba(192,200,216,0.7)",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            recognition.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="cert-card flex flex-col gap-5"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Icon + year row */}
              <div className="flex items-start justify-between gap-3">
                <div className="cert-icon-box">
                  <div className="w-6 h-6 relative">
                    <Image
                      src={cert.icon}
                      alt={cert.issuer}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>
                <span className="cert-year">{cert.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-heading leading-snug mb-2"
                  style={{
                    fontSize: "18px",
                    color: "var(--highlight)",
                    letterSpacing: "0.01em",
                    fontWeight: "400",
                  }}
                >
                  {cert.name}
                </h3>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    color: "rgba(192,200,216,0.5)",
                    letterSpacing: "0.04em",
                    lineHeight: "1.6",
                  }}
                >
                  {cert.issuer}
                </p>
              </div>

              {/* Verified row */}
              <div className="cert-verified">
                <Award size={13} style={{ color: "var(--accent)" }} />
                Verified Certificate
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CertificateModal
        isOpen={selectedCert !== null}
        onClose={() => setSelectedCert(null)}
        certificate={
          selectedCert
            ? {
                name: selectedCert.name,
                issuer: selectedCert.issuer,
                year: selectedCert.year,
                certificateUrl: selectedCert.certificateUrl,
              }
            : null
        }
      />

      <div className="divider" style={{ marginTop: "96px" }} />
    </section>
  );
}
