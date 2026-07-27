"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { SectionHeading } from "./SectionHeading";
import TiltGlow from "./TiltGlow";
import SparkleBurst from "./SparkleBurst";

const contacts = [
  {
    label: "Email",
    value: "sethawutoff@gmail.com",
    type: "copy" as const,
  },
  {
    label: "Phone",
    value: "+66 85-113-8723",
    type: "copy" as const,
  },
  {
    label: "LinkedIn",
    value: "sethawut-pornsiripiyakul",
    type: "link" as const,
    href: "https://www.linkedin.com/in/sethawut-pornsiripiyakul-368a19230/",
    icon: "linkedin" as const,
  },
  {
    label: "GitHub",
    value: "sethawutoff56334",
    type: "link" as const,
    href: "https://github.com/sethawutoff56334",
    icon: "github" as const,
  },
  {
    label: "Address",
    value:
      `193/127 Rat Phatthana Rd. Rat Phatthana Sub-district, Saphan Sung District, Bangkok 10240`,
    type: "text" as const,
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.33 1.12 2.9.85.09-.66.34-1.12.62-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="h-4 w-4"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ContactSection({ index }: { index?: number }) {
  const [copied, setCopied] = useState<string | null>(null);

  async function handleCopy(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied((c) => (c === label ? null : c)), 1500);
    } catch {
      // clipboard unavailable; ignore
    }
  }

  return (
    <Section id="contact" index={index}>
      <SectionHeading title="Contact" />
      <div className="grid items-start gap-4 sm:grid-cols-2">
        {contacts.map((c, i) => (
          <TiltGlow
            key={c.label}
            className={c.label === "Address" ? "sm:col-span-2" : ""}
          >
            <motion.div
              className="relative rounded-2xl bg-[var(--card-bg)] p-3.5 text-center shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 sm:backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="flex items-end justify-center gap-1.5 text-[var(--pastel-blue-500)]">
                {c.type === "link" &&
                  (c.icon === "linkedin" ? <LinkedInIcon /> : <GitHubIcon />)}
                <p className="text-sm font-medium">{c.label}</p>
              </div>

              {c.type === "link" && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-[var(--pastel-blue-700)] hover:underline"
                >
                  {c.value}
                </a>
              )}

              {c.type === "copy" && (
                <button
                  type="button"
                  onClick={() => handleCopy(c.label, c.value)}
                  className="mt-1 inline-flex items-center justify-center gap-1.5 font-semibold text-[var(--pastel-blue-700)]"
                >
                  {c.value}
                  <span className="relative inline-flex h-4 w-4">
                    {copied === c.label ? <CheckIcon /> : <CopyIcon />}
                    <SparkleBurst show={copied === c.label} />
                  </span>
                </button>
              )}

              {c.type === "text" && (
                <p className="mt-1 font-semibold text-[var(--pastel-blue-700)]">
                  {c.value}
                </p>
              )}
            </motion.div>
          </TiltGlow>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-[var(--pastel-blue-600)]">
        Sethawut Pornsiripiyakul — Thank you for visiting
      </p>
    </Section>
  );
}
