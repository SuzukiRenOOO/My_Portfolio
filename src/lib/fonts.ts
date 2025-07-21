import {
  Inter,
  JetBrains_Mono,
  Noto_Sans_JP,
  Plus_Jakarta_Sans,
} from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

const fontJapanese = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-japanese',
  weight: ['400', '700'],
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
  fontJapanese.variable,
];
