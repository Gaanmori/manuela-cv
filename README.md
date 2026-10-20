# CV Interactivo — Manuela Echeverry Pineda

Este proyecto es una hoja de vida (CV) profesional diseñada como una aplicación web moderna, minimalista y responsiva. Utiliza una arquitectura modular basada en componentes y separación de responsabilidades.

## 🚀 Tecnologías Utilizadas

* **HTML5:** Estructura semántica mínima para inyección dinámica.
* **CSS3 (Post-moderno):** Uso intensivo de Variables CSS (Tokens), Grid Layout, Flexbox y animaciones `keyframes`.
* **JavaScript (ES6+):** Arquitectura modular (Módulos de ES) para la renderización dinámica del DOM.

## 🔗 Versiones de la hoja de vida

Una sola base de datos, cinco versiones. Cada una está pensada para imprimirse en una hoja Letter (Ctrl+P).

| Versión | Enfoque | Enlace |
|---|---|---|
| Hostelería (por defecto) | Sala, caja y atención al cliente | https://gaanmori.github.io/manuela-cv/?v=hosteleria |
| Retail / Cajera | Caja, TPV y supermercado | https://gaanmori.github.io/manuela-cv/?v=retail |
| Administrativa | Cobros, facturación y gestión documental | https://gaanmori.github.io/manuela-cv/?v=administrativa |
| Atención al cliente | Ventas, telemarketing y comunicación | https://gaanmori.github.io/manuela-cv/?v=atencion-cliente |
| Completa (base) | Todo lo estudiado y trabajado (ocupa 2 hojas) | https://gaanmori.github.io/manuela-cv/?v=completa |

Sin `?v=` (o con un valor desconocido) se muestra la versión de Hostelería. La página no muestra ningún selector de versiones: quien reciba un enlace solo ve esa versión.

### Cómo se mantienen
* **`js/data.js`** es la base maestra: cada trabajo, curso, estudio o habilidad se escribe **una sola vez** y tiene un `id`.
* **`js/versions.js`** dice qué `id`s muestra cada versión, en qué orden, y su titular y resumen. Una entrada puede sobrescribir campos solo para esa versión, por ejemplo `{ id: 'movistar-ops', desc: '...' }`.
* **`js/resolver.js`** combina ambos. Un `id` mal escrito se avisa en la consola del navegador y no rompe la página.
* Un curso nuevo: añadirlo en `data.js` y poner su `id` en las versiones donde deba salir. Una versión nueva: añadir una entrada en `versions.js`.

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
│   ├── data.js          # Base maestra del CV (todo lo estudiado y trabajado, con ids).
│   ├── versions.js      # Qué muestra cada versión (ids, orden, titular, resumen).
│   ├── resolver.js      # Combina data.js + versions.js según ?v=.
│   ├── renderer.js      # Lógica de construcción de elementos HTML.
│   ├── icons.js         # Diccionario de iconos SVG.
│   └── assets/
│       ├── photo.js                 # Fotografía de perfil en formato Base64.
│       ├── cert-ia.js                # Certificado (IA) en formato Base64.
│       ├── cert-community-manager.js # Certificado (Community Manager) en formato Base64.
│       ├── cert-manipulador.js       # Certificado de manipulación de alimentos en formato Base64.
│       ├── cert-cajero-supermercado.js        # Certificado Cajero/a de Supermercado (AESCO) en Base64.
│       ├── cert-reponedor-supermercado.js     # Certificado Reponedor/a de Supermercado (AESCO) en Base64.
│       ├── cert-manipulador-supermercados.js  # Certificado Manipulador/a para Supermercados (AESCO) en Base64.
│       ├── diploma-colegio.js        # Diploma de bachillerato en formato Base64.
│       └── diploma-manipulador.js    # Diploma de manipulación de alimentos en formato Base64.
└── index.html           # Esqueleto de la página.