/**
 * data.js — CV Data Module
 *
 * Single Responsibility: owns the raw CV data.
 * Nothing renders here; nothing fetches here.
 * To update the CV, edit only this file.
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
        'Profesional con más de 9 años de experiencia combinando gestión ' +
        'administrativa, atención al cliente y operaciones. Orientada a ' +
        'resultados, con probada capacidad de adaptación en entornos ' +
        'multiculturales e internacionales.',
  },

  contact: [
    { label: 'Teléfono',  href: 'tel:614088475',                                          display: '614 088 475',                   icon: 'phone'    },
    { label: 'Email',     href: 'mailto:mecheverrypineda@gmail.com',                       display: 'mecheverrypineda@gmail.com',    icon: 'email'    },
    { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/manu-echeverry/', display: 'linkedin.com/in/manu-echeverry',              icon: 'linkedin' },
  ],

  experience: [
    {
      year:    '2026',
      period:  'Mayo · Presente',
      role:    'Auxiliar de Hostelería / Personal de Sala y Caja',
      company: "Restaurante Arrocería CA' RAFA — Canet d'en Berenguer, España",
      desc:    'Gestión de punto de venta y cobros, atención directa en caja, recepción de comensales y organización de sala. Coordinación de pedidos take away, garantizando satisfacción y rapidez del servicio. Apoyo operativo en horas punta.',
      tags:    ['POS / Caja', 'Take Away', 'Atención al cliente'],
    },
    {
      year:    '2026',
      period:  'Ene – Abr',
      role:    'Auxiliar de Hostelería',
      company: 'Cafetería El Encuentro — Sagunto, España',
      desc:    'Servicio de barra y sala, preparación de cafés y productos de carta corta. Gestión de caja y trabajo bajo presión en entornos de alto volumen.',
      tags:    ['Barra', 'Alto volumen', 'Caja'],
    },
    {
      year:    '2021',
      period:  "Jun – Oct '25",
      role:    'Auxiliar Administrativa',
      company: 'Hy Cite — Medellín, Colombia',
      desc:    'Gestión y seguimiento de cartera de clientes, conciliaciones y reportes financieros. Elaboración de documentos administrativos, coordinación con áreas comerciales y manejo avanzado de herramientas ofimáticas. Logro clave: optimización de tiempos en conciliación de cartera.',
      tags:    ['Cartera', 'Excel', 'Facturación', 'Reportes'],
    },
    {
      year:    '2021',
      period:  'Abr – Jun',
      role:    'Telemarketing',
      company: 'Hy Cite — Cartagena de Indias, Colombia',
      desc:    'Contacto de clientes potenciales, promoción de productos Royal Prestige y agendamiento de citas para el equipo comercial. Superación de metas de contacto y conversión.',
      tags:    ['Outbound', 'CRM', 'Conversión'],
    },
    {
      year:    '2017',
      period:  "Abr – Abr '21",
      role:    'Auxiliar Administrativo',
      company: 'Movistar — Cartagena de Indias, Colombia',
      desc:    'Administración documental, conciliación de ventas diarias y reportes. Coordinación operativa para entrega de productos y servicios. Supervisión de inventarios y equipos. Logro: mejoras en organización documental que redujeron tiempos de gestión.',
      tags:    ['Inventarios', 'Caja / Conciliación', 'Portabilidades'],
    },
    {
      year:    '2015',
      period:  "Oct – Abr '17",
      role:    'Auxiliar de Operaciones',
      company: 'Movistar — Cartagena de Indias, Colombia',
      desc:    'Control de inventarios de equipos y accesorios, gestión de activaciones y portabilidades, apoyo en caja y resolución de incidencias operativas.',
      tags:    ['Operaciones', 'Activaciones', 'Soporte'],
    },
  ],

  skills: [
    { name: 'Atención al cliente',    pct: 95 },
    { name: 'Gestión administrativa', pct: 92 },
    { name: 'Facturación / Cartera',  pct: 88 },
    { name: 'Excel / Google Sheets',  pct: 85 },
    { name: 'Google Drive',           pct: 83 },
    { name: 'Hostelería / POS',       pct: 80 },
  ],

  languages: [
    { code: 'ES', label: 'Nativo',  muted: false },
    { code: 'EN', label: 'Básico',  muted: true  },
  ],

  education: [
    {
      degree:  'Lingüística y Literatura',
      school:  'Universidad de Cartagena · Colombia',
      period:  '2016 – 2025',
    },
  ],

  certifications: [
    {
      name:      'Principios del Community Manager',
      issuer:    'Generalitat Valenciana · Adecco',
      period:    'Abr 2026 · 25 h',
      tags:      ['Comunicación digital', 'Marketing', 'RRSS'],
      pdfExport: 'CERT_COMMUNITY_MANAGER',
    },
    {
      name:      'Introducción a la Inteligencia Artificial',
      issuer:    'Generalitat Valenciana · Adecco',
      period:    'Mar 2026 · 25 h',
      tags:      ['IA', 'Herramientas digitales'],
      pdfExport: 'CERT_IA',
    },
  ],

  profileNote:
      'Residente en España con permiso de trabajo. Alta capacidad de adaptación ' +
      'a nuevos entornos culturales y operativos. Orientada al detalle, proactiva ' +
      'y con fuerte ética de trabajo.',
};