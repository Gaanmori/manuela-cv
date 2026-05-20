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
  renderProfileCard,
}                             from './renderer.js';

/* ── Photo source (inlined from assets/photo.js) ─────────── */
import { PHOTO_SRC } from './assets/photo.js';

/* ── Certificate PDFs (base64) ────────────────────────────── */
import { CERT_COMMUNITY_MANAGER } from './assets/cert-community-manager.js';
import { CERT_IA }                from './assets/cert-ia.js';

/** Maps pdfExport keys in data.js to their base64 data URIs. */
const CERT_MAP = {
  CERT_COMMUNITY_MANAGER,
  CERT_IA,
};

/* ── Mount ────────────────────────────────────────────────── */

/**
 * Builds and mounts the full CV into the page skeleton.
 * Called once the DOM is ready.
 */
function mount() {
  const { person, contact, experience, skills, languages, education, certifications, profileNote } = CV_DATA;

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
      pdfSrc: CERT_MAP[c.pdfExport] ?? null,
    }));

    const sidebarItems = [
      renderSkillsCard(skills),
      renderLanguagesCard(languages),
      renderEducationCard(education),
      renderCertificationsCard(certsWithPdf),
      renderProfileCard(profileNote),
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