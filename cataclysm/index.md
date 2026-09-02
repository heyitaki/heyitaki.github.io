---
layout: home
title: Cataclysm
permalink: /cataclysm
description: Cataclysm fixes the mouse for League of Legends on macOS. Free download, first-launch walkthrough, and what it sends home.
---

<style type="text/css" media="screen">
  /* Everything visual comes from the site's own stylesheet (home layout, .home-content
     serif text, highlight links, minima headings, blockquote, dark theme). These rules
     only add the spacing and the two elements the theme has no styling for. Screenshots
     for the walkthrough go under assets/cataclysm/ and replace the "screenshot:" comments. */
  .cataclysm h1 { margin-bottom: 15px; }
  .cataclysm h2 { margin-top: 35px; }
  .cataclysm .download { font-size: 19px; }
  .cataclysm details { margin: 15px 0; }
  .cataclysm details summary { cursor: pointer; }
  .cataclysm details > p { margin-top: 10px; }
  .cataclysm ol li, .cataclysm ul li { margin-bottom: 8px; }
  .cataclysm .repo { margin-top: 50px; }
</style>

<div class="home-content cataclysm" markdown="1">

# Cataclysm

Cataclysm is a menu bar app that fixes the mouse for League of Legends on macOS. Playing League in a window on a Mac, three things are wrong out of the box: the cursor slips off the game window, so an edge flick mid-fight opens a context menu on the desktop instead of moving the camera; the pointer accelerates, so the same hand motion moves the cursor a different distance depending on how fast you made it; and the scroll wheel zooms the wrong way. Cataclysm keeps the cursor inside the game window while the game is frontmost, removes the acceleration and flips the scroll direction, with sensible defaults the moment you grant it one permission.

## Download

<p class="download"><a style="--color: #82bdf5" href="/cataclysm/download?src=page">Download Cataclysm for Mac</a></p>

<p class="post-meta">macOS 13 or later, Apple silicon and Intel.</p>

> macOS will warn you on first launch because Cataclysm is not enrolled in Apple's paid developer program, not because anything was detected in the app. Clearing it takes one trip to System Settings, walked through below.

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

It deliberately does not send the name of the game or any other app, and the receiving server does not store your IP address. The heartbeat is on by default. To turn it off, open the dropdown and switch off "Send anonymous usage stats" on the main page, under "Launch at login". "Reset to defaults" under Advanced turns it back on along with every other setting. The server side is the <a style="--color: #d4d4d4" href="https://github.com/heyitaki/cataclysm/tree/main/worker" target="_blank">worker directory</a> of the source repository, so you can read exactly what is stored.

## Uninstall

Open the dropdown, turn off "Launch at login", and click "Quit Cataclysm"; quitting restores your mouse acceleration and reconnects the cursor. Then drag Cataclysm from Applications to the Trash and remove any leftover Cataclysm entry under System Settings > General > Login Items.

<p class="repo">Cataclysm is open source under the MIT license: <a style="--color: #d4d4d4" href="https://github.com/heyitaki/cataclysm" target="_blank">github.com/heyitaki/cataclysm</a>.</p>

</div>
