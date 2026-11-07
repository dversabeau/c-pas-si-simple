import { getCollection } from 'astro:content';

export const THEMES: Record<string, string> = {
  travail: 'Travail',
  immigration: 'Immigration',
  securite: 'Sécurité',
  economie: 'Économie',
  jeunesse: 'Jeunesse',
  ecologie: 'Écologie',
};

/** En développement on voit tout ; en production, seules les fiches publiées. */
export async function getFiches() {
  return getCollection('fiches', (f) => import.meta.env.DEV || f.data.statut === 'publiee');
}

const echapper = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

// Caractères échappés par l'éditeur (\*, \[, \_…) : mis de côté pendant la mise en forme.
const ECHAP = /\\([\\`*_{}\[\]()#+\-.!|~])/g;
const proteger = (s: string) => s.replace(ECHAP, (_, c: string) => `\u0000${c.charCodeAt(0)}\u0000`);
const restaurer = (s: string) => s.replace(/\u0000(\d+)\u0000/g, (_, n: string) => String.fromCharCode(Number(n)));

/**
 * Mise en forme légère des textes de fiche (le Markdown produit par l'éditeur) :
 * **gras**, *italique* ou _italique_, [texte](https://…),
 * et [texte](/fiches/adresse) pour renvoyer vers une autre fiche.
 * L'ancienne syntaxe [[adresse|texte]] reste comprise.
 * Un renvoi vers une fiche absente (pas encore écrite, ou non publiée) devient du texte simple.
 */
export function md(texte: string, fichesExistantes: Set<string>): string {
  const versFiche = (slug: string, t: string) =>
    fichesExistantes.has(slug) ? `<a class="lien-fiche" href="/fiches/${slug}">${t}</a>` : t;
  let s = echapper(proteger(texte.trim()));
  s = s.replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, slug: string, l?: string) => versFiche(slug, l ?? slug.replace(/-/g, ' ')));
  s = s.replace(/\[([^\]]+)\]\(\/fiches\/([a-z0-9-]+)\/?\)/g, (_, t: string, slug: string) => versFiche(slug, t));
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|[^\w])_([^_\s][^_]*)_(?=[^\w]|$)/g, '$1<em>$2</em>');
  s = s.replace(/\n{2,}/g, '<br>').replace(/\n/g, ' ');
  return restaurer(s);
}

/** Version texte brut, pour le bouton « Copier » et la recherche. */
export function texteBrut(texte: string): string {
  return restaurer(
    proteger(texte.trim())
      .replace(/\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g, (_, slug: string, l?: string) => l ?? slug.replace(/-/g, ' '))
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1$2')
      .replace(/(^|[^\w])_([^_\s][^_]*)_(?=[^\w]|$)/g, '$1$2')
      .replace(/\s*\n+\s*/g, ' '),
  );
}
