---
layout: default
title: Cataclysm
permalink: /cataclysm
description: Cataclysm fixes the mouse for League of Legends and other games on macOS. Free download and first-launch walkthrough.
---

<style type="text/css" media="screen">
  /* Text, headings, links, and the dark theme come from the site stylesheet. Local rules,
     all scoped under .cataclysm so the rest of the site keeps its blue: the page title
     styled like the site name (minima's `title` rule), a gold accent after Jarvan IV's
     ultimate (the app is named for it) on the download button and the step numbers, and
     spacing. Screenshots live under assets/cataclysm/ and are 2x captures, so each is
     shown at half its pixel width; the walkthrough ones replace the "screenshot:"
     comments. */
  .cataclysm { --gold: #b9782a; --gold-deep: #a4671f; --gold-ink: #fff6e3; }
  /* Back link above the title, styled like the site nav's text links (grey Inter, darker on
     hover). It sits outside .home-content so the underline-highlight link style skips it. */
  .cataclysm-back { font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif; letter-spacing: -.1px; font-size: 15px; margin-bottom: 18px; }
  .cataclysm-back a { color: rgb(116, 121, 126); }
  .cataclysm-back a:hover { color: rgb(51, 56, 60); }
  .cataclysm h1 { font-size: 25.6px; line-height: 1; color: #000; margin-bottom: 25px; }
  .cataclysm h2 { margin-top: 35px; }
  /* The theme sets no font on code. Monospace fonts draw ⌥ and ⌘ undersized, so those two
     glyphs come from the system font inside the span. */
  .cataclysm code { font-family: Menlo, "SF Mono", Consolas, "Liberation Mono", monospace; font-size: 14px; letter-spacing: .5px; padding: 2px 6px; }
  .cataclysm code .sym { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 15px; }
  .cataclysm ol li { margin-bottom: 8px; }
  .cataclysm ol li::marker { color: var(--gold-deep); font-family: Inter, -apple-system, sans-serif; }
  .cataclysm .download { margin: 22px 0 0; }
  .cataclysm .dropdown img { display: block; width: 320px; max-width: 100%; height: auto; }
  .cataclysm .download-button {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 10px 22px 9px;
    border-radius: 8px;
    background: linear-gradient(180deg, var(--gold), var(--gold-deep));
    background-size: 100% 100%;
    box-shadow: 0 1px 2px rgba(60, 35, 0, 0.2);
    color: var(--gold-ink);
    font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -.1px;
    line-height: 1.2;
    text-decoration: none;
    transition: filter .15s;
  }
  /* The site's .home-content a:hover rule shrinks padding-bottom and swaps the background
     size for its underline effect; restate both so the button keeps its shape. */
  .cataclysm .download-button:hover {
    padding-bottom: 9px;
    background-size: 100% 100%;
    color: var(--gold-ink);
    filter: brightness(1.07);
  }
  .cataclysm .download-button small {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0;
    opacity: 0.85;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .cataclysm h1 { color: inherit; }
    :root:not([data-theme="light"]) .cataclysm-back a { color: #9aa0a6; }
    :root:not([data-theme="light"]) .cataclysm-back a:hover { color: #c7cbd1; }
    :root:not([data-theme="light"]) .cataclysm ol li::marker { color: var(--gold); }
    /* The dark theme restyles every .home-content link's background-image and colour with
       higher specificity than the button rule; restate the gradient here. */
    :root:not([data-theme="light"]) .cataclysm .download-button {
      background-image: linear-gradient(180deg, var(--gold), var(--gold-deep));
      color: var(--gold-ink);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    }
  }
  :root[data-theme="dark"] .cataclysm h1 { color: inherit; }
  :root[data-theme="dark"] .cataclysm-back a { color: #9aa0a6; }
  :root[data-theme="dark"] .cataclysm-back a:hover { color: #c7cbd1; }
  :root[data-theme="dark"] .cataclysm ol li::marker { color: var(--gold); }
  :root[data-theme="dark"] .cataclysm .download-button {
    background-image: linear-gradient(180deg, var(--gold), var(--gold-deep));
    color: var(--gold-ink);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  }
</style>

<p class="cataclysm-back"><a href="/">← Home</a></p>

<div class="home-content cataclysm" markdown="1">

# Cataclysm

Cataclysm is a menu bar app that fixes mouse interactions for League of Legends and other games on macOS. It locks the cursor to the game in windowed mode, disables pointer acceleration, and inverts scroll directions. Free and <a style="--color: #d4d4d4" href="https://github.com/heyitaki/cataclysm" target="_blank">open source</a>.

<p class="download"><a class="download-button" href="/cataclysm/download?src=page">Download for Mac<small>macOS 13 or later</small></a></p>

## First launch

macOS blocks the first launch because Cataclysm is not in Apple's paid developer program (I want to keep it free). Once per Mac:

1. Drag Cataclysm to Applications and open it. On the "Cataclysm" Not Opened dialog, click **Done**.
   <!-- screenshot: not-opened.png -->
2. System Settings > Privacy & Security > scroll to Security > **Open Anyway**.
   <!-- screenshot: privacy-security-open-anyway.png -->
3. Click **Open Anyway** again, then enter your password.
   <!-- screenshot: open-anyway-dialog.png -->
4. Grant Accessibility when Cataclysm asks so that it is able to detect mouse events.
   <!-- screenshot: accessibility.png -->

## Usage

Everything is in the menu bar dropdown. Cursor lock is only enforced while the game is focused (so you can tab out), but if you need it, <code><span class="sym">⌥⌘</span>L</code> toggles the cursor lock even in-game.

<p class="dropdown"><img src="/assets/cataclysm/dropdown.png" alt="Cataclysm's menu bar dropdown"></p>

## Uninstall

Uncheck "Launch at login" and quit from the dropdown, then move Cataclysm to Trash.

</div>
