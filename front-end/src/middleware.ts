// src/middleware.ts
import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'ar'
});

export const config = {
  matcher: ['/','/(ar|en)/:path*']  
};