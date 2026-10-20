/**
 * versions.js — CV Versions
 *
 * Single Responsibility: declares WHICH master items (js/data.js) each
 * CV version shows, in WHAT order, and any wording specific to it.
 * Contains no personal data of its own beyond version-specific wording.
 *
 * Adding a version = adding one entry here. Selected via `?v=<id>`.
 *
 * Each list references master items by `id`; array order = display order.
 * A list item can be a plain id string, or `{ id, ...overrides }` to
 * replace fields for this version only (e.g. `desc`, `tags`, `name`).
 * Use 'all' to show every master item.
 *
 * Rules of thumb:
 *  · Keep experience in reverse-chronological order and never drop a job
 *    that would leave a gap in the timeline; shorten it instead.
 *  · Overrides may only rephrase facts already true in data.js.
 *  · `theme` picks the palette in css/themes.css (defaults to the version id).
 *
 * @module versions
 */

'use strict';

/** Version shown when `?v` is missing or unknown. */
export const DEFAULT_VERSION = 'hosteleria';

/** @type {Record<string, object>} */
export const VERSIONS = {

  /* ── Hostelería: sala, barra y caja ─────────────────────── */
  hosteleria: {
    label:   'Hostelería',
    theme:   'hosteleria',
    tagline: 'Gestión Operativa · Hostelería · Atención al Cliente',
    summary:
        'Más de 9 años en administración, atención al cliente y operaciones. ' +
        'Perfil polivalente, orientado a resultados, con rápida adaptación a ' +
        'entornos multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience: [
      'rafa',
      'encuentro',
      { id: 'hycite-admin',
        desc: 'Seguimiento de cartera, conciliaciones y reportes. Coordinación con el área comercial y gestión documental.',
        tags: ['Cartera', 'Excel', 'Reportes'] },
      { id: 'movistar-admin',
        desc: 'Conciliación de ventas diarias y control de inventarios. Coordinación entre áreas para la entrega de productos y servicios.',
        tags: ['Inventarios', 'Caja / Conciliación'] },
      { id: 'movistar-ops',
        desc: 'Control de inventarios, activaciones y portabilidades, apoyo en caja y resolución de incidencias.',
        tags: ['Operaciones', 'Caja', 'Soporte'] },
    ],
    skills:         ['atencion', 'hosteleria', 'admin', 'ofimatica'],
    education:      ['bachillerato'],
    certifications: ['manipulador', 'cajero-super', 'ia'],
    licenses:       true,
  },

  /* ── Retail: cajera de supermercado ─────────────────────── */
  retail: {
    label:   'Retail / Cajera',
    theme:   'retail',
    tagline: 'Cajera · Atención al Cliente · Retail',
    summary:
        'Experiencia en caja, TPV y atención al público, con formación específica como ' +
        'cajera de supermercado y manipuladora de alimentos. Perfil polivalente, con rápida ' +
        'adaptación. Permiso de trabajo en vigor, disponibilidad inmediata y vehículo propio.',
    experience: [
      { id: 'rafa',
        desc: 'Gestión de caja y TPV, cobro a clientes y coordinación de pedidos take away. Atención directa al público y apoyo operativo durante horas punta.',
        tags: ['TPV / Caja', 'Take Away', 'Atención al público'] },
      { id: 'encuentro',
        desc: 'Gestión de caja en entornos de alto volumen, con servicio de barra y sala y atención directa al cliente.',
        tags: ['Caja', 'Alto volumen', 'Atención al público'] },
      { id: 'hycite-admin',
        desc: 'Seguimiento de cartera, facturación y conciliaciones. Coordinación con el área comercial y gestión documental.',
        tags: ['Cartera', 'Facturación', 'Excel'] },
      { id: 'movistar-admin',
        desc: 'Conciliación de ventas diarias y gestión de caja, control de inventarios y gestión documental. Coordinación operativa entre áreas.',
        tags: ['Caja / Conciliación', 'Inventarios'] },
      { id: 'movistar-ops',
        desc: 'Control de inventarios, gestión de activaciones y portabilidades, apoyo en caja y resolución de incidencias operativas.',
        tags: ['Caja', 'Inventarios', 'Operaciones'] },
    ],
    skills: [
      { id: 'hosteleria', name: 'Caja / TPV' },
      'atencion',
      'facturacion',
      'ofimatica',
    ],
    education:      ['bachillerato'],
    certifications: ['cajero-super', 'manipulador-super', 'manipulador'],
    licenses:       true,
  },

  /* ── Administrativa: cartera, facturación, gestión documental ── */
  administrativa: {
    label:   'Administrativa',
    theme:   'administrativa',
    tagline: 'Auxiliar Administrativa · Cartera y Facturación',
    summary:
        'Más de 9 años en administración: cartera, conciliaciones, facturación y gestión ' +
        'documental. Manejo de Office y Google Workspace. Permiso de trabajo en vigor, ' +
        'disponibilidad inmediata.',
    experience: [
      { id: 'rafa',
        desc: 'Gestión de caja y TPV y coordinación de pedidos en un restaurante.',
        tags: ['TPV / Caja', 'Organización'] },
      { id: 'encuentro',
        desc: 'Gestión de caja y atención al cliente en un entorno de alto volumen.',
        tags: ['Caja', 'Atención al cliente'] },
      'hycite-admin',
      'movistar-admin',
      { id: 'movistar-ops',
        desc: 'Control de inventarios y gestión de activaciones y portabilidades, con resolución de incidencias operativas.',
        tags: ['Inventarios', 'Activaciones', 'Soporte'] },
    ],
    skills:         ['admin', 'facturacion', 'ofimatica', 'atencion'],
    education:      ['linguistica', 'bachillerato'],
    certifications: ['ia', 'community-manager'],
    licenses:       false,
  },

  /* ── Atención al cliente: ventas, comunicación ───────────── */
  'atencion-cliente': {
    label:   'Atención al cliente',
    theme:   'atencion-cliente',
    tagline: 'Atención al Cliente · Ventas · Comunicación',
    summary:
        'Más de 9 años en atención al cliente en telecomunicaciones, ventas y hostelería. ' +
        'Comunicación clara, orientación a resultados y rápida adaptación a entornos ' +
        'multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience: [
      { id: 'rafa',
        desc: 'Recepción de comensales, atención directa al cliente, gestión de caja y TPV y coordinación de pedidos take away.',
        tags: ['Atención al cliente', 'TPV / Caja', 'Take Away'] },
      { id: 'encuentro',
        desc: 'Servicio de barra y sala con atención directa al cliente y gestión de caja en entornos de alto volumen.',
        tags: ['Barra', 'Alto volumen', 'Atención al cliente'] },
      { id: 'hycite-admin',
        desc: 'Seguimiento de cartera y conciliaciones, con coordinación constante con el área comercial.',
        tags: ['Cartera', 'Coordinación comercial', 'Excel'] },
      'hycite-tele',
      { id: 'movistar-admin',
        desc: 'Conciliación de ventas diarias, gestión documental y control de inventarios. Coordinación entre áreas para la entrega de productos y servicios.',
        tags: ['Portabilidades', 'Coordinación', 'Inventarios'] },
      { id: 'movistar-ops',
        desc: 'Gestión de activaciones y portabilidades, apoyo en caja y resolución de incidencias operativas.',
        tags: ['Activaciones', 'Incidencias', 'Soporte'] },
    ],
    skills:         ['atencion', 'ofimatica', 'hosteleria', 'admin'],
    education:      ['bachillerato', 'linguistica'],
    certifications: ['community-manager', 'cajero-super', 'ia'],
    licenses:       false,
  },

  /* ── Completa: base con todo (puede ocupar 2 hojas) ─────── */
  completa: {
    label:   'Completa',
    theme:   'completa',
    tagline: 'Gestión Operativa · Hostelería · Atención al Cliente',
    summary:
        'Más de 9 años en administración, atención al cliente y operaciones. ' +
        'Perfil polivalente, orientado a resultados, con rápida adaptación a ' +
        'entornos multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience:     'all',
    skills:         'all',
    education:      'all',
    certifications: 'all',
    licenses:       true,
  },
};
