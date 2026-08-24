import { memo } from "react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CTA } from "./CTA";
import {
  SectionHead,
  PublicoDuo,
  QUIZ_CPF_URL,
  QUIZ_CNPJ_URL,
  WHATSAPP_URL,
} from "./kit";

const ContatoCaminhoImpl = () => (
  <Section bg="superficie" id="contato">
    <SectionHead
      align="center"
      kicker="Contato"
      title="O primeiro passo é entender o que está acontecendo."
      lead="Antes de escolher um serviço, vale entender melhor a sua situação. São poucas perguntas e, no fim, você recebe uma orientação sobre o caminho que faz mais sentido agora."
      className="mb-12"
    />
    <PublicoDuo
      cpf={{
        titulo: "Para você",
        texto:
          "Algo está pesando, se repetindo ou travando — e você quer entender o que está por trás disso.",
        cta: (
          <CTA href={QUIZ_CPF_URL} external variant="verde">
            Quero entender minha situação
          </CTA>
        ),
      }}
      cnpj={{
        titulo: "Para você, líder",
        texto:
          "A equipe não engrena, os conflitos se repetem e a comunicação trava os resultados.",
        cta: (
          <CTA href={QUIZ_CNPJ_URL} external variant="outlineGreen">
            Quero entender minha empresa
          </CTA>
        ),
      }}
    />
  </Section>
);
export const ContatoCaminho = memo(ContatoCaminhoImpl);

const ContatoDiretoImpl = () => (
  <Section bg="verde-noite">
    <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
      <div>
        <Reveal>
          <h2 className="section-title text-white">
            Prefere falar direto com a Carol?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-[16px] md:text-[17px] font-light leading-relaxed text-white/85 max-w-[520px]">
            Se você já sabe o que precisa, ou simplesmente prefere conversar
            antes de responder qualquer coisa, o WhatsApp está aberto.
            Atendimentos presenciais em Brasília e online para todo o Brasil.
          </p>
        </Reveal>
      </div>
      <Reveal delay={200}>
        <div className="border border-areia/25 rounded-3xl p-8 md:p-10">
          <p className="script text-areia text-[22px] leading-snug">
            Uma conversa já muda o ponto de partida.
          </p>
          <div className="mt-7">
            <CTA href={WHATSAPP_URL} external variant="areia">
              Falar no WhatsApp
            </CTA>
          </div>
        </div>
      </Reveal>
    </div>
  </Section>
);
export const ContatoDireto = memo(ContatoDiretoImpl);
