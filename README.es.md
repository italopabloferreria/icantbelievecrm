# I Can't Believe CRM

CRM autohospedado de **!AI (I Can't Believe It's AI)** para atención, ventas y automatización con agentes de IA.

![I Can't Believe CRM](docs/brand/ai-logo-dark.svg)

![Identidad visual de !AI](public/brand/ai-hero.jpg)

## Qué es

I Can't Believe CRM es el producto CRM propio de !AI. Conserva la base open source: CRM multi-tenant, WhatsApp como canal principal, agentes de IA, Supabase, privacidad, auditoría e instalación autohospedada.

## Tecnologías

- Next.js 16, React 19 y TypeScript
- Supabase Postgres, Auth, Storage y Realtime
- Tailwind CSS 4 y sistema de diseño white-label
- WAHA para WhatsApp
- Vercel AI SDK y proveedores de IA configurables
- Docker para instalación autohospedada

## Instalación local

```bash
git clone https://github.com/italopabloferreria/icantbelievecrm.git
cd icantbelievecrm
pnpm install
pnpm dev
```

## Docker

Usa los archivos `docker-compose*.yml` como base para entornos locales y de producción. Antes de publicar imágenes, configura GitHub Container Registry para `italopabloferreria/icantbelievecrm`.

## Arquitectura

- `app/`: interfaz, rutas públicas, área autenticada y APIs Next.js
- `components/`: componentes compartidos
- `lib/`: dominio, autenticación, branding, integraciones y agentes
- `workers/`: workers y rutinas de cola
- `supabase/`: esquema, migraciones y baseline
- `docs/`: documentación técnica y operativa

## Identidad visual

El producto usa la paleta oficial de !AI: Carbon `#0A0A0B`, Bone `#F5F3ED`, Acid Lime `#D8FF3E` y Cobalt `#3F5BFF`. La guía y los recursos vectoriales están en [`docs/brand`](docs/brand/README.md).

## Roadmap

- Publicar imágenes Docker propias
- Completar el rebranding !AI de la documentación operativa de VPS
- Añadir funciones específicas de !AI sin romper la compatibilidad con la base open source

## Capturas de pantalla

La referencia visual oficial está en [`public/brand/ai-brand-board.jpg`](public/brand/ai-brand-board.jpg). Las capturas del producto se actualizarán a medida que se validen las pantallas.

## Contribución

Usa ramas pequeñas, conserva las reglas de negocio existentes y ejecuta lint, comprobación de tipos, pruebas y build de producción antes de enviar cambios.

## Based on the amazing work from DeskcommCRM.

Este proyecto se basa en el trabajo original de [DeskcommCRM](https://github.com/melgarafael/DeskcommCRM), distribuido bajo la licencia MIT. El aviso de copyright y la licencia original se conservan en `LICENSE`.

## Licencia

MIT.
