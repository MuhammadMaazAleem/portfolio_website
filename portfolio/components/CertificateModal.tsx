"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: {
    name: string;
    issuer: string;
    year: string;
    certificateUrl: string;
  } | null;
}

export default function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              style={{
                background: "rgba(15, 22, 41, 0.95)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between p-6 border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <div>
                  <h3
                    className="font-heading text-xl leading-tight"
                    style={{
                      color: "var(--highlight)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {certificate.name}
                  </h3>
                  <p
                    className="font-mono text-sm mt-1"
                    style={{
                      color: "rgba(192,200,216,0.6)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {certificate.issuer} · {certificate.year}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg transition-colors hover:bg-opacity-20"
                  style={{
                    color: "var(--accent)",
                    background: "rgba(192,200,216,0.1)",
                  }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-auto">
                <iframe
                  src={certificate.certificateUrl}
                  className="w-full h-full min-h-[600px]"
                  style={{ border: "none" }}
                  title={certificate.name}
                />
              </div>

              {/* Footer */}
              <div
                className="flex items-center justify-between p-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <p
                  className="font-mono text-xs"
                  style={{ color: "rgba(192,200,216,0.4)" }}
                >
                  Verified Certificate
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={certificate.certificateUrl}
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-mono text-xs"
                    style={{
                      background: "rgba(192,200,216,0.1)",
                      color: "var(--accent)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(192,200,216,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(192,200,216,0.1)";
                    }}
                  >
                    <Download size={14} />
                    Download
                  </a>
                  <a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 font-mono text-xs"
                    style={{
                      background: "rgba(192,200,216,0.15)",
                      color: "var(--highlight)",
                      border: "1px solid var(--border-hover)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(192,200,216,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(192,200,216,0.15)";
                    }}
                  >
                    <ExternalLink size={14} />
                    Open in New Tab
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
