"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { SectionHeading, SubHeading } from "./SectionHeading";
import TiltGlow from "./TiltGlow";

const experiences = [
  {
    role: "Full-Stack Software Engineer",
    company: "Big C Supercenter Public Company Limited",
    period: "June 2023 — Present",
    projects: [
      {
        title: "Internal systems to support fulfillment operations",
        description:
          "Developed and maintained frontend and backend services to ensure reliable and accurate order processing.",
        bullets: [
          "Product picking",
          "Product packing",
          "Promotion calculation",
          "Stock management",
        ],
      },
      {
        title: "Internal systems to support seller center platforms",
        description:
          "Managed product data synchronization and order processing across multiple platforms.",
        bullets: ["Third-party e-commerce platforms", "Quick commerce services"],
      },
    ],
  },
  {
    role: "Intern Full-Stack Software Engineer",
    company: "AXONS",
    period: "May 2022 — May 2023",
    projects: [
      {
        title: "Internal systems to support risk management operations",
        description:
          "Developed and maintained internal systems to support risk management operations, including risk assessment, reporting, and mitigation strategies.",
        bullets: [
          "Developed a risk heat map table to classify, visualize, and prioritize company risks according to impact and probability levels",
          "Allowed employees to record and assess company risks",
          "Generated reports for management review",
        ],
      }
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Kasetsart University",
    period: "2019 — 2023",
    description: "GPA: 2.97",
  },
  {
    degree: "Mathematics-Science Program",
    school: "The Demonstration School of Ramkhamhaeng University",
    period: "2016 — 2018",
    description: "GPA: 2.55",
  },
];

function ExperienceTimeline() {
  return (
    <div className="relative flex flex-col gap-6 border-l-2 border-[var(--pastel-blue-300)] pl-8">
      {experiences.map((exp, i) => (
        <TiltGlow key={exp.role + i} clip={false}>
          <motion.div
            className="relative rounded-2xl bg-[var(--card-bg)] p-5 shadow-md backdrop-blur"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <span className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-2 border-[var(--card-border)] bg-[var(--pastel-blue-500)]" />
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 text-lg font-semibold text-[var(--pastel-blue-700)]">
                {exp.role}
              </h3>
              <span className="shrink-0 whitespace-nowrap pt-0.5 text-sm text-[var(--pastel-blue-600)]">
                {exp.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--pastel-blue-500)]">
              {exp.company}
            </p>

            {exp.projects.length > 0 && (
              <div className="mt-3 flex flex-col gap-3">
                {exp.projects.map((project, pi) => (
                  <div key={project.title + pi}>
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      {pi + 1}. {project.title}
                    </p>
                    {project.description && (
                      <p className="mt-0.5 indent-4 text-sm text-[var(--foreground)]">
                        {project.description}
                      </p>
                    )}
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-[var(--foreground)]/90">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </TiltGlow>
      ))}
    </div>
  );
}

function Timeline({
  items,
}: {
  items: {
    title: string;
    subtitle: string;
    period: string;
    description: string;
  }[];
}) {
  return (
    <div className="relative flex flex-col gap-6 border-l-2 border-[var(--pastel-blue-300)] pl-8">
      {items.map((item, i) => (
        <TiltGlow key={item.title + i} clip={false}>
          <motion.div
            className="relative rounded-2xl bg-[var(--card-bg)] p-5 shadow-md backdrop-blur"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <span className="absolute -left-[41px] top-6 h-4 w-4 rounded-full border-2 border-[var(--card-border)] bg-[var(--pastel-blue-500)]" />
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 text-lg font-semibold text-[var(--pastel-blue-700)]">
                {item.title}
              </h3>
              <span className="shrink-0 whitespace-nowrap pt-0.5 text-sm text-[var(--pastel-blue-600)]">
                {item.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-[var(--pastel-blue-500)]">
              {item.subtitle}
            </p>
            <p className="mt-2 text-sm text-[var(--foreground)]">
              {item.description}
            </p>
          </motion.div>
        </TiltGlow>
      ))}
    </div>
  );
}

export default function ExperienceSection({ index }: { index?: number }) {
  return (
    <Section id="experience" index={index} maxWidth="max-w-6xl">
      <SectionHeading title="Experience & Education" />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <SubHeading title="Experience" />
          <ExperienceTimeline />
        </div>
        <div>
          <SubHeading title="Education" />
          <Timeline
            items={education.map((e) => ({
              title: e.degree,
              subtitle: e.school,
              period: e.period,
              description: e.description,
            }))}
          />
        </div>
      </div>
    </Section>
  );
}
