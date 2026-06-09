const fs = require('fs');
const path = require('path');

const baseData = [
  {
    id: 1,
    title: "Babel ITCA",
    context: "Proyecto académico enfocado en el diseño e implementación de un sistema web para la administración y gestión de proyectos de la biblioteca en ITCA.",
    focus: "Desarrollo de la lógica de negocio y estructuración del sistema.",
    description: "Un sistema web robusto diseñado para transformar la administración y gestión de proyectos dentro de la biblioteca institucional de ITCA. Permite la catalogación detallada, el seguimiento de estado de los recursos y la gestión de préstamos de recursos bibliográficos. Desarrollado con SpringBoot, asegura alta disponibilidad y un backend escalable para toda la comunidad estudiantil.",
    links: [
      { "title": "Ver en GitHub", "url": "https://github.com/RonZcM/Babel-ITCA" },
      { "title": "Ver Presentación", "url": "/projects/documentacion/BABEL-ITCA-presentacion.pptx" },
      { "title": "Ver Documentación", "url": "/projects/documentacion/DocumentoBABEL-ITCA.docx" }
    ],
    categories: ["SpringBoot", "Java", "Backend", "Bootstrap"],
    logo: "/projects/logos/BABEL_LOGO2.png",
    folder: "babel-itca"
  },
  {
    id: 2,
    title: "GIV-PESADOS",
    context: "Sistema de Gestión de Inventario y Venta diseñado específicamente para una tienda de repuestos de vehículos pesados.",
    focus: "Desarrollo de arquitectura de escritorio, resolución de problemas de rendimiento y migración a la nube.",
    description: "Solución de escritorio robusta orientada a la gestión eficiente de inventarios y procesos de venta en el sector de repuestos para vehículos pesados. El sistema permite controlar el stock con precisión, automatizar el flujo de caja diario y administrar el catálogo de refacciones de alto tonelaje. Desarrollado con una arquitectura sólida y conectado a servicios en la nube de Google Cloud, garantiza la disponibilidad segura de la información y agiliza las ventas del negocio.",
    links: [
      { "title": "Ver en GitHub", "url": "https://github.com/RonZcM/GIV-PESADOS" }
    ],
    categories: ["Java", "MySQL", "Desktop", "Google Cloud"],
    logo: "/projects/logos/GIV-PESADOS.png",
    folder: "giv-pesados"
  },
  {
    id: 3,
    title: "Plataforma Institucional ITCA FEPADE",
    context: "Plataforma de gestión operativa desplegada directamente en la red local de la institución. Centraliza permisos estudiantiles y un sistema de inventario inteligente.",
    focus: "Desarrollo full-stack estructurado bajo arquitectura MVC e integración de servicios de IA.",
    description: "Una plataforma web avanzada implementada en la intranet de ITCA FEPADE, sede Santa Ana, desarrollada bajo el esquema MVC con PHP y MySQL. Centraliza de manera eficiente la gestión de permisos estudiantiles y automatiza el inventario mediante herramientas inteligentes. Destaca por mejorar la seguridad, aumentar la trazabilidad de equipos costosos y elevar drásticamente la eficiencia operativa de los procesos administrativos diarios en el campus.",
    links: [],
    categories: ["PHP", "MySQL", "Full-Stack", "Tailwind"],
    logo: "/projects/logos/LogoITCA_Web.png",
    folder: "plataforma-inteligente"
  },
  {
    id: 4,
    title: "Meditech!",
    context: "Proyecto académico web enfocado en la gestión integral y administración de clínicas médicas.",
    focus: "Desarrollo de backend robusto y estructuración de base de datos relacional.",
    description: "Un completo sistema integral web enfocado en la gestión médica, diseñado estratégicamente para optimizar los procesos cotidianos en clínicas y hospitales. Este desarrollo en Laravel incluye un módulo avanzado de historias clínicas electrónicas, agendamiento dinámico de citas, gestión de recetas médicas y un panel de administración unificado para gerentes y médicos.",
    links: [
      { "title": "Ver en GitHub", "url": "https://github.com/BranhamAlabi/ProyectoHospital" },
      { "title": "Criterios de Aceptación", "url": "/projects/documentacion/Criterios%20de%20Aceptaci%C3%B3n%20para%20MediTech.docx" }
    ],
    categories: ["Laravel", "PHP", "MySQL", "Backend", "Bootstrap"],
    logo: "/projects/logos/meditech_logo.png",
    folder: "meditech"
  },
  {
    id: 5,
    title: "JurassicSwim",
    context: "Proyecto de escritorio creado para la administración operativa de un parque acuático (entradas y combos).",
    focus: "Desarrollo de interfaz de escritorio e integración fluida con la base de datos.",
    description: "Solución de escritorio especializada para la gestión operativa y comercial de un parque acuático. El software facilita la venta rápida de entradas, la creación de combos de servicios y la gestión de flujo de caja diario. Destaca por una interfaz intuitiva pensada para agilizar el proceso de atención al cliente en taquilla y una integración estable con bases de datos relacionales para la generación de reportes operativos.",
    links: [
      { "title": "Ver en GitHub", "url": "https://github.com/RonZcM/JurassicSwim" },
      { "title": "Documento Proyecto", "url": "/projects/documentacion/Proyecto-Jurassic.docx" }
    ],
    categories: ["C#", "MySQL", "Desktop"],
    logo: "/projects/logos/JurassicSwim.png",
    folder: "jurassicswim"
  },
  {
    id: 6,
    title: "Hirelance",
    context: "Bolsa de trabajo moderna multiplataforma para conectar a estudiantes con contratistas.",
    focus: "Desarrollo de arquitectura dual: entorno web para gestión y app móvil nativa.",
    description: "Una bolsa de trabajo innovadora y verdaderamente multiplataforma orientada a conectar el talento estudiantil con empleadores y contratistas de forma directa. Cuenta con una arquitectura dual robusta que incluye una aplicación web completa para la administración empresarial y una aplicación móvil nativa (Android) para que los estudiantes descubran y apliquen a ofertas laborales en tiempo real.",
    links: [
      { "title": "GitHub (Web)", "url": "https://github.com/Dontvegaa/Hirelance_Web" },
      { "title": "GitHub (App)", "url": "https://github.com/Dontvegaa/Hirelance_App" },
      { "title": "Documento Web", "url": "/projects/documentacion/Sistema%20HireLanceWeb.docx" },
      { "title": "Manual App", "url": "/projects/documentacion/Manual%20de%20Usuario%20HireLanceApp.docx" }
    ],
    categories: ["SpringBoot", "Android", "Java", "Mobile"],
    logo: "/projects/logos/hirelance_logo.png",
    folder: "hirelance"
  },
  {
    id: 7,
    title: "CASTOR",
    context: "Plataforma inclusiva de bolsa de trabajo (1er lugar en Feria de Emprendimiento ITCA FEPADE 2024).",
    focus: "Prototipado visual (mockups) y diseño de interfaz front-end centrado en la experiencia de usuario.",
    description: "Un proyecto galardonado con el primer lugar en la Feria de Emprendimiento ITCA FEPADE 2024. CASTOR es una plataforma inclusiva de búsqueda de empleo que se enfoca en derribar barreras laborales. Destaca por poseer una interfaz de usuario completamente accesible y moderna, producto de un extenso proceso de investigación, análisis y diseño centrado en la experiencia del usuario (UX) usando Figma y tecnologías frontend modernas.",
    links: [
      { "title": "Ver en GitHub", "url": "https://github.com/RonZcM/Castor" },
      { "title": "Plan Financiero", "url": "/projects/documentacion/Castor-PlanFinanciero.docx" }
    ],
    categories: ["HTML/CSS", "JavaScript", "Frontend"],
    logo: "/projects/logos/castor_logo.png",
    folder: "castor"
  },
  {
    id: 8,
    title: "Portafolio - Cueva del Texto",
    context: "Proyecto académico web enfocado en la estructuración, presentación y consulta interactiva de actividades del curso de Técnicas de Redacción.",
    focus: "Desarrollo de interfaz de usuario (frontend) premium, interactividad nativa y diseño responsivo adaptativo.",
    description: "Un moderno e interactivo portafolio digital web enfocado en la recopilación y presentación estructurada de contenidos académicos de redacción y gramática, diseñado estratégicamente con una interfaz fluida bajo la tendencia de glassmorphism. Este desarrollo en Vanilla HTML, CSS y JavaScript incluye un sistema de navegación inteligente con navbar pegajoso, cambio dinámico de temas (modo oscuro y claro), visualización integrada de documentos y recursos multimedia, y un módulo interactivo personalizado con controles de zoom ajustable y arrastre para imágenes de alta resolución.",
    links: [
      { "title": "Ver Repo GitHub", "url": "https://github.com/RonZcM/Portafolio-TR-E-UNICAES" },
      { "title": "Visitar Sitio Web", "url": "https://ronzcm.github.io/Portafolio-TR-E-UNICAES/" }
    ],
    categories: ["HTML/CSS", "JavaScript", "Frontend"],
    logo: "/projects/logos/cueva-logo.png",
    folder: "cueva-del-texto"
  }
];

const projectsDir = path.join(__dirname, 'public', 'projects');

baseData.forEach(p => {
  const dirPath = path.join(projectsDir, p.folder);
  let files = [];
  if (fs.existsSync(dirPath)) {
    files = fs.readdirSync(dirPath).filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
    });
    // Sort files naturally
    files.sort((a, b) => {
      const numA = parseInt(a, 10);
      const numB = parseInt(b, 10);
      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }
      return a.localeCompare(b, undefined, {numeric: true});
    });
  }
  p.images = files.map(f => `/projects/${p.folder}/${f}`);
  delete p.folder;
});

const content = `export const projects = ${JSON.stringify(baseData, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, 'src', 'projectsData.js'), content);

console.log('projectsData.js generated successfully');
