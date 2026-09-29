"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "./Reveal";

/* Replace with the real FormSubmit endpoint, e.g. https://formsubmit.co/YOUR_EMAIL - EMAIL QUE VAI SER ENVIADO AS MENSAGENS */
const FORM_ACTION = "https://formsubmit.co/luisgustavoaraujoribeiro@gmail.com";

const inputClasses =
  "w-full rounded-lg bg-input border border-input-border px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 outline-none transition-colors focus:border-primary";

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative py-20 px-5 sm:py-28 sm:px-8 md:px-16 lg:px-24 bg-background"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        {/*PARTE DO TEXTO DO CONTATO LADO ESQUERDO */}
        <Reveal>
          <span className="font-mono text-xs text-primary tracking-[0.25em] uppercase">
            Contato
          </span>
          
          <p className="mt-5 text-text-secondary text-base sm:text-lg leading-relaxed max-w-md">
            Aberto a novas oportunidades, parcerias e conversas sobre
            tecnologia, produto ou infraestrutura. Envie uma mensagem e a
            resposta vem o quanto antes.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface border border-line text-primary">
                <Mail size={18} />
              </span>
              <div>
                <p className="font-mono text-text-secondary text-xs uppercase tracking-wide">
                  E-mail
                </p>
                <p className="text-text-primary font-medium">
                  luisgustavoaraujoribeiro@email.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface border border-line text-primary">
                <Phone size={18} />
              </span>
              <div>
                <p className="font-mono text-text-secondary text-xs uppercase tracking-wide">
                  Telefone
                </p>
                <p className="text-text-primary font-medium">
                  (37) 9 9934-1164
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface border border-line text-primary">
                <MapPin size={18} />
              </span>
              <div>
                <p className="font-mono text-text-secondary text-xs uppercase tracking-wide">
                  Localização
                </p>
                <p className="text-text-primary font-medium">
                  Belo Horizonte, MG
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* COLUNA DO LADO DIREITO DO FORMULÁRIO */}
        <Reveal delay={0.15}>
          <form
            action={FORM_ACTION}
            method="POST"
            className="rounded-xl border border-line bg-surface p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-text-secondary uppercase tracking-wide"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className={inputClasses}
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-text-secondary uppercase tracking-wide"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seu@email.com"
                  className={inputClasses}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-text-secondary uppercase tracking-wide"
                >
                  Assunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Sobre o que você quer falar?"
                  className={inputClasses}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-text-secondary uppercase tracking-wide"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Escreva sua mensagem..."
                  className={`${inputClasses} resize-none`}
                />
              </div>
            </div>

            {/* FormSubmit config */}
            <input
              type="hidden"
              name="_subject"
              value="Nova mensagem do portfólio"
            />
            <input type="text" name="_honey" className="hidden" />
            <input type="hidden" name="_captcha" value="false" />

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover sm:w-auto"
            >
              Enviar mensagem
              <Send size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
