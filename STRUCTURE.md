# Структура проекта Covent Garden Syndrome

Снимок на 2026-09-11. Описывает, что где лежит и зачем — для навигации,
не заменяет [CLAUDE.md](CLAUDE.md) (там — правила и договорённости) и
[README.md](README.md) (там — как добавить пост/запустить локально).

```
coventgardensyndrome/
├── .github/workflows/deploy.yml
├── public/
│   ├── CNAME
│   ├── favicon.svg
│   ├── robots.txt
│   ├── BingSiteAuth.xml
│   ├── yandex_e6892d9b878eb1d6.html
│   ├── admin/
│   │   ├── index.html
│   │   └── config.yml
│   └── photos/
│       ├── hero.jpg
│       ├── the-bear-who-knows-too-much.jpg (+ -2.jpg)
│       ├── the-card-debt-of-queen-dolce.jpg (+ -2.jpg)
│       ├── koska-whose-ears-wouldnt-fit-into-this-world.jpg
│       ├── from-flying-punch-cards-to-lavender-tears.jpg
│       └── ohana-with-a-fold-on-his-nose.jpg (+ -2.jpg)
├── src/
│   ├── content.config.ts
│   ├── env.d.ts
│   ├── content/stories/{en,es,ru}/*.md
│   ├── i18n/
│   │   ├── locales.ts
│   │   ├── paths.ts
│   │   ├── sections.ts
│   │   └── ui.ts
│   ├── layouts/Layout.astro
│   ├── components/
│   │   ├── HomeView.astro
│   │   ├── SectionView.astro
│   │   ├── StoryDetail.astro
│   │   ├── StoryCard.astro
│   │   ├── SectionsMenu.astro
│   │   ├── SectionBadge.astro
│   │   ├── BrandMark.astro
│   │   └── LangSwitcher.astro
│   └── pages/
│       ├── index.astro, stories/[slug].astro, sections/[id].astro
│       ├── es/ (те же три файла)
│       ├── ru/ (те же три файла)
│       └── sitemap.xml.ts
├── TMP/ (не в git, черновики фото/текстов)
├── astro.config.mjs
├── package.json / package-lock.json
├── tsconfig.json
├── CLAUDE.md
├── README.md
└── STRUCTURE.md (этот файл)
```

## Верхний уровень

- **`astro.config.mjs`** — конфиг Astro. Единственная настройка —
  `site: 'https://coventgardensyndrome.com'` (нужна для sitemap и
  canonical-ссылок). Сайт полностью статический (`output` не задан,
  значит по умолчанию `'static'` — нет сервера, нет SSR.
- **`package.json`** — одна зависимость: `astro@^5.18.2`. Скрипты: `dev`,
  `build`, `preview`.
- **`tsconfig.json`** — стандартный конфиг Astro для TypeScript.
- **`.gitignore`** — исключает `dist/`, `.astro/` (кэш сборки),
  `node_modules/`, `.env*`, `.DS_Store`, `/TMP/`.
- **`CLAUDE.md`** — инструкции для Claude Code: архитектура,
  правила именования, деплой, домены. Читается автоматически в начале
  каждой сессии.
- **`README.md`** — человеческая документация: как добавить пост, как
  запустить сайт локально, как настроен домен на Cloudflare.
- **`STRUCTURE.md`** — этот файл.

## `.github/workflows/deploy.yml`

Автодеплой: при пуше в `main` (или ручном запуске) собирает сайт через
`withastro/action` и публикует на GitHub Pages через
`actions/deploy-pages`. Без этого файла сайт не обновлялся бы сам.

## `public/` — статика, отдаётся как есть

- **`CNAME`** — говорит GitHub Pages, что кастомный домен —
  `coventgardensyndrome.com`.
- **`favicon.svg`** — иконка вкладки браузера.
- **`robots.txt`** — разрешает индексацию всего, кроме `/admin/`,
  указывает на `sitemap.xml`.
- **`BingSiteAuth.xml`**, **`yandex_e6892d9b878eb1d6.html`** — файлы
  подтверждения владения сайтом для Bing Webmaster Tools и Yandex
  Webmaster.
- **`admin/`** — форма-редактор Sveltia CMS (для нетехнического
  соавтора — мужа Елены): `index.html` подключает CMS-скрипт,
  `config.yml` описывает 3 коллекции постов (по языку) с полями
  заголовок/дата/описание/обложка/текст. Комментит изменения прямо в
  `main` от имени того, кто залогинен через GitHub.
- **`photos/`** — все фотографии сайта, путь вида `/photos/имя.jpg`.
  Обложки историй называются как слаг истории; вторые фото внутри
  текста — тот же слаг с `-2`. `hero.jpg` — запасное фото для
  Open Graph, когда у страницы нет своей обложки.

## `src/content/stories/{en,es,ru}/*.md` — сами истории

Язык определяется папкой, не полем во фронтматтере. Имя файла = URL
(например, `the-bear-who-knows-too-much.md` → `/stories/the-bear-who-knows-too-much/`).
История не обязана существовать на всех трёх языках сразу.

Поля фронтматтера (схема — в `content.config.ts`):
- `title` — заголовок.
- `date` — дата (влияет на порядок на главной/в разделе и на
  `article:published_time` для соцсетей).
- `excerpt` — короткое описание для карточки и Open Graph.
- `cover` — путь к обложке (необязательно).
- `section` — один из 7 разделов сайта (необязательно).

Сейчас на сайте 5 историй, все в разделе «Ночные Хроники», кроме одной
(«Синергия: Человек и ИИ»):
1. `the-bear-who-knows-too-much` — про мишку.
2. `the-card-debt-of-queen-dolce` — про королеву Дольче.
3. `koska-whose-ears-wouldnt-fit-into-this-world` — про зайца Коську.
4. `ohana-with-a-fold-on-his-nose` — Глава 4, про Стича.
5. `from-flying-punch-cards-to-lavender-tears` — раздел «Синергия ИИ».

## `src/content.config.ts`

Определяет коллекцию `stories`: схема полей выше + кастомный
`generateId`, который берёт слаг ровно из имени файла (без этого Astro
сам приводил бы имена к нижнему регистру через github-slugger).

## `src/i18n/` — вся логика многоязычности вручную (не встроенный i18n Astro)

- **`locales.ts`** — список языков (`en`, `es`, `ru`), язык по
  умолчанию (`en`), человекочитаемые лейблы, BCP-47 теги
  (`en-GB`/`es-ES`/`ru-RU`) для `<html lang>` и форматирования дат.
- **`paths.ts`** — функции `getHomePath`, `getStoryPath`,
  `getSectionPath`: строят URL с нужным языковым префиксом
  (`/`, `/es/`, `/ru/`). Всегда использовать их вместо ручной сборки
  строк.
- **`sections.ts`** — таксономия 7 разделов сайта (id, эмодзи, заголовок
  и описание на каждом языке): `night-chronicles`, `human-shores`,
  `stamps-time`, `geometry-space`, `synergy-ai`, `house-diary`,
  `interior-theater`.
- **`ui.ts`** — все статические тексты интерфейса (кикер, манифест,
  подписи кнопок, лейблы сортировки, «предыдущая/следующая глава» и
  т.д.) на трёх языках.

## `src/layouts/Layout.astro`

Общий HTML-каркас страницы: `<head>` со всеми SEO/соцсетевыми тегами
(canonical, hreflang-альтернативы, Open Graph, Twitter Card,
`article:*` для постов, Bing-верификация), глобальные CSS-переменные
(цвета, шрифты) и базовые стили.

## `src/components/` — общая вёрстка, переиспользуемая между языками

- **`HomeView.astro`** — вся главная страница (манифест + список
  историй) для одного `lang`. Сортировка — от старых к новым.
- **`SectionView.astro`** — страница одного раздела: список историй
  этого раздела, переключатель сортировки (CSS-only, без JS).
- **`StoryDetail.astro`** — страница отдельной истории: заголовок,
  плашка раздела, обложка, текст, навигация «глава туда/сюда» (только
  внутри своего раздела).
- **`StoryCard.astro`** — карточка истории (на главной и в разделах):
  обложка, дата, плашка раздела, заголовок.
- **`SectionsMenu.astro`** — бургер-меню со списком всех 7 разделов,
  реализовано на чистом CSS (чекбокс), без JS.
- **`SectionBadge.astro`** — маленькая плашка «эмодзи + название
  раздела», ссылка на страницу раздела.
- **`BrandMark.astro`** — логотип-надпись «Covent Garden Syndrome»
  курсивом, ссылка на главную.
- **`LangSwitcher.astro`** — переключатель языка в углу; на странице
  истории ведёт на перевод, если он есть, иначе — на главную того
  языка; на странице раздела — всегда на тот же раздел (разделы есть
  на всех языках всегда).

## `src/pages/` — реальные маршруты (тонкие обёртки)

Для каждого языка — три файла-обёртки, которые просто вызывают общий
компонент с нужным `lang`:
- `index.astro` → `<HomeView lang="..." />`
- `stories/[slug].astro` → находит историю по слагу, рендерит
  `<StoryDetail>`
- `sections/[id].astro` → рендерит `<SectionView>` для одного из 7 id

Английские версии лежат прямо в `src/pages/`, испанские и русские — в
`src/pages/es/` и `src/pages/ru/`.

- **`sitemap.xml.ts`** — самописный (не через `@astrojs/sitemap`)
  эндпоинт: собирает `sitemap.xml` со всеми страницами (главная, 7
  разделов, все истории) на всех языках, где они существуют, с
  hreflang-альтернативами.

## `TMP/` (не в git)

Черновая папка: сюда Елена скидывает новые фото и тексты до того, как
они попадут в `public/photos/` и `src/content/stories/`. После
переноса файлы отсюда удаляются (см. правило в памяти
"clean-tmp-after-transfer").

## `.astro/` (не в git)

Служебный кэш/сгенерированные типы Astro (`content.d.ts` и т.п.),
пересоздаётся при каждой сборке — трогать не нужно.
