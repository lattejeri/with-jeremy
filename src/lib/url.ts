// Prefix site-relative paths (e.g. Pages CMS media at /images/…) with the Astro base.
export function withBase(path: string): string {
  if (!path || /^[a-z]+:/i.test(path) || path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
