export function useJsonLdSiteUrl(): string {
  if (typeof window !== 'undefined') return window.location.origin;
  return '';
}
