"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "carreira", label: "Carreira" },
  { id: "identidade", label: "Identidade" },
  { id: "projetos", label: "Projetos" },
  { id: "contato", label: "Contato" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navegação por seção"
      className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.label}
          className="group relative flex items-center justify-end"
        >
          <span className="absolute right-6 whitespace-nowrap rounded-md bg-surface border border-line px-2.5 py-1 text-xs text-text-secondary opacity-0 transition-opacity group-hover:opacity-100">
            {section.label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full border-2 transition-all ${
              active === section.id
                ? "border-primary bg-primary scale-110"
                : "border-text-secondary/50 bg-transparent"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
