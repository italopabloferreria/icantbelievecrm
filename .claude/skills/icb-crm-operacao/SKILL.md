---
name: icb-crm-operacao
description: 'Especialista operacional no I Can''t Believe CRM: consulta o código e a documentação atuais, as skills embutidas e tutoriais estruturados para explicar como configurar, operar, instalar, integrar, diagnosticar e adaptar o CRM. Use quando alguém perguntar como usar o CRM, onde fica uma configuração, como conectar WhatsApp/Supabase/IA, como preparar um cliente, como resolver um erro ou como um procedimento do tutorial se compara ao estado atual do produto.'
metadata:
  publico: operador, implantador, desenvolvedor
  produto: I Can't Believe CRM
---

# I Can't Believe CRM — operação e conhecimento reutilizável

Esta skill é a camada de conhecimento operacional do produto. Ela não congela uma cópia do projeto:
sempre consulta primeiro o estado atual do repositório e usa tutoriais como explicação complementar.

## Precedência das fontes

Quando duas fontes discordarem:

1. código atual da branch em uso;
2. documentação atual deste repositório;
3. skill específica embutida do projeto;
4. tutorial do criador, com data/timestamp;
5. notas internas do produto.

Explique a divergência quando ela mudar o procedimento.

## Antes de responder

1. Identifique a área: instalação, operação, cliente novo, IA, WhatsApp, banco, integrações,
   atualização, troubleshooting ou desenvolvimento.
2. Leia `references/INDEX.md`.
3. Consulte apenas as fontes necessárias.
4. Para fatos que podem mudar, confirme no código/documentação atuais.
5. Nunca invente valor de variável, endpoint, credencial, caminho de tela ou estado de feature.
6. Nunca revele segredos, tokens, senhas ou chaves encontrados no ambiente.

## Reaproveite as skills herdadas da base

- Instalação, VPS, domínio, Supabase, WhatsApp e recuperação:
  `.agents/skills/deskcomm-instalar/SKILL.md`.
- Configuração de cliente/nicho, agentes, roteadores, follow-ups e conhecimento:
  `.agents/skills/deskcomm-cliente-novo/SKILL.md`.
- Convenções e alterações de código:
  `.agents/skills/deskcomm-doutrina/SKILL.md`.
- Prompt/agente, métricas, extensão e contribuição: use a skill embutida correspondente.

Esta skill coordena essas fontes e acrescenta o conhecimento específico da !AI.

## Perguntas de uso

Quando a pergunta for "onde configuro X?", dê:
1. caminho na interface;
2. pré-requisitos;
3. passos;
4. arquivos/serviços envolvidos quando isso ajudar;
5. timestamp do tutorial, se registrado.

Quando a pergunta for "por que não funciona?":
1. identifique o sintoma;
2. confira código/docs atuais;
3. consulte troubleshooting existente;
4. compare com o tutorial;
5. informe causa provável, evidência observável e correção;
6. registre a solução se for recorrente.

## Tutorial

O índice estruturado fica em `references/video-tutorial.md`.

Ao incorporar um vídeo:
- registre URL, autor, data e duração;
- divida por assunto;
- preserve timestamps;
- transforme demonstrações em passos reproduzíveis;
- valide telas, campos e integrações contra o estado atual;
- marque divergências;
- prefira resumo operacional à transcrição integral.

## Conhecimento específico da !AI

Use `references/icb-notes.md` somente para decisões próprias do produto: branding, integrações,
mudanças deliberadas e comportamentos que divergem da base original.

## Aprendizado contínuo

Quando uma configuração, erro ou procedimento for confirmado e tiver valor futuro, registre:
- pergunta/sintoma;
- regra ou causa;
- procedimento;
- telas/arquivos envolvidos;
- versão/commit quando relevante;
- fonte da evidência.
