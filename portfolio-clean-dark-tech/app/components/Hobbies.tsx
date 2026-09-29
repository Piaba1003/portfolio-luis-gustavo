"use client";

import { Beer, Gamepad2, LineChart, Mountain } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const hobbies = [
  {
    icon: LineChart,
    title: "Finanças & Investimentos",
    description:
      "Estudante de educação financeira, buscando as melhores estratégias entre Renda Fixa e Variável.",
  },
  {
    icon: Gamepad2,
    title: "Play",
    description:
      "Call no Discord para jogar Warzone, Forza ou o que a galera decidir. O importante é a resenha com os amigos.",
  },
  {
    icon: Beer,
    title: "Churrasco",
    description:
      "Um churrasco no final de semana com uma boa resenha e, para finalizar, um tereré no domingo à tarde.",
  },
  {
    icon: Mountain,
    title: "Viagens",
    description:
      "Explorando o interior e conhendo cachoeiras de Minas Gerais.",
  },
];

export default function HobbiesSection() {
  return (
    <section
      id="gostos"
      className="relative py-20 px-5 sm:py-28 sm:px-8 md:px-16 lg:px-24 bg-background"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" eyebrow="Rotina" title="Fora do Código" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:ml-14">
          {hobbies.map((hobby, i) => {
            const Icon = hobby.icon;
            return (
              <Reveal key={hobby.title} delay={i * 0.12}>
                <div className="group h-full rounded-xl border border-line bg-surface p-7 flex gap-5 items-start transition-colors hover:border-primary/50">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary mb-1.5">
                      {hobby.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
