"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Section from "./Section";
import { SubHeading } from "./SectionHeading";
import TiltGlow from "./TiltGlow";
import {
  CodeIcon,
  LayersIcon,
  DatabaseIcon,
  QueueIcon,
  CloudIcon,
  MobileIcon,
} from "./CategoryIcons";

const skillGroups = [
  {
    category: "Programming Languages",
    icon: CodeIcon,
    items: ["Golang", "Python", "JavaScript", "TypeScript", "Dart", "C", "Java"],
  },
  {
    category: "Frameworks & Technologies",
    icon: LayersIcon,
    items: [
      "Golang (Fiber, Fasthttp)",
      "Node.js (Express)",
      "Next.js",
      "Django",
    ],
  },
  {
    category: "Databases",
    icon: DatabaseIcon,
    items: ["PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "Messaging & Streaming",
    icon: QueueIcon,
    items: ["Kafka", "AWS: SQS"],
  },
  {
    category: "Cloud & Services",
    icon: CloudIcon,
    items: [
      "AWS: S3",
      "GCP: Cloud Storage",
      "Azure: Authentication (Azure AD)",
    ],
  },
  {
    category: "Mobile",
    icon: MobileIcon,
    items: ["Flutter"],
  },
];

export default function ProfileSection({ index }: { index?: number }) {
  return (
    <Section id="profile" index={index} maxWidth="max-w-5xl">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-center sm:gap-12 sm:text-left">
        <motion.div
          className="animate-float relative mt-6 h-56 w-56 shrink-0 sm:mt-3 sm:h-72 sm:w-72"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="pulse-ring absolute inset-0 rounded-full border-2 border-[var(--pastel-blue-300)]"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="pulse-ring absolute inset-0 rounded-full border-2 border-[var(--pastel-blue-300)]"
            style={{ animationDelay: "0.9s" }}
          />
          <span
            className="pulse-ring absolute inset-0 rounded-full border-2 border-[var(--pastel-blue-300)]"
            style={{ animationDelay: "1.8s" }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-[var(--card-border)] shadow-lg ring-4 ring-[var(--pastel-blue-200)]">
            <Image
              src="/profile/profile.jpg"
              alt="Profile photo"
              fill
              sizes="288px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--pastel-blue-500)]">
              Hello, I&apos;m
            </p>
            <h1 className="bg-gradient-to-r from-[var(--pastel-blue-500)] via-[var(--pastel-blue-600)] to-[var(--pastel-blue-700)] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
              Sethawut Pornsiripiyakul
            </h1>
            <span className="mx-auto mt-3 block h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--pastel-blue-400)] to-[var(--pastel-blue-600)] sm:mx-0" />
          </motion.div>

          <motion.p
            className="max-w-xl indent-8 text-lg text-[var(--pastel-blue-600)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Software Engineer with more than 3 years of experience in software development. Passionate about continuous learning and self-improvement, with strong responsibility and the ability to work effectively in a team environment.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {["Backend", "Frontend", "Cloud", "Teamwork"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--pastel-blue-100)] px-4 py-1.5 text-sm font-medium text-[var(--pastel-blue-700)] shadow-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.a
            href="/resume/resume.pdf"
            download
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--pastel-blue-100)] px-6 py-2.5 text-sm font-medium text-[var(--pastel-blue-700)] shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download Resume
          </motion.a>
        </div>
      </div>

      <motion.div
        className="mt-12 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
      >
        <div className="flex justify-center sm:justify-start">
          <SubHeading title="Technical Skills" />
        </div>
        <div className="grid items-start gap-4 sm:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <TiltGlow key={group.category}>
                <motion.div
                  className="rounded-2xl bg-[var(--card-bg)] p-5 shadow-md backdrop-blur"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                >
                  <h3 className="mb-3 flex items-center gap-2 text-base font-semibold text-[var(--pastel-blue-700)]">
                    <Icon />
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--pastel-blue-100)] px-3 py-1 text-xs font-medium text-[var(--pastel-blue-700)] shadow-sm sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TiltGlow>
            );
          })}
        </div>
      </motion.div>
    </Section>
  );
}
