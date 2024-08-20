import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'ua', 'pl'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(ua|en|pl)/:path*']
};