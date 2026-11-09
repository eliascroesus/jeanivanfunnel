# Jean Ivan funnel

Trading funnel for jeanfxtrading.com. There are two sets of pages:

**The main funnel** (black and gold). Each page is the `index.html` in its own folder. They share
`assets/site/style.css` (the design) and `assets/site/funnel.js` (the behaviour, with its settings in `CONFIG` at the top):

1. **Opt-in** (`/discord`): the headline, a white "Join The FREE Discord" form with the reasons to join, then the
   results and Jean's story. It's kept calm (plain black, little glow) so the form stands out.
2. **Page 2, A/B tested.** Each new opt-in is sent to one of two versions at random (50/50, set by `abSplitApply`
   in `CONFIG`) and keeps that version if they come back. Add `?v=1` or `?v=2` to a link to see a specific one.
   Both start with the VSL (autoplays muted behind a "Click To Unmute" box), and people who just joined get a short
   gold confetti burst:
   - **`/apply`**: the application one question at a time under the video, then Jean's GoHighLevel calendar.
   - **`/apply-2`** (iClose style): a short form beside the calendar, which stays blurred and locked until every
     answer is in (the old `/apply` questions, Instagram last). On phones the calendar sits under the form.

   Investment answers in `CONFIG.disqualify` get the free Discord instead of the calendar. Visitors who didn't opt
   in first give name, email and phone too (that counts as their opt-in).
3. **Booked** (`/booked`): "Your call is NOT confirmed yet", Step #1 the thank-you video, Step #2 the Confirm In
   Gmail / Outlook buttons and the FAQ videos (one per row), then the results and Jean's story.

"Meet Jean Ivan" tells his story with his own photos in `assets/jean-ivan/story/`. Their rows in the sheet show
**Redesign** (`/apply`) or **Redesign 2** (`/apply-2`) in the Version column.

**The old funnel** (green), kept in one file, `old/index.html`; the URL picks the page:

- `/old/discord` → `/old/apply` (V1) or `/old/apply-2` (V2, 50/50 by `abSplitV1`; add `?v=1` or `?v=2` to pick) →
  `/old/booked`, plus `/old/not-qualified` and `/old/waitlist`.
- The **waiting list** is still live at `/waitlist` (and the bare domain `/` redirects there), with "don't qualify"
  answers going to `/not-qualified`. Its rows show **Waitlist** in the Version column. The phone question has a
  searchable country picker and checks numbers with libphonenumber-js, loaded from jsDelivr only on that question.

`vercel.json` serves `old/index.html` at `/waitlist`, `/not-qualified` and every `/old/…` page, sends `/` to
`/waitlist` (delete that redirect, or change its destination, to send it elsewhere), and forwards the old
`/redesign/…` links to the main pages.

Results images: testimonials are uploaded to `assets/jean-ivan/testimonials/` (upload steps are in that folder's
README). The pages use compressed copies in `assets/jean-ivan/proof/` (a small `NAME.webp` and a `NAME-full.webp`
that opens when the image is tapped), listed in `PROOF` in `assets/site/funnel.js` and in `old/index.html`:
Jean Ivan's own results (`jean-NN`) mixed with community wins (`community-NN`).

## Hosting

It's a static site with no build step. On Vercel, import this repo with the default settings
(Framework: Other). Every push to the production branch redeploys.

The live domain is **jeanfxtrading.com** (DNS at Network Solutions). `vercel.json` sends the old
`jeanfx.vercel.app` and `jeanivanfunnel.vercel.app` addresses there with a permanent redirect, keeping the path
and any `?utm_…` parameters. Preview deployments keep their own `.vercel.app` addresses. The link-preview tags
(`og:image` and friends) at the top of each page use the same domain.

### Speed

- **Font:** Inter is served from the site (`assets/site/fonts/`), not Google Fonts, so there's no third-party
  stylesheet holding up the first paint. It's one small variable file (weights 400 to 900), preloaded by each page.
- **Video first:** on `/apply` and `/apply-2` the calendar loads after the page and its video (about 2 seconds after the
  page finishes), or straight away once someone touches the form.
- **FAQ videos** on `/booked` show Vimeo's still and a play button, and only load when they're tapped. The thank-you
  video loads straight away.
- **Caching** (`headers` in `vercel.json`): fonts are cached for a year, and images, the favicon and the Vimeo player
  library for a week. The pages, `style.css` and the scripts are checked on every visit, so edits show straight away.
  If you replace an image but keep its file name, returning visitors can see the old one for up to a week. Give the new
  image a new name to avoid that.

## Leads to Google Sheets

Every opt-in is added as a row to the
[Jean Ivan - Master Lead Sheet](https://docs.google.com/spreadsheets/d/19tpKDOSIJwPxz2UbPem6_LPhI1pRYJiX_NuJLXrGQ4k/edit)
through the Apps Script in `google-sheets/lead-capture.gs`. The application answers and the booking time are
then filled into that person's row, matched by email:

| Page | Columns filled |
| --- | --- |
| Opt-in (`/discord`, `/old/discord`) | Submitted At, Full Name, Email, Phone, Country, Funnel, Page URL, UTM Source/Medium/Campaign/Content/Term, Referrer, Device, Time Zone, Version |
| `/apply`, `/old/apply-2` and `/waitlist` | Situation, Biggest Goal, Obstacles, Instagram, Investment, Application At |
| `/apply-2` and `/old/apply` (V1) | Instagram, Experience, Main Goal, Investment, Main Problem (biggest issue), Ready To Fix, Application At |
| Booking a call | Call Booked At |
| GoHighLevel | Sent To GHL (when the row was sent; empty = not sent yet) |

The "Version" column says which pages each lead went through: **Redesign** / **Redesign 2** (the main `/apply` /
`/apply-2`), **V1** / **V2** (the old `/old/apply` / `/old/apply-2`) or **Waitlist**. Setup steps are at the top of `lead-capture.gs`. The Web app URL
is `leadSheetUrl` in `CONFIG` in both `assets/site/funnel.js` and `old/index.html`.

## Leads to GoHighLevel

The same Apps Script sends every lead to Jean's GoHighLevel sub-account through its API, the same way as the
Ricky funnel (free, unlike the premium Inbound Webhook trigger). It's off until the script has two Script
properties, `GHL_TOKEN` (a sub-account Private Integration token) and `GHL_LOCATION_ID`; run `checkGhl` in the
script editor, or use the sheet's **GoHighLevel → Check the connection**, to see what it found.

- Every event creates or updates the contact (name, email, phone, country) and fills any contact custom
  field whose name matches a sheet column header, e.g. "Instagram", "Investment", "Main Goal".
- Opportunity custom fields with the same names are filled too. Lead cards in a pipeline can only show
  opportunity fields, so create the ones you want on cards (e.g. Instagram, Investment, Situation) as Opportunity fields.
- These funnel steps also add a tag and put the lead's opportunity in a pipeline. It's one opportunity per
  lead: opt-ins land in **Discord** for the setters, and booking a call moves that same opportunity into
  **1:1 Mentorship**. It only ever moves forward, so stages a setter or closer moved someone to by hand are never undone.

| Funnel step | Pipeline / stage | Tag |
| --- | --- | --- |
| Opt-in on `/discord` | Discord / first stage | `jean-optin` |
| Gave name, email and phone on `/waitlist` | Discord / first stage | `jean-waitlist-started` |
| Finished the waiting list | Discord / Waitlist, plus a note with every answer | `jean-waitlist` |
| Finished an application (`/apply`, `/apply-2`, or the old `/old/apply` / `/old/apply-2`) | Discord / Applied, plus a note with every answer | `jean-applied` |
| "Don't qualify" investment answer | Discord / Not Qualified, plus a note with every answer | `jean-not-qualified` |
| Booked a call | 1:1 Mentorship / first stage | `jean-booked` |

The page marks those steps with a `stage` field; other single answers only update the contact's fields. So someone
who stops part way through the waiting list is still in the Discord pipeline for the setters, with the answers they gave.
Pipeline names, stages and tags live in `GHL_PIPELINES` and `GHL_STEPS` in `lead-capture.gs`.

### Leads already in the sheet

New leads go to GoHighLevel as they come in, and their row gets a time in **Sent To GHL**. Rows from before
GoHighLevel was set up stay empty there and are only sent when you choose to, from the menu the script adds to
the sheet (reload the sheet once after pasting the script):

- **GoHighLevel → Preview old leads (sends nothing)** counts them by funnel step.
- **GoHighLevel → Push old leads to GoHighLevel** asks to confirm, then sends each one to the furthest step it
  reached, with the tags of every step on the way and the answers note. They also get `jean-imported` first, so a
  workflow can leave them out (filter "Contact Tag doesn't have jean-imported"). It's safe to run again: sent rows are skipped.

An old lead who comes back (finishes an application, books a call) is sent whole at that moment, as a live lead.
A send that fails leaves Sent To GHL empty, so the push picks it up later.

### Booking calendar

`/apply` and `/apply-2` show Jean's GoHighLevel calendar, set in `ghlCalendarUrl` in `CONFIG` (Calendars → the calendar's ⋮ →
Share → Permanent link); the old pages use the same calendar (with Calendly as their fallback if it's emptied). The
page fills in the calendar's name, email and phone, and moves to `/booked` when GoHighLevel reports the booking.
The `/discord` phone box checks
numbers against the same rules as the calendar (libphonenumber's, in `assets/lead-form.js`), so the calendar
never rejects a number the opt-in accepted. On `/booked`, **Confirm In Gmail** opens their inbox searched for the
confirmation email (`confirmFrom` / `confirmSubject` in `CONFIG`), and **Confirm In Outlook** opens Outlook on the web. Bookings in the GoHighLevel calendar also start its
"Customer Booked Appointment" workflows (confirmation texts, reminders, the Telegram alert below); Calendly bookings don't.

### Telegram alerts

Booked calls can be posted to a Telegram group with the lead's answers: add `TELEGRAM_TOKEN`, `TELEGRAM_CHAT_ID`
and `WEBHOOK_KEY` as Script properties, run `checkTelegram`, then add a GoHighLevel workflow "Customer Booked
Appointment" → **Webhook** (POST) to `<Web app URL>?source=ghl-booked&key=<WEBHOOK_KEY>`. Details are at the bottom of `lead-capture.gs`.

## Editing

The main pages' settings are in `CONFIG` at the top of `assets/site/funnel.js`: videos (`CONFIG.videos` and the FAQ
list `faqVideos`), the calendar link, the Discord invite, the investment answers that don't qualify, and the
application questions (`QUESTIONS` for `/apply`; the `/apply-2` questions are in `apply-2/index.html`). The copy is in each page's `index.html`; the design is in `assets/site/style.css`
(the gold is set by the `--accent` colours at the top). The old pages keep their own `CONFIG` block near the end of
`old/index.html`.

Vimeo videos play the same way as in the Ricky funnel: Vimeo's title, picture, name, logo, share buttons and
captions are switched off and the page draws its own play, progress, sound and full-screen controls (Vimeo's
player library is in `assets/vimeo-player.min.js`). The VSL and the thank-you video autoplay muted behind a box
that restarts them with sound when clicked. `/discord` loads the VSL and the calendar off-screen once someone
starts the form, so page 2 opens fast.
