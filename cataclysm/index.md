---
layout: default
title: Cataclysm
permalink: /cataclysm
description: Cataclysm fixes the mouse for League of Legends on macOS. Free download and first-launch walkthrough.
---

<style type="text/css" media="screen">
  /* Text, headings, links, blockquote and the dark theme come from the site stylesheet.
     Local rules: the page title styled like the site name (minima's `title` rule), the
     download button in the theme's brand colours ($brand-color light, $d-brand dark), and
     spacing. Screenshots for the walkthrough go under assets/cataclysm/ and replace the
     "screenshot:" comments. */
  .cataclysm h1 { font-size: 25.6px; line-height: 1; color: #000; margin-bottom: 25px; }
  .cataclysm h2 { margin-top: 35px; }
  .cataclysm ol li, .cataclysm ul li { margin-bottom: 8px; }
  .cataclysm details { margin: 15px 0; }
  .cataclysm details summary { cursor: pointer; }
  .cataclysm details > p { margin-top: 10px; }
  .cataclysm .download { margin: 20px 0 8px; }
  .cataclysm .download-button {
    display: inline-block;
    padding: 9px 18px;
    border-radius: 6px;
    background: #2a7ae2;
    color: #fff;
    font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -.1px;
    text-decoration: none;
  }
  .cataclysm .download-button:hover { background: #1f63bd; color: #fff; }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .cataclysm h1 { color: inherit; }
    :root:not([data-theme="light"]) .cataclysm .download-button { background: #6cb0ff; color: #17181c; }
    :root:not([data-theme="light"]) .cataclysm .download-button:hover { background: #8ec2ff; color: #17181c; }
  }
  :root[data-theme="dark"] .cataclysm h1 { color: inherit; }
  :root[data-theme="dark"] .cataclysm .download-button { background: #6cb0ff; color: #17181c; }
  :root[data-theme="dark"] .cataclysm .download-button:hover { background: #8ec2ff; color: #17181c; }
</style>

<div class="home-content cataclysm" markdown="1">

# Cataclysm

A menu bar app that fixes the mouse for League of Legends on macOS: the cursor stays inside the game window, pointer acceleration is off, and the scroll wheel zooms the right way. Free and <a style="--color: #d4d4d4" href="https://github.com/heyitaki/cataclysm" target="_blank">open source</a>.

<p class="download"><a class="download-button" href="/cataclysm/download?src=page">Download for Mac</a></p>

<p class="post-meta">macOS 13 or later, Apple silicon and Intel.</p>

## First launch

macOS blocks the first launch because Cataclysm is not in Apple's paid developer program. Nothing was detected; it just has not been checked. Once per Mac:

1. Drag Cataclysm to Applications and open it. On the "Cataclysm" Not Opened dialog, click **Done**.
   <!-- screenshot: not-opened.png -->
2. System Settings > Privacy & Security > scroll to Security > **Open Anyway**.
   <!-- screenshot: privacy-security-open-anyway.png -->
3. Click **Open Anyway** again, then enter your password.
   <!-- screenshot: open-anyway-dialog.png -->
4. Grant Accessibility when Cataclysm asks. It needs it to see mouse events.
   <!-- screenshot: accessibility.png -->

<details>
  <summary>On macOS 13 or 14</summary>
  <p>Right-click Cataclysm in Applications, choose Open, then Open again.</p>
</details>

Everything is in the menu bar dropdown. ⌥⌘L toggles the cursor lock, even in game.

## Privacy

Once a day the app sends an anonymous heartbeat (random install id, install date, app and macOS version, CPU architecture, whether it is on). No game name, no IP stored. Switch it off under "Send anonymous usage stats" in the dropdown.

## Uninstall

Turn off "Launch at login", quit from the dropdown, drag Cataclysm to the Trash.

</div>
