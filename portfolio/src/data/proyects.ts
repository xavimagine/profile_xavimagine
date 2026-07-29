export interface Project {
    slug: string;
    titulo: string;
    descripcion: string;
    imagen: string[];
    tecnologia: string[];
    tops: boolean;
    repoUrl?: string;
    demoUrl?: string;
    necesidad?: string;
    funcion?: string;
    why?: string;
}
export const projects: Project[] = [
    {
        slug: "Stackone",
        titulo: "StackOne",
        descripcion:
            "StackOne es una plataforma web full-stack orientada a jugadores que necesitan organizar, filtrar y descubrir videojuegos en un mercado saturado. Nace como Trabajo de Fin de Grado del ciclo de Desarrollo de Aplicaciones Web (DAW) y fue calificado con un 10, validando tanto la solidez técnica de la implementación como la justificación de negocio detrás del producto.",
        imagen: [
            "/assets/Stackone/stackOne.jpg",
            "/assets/Stackone/StackOnedivice.png",
        ],
        tecnologia: [
            "Html",
            "Css",
            "Tailwind",
            "JavaScript",
            "Node.js",
            "Express.js",
            "Postgresql",
            "Json web token",
            "Github Actions",
            "Supabase",
            "Vercel",
            "Render",
        ],
        tops: true,
        repoUrl: "https://github.com/xavimagine/StackOne-Tfg",
        demoUrl: "https://stackone.vercel.app/",
        necesidad: `El punto de partida fue un análisis del mercado del gaming en 2025: un sector que mueve 197.000 millones de dólares y roza los 3.600 millones de jugadores en el mundo, superando ampliamente a industrias como el cine, la música o los libros. Ese volumen se traduce en una cantidad masiva de lanzamientos constantes, especialmente en PC/Steam, lo que genera dos problemas concretos para el usuario final:
            Sobrecarga de catálogo: encontrar qué jugar o qué merece la pena entre cientos de lanzamientos se ha vuelto una tarea en sí misma. Plataformas de tracking como HowLongToBeat o Backloggd registran picos de tráfico enormes en rebajas de Steam o grandes lanzamientos (como Nintendo Switch 2), lo que confirma que existe una demanda real de herramientas de organización y filtrado.
            El problema del "Gameslop": en 2025, en torno al 20% de los juegos nuevos publicados en Steam reconocieron usar IA en su desarrollo. Esto ha disparado la entrada de juegos de baja calidad al mercado, inundando las tiendas y aumentando aún más la necesidad de herramientas que actúen como un filtro de calidad basado en las opiniones reales de la comunidad, no solo en el marketing del propio juego.
            Como consumidor habitual de este tipo de plataformas, identifiqué ahí una oportunidad clara: desarrollar una solución propia, con margen además para explorar un modelo de monetización mediante servicios premium.
            `,
        funcion: `¿Qué cubre StackOne?
StackOne responde a esa doble necesidad —organización y filtrado de calidad— ofreciendo a los usuarios:
Descubrimiento de juegos valorados por la comunidad, en lugar de depender únicamente del hype de marketing.
Listas personalizadas para organizar backlogs, favoritos y juegos pendientes.
Autenticación segura de usuarios para persistir listas y preferencias entre sesiones.
Filtrado avanzado y paginación para navegar el catálogo sin fricción, incluso con grandes volúmenes de datos.
En conjunto, la plataforma actúa como un "filtro de calidad" que ayuda al usuario a evitar el ruido del Gameslop y centrarse en lo que de verdad merece su tiempo.`,
        why: `Por qué elegí este proyecto para mi TFG

Quería un TFG que no fuera un ejercicio académico aislado, sino un producto con una justificación de negocio real detrás, respaldada por datos de mercado y por un problema que yo mismo experimento como usuario de este tipo de plataformas. Eso me permitió trabajar el proyecto de principio a fin: desde el análisis de mercado y la definición del problema, hasta la arquitectura técnica, el despliegue en producción y la documentación académica (diagramas UML, arquitectura, planificación con Gantt, plan de pruebas). Ese enfoque integral —de la idea de negocio al código en producción— es lo que el tribunal valoró con la máxima nota.`,
    },

    {
        slug: "JUEGO2",
        titulo: "JUEGO2",
        descripcion:
            "StackOne es una plataforma web full-stack orientada a jugadores que necesitan organizar, filtrar y descubrir videojuegos en un mercado saturado. Nace como Trabajo de Fin de Grado del ciclo de Desarrollo de Aplicaciones Web (DAW) y fue calificado con un 10, validando tanto la solidez técnica de la implementación como la justificación de negocio detrás del producto.",
        imagen: [
            "/assets/Stackone/stackOne.jpg",
            "/assets/Stackone/StackOnedivice.png",
        ],
        tecnologia: [
            "Html",
            "Css",
            "Tailwind",
            "JavaScript",
            "Node.js",
            "Express.js",
            "Postgresql",
            "Json web token",
            "Github Actions",
            "Supabase",
            "Vercel",
            "Render",
        ],
        tops: false,
        repoUrl: "https://github.com/xavimagine/StackOne-Tfg",
        demoUrl: "https://stackone.vercel.app/",
        necesidad: `El punto de partida fue un análisis del mercado del gaming en 2025: un sector que mueve 197.000 millones de dólares y roza los 3.600 millones de jugadores en el mundo, superando ampliamente a industrias como el cine, la música o los libros. Ese volumen se traduce en una cantidad masiva de lanzamientos constantes, especialmente en PC/Steam, lo que genera dos problemas concretos para el usuario final:
            Sobrecarga de catálogo: encontrar qué jugar o qué merece la pena entre cientos de lanzamientos se ha vuelto una tarea en sí misma. Plataformas de tracking como HowLongToBeat o Backloggd registran picos de tráfico enormes en rebajas de Steam o grandes lanzamientos (como Nintendo Switch 2), lo que confirma que existe una demanda real de herramientas de organización y filtrado.
            El problema del "Gameslop": en 2025, en torno al 20% de los juegos nuevos publicados en Steam reconocieron usar IA en su desarrollo. Esto ha disparado la entrada de juegos de baja calidad al mercado, inundando las tiendas y aumentando aún más la necesidad de herramientas que actúen como un filtro de calidad basado en las opiniones reales de la comunidad, no solo en el marketing del propio juego.
            Como consumidor habitual de este tipo de plataformas, identifiqué ahí una oportunidad clara: desarrollar una solución propia, con margen además para explorar un modelo de monetización mediante servicios premium.
            `,
        funcion: `¿Qué cubre StackOne?
StackOne responde a esa doble necesidad —organización y filtrado de calidad— ofreciendo a los usuarios:
Descubrimiento de juegos valorados por la comunidad, en lugar de depender únicamente del hype de marketing.
Listas personalizadas para organizar backlogs, favoritos y juegos pendientes.
Autenticación segura de usuarios para persistir listas y preferencias entre sesiones.
Filtrado avanzado y paginación para navegar el catálogo sin fricción, incluso con grandes volúmenes de datos.
En conjunto, la plataforma actúa como un "filtro de calidad" que ayuda al usuario a evitar el ruido del Gameslop y centrarse en lo que de verdad merece su tiempo.`,
        why: `Por qué elegí este proyecto para mi TFG

Quería un TFG que no fuera un ejercicio académico aislado, sino un producto con una justificación de negocio real detrás, respaldada por datos de mercado y por un problema que yo mismo experimento como usuario de este tipo de plataformas. Eso me permitió trabajar el proyecto de principio a fin: desde el análisis de mercado y la definición del problema, hasta la arquitectura técnica, el despliegue en producción y la documentación académica (diagramas UML, arquitectura, planificación con Gantt, plan de pruebas). Ese enfoque integral —de la idea de negocio al código en producción— es lo que el tribunal valoró con la máxima nota.`,
    },
];
