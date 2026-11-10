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
3. **Booked** (`/booked`): "Your call is NOT confirmed yet", Step #1 the thank-you video, Step #2 "Confirm Your Call
   Now" (three cards: reply "Yes" to the email, reply to the text on iMessage or WhatsApp, add it to your calendar
   with Google / Apple / Outlook buttons), Step #3 the FAQ videos (one per row), then the results and Jean's story.

Every page ends with the same footer as the Ricky funnel: links to the **Privacy Policy** (`/privacy`), **Terms of
Service** (`/terms`) and **Earnings & Risk Disclaimer** (`/disclaimer`), a Contact link (jean@fx.jeanfxtrading.com),
the earnings and trading-risk disclaimer, and the "not part of Facebook / Instagram / Meta" line. The three legal
pages are in `privacy/`, `terms/` and `disclaimer/` (styled by `assets/legal.css`); they're Ricky's pages rewritten
for Jean and trading, with the trading-specific parts added (trading risk, prop firm payouts aren't profit, the
standard CFTC Rule 4.41 note on simulated results, not financial advice). Change the "Last updated" date when you
edit them.

"Meet Jean Ivan" tells his story with his own photos in `assets/jean-ivan/story/`. Their rows in the sheet show
**Redesign** (`/apply`) or **Redesign 2** (`/apply-2`) in the Version column.

**The old funnel** (green), kept in one file, `old/index.html`; the URL picks the page:

- `/old/discord` → `/old/apply` (V1) or `/old/apply-2` (V2, 50/50 by `abSplitV1`; add `?v=1` or `?v=2` to pick) →
  `/old/booked`, plus `/old/not-qualified` and `/old/waitlist`.
- The **waiting list** is switched off: `/waitlist` (and its "don't qualify" page `/not-qualified`) redirect to
  `/discord`. A copy is kept at `/old/waitlist`. Its rows in the sheet show **Waitlist** in the Version column.

`vercel.json` sends the bare domain `/`, `/waitlist` and `/not-qualified` to `/discord` (change a redirect's
destination to send it elsewhere; any `?utm_…` on the link is kept), serves `old/index.html` at every `/old/…` page,
and forwards the old `/redesign/…` links to the main pages. To bring the waiting list back, delete the `/waitlist`
and `/not-qualified` redirects and add rewrites for them to `/old/index.html`, like the `/old/…` ones.

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
| `/apply`, `/old/apply-2` and `/old/waitlist` | Situation, Biggest Goal, Obstacles, Instagram, Investment, Application At |
| `/apply-2` and `/old/apply` (V1) | Instagram, Experience, Main Goal, Investment, Main Problem (biggest issue), Ready To Fix, Application At |
| Booking a call | Call Booked At |
| GoHighLevel | Sent To GHL (when the row was sent; empty = not sent yet) |
| Every step | Source Link: the `/go/…` tracked link (or app/site) they came from, as on `/admin` |

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
| Gave name, email and phone on the waiting list (now off; leads already in the sheet) | Discord / first stage | `jean-waitlist-started` |
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
never rejects a number the opt-in accepted. Bookings in the GoHighLevel calendar also start its
"Customer Booked Appointment" workflows (confirmation texts, reminders, the Telegram alert below); Calendly bookings don't.

**Add it to your calendar** (`/booked`, Step #2, and `/old/booked`): the Google, Apple and Outlook buttons add the
call with its time, using `assets/call-calendar.js`. Apple Calendar gets a calendar file from `api/ics.js` (its title and
text are set there). The time comes from GoHighLevel's "booking complete" message when the message includes it.
GoHighLevel doesn't document what that message holds, so if a test booking shows "set the time from your confirmation
email" under the buttons, the message had no time. Google and Outlook then open a new event with the title filled in,
and the Apple button is hidden. Add `?debug` to a page 2 link and the browser console shows every message the calendar
sends. The call title, text and fallback length are `CONFIG.call` in `funnel.js`.

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

**The end of a video:** Vimeo's own end screen shows "More from …" with other videos from the account. So every video
(main pages and old pages) stops half a second before its end, goes back to the start and shows a gold **Replay**
button instead; Vimeo's end screen never shows. If you also want it off in Vimeo itself, set each video's **Embed →
End screen** to "Empty" in Vimeo, but the pages don't need it.

## Analytics dashboard (/admin)

The same dashboard as the Ricky funnel. `/admin` shows, for any date range, traffic source and A/B version:

- **Link clicks** on your tracked short links, per place you posted them (Instagram bio, story, DMs…), and how many
  of those clicks turned into visitors, opt-ins, applications and booked calls.
- **The funnel step by step**: visited → started the opt-in form → opted in → reached page 2 → played the VSL →
  started the application → finished it → qualified → booked. Each person is counted once per step, and the
  biggest drop-off is pointed out.
- **Videos**: who saw each video (VSL, thank-you video, each FAQ), who pressed play with sound, and a drop-off curve
  showing what share are still watching at every 5% of the video.
- **A/B test**: V1 (`/apply`, one question at a time) against V2 (`/apply-2`, form beside the calendar) at every step,
  with a plain-English verdict on whether the difference in booked calls is real yet (95% confidence) or still luck.
- **Application questions**, **pages & buttons** (including the add-to-calendar buttons), **audience**
  (iPhone/Android/computer, Instagram in-app browser vs Safari, country), **over time** charts and a **live** list.

### Setup (once, about 5 minutes on Vercel)

1. **Database**: Vercel → this project → **Storage** → **Create Database** → **Upstash for Redis** (free plan) →
   connect it to this project for all environments. That adds `KV_REST_API_URL` and `KV_REST_API_TOKEN`.
2. **Password**: **Settings → Environment Variables** → add `ADMIN_PASSWORD` (whatever you want to log in with).
   Optional: `TRACK_TIMEZONE` (default `America/New_York`) sets which time zone "today" uses.
3. **Redeploy** (Deployments → ⋯ → Redeploy), then open `https://jeanfxtrading.com/admin`.

Until the database is connected, the pages work exactly as before and simply don't count anything.

### Tracked links (for the Instagram bio and everything else)

Make one link per place you post, in **/admin → Tracked links** (one-click presets for Instagram bio, story, DMs,
reels, YouTube, TikTok…). Each looks like `https://jeanfxtrading.com/go/ig-bio`: it counts the tap, then sends the
person straight on to `/discord` (or `/apply`, `/apply-2`, or any other link you choose) with `?ref=ig-bio` added, so
every page after it knows where they came from. You can change where a link goes later without changing the link.

- **Staying inside Instagram:** a link in an Instagram bio, story or DM opens in Instagram's own in-app browser.
  The `/go/…` link is a single redirect on Jean's own domain, so it opens there like any normal link and people stay
  in the app the whole way (opt-in, video, calendar). Nothing pushes them out to Safari. Apps like URL Genius do
  something different: they open a link in another app (e.g. a YouTube link in the YouTube app). Jean's funnel is a
  website, so the in-app browser is where it should open.
- **Safe for Meta:** your own domain with one redirect looks like any normal website to Instagram's link checker
  (unlike third-party link shorteners). Instagram's link preview bot is sent on without being counted, and every
  page it lands on has the Privacy Policy, Terms and Earnings & Risk Disclaimer in the footer.
- Bots and link previews (Instagram/iMessage/WhatsApp/Discord previews, crawlers) aren't counted.
- "Clicks" vs "Visitors": the gap is people who tapped but left before the page loaded (common in in-app browsers).
- Links without a tracked link still show up, worked out from the site or app they came from ("Instagram (no
  tracked link)", "Direct / unknown"), and `?utm_source=` links work too.
- A visitor keeps the last link that brought them for 30 days, so a booking two days later still counts for it.
- The link also goes to the Google Sheet in a **Source Link** column (and to a GoHighLevel field named "Source
  Link" if you make one). To get the column: paste the updated `google-sheets/lead-capture.gs`, run `setup`, then
  Deploy → Manage deployments → New version. Until then everything else works as before.

### Your own visits

Testing the funnel from your own browser adds to the numbers. In **/admin → Settings**, tick "Don't count my
visits on this browser"; on your phone, open any funnel page with `?rt=off` at the end once (`?rt=on` undoes it).
**Settings → Delete all numbers** starts the counts from zero (e.g. after testing); tracked links stay.

### How it works

- `assets/track.js` (loaded by the four main pages) gives each browser a random id (no names, emails or cookies),
  and sends small batches of events to `/api/e`: page views, funnel steps (each once per person), and which 5% parts
  of each video were watched with sound. The VSL autoplays muted, so only watching after "Click To Unmute" (or play)
  counts. `assets/site/funnel.js` tells it about each step.
- `api/go.js` handles `/go/<name>`; `api/admin.js` serves the dashboard's data behind `ADMIN_PASSWORD`;
  `api/_lib/store.js` holds the shared database code (Upstash's REST API, no packages to install). The dashboard
  page is `admin/index.html`.
- Counts are stored per day, link and A/B version (plus per month for long ranges), so the dashboard stays fast for
  any date range. Upstash's free plan covers a lot of traffic; each event batch is one request.
