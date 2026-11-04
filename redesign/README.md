# Redesign trial

A redesign of the funnel in a black and gold style, kept apart from the live pages so it can be tried
without touching them:

| Page | Address |
| --- | --- |
| Opt-in | `/redesign/discord` |
| VSL, application and calendar | `/redesign/apply` |
| After booking | `/redesign/booked` |

Everything for the trial is in this folder:

- `style.css` holds the design.
- `funnel.js` holds the behaviour (opt-in, application questions, GoHighLevel calendar, videos, results wall).
- Each page is the `index.html` in its own folder.
- `img/` holds the photos for Jean's story in "Meet Jean Ivan" (from the `jeanfx-vsl` repo, cropped and compressed).

The pages use files the main funnel also uses, without changing them:

- `/assets/lead-form.js` (phone rules)
- `/assets/vimeo-player.min.js`
- the results images in `/assets/jean-ivan/proof/`
- the favicon

## Leads

Leads go to the same Google Sheet and GoHighLevel as the main funnel, the same way. The sheet's
**Version** column says `Redesign` for them, so they can be compared with V1, V2 and the waiting list.

- Opting in on `/redesign/discord` goes to `/redesign/apply`.
- On `/redesign/apply`, someone who didn't opt in first is asked for name, email and phone before the questions. Those count as their opt-in.
- After the last question they get the GoHighLevel calendar, or the free Discord if their investment answer doesn't qualify.
- Booking goes to `/redesign/booked`.

Settings (videos, calendar link, Discord link, the questions) are at the top of `funnel.js`. To try Jean's green
instead of gold, change the `--accent` colours at the top of `style.css`. The pages have `noindex` so search
engines leave them out while this is a trial.

## Removing it, or making it the main funnel

- **Remove:** delete this `redesign` folder. Nothing else refers to it.
- **Make it the main funnel:** point `/discord`, `/apply` and `/booked` at these pages in `vercel.json`, remove
  the `noindex` lines, and drop the `/redesign` part of the addresses in `CONFIG.pages` in `funnel.js`.
