---
layout: default
title: Cataclysm
permalink: /cataclysm
description: Cataclysm fixes the mouse for League of Legends on macOS. Free download, first-launch walkthrough, and what it sends home.
---

<style type="text/css" media="screen">
  /* Self-contained page styles, scoped under .cataclysm so nothing leaks into the rest of
     the site. Literal colors on purpose: this page never touches the site's Sass, and the
     dark rules mirror _sass/dark.scss (follow the OS unless the pikachu toggle forced a
     theme). Screenshots for the walkthrough go under assets/cataclysm/ and replace the
     "screenshot:" comments below. */
  .cataclysm { font-size: 17px; line-height: 1.5; }
  .cataclysm h1 { margin-top: 0; }
  .cataclysm h2 { margin-top: 2em; }
  .cataclysm ol li, .cataclysm ul li { margin-bottom: 0.4em; }
  .cataclysm .download { margin: 1em 0; }
  .cataclysm .download-button {
    display: inline-block;
    padding: 0.7em 1.4em;
    border-radius: 8px;
    background: #2a7ae2;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
  .cataclysm .download-button:hover { color: #fff; background: #1f63bd; }
  .cataclysm .download-meta { display: block; margin-top: 0.5em; color: rgb(116, 121, 126); }
  .cataclysm .warning {
    padding: 0.8em 1em;
    border-left: 4px solid #2a7ae2;
    background: rgba(42, 122, 226, 0.08);
    border-radius: 0 6px 6px 0;
  }
  .cataclysm details {
    margin: 1em 0;
    padding: 0.6em 1em;
    border: 1px solid rgb(227, 230, 232);
    border-radius: 6px;
  }
  .cataclysm details summary { cursor: pointer; font-weight: 600; }
  .cataclysm details[open] summary { margin-bottom: 0.5em; }
  .cataclysm dl dt { font-weight: 600; margin-top: 0.6em; }
  .cataclysm dl dd { margin-left: 0; }
  .cataclysm .repo { margin-top: 3em; color: rgb(116, 121, 126); }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .cataclysm .download-button { background: #6cb0ff; color: #17181c; }
    :root:not([data-theme="light"]) .cataclysm .download-button:hover { background: #8ec2ff; color: #17181c; }
    :root:not([data-theme="light"]) .cataclysm .warning { border-left-color: #6cb0ff; background: rgba(108, 176, 255, 0.1); }
    :root:not([data-theme="light"]) .cataclysm details { border-color: #33363d; }
    :root:not([data-theme="light"]) .cataclysm .download-meta, :root:not([data-theme="light"]) .cataclysm .repo { color: #9aa0a6; }
  }
  :root[data-theme="dark"] .cataclysm .download-button { background: #6cb0ff; color: #17181c; }
  :root[data-theme="dark"] .cataclysm .download-button:hover { background: #8ec2ff; color: #17181c; }
  :root[data-theme="dark"] .cataclysm .warning { border-left-color: #6cb0ff; background: rgba(108, 176, 255, 0.1); }
  :root[data-theme="dark"] .cataclysm details { border-color: #33363d; }
  :root[data-theme="dark"] .cataclysm .download-meta, :root[data-theme="dark"] .cataclysm .repo { color: #9aa0a6; }
</style>

<div class="cataclysm" markdown="1">

# Cataclysm

Cataclysm is a menu bar app that fixes the mouse for League of Legends on macOS. Playing League in a window on a Mac, three things are wrong out of the box: the cursor slips off the game window, so an edge flick mid-fight opens a context menu on the desktop instead of moving the camera; the pointer accelerates, so the same hand motion moves the cursor a different distance depending on how fast you made it; and the scroll wheel zooms the wrong way. Cataclysm keeps the cursor inside the game window while the game is frontmost, removes the acceleration and flips the scroll direction, with sensible defaults the moment you grant it one permission.

## Download

<p class="download">
  <a class="download-button" href="/cataclysm/download?src=page">Download Cataclysm for Mac</a>
  <span class="download-meta">macOS 13 or later, Apple silicon and Intel</span>
</p>

<p class="warning">macOS will warn you on first launch because Cataclysm is not enrolled in Apple's paid developer program, not because anything was detected in the app; clearing it takes one trip to System Settings, walked through below.</p>

## First launch

Open the downloaded image, drag Cataclysm onto the Applications shortcut next to it, eject the image, and open Cataclysm from Applications. macOS refuses that first launch: it cannot check Cataclysm against Apple's records, so the warning only says Apple has not looked at it. You go through these four steps once per Mac, and after that Cataclysm opens like any other app. The screenshots were captured on macOS 26; macOS 15 shows the same dialogs.

1. The dialog "Cataclysm" Not Opened appears, saying Apple could not verify it is free of malware. Click **Done**.
   <!-- screenshot: not-opened.png -->
2. Open System Settings, go to Privacy & Security, and scroll down to Security. A line says Cataclysm was blocked. Click **Open Anyway**.
   <!-- screenshot: privacy-security-open-anyway.png -->
3. A dialog titled Open "Cataclysm"? appears with Move to Trash, Open Anyway and Done. Click **Open Anyway**.
   <!-- screenshot: open-anyway-dialog.png -->
4. Enter an administrator name and password.
   <!-- screenshot: administrator-prompt.png -->

Cataclysm launches and never asks again on this Mac.

<details>
  <summary>On macOS 13 or 14</summary>
  <p>The route is shorter: right-click (or Control-click) Cataclysm in Applications, choose Open, then click Open again in the dialog.</p>
</details>

## Step two: Accessibility

On first run Cataclysm asks for the Accessibility permission and walks you through granting it in System Settings > Privacy & Security > Accessibility. It needs Accessibility to see mouse events; nothing works until it is granted.
<!-- screenshot: accessibility.png -->

Then look for the Cataclysm icon in the menu bar. The dropdown has the on/off switches, the application picker and a scroll speed slider; the rest is under Advanced. Press ⌥⌘L to toggle the cursor lock at any time, even while the game has focus.

## What it sends

Once a day, Cataclysm sends one small heartbeat to `akshath.me/cataclysm/ping` so I can see how many installs are alive and whether they keep working. It contains exactly these fields and nothing else:

- `install`: a random install id, generated once and stored in the app's preferences
- `created`: the date the install id was generated
- `version`: the app version
- `macos`: the macOS version
- `arch`: the CPU architecture, `arm64` or `x86_64`
- `enabled`: whether the app is switched on
- `jailEnabled`: whether the cursor lock is switched on

It deliberately does not send the name of the game or any other app, and the receiving server does not store your IP address. The heartbeat is on by default. To turn it off, open the dropdown and switch off "Send anonymous usage stats" on the main page, under "Launch at login". "Reset to defaults" under Advanced turns it back on along with every other setting. The server side is the `worker/` directory of the source repository, so you can read exactly what is stored.

## Uninstall

Open the dropdown, turn off "Launch at login", and click "Quit Cataclysm"; quitting restores your mouse acceleration and reconnects the cursor. Then drag Cataclysm from Applications to the Trash and remove any leftover Cataclysm entry under System Settings > General > Login Items.

<p class="repo">Cataclysm is open source under the MIT license: <a href="https://github.com/heyitaki/cataclysm">github.com/heyitaki/cataclysm</a>.</p>

</div>
