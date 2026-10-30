# Jean Ivan funnel

Trading funnel. All pages live in one file, `index.html`; the URL picks the page:

1. **Opt-in** (`/discord`): headline, Discord sign-up form and Jean Ivan's results. For now the bare domain (`/`)
   redirects to `/waitlist` (the `redirects` entry in `vercel.json`; delete it, or change its destination, to undo).
2. **Application**, A/B tested. Each new opt-in is sent to one of two versions at random (50/50, set by
   `abSplitV1` in `CONFIG`) and keeps that version if they come back:
   - **V1** (`/apply`): main video, a short form beside Calendly.
   - **V2** (`/apply-2`): main video, then one question at a time (Typeform style; the questions are in
     `APPLY2_QUESTIONS`). Calendly loads in the background and appears after the last answer.
   - Add `?v=1` or `?v=2` to a link to see a specific version.
3. **Booked** (`/booked`): next-steps video, FAQ videos and more results.
4. **Not qualified** (`/not-qualified`): where applicants land instead of the calendar when their investment
   answer is in `CONFIG.disqualify` ("Under $500" on V1, "don't have the resources" on V2). Their answers still
   go to the sheet. Put the Discord invite in `CONFIG.discordUrl` to show a "Join The Free Discord" button.
5. **Waiting list** (`/waitlist`): the `/apply-2` questions without the video or calendar, ending on "You're on the
   waiting list". Asks for name, email and phone first unless page 1 already has them. The phone question has a
   searchable country picker (US by default) and checks the number against that country's rules with
   libphonenumber-js, loaded from jsDelivr only on that question; the sheet gets it as +12015550123. Its rows show
   **Waitlist** in the sheet's Version column; "don't qualify" answers go to `/not-qualified` as on `/apply-2`.

`vercel.json` serves `index.html` at `/discord`, `/apply`, `/apply-2`, `/booked`, `/not-qualified` and `/waitlist`. Images and clips go in
`assets/jean-ivan/`. Testimonials are uploaded to `assets/jean-ivan/testimonials/` (upload steps are in that
folder's README). The page uses compressed copies in `assets/jean-ivan/proof/`, listed in `PROOF` in the script:
Jean Ivan's own results (`jean-NN`) mixed with community wins (`community-NN`), each with a small `NAME.webp`
for the page and a `NAME-full.webp` that opens when the image is tapped. Page 1, `/booked` and `/waitlist` show all of them.

## Hosting

It's a static site with no build step. On Vercel, import this repo with the default settings
(Framework: Other). Every push to the production branch redeploys.

The live domain is **jeanfxtrading.com** (DNS at Network Solutions). `vercel.json` sends the old
`jeanfx.vercel.app` and `jeanivanfunnel.vercel.app` addresses there with a permanent redirect, keeping the path
and any `?utm_…` parameters. Preview deployments keep their own `.vercel.app` addresses. The link-preview tags
(`og:url`, `og:image`) near the top of `index.html` use the same domain.

## Leads to Google Sheets

Every opt-in on page 1 is added as a row to the
[Jean Ivan - Master Lead Sheet](https://docs.google.com/spreadsheets/d/19tpKDOSIJwPxz2UbPem6_LPhI1pRYJiX_NuJLXrGQ4k/edit)
through the Apps Script in `google-sheets/lead-capture.gs`. The page 2 answers and the Calendly booking
time are then filled into that person's row, matched by email:

| Page | Columns filled |
| --- | --- |
| Opt-in (`/discord`) | Submitted At, Full Name, Email, Phone, Country, Funnel, Page URL, UTM Source/Medium/Campaign/Content/Term, Referrer, Device, Time Zone, Version |
| V1 (`/apply`) | Instagram, Experience, Main Reason, Investment, Main Problem (biggest issue), Ready To Fix, Application At |
| V2 (`/apply-2`) | Situation, Biggest Goal, Obstacles, Instagram, Investment, Application At |
| Calendly booking | Call Booked At |

The "Version" column shows which page 2 (V1 or V2) each lead got, so the two can be compared.
Setup steps are at the top of `lead-capture.gs`. The Web app URL goes in `leadSheetUrl` in the
`CONFIG` block near the end of `index.html`; until it's set, the funnel works but sends nothing.

## Leads to GoHighLevel

The same Apps Script also sends every lead to GoHighLevel through its API (free, unlike the premium
Inbound Webhook trigger). It's off until the script has two Script properties, `GHL_TOKEN` (a sub-account
Private Integration token) and `GHL_LOCATION_ID`; run `checkGhl` in the script editor to see what it found.

- Every event creates or updates the contact (name, email, phone, country) and fills any contact custom
  field whose name matches a sheet column header, e.g. "Instagram", "Investment", "Main Problem".
- These funnel steps also add a tag and set the opportunity's stage in the **JFX Elite** pipeline. Stages
  are matched by name and only move forward; stages added by hand (Showed, Won…) are never moved back.

| Funnel step | Stage | Tag |
| --- | --- | --- |
| Opt-in on `/discord` | Opted In | `jfx-optin` |
| Finished the waiting list | Waitlist | `jfx-waitlist` |
| Finished an application | Applied | `jfx-applied` |
| "Don't qualify" investment answer | Not Qualified | `jfx-not-qualified` |
| Calendly booking | Call Booked | `jfx-booked` |

The page marks a finished application with a `stage` field; single answers only update the contact's fields.
Pipeline, stage and tag names live in `GHL_PIPELINE` and `GHL_STEPS` at the bottom of `lead-capture.gs`.

## Editing

Brand name, videos, the Calendly link and the sheet URL are all in the `CONFIG` block. To swap a video
placeholder for a real video, paste its embed link into `CONFIG.videos`.
