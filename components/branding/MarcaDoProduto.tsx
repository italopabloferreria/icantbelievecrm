import { LOGOTIPO, SIMBOLO } from "@/lib/branding/desenho";
import { cn } from "@/lib/utils";

/** Marca padrão do produto, desenhada inline para preservar o white-label. */
type Props = {
  readonly nome: string;
  readonly className?: string;
  readonly decorativo?: boolean;
};

const SIMBOLO_CLARO_ESCURO = "fill-[#f5f3ed] dark:fill-[#f5f3ed]";
const NOME_CLARO_ESCURO = "fill-[#0a0a0b] dark:fill-[#f5f3ed]";
const SUFIXO_CLARO_ESCURO = "fill-[#3f5bff] dark:fill-[#d8ff3e]";

export const CLASSES_DE_COR = {
  simbolo: SIMBOLO_CLARO_ESCURO,
  nome: NOME_CLARO_ESCURO,
  sufixo: SUFIXO_CLARO_ESCURO,
} as const;

function acessibilidade(nome: string, decorativo: boolean) {
  return decorativo
    ? ({ "aria-hidden": true } as const)
    : ({ role: "img", "aria-label": nome } as const);
}

function SimboloGeometrico() {
  return (
    <>
      <rect width="216" height="216" rx="42" className="fill-[#0a0a0b]" />
      <rect {...SIMBOLO.exclamacao} className="fill-[#d8ff3e]" />
      <circle {...SIMBOLO.ponto} className="fill-[#d8ff3e]" />
      <path className={SIMBOLO_CLARO_ESCURO} d={SIMBOLO.d} />
      <path d={SIMBOLO.vazioDoA} className="fill-[#0a0a0b]" />
      <path d={SIMBOLO.triangulo} className="fill-[#3f5bff]" />
      <rect {...SIMBOLO.i} className={SIMBOLO_CLARO_ESCURO} />
    </>
  );
}

export function SimboloDoProduto({ nome, className, decorativo = false }: Props) {
  return (
    <svg
      viewBox={SIMBOLO.viewBox}
      className={cn("shrink-0", className)}
      {...acessibilidade(nome, decorativo)}
    >
      <SimboloGeometrico />
    </svg>
  );
}

export function LogotipoDoProduto({ nome, className, decorativo = false }: Props) {
  return (
    <svg
      viewBox={LOGOTIPO.viewBox}
      className={cn("shrink-0", className)}
      {...acessibilidade(nome, decorativo)}
    >
      <g transform={LOGOTIPO.simbolo.transform}>
        <SimboloGeometrico />
      </g>
      <line
        x1="250"
        y1="28"
        x2="250"
        y2="188"
        className="stroke-[#0a0a0b] dark:stroke-[#f5f3ed]"
        strokeWidth="2"
      />
      <text
        x="286"
        y="85"
        className={NOME_CLARO_ESCURO}
        style={{
          font: "700 48px var(--font-atkinson), system-ui, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        I Can't Believe
      </text>
      <text
        x="286"
        y="139"
        className={NOME_CLARO_ESCURO}
        style={{
          font: "700 48px var(--font-atkinson), system-ui, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        CRM <tspan className={SUFIXO_CLARO_ESCURO}>!AI</tspan>
      </text>
      <text
        x="289"
        y="174"
        className="fill-[#4b4b4f] dark:fill-[#b7b4ad]"
        style={{ font: "500 15px var(--font-mono), ui-monospace, monospace", letterSpacing: "4px" }}
      >
        TECNOLOGIA PARA NEGÓCIOS
      </text>
    </svg>
  );
}
