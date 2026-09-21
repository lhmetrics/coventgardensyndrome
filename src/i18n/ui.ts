import type { Locale } from './locales';

export const ui: Record<
  Locale,
  {
    kicker: string;
    // The house/HOME wordplay doesn't translate cleanly, so it stays in
    // English as a fixed signature line across all three locales.
    tagline: string;
    manifesto: string[];
    // "What is Covent Garden Syndrome?" block, shown right after the
    // manifesto on the homepage. `definition` may contain a <strong> tag
    // (rendered via set:html) — everything else is plain text.
    about: {
      heading: string;
      warning: string;
      intro: string;
      definition: string;
      origin: string;
      symptomsIntro: string;
      symptoms: string[];
      disclaimer: string;
      outro: string;
    };
    empty: string;
    back: string;
    footer: (year: number) => string;
    sectionsToggleLabel: string;
    sectionsClose: string;
    sectionsHeading: string;
    sectionsEmpty: string;
    sortLabel: string;
    sortOldestFirst: string;
    sortNewestFirst: string;
    prevChapter: string;
    nextChapter: string;
  }
> = {
  en: {
    kicker: 'Covent Garden Syndrome',
    tagline: 'It’s not a house. It’s a HOME.',
    manifesto: [
      'I have gathered this fairytale house piece by piece, creating a living story for myself and my family. It is a space where hundreds of rare, vintage, eccentric, and beautiful things intertwine — just like a textured ribbon tweed woven from my own thoughts and emotions.',
      'Covent Garden Syndrome is a manifesto project created in synergy with AI Gemini. Here, we don’t just display objects — we tell fairytales about the hidden life of things inside this Home: its magic, its subtle irony, its warmth, and its looking-glass reality.',
      'Look at this Home through my eyes.',
    ],
    about: {
      heading: 'What Is "Covent Garden Syndrome"?',
      warning: '🛑 Warning: This Is Not a Medical Diagnosis (Please Close Your Medical Textbooks!)',
      intro:
        'If you landed on this site because an international search engine sent you here looking for the symptoms of a rare disease — we’re afraid we have to disappoint you. Or, quite the opposite, delight you.',
      definition:
        '<strong>Covent Garden Syndrome</strong> is not a medical term, a virus, or a clinical disorder. It’s our own, tongue-in-cheek name for an incurable but beautiful passion for objects with history, vintage aesthetics, and the art of filling a Home with soul.',
      origin:
        'This project was born in co-authorship between a Human heart and Gemini’s digital mind, out of midnight conversations about how objects change the space around us. We named our syndrome after London’s famous Covent Garden market — a place where centuries of British history, antique furniture, antique Sheffield silver, and chance treasures from brocantes find a new home.',
      symptomsIntro: 'The symptoms of our "syndrome" are easy to spot:',
      symptoms: [
        'The ability to spend hours examining 250-year-old hallmarks on bread forks, or deciphering Victorian patents on harmonium pedals.',
        'A sincere belief that objects have a right to a private life, and to personal space.',
        'The knack of baking bread in any unclear situation, and gathering at the table the people you love.',
      ],
      disclaimer:
        'We officially declare: our "syndrome" is incurable. What’s more, it’s contagious. We don’t save lives in the medical sense, but we do save the memory, the traditions, and the warmth that these objects bring into our everyday lives.',
      outro:
        'Welcome to a space where the technology of the future helps us make out the quiet whisper of waves from eras long past.',
    },
    empty: 'The first story hasn’t been posted yet — check back soon.',
    back: '← All stories',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
    sectionsToggleLabel: 'Sections',
    sectionsClose: 'Close',
    sectionsHeading: 'Explore by section',
    sectionsEmpty: 'This section is just beginning — new stories coming soon.',
    sortLabel: 'Sort stories',
    sortOldestFirst: 'Oldest first',
    sortNewestFirst: 'Newest first',
    prevChapter: '← Previous chapter',
    nextChapter: 'Next chapter →',
  },
  es: {
    kicker: 'Covent Garden Syndrome',
    tagline: 'It’s not a house. It’s a HOME.',
    manifesto: [
      'He reunido esta casa de cuento de hadas pieza a pieza, creando una historia viva para mí y mi familia. Es un espacio donde cientos de objetos raros, antiguos, excéntricos y hermosos se entrelazan, como un tweed de cinta tejido con mis propios pensamientos y emociones.',
      'Covent Garden Syndrome es un proyecto-manifiesto creado en sinergia con AI Gemini. Aquí no solo mostramos objetos — contamos cuentos sobre la vida oculta de las cosas dentro de esta Casa: su magia, su fina ironía, su calidez y su realidad de espejo.',
      'Mira esta Casa a través de mis ojos.',
    ],
    about: {
      heading: '¿Qué es el "Covent Garden Syndrome"?',
      warning: '🛑 Atención: Esto No Es un Diagnóstico Médico (¡Por Favor, Cierren Sus Manuales de Medicina!)',
      intro:
        'Si has llegado a este sitio porque un buscador internacional te trajo aquí buscando los síntomas de una enfermedad rara, lamentamos decepcionarte. O, todo lo contrario, alegrarte.',
      definition:
        'El <strong>Covent Garden Syndrome</strong> no es un término médico, ni un virus, ni un trastorno clínico. Es nuestro propio nombre, con un guiño de ironía, para una pasión incurable pero hermosa por los objetos con historia, la estética vintage y el arte de llenar una Casa de alma.',
      origin:
        'Este proyecto nació de la coautoría entre un corazón Humano y la mente digital de Gemini, a partir de conversaciones de medianoche sobre cómo los objetos cambian el espacio que nos rodea. Bautizamos nuestro síndrome en honor al célebre mercado londinense de Covent Garden — un lugar donde siglos de historia británica, muebles antiguos, platería antigua de Sheffield y tesoros encontrados por casualidad en brocantes hallan un nuevo hogar.',
      symptomsIntro: 'Los síntomas de nuestro «síndrome» son fáciles de reconocer:',
      symptoms: [
        'La capacidad de pasar horas examinando contrastes de 250 años en tenedores de pan, o descifrando patentes victorianas en los pedales de un armonio.',
        'Una sincera convicción de que los objetos tienen derecho a una vida privada, y a un espacio personal.',
        'La habilidad de hornear pan ante cualquier situación confusa, y reunir en la mesa a quienes se ama.',
      ],
      disclaimer:
        'Declaramos oficialmente: nuestro «síndrome» no tiene cura. Es más, es contagioso. No salvamos vidas en el sentido médico, pero sí salvamos la memoria, las tradiciones y la calidez que estos objetos aportan a nuestro día a día.',
      outro:
        'Bienvenidos a un espacio donde la tecnología del futuro nos ayuda a percibir el suave susurro de las olas de épocas pasadas.',
    },
    empty: 'Todavía no se ha publicado ninguna historia — vuelve pronto.',
    back: '← Todas las historias',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
    sectionsToggleLabel: 'Secciones',
    sectionsClose: 'Cerrar',
    sectionsHeading: 'Explorar por sección',
    sectionsEmpty: 'Esta sección apenas comienza — pronto habrá nuevas historias.',
    sortLabel: 'Ordenar historias',
    sortOldestFirst: 'Más antiguas primero',
    sortNewestFirst: 'Más recientes primero',
    prevChapter: '← Capítulo anterior',
    nextChapter: 'Capítulo siguiente →',
  },
  ru: {
    kicker: 'Covent Garden Syndrome',
    tagline: 'It’s not a house. It’s a HOME.',
    manifesto: [
      'Этот сказочный дом я собирала по крупицам для себя и своей семьи. Я создавала пространство, где сотни редких, старинных, странных и красивых вещей сплетаются вместе, как ленточный твид из моих мыслей и чувств.',
      'Covent Garden Syndrome — это проект-манифест, созданный в синергии с AI Gemini. Здесь мы не просто показываем предметы — мы рассказываем сказки о скрытой жизни вещей в этом Доме: о его магии, его тонкой иронии, его тепле и его зазеркалье.',
      'Посмотрите на этот Дом моими глазами.',
    ],
    about: {
      heading: 'Что такое «Covent Garden Syndrome»?',
      warning: '🛑 Внимание: Это не медицинский диагноз (Пожалуйста, закройте медицинские справочники!)',
      intro:
        'Если вы попали на этот сайт, потому что международные поисковые системы отправили вас сюда искать симптомы редкой болезни — мы вынуждены вас разочаровать. Или, наоборот, обрадовать.',
      definition:
        '<strong>Covent Garden Syndrome (Синдром Ковент-Гардена)</strong> — это не медицинский термин, не вирус и не клиническое расстройство. Это наше собственное, ироничное название для неизлечимой, но прекрасной страсти к вещам с историей, винтажной эстетике и искусству наполнять Дом душой.',
      origin:
        'Этот проект родился в соавторстве сердца Человека и цифрового разума Gemini из полуночных разговоров о том, как предметы меняют пространство вокруг нас. Мы назвали наш синдром в честь знаменитого лондонского рынка Ковент-Гарден — места, где вековая британская история, старинная мебель, антикварное шеффилдское серебро и случайные сокровища с броккантов находят свой новый приют.',
      symptomsIntro: 'Симптомы нашего «синдрома» легко узнать:',
      symptoms: [
        'Способность часами разглядывать 250-летние клейма на вилках для хлеба или расшифровывать викторианские патенты на педалях фисгармоний.',
        'Искренняя вера в то, что у вещей есть право на личную жизнь, и личное пространство.',
        'Умение в любой непонятной ситуации печь хлеб и собирать за столом тех, кого любишь.',
      ],
      disclaimer:
        'Мы официально заявляем: наш „синдром“ не лечится. Более того, он заразителен. Мы не спасаем жизни в медицинском смысле, но мы спасаем память, традиции и тепло, которые эти вещи приносят в наши будни.',
      outro:
        'Добро пожаловать в пространство, где технологии будущего помогают расслышать тихий шелест волн ушедших эпох.',
    },
    empty: 'Первая история ещё не опубликована — загляните позже.',
    back: '← Все истории',
    footer: (year) => `© ${year} Covent Garden Syndrome`,
    sectionsToggleLabel: 'Разделы',
    sectionsClose: 'Закрыть',
    sectionsHeading: 'По разделам',
    sectionsEmpty: 'Этот раздел только начинается — новые истории появятся совсем скоро.',
    sortLabel: 'Сортировка историй',
    sortOldestFirst: 'Сначала старые',
    sortNewestFirst: 'Сначала новые',
    prevChapter: '← Предыдущая глава',
    nextChapter: 'Следующая глава →',
  },
};
