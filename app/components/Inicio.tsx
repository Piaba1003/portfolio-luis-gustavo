"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background px-6"
    >
      {/* Parte do código que desenha aquela malha de linhas quase invisíveis no fundo escuro.*/}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,211,238,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.9) 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 45%, rgba(0,0,0,0.9) 0%, transparent 72%)",
        }}
      />

      {/* Brilho suave atras do nome */}
      <div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(233,69,96,0.14) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 font-mono text-xs sm:text-sm text-primary tracking-[0.3em] uppercase"
        >
          Analista de Sistemas 
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-glow font-heading font-semibold uppercase leading-[0.98] tracking-tightish text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary"
        >
          Luis Gustavo
          <br />
          Araujo Ribeiro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-2xl text-text-secondary text-base sm:text-lg"
        >
          Infraestrutura de TI, me desenvolvendo e aventurando no front-end.
          <br /> 
          Atuando de Belo Horizonte - Uai!
        </motion.p>
      </div>

      {/* Scroll - Dica para rola de tela  */}
      <motion.a
        href="#carreira"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary hover:text-primary transition-colors"
        aria-label="Rolar para a próxima seção"
      >
        <span className="font-mono text-[11px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
