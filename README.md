# CV Interactivo — Manuela Echeverry Pineda

Este proyecto es una hoja de vida (CV) profesional diseñada como una aplicación web moderna, minimalista y responsiva. Utiliza una arquitectura modular basada en componentes y separación de responsabilidades.

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica mínima para inyección dinámica.
* **CSS3 (Post-moderno):** Uso intensivo de Variables CSS (Tokens), Grid Layout, Flexbox y animaciones `keyframes`.
* **JavaScript (ES6+):** Arquitectura modular (Módulos de ES) para la renderización dinámica del DOM.

## ✨ Funcionalidades

* **Visor de diplomas y certificados:** al hacer clic sobre un título de Formación o Certificación con PDF asociado, se abre el diploma (embebido en Base64 en `js/assets/`) en una pestaña nueva.
* **Exportación a PDF en una sola hoja:** `css/components/print.css` optimiza el diseño para impresión/`Ctrl+P`, ajustando tamaños y evitando saltos de página en tarjetas y entradas de experiencia, todo en tamaño Letter.
* **Permisos de Conducir y movilidad:** tarjeta con las licencias de conducir (A2, B) y una nota de disponibilidad de vehículo propio, sin depender del transporte público.

## 📂 Estructura del Proyecto

```text
├── css/
│   ├── tokens.css       # Variables del sistema de diseño (colores, fuentes, espacios).
│   ├── base.css         # Reset de estilos y estilos globales.
│   ├── layout.css       # Estructura de la cuadrícula principal.
│   ├── main.css         # Punto de entrada CSS (importa todos los demás).
│   └── components/      # Estilos específicos por sección (header, sidebar, etc.).
├── js/
│   ├── main.js          # Punto de entrada JS (orquestador).
│   ├── data.js          # Base de datos del CV (Edita aquí para actualizar info).
│   ├── renderer.js      # Lógica de construcción de elementos HTML.
│   ├── icons.js         # Diccionario de iconos SVG.
│   └── assets/
│       ├── photo.js                 # Fotografía de perfil en formato Base64.
│       ├── cert-ia.js                # Certificado (IA) en formato Base64.
│       ├── cert-community-manager.js # Certificado (Community Manager) en formato Base64.
│       ├── cert-manipulador.js       # Certificado de manipulación de alimentos en formato Base64.
│       ├── diploma-colegio.js        # Diploma de bachillerato en formato Base64.
│       └── diploma-manipulador.js    # Diploma de manipulación de alimentos en formato Base64.
└── index.html           # Esqueleto de la página.