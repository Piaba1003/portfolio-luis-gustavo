# Portfólio | Luis Gustavo Araujo Ribeiro (Piaba)

Portfólio "Clean Dark Tech" em Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion. Sem elementos 3D — foco total em tipografia e legibilidade.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Antes de publicar, configure 2 coisas

1. **Formulário de contato** — em `app/components/ContactSection.tsx`, troque:
   ```ts
   const FORM_ACTION = "https://formsubmit.co/seu-email@exemplo.com";
   ```
   pelo seu e-mail real no FormSubmit. No primeiro envio, o FormSubmit manda
   um e-mail de confirmação de ativação.

2. **Link do Figma** — em `app/components/ProjectsSection.tsx`, troque
   `FIGMA_URL` pelo link real do protótipo do "App Na Rota".

Também vale revisar o e-mail/telefone de exemplo em `ContactSection.tsx`.

## Estrutura

```
app/
  layout.tsx              # fontes (Inter + Space Grotesk + JetBrains Mono) e metadata
  globals.css              # reset, glow de texto, fix de autofill escuro, scrollbar
  page.tsx                 # monta as seções na ordem
  components/
    HeroSection.tsx         # hero minimalista com grid sutil + glow, sem 3D
    SectionNav.tsx           # navegação lateral por âncoras (desktop)
    CareerSection.tsx        # #carreira — Tacom/GINS, Alura, IA
    IdentitySection.tsx      # #identidade — Abaeté, BH, Malu
    HobbiesSection.tsx       # #gostos — finanças, Warzone, tereré, trilhas
    ProjectsSection.tsx      # #projetos — App Na Rota
    ContactSection.tsx       # #contato — formulário FormSubmit
    Reveal.tsx / SectionHeading.tsx  # utilitários de animação e título
```

## Notas de design

- Tipografia como elemento principal: **Space Grotesk** nos títulos,
  **Inter** no corpo e **JetBrains Mono** nos rótulos/eyebrows — reforça o
  tom "tech" sem depender de elementos 3D ou decoração pesada.
- O hero usa uma grade CSS bem sutil + glow radial atrás do nome, no lugar
  de qualquer biblioteca 3D (nenhuma dependência de 3D foi incluída no
  `package.json`).
- Cada seção tem um índice numerado em mono (01, 02, 03, 04) como recurso
  de wayfinding editorial, alinhado à estética "clean".
- Cores e paddings seguem os tokens do briefing (`#1a1a2e`, `#16213e`,
  `#e94560`, etc.), configurados em `tailwind.config.ts`.
- Todas as seções usam `useInView` do Framer Motion para o fade-in ao rolar.
- O grid quebra para coluna única abaixo de 768px em todas as seções.
- O autofill do navegador foi corrigido via `box-shadow: inset` em
  `globals.css` para não quebrar o tema escuro nos campos do formulário.
