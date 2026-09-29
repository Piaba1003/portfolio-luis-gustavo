"use client";

import { Users, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function IdentitySection() {
  return (
    <section
      id="identidade"
      className="relative py-20 px-5 sm:py-28 sm:px-8 md:px-16 lg:px-24 bg-surface"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" eyebrow="Identidade" title="A Origem" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16 sm:ml-14">
          <div>
            <Reveal delay={0.1}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                Raízes no interior de{" "}
                <span className="text-text-primary font-medium">
                  Minas Gerais
                </span>
                , em{" "}
                <span className="text-text-primary font-medium">Abaeté</span>{" "}
                — de onde veio o apelido "Piaba". A mudança para{" "}
                <span className="text-text-primary font-medium">
                  Belo Horizonte
                </span>{" "}
                marcou a busca por mais espaço e oportunidade.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
                <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed">
                  O objetivo é empreender no mercado digital, unindo tecnologia à
                  visão de negócios. E nada disso teria sentido sem um pilar fixo:
                  a família, principal inspiração em cada passo dessa jornada.
                </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-xl border border-line bg-background p-8 sm:p-10 space-y-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-text-primary font-medium">
                    Abaeté → Belo Horizonte
                  </p>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    Do interior de Minas para a capital, em busca de
                    crescimento profissional.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users size={18} />
                </span>
                <div>
                  <p className="text-text-primary font-medium">Família</p>
                  <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                    Principal pilar e inspiração em toda a trajetória.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
