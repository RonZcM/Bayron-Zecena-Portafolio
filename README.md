# Portafolio - Bayron Zeceña 🚀

Un portafolio web moderno, dinámico y responsivo construido para mostrar proyectos de desarrollo de software, logros académicos y certificaciones profesionales. Diseñado con una interfaz premium utilizando el estilo "glassmorphism", transiciones suaves e interactividad.

## 🌟 Características Principales

- **Diseño Moderno:** Interfaz estilizada con efectos cristal (glassmorphism), paleta de colores oscuros (dark theme) y soporte nativo para Modo Claro/Oscuro.
- **Visualización de Proyectos Dinámica:** Los proyectos se muestran mediante tarjetas filtrables por tecnología (React, Java, Laravel, Python, Tailwind, etc.).
- **Carrusel y Modal con Zoom:** Visualiza capturas detalladas de los proyectos gracias a la integración de Swiper.js, con soporte de *autoplay* y *zoom* interactivo.
- **Certificaciones Integradas:** Los diplomas y certificaciones se cargan nativamente en *iframes* dentro del mismo sitio, permitiendo visualizarlos sin salir de la página.
- **Generación de Datos Automatizada:** Mediante el uso de un script de Node.js (`generateData.cjs`), la información de los proyectos se lee de archivos JSON y se convierte a un formato consumible, optimizando la gestión del contenido.

## 🛠️ Tecnologías y Herramientas

El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- **Frontend:** React.js, Vite
- **Estilos:** Vanilla CSS (App.css)
- **Componentes Extra:** Swiper.js (para los carruseles de imágenes)
- **Automatización:** Node.js (Script de generación de datos local)

## ⚙️ Instalación y Uso Local

Sigue estos pasos para clonar y correr el portafolio en tu entorno de desarrollo local.

### Prerrequisitos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/RonZcM/Portafolio-Bayron.git
   cd Portafolio-Bayron
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Generar los datos de los proyectos:**
   El portafolio necesita cargar los metadatos de los proyectos para funcionar. Ejecuta:
   ```bash
   node generateData.cjs
   ```
   *(Esto leerá la carpeta `/public/projects` y generará `/src/projectsData.js`)*

4. **Correr el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible típicamente en `http://localhost:5173/`.

## 📦 Construcción para Producción

Para generar una versión estática optimizada para producción (lista para subir a Netlify, Vercel o GitHub Pages), ejecuta:

```bash
npm run build
```

Este comando creará una carpeta `/dist` con todos los archivos minificados y optimizados, incluyendo los PDFs de certificaciones y los assets gráficos.

## 📂 ¿Cómo agregar nuevos proyectos?

1. Crea una nueva carpeta dentro de `public/projects/` (ej. `mi-nuevo-proyecto`).
2. Agrega dentro tus imágenes (ej. `1.png`, `2.png`).
3. Crea un archivo `info.json` en esa carpeta siguiendo la estructura actual.
4. Corre `node generateData.cjs` en la terminal para que se reconozca automáticamente.

---
**Bayron Zeceña** - Desarrollador de Software Full-Stack
[GitHub](https://github.com/RonZcM) | [LinkedIn](https://www.linkedin.com/in/ronaldo-zece%C3%B1a-57514a391/)
