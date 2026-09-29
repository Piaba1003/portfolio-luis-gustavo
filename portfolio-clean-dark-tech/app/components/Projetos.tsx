"use client";

import { ArrowUpRight, Smartphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Replace with the real Figma project link.
const FIGMA_URL = "https://www.figma.com/proto/HQgFudEn1Tf4qA3StkaY8Z/APP-SOU-ABAET%C3%89?node-id=0-1&t=6mt9WQZNVBStO8MA-1";

export default function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="relative py-20 px-5 sm:py-28 sm:px-8 md:px-16 lg:px-24 bg-surface"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" eyebrow="Projetos" title="Projetos em Destaque" />

        <Reveal delay={0.1} className="sm:ml-14">
          <div className="rounded-xl border border-line bg-background p-8 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
              <Smartphone className="text-primary" size={28} />
            </div>

            <div>
              <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">
                Mobilidade & Serviços Municipais
              </span>
              <h3 className="font-heading font-semibold text-2xl sm:text-3xl text-text-primary mt-3">
                App Na Rota
              </h3>
              <p className="mt-4 text-text-secondary text-base leading-relaxed max-w-2xl">
                Aplicativo móvel desenhado no Figma para auxiliar os
                moradores de Abaeté com mobilidade urbana e acesso a
                serviços municipais.
              </p>

              <a
                href={FIGMA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
              >
                Ver protótipo no Figma
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
