# CV Interactivo — Manuela Echeverry Pineda

Hoja de vida profesional como aplicación web moderna, responsiva y optimizada para impresión A4.

## 🚀 Tecnologías

* **HTML5** — Estructura semántica mínima, contenido inyectado dinámicamente
* **CSS3** — Variables CSS (Design Tokens), Grid, Flexbox, animaciones
* **JavaScript ES6+** — Módulos ES, DOM building, sin dependencias externas

## 📂 Estructura

```
├── index.html                  # Esqueleto HTML (sin datos ni estilos inline)
├── css/
│   ├── main.css                # Punto de entrada CSS (importa todo lo demás)
│   ├── tokens.css              # 🎨 Variables de diseño — edita aquí los colores/fuentes
│   ├── base.css                # Reset + estilos globales
│   ├── layout.css              # Grid principal y breakpoints responsivos
│   └── components/
│       ├── header.css          # Foto, nombre, contacto, WhatsApp
│       ├── experience.css      # Timeline de experiencia
│       ├── sidebar.css         # Habilidades, idiomas, educación
│       ├── quote.css           # Banda de resumen
│       └── print.css           # 🖨️ TODOS los estilos de impresión (A4)
└── js/
    ├── main.js                 # Orquestador — conecta datos → DOM
    ├── data.js                 # 📋 Datos del CV — edita aquí para actualizar
    ├── renderer.js             # Construcción de nodos DOM
    ├── icons.js                # Registro de iconos SVG
    └── assets/
        └── photo.js            # Foto de perfil en Base64

```

## ✏️ Cómo actualizar el CV

1. **Cambiar datos personales / experiencia** → edita `js/data.js`
2. **Cambiar colores o fuentes** → edita `css/tokens.css`
3. **Cambiar estilos de impresión** → edita `css/components/print.css`
4. **Añadir un nuevo icono** → añade una entrada en `js/icons.js`
5. **Añadir una sección nueva** → crea `css/components/nueva-seccion.css`, importa en `main.css`, añade renderer en `renderer.js`

## 🖨️ Imprimir / Guardar como PDF

1. Abre el CV en Chrome o Edge
2. `Ctrl + P` (Windows) o `Cmd + P` (Mac)
3. Destino → **Guardar como PDF**
4. Papel → **A4**, Orientación → **Vertical**
5. Márgenes → **Predeterminado** (el CSS ya define 14mm con `@page`)
6. ✅ Activa **Gráficos de fondo** para que aparezcan los colores

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio (ej. `manuela-cv`)
2. Sube todos los archivos manteniendo la estructura de carpetas
3. Ve a *Settings → Pages → Deploy from branch → main → / (root)*
4. URL pública: `https://tu-usuario.github.io/manuela-cv`