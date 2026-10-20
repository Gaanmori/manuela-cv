/**
 * resolver.js — Version Resolver
 *
 * Single Responsibility: combines the master data (data.js) with a
 * version definition (versions.js) into the exact data the page renders.
 * Pure functions, no DOM: easy to test and reason about.
 *
 * @module resolver
 */

'use strict';

import { VERSIONS, DEFAULT_VERSION } from './versions.js';

/**
 * Resolves a version id from the `?v=` query string.
 * @param {string} search  e.g. window.location.search
 * @returns {string} a key of VERSIONS
 */
export function resolveVersionId(search) {
  const requested = new URLSearchParams(search).get('v');
  if (requested && Object.hasOwn(VERSIONS, requested)) return requested;
  if (requested) console.warn(`[cv] Versión desconocida "${requested}"; usando "${DEFAULT_VERSION}".`);
  return DEFAULT_VERSION;
}

/**
 * Picks master items by id (or all), applying per-version overrides.
 * An unknown id is reported and skipped so one typo never blanks the CV.
 *
 * @param {Array<{id:string}>}         master
 * @param {'all'|Array<string|object>} selection
 * @param {string}                     listName  for error messages
 * @returns {Array<object>}
 */
function pick(master, selection, listName) {
  if (selection === 'all' || selection === undefined) return master;

  return selection.flatMap(entry => {
    const { id, ...overrides } = typeof entry === 'string' ? { id: entry } : entry;
    const item = master.find(m => m.id === id);
    if (!item) {
      console.error(`[cv] "${id}" no existe en ${listName} de data.js`);
      return [];
    }
    return [{ ...item, ...overrides }];
  });
}

/**
 * Contact items flagged `versioned` link to this exact version
 * (`?v=<id>`), so each CV points to its own web copy.
 * @param {Array<object>} contacts
 * @param {string}        versionId
 * @returns {Array<object>}
 */
function resolveContacts(contacts, versionId) {
  return contacts.map(c => c.versioned
    ? { ...c, href: `${c.href}?v=${versionId}`, display: `${c.display}?v=${versionId}` }
    : c);
}

/**
 * Builds the data to render for one version.
 *
 * @param {object} data       master data
 * @param {string} versionId  key of VERSIONS
 * @returns {object} same shape as master data, filtered and ordered
 */
export function buildView(data, versionId) {
  const v = VERSIONS[versionId];
  return {
    ...data,
    theme:   v.theme ?? versionId,
    contact: resolveContacts(data.contact, versionId),
    person: {
      ...data.person,
      tagline: v.tagline ?? data.person.tagline,
      summary: v.summary ?? data.person.summary,
    },
    experience:      pick(data.experience,     v.experience,     'experience'),
    skills:          pick(data.skills,         v.skills,         'skills'),
    education:       pick(data.education,      v.education,      'education'),
    certifications:  pick(data.certifications, v.certifications, 'certifications'),
    drivingLicenses: v.licenses === false ? [] : data.drivingLicenses,
  };
}
