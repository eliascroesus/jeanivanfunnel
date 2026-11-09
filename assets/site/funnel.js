/* Jean Ivan funnel: shared by /discord, /apply and /booked (each page says which one it is in
   <body data-page="…">). Leads go to the Google Sheet and from there to GoHighLevel, with "Redesign" in the
   sheet's Version column so they can be told apart from the older pages' leads (V1, V2, Waitlist).
   The older pages are kept at /old/… (old/index.html).
   Needs /assets/lead-form.js (phone rules, tidyName, emailOk) and /assets/vimeo-player.min.js first. */

const CONFIG = {
  leadSheetUrl: "https://script.google.com/macros/s/AKfycbz5Kit_1dN9WRHCtjC8Idq49u2c5Rr9KMBf1MVEqUjxsxbIX2DWplN-WWwAhCSNyPob/exec",
  // The sheet's Version column: which page 2 the lead got, so the two can be compared.
  versions: { apply: "Redesign", apply2: "Redesign 2" },
  // A/B test: share of new opt-ins sent to /apply (one question at a time). The rest go to /apply-2 (the form
  // beside the calendar). Each visitor keeps the one they got. ?v=1 or ?v=2 in a link picks one; ?v=reset forgets it.
  abSplitApply: 0.5,
  pages: { discord: "/discord", apply: "/apply", apply2: "/apply-2", booked: "/booked" },
  videos: {
    vsl: "https://player.vimeo.com/video/1242132867",
    nextSteps: "https://player.vimeo.com/video/1243210921",
  },
  // FAQ videos on /booked: [question, Vimeo link]. Ones without a link are left out.
  faqVideos: [
    ["What's Inside The JFX Elite Mentorship?", ""],
    ["Is JeanFX Legit?", "https://player.vimeo.com/video/1243211359"],
    ["Will I Work With Jean Ivan Or An Assistant?", "https://player.vimeo.com/video/1243211357"],
    ["Can I Do This With A Full-Time Job?", "https://player.vimeo.com/video/1243211356"],
    ["How Much Money Do I Need To Start Trading?", "https://player.vimeo.com/video/1243211358"],
  ],
  ghlCalendarUrl: "https://api.leadconnectorhq.com/widget/booking/fOpQ0g6PeGi0AV9lhKP8",
  discordUrl: "https://discord.gg/5qGhKE6A5j",
  // Investment answers that don't qualify for a call: they see the free Discord instead of the calendar.
  disqualify: ["Under $500", "I want to, but don't have the resources to fund my goals"],
  confirmFrom: "",
  confirmSubject: "Strategy Call",
};

// The application on /apply, one question at a time (same questions as the old /apply-2).
// Visitors who didn't come through /discord are asked for name, email and phone first.
const CONTACT_QUESTIONS = [
  { key: "name", type: "text", title: "First, what's your full name?", placeholder: "Full name", autocomplete: "name" },
  { key: "email", type: "email", title: "What's your email?", placeholder: "name@example.com", autocomplete: "email" },
  { key: "phone", type: "phone", title: "And your phone number?", placeholder: "Phone number" },
];
const QUESTIONS = [
  { key: "situation", type: "choice", title: "Which of these best describes your situation right now?",
    options: ["I'm already trading and want to become consistently profitable", "I've been trying to trade and I'm stuck", "I'm completely new to trading"] },
  { key: "goal", type: "long", title: "What's your biggest goal for the next 6‑12 months? (life, situation, income)", placeholder: "Type your answer here..." },
  { key: "obstacles", type: "long", title: "What challenges or obstacles do you feel are holding you back from reaching that goal?", placeholder: "Type your answer here..." },
  { key: "instagram", type: "text", title: "What's your Instagram?", placeholder: "@handle" },
  { key: "investment", type: "choice",
    title: "In a world where this was a PERFECT fit and we knew without a doubt we could help you hit the goals you just mentioned, how much are you willing to invest into your trading and getting 1\u2011on\u20111 coaching from Jean Ivan?",
    help: "Full transparency is recommended. We'll help you either way.",
    options: ["$1,000 – $3,000", "$3,000 – $5,000", "I have a 650+ credit score", "I want to, but don't have the resources to fund my goals"] },
];

// Results wall: Jean's own results mixed with community wins (same images as the main funnel).
const PROOF = [
  ["jean-01", 800, 362, "FTMO certificates for Jeanfx: $26,915.51 in overall rewards and a $16,133.04 reward"],
  ["community-01", 800, 589, "FundedNext performance reward certificate of $19,694.08 on a 200K account, posted by fifa"],
  ["community-02", 800, 557, "FundedNext performance reward certificate of $13,332.37 on a 100K account, posted by fifa"],
  ["jean-02", 800, 315, "Jean's post about making $25k in June, with a Topstep proof of payout of $19,770 to Jean Yvan B."],
  ["community-03", 800, 405, "QT Funded certificate: $6,196.00 performance fee to Lawrence Long"],
  ["community-04", 800, 737, "QT Funded certificate: Mohamud M. passed the $25,000 two-step challenge, posted by sakkooo10"],
  ["jean-03", 800, 655, "Alpha Capital certificate of disbursement: $4,956.00 performance fee to Jean Yvan, his first payout of the month"],
  ["community-05", 652, 958, "Payouts screen showing $1,448.37 available, posted by 1upMR thanking JeanFx Trading"],
  ["community-06", 800, 925, "FundedNext reward certificate of $580.00 plus phase one and phase two certificates, posted by NOBEIL"],
  ["jean-04", 800, 396, "Withdrawal certificate for $2,291.62 to Jean Yvan Benimana"],
  ["community-07", 800, 587, "FundedNext performance reward certificate of $406.58, posted by NOBEIL thanking Jean"],
  ["community-08", 800, 614, "FundedNext performance reward certificate of $341.36 for Desmond, posted by NOBEIL"],
  ["jean-05", 800, 532, "JeanFx Trading announcing an Equity Edge funded account and a $2.1k payout, with the funded trader certificate and account balance"],
  ["community-09", 800, 479, "FundedNext performance reward certificate of $277.92, posted by NOBEIL thanking Jean and JeanFx Trading"],
  ["community-10", 800, 670, "FundedNext performance reward certificate of $162.13, posted by NOBEIL"],
  ["jean-06", 800, 533, "Equity Edge payout certificate: $1,680 to Jean Yvan"],
  ["community-11", 800, 393, "FundedNext performance reward certificate of $92.64, posted by NOBEIL"],
  ["community-12", 526, 838, "Topstep email congratulating Romeo on earning funding, posted by Rome"],
  ["jean-07", 800, 404, "Payout of $724.48 to Jean Yvan Benimana, with the withdrawal confirmations"],
  ["community-13", 800, 641, "Alpha Capital passed verification certificate for Imran Ismail, posted by 1upMR"],
  ["community-14", 800, 751, "FTMO passed verification certificate for Mohammed Ameen, posted by fatbw0y"],
  ["jean-08", 800, 436, "Lucid funded account (LucidPro 150K) and an Alpha Capital certificate of achievement for Jean Yvan Benimana"],
  ["community-15", 800, 480, "Phase 1 completed and challenge completed certificates for Shema Tevin on a 5K challenge, posted by Maestro"],
  ["community-16", 800, 415, "Phase one and phase two certificates, posted by Salman weslati thanking Jean on moving to the funded stage"],
  ["jean-09", 800, 390, "Funded account certificate for Jean Yvan Benimana"],
  ["community-17", 570, 880, "Evaluation completed email for phase 2, posted by Errol Silinda"],
  ["community-18", 800, 432, "FundedNext Elite Trader certificate and a phase 2 complete message, posted by Abidul"],
  ["jean-10", 800, 386, "Funded trader certificate for Jean Yvan on a 100K challenge"],
  ["community-19", 800, 614, "FundedNext certificate of appreciation as an Elite Trader, posted by Abidul"],
  ["community-20", 800, 690, "FundedNext Elite Trader certificate, posted by NOBEIL thanking Jean"],
  ["jean-11", 800, 459, "FTMO certificates for Jeanfx: passed the FTMO Challenge and passed Verification"],
  ["community-21", 800, 536, "FundedNext Elite Trader certificate for AbdulfatahFX, posted by FatahGOLDSTAN"],
  ["community-22", 800, 768, "FundedNext Elite Trader certificate, posted by NOBEIL thanking Jean"],
  ["jean-12", 800, 603, "Alpha Capital phase 1 certificate of achievement for Jean Gashumba"],
  ["community-23", 800, 347, "FundedNext reward and Crown Trader certificates, posted by Amirmuktar"],
  ["community-24", 618, 874, "Phone screenshots of a QT Funded passed verification and a $100,000 account, posted by Emrys"],
  ["jean-13", 800, 678, "Alpha Trader phase 1 achievement certificate for Jean Yvan Benimana G"],
  ["community-25", 800, 410, "Trading history of a 10K account passed in one trade, with a member's note about scaling up"],
];

/* ======================================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const PAGE = document.body.dataset.page;

// Kept in the browser for 30 days (shared with the main funnel), so a reload keeps what they entered.
const store = {
  get(k) {
    try {
      const saved = JSON.parse(localStorage.getItem("jeanivan_" + k));
      return saved && Date.now() - saved.at < 30 * 864e5 ? saved.v : null;
    } catch { return null; }
  },
  set(k, v) { try { localStorage.setItem("jeanivan_" + k, JSON.stringify({ v, at: Date.now() })); } catch {} },
};

let lead = store.get("lead") || {};
const qs = new URLSearchParams(location.search);
["name", "email", "phone"].forEach(k => { const v = qs.get(k); if (v) lead[k] = v; });
// UTMs from the latest link that had them, and the referring site, are remembered for the sheet.
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
const tracking = (() => {
  const saved = store.get("tracking") || {};
  const pick = o => Object.fromEntries(UTM_KEYS.map(k => [k, o[k] || ""]).filter(([, v]) => v));
  const fromLink = pick(Object.fromEntries(qs));
  let external = "";
  try { external = document.referrer && new URL(document.referrer).host !== location.host ? document.referrer : ""; } catch {}
  const now = { ...(Object.keys(fromLink).length ? fromLink : pick(saved)), referrer: external || saved.referrer || "" };
  store.set("tracking", now);
  return now;
})();

// Moves to another page, keeping ?utm_… and other link options (but not ?v=reset, so a reset only happens once).
function go(page) {
  const q = new URLSearchParams(location.search);
  if (q.get("v") === "reset") q.delete("v");
  location.href = CONFIG.pages[page] + (q.toString() ? "?" + q : "");
}

// Which page 2 this visitor gets ("apply" or "apply2"): picked once at random, then remembered.
function abPage() {
  const v = qs.get("v");
  try { if (v === "reset") localStorage.removeItem("jeanivan_ab_page"); } catch {}
  let page = v === "1" ? "apply" : v === "2" ? "apply2" : "";
  try { page = page || localStorage.getItem("jeanivan_ab_page") || ""; } catch {}
  if (!CONFIG.versions[page]) page = Math.random() < CONFIG.abSplitApply ? "apply" : "apply2";
  try { localStorage.setItem("jeanivan_ab_page", page); } catch {}
  return page;
}

/* ---------- Send to the Google Sheet (and from there to GoHighLevel) ---------- */
// type "optin" adds a row; "application" and "booked" fill in that person's row (matched by email).
function sendLead(data, type = "optin") {
  if (!CONFIG.leadSheetUrl) return;
  const body = new URLSearchParams({
    ...data,
    version: data.version || CONFIG.versions[PAGE] || CONFIG.versions.apply,
    type,
    funnel: document.title,
    page_url: location.href.split("#")[0],
    ...Object.fromEntries(UTM_KEYS.map(k => [k, tracking[k] || ""])),
    referrer: tracking.referrer || document.referrer,
    device: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
  });
  // Apps Script doesn't send CORS headers, so the answer can't be read; "no-cors" still delivers it.
  fetch(CONFIG.leadSheetUrl, { method: "POST", mode: "no-cors", body, keepalive: true }).catch(() => {});
}

/* ---------- Videos (Vimeo, with our own controls) ---------- */
const VIMEO_CLEAN = { title: 0, byline: 0, portrait: 0, badge: 0, vimeo_logo: 0, pip: 0, playsinline: 1, dnt: 1, autopause: 0, texttrack: "false" };
const ICONS = {
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4l14 8-14 8z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5c1.5 1.5 1.5 5.5 0 7M19.5 5.5c3.2 3.2 3.2 9.8 0 13"/></svg>',
  muted: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M17 9.5l5 5M22 9.5l-5 5"/></svg>',
  full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  listen: '<svg viewBox="0 0 124 124" fill="currentColor" aria-hidden="true"><path d="M15.9 51.4v20.6c0 2.8 2.3 5.1 5.2 5.1h15.4l16.9 16.9c3.2 3.3 8.8.9 8.8-3.6V33c0-4.6-5.6-6.9-8.8-3.7L36.5 46.3H21.1c-2.9 0-5.2 2.3-5.2 5.1z"/><path d="M77.9 44.7c-2.2-2-5.4-.2-5.4 2.8v1.3c0 1 .4 1.9 1 2.7 2.2 2.9 3.5 6.3 3.5 10 0 3.7-1.3 7.2-3.5 10-.6.8-1 1.8-1 2.8v1.7c0 3 3.1 4.8 5.3 2.8 4.6-4.2 7.6-10.3 7.6-17.1 0-6.8-2.9-12.9-7.5-17z"/><path d="M72.5 22.9v1c0 2 1.3 3.7 3.1 4.4 13.3 5.3 22.7 18.3 22.7 33.4s-9.4 28.1-22.7 33.4c-1.8.8-3.1 2.4-3.1 4.4v1c0 3.3 3.3 5.5 6.3 4.4 17.4-6.6 29.8-23.5 29.8-43.2S96.2 25.2 78.8 18.5c-3-1.2-6.3 1.2-6.3 4.4z"/></svg>',
};
const players = [];
function vimeoEmbedUrl(url, custom, autoplay, start) {
  const u = new URL(url);
  const extra = { ...(custom ? { controls: 0 } : {}), ...(autoplay && custom ? { autoplay: 1, muted: 1 } : start ? { autoplay: 1 } : {}) };
  Object.entries({ ...VIMEO_CLEAN, ...extra }).forEach(([k, v]) => u.searchParams.set(k, v));
  return u;
}
// Puts a Vimeo video in a .vslframe box. autoplay = starts muted with "Click to unmute" (the VSL and thank-you video);
// start = plays with sound straight away (a video someone just clicked).
function mountVideo(box, url, { autoplay = false, start = false, title = "Video" } = {}) {
  if (!box || !url || box.classList.contains("has-embed")) return;
  box.classList.add("has-embed");
  const custom = !!window.Vimeo;   // without the player library Vimeo keeps its own controls
  box.innerHTML = `<iframe src="${esc(vimeoEmbedUrl(url, custom, autoplay, start).href)}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="${esc(title)}"${autoplay || start ? "" : ' loading="lazy"'}></iframe>`;
  if (custom) videoControls(box, autoplay);
}
// A video that only loads when it's clicked: Vimeo's still and a play button until then, so a page with several
// videos doesn't start several players at once (the FAQ videos on /booked).
function videoOnClick(box, url, title) {
  if (!box || !url) return;
  box.classList.add("vp", "is-paused", "vp--still");
  box.innerHTML = `<button class="vp__hit" type="button" aria-label="Play: ${esc(title)}"></button><span class="vp__big" aria-hidden="true">${ICONS.play}</span>`;
  const id = (url.match(/video\/(\d+)/) || [])[1];
  const still = () => fetch("https://vimeo.com/api/oembed.json?width=960&url=" + encodeURIComponent("https://vimeo.com/" + id))
    .then(r => r.ok ? r.json() : null)
    .then(d => { if (d && d.thumbnail_url && box.classList.contains("vp--still")) box.style.backgroundImage = `url("${d.thumbnail_url.replace(/"/g, "%22")}")`; })
    .catch(() => {});
  if (id) {
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(es => { if (es.some(e => e.isIntersecting)) { io.disconnect(); still(); } }, { rootMargin: "300px 0px" });
      io.observe(box);
    } else still();
  }
  $(".vp__hit", box).addEventListener("click", () => {
    box.classList.remove("vp", "is-paused", "vp--still");
    box.style.backgroundImage = "";
    mountVideo(box, url, { start: true, title });
  }, { once: true });
}
function videoControls(box, autoplay) {
  const player = new Vimeo.Player(box.querySelector("iframe"));
  players.push(player);
  // No captions (Vimeo switches them on by itself during a muted autoplay).
  const noCaptions = () => player.disableTextTrack().catch(() => {});
  player.ready().then(noCaptions).catch(() => {});
  ["loaded", "play", "volumechange"].forEach(ev => player.on(ev, noCaptions));
  player.on("cuechange", d => { if (d && d.cues && d.cues.length) noCaptions(); });
  fitVideoShape(box, player);
  box.insertAdjacentHTML("beforeend", `
    <button class="vp__hit" type="button" aria-label="Play or pause"></button>
    <span class="vp__big" aria-hidden="true">${ICONS.play}</span>
    <div class="vp__bar">
      <button class="vp__btn vp__toggle" type="button" aria-label="Play or pause">${ICONS.play}${ICONS.pause}</button>
      <div class="vp__track" role="slider" aria-label="Seek" tabindex="0"><span class="vp__rail"><span class="vp__fill"></span></span></div>
      <button class="vp__btn vp__mute" type="button" aria-label="Sound on or off">${ICONS.sound}${ICONS.muted}</button>
      <button class="vp__btn vp__full" type="button" aria-label="Full screen">${ICONS.full}</button>
    </div>
    ${autoplay ? `<button class="listen vp__listen" type="button">${ICONS.listen}<strong>Your Video Is Playing<br>Click To Unmute</strong></button>` : ""}`);
  box.classList.add("vp", "is-paused");
  box.classList.toggle("is-muted", autoplay);
  const listen = $(".vp__listen", box), fill = $(".vp__fill", box);
  let paused = true, muted = autoplay, duration = 0, touch = false, uiTimer = null;
  const showUi = () => { box.classList.add("show-ui"); clearTimeout(uiTimer); uiTimer = setTimeout(() => box.classList.remove("show-ui"), 2500); };
  const setMuted = m => { muted = m; box.classList.toggle("is-muted", m); player.setMuted(m).catch(() => {}); if (!m) player.setVolume(1).catch(() => {}); };
  const play = () => player.play().catch(() => {
    if (!muted) { setMuted(true); player.play().catch(() => {}); if (listen) listen.hidden = false; }
  });
  // "Click to unmute" starts the video over from the beginning, with sound.
  const unmute = () => { listen.hidden = true; player.setCurrentTime(0).catch(() => {}); setMuted(false); play(); };
  const toggle = () => {
    if (listen && !listen.hidden) return unmute();
    if (paused) play(); else player.pause().catch(() => {});
  };
  player.on("play", () => {
    paused = false; box.classList.remove("is-paused");
    player.getMuted().then(m => { muted = m; box.classList.toggle("is-muted", m); }).catch(() => {});
    players.forEach(p => { if (p !== player) p.pause().catch(() => {}); });   // one video at a time
  });
  player.on("pause", () => { paused = true; box.classList.add("is-paused"); });
  player.on("ended", () => { paused = true; box.classList.add("is-paused"); });
  player.on("timeupdate", d => { duration = d.duration || duration; fill.style.width = (d.percent || 0) * 100 + "%"; });
  const hit = $(".vp__hit", box);
  hit.addEventListener("pointerdown", e => { touch = e.pointerType === "touch"; });
  hit.addEventListener("click", () => {
    // On phones the first tap on a playing video just shows the controls.
    if (touch && !paused && !box.classList.contains("show-ui") && !(listen && !listen.hidden)) return showUi();
    toggle(); showUi();
  });
  box.addEventListener("pointermove", e => { if (e.pointerType === "mouse") showUi(); });
  listen?.addEventListener("click", unmute);
  $(".vp__toggle", box).addEventListener("click", () => { toggle(); showUi(); });
  $(".vp__mute", box).addEventListener("click", () => { if (listen && !listen.hidden) return unmute(); setMuted(!muted); showUi(); });
  $(".vp__full", box).addEventListener("click", () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) return (document.exitFullscreen || document.webkitExitFullscreen).call(document);
    const full = box.requestFullscreen || box.webkitRequestFullscreen;
    if (full) full.call(box); else player.requestFullscreen().catch(() => {});
  });
  const track = $(".vp__track", box);
  const seek = pct => { if (duration) player.setCurrentTime(Math.max(0, Math.min(1, pct)) * duration * 0.999).catch(() => {}); };
  track.addEventListener("click", e => { const r = track.getBoundingClientRect(); seek((e.clientX - r.left) / r.width); showUi(); });
  track.addEventListener("keydown", e => {
    const step = { ArrowRight: .05, ArrowLeft: -.05 }[e.key];
    if (step) { e.preventDefault(); seek(parseFloat(fill.style.width || 0) / 100 + step); }
  });
}
// The box takes the video's own shape (e.g. the 4:3 thank-you video), at most 600px tall.
function fitVideoShape(box, player) {
  Promise.all([player.getVideoWidth(), player.getVideoHeight()]).then(([w, h]) => {
    if (!w || !h) return;
    box.style.aspectRatio = w + " / " + h;
    if (h > w * .6) box.style.maxWidth = Math.round(600 * w / h) + "px";
  }).catch(() => {});
}

/* ---------- Results wall (tap an image to see it bigger) ---------- */
const PROOF_DIR = "/assets/jean-ivan/proof/";
$$("[data-proof]").forEach(wall => {
  wall.innerHTML = PROOF.map(([name, w, h, alt]) =>
    `<button type="button" class="tshot" data-full="${PROOF_DIR + name}-full.webp"><img loading="lazy" decoding="async" src="${PROOF_DIR + name}.webp" width="${w}" height="${h}" alt="${esc(alt)}"></button>`).join("");
});
const zoom = $("#zoom");
document.addEventListener("click", e => {
  const shot = e.target.closest(".tshot");
  if (!shot || !zoom) return;
  const img = $("img", zoom), small = $("img", shot);
  img.src = small.currentSrc || small.src;   // straight away, then the sharp version
  img.alt = small.alt;
  const full = new Image();
  full.onload = () => { if (img.alt === small.alt) img.src = full.src; };
  full.src = shot.dataset.full;
  zoom.showModal();
});
zoom?.addEventListener("click", () => zoom.close());

/* ---------- Sticky button at the bottom: after the hero, hidden while the form is on screen ---------- */
const sticky = $("#sticky-cta");
if (sticky) {
  document.body.classList.add("has-sticky");
  const hero = $(".hero"), target = $(sticky.dataset.hide);
  const tick = () => {
    const past = window.scrollY > hero.offsetTop + hero.offsetHeight - 80;
    const r = target.getBoundingClientRect();
    sticky.classList.toggle("on", past && !(r.top < innerHeight && r.bottom > 0));
  };
  addEventListener("scroll", tick, { passive: true });
  addEventListener("resize", tick);
  tick();
}

/* ---------- Phone box with a country dropdown (rules from /assets/lead-form.js) ---------- */
function phoneField(select, input) {
  const country = () => select.selectedOptions[0]?.dataset.country || "US";
  const pick = c => { const o = [...select.options].find(o => o.dataset.country === c); if (o) o.selected = true; };
  // → null when empty, else { ok, e164, national, country }. A typed "+44…" switches the country.
  const check = show => {
    const raw = input.value.trim();
    if (!raw) { input.removeAttribute("aria-invalid"); return null; }
    const p = readPhone(raw, country());
    if (p.country !== country()) pick(p.country);
    if (show) { input.setAttribute("aria-invalid", !p.ok); if (p.ok) input.value = formatPhone(p.national, p.country); }
    return p;
  };
  input.addEventListener("blur", () => { if (input.value.trim()) check(true); });
  input.addEventListener("input", () => { if (input.getAttribute("aria-invalid") === "true" && check(false)?.ok) input.removeAttribute("aria-invalid"); });
  select.addEventListener("change", () => { if (input.value.trim()) check(true); });
  const problem = p => !p ? "Please add your phone number."
    : !p.ok ? "Please add a valid " + (p.country === "GB" ? "UK" : p.country) + " phone number (" + PHONE_RULES[p.country].hint + ")." : "";
  return { check, country, pick, problem };
}
const COUNTRY_OPTIONS = [["US", "+1", "🇺🇸"], ["CA", "+1", "🇨🇦"], ["GB", "+44", "🇬🇧"], ["AU", "+61", "🇦🇺"], ["DE", "+49", "🇩🇪"], ["AE", "+971", "🇦🇪"]]
  .map(([c, code, flag]) => `<option value="${code}" data-country="${c}">${flag} ${code}</option>`).join("");

/* ======================================================================= */
/* /discord: the opt-in                                            */
/* ======================================================================= */
if (PAGE === "discord") {
  const form = $("#optin-form"), err = $("#optin-error");
  form.cc.innerHTML = COUNTRY_OPTIONS;
  const phone = phoneField(form.cc, form.phone);
  // What they type is kept, so a reload doesn't wipe it.
  const saveDraft = () => store.set("draft", { name: form.name.value, email: form.email.value, phone: form.phone.value, country: phone.country() });
  form.addEventListener("input", saveDraft);
  const draft = store.get("draft") || (lead.email ? { name: lead.name, email: lead.email, phone: lead.phoneNational || "", country: lead.country } : null);
  if (draft) {
    if (draft.country) phone.pick(draft.country);
    ["name", "email", "phone"].forEach(k => { if (!form[k].value && draft[k]) form[k].value = draft[k]; });
  }
  form.addEventListener("submit", e => {
    e.preventDefault();
    form.name.value = tidyName(form.name.value);
    const name = form.name.value, email = form.email.value.trim(), p = phone.check(true);
    const bad = [];
    form.name.setAttribute("aria-invalid", !name); if (!name) bad.push("your name");
    form.phone.setAttribute("aria-invalid", !p?.ok); if (!p?.ok) bad.push(p ? "a valid " + (p.country === "GB" ? "UK" : p.country) + " phone number (" + PHONE_RULES[p.country].hint + ")" : "a phone number");
    form.email.setAttribute("aria-invalid", !emailOk(email)); if (!emailOk(email)) bad.push("a valid email");
    if (bad.length) { err.textContent = "Please add " + bad.join(", ") + "."; err.hidden = false; return; }
    err.hidden = true;
    lead = { name, email, phone: p.e164, phoneNational: form.phone.value.trim(), country: p.country };
    saveDraft();
    store.set("lead", lead);
    const next = abPage();
    sendLead({ name, email, phone: p.e164, country: p.country, version: CONFIG.versions[next] });
    try { sessionStorage.setItem("jeanivan_just_joined", "1"); } catch {}
    go(next);
  });
  // Load the next page's video player and calendar in hidden frames once they start the form, so page 2 opens fast.
  form.addEventListener("focusin", () => setTimeout(() => {
    [vimeoEmbedUrl(CONFIG.videos.vsl, true, false).href, CONFIG.ghlCalendarUrl].filter(Boolean).forEach(src => {
      const f = document.createElement("iframe");
      f.src = src; f.title = ""; f.tabIndex = -1; f.setAttribute("aria-hidden", "true");
      f.style.cssText = "position:fixed;left:-10000px;top:0;width:640px;height:360px;opacity:0;pointer-events:none;border:0";
      f.addEventListener("load", () => setTimeout(() => f.remove(), 8000));
      document.body.appendChild(f);
    });
  }, 1500), { once: true });
}

/* ======================================================================= */
/* /apply: VSL, then the application, then the calendar            */
/* ======================================================================= */
if (PAGE === "apply" || PAGE === "apply2") {
  // They just joined: a short burst of gold confetti, once.
  try { if (sessionStorage.getItem("jeanivan_just_joined")) { sessionStorage.removeItem("jeanivan_just_joined"); confetti(); } } catch {}
  mountVideo($("#vsl"), CONFIG.videos.vsl, { autoplay: true, title: "Watch this first" });
  const nqBtn = $("#nq-discord");
  if (nqBtn) nqBtn.href = CONFIG.discordUrl;
}
if (PAGE === "apply") {
  const quiz = $("#quiz"), form = $("#quiz-form"), bar = $("#quiz-bar"), back = $("#quiz-back");
  const knowThem = !!(lead.name && lead.email && lead.phone);
  const steps = knowThem ? QUESTIONS : [...CONTACT_QUESTIONS, ...QUESTIONS];
  const answers = {};
  let index = 0, sent = "", advanceTimer = null, phone = null;

  form.innerHTML = steps.map((q, i) => {
    const id = "q-" + q.key, count = `<div class="q__count">Question ${i + 1} of ${steps.length}</div>`;
    const ok = `<div class="q__actions"><button type="button" class="q__ok">OK <span aria-hidden="true">→</span></button><span class="q__hint">press Enter ↵</span></div>`;
    const field = q.type === "choice"
      ? `<div class="q__opts" role="radiogroup" aria-labelledby="${id}-t">${q.options.map((o, k) =>
          `<label class="q__opt"><input type="radio" name="${q.key}" value="${esc(o)}"><span class="q__key">${String.fromCharCode(65 + k)}</span><span>${esc(o)}</span></label>`).join("")}</div>`
      : q.type === "long"
        ? `<textarea class="input" id="${id}" name="${q.key}" placeholder="${esc(q.placeholder || "")}"></textarea>${ok}`
        : q.type === "phone"
          ? `<div class="phone"><select class="select" name="cc" aria-label="Country code">${COUNTRY_OPTIONS}</select><input class="input" id="${id}" name="phone" type="tel" autocomplete="tel-national" placeholder="${esc(q.placeholder)}"></div>${ok}`
          : `<input class="input" id="${id}" name="${q.key}" type="${q.type === "email" ? "email" : "text"}" placeholder="${esc(q.placeholder || "")}"${q.autocomplete ? ` autocomplete="${q.autocomplete}"` : ""}>${ok}`;
    return `<div class="q" data-i="${i}" hidden>${count}<label class="q__title" id="${id}-t" for="${id}">${esc(q.title)}</label>${q.help ? `<p class="q__help">${esc(q.help)}</p>` : ""}${field}<p class="q__err" hidden></p></div>`;
  }).join("");
  const stepEls = $$(".q", form);
  if (!knowThem) phone = phoneField(form.cc, form.phone);
  if (lead.name && form.elements.name) form.elements.name.value = lead.name;
  if (lead.email && form.elements.email) form.elements.email.value = lead.email;

  const show = i => {
    clearTimeout(advanceTimer);
    index = i;
    stepEls.forEach((el, k) => { el.hidden = k !== i; el.classList.toggle("is-in", k === i); });
    bar.style.width = (i / steps.length) * 100 + "%";
    back.disabled = i === 0;
    const input = $("input:not([type=radio]), textarea", stepEls[i]);
    if (input && matchMedia("(hover: hover)").matches) input.focus({ preventScroll: true });
  };
  const valueOf = q => q.type === "choice" ? form.querySelector(`input[name="${q.key}"]:checked`)?.value || "" : (form.elements[q.key]?.value || "").trim();
  const next = () => {
    const q = steps[index], el = stepEls[index], err = $(".q__err", el);
    if (q.key === "name") form.elements.name.value = tidyName(form.elements.name.value);
    let value = valueOf(q), problem = "";
    if (q.type === "phone") { const p = phone.check(true); problem = phone.problem(p); if (!problem) { value = p.e164; lead.country = p.country; lead.phoneNational = form.elements.phone.value.trim(); } }
    else if (!value) problem = q.type === "choice" ? "Please pick an answer." : "Please fill this in.";
    else if (q.type === "email" && !emailOk(value)) problem = "Please enter a valid email.";
    if (problem) { err.textContent = problem; err.hidden = false; return; }
    err.hidden = true;
    answers[q.key] = value;
    if (["name", "email", "phone"].includes(q.key)) { lead[q.key] = value; store.set("lead", lead); }
    const last = index === steps.length - 1;
    if (q.key === "phone") {
      // Name, email and phone given here count as the opt-in (a new row in the sheet, the Discord pipeline in GoHighLevel).
      sendLead({ name: lead.name, email: lead.email, phone: lead.phone, country: lead.country || "" });
      initCalendar();
    } else if (lead.email && lead.phone) {
      // Each answer is saved as it's given (drop-offs show in the sheet). The last one carries "stage".
      const data = { name: lead.name || "", email: lead.email, ...answers };
      const out = last && CONFIG.disqualify.includes(answers.investment);
      if (last) data.stage = out ? "not_qualified" : "applied";
      const key = JSON.stringify(data);
      if (key !== sent) { sent = key; sendLead(data, "application"); }
    }
    if (!last) return show(index + 1);
    quiz.hidden = true;
    if (CONFIG.disqualify.includes(answers.investment)) {
      $("#nq").hidden = false;
      $("#cal").remove();
    } else {
      initCalendar();
      $("#cal").classList.add("is-open");
    }
    $(".book-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  };
  form.addEventListener("submit", e => e.preventDefault());
  form.addEventListener("click", e => {
    if (e.target.closest(".q__ok")) return next();
    // A pick (even of the answer already chosen) moves on after a moment, so they can see it.
    if (e.target.matches("input[type=radio]")) { clearTimeout(advanceTimer); advanceTimer = setTimeout(next, 450); }
  });
  form.addEventListener("keydown", e => {
    if (e.key === "Enter" && !e.shiftKey && e.target.matches("input, textarea")) { e.preventDefault(); next(); }
  });
  back.addEventListener("click", () => { if (index > 0) show(index - 1); });
  show(0);
  if (knowThem) calendarSoon(quiz);   // loads hidden in the background, so it's ready the moment the last answer is in
}

/* ---------- Gold confetti (about 2 seconds, skipped for people who turn motion off) ---------- */
function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("canvas"), ctx = c.getContext("2d"), dpr = Math.min(devicePixelRatio || 1, 2);
  c.className = "confetti"; c.setAttribute("aria-hidden", "true");
  document.body.appendChild(c);
  const size = () => { c.width = innerWidth * dpr; c.height = innerHeight * dpr; };
  size();
  const colors = ["#f5d90a", "#ffe94d", "#fff3a8", "#d4ba00", "#ffffff"];
  const bits = Array.from({ length: 160 }, (_, i) => {
    const fromLeft = i % 2 === 0, angle = (fromLeft ? -60 : -120) + (Math.random() - .5) * 50;
    const speed = (9 + Math.random() * 10) * dpr;
    return {
      x: (fromLeft ? .08 : .92) * c.width, y: c.height * .75,
      vx: Math.cos(angle * Math.PI / 180) * speed, vy: Math.sin(angle * Math.PI / 180) * speed,
      w: (6 + Math.random() * 6) * dpr, h: (3 + Math.random() * 4) * dpr,
      r: Math.random() * Math.PI, vr: (Math.random() - .5) * .3, color: colors[i % colors.length],
    };
  });
  const start = performance.now();
  const frame = now => {
    const t = now - start;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.globalAlpha = Math.max(0, 1 - Math.max(0, t - 1500) / 700);
    bits.forEach(b => {
      b.vy += .35 * dpr; b.vx *= .99; b.x += b.vx; b.y += b.vy; b.r += b.vr;
      ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.r); ctx.fillStyle = b.color;
      ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); ctx.restore();
    });
    if (t < 2200) requestAnimationFrame(frame); else c.remove();
  };
  requestAnimationFrame(frame);
}

/* ======================================================================= */
/* /apply-2: VSL, then a short form beside the calendar (iClose style)       */
/* ======================================================================= */
// The calendar sits blurred and locked beside the form and opens once every answer is in. Visitors who didn't
// come through /discord also give name, email and phone at the top; that counts as their opt-in.
const APPLY2_FIELDS = ["experience", "motivation", "investment", "reason", "ready", "instagram"];
if (PAGE === "apply2") {
  const form = $("#apply-form"), cal = $("#booker-cal"), frameBox = $("#cal-frame");
  const knowThem = !!(lead.name && lead.email && lead.phone);
  let phone = null, optinSent = knowThem, sent = "", timer = null, wasOpen = false;
  if (knowThem) $("#contact-fields").remove();
  else {
    form.cc.innerHTML = COUNTRY_OPTIONS;
    phone = phoneField(form.cc, form.phone);
    if (lead.name) form.elements.name.value = lead.name;
    if (lead.email) form.elements.email.value = lead.email;
    form.elements.name.addEventListener("blur", () => { form.elements.name.value = tidyName(form.elements.name.value); });
  }
  const answers = () => Object.fromEntries(APPLY2_FIELDS.map(k => [k, (form.elements[k].value || "").trim()]));
  // Name, email and phone, once all three are valid (→ the opt-in), or null.
  const contact = () => {
    if (knowThem) return null;
    const name = tidyName(form.elements.name.value), email = form.elements.email.value.trim(), p = phone.check(false);
    return name && emailOk(email) && p && p.ok ? { name, email, phone: p.e164, country: p.country, phoneNational: form.elements.phone.value.trim() } : null;
  };
  const update = () => {
    const c = contact();
    if (c && !optinSent) {
      optinSent = true;
      lead = { ...c };
      store.set("lead", lead);
      sendLead({ name: c.name, email: c.email, phone: c.phone, country: c.country }, "optin");
      initCalendar();
    }
    const a = answers(), done = Object.values(a).every(Boolean) && (knowThem || !!c);
    const out = done && CONFIG.disqualify.includes(a.investment), open = done && !out;
    cal.classList.toggle("is-locked", !open);
    frameBox.inert = !open;
    $("#cal-lock").hidden = open;
    $("#st-form").classList.toggle("on", !open);
    $("#st-book").classList.toggle("on", open);
    // Phones: the calendar is under the form, so bring it into view when it opens.
    if (open && !wasOpen && matchMedia("(max-width: 860px)").matches) cal.scrollIntoView({ behavior: "smooth", block: "start" });
    wasOpen = open;
    // Saved once the form is complete (and again if they change it), a moment later so typing doesn't send a row per key.
    clearTimeout(timer);
    if (!done) return;
    timer = setTimeout(() => {
      const data = { name: lead.name || "", email: lead.email, ...a, stage: out ? "not_qualified" : "applied" }, key = JSON.stringify(data);
      if (key !== sent) { sent = key; sendLead(data, "application"); }
      if (out) { $("#booker-body").hidden = true; $(".booker__steps").hidden = true; $("#nq").hidden = false; }
    }, 1500);
  };
  form.addEventListener("input", update);
  form.addEventListener("change", update);
  form.addEventListener("submit", e => e.preventDefault());
  if (knowThem) calendarSoon(form);   // loads behind the blur in the background, so it's ready the moment the form is done
  update();
}

/* ---------- GoHighLevel calendar ---------- */
// The calendar is the heaviest thing on the page, so the video goes first: it loads once the page has finished
// loading (plus a moment), or as soon as they touch the form, whichever comes first. Only ever once.
function calendarSoon(form) {
  let started = false;
  const start = () => { if (!started) { started = true; initCalendar(); } };
  ["pointerdown", "focusin", "keydown"].forEach(ev => form.addEventListener(ev, start, { once: true, passive: true }));
  const afterLoad = () => setTimeout(start, 2000);
  if (document.readyState === "complete") afterLoad(); else addEventListener("load", afterLoad, { once: true });
  setTimeout(start, 9000);   // even if something on the page is slow to finish loading
}
function initCalendar() {
  const frame = $("#cal-frame");
  if (!frame || !CONFIG.ghlCalendarUrl || !lead.email || frame.dataset.for === lead.email) return;
  frame.dataset.for = lead.email;
  const [first, ...rest] = (lead.name || "").trim().split(/\s+/);
  const u = new URL(CONFIG.ghlCalendarUrl);
  // The calendar fills its booking form from these. Its form needs a last name, so a one-word name gets "-".
  Object.entries({ first_name: first, last_name: rest.join(" ") || (first ? "-" : ""), name: lead.name, email: lead.email, phone: (lead.phone || "").replace(/[^\d+]/g, "") })
    .forEach(([k, v]) => { if (v) u.searchParams.set(k, v); });
  frame.innerHTML = `<iframe src="${esc(u.href)}" title="Book your call" allow="payment" scrolling="yes"></iframe>`;
}
// GoHighLevel tells the page when the call is booked (["msgsndr-booking-complete", …]); then on to /booked.
let bookingSent = false;
addEventListener("message", e => {
  if ((PAGE !== "apply" && PAGE !== "apply2") || bookingSent || !CONFIG.ghlCalendarUrl) return;
  let fromGhl = false;
  try { fromGhl = /(^|\.)(leadconnectorhq\.com|msgsndr\.com)$/.test(new URL(e.origin).hostname) || e.origin === new URL(CONFIG.ghlCalendarUrl).origin; } catch {}
  const text = typeof e.data === "string" ? e.data : Array.isArray(e.data) ? String(e.data[0]) : "";
  if (!fromGhl || !/booking-complete/i.test(text)) return;
  bookingSent = true;
  sendLead({ name: lead.name || "", email: lead.email || "", phone: lead.phone || "" }, "booked");
  store.set("booking", { bookedAt: Date.now() });
  setTimeout(() => go("booked"), 1500);
});

/* ======================================================================= */
/* /booked                                                          */
/* ======================================================================= */
if (PAGE === "booked") {
  mountVideo($("#next-steps"), CONFIG.videos.nextSteps, { autoplay: true, title: "Next steps" });
  const grid = $("#faq-videos");
  grid.innerHTML = CONFIG.faqVideos.filter(([, url]) => url).map(([q], i) =>
    `<article class="vid-card"><h3>${esc(q)}</h3><div class="vslframe" data-faq="${i}"></div></article>`).join("");
  $$("[data-faq]", grid).forEach((box, i) => {
    const [q, url] = CONFIG.faqVideos.filter(([, u]) => u)[i];
    videoOnClick(box, url, q);
  });
  // "Confirm In Gmail" opens their Gmail searched for the confirmation email (Spam and Promotions too);
  // "Confirm In Outlook" opens Outlook on the web (Outlook.com for personal addresses, Microsoft 365 for work ones).
  const email = (lead.email || "").trim().toLowerCase(), domain = email.split("@")[1] || "";
  const words = `subject:"${CONFIG.confirmSubject}"`;
  const query = CONFIG.confirmFrom ? `in:anywhere {from:${CONFIG.confirmFrom} ${words}}` : `in:anywhere ${words}`;
  const gmail = "https://mail.google.com/mail/" + (email ? "?authuser=" + encodeURIComponent(email) : "u/0/") + "#search/" + encodeURIComponent(query).replace(/%20/g, "+");
  $("#confirm-gmail").href = "https://accounts.google.com/ServiceLogin?" + new URLSearchParams({ service: "mail", passive: "true", ...(email ? { Email: email } : {}), continue: gmail });
  const personal = !domain || /^(outlook|hotmail|live|msn|gmail|googlemail|yahoo|icloud|me|mac|aol|proton)\./.test(domain);
  $("#confirm-outlook").href = personal ? "https://outlook.live.com/mail/0/" : "https://outlook.office.com/mail/";
}
