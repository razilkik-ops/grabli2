import type { Metadata, Viewport } from 'next';
import './globals.css';

const title = '«Анти-грабли» — 7-недельная программа Константина Юманова';
const description = 'Практическая системная программа по выходу из повторяющихся сценариев в личной жизни, восстановлению внутренней опоры и личных границ.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://grabli.org/';
const siteRoot = siteUrl.replace(/\/$/, '');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const fontFaces = `
  @font-face { font-family: 'Manrope'; src: url('${basePath}/fonts/manrope-cyrillic-wght-normal.woff2') format('woff2'); font-style: normal; font-weight: 200 800; font-display: swap; unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }
  @font-face { font-family: 'Manrope'; src: url('${basePath}/fonts/manrope-latin-wght-normal.woff2') format('woff2'); font-style: normal; font-weight: 200 800; font-display: swap; }
  @font-face { font-family: 'Prata'; src: url('${basePath}/fonts/prata-cyrillic-400-normal.woff2') format('woff2'); font-style: normal; font-weight: 400; font-display: swap; unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; }
  @font-face { font-family: 'Prata'; src: url('${basePath}/fonts/prata-latin-400-normal.woff2') format('woff2'); font-style: normal; font-weight: 400; font-display: swap; }
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Анти-грабли',
    'Константин Юманов',
    'психология отношений',
    'личные границы',
    'повторяющиеся сценарии',
    'внутренняя опора',
    'системный анализ',
  ],
  authors: [{ name: 'Константин Юманов' }],
  creator: 'Константин Юманов',
  alternates: { canonical: siteUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Анти-грабли',
    title,
    description,
    images: [
      {
        url: `${siteRoot}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Анти-грабли — авторская программа Константина Юманова',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteRoot}/og-image.jpg`],
  },
  icons: { icon: `${siteRoot}/favicon.svg` },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#51382f',
  colorScheme: 'light',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaces }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
