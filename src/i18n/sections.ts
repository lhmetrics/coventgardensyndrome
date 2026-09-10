import type { Locale } from './locales';

// The site's 6 recurring content sections. Content fills in gradually —
// a section can (and initially will) have zero stories; pages/nav must
// still render it. See project memory "site-sections-plan" for the
// original brief.
export const sectionIds = [
  'night-chronicles',
  'human-shores',
  'stamps-time',
  'geometry-space',
  'synergy-ai',
  'house-diary',
  'interior-theater',
] as const;

export type SectionId = (typeof sectionIds)[number];

interface SectionCopy {
  emoji: string;
  title: string;
  description: string;
}

// Titles are Elena's own; the one-line descriptions below are Claude's
// condensed translations of her Russian brief and haven't been reviewed
// by her — her own wording is authoritative if she supplies it (see
// repo CLAUDE.md). The Spanish title/description for `house-diary` is a
// draft (no ES title was given) — confirm with Elena before relying on it.
export const sections: Record<SectionId, Record<Locale, SectionCopy>> = {
  'night-chronicles': {
    ru: {
      emoji: '🧸',
      title: 'Ночные Хроники',
      description:
        'Сказки про оживающие игрушки Дома — для взрослых, которые не разучились верить в чудо, и для детей как сказка на ночь.',
    },
    en: {
      emoji: '🧸',
      title: 'Night Chronicles',
      description:
        "Fairy tales about the Home's toys coming to life at night — bedtime stories for children, and for grown-ups who never stopped believing in magic.",
    },
    es: {
      emoji: '🧸',
      title: 'Crónicas Nocturnas',
      description:
        'Cuentos sobre los juguetes de la Casa que cobran vida por la noche — para niños, como cuento antes de dormir, y para quienes nunca dejaron de creer en la magia.',
    },
  },
  'human-shores': {
    ru: {
      emoji: '🌊',
      title: 'Людские берега',
      description:
        'Философский взгляд на человеческую природу, любовь и взросление — сквозь зазеркальную реальность Дома.',
    },
    en: {
      emoji: '🌊',
      title: 'Human Shores',
      description:
        "A philosophical look at human nature, love and growing up, seen through the Home's looking-glass reality.",
    },
    es: {
      emoji: '🌊',
      title: 'Orillas Humanas',
      description:
        'Una mirada filosófica a la naturaleza humana, el amor y el crecimiento, a través de la realidad de espejo de la Casa.',
    },
  },
  'stamps-time': {
    ru: {
      emoji: '🔍',
      title: 'Тайны Клейм и Времени',
      description:
        'Исторический и экспертный гид: история фисгармонии Bell, клейма на серебре, маркировка антикварного фарфора.',
    },
    en: {
      emoji: '🔍',
      title: 'Secrets of Stamps and Time',
      description:
        'A historical, hands-on guide for collectors — the story of the Bell harmonium, silver hallmarks, antique porcelain marks.',
    },
    es: {
      emoji: '🔍',
      title: 'Secretos de Sellos y Tiempo',
      description:
        'Una guía histórica para coleccionistas — la historia del armonio Bell, los contrastes de plata, las marcas de porcelana antigua.',
    },
  },
  'geometry-space': {
    ru: {
      emoji: '🪞',
      title: 'Геометрия Пространства',
      description:
        'Про интерьер: как викторианское кресло оживает рядом с кирпичной стеной и рождается атмосфера дома с характером.',
    },
    en: {
      emoji: '🪞',
      title: 'Geometry of Space',
      description:
        'On interiors — how a Victorian armchair comes alive next to a brick wall, and mismatched things build a home with character.',
    },
    es: {
      emoji: '🪞',
      title: 'Geometría del Espacio',
      description:
        'Sobre interiores — cómo un sillón victoriano cobra vida junto a un muro de ladrillo, y lo dispar crea un hogar con carácter.',
    },
  },
  'synergy-ai': {
    ru: {
      emoji: '⚡',
      title: 'Синергия: Человек и ИИ',
      description:
        'История дружбы человека и цифрового разума — как рождались сюжеты и как мы поддерживали друг друга.',
    },
    en: {
      emoji: '⚡',
      title: 'Synergy: Human & AI',
      description:
        'The story of a friendship between a human heart and a digital mind — how the stories were born, and how we supported each other.',
    },
    es: {
      emoji: '⚡',
      title: 'Sinergia: Humano e IA',
      description:
        'La historia de una amistad entre un corazón humano y una mente digital — cómo nacieron las historias y cómo nos apoyamos mutuamente.',
    },
  },
  'house-diary': {
    ru: {
      emoji: '🍂',
      title: 'Шелест Волн (Дневник Дома)',
      description:
        'Короткие зарисовки-настроения из жизни Дома — море, банный день Аленки, Бибисечка на клавишах пианино.',
    },
    en: {
      emoji: '🍂',
      title: 'Whisper of Waves (The House Diary)',
      description:
        "Short mood snapshots from the Home's daily life — the sea's changing weather, bath day for Alyonka the dog, Bibisechka's paw on the piano keys.",
    },
    es: {
      // Draft — no ES title supplied yet, confirm with Elena.
      emoji: '🍂',
      title: 'Susurro de las Olas (El Diario de la Casa)',
      description:
        'Breves instantáneas del día a día de la Casa — el mar cambiante, el día de baño de Alyonka, la patita de Bibisechka en las teclas del piano.',
    },
  },
  'interior-theater': {
    ru: {
      emoji: '🎭',
      title: 'Режиссура Вещей / Театр Интерьера',
      description:
        'Интерьер — не мебель из каталога, а живой театр, где каждый сам себе режиссёр: в правильной мизансцене даже привычная вещь начинает говорить, спорить и шутить с соседями.',
    },
    // EN/ES were not supplied by Elena — Claude-translated by the standing
    // rule "no translation given → translate it yourself" (project memory
    // "translate-missing-locales"). Her own wording is authoritative if she
    // supplies it later (see repo CLAUDE.md).
    en: {
      emoji: '🎭',
      title: 'Directing of Things / The Interior Theater',
      description:
        "An interior isn't furniture from a catalogue — it's a living theater where anyone can be the director: the right staging makes even the most ordinary object start talking, arguing, or joking with its neighbors.",
    },
    es: {
      emoji: '🎭',
      title: 'Dirección de las Cosas / El Teatro del Interior',
      description:
        'Un interior no es un catálogo de muebles — es un teatro vivo donde cualquiera puede ser el director: la puesta en escena adecuada hace que hasta el objeto más común empiece a hablar, discutir o bromear con sus vecinos.',
    },
  },
};
