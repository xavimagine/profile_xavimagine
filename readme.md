# Portfolio — Xavi (xavimagine)

Portfolio personal desarrollado con **[Astro](https://astro.build)**. Este proyecto fue también mi primer contacto con el framework: no tenía experiencia previa con Astro y lo usé como punto de partida para aprenderlo en un caso real, aplicando lo que ya sé de desarrollo full-stack (Java, .NET, Python, Node.js, Angular, React, TypeScript...) a un ecosistema nuevo basado en islas de componentes y generación estática.

## 🧱 Stack y tecnologías

- **Astro** `^6.4.7` — framework principal, generación de páginas estáticas y componentes `.astro`
- **TypeScript** — tipado de los datos del proyecto (`src/data`)
- **@fontsource/inter** — tipografía Inter autoalojada
- **@emailjs/browser** — envío del formulario de contacto sin backend propio
- **sharp** — optimización de imágenes en build
- **pnpm** — gestor de paquetes (workspace)
- **Vercel** — despliegue, con cabeceras de seguridad (CSP) configuradas en `vercel.json`

## 📁 Estructura del proyecto

```text
portfolio/
├── public/                  # Assets estáticos (favicon, etc.)
├── src/
│   ├── assets/               # Imágenes propias (foto de perfil, recursos)
│   ├── components/           # Componentes .astro de cada sección
│   │   ├── Cabecera.astro
│   │   ├── Intro.astro
│   │   ├── Aboutme.astro
│   │   ├── skills.astro
│   │   ├── projectops.astro
│   │   ├── CardProyect.astro
│   │   ├── Form&Exp.astro
│   │   ├── Contact.astro
│   │   ├── Email.astro
│   │   ├── box.astro
│   │   └── footer.astro
│   ├── data/                  # Contenido en TypeScript (perfiles, experiencia, proyectos, skills)
│   ├── layouts/
│   │   └── Layout.astro       # Layout base de la web
│   └── pages/
│       ├── index.astro        # Página principal (compone todas las secciones)
│       └── proyectos/         # Listado de proyectos y ficha individual ([slug].astro)
├── astro.config.mjs
├── vercel.json
└── package.json
```

La página principal (`index.astro`) monta la web como una composición de secciones independientes: cabecera, introducción, sobre mí, skills, proyectos, formación/experiencia, contacto y footer. El contenido de cada sección vive separado en `src/data`, lo que permite editar textos, experiencia o proyectos sin tocar la maquetación.

La sección de proyectos tiene su propia ruta dinámica (`proyectos/[slug].astro`) para generar una página de detalle por cada proyecto listado en `src/data/proyects.ts`.

## 🧞 Comandos

| Comando          | Acción                                             |
| :---------------- | :-------------------------------------------------- |
| `pnpm install`     | Instala las dependencias                            |
| `pnpm dev`         | Levanta el servidor local en `localhost:4321`       |
| `pnpm build`       | Genera el build de producción en `./dist/`          |
| `pnpm preview`     | Previsualiza el build antes de desplegar             |
| `pnpm astro ...`   | Ejecuta comandos de la CLI de Astro                  |

## 🎨 Bocetos del diseño (Figma)

_Antes de programar el portfolio, diseñé la interfaz en Figma para definir la estructura visual, la paleta de colores y la disposición de cada sección (cabecera, sobre mí, skills, proyectos y contacto) antes de traducirla a componentes de Astro._

<img width="2585" height="6038" alt="Image" src="https://github.com/user-attachments/assets/948cbea4-b563-45a9-939b-d8d37dbb1ca6" />

<!--
Ejemplo de cómo añadir las imágenes una vez las tengas:

![Boceto - Página principal](./ruta/a/tu/imagen.png)
![Boceto - Sección de proyectos](./ruta/a/tu/imagen2.png)

O un enlace directo al archivo de Figma:
🔗 [Ver diseño completo en Figma](https://www.figma.com/...)
-->

## 🚀 Despliegue

El proyecto está preparado para desplegarse en **Vercel**, incluyendo cabeceras de seguridad (Content-Security-Policy) que restringen los orígenes permitidos para scripts, estilos, fuentes y conexiones (EmailJS, Google Analytics/Google Tag Manager).
