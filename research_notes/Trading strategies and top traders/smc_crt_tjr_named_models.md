# Smart Money Concepts (SMC), Candle Range Theory (CRT), TJR and Other Named Retail Models (Forex, NQ/ES, XAUUSD) — as of October 2026

> **Research-method note for the report writer (read first).** In this session WebFetch failed on every domain (DNS "ENOTFOUND" for tradingview.com, youtube.com, wikipedia.org, writofinance.com, etc.), and the shared WebSearch budget ran out after about 20 queries. So every "Cited Finding" below comes from **search-engine result summaries** of the linked pages, not from full page reads. When one search returned several pages at once, the claim is attributed to that group of pages and may not map to a single URL. Primary sources (Romeo's X/YouTube, TJR's own videos and course, TTrades, Stacey Burke, Daye) could **not** be opened.
>
> Several requested models (TTrades Fractal Model, Stacey Burke, Quasimodo/Over-and-Under, Mentfx, Waqar Asim, Alex G, Jdub, Casper SMC, Daye's Quarterly Theory, prop-firm pass statistics) could not be searched before the budget ran out. They appear only under **Gaps**, as clearly labelled **UNVERIFIED BACKGROUND** (the researcher's prior knowledge, not checked in this session). They must not be presented as sourced facts without re-verification.

---

## 1. SMC vocabulary (as it differs from ICT) and who popularised SMC

### Takeaway
"Smart Money Concepts" is a loose, community-built simplification of Michael J. Huddleston's ICT material, layered onto older Wyckoff "smart money" ideas. It has no single inventor and no canonical rulebook. Its vocabulary (BOS, CHoCH, inducement/IDM, extreme vs decisional order blocks, mitigation) is defined mostly by YouTube/Telegram educators and by TradingView indicator descriptions, and **definitions differ from source to source** (mitigation especially).

### Cited Findings
**ICT vs SMC: lineage and credit**
- ICT is a specific, branded methodology taught by one person, Michael J. Huddleston. SMC is "the broader, community-developed term for institutional price-action trading." — [Phidias Propfirm, ICT vs SMC](https://phidiaspropfirm.com/education/ict-vs-smc); [AlgoKings, SMC vs ICT](https://www.algokings.net/learn/smc-vs-ict/)
- ICT adds **time-based** elements that generic SMC usually leaves out: kill zones, Power of Three, market maker models and defined entry models. — [Quantum-Algo, SMC vs ICT](https://www.quantum-algo.com/blog/smc-vs-ict-concepts/)
- Sources disagree on who created SMC. One calls it "a simplified, repackaged version of Michael J. Huddleston's (The Inner Circle Trader) core teachings." Another says SMC "originated" with Huddleston. A third says SMC "does not have a single inventor" and came from a community that absorbed, simplified and adapted ICT. — [Strike.money](https://www.strike.money/technical-analysis/smart-money-concepts); [TheInnerCircleTraders.com](https://www.theinnercircletraders.com/smart-money-concepts/); [Writofinance SMC & ICT guide](https://www.writofinance.com/guide-to-smc-and-ict/); [FXNX ICT vs SMC](https://fxnx.com/en/blog/ict-vs-smc-hybrid-roadmap-mastering-price-action) (search summary of this group of pages)
- The "smart money" idea predates both. Sources trace it to Richard Wyckoff's early-1900s "Composite Man" (institutional operators modelled as acting as one). One source's claim that Huddleston took the name "Inner Circle Trader" from a Larry Williams workshop is poorly supported and should be treated as unverified. — [TradingWyckoff, SMC](https://tradingwyckoff.com/en/smart-money-concepts/); [Velotrade, SMC guide](https://velotrade.com/blog/smart-money-concepts)

**Core SMC vocabulary (community definitions)**
- **CHoCH (Change of Character):** a break of market structure *against* the prevailing trend, read as an early sign of reversal. It is confirmed when price breaks the last major high/low against the trend. — [TradingView "smart money – main trend and counter trend" indicator](https://www.tradingview.com/script/XOBnj1FR-smart-money-main-trend-and-counter-trend)
- **BOS (Break of Structure):** a with-trend break of a swing. One TJR-style indicator makes BOS stricter: after the sweep, price must break a recent swing level with an impulse candle whose **body is more than 50% of its range**. — [TradingView TJR Strategy Indicator](https://www.tradingview.com/script/IYLMKdC6-TJR-Strategy-Indicator/)
- **Inducement (IDM):** the extreme point of the last pullback in structure when price makes a BOS or CHoCH, i.e. a liquidity "lure." — [TradingView "smart money" indicator](https://www.tradingview.com/script/XOBnj1FR-smart-money-main-trend-and-counter-trend). One SMC guidebook says inducement "only takes place when a major high or low is broken" and signals trend continuation. — [SMC Guide Book (Scribd)](https://www.scribd.com/document/682017839/SMC-Guide-Book)
- IDM is also described as "bait liquidity": an intermediate minor swing that sits just before the real point of interest (higher-timeframe OB or FVG). Price typically sweeps it before reaching the real zone, so SMC traders enter only *after* the IDM sweep. — [LiquidityScan OB framework](https://liquidityscan.io/blog/order-blocks-smc-framework-an-institutional-guide); [FXNX OB vs S/D](https://fxnx.com/en/blog/smc-order-blocks-vs-supply-demand-stop-getting-swept) (search summary of this group)
- **Order block (OB):** "the final bearish or bullish activity before a significant price shift," i.e. the last opposing candle before the impulse. — [TradingView "smart money" indicator](https://www.tradingview.com/script/XOBnj1FR-smart-money-main-trend-and-counter-trend); [Snappchart TJR article](https://www.snappchart.app/blog/beginner-playbook/tjr-ict-trading-strategy)
- **Extreme OB (OB-EXT):** "the first and lowest Order Block that you'll find between a Major Low and a Major High," i.e. the origin of the leg. — [TradingView "True SMC" indicator](https://in.tradingview.com/script/6fbwMCVa-True-SMC/)
- **Decisional OB / OB-IDM:** "the closest OB you find below the current IDM." Another script calls the zone just beyond inducement the "decisional" block and says it is crucial for finding entries. So in a bullish leg: IDM (minor pullback low) → decisional OB just below it → extreme OB at the origin. — [TradingView "True SMC"](https://in.tradingview.com/script/6fbwMCVa-True-SMC/); [TradingView "Advance SMC ICT V4"](https://tr.tradingview.com/script/LoMNyiZG-Advance-Smc-Ict-V4)
- **Mitigation** has two competing meanings:
  - (a) Price returns to an old OB that reacted once but did not fully fill the institutional orders; the second visit "mitigates" the remaining orders.
  - (b) A "mitigation block" is a *failed* OB that forms after a failure swing with **no** liquidity sweep ("the trend dies before sweeping extremes").
  - Sources disagree, so check which definition each course uses. — [FXNX, Mitigation vs Order Block](https://fxnx.com/en/blog/mitigation-vs-order-block-stop-confusing-two)
- SMC terms are not standardised across traders; most available definitions come from indicator vendors and blogs, not authoritative references. — [LiquidityScan](https://liquidityscan.io/blog/order-blocks-smc-framework-an-institutional-guide); [TradingWyckoff](https://tradingwyckoff.com/en/smart-money-concepts/)

**Who teaches it (evidence found)**
- "Ali Khan" runs a YouTube channel whose handle explicitly ties him to ICT (`@Ali_Khan_ICT`). — [YouTube @Ali_Khan_ICT](https://www.youtube.com/@Ali_Khan_ICT)
- Long-form free courses titled "Ultimate ICT & SMC Course (12 Hours)" (linked to edgeskool.net) and "Trading Manipulation Model 2026" show that by 2026 creators routinely sell ICT and SMC as one blended curriculum. — [YouTube, Ultimate ICT & SMC Course](https://www.youtube.com/watch?v=IXSu0MClr34); [YouTube, Trading Manipulation Model 2026](https://www.youtube.com/watch?v=QBIsYw8iqPY)

### Inferences
- The practical difference: **ICT = time + price (kill zones, PO3, macros, dealing ranges); SMC = mostly price structure (BOS/CHoCH, IDM, OB/supply-demand, premium/discount) with little time logic.** Much of 2024–2026 "SMC" content has re-imported ICT time elements (kill zones, Silver Bullet), so the line is now blurry.
- The SMC-specific additions that ICT does not emphasise are: inducement (IDM), the "extreme vs decisional" OB hierarchy, strict BOS/CHoCH labelling (internal vs external structure), and the "wait for IDM sweep, then enter at the decisional/extreme POI with a lower-timeframe CHoCH" routine (the "refined" or "sniper" entry).
- Because definitions vary by educator, any backtest or claim about "SMC" is really a claim about one person's version of it.

### Gaps
- Could not verify who first used "SMC" as a brand (Telegram groups c. 2019–2021 are commonly credited) or the roles of "Forex Mentor", "FX Alfonso" or "Cue Banks". No sources were retrieved, and Cue Banks in particular should **not** be linked to SMC without evidence.
- **UNVERIFIED BACKGROUND (not checked this session):**
  - **Premium/discount:** buy only below the 50% (equilibrium) of the current dealing range, sell only above it; this is shared with ICT.
  - **Top-down analysis:** typically Daily/4H for bias and POI → 1H/15m for structure → 5m/1m for a CHoCH entry.
  - **Refined entry:** narrow a higher-timeframe OB down to the lower-timeframe OB/FVG inside it, for a tighter stop and higher R:R.
  - **"Sniper entry":** marketing term for such refined lower-timeframe entries, often advertised at 1:10+ R:R.
  - **"SMC flip" / flip zone:** a supply zone that becomes demand (or vice versa) after a BOS through it, similar to the classic support/resistance flip.
  - **Liquidity grab / sweep:** a wick beyond equal highs/lows or a session high/low that closes back inside.
  - **Internal vs swing structure:** many SMC indicators (e.g. LuxAlgo's SMC script) label both.
  - Educators widely associated with "pure SMC" teaching include Waqar Asim (inducement-heavy SMC on YouTube) and "Casper SMC". Their exact rule sets were not verified.
- No peer-reviewed evidence was found that SMC order blocks or BOS/CHoCH signals have predictive edge. This is a gap in the evidence, **not** a confirmation that they lack edge.

---

## 2. Candle Range Theory (CRT): origin, rules, variants, relation to turtle soup, AMD/PO3

### Takeaway
CRT ("Candles Are Ranges Theory") treats every higher-timeframe candle as a range. The setup is a **sweep of one side of a reference candle's range followed by a close back inside it**, targeting the **opposite end** of the range, usually confirmed by a lower-timeframe market structure shift. It is widely credited to the X/Telegram trader **@Romeotpt ("Raid")**. Authorship is debated, and resellers and impersonators proliferate. It is the same shape as ICT's PO3/AMD and Connors–Raschke "turtle soup" applied candle-by-candle.

### Cited Findings
**Origin and attribution**
- RomeoTPT is "widely credited as the creator of Candle Range Theory" and is "the trader most consistently credited with formalizing" it into a teachable model. Official channels listed: x.com/Romeotpt, youtube.com/@Romeotpt, t.me/officialRomeotpt. The page warns the space is "dense with impersonators and course resellers trading on his name." — [CRT Terminal, Who created CRT](https://crtterminal.com/learn/who-created-crt)
- LuxAlgo says the model grew out of the SMC/ICT community in the 2020s and that some sources credit it to "a trader known online as Romeotpt (also 'Raid')." — [LuxAlgo, Candle Range Theory](https://www.luxalgo.com/library/concept/candle-range-theory/)
- A widely shared 2024 X thread by "Sham" (@SpeculatorFL) acknowledges "considerable debate about the true authorship of CRT" but credits @Romeotpt. — [Sham on X](https://twitter.com/SpeculatorFL/status/1784493604473618604); related thread: "Every candle represents a range in itself. Treat each candle as a distinct range." — [Rattibha thread](https://en.rattibha.com/thread/1780825580789014848)
- The original name was "Candles Are Ranges Theory"; public script descriptions attribute it to @Romeotpt on X. — [TheInnerCircleTraders.com CRT](https://www.theinnercircletraders.com/candle-range-theory-crt-trading/); [Writofinance CRT](https://www.writofinance.com/candle-range-theory-crt/) (search summary of this group)
- A TradingView script credits the concept to "Romeotpt (Raid)" and says Romeo calls the sweep-and-reclaim reversal "turtle soup." — [TradingView, Ighodalo Gold CRT](https://www.tradingview.com/script/UEPdjqLf-Ighodalo-Gold-CRT-Candles-are-ranges-theory/)

**Core rules**
- The CRT candle is the one candle in a recent block whose high and low contain the whole block's range. A break beyond that range is **manipulation**; a close back inside is a **potential distribution phase**. After a bearish reversal at the high the target is the CRT low; after a bullish reversal at the low the target is the CRT high. On the way, price "often provides multiple 'turtle soup' entry opportunities." — [TradingView, Ighodalo Gold CRT](https://www.tradingview.com/script/UEPdjqLf-Ighodalo-Gold-CRT-Candles-are-ranges-theory/)
- **Stricter definition (bearish CRT):** the CRT candle sweeps above the parent high, does NOT sweep below the parent low, and closes inside the parent range (bullish is the mirror image). Rejection strength is graded by whether the close or the wick reaches the **50% level** of the parent range. — [TradingView, "CRT – Candle Range Theory" (invite-only)](https://ar.tradingview.com/script/ZSDolrKY-CRT-Candle-Range-Theory)
- The next candle must trade beyond **only one** side of the range. A close on or beyond the swept side is a **breakout, not a CRT**. — [ProEA, CRT in three 4-hour candles](https://proea.app/en/blog/candle-range-theory); [TradingWyckoff CRT](https://tradingwyckoff.com/en/crt/) (search summary of this group)
- **3-candle / PO3 framing:** C1 = range (accumulation), C2 = sweep/manipulation ("turtle soup"), C3 = distribution/expansion toward the opposite side. "The Power of Three (PO3) is 3 candles CRT." CRT is "typically a three-candle model but is not necessarily restricted to" three candles. — [Scribd, CRT overview](https://www.scribd.com/document/888159150/Candle-Range-Theory-CRT); [ProEA](https://proea.app/en/blog/candle-range-theory); [TradingWyckoff CRT](https://tradingwyckoff.com/en/crt/)
- **Entry models (Legacy Trading deck):** "Model #1 (OB/CSD)" enters on the 2nd candle (the turtle soup). Other models enter on the 3rd candle, relative to its open and to the 50% of the 2nd candle. ("CSD" likely means change in state of delivery, an ICT term.) — [Legacy Trading CRT PDF (SlideShare)](https://www.slideshare.net/slideshow/candle-range-theory-crt-by-legacy-trading-pdf/283734795)
- **Turtle soup origin:** the name comes from Connors & Raschke's mid-1990s book *Street Smarts*, which faded failed 20-day breakouts. It is "a joke at the expense of the trend-following Turtle traders." — [TradingWyckoff CRT](https://tradingwyckoff.com/en/crt/); [El Trader Financiado, CRT and Turtle Soup](https://www.eltraderfinanciado.com/ar/blog/crt-trading) (search summary of this group)

**Time-based "4H CRT" (the popular 1am/5am/9am model)**
- Most guides centre on **4-hour candles opening at 1am, 5am and 9am New York time**. The 1am candle is the reference range and the 5am candle is the reaction; the 9am candle is also a 4H open. Guides disagree on time zones, and one lists 1am, 5am, 9am, 1pm, 3pm and 9pm with no time zone. — [ProEA](https://proea.app/en/blog/candle-range-theory); [TheInnerCircleTraders.com](https://www.theinnercircletraders.com/candle-range-theory-crt-trading/); [TradingView CRT (H1 only)](https://www.tradingview.com/script/K72OaKon/) (search summary of this group)
- A free TradingView script: wait for the 1am candle's high or low to be taken by the 5am candle, then wait for a **15-minute Market Structure Shift** to confirm entry. Its author claims it is "particularly effective" on Gold, EUR/USD, NAS100, US30 and S&P 500. That claim is unverified. — [TradingView, 4H CRT 1AM and 5AM](https://www.tradingview.com/script/kXR0vkG2-4H-CRT-1AM-and-5AM)
- **Commercial variants:** MT5 EAs and scanners sell CRT logic. One scans 2-candle, 3-candle, "Inside CRT" and multi-candle CRT across up to 9 timeframes. Another frames CRT for gold as "controlled range → liquidity raid beyond range → structure shift → execute." Their performance claims are vendor marketing and unverified. — [MQL5 CRT Scanner MTF](https://www.mql5.com/fr/market/product/183976); [MQL5 RA CRT Engine](https://www.mql5.com/en/market/product/160677); [MQL5 CRT Strategy Pro](https://www.mql5.com/fr/market/product/162310)

**Criticism**
- One guide argues that the widely shared 1am/5am strategy "does not define a stop, a target or a time zone." It also says applying the rule to 4H candles is an extrapolation, with **no published evidence** that it works on those timeframes. Win-rate and backtest claims on CRT sites are unverified. — [ProEA](https://proea.app/en/blog/candle-range-theory); [TradingWyckoff CRT](https://tradingwyckoff.com/en/crt/) (search summary of this group)
- The community and educational sources "are not peer-reviewed," their definitions vary, and "none of them are proof that the setups work as advertised." — search summary of [Scribd CRT](https://www.scribd.com/document/888159150/Candle-Range-Theory-CRT), [Legacy Trading](https://www.slideshare.net/slideshow/candle-range-theory-crt-by-legacy-trading-pdf/283734795), [CRTtrading.com](https://www.crttrading.com/), [TradingView CRT by Lucas](https://de.tradingview.com/script/g9ki7N3P-Candle-Range-Theory-CRT-by-Lucas)

### Inferences
- A standard CRT trade, as commonly taught:
  1. Mark a higher-timeframe reference candle (Daily, 4H or 1H, often anchored to key times).
  2. Wait for the next candle to sweep exactly one side and close back inside.
  3. Ideally the sweep hits a higher-timeframe key level or POI (PDH/PDL, weekly high/low, OB, FVG).
  4. Drop to a lower timeframe (e.g. 15m for 4H, 1–5m for 1H) and wait for an MSS/CISD.
  5. Enter on the lower-timeframe FVG/OB.
  6. Stop beyond the sweep wick.
  7. TP1 at the 50% of the reference range; TP2 at the opposite end of the range.
- Typical timeframe pairings: Daily→1H/15m, 4H→15m/5m, 1H→5m/1m. Most popular markets: NQ/ES, XAUUSD, EURUSD/GBPUSD.
- CRT is essentially "turtle soup on candles" plus "PO3 at every timeframe." Its viral appeal (2024–2026 TikTok/X) is that it reduces ICT to one candle-level rule that is easy to screenshot.
- Because the rule set is underspecified (which candle, which time zone, what counts as a valid key level), backtests by different people will disagree.

### Gaps
- No primary material from Romeo himself could be read (X/YouTube/Telegram blocked by tool failure).
- Unconfirmed popular sub-terms: "CRT + Key Level" (romeo's "KL" filter), "Advanced protocols," "CRT TBS (three-bar setup)" (searched; not found), "Purge/Reclaim", "Inside bar CRT", "CRT 1H/4H/Daily models", "SMT with CRT" (using SMT divergence between, e.g., NQ/ES or EURUSD/GBPUSD at the C2 sweep as a filter). These are commonly discussed but **not sourced here**.
- No independent backtest of CRT was found.

---

## 3. TJR (TJR Trades): who he is, the step-by-step model, claims and criticism; is "TGRs" = "TJR's"?

### Takeaway
"TJR" is **Tyler J. Riches** ("TJR Trades"), a US day-trading YouTuber/educator who trades mainly **NQ/ES futures around the New York open** with a repackaged ICT/SMC sequence:

1. Higher-timeframe bias.
2. Mark liquidity (previous day/week, session highs/lows, equal highs/lows).
3. Wait for a sweep.
4. Wait for a lower-timeframe BOS/CHoCH with displacement.
5. Enter at the FVG/IFVG/OB.
6. Stop beyond the sweep; target the opposite liquidity.

His lifestyle and income claims (a "$1,000,000/month trading empire") are **unverified**. Critics allege that his wealth comes from education and memberships rather than trading. **The user's "TGRs" almost certainly means "TJR's"**: no trading model called "TGR" was found.

### Cited Findings
**Identity and business**
- TJR is "the trading handle of Tyler J. Riches." He trades **NQ and ES futures at the NYSE open**, charted on TradingView. — [Snappchart, TJR trading strategy](https://www.snappchart.app/blog/beginner-playbook/tjr-ict-trading-strategy); [Writofinance, "Who is Tyler J. Riches?"](https://www.writofinance.com/tjr-trades-tyler-j-riches/)
- YouTube coverage refers to "Tyler Riches also known as TJR Trades." His site promotes a documentary about going from "Broke College Kid to 7-Figure Day Trader" and claims "over 50,000 members of the TJR Freaks community." — [jointjrtrades.com](https://www.jointjrtrades.com/); [YouTube interview "I Was BROKE!"](https://www.youtube.com/watch?v=YrILeI7WvVg)
- Delivery: a free YouTube "bootcamp" course, **paid memberships on a third-party platform**, and a **separately sold TradingView indicator bundle**. — [Snappchart](https://www.snappchart.app/blog/beginner-playbook/tjr-ict-trading-strategy). Students' "TJR Bootcamp" flashcards exist on Quizlet. — [Quizlet](https://quizlet.com/935969853/tjr-bootcamp-flash-cards/)
- Marketing content includes "A Day In TJR's $1,000,000/Month Trading Empire" and a podcast episode "My 'New' Day Trading Strategy Revealed." The income figure is a **self-promotional claim, unverified**. — [YouTube](https://www.youtube.com/watch?v=bba_vEkOiKs); [Spotify](https://open.spotify.com/episode/3Ox0VU4Nt69XZUJfygfbuG)
- A celebrity-bio site lists a $10M net worth for "Tyler J. Riches" **without any source** (low-quality site). Another blog estimates $15–25M and titles it "Not From Trading." — [TheCityCeleb](https://www.thecityceleb.com/biography/entrepreneur/tjr-trades-biography-instagram-girlfriend-age-parents-net-worth-height-trading-youtube/); [BestStockStrategy](https://beststockstrategy.com/tjr-trades-net-worth/)

**The strategy (third-party codifications; TJR's own videos could not be opened)**
- **Four building blocks:**
  - market structure (swing highs/lows)
  - liquidity sweeps (a wick through an obvious level that closes back inside)
  - order blocks (the last opposing candle before an impulse)
  - fair value gaps (three-candle imbalances)
- The thesis: price runs to resting stops, takes them and reverses, so you **enter on the reaction, not the breakout**. — [Snappchart](https://www.snappchart.app/blog/beginner-playbook/tjr-ict-trading-strategy)
- **Typical workflow:** define daily bias → mark liquidity → wait for a sweep → confirm reversal with a BOS → wait for a retrace to an OB, FVG or equilibrium → enter. Key sessions are the London and New York opens. **Entry on 5m, bias on 15m or 1h.** Stop just beyond the sweep; take profit at the next structure or **2–3× risk**. — [Scribd, TJR Liquidity Sweep Strategy](https://www.scribd.com/document/916439470/TJR-Liquidity-Sweep-Strategy); [Snappchart](https://www.snappchart.app/blog/beginner-playbook/tjr-ict-trading-strategy)
- **Coded version "TJR v4" (Sweep → BOS → FVG):**
  - Liquidity pools: previous day/week highs and lows, session highs and lows, equal highs and lows.
  - Optional filters: ADX chop filter, higher-timeframe EMA bias, **SMT divergence**, **midnight-open alignment**, **killzone timing**, combined into a confluence score.
  - Risk: 1% per trade; automatic stop beyond the sweep; targets "cascade" to the nearest unswept pool.
  - This is third-party code, not TJR's. — [TradingView TJR v4 Strategy](https://it.tradingview.com/script/xXrbltSH-TJR-v4-Strategy/)
- **Another coded version** splits the logic into 8 checks. BOS requires an impulse candle with body >50% of its range. SMT compares the chart with a correlated instrument and is off by default. FVG = 3-candle imbalance left by the impulse. — [TradingView TJR Strategy Indicator](https://www.tradingview.com/script/IYLMKdC6-TJR-Strategy-Indicator/)
- **Inverse FVG (IFVG)**, a staple in TJR-style entries: an old FVG that price closes through after a sweep and displacement, after which the zone flips role. Sequence: liquidity sweep → displacement through the FVG → close beyond the gap → retest. — [Aron Groups, IFVG](https://arongroups.co/technical-analyze/inverse-fair-value-gap-ifvg/)
- Fan and creator content iterates on the model ("How I Improved TJR's Trading Strategy Even Further #ict #tjr"). Prop firms publish explainers on "ICT, TJR & Your Own" strategies, which shows TJR's model is a recognised reference point in prop-firm marketing in 2026. — [Lilys.ai notes](https://lilys.ai/en/notes/day-trading-strategy-20251105/improved-tjrs-trading-strategy); [Phidias Propfirm, Trading Strategies Explained 2026](https://phidiaspropfirm.com/trading-strategies-explained)
- A video titled "I Coded TJR's Trading Strategy. Does It Work?" exists; its results could not be retrieved. — [YouTube](https://www.youtube.com/watch?v=4uqeKO6KcJk)
- Snappchart notes the method "leaves new traders on their own in key respects." Another source says it can work "in the right hands" only after backtesting on your own market. — [Snappchart](https://www.snappchart.app/blog/beginner-playbook/tjr-ict-trading-strategy); [Phidias](https://phidiaspropfirm.com/trading-strategies-explained)

**Criticism and allegations (all unverified; no regulatory findings located)**
- A blog says TJR has **never published verified broker statements from a regulated US broker**. It claims his income is mostly from education, and that public tax filings for his family's school contradict the "rags-to-riches" story. **Not independently verified.** — [BestStockStrategy](https://beststockstrategy.com/tjr-trades-net-worth/)
- The same blog raises allegations about **1of1 Funding** (a prop firm it associates with him): multiple BBB complaints, suspicious Trustpilot patterns and alleged non-payment of winning traders. It also cites a March 2026 video alleging private messages in which TJR asked other traders for signals. **All secondhand and unverified.** — [BestStockStrategy](https://beststockstrategy.com/tjr-trades-net-worth/)
- Critical videos and podcasts: "Exposing the Biggest Fake Guru in Trading: TJR Trades"; "Is TJR Trades a FRAUD? [How He REALLY Makes Millions?]"; a TikTok claiming a streamer was "scammed" out of $15K (no verification). — [YouTube](https://www.youtube.com/watch?v=kkfEMiR8z6s); [Spotify](https://open.spotify.com/episode/4Sqm3L1c0wcsTX0R7UMxAC); [TikTok](https://www.tiktok.com/@skintsupper/video/7617670908974599446)

**"TGR"**
- A search for any ICT/forex model called "TGR" found none. The named ICT models that do appear in TradingView listings are the 2022 Model, Unicorn, Liquidity Raid, OTE and Silver Bullet. — [TradingView script search "Inner circle trader"](https://it.tradingview.com/scripts/search/Inner%20circle%20trader)

### Inferences
- **"TGRs" ≈ "TJR's" (high confidence).** Voice dictation easily confuses "J" (jay) with "G" (gee), the possessive "-s" matches "TJR's [strategy]," and TJR is one of the most-discussed retail day-trading names of 2024–2026. No competing "TGR" model exists in search results.
- TJR's model is best described as a **simplified ICT 2022 model / SMC sweep-reversal for the NY session**:
  - Higher-timeframe bias from daily/4H structure and draw on liquidity.
  - Mark PDH/PDL, Asia/London highs and lows, equal highs/lows.
  - At or after 9:30 ET, wait for one of those levels to be swept.
  - Wait for a 1–5m BOS/CHoCH with displacement (impulse candle).
  - Enter on the FVG or IFVG retrace (sometimes an OB or the 50% equilibrium); optional SMT (NQ vs ES) confirmation.
  - Stop beyond the sweep wick; target the next liquidity pool or 2–3R.
  - Typically trades NQ/ES on prop accounts; also forex/gold at the London open.
- His business model (free bootcamp funnel → paid membership → indicator bundle → prop-firm affiliation) is typical of 2024–2026 trading influencers. Revenue claims cannot be separated from education income.

### Gaps
- TJR's own rule wording (bootcamp episodes), his exact NY time window, preferred timeframes and whether he still uses IFVG as the primary entry in 2026 could not be read directly.
- Prop-firm affiliations, payout certificates and subscriber counts are unverified. Whether 1of1 Funding is in fact his firm, and the status of those complaints, is unconfirmed.
- No independent backtest of TJR's model was retrieved (the "I Coded TJR's Strategy" video exists, but its results were not readable).

---

## 4. "ACRAM": what the user most likely means

### Takeaway
**No trading model, educator or acronym named "ACRAM" (or a well-known trading educator named "Akram") could be found.** Searches for "ACRAM trading strategy," "Akram CRT model," "Akram trading YouTube ICT/SMC" and "Akram forex/gold mentor" returned nothing relevant. The term is most likely a voice-dictation garble. The best-supported reading is a **CRT-family term**, because CRT is the model most often discussed alongside TJR in 2024–2026 and is routinely combined with AMD/PO3. The user should be asked to confirm.

### Cited Findings
- A search for "ACRAM" trading strategy returned only unrelated tickers (ACR, ACMR, ACRM); no strategy of that name. — [search results incl. Wikipedia "Trading strategy"](https://en.wikipedia.org/wiki/Trading_strategy)
- A search for an "Akram" trader teaching ICT/SMC on NQ found **no such YouTube trader**. Results were other ICT/SMC creators, and the only "Akram" hit was an unrelated Qatari comedian. — [Wikipedia, Nawaal Akram (unrelated)](https://en.wikipedia.org/wiki/Nawaal_Akram); [YouTube @Ali_Khan_ICT](https://www.youtube.com/@Ali_Khan_ICT)
- A search for an "Akram" forex/gold mentor found none. Nearest results were other academies (e.g. AB Forex Academy, mentor "Abdullah"; Forex Tutor Academy, founder Asif Mahmood Khan). — [AB Forex Academy](https://abforexacademy.com/); [Forex Tutor Academy](https://www.forextutoracademy.com/)
- A search pairing "Akram" with CRT returned only generic CRT tools (e.g. the 4H CRT 1AM/5AM script), with nothing tying CRT to an "Akram." — [TradingView 4H CRT 1AM and 5AM](https://www.tradingview.com/script/kXR0vkG2-4H-CRT-1AM-and-5AM)
- CRT is explicitly framed as AMD/PO3 on candles ("C1 is the range, C2's sweep is the fake move, C3 is the run"), so "CRT + AMD" is a standard pairing. — [ProEA](https://proea.app/en/blog/candle-range-theory); [Scribd CRT](https://www.scribd.com/document/888159150/Candle-Range-Theory-CRT)

### Inferences
Ranked candidates (all inferences; none confirmed):
1. **A CRT-based term**, most plausibly **"CRT + AMD"** (the letters A-C-R-A-M map onto "a CRT AMD [model]"), **"a CRT model,"** or **"CRT AM"** (the "4H CRT" taught on the 1am/5am/9am New York candles). Rationale: CRT is the other dominant viral model of 2024–2026, it is named in the same breath as TJR on TikTok, and the user's request to the coordinator already lists "PO3 with CRT."
2. **A person named "Akram/Acram"** (e.g. a regional Instagram/TikTok gold or forex mentor). No evidence of a prominent one was found. If the user follows a specific creator, they need to give the handle.
3. **"ACR"/"ADR"-type volatility terms** (average candle range / average daily range used to set CRT targets). Low plausibility; no evidence found.
4. Lower-plausibility sound-alikes worth asking about: "Arjo" (a known ICT YouTuber), "MMXM" (market maker model), "PO3/AMD," "Quarterly Theory." None is phonetically close; listed only for completeness.

### Gaps
- The intended meaning cannot be confirmed from public sources. **Recommend asking the user where they heard "ACRAM"** (platform, creator, or a screenshot).
- Search budget was exhausted before TikTok/Instagram handle searches (e.g. "akramfx," "akram.trades") could be run.

---

## 5. Other named modern retail models (TTrades, Stacey Burke, QM/Over-Under, MMXM, Silver Bullet/Unicorn/2022 variants, Mentfx, Waqar Asim, Alex G, Jdub, Casper SMC, Daye's Quarterly Theory, 90-minute cycles)

### Takeaway
The searches available in this session yielded **only limited sourced evidence** for these models. TradingView listings confirm that the ICT-derived named models (2022 Model, Unicorn, Liquidity Raid, OTE, Silver Bullet) are the most-coded "named" models, and the CRT/TJR family dominates 2024–2026 social media. **The rules for TTrades' fractal model, Stacey Burke, Quasimodo/Over-and-Under, Daye's Quarterly Theory, Mentfx, Alex G, Waqar Asim, Jdub and Casper SMC are given under Gaps as unverified background and need source verification.**

### Cited Findings
- TradingView's ICT model listings name: **2022 Strategy Model, Unicorn Model, Liquidity Raid Strategy Model, OTE Strategy Model, Silver Bullet Strategy Model.** A typical coded entry occurs "after a Market Structure Shift, confirmed by FVG fill or OB retest." — [TradingView script search](https://it.tradingview.com/scripts/search/Inner%20circle%20trader)
- NQ creators widely publish "ICT 2022 Model" live-trade walkthroughs, and "Asia/London session" NQ/ES live streams blend ICT and SMC. — [YouTube, ICT 2022 Model NQ walkthrough](https://www.youtube.com/watch?v=WwzCwh9BvG8); [YouTube, How To Trade The ICT 2022 Model](https://www.youtube.com/watch?v=fidc8EI03pc); [YouTube, Live Trading ICT Asia/London NQ/ES](https://www.youtube.com/watch?v=OFcljSMId3M)
- "Manipulation model" branding (an SMC/ICT "Trading Manipulation Model 2026") shows the trend of naming sweep-reversal sequences as proprietary "models." — [YouTube](https://www.youtube.com/watch?v=QBIsYw8iqPY)
- Coded "TJR-style" scripts add **midnight-open alignment** and **killzone timing**. These are time-based ICT/Quarterly-Theory concepts now merged into mainstream retail models. — [TradingView TJR v4](https://it.tradingview.com/script/xXrbltSH-TJR-v4-Strategy/)

### Inferences
- The 2024–2026 "named model" ecosystem has three layers:
  1. **ICT originals** (2022 model, Silver Bullet, Unicorn, OTE, MMXM, PO3), covered by the other researcher.
  2. **Simplified repackagings with a personal brand** (TJR's sweep→BOS→FVG/IFVG; SMC's IDM→POI→CHoCH; CRT's candle sweep).
  3. **Time/fractal frameworks** (Daye's Quarterly Theory / 90-minute cycles; TTrades fractal model), used to time layers 1–2.
- Gold and NQ day traders most often combine a CRT higher-timeframe candle bias + a time window (London or NY AM; Silver Bullet hours) + a TJR/ICT lower-timeframe sweep → MSS → FVG entry + SMT between correlated markets (NQ/ES; EURUSD/GBPUSD; XAU/XAG or DXY).

### Gaps
**UNVERIFIED BACKGROUND (researcher's prior knowledge; not checked this session — verify before use):**
- **TTrades Fractal Model (TTFM), YouTube "TTrades":**
  - Uses fixed higher-/lower-timeframe pairings (e.g. Monthly→Daily, Weekly→4H, Daily→1H, 4H→15m, 1H→5m).
  - Looks for a higher-timeframe 3-candle swing formation and "candle 2/candle 3" expansion logic (close to CRT/PO3).
  - On the paired lower timeframe, waits for a **CISD (change in state of delivery)** at a higher-timeframe level or after a sweep of the prior candle's high/low.
  - Enters on the CISD retrace; stop at the swing; target the higher-timeframe candle's expansion / opposite extreme.
  - Heavily used on NQ/ES and forex.
- **Stacey Burke, "Best Trade Setups"** (ex-prop/bank trader turned educator):
  - **Three-day cycle**: run up/down, then a "signal day," then a reversal.
  - **First Red Day (FRD) / First Green Day (FGD)**: after a run of up days, the first down close signals a short setup the next day (and vice versa).
  - **Pump & dump / dump & pump**; "**3 levels of rise/drop**" counting; **inside day**; trading off the prior day high/low at the **Asia → London → NY session** handoffs; weekly template (high/low of week often set early in the week).
  - Trades forex, indices and gold.
- **Quasimodo (QM/QML) and "Over and Under":**
  - Quasimodo comes from the Malaysian SnR / RTM (Read The Market) school; Mansor Sapari is commonly associated with QM and Malaysian SnR — **verify attribution**.
  - Bearish QM: high → low → higher high → lower low (break of the prior low); sell the retest of the "left shoulder" level (QML). Bullish is the mirror. Stop beyond the head; target the next level.
  - "Over and Under": price breaks above a level (over), then fails and closes back below (under), trapping breakout buyers. It is a fakeout/flip pattern, essentially an S/R-flip trap.
  - The related **MSNR (Malaysian SnR)**: A/V-shape levels, "fresh vs unfresh" levels, gaps, "storyline." Popular in gold communities.
- **MMXM (Market Maker Buy/Sell Model)**, ICT: original consolidation → engineering of liquidity → smart-money reversal at a higher-timeframe PD array → re-distribution back to the origin. Covered by the ICT researcher.
- **Silver Bullet variants**, ICT: FVG entry inside fixed one-hour windows, 3–4am, 10–11am and 2–3pm New York, after a sweep. Retail variants add CRT or SMT filters.
- **Unicorn**, ICT: entry where a breaker block overlaps an FVG.
- **2022 model**, ICT: sweep → displacement/MSS → FVG entry → target opposite liquidity.
- **"Bread and butter" setups**, ICT: a daily-template term for London-session and NY-continuation buy/sell setups.
- **Daye's Quarterly Theory** ("Daye," @traderdaye):
  - Time is divided fractally into **quarters**: year → 4 quarters; month → 4 weeks; week → days; day → 4 sessions of 6 hours (Asia 18:00–00:00, London 00:00–06:00, NY AM 06:00–12:00, NY PM 12:00–18:00 ET); each session → four **90-minute cycles**; each 90-min → four 22.5-min quarters.
  - Each set of four quarters runs Q1 accumulation, Q2 manipulation, Q3 distribution, Q4 reversal/continuation ("AMDX").
  - The "**True Open**" = the open of Q2 (e.g. the session's second 90-minute cycle); price relative to the true open frames premium/discount.
  - Adds **Sequential SMT (SSMT)** between correlated markets and "precision swing points."
  - The popular **90-minute cycle** models come from this framework.
- **Mentfx (Mentfx mentorship):**
  - Structure-mapping SMC/supply-demand: higher-timeframe structure and POI, then lower-timeframe confirmation entry.
  - Known for strict structure rules and "confirmation" entries.
  - Exact model names are unverified.
- **Waqar Asim:** YouTube SMC educator focused on liquidity, **inducement**, BOS/CHoCH and refined POI entries. Exact course content unverified.
- **Alex G ("Set & Forget"):** a swing/day approach that places limit orders at higher-timeframe supply/demand or structure levels and leaves them ("set and forget"), with fixed R:R. Identity and details unverified.
- **Jdub, "Casper SMC":** popular SMC/ICT YouTube/TikTok educators. Their rule sets were not researched.
- **"Sniper entries" / "Liquidity Inducement models":** SMC marketing labels for IDM-sweep → POI → lower-timeframe CHoCH entries with very tight stops (see Section 1).
- **"SMT with CRT":** at the C2 sweep, check whether a correlated market (ES vs NQ, EURUSD vs GBPUSD, or gold vs DXY/silver) failed to sweep its equivalent level; that divergence is the confirmation.
- No independent performance data was located for **any** of these named models.

---

## 6. Prop-firm communities: what is popular among funded traders, and is there data on which strategies pass?

### Takeaway
**No prop firm data was found that links pass rates or payouts to named strategies (ICT, SMC, CRT, TJR).** Prop firms and adjacent vendors clearly target ICT/TJR/CRT audiences in their marketing, so these models are popular in prop communities. But "which strategies pass" is **not** documented in any source retrieved. The prop-firm business model depends heavily on evaluation fees, which matters when reading guru "funded" claims.

### Cited Findings
- Prop firm Phidias publishes education pages on "ICT vs SMC" and "Trading Strategies Explained: ICT, TJR & Your Own (2026)." This shows prop firms see ICT/TJR as the dominant strategy vocabulary of their customer base. — [Phidias, ICT vs SMC](https://phidiaspropfirm.com/education/ict-vs-smc); [Phidias, Trading Strategies Explained](https://phidiaspropfirm.com/trading-strategies-explained)
- Coded TJR-style systems ship with prop-style risk parameters (1% risk per trade, stop beyond the sweep). — [TradingView TJR v4](https://it.tradingview.com/script/xXrbltSH-TJR-v4-Strategy/)
- MT5 EA vendors market CRT systems with "predefined risk governance and exits" and "exact RR," aimed at gold/forex traders. Their performance claims are marketing. — [MQL5 RA CRT Engine](https://www.mql5.com/en/market/product/160677); [MQL5 CRT Strategy Pro Exact RR](https://www.mql5.com/fr/market/product/162310)
- Finance Magnates analysed how prop firm My Forex Funds "generated $310m," a headline that points to fee-driven revenue. Its full text was not readable. — [Finance Magnates via TradingView News](https://vn.tradingview.com/news/financemagnates:035c61ef0094b:0-dissecting-my-forex-funds-model-how-did-the-prop-trading-firm-generate-310m)
- Allegations against a guru-linked prop firm (1of1 Funding: BBB complaints, non-payment claims) are unverified but show the payout-reliability risk. — [BestStockStrategy](https://beststockstrategy.com/tjr-trades-net-worth/)
- Commentary questioning the prop model's economics: "are prop firms a scam." — [Substack, pauliwalnuts](https://pauliwalnuts.substack.com/p/are-prop-firms-a-scam)

### Inferences
- In futures prop communities (Topstep, Apex, and similar), the dominant retail vocabulary in 2024–2026 is ICT/TJR/CRT on **NQ** (with ES second), traded in the **NY AM session**. Forex/CFD prop communities (FTMO, FundingPips, The5ers) lean toward SMC/ICT on **XAUUSD, GBPUSD, EURUSD** in the London/NY sessions. This is inferred from the marketing evidence above, **not** from firm statistics.
- Since firms do not publish strategy-level pass data, any claim that "X model passes more challenges" is anecdotal or marketing.

### Gaps
- No firm-published statistics were retrieved (FTMO, Topstep, Apex, FundingPips, The5ers). Pass-rate and payout-rate figures (commonly cited as low single digits to ~10–20% passing an evaluation, and fewer receiving payouts) are **UNVERIFIED BACKGROUND** and must be sourced before use.
- No data was found on which strategies or instruments funded traders use. Some firms publish "most traded instruments" reports (gold and NAS100 are often top), but this was not verified this session.
- No academic or independent large-sample backtest of SMC, CRT or TJR models was found. ESMA-mandated CFD loss disclosures (typically ~70–80%+ of retail accounts lose) are relevant context but were **not sourced in this session**.
- The searches still needed to close these gaps were blocked by the exhausted search budget and failed page fetches.
