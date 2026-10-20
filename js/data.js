/**
 * data.js — CV Data Module
 *
 * Single Responsibility: owns the MASTER CV data (everything Manuela
 * has studied and worked on). Nothing renders here; nothing fetches here.
 *
 * Every list item has a stable `id`. Versions (js/versions.js) pick and
 * order items by id, so a new job/course is written once, here, and then
 * referenced from whichever versions should show it.
 *
 * @module data
 */

'use strict';

/** @type {CVData} */
export const CV_DATA = {
  person: {
    firstName: 'Manuela',
    lastName:  'Echeverry Pineda',
    tagline:   'Gestión Operativa · Hostelería · Atención al Cliente',
    location:  'Sagunto, Comunidad Valenciana · España',
    summary:
        'Más de 9 años en administración, atención al cliente y operaciones. ' +
        'Perfil polivalente, orientado a resultados, con rápida adaptación a ' +
        'entornos multiculturales. Permiso de trabajo en vigor, disponibilidad inmediata.',
  },

  contact: [
    { label: 'Teléfono', href: 'tel:614088475',                               display: '614 088 475',                    icon: 'phone'    },
    { label: 'Email',    href: 'mailto:manu.echeverry09@gmail.com',            display: 'manu.echeverry09@gmail.com',     icon: 'email'    },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manu-echeverry/', display: 'linkedin.com/in/manu-echeverry', icon: 'linkedin' },
    { label: 'CV Online', href: 'https://gaanmori.github.io/manuela-cv/', display: 'gaanmori.github.io/manuela-cv', icon: 'cv', versioned: true },
  ],

  experience: [
    {
      id:      'rafa',
      year:    '2026',
      period:  "May '26 – Presente",
      role:    'Auxiliar de Hostelería — Sala y Caja',
      company: "Restaurante Arrocería CA' RAFA — Canet d'en Berenguer, España",
      desc:    'Gestión de caja y TPV, recepción de comensales, organización de sala y coordinación de pedidos take away. Apoyo operativo durante horas punta.',
      tags:    ['TPV / Caja', 'Take Away', 'Atención al cliente'],
    },
    {
      id:      'encuentro',
      year:    '2026',
      period:  "Ene '26 – Abr '26",
      role:    'Auxiliar de Hostelería',
      company: 'Cafetería El Encuentro — Sagunto, España',
      desc:    'Servicio de barra y sala, elaboración de cafés y carta corta. Gestión de caja en entornos de alto volumen.',
      tags:    ['Barra', 'Alto volumen', 'Caja'],
    },
    {
      id:      'hycite-admin',
      year:    '2021',
      period:  "Jun '21 – Oct '25",
      role:    'Auxiliar Administrativa',
      company: 'Hy Cite — Medellín, Colombia',
      desc:    'Seguimiento de cartera, conciliaciones y reportes financieros. Coordinación con el área comercial y gestión documental. Logro: reducción de tiempos en conciliación mediante optimización de procesos.',
      tags:    ['Cartera', 'Excel', 'Facturación', 'Reportes'],
    },
    {
      id:      'hycite-tele',
      year:    '2021',
      period:  "Abr '21 – Jun '21",
      role:    'Agente de Telemarketing',
      company: 'Hy Cite — Cartagena de Indias, Colombia',
      desc:    'Contacto outbound para presentación de productos Royal Prestige y agendamiento de citas comerciales. Superación constante de metas de conversión.',
      tags:    ['Outbound', 'CRM', 'Conversión'],
    },
    {
      id:      'movistar-admin',
      year:    '2017',
      period:  "Abr '17 – Abr '21",
      role:    'Auxiliar Administrativo',
      company: 'Movistar — Cartagena de Indias, Colombia',
      desc:    'Gestión documental, conciliación de ventas diarias y control de inventarios. Coordinación operativa entre áreas para la entrega de productos y servicios. Logro: mejora en organización documental que redujo tiempos de gestión.',
      tags:    ['Inventarios', 'Caja / Conciliación', 'Portabilidades'],
    },
    {
      id:      'movistar-ops',
      year:    '2015',
      period:  "Oct '15 – Abr '17",
      role:    'Auxiliar de Operaciones',
      company: 'Movistar — Cartagena de Indias, Colombia',
      desc:    'Control de inventarios, gestión de activaciones y portabilidades, apoyo en caja y resolución de incidencias operativas.',
      tags:    ['Operaciones', 'Activaciones', 'Soporte'],
    },
  ],

  skills: [
    { id: 'atencion', name: 'Atención al cliente',    pct: 95 },
    { id: 'admin', name: 'Gestión administrativa', pct: 92 },
    { id: 'facturacion', name: 'Facturación / Cartera',  pct: 88 },
    { id: 'ofimatica', name: 'Ofimática (Office & Google Workspace)', pct: 85 },
    { id: 'hosteleria', name: 'Hostelería / TPV',       pct: 80 },
  ],


  education: [
    {
      id:        'bachillerato',
      degree:    'Bachillerato · Educación Media (homologado)',
      school:    'Gimnasio Cervantes de Cartagena · Colombia',
      period:    '2015',
      pdfExport: 'DIPLOMA_COLEGIO',
    },
    {
      id:        'linguistica',
      degree: 'Lingüística y Literatura',
      school: 'Universidad de Cartagena · Colombia',
      period: '2025',
    },
  ],

  certifications: [
    {
      id:        'cajero-super',
      name:      'Cajero/a de Supermercado',
      issuer:    'AESCO ONG',
      period:    'Oct 2026 · 20 h',
      tags:      ['Caja registradora', 'Cobros', 'Facturación'],
      pdfExport: 'CERT_CAJERO_SUPER',
    },
    {
      id:        'manipulador-super',
      name:      'Manipulador/a de Alimentos para Supermercados',
      issuer:    'AESCO ONG',
      period:    'Oct 2026 · 4 h',
      tags:      ['Higiene alimentaria', 'Retail'],
      pdfExport: 'CERT_MANIPULADOR_SUPER',
    },
    {
      id:        'manipulador',
      name:      'Manipulador de Alimentos',
      issuer:    'Coformación',
      period:    'May 2026 · 10 h',
      tags:      ['Higiene alimentaria', 'Hostelería'],
      pdfExport: ['CERT_MANIPULADOR', 'DIPLOMA_MANIPULADOR'],
    },
    {
      id:        'community-manager',
      name:      'Principios del Community Manager',
      issuer:    'Generalitat Valenciana · Adecco',
      period:    'Abr 2026 · 25 h',
      tags:      ['Comunicación digital', 'Marketing', 'RRSS'],
      pdfExport: 'CERT_COMMUNITY_MANAGER',
    },
    {
      id:        'ia',
      name:      'Introducción a la Inteligencia Artificial',
      issuer:    'Generalitat Valenciana · Adecco',
      period:    'Mar 2026 · 25 h',
      tags:      ['IA', 'Herramientas digitales'],
      pdfExport: 'CERT_IA',
    },
  ],

  drivingLicenses: [
    {
      type:       'B',
      label:      'Permiso B — Coche',
      issued:     '12/08/2026',
      expires:    '12/08/2036',
    },
    {
      type:       'A2',
      label:      'Permiso A2 — Moto',
      issued:     '12/08/2026',
      expires:    '12/08/2036',
    },
  ],

  mobilityNote: 'Vehículo propio · Disponibilidad para desplazarse sin depender del transporte público.',

};