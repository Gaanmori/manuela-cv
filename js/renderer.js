/**
 * renderer.js — DOM Builder Module
 *
 * Single Responsibility: translate data objects into DOM nodes.
 * This module has NO knowledge of where data comes from and
 * NO knowledge of where the resulting nodes go in the document.
 *
 * Dependency Inversion: depends on abstract shape of data
 * (plain objects), not on concrete imports from data.js.
 *
 * @module renderer
 */

'use strict';

import { getIcon } from './icons.js';

/* ── Helpers ──────────────────────────────────────────────── */

/**
 * Creates a DOM element with optional class names and inner HTML.
 * @param {string} tag
 * @param {string[]} [classes]
 * @param {string}   [html]
 * @returns {HTMLElement}
 */
function el(tag, classes = [], html = '') {
  const node = document.createElement(tag);
  if (classes.length) node.className = classes.join(' ');
  if (html)           node.innerHTML  = html;
  return node;
}

/**
 * Escapes a string for safe use inside HTML attributes.
 * @param {string} str
 * @returns {string}
 */
function esc(str) {
  return str
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
}

/* ── Section renderers (Interface Segregation) ────────────── */

/**
 * Renders the profile photo element.
 * @param {string} src   - base64 data URL or file path
 * @param {string} alt
 * @returns {HTMLElement}
 */
export function renderPhoto(src, alt) {
  const wrapper = el('div', ['header__photo']);
  const img     = document.createElement('img');
  img.src   = src;
  img.alt   = esc(alt);
  img.className = 'header__photo-img';
  img.width  = 110;
  img.height = 110;
  wrapper.appendChild(img);
  return wrapper;
}

/**
 * Renders the name / tagline / location block.
 * @param {object} person
 * @returns {HTMLElement}
 */
export function renderNameBlock(person) {
  const wrapper = el('div', ['header__name']);

  const h1 = el('h1', ['header__title'],
      `${esc(person.firstName)}<br><em>${esc(person.lastName)}</em>`);

  const tagline = el('p', ['header__tagline'], esc(person.tagline));

  const location = el('span', ['header__location'],
      `<span class="header__location-icon">${getIcon('pin')}</span>
     ${esc(person.location)}`);

  wrapper.append(h1, tagline, location);
  return wrapper;
}

/**
 * Renders the contact links block.
 * @param {Array<{label,href,display,icon}>} contacts
 * @returns {HTMLElement}
 */
export function renderContact(contacts) {
  const wrapper = el('div', ['header__contact']);

  contacts.forEach(({ label, href, display, icon }) => {
    const a = document.createElement('a');
    a.href      = esc(href);
    a.className = 'header__contact-link';
    a.setAttribute('aria-label', esc(label));

    if (href.startsWith('http')) {
      a.target = '_blank';
      a.rel    = 'noopener noreferrer';
    }

    a.innerHTML =
        `<span class="header__contact-icon">${getIcon(icon)}</span>
       ${esc(display)}`;

    wrapper.appendChild(a);
  });

  return wrapper;
}

/**
 * Renders the summary quote strip.
 * @param {string} summary
 * @returns {HTMLElement}
 */
export function renderQuoteStrip(summary) {
  return el('div', ['quote-strip'],
      `<span class="quote-strip__mark" aria-hidden="true">"</span>
     <p class="quote-strip__text">${esc(summary)}</p>`);
}

/**
 * Renders a single experience item.
 * @param {object} exp
 * @returns {HTMLElement}
 */
function renderExpItem(exp) {
  const tags = exp.tags
      .map(t => `<span class="tag">${esc(t)}</span>`)
      .join('');

  return el('article', ['exp-item'],
      `<div class="exp-item__date">
       <span class="exp-item__year">${esc(exp.year)}</span>
       ${esc(exp.period)}
     </div>
     <div class="exp-item__body">
       <div class="exp-item__role">${esc(exp.role)}</div>
       <div class="exp-item__company">${esc(exp.company)}</div>
       <p class="exp-item__desc">${esc(exp.desc)}</p>
       <div class="exp-item__tags">${tags}</div>
     </div>`);
}

/**
 * Renders the full experience section.
 * @param {Array} experiences
 * @returns {HTMLElement}
 */
export function renderExperience(experiences) {
  const section = el('section', ['section']);
  section.setAttribute('aria-labelledby', 'section-experience');

  const heading = el('h2', ['section-label']);
  heading.id          = 'section-experience';
  heading.textContent = 'Experiencia';
  section.appendChild(heading);

  experiences.forEach(exp => section.appendChild(renderExpItem(exp)));
  return section;
}

/**
 * Renders the skills card.
 * @param {Array<{name,pct}>} skills
 * @returns {HTMLElement}
 */
export function renderSkillsCard(skills) {
  const card = el('div', ['sidebar-card']);
  const h2   = el('h2', ['section-label']);
  h2.textContent = 'Habilidades';
  card.appendChild(h2);

  const ul = el('ul', ['skill-list']);
  skills.forEach(({ name, pct }) => {
    const li = el('li', ['skill-list__item'],
        `<span class="skill-list__name">${esc(name)}</span>
       <div class="skill-bar">
         <div class="skill-bar__fill" style="width:${pct}%"
              role="meter" aria-valuenow="${pct}" aria-valuemin="0"
              aria-valuemax="100" aria-label="${esc(name)}: ${pct}%">
         </div>
       </div>`);
    ul.appendChild(li);
  });

  card.appendChild(ul);
  return card;
}

/**
 * Renders the languages card.
 * @param {Array<{code,label,muted}>} languages
 * @returns {HTMLElement}
 */
export function renderLanguagesCard(languages) {
  const card = el('div', ['sidebar-card']);
  const h2   = el('h2', ['section-label']);
  h2.textContent = 'Idiomas';
  card.appendChild(h2);

  const grid = el('div', ['lang-grid']);
  languages.forEach(({ code, label, muted }) => {
    const item = el('div', ['lang-item'],
        `<div class="lang-item__circle${muted ? ' lang-item__circle--muted' : ''}"
            aria-label="${esc(code)}">${esc(code)}</div>
       <span class="lang-item__level">${esc(label)}</span>`);
    grid.appendChild(item);
  });

  card.appendChild(grid);
  return card;
}

/**
 * Renders the education card.
 * @param {Array<{degree,school,period}>} education
 * @returns {HTMLElement}
 */
export function renderEducationCard(education) {
  const card = el('div', ['sidebar-card']);
  const h2   = el('h2', ['section-label']);
  h2.textContent = 'Educación';
  card.appendChild(h2);

  education.forEach(({ degree, school, period }) => {
    card.appendChild(el('div', ['edu-item'],
        `<div class="edu-item__degree">${esc(degree)}</div>
       <div class="edu-item__school">${esc(school)}</div>
       <div class="edu-item__year">${esc(period)}</div>`));
  });

  return card;
}

/**
 * Renders the certifications card.
 * Each cert name is clickable and opens its PDF in a new tab.
 * @param {Array<{name,issuer,period,tags,pdfSrc}>} certifications
 * @returns {HTMLElement}
 */
export function renderCertificationsCard(certifications) {
  const card = el('div', ['sidebar-card']);
  const h2   = el('h2', ['section-label']);
  h2.textContent = 'Formación';
  card.appendChild(h2);

  certifications.forEach(({ name, issuer, period, tags, pdfSrc }) => {
    const tagsHtml = tags
        .map(t => `<span class="cert-tag">${esc(t)}</span>`)
        .join('');

    const item = el('div', ['cert-item']);

    // Name — clickable if a PDF is available
    if (pdfSrc) {
      const btn = el('button', ['cert-item__name', 'cert-item__name--link']);
      btn.textContent = name;
      btn.title       = `Ver diploma: ${name}`;
      btn.setAttribute('aria-label', `Abrir diploma de ${name}`);
      btn.addEventListener('click', () => {
        // Convert data URI to a Blob URL so the browser opens it as a PDF
        const byteStr  = atob(pdfSrc.split(',')[1]);
        const bytes    = new Uint8Array(byteStr.length);
        for (let i = 0; i < byteStr.length; i++) bytes[i] = byteStr.charCodeAt(i);
        const blob     = new Blob([bytes], { type: 'application/pdf' });
        const blobUrl  = URL.createObjectURL(blob);
        window.open(blobUrl, '_blank', 'noopener');
        // Revoke after a short delay to free memory once the tab has loaded
        setTimeout(() => URL.revokeObjectURL(blobUrl), 10_000);
      });
      item.appendChild(btn);
    } else {
      item.appendChild(el('div', ['cert-item__name'], esc(name)));
    }

    item.appendChild(el('div', ['cert-item__issuer'],  esc(issuer)));
    item.appendChild(el('div', ['cert-item__period'],   esc(period)));
    item.appendChild(el('div', ['cert-item__tags'],     tagsHtml));

    card.appendChild(item);
  });

  return card;
}

/**
 * Renders the profile note card.
 * @param {string} note
 * @returns {HTMLElement}
 */
export function renderProfileCard(note) {
  const card = el('div', ['sidebar-card']);
  const h2   = el('h2', ['section-label']);
  h2.textContent = 'Perfil';

  const p = el('p', ['profile-note'], esc(note));
  card.append(h2, p);
  return card;
}