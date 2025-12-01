import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // La lista delle lingue supportate dal tuo sito
  locales: ['en', 'it'],
 
  // La lingua di default se l'utente non ne ha una preferita
  defaultLocale: 'en'
});
 
export const config = {
  // Ignora i file interni di Next.js e i file statici
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};