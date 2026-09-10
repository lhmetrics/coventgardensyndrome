---
title: "Welcome to Covent Garden Syndrome"
date: 2026-09-10
excerpt: "The first entry — and a quick note on how this place works."
---

This is the first story. It exists mostly to show the shape of the page:
a title, a date, a short excerpt on the homepage card, and the full text here.

## Adding a new story

To publish a new one, add a markdown file under `src/content/stories/en/`,
e.g. `src/content/stories/en/my-story.md`, with frontmatter like this one has
(`title`, `date`, `excerpt`, and optionally `cover`). Anything written below
the frontmatter becomes the body of the story — plain paragraphs, `##`
headings, and images all work.

For a Spanish or Russian version of the same story, add a file with the same
slug under `src/content/stories/es/` or `src/content/stories/ru/` — the
language is decided by which folder the file lives in, not by anything in
the frontmatter. A story only needs to exist in the languages it's actually
translated into.

To add a photo, drop the file into `public/photos/` and reference it as
`/photos/filename.jpg` — either as the `cover` in the frontmatter or inline
in the text with standard markdown: `![](/photos/filename.jpg)`.

Delete this file once the first real story is ready to take its place.
