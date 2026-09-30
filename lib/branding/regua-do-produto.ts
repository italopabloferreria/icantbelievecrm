/**
 * Régua congelada do design system !AI.
 *
 * Mantém em runtime a mesma paleta declarada em app/globals.css, inclusive na
 * imagem standalone de produção onde o CSS fonte não existe no contêiner.
 */

import type { Regua } from "./contraste";

export const REGUA_DO_PRODUTO: Regua = {
  rampaDoProduto: [
    "#f1f5ff",
    "#e1eaff",
    "#c4d4ff",
    "#9eb7ff",
    "#7a9aff",
    "#5c7eff",
    "#3f5bff",
    "#334ac5",
    "#2a3e9b",
    "#24367d",
    "#0e1742",
  ],
  claro: {
    nome: "claro",
    base: [
      { chave: "--color-bg", hex: "#f5f3ed" },
      { chave: "--color-surface", hex: "#fffefa" },
      { chave: "--color-surface-elevated", hex: "#ece9e1" },
    ],
    tingidas: [{ chave: "--color-accent-soft", fonte: { tipo: "grau", indice: 1, alfa: 1 } }],
    papeis: [
      {
        token: "--color-accent",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 6, alfa: 1 },
        contra: null,
      },
      {
        token: "--color-accent-fg",
        tipo: "texto",
        fonte: { tipo: "frenteCalculada", sobre: { tipo: "grau", indice: 6, alfa: 1 } },
        contra: [{ tipo: "grau", indice: 6, alfa: 1 }],
      },
      {
        token: "--color-accent-hover",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 7, alfa: 1 },
        contra: null,
      },
      {
        token: "--ring",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 6, alfa: 1 },
        contra: null,
      },
      {
        token: "::selection/color",
        tipo: "texto",
        fonte: { tipo: "grau", indice: 10, alfa: 1 },
        contra: [{ tipo: "grau", indice: 2, alfa: 1 }],
      },
      {
        token: ":focus-visible/outline",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 6, alfa: 1 },
        contra: null,
      },
    ],
    semanticas: [
      { nome: "success", hex: "#5a8a5f" },
      { nome: "warning", hex: "#b07a2b" },
      { nome: "error", hex: "#a94a3c" },
      { nome: "info", hex: "#4a7a93" },
    ],
    neutros: [
      "#f5f3ed",
      "#e7e3da",
      "#d4d0c6",
      "#b7b4ad",
      "#8f8c86",
      "#6f6d68",
      "#4b4b4f",
      "#2f2f32",
      "#1d1d20",
      "#111113",
      "#0a0a0b",
    ],
    indices: { accent: 6, hover: 7, soft: 1 },
    alfaDoSoft: 1,
  },
  escuro: {
    nome: "escuro",
    base: [
      { chave: "--color-bg", hex: "#0a0a0b" },
      { chave: "--color-surface", hex: "#111113" },
      { chave: "--color-surface-elevated", hex: "#1d1d20" },
    ],
    tingidas: [
      { chave: "--color-accent-soft", fonte: { tipo: "literal", hex: "#7a9aff", alfa: 0.18 } },
    ],
    papeis: [
      {
        token: "--color-accent",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 4, alfa: 1 },
        contra: null,
      },
      {
        token: "--color-accent-fg",
        tipo: "texto",
        fonte: { tipo: "frenteCalculada", sobre: { tipo: "grau", indice: 4, alfa: 1 } },
        contra: [{ tipo: "grau", indice: 4, alfa: 1 }],
      },
      {
        token: "--color-accent-hover",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 3, alfa: 1 },
        contra: null,
      },
      {
        token: "--ring",
        tipo: "componente",
        fonte: { tipo: "grau", indice: 4, alfa: 1 },
        contra: null,
      },
      {
        token: '[data-theme="dark"] ::selection/color',
        tipo: "texto",
        fonte: { tipo: "grau", indice: 0, alfa: 1 },
        contra: [{ tipo: "grau", indice: 7, alfa: 1 }],
      },
      {
        token: '[data-theme="dark"] :focus-visible/outline-color',
        tipo: "componente",
        fonte: { tipo: "grau", indice: 4, alfa: 1 },
        contra: null,
      },
    ],
    semanticas: [
      { nome: "success", hex: "#d8ff3e" },
      { nome: "warning", hex: "#d09455" },
      { nome: "error", hex: "#c87263" },
      { nome: "info", hex: "#60a5fa" },
    ],
    neutros: [
      "#f5f3ed",
      "#e7e3da",
      "#c9c5bc",
      "#9d9991",
      "#77746e",
      "#5d5b58",
      "#4b4b4f",
      "#313135",
      "#1d1d20",
      "#111113",
      "#0a0a0b",
    ],
    indices: { accent: 4, hover: 3, soft: null },
    alfaDoSoft: 0.18,
  },
} as const;
