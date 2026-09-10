import type { Locale } from './locales';

export const ui: Record<
  Locale,
  {
    kicker: string;
    title: string;
    lede: string;
    empty: string;
    back: string;
    footer: (year: number) => string;
  }
> = {
  en: {
    kicker: 'Covent Garden Syndrome',
    title: 'Stories & Photographs',
    lede: 'A slow, ongoing journal — places passed through, people met along the way, and the photographs that came out of it.',
    empty: "The first story hasn't been posted yet — check back soon.",
    back: '← All stories',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
  },
  es: {
    kicker: 'Covent Garden Syndrome',
    title: 'Historias y fotografías',
    lede: 'Un diario pausado y continuo: lugares de paso, personas encontradas en el camino, y las fotografías que surgieron de todo ello.',
    empty: 'Todavía no se ha publicado ninguna historia — vuelve pronto.',
    back: '← Todas las historias',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
  },
  ru: {
    kicker: 'Covent Garden Syndrome',
    title: 'Истории и фотографии',
    lede: 'Неспешный дневник — места, через которые лежал путь, люди, встреченные по дороге, и снимки, которые из этого получились.',
    empty: 'Первая история ещё не опубликована — загляните позже.',
    back: '← Все истории',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
  },
};
