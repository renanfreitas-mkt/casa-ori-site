import { createFileRoute } from "@tanstack/react-router";
import { ParaEmpresasAbismo } from "@/components/site/v2/PaginasAbismo";
import { LayoutAbismo, serifa } from "@/components/site/v2/abismo-ui";
import { PAGINAS, WHATSAPP_URL } from "@/components/site/content";

const title = "Para empresas — Casa Orí";
const description =
  "Palestras, encontros de comunicação e programas de liderança para equipes e empresas.";

export const Route = createFileRoute("/para-empresas")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casa-ori-site.lovable.app/para-empresas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casa-ori-site.lovable.app/para-empresas" }],
  }),
  component: ParaEmpresasPage,
});

function ParaEmpresasPage() {
  return (
    <LayoutAbismo passo="cnpj" tema="pj"
      fechamento={{
        imagem: "/img/abismo-sem-homem.webp",
        titulo: (
          <>
            Comece a <em className={serifa}>travessia</em>
          </>
        ),
        cartoes: [{ ...PAGINAS.pj.final, href: WHATSAPP_URL }],
      }}
    >
      <ParaEmpresasAbismo />
    </LayoutAbismo>
  );
}
