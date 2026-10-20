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
 * replace fields for this version only (e.g. `bullets`, `tags`, `name`).
 * Use 'all' to show every master item.
 *
 * Rules of thumb:
 *  · Keep experience in reverse-chronological order and never drop a job
 *    that would leave a gap in the timeline; shorten it instead.
 *  · Overrides may only rephrase facts already true in data.js.
 *  · Most relevant jobs get 2–3 bullets, the rest 1–2.
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
    tagline: 'Auxiliar de Hostelería · Sala · Barra · Caja',
    summary:
        'Auxiliar de hostelería con experiencia en sala, barra y caja/TPV en entornos de alto ' +
        'volumen y más de 10 años previos en atención al cliente y administración. Manipuladora ' +
        'de alimentos certificada. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience: [
      'rafa',
      'encuentro',
      { id: 'hycite-admin',
        bullets: [
          'Seguimiento de cartera, conciliaciones y reportes financieros.',
          'Coordinación con el área comercial y gestión documental.',
        ],
        tags: ['Cartera', 'Excel', 'Reportes'] },
      { id: 'movistar-admin',
        bullets: [
          'Conciliación de ventas diarias y control de inventarios.',
          'Coordinación entre áreas para la entrega de productos y servicios.',
        ],
        tags: ['Inventarios', 'Caja / Conciliación'] },
      { id: 'movistar-ops',
        bullets: [
          'Control de inventarios, activaciones y portabilidades.',
          'Apoyo en caja y resolución de incidencias.',
        ],
        tags: ['Operaciones', 'Caja', 'Soporte'] },
    ],
    skills:         ['atencion', 'caja', 'sala', 'higiene', 'ofimatica'],
    education:      ['bachillerato'],
    certifications: ['manipulador', 'cajero-super'],
    licenses:       true,
  },

  /* ── Retail: cajera / reponedora de supermercado ────────── */
  retail: {
    label:   'Retail / Cajera',
    theme:   'retail',
    tagline: 'Cajera · Reponedora · Atención al Cliente',
    summary:
        'Formada como cajera y reponedora de supermercado, con experiencia en caja, TPV y ' +
        'atención al público en entornos de alto volumen. Más de 10 años previos en operaciones, ' +
        'inventarios y administración. Permiso de trabajo en vigor, disponibilidad inmediata y ' +
        'vehículo propio.',
    experience: [
      { id: 'rafa',
        bullets: [
          'Gestión de caja y TPV, con cobro a clientes y atención directa al público.',
          'Coordinación de pedidos take away.',
          'Apoyo operativo durante horas punta.',
        ],
        tags: ['TPV / Caja', 'Take Away', 'Atención al público'] },
      { id: 'encuentro',
        bullets: [
          'Gestión de caja en entornos de alto volumen.',
          'Servicio de barra y sala con atención directa al cliente.',
        ],
        tags: ['Caja', 'Alto volumen', 'Atención al público'] },
      { id: 'hycite-admin',
        bullets: [
          'Seguimiento de cartera, facturación y conciliaciones.',
          'Coordinación con el área comercial y gestión documental.',
        ],
        tags: ['Cartera', 'Facturación', 'Excel'] },
      { id: 'movistar-admin',
        bullets: [
          'Conciliación de ventas diarias y gestión de caja.',
          'Control de inventarios y gestión documental.',
        ],
        tags: ['Caja / Conciliación', 'Inventarios'] },
      { id: 'movistar-ops',
        bullets: [
          'Control de inventarios y apoyo en caja.',
          'Gestión de activaciones, portabilidades e incidencias operativas.',
        ],
        tags: ['Caja', 'Inventarios', 'Operaciones'] },
    ],
    skills:         ['caja', 'atencion', 'reposicion', 'inventarios', 'higiene', 'ofimatica'],
    education:      ['bachillerato'],
    certifications: ['cajero-super', 'reponedor-super', 'manipulador-super'],
    licenses:       true,
  },

  /* ── Administrativa: cartera, facturación, gestión documental ── */
  administrativa: {
    label:   'Administrativa',
    theme:   'administrativa',
    tagline: 'Auxiliar Administrativa · Cartera y Facturación',
    summary:
        'Auxiliar administrativa con más de 10 años de experiencia en cartera, conciliaciones, ' +
        'facturación y gestión documental, con mejoras de procesos que redujeron tiempos de ' +
        'gestión. Manejo de Office y Google Workspace. Permiso de trabajo en vigor, ' +
        'disponibilidad inmediata.',
    experience: [
      { id: 'rafa',
        bullets: ['Gestión de caja y TPV y coordinación de pedidos en un restaurante.'],
        tags: ['TPV / Caja', 'Organización'] },
      { id: 'encuentro',
        bullets: ['Gestión de caja y atención al cliente en un entorno de alto volumen.'],
        tags: ['Caja', 'Atención al cliente'] },
      'hycite-admin',
      'movistar-admin',
      { id: 'movistar-ops',
        bullets: [
          'Control de inventarios y gestión de activaciones y portabilidades.',
          'Resolución de incidencias operativas.',
        ],
        tags: ['Inventarios', 'Activaciones', 'Soporte'] },
    ],
    skills:         ['admin', 'facturacion', 'conciliacion', 'ofimatica', 'inventarios', 'atencion'],
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
        'Más de 10 años atendiendo clientes en telecomunicaciones, ventas y hostelería, con ' +
        'experiencia en venta telefónica, resolución de incidencias y gestión de caja. ' +
        'Comunicación clara y orientación a resultados. Permiso de trabajo en vigor, ' +
        'disponibilidad inmediata.',
    experience: [
      { id: 'rafa',
        bullets: [
          'Recepción de comensales y atención directa al cliente.',
          'Gestión de caja y TPV; coordinación de pedidos take away.',
        ],
        tags: ['Atención al cliente', 'TPV / Caja', 'Take Away'] },
      { id: 'encuentro',
        bullets: [
          'Servicio de barra y sala con atención directa al cliente.',
          'Gestión de caja en entornos de alto volumen.',
        ],
        tags: ['Barra', 'Alto volumen', 'Atención al cliente'] },
      { id: 'hycite-admin',
        bullets: [
          'Seguimiento de cartera y conciliaciones.',
          'Coordinación constante con el área comercial.',
        ],
        tags: ['Cartera', 'Coordinación comercial', 'Excel'] },
      'hycite-tele',
      { id: 'movistar-admin',
        bullets: [
          'Conciliación de ventas diarias y gestión documental.',
          'Coordinación entre áreas para la entrega de productos y servicios.',
        ],
        tags: ['Portabilidades', 'Coordinación', 'Inventarios'] },
      { id: 'movistar-ops',
        bullets: [
          'Gestión de activaciones y portabilidades.',
          'Apoyo en caja y resolución de incidencias operativas.',
        ],
        tags: ['Activaciones', 'Incidencias', 'Soporte'] },
    ],
    skills:         ['atencion', 'venta', 'caja', 'sala', 'ofimatica'],
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
        'Más de 10 años en administración, atención al cliente y operaciones, y experiencia ' +
        'reciente en hostelería y caja. Perfil polivalente, con rápida adaptación a entornos ' +
        'multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience:     'all',
    skills:         'all',
    education:      'all',
    certifications: 'all',
    licenses:       true,
  },
};
