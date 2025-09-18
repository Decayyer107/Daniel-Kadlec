import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { locales, defaultLocale } from './i18n-config';

function getLocale(request: NextRequest) {
    const header = request.headers.get('accept-language') || '';
    const languages = new Negotiator({ headers: { 'accept-language': header } }).languages();
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const locale = getLocale(request);

    response.cookies.set('locale', locale, { path: '/' });

    return response;
}
export const config = { matcher: ['/((?!_next).*)'] };
