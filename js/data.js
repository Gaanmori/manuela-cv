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
        'Más de 9 años de trayectoria en administración, atención al cliente ' +
        'y operaciones. Perfil polivalente, orientado a resultados y con ' +
        'rápida adaptación a entornos multiculturales.',
  },

  contact: [
    { label: 'Teléfono', href: 'tel:614088475',                               display: '614 088 475',                    icon: 'phone'    },
    { label: 'Email',    href: 'mailto:mecheverrypineda@gmail.com',            display: 'mecheverrypineda@gmail.com',     icon: 'email'    },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manu-echeverry/', display: 'linkedin.com/in/manu-echeverry', icon: 'linkedin' },
  ],

  experience: [
    {
      year:    '2026',
      period:  'Mayo · Presente',
      role:    'Auxiliar de Hostelería — Sala y Caja',
      company: "Restaurante Arrocería CA' RAFA — Canet d'en Berenguer, España",
      desc:    'Gestión de caja y TPV, recepción de comensales, organización de sala y coordinación de pedidos take away. Apoyo operativo durante horas punta.',
      tags:    ['TPV / Caja', 'Take Away', 'Atención al cliente'],
    },
    {
      year:    '2026',
      period:  'Ene – Abr',
      role:    'Auxiliar de Hostelería',
      company: 'Cafetería El Encuentro — Sagunto, España',
      desc:    'Servicio de barra y sala, elaboración de cafés y carta corta. Gestión de caja en entornos de alto volumen.',
      tags:    ['Barra', 'Alto volumen', 'Caja'],
    },
    {
      year:    '2021',
      period:  "Jun – Oct '25",
      role:    'Auxiliar Administrativa',
      company: 'Hy Cite — Medellín, Colombia',
      desc:    'Seguimiento de cartera, conciliaciones y reportes financieros. Coordinación con el área comercial y gestión documental. Logro: reducción de tiempos en conciliación mediante optimización de procesos.',
      tags:    ['Cartera', 'Excel', 'Facturación', 'Reportes'],
    },
    {
      year:    '2021',
      period:  'Abr – Jun',
      role:    'Agente de Telemarketing',
      company: 'Hy Cite — Cartagena de Indias, Colombia',
      desc:    'Contacto outbound para presentación de productos Royal Prestige y agendamiento de citas comerciales. Superación constante de metas de conversión.',
      tags:    ['Outbound', 'CRM', 'Conversión'],
    },
    {
      year:    '2017',
      period:  "Abr – Abr '21",
      role:    'Auxiliar Administrativo',
      company: 'Movistar — Cartagena de Indias, Colombia',
      desc:    'Gestión documental, conciliación de ventas diarias y control de inventarios. Coordinación operativa entre áreas para la entrega de productos y servicios. Logro: mejora en organización documental que redujo tiempos de gestión.',
      tags:    ['Inventarios', 'Caja / Conciliación', 'Portabilidades'],
    },
    {
      year:    '2015',
      period:  "Oct – Abr '17",
      role:    'Auxiliar de Operaciones',
      company: 'Movistar — Cartagena de Indias, Colombia',
      desc:    'Control de inventarios, gestión de activaciones y portabilidades, apoyo en caja y resolución de incidencias operativas.',
      tags:    ['Operaciones', 'Activaciones', 'Soporte'],
    },
  ],

  skills: [
    { name: 'Atención al cliente',    pct: 95 },
    { name: 'Gestión administrativa', pct: 92 },
    { name: 'Facturación / Cartera',  pct: 88 },
    { name: 'Excel / Google Sheets',  pct: 85 },
    { name: 'Google Drive',           pct: 83 },
    { name: 'Hostelería / TPV',       pct: 80 },
  ],

  languages: [
    { code: 'ES', label: 'Nativo', muted: false },
    { code: 'EN', label: 'Básico', muted: true  },
  ],

  education: [
    {
      degree:    'Bachillerato · Educación Media (homologado)',
      school:    'Gimnasio Cervantes de Cartagena · Colombia',
      period:    '2015',
      pdfExport: 'DIPLOMA_COLEGIO',
    },
    {
      degree: 'Lingüística y Literatura',
      school: 'Universidad de Cartagena · Colombia',
      period: '2016 – 2025',
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
      'Permiso de trabajo en vigor. Orientada al detalle, proactiva y con ' +
      'fuerte ética de trabajo. Disponibilidad inmediata.',
};