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
 * @module versions
 */

'use strict';

/** Version shown when `?v` is missing or unknown. */
export const DEFAULT_VERSION = 'hosteleria';

/** @type {Record<string, object>} */
export const VERSIONS = {

  hosteleria: {
    label:   'Hostelería',
    tagline: 'Gestión Operativa · Hostelería · Atención al Cliente',
    summary:
        'Más de 9 años en administración, atención al cliente y operaciones. ' +
        'Perfil polivalente, orientado a resultados, con rápida adaptación a ' +
        'entornos multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience:     ['rafa', 'encuentro', 'movistar-admin', 'hycite-admin', 'movistar-ops'],
    skills:         ['atencion', 'hosteleria', 'admin', 'ofimatica'],
    education:      ['bachillerato'],
    certifications: ['manipulador', 'cajero-super', 'ia'],
    licenses:       true,
  },

  retail: {
    label:   'Retail / Cajera',
    tagline: 'Cajera · Atención al Cliente · Retail',
    summary:
        'Experiencia en caja, TPV y atención al público, con formación específica como ' +
        'cajera de supermercado y manipuladora de alimentos. Perfil polivalente, con rápida ' +
        'adaptación. Permiso de trabajo en vigor, disponibilidad inmediata y vehículo propio.',
    experience: [
      'rafa',
      'encuentro',
      { id: 'movistar-admin',
        desc: 'Conciliación de ventas diarias y gestión de caja, control de inventarios y gestión documental. Coordinación operativa entre áreas para la entrega de productos y servicios.',
        tags: ['Caja / Conciliación', 'Inventarios', 'Portabilidades'] },
      { id: 'movistar-ops',
        desc: 'Control de inventarios, gestión de activaciones y portabilidades, apoyo en caja y resolución de incidencias operativas.',
        tags: ['Caja', 'Inventarios', 'Operaciones'] },
    ],
    skills: [
      'atencion',
      { id: 'hosteleria', name: 'Caja / TPV' },
      'facturacion',
      'ofimatica',
    ],
    education:      ['bachillerato'],
    certifications: ['cajero-super', 'manipulador-super', 'manipulador'],
    licenses:       true,
  },

  administrativa: {
    label:   'Administrativa',
    tagline: 'Auxiliar Administrativa · Cartera y Facturación',
    summary:
        'Más de 9 años en administración: cartera, conciliaciones, facturación y gestión ' +
        'documental. Manejo de Office y Google Workspace. Permiso de trabajo en vigor, ' +
        'disponibilidad inmediata.',
    experience:     ['hycite-admin', 'movistar-admin', 'movistar-ops', 'encuentro'],
    skills:         ['admin', 'facturacion', 'ofimatica', 'atencion'],
    education:      ['linguistica', 'bachillerato'],
    certifications: ['ia', 'community-manager'],
    licenses:       true,
  },

  'atencion-cliente': {
    label:   'Atención al cliente',
    tagline: 'Atención al Cliente · Ventas · Comunicación',
    summary:
        'Más de 9 años en atención al cliente en telecomunicaciones, ventas y hostelería. ' +
        'Comunicación clara, orientación a resultados y rápida adaptación a entornos ' +
        'multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
    experience:     ['encuentro', 'hycite-tele', 'movistar-ops', 'movistar-admin', 'hycite-admin'],
    skills:         ['atencion', 'ofimatica', 'hosteleria', 'admin'],
    education:      ['bachillerato', 'linguistica'],
    certifications: ['community-manager', 'cajero-super', 'ia'],
    licenses:       true,
  },

  /** Master copy: everything the master data contains. */
  completa: {
    label:   'Completa',
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
