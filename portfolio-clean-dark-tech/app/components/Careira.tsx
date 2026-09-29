"use client";

import { BrainCircuit, Code2, PenTool, ServerCog } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  {
    icon: Code2,
    title: "Front-end",
    description: "HTML, CSS e JavaScript, com formação contínua pelos cursos da Alura.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Prototipagem no Figma, do wireframe à interface funcional.",
  },
  {
    icon: ServerCog,
    title: "Infraestrutura de TI",
    description: "Base construída no suporte a hardware, hoje em sustentação e alta disponibilidade.",
  },
  {
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description: "Certificação em Fundamentos de IA, aplicada ao dia a dia da operação.",
  },
];

export default function CareerSection() {
  return (
    <section
      id="carreira"
      className="relative py-20 px-5 sm:py-28 sm:px-8 md:px-16 lg:px-24 bg-background"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" eyebrow="Carreira" title="Tecnologia & Operação" />

        <Reveal delay={0.1} className="max-w-2xl ml-0 sm:ml-14">
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Formado em{" "}
            <span className="text-text-primary font-medium">
              Sistemas de Informação
            </span>{" "}
            em dezembro de 2025, a trajetória começou no suporte a hardware
            até chegar à posição atual como{" "}
            <span className="text-text-primary font-medium">
              Analista de Sistemas
            </span>{" "}
            no departamento GINS da{" "}
            <span className="text-text-primary font-medium">Tacom</span>, em
            Belo Horizonte. Entender o hardware por dentro e a interface por
            fora ajuda a resolver o mesmo problema por dois lados.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:ml-14">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.title} delay={0.15 + i * 0.12}>
                <div className="h-full rounded-xl border border-line bg-surface p-7 transition-colors hover:border-primary/50">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
