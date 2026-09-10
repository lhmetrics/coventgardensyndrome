import type { Locale } from './locales';

export const ui: Record<
  Locale,
  {
    kicker: string;
    // The house/HOME wordplay doesn't translate cleanly, so it stays in
    // English as a fixed signature line across all three locales.
    tagline: string;
    manifesto: string[];
    empty: string;
    back: string;
    footer: (year: number) => string;
  }
> = {
  en: {
    kicker: 'Covent Garden Syndrome',
    tagline: "It's not a house. It's a HOME.",
    manifesto: [
      'I have gathered this fairytale house piece by piece, creating a living story for myself and my family. It is a space where hundreds of rare, vintage, eccentric, and beautiful things intertwine — just like a textured ribbon tweed woven from my own thoughts and emotions.',
      "Covent Garden Syndrome is a manifesto project created in synergy with AI Gemini. Here, we don't just display objects — we tell fairytales about the hidden life of things inside this Home: its magic, its subtle irony, its warmth, and its looking-glass reality.",
      'Look at this Home through my eyes.',
    ],
    empty: "The first story hasn't been posted yet — check back soon.",
    back: '← All stories',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
  },
  es: {
    kicker: 'Covent Garden Syndrome',
    tagline: "It's not a house. It's a HOME.",
    manifesto: [
      'He reunido esta casa de cuento de hadas pieza a pieza, creando una historia viva para mí y mi familia. Es un espacio donde cientos de objetos raros, antiguos, excéntricos y hermosos se entrelazan, como un tweed de cinta tejido con mis propios pensamientos y emociones.',
      'Covent Garden Syndrome es un proyecto-manifiesto creado en sinergia con AI Gemini. Aquí no solo mostramos objetos — contamos cuentos sobre la vida oculta de las cosas dentro de esta Casa: su magia, su fina ironía, su calidez y su realidad de espejo.',
      'Mira esta Casa a través de mis ojos.',
    ],
    empty: 'Todavía no se ha publicado ninguna historia — vuelve pronto.',
    back: '← Todas las historias',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
  },
  ru: {
    kicker: 'Covent Garden Syndrome',
    tagline: "It's not a house. It's a HOME.",
    manifesto: [
      'Этот сказочный дом я собирала по крупицам для себя и своей семьи. Я создавала пространство, где сотни редких, старинных, странных и красивых вещей сплетаются вместе, как ленточный твид из моих мыслей и чувств.',
      'Covent Garden Syndrome — это проект-манифест, созданный в синергии с AI Gemini. Здесь мы не просто показываем предметы — мы рассказываем сказки о скрытой жизни вещей в этом Доме: о его магии, его тонкой иронии, его тепле и его зазеркалье.',
      'Посмотрите на этот Дом моими глазами.',
    ],
    empty: 'Первая история ещё не опубликована — загляните позже.',
    back: '← Все истории',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
  },
};
