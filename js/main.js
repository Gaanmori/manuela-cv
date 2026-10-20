/**
 * main.js — Application Entry Point
 *
 * Single Responsibility: wires data → renderers → DOM.
 * This is the only module that knows about both data and DOM
 * structure (Dependency Inversion: both modules depend on
 * the abstractions exported by data.js and renderer.js).
 *
 * Open/Closed: to add a new sidebar card, import the new
 * renderer and push it into `sidebarItems` — no other file
 * changes.
 *
 * @module main
 */

'use strict';

import { CV_DATA }            from './data.js';
import { resolveVersionId, buildView } from './resolver.js';
import {
  renderPhoto,
  renderNameBlock,
  renderContact,
  renderQuoteStrip,
  renderExperience,
  renderSkillsCard,
  renderLanguagesCard,
  renderEducationCard,
  renderCertificationsCard,
  renderLicensesCard,
}                             from './renderer.js';

/* ── Photo source (inlined from assets/photo.js) ─────────── */
import { PHOTO_SRC } from './assets/photo.js';

/* ── Certificate PDFs (base64) ────────────────────────────── */
import { CERT_COMMUNITY_MANAGER } from './assets/cert-community-manager.js';
import { CERT_IA }                from './assets/cert-ia.js';
import { DIPLOMA_COLEGIO }        from './assets/diploma-colegio.js';
import { CERT_MANIPULADOR }       from './assets/cert-manipulador.js';
import { DIPLOMA_MANIPULADOR }    from './assets/diploma-manipulador.js';
import { CERT_MANIPULADOR_SUPER } from './assets/cert-manipulador-supermercados.js';
import { CERT_CAJERO_SUPER }      from './assets/cert-cajero-supermercado.js';
import { CERT_REPONEDOR_SUPER }   from './assets/cert-reponedor-supermercado.js';

/** Maps pdfExport keys in data.js to their base64 data URIs. */
const CERT_MAP = {
  CERT_COMMUNITY_MANAGER,
  CERT_IA,
  DIPLOMA_COLEGIO,
  CERT_MANIPULADOR,
  DIPLOMA_MANIPULADOR,
  CERT_MANIPULADOR_SUPER,
  CERT_CAJERO_SUPER,
  CERT_REPONEDOR_SUPER,
};

/* ── Mount ────────────────────────────────────────────────── */

/**
 * Builds and mounts the full CV into the page skeleton.
 * Called once the DOM is ready.
 */
function mount() {
  const versionId = resolveVersionId(window.location.search);
  const view      = buildView(CV_DATA, versionId);
  document.documentElement.dataset.theme = view.theme;
  document.title  = `${view.person.firstName} ${view.person.lastName} — CV`;

  const { person, contact, experience, skills, education, certifications, languages, drivingLicenses, mobilityNote } = view;

  /* Header */
  const headerLeft = document.querySelector('.header__left');
  if (headerLeft) {
    headerLeft.appendChild(renderPhoto(PHOTO_SRC, `${person.firstName} ${person.lastName}`));
    headerLeft.appendChild(renderNameBlock(person));
  }

  const headerRoot = document.querySelector('.header');
  if (headerRoot) {
    headerRoot.appendChild(renderContact(contact));
  }

  /* Quote strip */
  const quoteSlot = document.getElementById('quote-slot');
  if (quoteSlot) {
    quoteSlot.replaceWith(renderQuoteStrip(person.summary));
  }

  /* Main column */
  const mainEl = document.querySelector('.cv-main');
  if (mainEl) {
    mainEl.appendChild(renderExperience(experience));
  }

  /* Sidebar */
  const sidebarEl = document.querySelector('.sidebar');
  if (sidebarEl) {
    // Resolve pdfExport keys to actual base64 data URIs before rendering
    const certsWithPdf = certifications.map(c => ({
      ...c,
      pdfSrc: Array.isArray(c.pdfExport)
          ? c.pdfExport.map(key => CERT_MAP[key] ?? null)
          : CERT_MAP[c.pdfExport] ?? null,
    }));

    // Resolve pdfExport keys for education items as well
    const eduWithPdf = education.map(e => ({
      ...e,
      pdfSrc: CERT_MAP[e.pdfExport] ?? null,
    }));

    const sidebarItems = [
      renderSkillsCard(skills),
      renderLanguagesCard(languages),
      renderEducationCard(eduWithPdf),
      renderCertificationsCard(certsWithPdf),
      ...(drivingLicenses.length ? [renderLicensesCard(drivingLicenses, mobilityNote)] : []),
    ];
    sidebarItems.forEach(node => sidebarEl.appendChild(node));
  }
}

/* ── Bootstrap ────────────────────────────────────────────── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}