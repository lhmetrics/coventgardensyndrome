---
title: "Welcome to Covent Garden Syndrome"
date: 2026-09-10
excerpt: "The first entry — and a quick note on how this place works."
---

This is the first story. It exists mostly to show the shape of the page:
a title, a date, a short excerpt on the homepage card, and the full text here.

## Adding a new story

To publish a new one, add a markdown file under `src/content/stories/`, e.g.
`src/content/stories/my-story.md`, with frontmatter like this one has
(`title`, `date`, `excerpt`, and optionally `cover`). Anything written below
the frontmatter becomes the body of the story — plain paragraphs, `##`
headings, and images all work.

To add a photo, drop the file into `public/photos/` and reference it as
`/photos/filename.jpg` — either as the `cover` in the frontmatter or inline
in the text with standard markdown: `![](/photos/filename.jpg)`.

Delete this file once the first real story is ready to take its place.
