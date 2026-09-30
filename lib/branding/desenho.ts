/**
 * Geometria oficial da marca !AI para o I Can't Believe CRM.
 *
 * Ela continua em TypeScript para respeitar o white-label: o desenho só é
 * exibido quando a instalação usa a marca padrão do produto.
 */

export const SIMBOLO = {
  viewBox: "0 0 216 216",
  transform: "",
  exclamacao: { x: 24, y: 42, width: 25, height: 91, rx: 12.5 },
  ponto: { cx: 36.5, cy: 161.5, r: 12.5 },
  d: "M60 169 94 59c4-13 11-19 22-19s18 6 22 19l34 110h-31l-25-86-25 86H60Z",
  vazioDoA: "m101 120 15-48 15 48h-30Z",
  triangulo: "m96 169 20-38 20 38H96Z",
  i: { x: 179, y: 42, width: 18, height: 127, rx: 4 },
  modulo: { x: 96, y: 169, width: 40, height: 0, rx: 0 },
} as const;

export const LOGOTIPO = {
  viewBox: "0 0 860 216",
  proporcao: 860 / 216,
  simbolo: { transform: "translate(10 10) scale(.9074)", d: SIMBOLO.d, modulo: SIMBOLO.modulo },
} as const;

/** Cores extraídas do brand board oficial fornecido pela !AI. */
export const CORES_DA_MARCA = {
  claro: { simbolo: "#f5f3ed", nome: "#0a0a0b", sufixo: "#3f5bff" },
  escuro: { simbolo: "#f5f3ed", nome: "#f5f3ed", sufixo: "#d8ff3e" },
} as const;
