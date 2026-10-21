# Session-Based, Systematic/Quant, Fundamental/Macro and Risk-Management Strategies for FX, NQ/ES and Gold, Plus Hard Evidence on Retail and Prop-Firm Trader Performance

**Evidence key and research conditions (read first).** Research date: 21 Oct 2026.
- **[V]** = verified in this session from web-search results (the URL is the page the result came from; where that page is a secondary or aggregator source, it is labelled as such).
- **[PK]** = canonical literature or market fact from the researcher's prior knowledge. It was NOT re-verified in this session: the shared web-search budget ran out after about 22 queries, and the sandbox egress proxy refused every direct page fetch (bis.org, gold.org, topstep.com, ssrn, wiley, financemagnates and others all returned DNS or CONNECT-403 failures). [PK] links are DOIs or Google Scholar locators, not pages that were read. The report writer should treat [PK] numbers as "well-known, needs checking before quoting".
- **[Calc]** = arithmetic done by the researcher (Python). It is not an empirical claim.
- Rigor tiers used below: **Tier A** = peer-reviewed or central-bank/regulator data. **Tier B** = working papers or firm self-disclosures. **Tier C** = practitioner or vendor claims, or anecdote.

---

## 1. Session and time-based strategies (Asian range, London breakout, Judas fade, NY open, London close, overlap, first hour, day-of-week, month-end flows, London gold fix)

### Takeaway
The best-evidenced intraday time effects in these markets are flow-driven patterns around benchmark fixes. Rigorous studies show the dollar strengthens into the Tokyo, ECB and London 4pm fixes and weakens afterwards (Krohn, Mueller & Whelan, JF 2024), that currencies tend to weaken during their own local trading hours (Breedon & Ranaldo), and that index ETFs show first-half-hour to last-half-hour momentum (Gao et al., JFE 2018). The retail session setups (Asian-range London breakout, "Judas swing" fakeout, London-close reversal) are well specified as rules, but I found no peer-reviewed tests of them. Their evidence is Tier C.

### Cited Findings

#### Market-structure facts that set session timing
- Global OTC FX turnover was **$9.6 trillion/day in April 2025**, up 28% from $7.5tn in 2022, from 52 jurisdictions and more than 1,100 dealers. The USD was on one side of **89%** of trades, the EUR had a 28.9% share and the JPY 16.8%. FX swaps were the largest instrument at **$4tn/day**. Sales desks in the UK, US, Singapore and Hong Kong handled **75%** of trading. [V, Tier A] — [BIS press release](https://www.bis.org/media-releases/20250930-global-fx-trading-hits-96-trillion-day-april-2025-and-otc-interest-rate-derivatives-surge-79); [BIS statistics](https://www.bis.org/statistics/rpfx25_fx.htm). The survey ran during the high volatility that followed the early-April 2025 US tariff announcements, which may have inflated activity. [V] — [Barchart](https://www.barchart.com/story/news/35263276/forex-markets-continue-to-grow-in-2025). BIS said the figures were subject to revision in the Dec 2025 Quarterly Review. [V] — [BIS](https://www.bis.org/press/p250930.htm)
- Reference fix times used in the academic literature are **Tokyo fix 9:55 a.m. local, ECB fix 2:15 p.m. CET, London (WM/Reuters) fix 4:00 p.m. London**. [V] — [Krohn, Mueller & Whelan slides (WU Vienna conference)](https://www.wu.ac.at/fileadmin/wu/d/ri/isk/VSFX_2022/Paper/Session_III_1a_Krohn__foreign_Exchange_Fixings_Returns_Around_The_Clock_0712.pdf)

#### London breakout (Asian-range breakout): exact typical rules
- A reference implementation (StockSharp "London BreakOut Classic") defines the **Asian box as the high and low from 00:00–06:55 UTC**. **After 07:00 UTC** it goes **long on a break above the box high and short on a break below the box low**. The **stop sits at the box midpoint**, the **take-profit is a configurable reward:risk multiple (default 1:1)**, and the trading window closes at **16:00 UTC**. [V, Tier C] — [StockSharp docs](https://doc.stocksharp.com/en/api-examples/0989_London_BreakOut_Classic)
- A TradingView "London BreakOut Classic" script uses the **previous Tokyo-session high and low**. It enters on a **candle-body close outside the range**, takes **one trade per day** at 1:1 R:R, and is meant for 1-, 5- or 15-minute FX charts. [V, Tier C] — [TradingView scripts](https://de.tradingview.com/scripts/londonbreakout)
- **Daylight-saving caveat.** "00:00–07:00" is usually meant as London local time. A fixed-UTC window drifts by one hour for about seven months of the year. [V] — (noted in the same search set; [StockSharp](https://doc.stocksharp.com/en/api-examples/0989_London_BreakOut_Classic))
- Commercial MT5 London-breakout EAs add filters such as a daily EMA trend filter, an NR7 (narrowest range of 7 days) condition, ATR minimums and time-based exits. Their performance claims are marketing and unverified. [V, Tier C] — [Payhip EA listing](https://payhip.com/b/21igm)
- **No independent, cost-inclusive backtest of the London breakout was found** in the search results. See Gaps.

#### Rigorous intraday seasonality evidence (FX)
- **Krohn, Mueller & Whelan (Journal of Finance, 2024), "Foreign Exchange Fixings and Returns around the Clock".** The USD **appreciates in the run-up to FX fixes and depreciates afterwards**, which gives a **W-shaped** cumulative intraday return. The reversals are pervasive and highly significant across the **top nine currencies over 21 years**, and imply daily swings of **more than US$1bn** based on spot volumes. Natural experiments show the published reference rate sets the timing. The preferred explanation is **dealer inventory risk** from intermediating unconditional USD demand. The pattern is intraday-only and does **not** show up in close-to-close returns. The Tokyo-fix reversal is smaller in 2014–2019 but still significant. [V, Tier A] — [Wiley/JF](https://onlinelibrary.wiley.com/doi/10.1111/jofi.13306); [INSEAD WP](https://sites.insead.edu/facultyresearch/research/file.cfm?fid=66802); [Bank of Canada SWP 2021-48](https://www.bankofcanada.ca/wp-content/uploads/2021/10/swp2021-48.pdf)
- **Breedon & Ranaldo (JMCB 2013), "Intraday Patterns in FX Returns and Order Flow".** Currencies tend to **depreciate during their local trading hours**. This is linked to order flow: participants are net buyers of foreign currency during their own hours. [V, Tier A] — [IDEAS/RePEc](https://ideas.repec.org/p/qmw/qmwecw/694.html); [SNB WP 2011-04](https://www.snb.ch/en/publications/research/working-papers/2011/working_paper_2011_04)
- **Ito & Hashimoto (2006)** found a U-shaped intraday activity pattern in USD/JPY and EUR/USD between 08:00 and 15:00 GMT. [V, Tier A, as cited in] — [arXiv 2411.16244](https://arxiv.org/html/2411.16244v1)
- **Cotter & Dowd (2007)** found significant intraday seasonality in DEM/USD returns and volatility in interdealer data. [V, Tier B] — [MPRA/IDEAS](https://ideas.repec.org/p/pra/mprapa/3502.html)
- **Counter-evidence.** A Lund University master's thesis on EUR/SEK found **no significant intraday return seasonality** once volatility was filtered, so the effects are not universal across pairs. [V, Tier C, student work] — [LUP thesis](https://lup.lub.lu.se/student-papers/record/9013814/file/9013817.pdf)

#### "First hour" / open-to-close effects (ES/NQ)
- **Gao, Han, Li & Zhou, "Market Intraday Momentum", JFE 129 (2018) 394–414.** The **first half-hour return (measured from the prior close) predicts the last half-hour return** in SPY, 1993–2013. The effect is stronger on high-volatility, high-volume, recession and **major macro-news days**, and it also holds in ten other heavily traded ETFs. The proposed mechanisms are infrequent rebalancing and late-informed trading. [V, Tier A] — [WUSTL profile](https://profiles.wustl.edu/en/publications/market-intraday-momentum/); [Alpha Architect summary](https://alphaarchitect.com/2014/08/attention-prop-traders-the-first-half-hour-of-trading-predicts-the-last-half-hour/)
- **Effect size is small.** The working-paper R-squared was about **0.02**. An informal out-of-sample check over Aug 2012–May 2014 found about **0.014**. [V, Tier B/C] — [CXO Advisory](https://www.cxoadvisory.com/?p=25481)
- [PK, Tier A] **Baltussen, Da, Lammers & Martens (JFE 2021), "Hedging demand and market intraday momentum".** They extend intraday momentum to 60+ futures and attribute it largely to dealers' **gamma-hedging** flows near the close. — [Google Scholar locator](https://scholar.google.com/scholar?q=Hedging+demand+and+market+intraday+momentum+Baltussen)
- [PK, Tier A] **Cliff, Cooper & Gulen (2008), "Return differences between trading and non-trading hours: like night and day"**, and **Lou, Polk & Skouras (JFE 2019), "A tug of war: overnight versus intraday expected returns"**. Much of the US equity premium historically accrued **overnight**, with intraday returns flat to negative. This matters for ES/NQ day traders who are flat overnight. — [Scholar: Cliff et al.](https://scholar.google.com/scholar?q=Return+differences+between+trading+and+non-trading+hours+like+night+and+day); [Scholar: Lou Polk Skouras](https://scholar.google.com/scholar?q=A+tug+of+war+overnight+versus+intraday+expected+returns)

#### Month-end / quarter-end rebalancing and the WM/R 4pm fix
- [PK, Tier A] **Melvin & Prins (Journal of Financial Markets, 2015), "Equity hedging and exchange rates at the London 4 p.m. fix".** Month-end FX hedge rebalancing by global equity investors, triggered by relative equity performance, predicts currency moves into the month-end 4pm fix. — [Scholar locator](https://scholar.google.com/scholar?q=Equity+hedging+and+exchange+rates+at+the+London+4+p.m.+fix+Melvin+Prins)
- [PK, Tier A] **Evans (2018), "Forex trading and the WMR Fix" (Journal of Banking & Finance).** Documents pricing anomalies and spikes around the fix. — [Scholar locator](https://scholar.google.com/scholar?q=Evans+Forex+trading+and+the+WMR+Fix)
- [PK] Context: in **November 2014**, FX-fix manipulation cases ended with combined fines of roughly **$4.3bn** (FCA, CFTC, OCC, FINMA) against six banks, and the WM/Reuters fix calculation window was later widened from 1 to **5 minutes** (2015). — needs verification; [Scholar/news locator](https://www.google.com/search?q=FX+fix+fines+November+2014+4.3+billion)

#### London gold fix behaviour
- **Caminschi & Heaney, "Fixing a Leaky Fixing", Journal of Futures Markets 34(11), 2014.** In gold futures and ETFs, **volume and volatility rose sharply right after the PM fixing began**, well before results were published. **Trades in the opening minutes predicted the direction of the fix, in some cases more than 90% of the time.** A press account gives about 80% accuracy for trades within 5 minutes of the start, versus about 50% before it. There was **no significant return after publication**. The authors call the evidence "highly suggestive" of **information leakage**, not proven manipulation. [V, Tier A] — [IDEAS/RePEc](https://ideas.repec.org/a/wly/jfutmk/v34y2014i11p1003-1039.html); [UWA paper PDF](https://api.research-repository.uwa.edu.au/ws/files/4725264/A0205_use_this.pdf); [UWA news](https://www.news.uwa.edu.au/201410067021/research/uwa-research-finds-gold-and-silver-price-setting-open-exploitation)
- In **May 2014 the FCA fined Barclays about US$43.8m** over gold-fix manipulation. The fixing was later replaced by **electronic auctions**. [V] — [UWA research impact](https://researchimpact.uwa.edu.au/?p=2746); [The Regulatory Review](https://www.theregreview.org/?p=10837)
- [PK] Since **20 March 2015** the **LBMA Gold Price** has been set by an electronic auction run by ICE Benchmark Administration at **10:30 and 15:00 London time**. The **LBMA Gold Price PM hit a record $5,405 on 29 Jan 2026** [V] — [CBS News](https://www.cbsnews.com/news/highest-gold-price-in-history-how-its-changed-from-2025-to-2026/)

#### Retail session setups (mechanics as practitioners describe them; Tier C, descriptive only)
- **Asian range fade:** in the low-volatility Tokyo session (about 00:00–07:00 London), sell the top and buy the bottom of the developing range in EUR/USD, GBP/USD, EUR/GBP or XAU/USD, with tight stops outside the range. It relies on low Asian-hours volatility. No rigorous test was found.
- **London open "fakeout" / "Judas swing"** (term popularised by the "ICT" YouTube/forum community): price first runs the Asian high or low (taking out stops) in the first 30–90 minutes after 07:00–08:00 London, then reverses. Traders enter on the reversal back inside the range. **No peer-reviewed evidence was found.** The closest rigorous analogue is Krohn et al.'s fix-related reversals, which are about the 4pm, ECB and Tokyo fixes, not the London open.
- **NY open:** trade the 13:30 UTC (08:30 ET) US data release or the 14:30 UTC (09:30 ET) cash-equity open in ES/NQ/XAU, often as an opening-range breakout of the first 5, 15 or 30 minutes. The academic support is indirect: Gao et al. (first half-hour predicts the last half-hour, not the next half-hour).
- **London–NY overlap** (about 12:00/13:00–16:00 UTC): this is the highest-liquidity window for EUR/USD, GBP/USD and gold, and practitioners prefer it for breakout and momentum trades. The **London close reversal** fades the day's move after the 16:00 London fix. Krohn et al.'s "USD reverses after the fix" finding is the rigorous evidence closest to this folk setup.

### Inferences
- The **robust intraday effects are flow and inventory effects tied to scheduled benchmarks** (fixes, cash open/close, gamma hedging). Practitioner setups that align with those flows have a plausible mechanism. The "London close reversal" aligns with Krohn et al., and "trend into the close" aligns with Gao et al. and Baltussen et al. Pure pattern setups such as the Judas swing and Asian fade have no published mechanism or test.
- Effect sizes are small (R² of about 1–2% for intraday momentum). After retail spreads and commissions, especially on CFDs with markups, a statistically real pattern can easily be untradeable at retail. Menkhoff et al. make the same "limits to arbitrage" point for currency momentum (Section 2).
- The gold-fix leakage evidence relates to the old telephone fixing (pre-2015). The current IBA electronic auction is a different mechanism, so the 2014 result should not be assumed to hold today.
- Session definitions must handle DST shifts (UK and US switch on different dates in March and Oct/Nov). Otherwise "07:00 GMT" backtests mix two regimes.

### Gaps
- No independent, cost-adjusted, out-of-sample backtest of the **London breakout, Asian-range fade, Judas swing, or London-close reversal** was found. Searches returned only rule descriptions and vendor scripts.
- **Day-of-week effects in FX and gold** (e.g., "Monday gap", "Friday reversal") could not be researched before the search budget ran out. [PK, unverified] Baur's "The autumn effect of gold" (Research in International Business and Finance, 2013) reports positive gold returns in September and November. Locator: [Scholar](https://scholar.google.com/scholar?q=Baur+autumn+effect+of+gold)
- I could not verify the often-repeated claim that **gold tends to rise in Asian hours and fall in London/NY hours** (an "overnight vs. day" gold pattern).
- **Quarter-end and Japanese fiscal-year-end (March) flows**: no 2024–2026 quantitative evidence was retrieved.

---

## 2. Trend following and momentum (time-series momentum, CTA/managed futures, breakout systems, cross-sectional currency momentum, swing momentum)

### Takeaway
Time-series ("absolute") momentum is among the best-documented effects in futures. Moskowitz, Ooi & Pedersen (2012) found positive 12-month TSMOM in all 58 contracts tested, with persistence for about a year and partial reversal after. Cross-sectional currency momentum earns up to about 10% per year gross but faces "very effective limits to arbitrage" (Menkhoff et al. 2012). Recent CTA performance for 2025–26 could not be verified.

### Cited Findings
- **Moskowitz, Ooi & Pedersen, "Time Series Momentum" (JFE 2012).** 58 liquid futures and forwards (equity indices, currencies, commodities, bonds). **12-month TSMOM returns were positive for every contract examined.** Returns persist for about **one year, then partially reverse** over longer horizons. [V, Tier A] — [SSRN 2089463](https://papers.ssrn.com/abstract=2089463); [Yale-hosted PDF](https://fairmodel.econ.yale.edu/ec439/jpde.pdf); DOI [PK] [10.1016/j.jfineco.2011.11.003](https://doi.org/10.1016/j.jfineco.2011.11.003)
  - **Mechanics:** each month, go long (short) an instrument whose past 12-month excess return is positive (negative). Size each position to a constant ex-ante volatility (the paper uses a 40% annualised per-instrument target) and hold for one month. [PK for the 40% figure]
- **Hurst, Ooi & Pedersen (2013)** report a **1.8 gross Sharpe ratio** for a TSMOM blend of **1-, 3- and 12-month lookbacks** across 58 futures and forwards. This is not the 12-month-only figure. [V, Tier B] — [CXO Advisory summary](https://www.cxoadvisory.com/momentum-investing/intrinsic-momentum-diversified-across-futures/)
- A later study cited by Quantpedia gives a **gross Sharpe of 1.17** for 12-month TSMOM in traditional assets. That is a different paper; do not attribute it to MOP. [V, Tier B] — [Quantpedia](https://quantpedia.com/strategies/time-series-momentum-effect/)
- [PK, Tier B] **Hurst, Ooi & Pedersen (2017), "A Century of Evidence on Trend-Following Investing" (AQR / Journal of Portfolio Management).** Trend following was positive in every decade since about 1880 and performed well in most major equity bear markets ("crisis alpha"). — [Scholar locator](https://scholar.google.com/scholar?q=A+Century+of+Evidence+on+Trend-Following+Investing)
- [PK, Tier A, counterpoint] **Huang, Li, Wang & Zhou (JFE 2020), "Time-series momentum: Is it there?"** They argue that most TSMOM profits come from pooled-regression bias and cross-sectional mean differences, and that per-asset predictability is weak. — [Scholar locator](https://scholar.google.com/scholar?q=Time-series+momentum+is+it+there+Huang+Li+Wang+Zhou)
- **Menkhoff, Sarno, Schmeling & Schrimpf, "Currency Momentum Strategies", JFE 106(3) 2012, 660–684.** Up to 48 currencies, 1976–2010. The cross-sectional **winner-minus-loser spread is up to 10% per year**. It is not explained by standard risk factors and is only partly explained by transaction costs. The behaviour is consistent with **under- and overreaction**. There are "**very effective limits to arbitrage** that prevent momentum returns from being easily exploitable". The returns differ from carry and are not highly correlated with benchmark technical rules. [V, Tier A] — [EconPapers](https://econpapers.repec.org/article/eeejfinec/v_3a106_3ay_3a2012_3ai_3a3_3ap_3a660-684.htm); [BIS WP 366](https://www.bis.org/publ/work366.pdf)
- [PK, Tier A] **Asness, Moskowitz & Pedersen (JF 2013), "Value and Momentum Everywhere".** Momentum (past 12-month return, skipping the most recent month) earns positive premia in currencies, commodities, bonds and equities. It is **negatively correlated with value** everywhere, so a 50/50 value+momentum mix has a much higher Sharpe than either alone. — DOI [10.1111/jofi.12021](https://doi.org/10.1111/jofi.12021)

#### Breakout systems (mechanics; Tier C descriptive)
- **Donchian / "Turtle" style:** buy a close or stop above the N-day high (classically 20 or 55 days), exit on the opposite M-day extreme (10 or 20 days), size by ATR. This is the trend-following template used by many CTAs on GC, ES/NQ and currency futures. Holding periods run weeks to months. No 2024–2026 performance data was verified.
- **Swing momentum:** multi-day holds (2–15 days) after breakouts or pullbacks in a trending market (e.g., price above a 50/200-day moving average). For NQ, the 2023–2025 AI-led trend favoured this style (see Section 6). No rigorous retail-level evidence was found.

### Inferences
- The academic evidence supports **slow, diversified, volatility-scaled trend following** (monthly rebalance, 1–12 month lookbacks, dozens of markets). That is very different from single-market, intraday "momentum" trading on one NQ or XAUUSD chart. Retail traders who cite "trend following works" usually trade something the papers did not test.
- Gold (GC) and currency futures are standard TSMOM constituents. NQ/ES are constituents too, but as single markets they give the diversification benefit that underlies the CTA Sharpe ratios.
- The 12-month persistence then multi-year reversal pattern is consistent with the Asness et al. finding that value (long-horizon reversal) and momentum are negatively correlated.

### Gaps
- **CTA/managed-futures performance for 2024, 2025 and 2026 YTD** (SG CTA/Trend Index, BarclayHedge) was not retrieved. Search budget ran out before this query.
- The exact 12-month-only Sharpe ratio in MOP (2012) could not be verified.
- No study was found on the performance of **retail swing-momentum traders** specifically in FX, NQ or gold.

---

## 3. Mean reversion (intraday ES/NQ reversion, Bollinger/RSI, pairs/stat-arb incl. gold/silver ratio and EURUSD/GBPUSD, FX range trading)

### Takeaway
Rigorous evidence for mean reversion in these markets is thin. Classic equity pairs trading (Gatev, Goetzmann & Rouwenhorst) worked historically but profits have decayed. FX intraday fix reversals (Krohn et al.) are the best-documented FX reversal. Indicator-based reversion (Bollinger, RSI) on ES/NQ, XAU or FX majors rests mostly on vendor and blog backtests (Tier C). Intraday momentum evidence (Section 1) actually argues against blind fading of the opening move into the close.

### Cited Findings
- **Fix-related reversal** (rigorous): USD appreciation before fixes reverses after them, across 9 currencies over 21 years. [V, Tier A] — [Krohn et al., JF 2024](https://onlinelibrary.wiley.com/doi/10.1111/jofi.13306)
- **Intraday momentum, not reversion, in the final half hour** of S&P 500 ETFs. Strategies that fade the day's move into the close bet against this documented effect. [V, Tier A] — [Gao et al., JFE 2018 (WUSTL)](https://profiles.wustl.edu/en/publications/market-intraday-momentum/)
- [PK, Tier A] **Gatev, Goetzmann & Rouwenhorst (RFS 2006), "Pairs trading: performance of a relative-value arbitrage rule".** Form pairs from the minimum distance of normalised prices over 12 months, then trade 6 months, opening when the spread diverges by 2 historical standard deviations and closing on convergence. Top-20 US equity pairs earned roughly **11% annualised excess return in 1962–2002**, with a declining trend. — DOI [10.1093/rfs/hhj020](https://doi.org/10.1093/rfs/hhj020)
- [PK, Tier A] **Do & Faff (Financial Analysts Journal 2010), "Does simple pairs trading still work?"** Profitability declined sharply after the 1990s, and transaction costs erased most of the remainder (Do & Faff 2012). — [Scholar locator](https://scholar.google.com/scholar?q=Do+Faff+Does+simple+pairs+trading+still+work)

#### Mechanics (Tier C descriptive)
- **Bollinger reversion:** in a range regime, buy a close below the lower band (20-period SMA minus 2 standard deviations) and exit at the middle band. The mirror applies for shorts. Often filtered with ADX < 20–25 to avoid trends. Used on 5–60 minute ES/NQ/FX charts and on daily charts.
- **RSI(2)/RSI(14) extremes:** e.g., buy ES when the 2-period RSI is below 10 while price is above its 200-day MA, and exit when RSI is above 70 or after N days. Holding period is 1–5 days. The best-known published rules come from practitioner books, not peer-reviewed journals.
- **Gold/silver ratio trade:** go long silver and short gold (or the reverse) when the XAU/XAG ratio is at historically high (low) levels, expecting reversion. Executed with GC versus SI futures or XAUUSD versus XAGUSD CFDs, hedge-ratio adjusted. Holding period is weeks to months.
- **EUR/USD vs GBP/USD spread:** trade the cointegration residual (or EUR/GBP directly, which is mathematically that spread). Risk comes from regime breaks such as Brexit in 2016 and BoE/ECB policy divergence.
- **FX range trading in majors:** fade support and resistance in low-volatility regimes and sessions (Asian session, summer, pre-holiday). The strategy fails at regime shifts driven by central-bank divergence or data surprises.

### Inferences
- In these markets, mean reversion is most defensible when tied to a **known liquidity or flow mechanism**: post-fix reversal, liquidity-driven overshoot after news, or inventory-driven spikes. It is least defensible when it rests only on oscillator thresholds.
- The gold/silver ratio has no anchored "fair value". Silver's industrial demand makes the ratio subject to regime shifts. A historical-percentile rule therefore carries structural-break risk similar to pairs-trading decay.
- Intraday ES/NQ reversion and intraday momentum can coexist at different horizons: short-horizon microstructure reversion (bid-ask bounce, liquidity) versus half-hour-scale momentum. Retail traders need horizon-specific testing.

### Gaps
- No peer-reviewed tests were found of **Bollinger/RSI reversion on ES/NQ, XAUUSD or FX majors** with realistic costs.
- No rigorous study was retrieved on **gold/silver ratio trading** or a **EUR/USD–GBP/USD pairs** strategy.
- Exact 2024–2026 performance of stat-arb in these markets was not found.

---

## 4. Carry, value (PPP) and the FX "carry / momentum / value" factor evidence, including the August 2024 yen-carry unwind

### Takeaway
FX carry (long high-yield, short low-yield currencies) has historically earned a premium that academics explain as compensation for global and crash risk. It has strongly negative skew, "up the stairs, down the elevator". The August 2024 yen-carry unwind is a textbook crash: the Nikkei fell about 12.4% on 5 Aug 2024, its worst day since 1987. The BIS documented the episode in Bulletin No. 90. Value (PPP reversion) and momentum are separate FX factors and are negatively correlated with each other.

### Cited Findings
- [PK, Tier A] **Mechanics.** Carry return ≈ interest-rate differential (forward discount) + spot change. Uncovered interest parity predicts that the high-yielder depreciates by the differential; empirically it does not, on average (the "forward premium puzzle", Fama 1984). Typical retail implementation: long AUD/JPY, MXN/JPY or USD/JPY and collect positive swap/rollover. Holding period is weeks to months; academic portfolios rebalance monthly.
- [PK, Tier A] **Lustig & Verdelhan (AER 2007)** sorted currencies into portfolios by interest rate and found **high-interest-rate currencies earn higher excess returns, compensation for consumption-growth risk**. **Lustig, Roussanov & Verdelhan (RFS 2011)** showed that a global "HML-FX" carry factor plus a dollar factor explain the cross-section of currency-portfolio returns. — DOI [10.1257/aer.97.1.89](https://doi.org/10.1257/aer.97.1.89); [Scholar: LRV 2011](https://scholar.google.com/scholar?q=Common+risk+factors+in+currency+markets+Lustig+Roussanov+Verdelhan)
- [PK, Tier A] **Brunnermeier, Nagel & Pedersen (NBER Macro Annual 2008), "Carry Trades and Currency Crashes".** Carry returns have **negative skewness**. Investment currencies are subject to **crash risk when speculators unwind**, especially when volatility (VIX) rises and funding liquidity dries up. — [NBER w14473](https://www.nber.org/papers/w14473)
- [PK, Tier A] **Menkhoff, Sarno, Schmeling & Schrimpf (JF 2012), "Carry Trades and Global Foreign Exchange Volatility".** **Global FX volatility innovations** explain carry returns: high-yielders lose when global FX volatility spikes. — [Scholar locator](https://scholar.google.com/scholar?q=Carry+trades+and+global+foreign+exchange+volatility)
- [PK, Tier A] **Asness, Moskowitz & Pedersen (JF 2013).** In currencies, **value** is measured as the negative of the 5-year change in the real exchange rate (a PPP-reversion proxy). Value and momentum each earn premia and are **negatively correlated**, and a common funding-liquidity risk links them across asset classes. — DOI [10.1111/jofi.12021](https://doi.org/10.1111/jofi.12021)
- **Currency momentum is distinct from carry** (low correlation). [V, Tier A] — [Menkhoff et al. 2012 JFE (EconPapers)](https://econpapers.repec.org/article/eeejfinec/v_3a106_3ay_3a2012_3ai_3a3_3ap_3a660-684.htm)

#### August 2024 yen-carry unwind
- **BIS Bulletin No. 90**, "The market turbulence and carry trade unwind of August 2024" (Aquilina, Lombardi, Schrimpf & Sushko, 27 Aug 2024), is the authoritative post-mortem. [V for existence and authorship, Tier A] — [BIS Bulletin 90 PDF](https://www.bis.org/publ/bisbull90.pdf) (body text could not be fetched)
- The **Nikkei and Topix fell more than 12% on 5 Aug 2024** (Nikkei −12.4%), their **worst day since the 1987 crash**. [V, Tier C/B news] — [DL News](https://www.dlnews.com/articles/markets/central-bank-body-says-carry-trade-crash-far-from-over/); [Substack](https://moneybycj.substack.com/p/the-yen-carry-trade-that-crashed-the-markets)
- The **yen had weakened to about ¥162/USD** earlier that summer before snapping back. One source says the yen **strengthened about 10% in the three weeks after 11 July 2024**. [V, Tier C] — [WisdomTree](https://www.wisdomtree.com/gb/insights/blog/the-yen-carry-trade-unwinds-whats-next); [Schwab SG](https://schwab.com.sg/story/carry-trade-unwind-is-it-really-over)
- DL News attributes a **"$250bn" carry-trade figure to the BIS**, and reports the BIS warning that the conditions behind the turbulence remained in place. **The derivation of the figure could not be verified.** [V that DL News reports it; figure unverified] — [DL News](https://www.dlnews.com/articles/markets/central-bank-body-says-carry-trade-crash-far-from-over/)
- [PK] Proximate triggers: the **BoJ hiked on 31 July 2024** and signalled more tightening; a **weak US July payrolls report on 2 Aug 2024** raised US recession and rate-cut expectations; the VIX spiked intraday to about 65 on 5 Aug. Markets largely recovered within weeks. — needs verification; [Scholar/news locator](https://www.google.com/search?q=BIS+bulletin+90+carry+trade+unwind+August+2024)

### Inferences
- Carry is a **risk premium with crash exposure**, not a free lunch. It pays in calm, low-volatility regimes and loses abruptly when volatility spikes or the funding currency's central bank turns hawkish, as the BoJ did in 2024. Retail traders holding leveraged long-USD/JPY or AUD/JPY for swap income are short volatility in effect.
- For retail CFD traders, broker swap markups can absorb much of the theoretical differential, so retail "carry" returns are likely below academic carry returns. No data was found to quantify this.
- Diversifying carry with momentum and value (Asness et al.; Menkhoff et al.) is the academically supported approach. Single-pair carry is concentrated crash risk.

### Gaps
- The BIS Bulletin 90 estimate of how much carry was unwound, and the BIS's later updates, could not be read (fetch blocked).
- No 2025–2026 data on FX carry-factor performance was retrieved, including how carry behaved during the April 2025 tariff shock and the BoJ's 2025–26 policy path.
- No study on retail swap-cost drag was found.

---

## 5. News / event trading (NFP, CPI, FOMC, ECB, BoJ; straddles and breakouts; fading the spike; economic calendar; gold and NQ reactions to real yields, DXY and CPI)

### Takeaway
Rigorous research shows prices adjust to macro surprises within minutes (Andersen et al. 2003), that intraday momentum is stronger on major news days (Gao et al. 2018), and that US equities historically drifted up in the 24 hours before scheduled FOMC announcements (Lucca & Moench 2015). Later work suggests that drift weakened after it was published. Retail news tactics (straddles, fading the spike) face slippage, spread widening and gaps exactly when they trigger. I found no rigorous evidence that they are profitable at retail.

### Cited Findings
- Intraday SPY momentum (first half-hour → last half-hour) is **stronger on major macroeconomic news release days**. [V, Tier A] — [Gao et al. 2018 (SUFE summary)](https://academicnewsletter.sufe.edu.cn/info/356150)
- [PK, Tier A] **Andersen, Bollerslev, Diebold & Vega (AER 2003), "Micro Effects of Macro Announcements: Real-Time Price Discovery in Foreign Exchange".** Announcement **surprises** (actual minus consensus), not the levels, produce **conditional-mean jumps within minutes**. Responses are asymmetric: bad news has larger effects in good times. — [Scholar locator](https://scholar.google.com/scholar?q=Micro+effects+of+macro+announcements+real-time+price+discovery+in+foreign+exchange)
- [PK, Tier A] **Lucca & Moench (JF 2015), "The Pre-FOMC Announcement Drift".** The S&P 500 rose about 49bp on average in the 24 hours before scheduled FOMC announcements (1994–2011), which accounted for a large share of the equity premium over that period. — DOI [10.1111/jofi.12196](https://doi.org/10.1111/jofi.12196). [PK, Tier A] Kurov, Wolfe & Gilbert (Finance Research Letters 2021) report the drift largely **disappeared** after 2015. — [Scholar locator](https://scholar.google.com/scholar?q=The+disappearing+pre-FOMC+announcement+drift)
- What can be said about the **timing of fixes and data**: US data at 08:30 ET (12:30/13:30 UTC), the cash open at 09:30 ET, and the London 4pm fix all coincide with known flow events. The fix-reversal evidence is Tier A. [V] — [Krohn et al. slides](https://www.wu.ac.at/fileadmin/wu/d/ri/isk/VSFX_2022/Paper/Session_III_1a_Krohn__foreign_Exchange_Fixings_Returns_Around_The_Clock_0712.pdf)
- The August 2024 episode shows **event clustering**: a central bank decision (BoJ, 31 July), a US data surprise (NFP, 2 Aug), then a cross-asset crash (5 Aug). [V for crash and BIS bulletin; PK for exact event dates] — [DL News](https://www.dlnews.com/articles/markets/central-bank-body-says-carry-trade-crash-far-from-over/)

#### Mechanics (Tier C descriptive)
- **News straddle / OCO breakout:** a few minutes before NFP or CPI, place a buy-stop above and a sell-stop below the pre-release range (e.g., ±10–20 pips on EUR/USD, ±$3–8 on XAU, ±10–20 points on NQ) and cancel the unfilled side. Main risks: **both sides triggered by whipsaw, spreads widening 5–20×, and stop slippage**.
- **Fade the spike:** wait 5–30 minutes for the initial surprise move to exhaust, then enter toward the pre-release level, often keyed to round numbers or prior-day high and low. This contradicts Andersen et al.'s finding of rapid, persistent repricing to surprises unless the spike was liquidity-driven.
- **"Trade the second move" / post-news trend:** enter on the first pullback after the release in the surprise direction. This is consistent with Gao et al. (news days amplify intraday momentum).
- **Economic-calendar use:** key events for this asset set are US NFP (first Friday, 08:30 ET), CPI (mid-month, 08:30 ET), FOMC (8 per year, 14:00 ET statement and 14:30 ET press conference), ECB (8 per year, 14:15 CET decision and 14:45 press conference), BoJ (8 per year, Tokyo time, no fixed hour), and mega-cap earnings for NQ. Prop firms often restrict trading in a window around high-impact news (see Section 8).

### Inferences
- Gold and NQ share a **rates channel**. Higher-than-expected CPI → higher expected policy rates and real yields → typically a stronger USD, lower gold, and lower long-duration growth equities (NQ). Practitioners widely trade this on CPI and NFP days, but I could not verify the 2024–2026 behaviour (Section 6 Gaps).
- Retail news trading is structurally disadvantaged. The edge in "speed to surprise" belongs to co-located HFTs (cf. the Brazilian study's conclusion that individuals cannot compete with HFTs, Section 9). Retail straddles mostly harvest slippage.

### Gaps
- No rigorous study was found that measures **NFP/CPI straddle or spike-fade profitability net of retail costs**.
- Gold and NQ **reactions to CPI and FOMC surprises in 2024–2026** (event-study magnitudes) were not retrieved.
- ECB and BoJ decision-day FX reaction statistics for 2025–2026 were not retrieved.

---

## 6. Fundamental / macro drivers (gold, NQ, FX), COT positioning, and sentiment / contrarian indicators

### Takeaway
Gold's 2024–2026 bull market took it to an all-time high of about $5,589/oz on 28 Jan 2026. It was driven heavily by **official-sector (central-bank) buying**, with WGC data showing a record Q2 2026 central-bank purchase of 289t. Prices then cooled from the January peak, with ETF outflows in Q2 2026. FX is driven by rate differentials and policy divergence, and is dollar-centric (USD on 89% of trades). For NQ drivers, COT and retail-sentiment evidence, most material could not be verified this session and is flagged.

### Cited Findings

#### Gold
- **All-time high: $5,589.38/oz intraday on 28 Jan 2026.** EBC reports $5,595.47 on 29 Jan, a gap it attributes to data-provider differences. The **LBMA Gold Price PM record was $5,405 on 29 Jan 2026**. The high **surpassed the inflation-adjusted Jan-1980 peak** ($850 then, about $3,590 in today's dollars). [V, Tier B news] — [CBS News](https://www.cbsnews.com/news/highest-gold-price-in-history-how-its-changed-from-2025-to-2026/); [EBC](https://www.ebc.com/forex/gold-highest-price-ever-xauusd-record-2026)
- Gold **surged past $5,100 on 26 Jan 2026** as investors sought shelter from global risks. [V] — [CNBC](https://www.cnbc.com/2026/01/26/gold-record-surges-past-new-5000-record.html)
- Gold was **above $5,000 as late as 17 March 2026** before falling. [V] — [Yahoo Finance](https://finance.yahoo.com/personal-finance/investing/article/gold-forecast-and-tracker-where-will-prices-land-in-2026-130000340.html)
- **WGC Gold Demand Trends Q2 2026 (published 30 July 2026)** [V, Tier A]:
  - Total demand was **flat y/y at 1,269t** as the price eased from early-2026 records. **H1 2026 demand was 2,522t (+2% y/y), a record value of US$380bn.**
  - **Central banks bought a net 289t in Q2 2026**, five times Q1's revised 57t and a **record for a second quarter**. **H1 central-bank demand of 345t was the lowest first half since 2022.** **Russia was the largest seller (−22t).** The WGC expects 2026 central-bank buying to **finish below the "exceptionally strong" 2025 total**.
  - **Investment (ETFs, bars and coins) fell to 262t**, with **45t of ETF outflows**.
  - Indian jewellery demand was 75t (−15% y/y). Electronics demand was 68t (+4%), helped by **AI infrastructure**.
  — [WGC GDT Q2 2026](https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q2-2026); [WGC press release](https://www.gold.org/news-and-events/press-releases/gold-market-shows-resilience-price-momentum-cools-q2); [WGC central banks chapter](https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q2-2026/central-banks)
- [PK, Tier A/B] Central-bank net purchases were above **1,000t a year in 2022, 2023 and 2024** (WGC: roughly 1,080t, 1,040t and 1,040t+), roughly double the 2010–2021 average. This followed the 2022 freezing of Russian reserves. — needs verification against [WGC Gold Demand Trends archive](https://www.gold.org/goldhub/research/gold-demand-trends)
- [PK, Tier A] **Erb & Harvey (FAJ 2013), "The Golden Dilemma".** Gold's link to inflation is unreliable over practical horizons. Its strongest historical co-movement was a **negative relationship with US real yields (TIPS)**. — [Scholar locator](https://scholar.google.com/scholar?q=Erb+Harvey+The+Golden+Dilemma)

#### FX
- The USD is on **89%** of trades, the EUR on 28.9% and the JPY on 16.8% (April 2025). This makes US rates and US data the dominant cross-pair driver. [V, Tier A] — [BIS](https://www.bis.org/media-releases/20250930-global-fx-trading-hits-96-trillion-day-april-2025-and-otc-interest-rate-derivatives-surge-79)
- **Policy divergence**: the August 2024 unwind followed a BoJ hike against an expected Fed easing (yen from about ¥162 to a sharp rally). [V partial] — [WisdomTree](https://www.wisdomtree.com/gb/insights/blog/the-yen-carry-trade-unwinds-whats-next)
- [PK] **2022 example:** USD/JPY rose from about 115 to about 152 (Oct 2022) as the Fed hiked aggressively while the BoJ kept yield-curve control, prompting Japanese MoF intervention (Sept and Oct 2022, and again in Apr–May and July 2024 above 160). — needs verification

#### NQ (Nasdaq-100 futures)
- [PK] **Rates sensitivity:** the Nasdaq-100 fell about 33% in 2022 as the Fed raised rates from near zero. It rebounded about 54% in 2023 and about 25% in 2024 on AI-led mega-cap earnings (Nvidia, Microsoft and others). The index is highly **concentrated in a handful of mega-caps**, so their earnings dates are market-moving events for NQ. — needs verification
- AI infrastructure is cited as a demand driver even in gold's electronics segment (Q2 2026), a sign of how pervasive the AI capex theme was in 2026. [V] — [WGC GDT Q2 2026](https://www.gold.org/goldhub/research/gold-demand-trends/gold-demand-trends-q2-2026)

#### COT positioning
- [PK, Tier A] **Mechanics:** the CFTC publishes Commitments of Traders every **Friday at 15:30 ET** for positions as of the **preceding Tuesday**. Reports are **Legacy** (commercial / non-commercial), **Disaggregated** for commodities such as gold (producer/merchant, swap dealer, **managed money**, other reportable) and **Traders in Financial Futures** for FX and equity-index futures (dealer, asset manager, **leveraged funds**, other). Common uses: extremes in managed-money net length as a crowding or contrarian signal, or speculator flows as trend confirmation.
- [PK, Tier A] **Evidence:** Wang (Journal of Futures Markets 2003) found **speculator positions forecast price continuation** while **hedger positions are contrarian**. Klitgaard & Weir (NY Fed Economic Policy Review 2004) found speculators' weekly position changes in currency futures are **strongly contemporaneously correlated** with exchange-rate moves but have **little predictive power**. — [Scholar: Wang 2003](https://scholar.google.com/scholar?q=Wang+behavior+and+performance+of+major+types+of+futures+traders); [Scholar: Klitgaard Weir 2004](https://scholar.google.com/scholar?q=Klitgaard+Weir+Exchange+rate+changes+and+net+positions+of+speculators+in+the+futures+market)

#### Retail sentiment / contrarian indicators
- [PK, Tier C] Broker-published retail positioning (e.g., **IG Client Sentiment**, Myfxbook "Community Outlook", OANDA order book) is marketed as a **contrarian** signal: if most retail clients are net long, look for weakness. The rationale is consistent with the evidence that 70–80% of retail CFD accounts lose (Section 9). I found **no peer-reviewed out-of-sample test** of these indicators.
- [PK, Tier A] **Heimer (RFS 2016), "Peer Pressure: Social Interaction and the Disposition Effect"**, using data from a retail FX social-trading network (Myfxbook-type). Joining the network **increased the disposition effect** (holding losers, selling winners). This is evidence of the behavioural biases that contrarian retail-sentiment indicators exploit. — [Scholar locator](https://scholar.google.com/scholar?q=Heimer+Peer+pressure+social+interaction+and+the+disposition+effect)

### Inferences
- **Gold's regime changed after 2022.** The classic real-yield model (Erb & Harvey) would have predicted weakness when real yields rose in 2022–2023. Instead gold rallied to records, alongside more than 1,000t a year of central-bank buying. The WGC's Q2 2026 data suggest official buying stayed a key marginal buyer even when ETF investors sold (−45t). For traders, macro signals for gold in 2024–2026 need to account for official flows and geopolitics, not just TIPS yields.
- The 2026 price path (record late January, still above $5,000 in mid-March, cooling by Q2) implies very high gold volatility in 2026. That raises both opportunity and risk-of-ruin for leveraged XAUUSD scalpers and prop traders (Sections 7–8).
- COT is weekly and three days stale, so it is a **swing and position-horizon** tool, not an intraday one.

### Gaps
- **Gold's 2024 and 2025 annual returns**, the date gold first crossed $4,000 (believed Oct 2025, [PK]), and the 2025 central-bank total were not verified.
- **Gold price as of Oct 2026** was not retrieved. The record may have been exceeded after the sources above.
- **Gold–real-yield correlation statistics for 2022–2026** were not retrieved (search budget exhausted).
- **NQ/ES drivers (2025–2026)**: mega-cap earnings, AI capex, Fed path and index concentration were not verified this session.
- **Fed, ECB and BoJ policy paths for 2025–2026** were not verified.
- No rigorous study of the **IG Client Sentiment** or **Myfxbook** contrarian signal was found.

---

## 7. Algorithmic / quant retail approaches (EAs, grid and martingale, gold scalping bots, machine learning, backtesting / walk-forward / overfitting pitfalls)

### Takeaway
Retail algorithmic trading (MT4/MT5 Expert Advisors, TradingView scripts, gold "scalping bots") carries the same statistical traps documented in the academic overfitting literature. Most published backtests are likely overfit (Bailey et al.; Harvey, Liu & Zhu). Grid and martingale systems produce smooth equity curves until a single adverse run wipes out the account. This follows mathematically from doubling exposure into a trend. I found no rigorous performance data on retail EAs or ML bots.

### Cited Findings
- Commercial London-breakout EAs advertise stacked filters (EMA trend, NR7, ATR minimum, time exits) with **unverified** marketing claims. This is a typical sign of parameter mining. [V, Tier C] — [Payhip EA listing](https://payhip.com/b/21igm)
- [PK, Tier A] **Bailey, Borwein, López de Prado & Zhu (Notices of the AMS 2014), "Pseudo-Mathematics and Financial Charlatanism: The Effects of Backtest Overfitting on Out-of-Sample Performance".** With enough configurations tried, a high in-sample Sharpe is almost guaranteed even with zero true edge. Their "**Probability of Backtest Overfitting**" (Journal of Computational Finance 2017) uses combinatorially symmetric cross-validation (CSCV) to estimate how likely the in-sample best strategy is to underperform out-of-sample. — [AMS Notices PDF](https://www.ams.org/notices/201405/rnoti-p458.pdf); [Scholar: PBO](https://scholar.google.com/scholar?q=The+probability+of+backtest+overfitting)
- [PK, Tier A] **Harvey, Liu & Zhu (RFS 2016), "…and the Cross-Section of Expected Returns".** Given hundreds of tested factors, a new factor should clear a **t-statistic of about 3.0** rather than 2.0. **Harvey & Liu (JPM 2015), "Backtesting"**, proposes "haircutting" Sharpe ratios for multiple testing. — DOI [10.1093/rfs/hhv059](https://doi.org/10.1093/rfs/hhv059); [Scholar: Harvey Liu Backtesting](https://scholar.google.com/scholar?q=Harvey+Liu+Backtesting+Journal+of+Portfolio+Management)
- [PK, Tier A] **Gu, Kelly & Xiu (RFS 2020), "Empirical Asset Pricing via Machine Learning".** ML (trees, neural nets) improves cross-sectional US equity return prediction. The gains are concentrated in monthly horizons and large, diversified cross-sections, not single-instrument intraday FX or gold trading. — [Scholar locator](https://scholar.google.com/scholar?q=Empirical+asset+pricing+via+machine+learning)

#### Grid and martingale math [Calc]
- **Martingale:** double the position after each loss so the first win recovers all losses plus one unit. After *n* consecutive losses, cumulative loss is (2ⁿ − 1) units and the next stake is 2ⁿ units. After 10 losses that is **1,023 units lost and a 1,024-unit next bet**. After 12 losses it is 4,095 units lost.
- **Streaks are not rare over many trades.** With a 50% loss probability, the chance of at least one run of **10 consecutive losses** is about **11% in 250 trades, 39% in 1,000 trades and 91% in 5,000 trades**. With a 55% loss probability (roughly a coin flip after spread costs), it rises to about **24%, 68% and 99.7%**. A run of 8 occurs with about 86% probability in 1,000 trades at p = 0.5.
- **Grid:** place buy (or sell) orders at fixed intervals against the move, often adding size ("grid-martingale"). The system profits in ranges and accumulates an unbounded losing inventory in a persistent trend. Gold's one-directional 2024–2026 runs and FX trends driven by policy divergence are exactly the regimes that break grids.
- Why they "work" for months: the win rate per cycle is very high (most cycles close in profit), so the equity curve looks smooth. The losses are rare and very large: the negative skew of a short-volatility payoff, similar to carry's crash risk.

#### Mechanics of other retail quant approaches (Tier C descriptive)
- **Gold scalping bots:** EAs that open many small trades on M1/M5 XAUUSD, often around London/NY opens, with tight targets of a few dollars. Results depend heavily on the broker's spread, commission and execution model (market maker vs. ECN). Prop firms often ban latency arbitrage, tick scalping, copy-trading across accounts, and "HFT" EAs.
- **Walk-forward analysis:** optimise on window 1, test on window 2, roll forward. Reduces but does not remove overfitting if the trader repeats the whole walk-forward process many times.
- **Monte Carlo / trade reshuffling:** estimate the distribution of drawdowns and streaks, as in the [Calc] above.

### Inferences
- Retail EA performance claims are mostly in-sample backtests or short live samples, so they should be treated as **unvalidated** unless they show out-of-sample periods, cost assumptions and the number of variants tested.
- **Martingale and grid EAs are incompatible with prop-firm daily-loss limits.** The adverse streak that kills a retail account breaches a 5% daily limit much earlier. Firms that permit grids still make them nearly impossible to run profitably at their limits. This is an inference; firm policies vary.
- ML on a single XAUUSD intraday series faces low signal-to-noise and regime change. The published ML successes (Gu et al.) do not transfer straightforwardly.

### Gaps
- No rigorous data was found on the **live performance of MQL5 Market EAs or Signals**, or of retail gold scalping bots.
- No published statistics were found on **how many retail or prop accounts fail from martingale or grid systems**.
- No 2024–2026 evidence was retrieved on **ML-driven retail FX/gold strategies**.

---

## 8. Trading-style definitions, risk-management frameworks (fixed-fractional, R-multiples, Kelly, expectancy, drawdown rules), and prop-firm rules and how they shape strategy

### Takeaway
Style is defined mainly by holding period: scalping takes seconds to minutes, day trading closes flat by session end, swing trading lasts days to weeks, position trading lasts weeks to months or more. Risk frameworks such as fixed-fractional sizing, R-multiples, expectancy and fractional Kelly are mathematical and well established. Prop-firm rules (daily loss limits, static or trailing maximum drawdown, consistency rules, news restrictions, payout caps) strongly favour low-variance, high-frequency, small-risk styles. They penalise wide-stop swing trading and martingale.

### Cited Findings
- Topstep's 2025-26 terms: **90/10 profit split for sign-ups after 12 Jan 2026**. Earlier traders keep a 100% tier on the first $10K. **Minimum payout is $125.** For the **Express Funded Account "Standard" payout path, payouts are capped at 50% of account balance, up to $5,000**. [V, Tier B, firm and third-party] — [Topstep Payout Policy](https://help.topstep.com/en/articles/8284233-topstep-payout-policy); [backtrex (secondary)](https://backtrex.com/en/blog/topstep-futures-evaluation-rules)
- Topstep says its Trading Combine and Express accounts are **difficult to pass even for experienced traders**, and that its statistics **combine simulated and live trading**. [V, Tier B] — [Topstep Disclosures & Notices](https://www.topstep.com/disclosures-notices)
- [PK] **FTMO's standard two-step "Challenge" and "Verification"**: profit targets of **10% and 5%**, a **Maximum Daily Loss of 5%** and a **Maximum Loss of 10%** (static, from initial balance), plus a minimum number of trading days. Parameters and product variants have changed over time; verify the current figures. — [FTMO Trading Objectives](https://ftmo.com/en/trading-objectives/)
- [PK] **Futures prop firms (Topstep, Apex and others)** typically use a **trailing maximum drawdown**. The threshold trails the account's peak balance (end-of-day at Topstep; historically intraday/unrealised at Apex) until it locks at the starting balance (or start + small buffer). They also use **consistency rules**: no single day may account for more than a set share of total profits (e.g., Apex's 30% rule for payouts, and a Topstep Combine best-day rule historically at 50%). — needs verification against current firm rulebooks

#### Definitions and math [descriptive; Calc]
- **Scalping:** holds of seconds to minutes, targets of a few ticks/pips, very high trade counts. Costs per trade (spread plus commission) are a large fraction of the expected move. **Day trading:** all positions closed within the session (for ES/NQ, before the 17:00 ET CME daily break or the cash close). **Swing:** 2 days to a few weeks, overnight and weekend gap risk. **Position:** weeks to months or more. Carry, TSMOM, value and macro fall here.
- **Fixed-fractional risk:** risk a constant fraction *r* of current equity per trade, with stop distance setting position size. Drawdown after *k* consecutive losses is 1 − (1 − r)ᵏ. At **1% risk: 10 losses → 9.6%, 20 losses → 18.2%**. At **2%: 18.3% and 33.2%**. At **5%: 40.1% and 64.2%**. [Calc]
- **R-multiples and expectancy:** R = initial risk. Expectancy per trade in R = p·(average win in R) − (1 − p)·1. Break-even win rate at reward:risk *b* is 1/(1 + b): **50% at 1:1, 40% at 1.5:1, 33.3% at 2:1, 25% at 3:1, 66.7% at 0.5:1**. [Calc]
- **Kelly criterion** (Kelly 1956): the growth-optimal fraction is f* = p − (1 − p)/b. Examples: p = 0.55, b = 1 → **10%**; p = 0.40, b = 2 → **10%**. Betting a fraction *c* of Kelly gives c(2 − c) of the maximum growth rate, so **half-Kelly keeps about 75% of the growth with half the volatility**. Practitioners use ¼–½ Kelly because p and b are estimated with error. [Calc; PK for the 1956 citation] — [Kelly 1956, Bell System Technical Journal (DOI)](https://doi.org/10.1002/j.1538-7305.1956.tb03809.x)

### Inferences
- **How prop rules shape strategy choice:**
  - A **5% daily loss limit** with 1% risk per trade allows only about 5 consecutive same-day losers. Strategies with **low loss-streak variance** (high win rate, small R) are favoured. Low-win-rate trend systems (30–40% hit rate at 2–3R) frequently breach daily limits during normal streaks; see the [Calc] streak probabilities in Section 7.
  - A **trailing drawdown** penalises giving back open profit. It discourages letting winners run (trend following) and favours taking quick profits. That conflicts with the positive-skew design of the best-evidenced strategy family (TSMOM).
  - **Consistency rules** penalise the one-big-day outcome that news straddles and high-leverage gold scalps produce. They push traders toward steady, small daily gains.
  - **Profit targets plus time pressure plus a fee per attempt** create an incentive to raise risk (a "lottery ticket" payoff). Many traders buy multiple attempts. Topstep's data (16.8% of Combines passed, but 51.8% of individuals eventually funded) is consistent with repeated attempts (Section 9).
- Swing and position styles (carry, macro, TSMOM) fit poorly with most evaluation rules: overnight/weekend restrictions on some accounts, trailing drawdowns, time limits. The rules effectively push traders toward intraday NQ/ES/XAU scalping and day trading. That is exactly where Section 9's retail evidence is worst.

### Gaps
- Current (Oct 2026) **FTMO, Apex, Topstep, The5ers, FundedNext rulebooks** could not be fetched to verify drawdown types, consistency percentages or news restrictions.
- FINRA **pattern-day-trader rule** changes discussed in 2025 could not be verified.
- No academic study was found on **how prop-firm rule design affects trader behaviour or outcomes**.

---

## 9. Hard data: retail CFD/FX loss rates, day-trader studies (Brazil, Taiwan), prop-firm pass and payout rates, and prop-industry developments 2024–2026

### Takeaway
The hard evidence is consistent and bleak. **74–89%** of retail CFD accounts lose money (ESMA's 2018 review), and current UK broker disclosures average about **70%** (April 2026). In Brazil, **97% of index-futures day traders who persisted more than 300 days lost money**. In Taiwan, the large majority of day traders are unprofitable and losers keep trading. Topstep's own 2025 data shows **16.8%** of Combines passed, **33.3%** of funded traders got any payout, and only **0.71%** of Express-funded traders were moved to a live account. Industry-wide data suggests about **7%** of challenge buyers ever receive a payout.

### Cited Findings

#### Retail CFD/FX (ESMA and broker disclosures)
- ESMA's **2018 review** of national regulators' analyses found **74–89% of retail CFD accounts lose money**, with **average losses per client from €1,600 to €29,000**. [V, Tier A via secondary summary] — [ZeroToInvest summary](https://zerotoinvest.com/en/reality-check/cfd-verlustquoten/); [CMS Law on ESMA measures](https://cms.law/en/int/regulatory-news/esma-fca-measures-on-the-provision-of-contracts-for-differences-and-binary-options-to-retail-investors-in-the-eu)
- [PK, Tier A] ESMA's 2018 product intervention (later made permanent by national regulators and mirrored by the UK FCA) imposed **leverage caps** (30:1 major FX; 20:1 non-major FX, gold and major indices; 10:1 other commodities and non-major indices; 5:1 equities; 2:1 crypto). It also required **50% margin close-out per account**, **negative-balance protection**, a ban on incentives, and a **standardised risk warning disclosing the provider's own % of losing retail accounts**. — [ESMA press release (Mar 2018)](https://www.esma.europa.eu/press-news/esma-news/esma-agrees-prohibit-binary-options-and-restrict-cfds-protect-retail-investors)
- **UK, April 2026:** across **14 FCA-authorised CFD brokers**, the **mean disclosed retail loss rate was 69.9% and the median 71.0%**. Examples: **CMC Markets UK 68%, IG UK 68%, IG International 71%**. These are rolling 12-month figures. [V, Tier B aggregator of mandated disclosures] — [The Investors Centre](https://www.theinvestorscentre.co.uk/trading/statistics/cfd-trading/)
- **Conflicting figures:** another site lists IG 73%, **Plus500 82%**, eToro 68%, and claims a 2023–24 spike to 82–89% attributed to ESMA. These could not be verified and the source is low reliability. [V that the claim exists; Tier C] — [Hyperdash](https://hyperdash.com/learn/why-cfd-traders-lose-money-is-the-game-rigged); [IQ Option blog](https://blog.iqoption.com/en/is-it-true-that-90-of-traders-lose-money-what-the-data-actually-shows/)
- An academic audit of **demo-mode CFD trading apps** documents deceptive choice architecture. [V title/existence only, Tier A] — [Behavioural Public Policy (Cambridge)](https://www.cambridge.org/core/journals/behavioural-public-policy/article/trading-is-a-losing-game-an-audit-of-deceptive-choice-architecture-in-demomode-contract-for-difference-cfd-trading-apps/07BB4E4CC011413D8A41458F9ED32928)

#### Brazil: Chague, De Losso & Giovannetti, "Day Trading for a Living?" (FGV working paper, 2019/2020)
- Sample: **all 19,646 Brazilian individuals who began day trading mini-index futures (WIN) in 2013–2015**. Only **3.0% achieved positive net daily returns**. [V, Tier B] — [CXO Advisory](https://www.cxoadvisory.com/investing-expertise/day-trading-a-bust/); [EconPapers RePEc:fgv:eesptd:525](https://econpapers.repec.org/RePEc:fgv:eesptd:525); [FGV repository](https://repositorio.fgv.br/items/e87d04fc-4b4c-4a56-ab5a-1c84c1afde1b/full)
- Of those who **persisted more than 300 days, 97% lost money**. The search summary reports that only **0.4% earned more than a bank teller's** starting salary, and that the **top trader made about US$310/day** with high volatility. There was **no evidence of learning** over time. [V, Tier B] — [FGV repository](https://repositorio.fgv.br/items/e87d04fc-4b4c-4a56-ab5a-1c84c1afde1b/full); [Quantpedia](https://quantpedia.com/?p=4771)
  - **Discrepancy:** the researcher's recollection [PK] of the paper's abstract is "only **1.1%** earned more than the Brazilian minimum wage and only **0.5%** earned more than the initial salary of a bank teller", and that about **1,551** individuals persisted more than 300 days. Verify the exact wording against the abstract before quoting.
- The authors conclude it is "virtually impossible" for individuals to compete with HFTs and earn a living by day trading [PK wording]. They caution that the sample may not generalise to other countries, assets or periods. [V for the generalisability caveat] — [CXO Advisory](https://www.cxoadvisory.com/investing-expertise/day-trading-a-bust/)

#### Taiwan: Barber, Lee, Liu, Odean (and Zhang)
- **"Do Day Traders Rationally Learn About Their Ability?"** / **"Learning, Fast or Slow"** (Review of Asset Pricing Studies 10(1), 2020, 61–93). Taiwan day traders, **1992–2006**. **Unprofitable day traders are more likely to quit**, but **aggregate performance is negative and the vast majority are unprofitable**. **74% of day-trading volume comes from traders with a history of losses**, and **97% of day traders are likely to lose money in future day trading**. The results fit **overconfidence and biased learning**, not rational learning. [V, Tier A] — [IDEAS (RAPS 2020)](https://ideas.repec.org/a/oup/rasset/v10y2020i1p61-93..html); [AEA 2019 conference paper](https://aeaweb.org/conference/2019/preliminary/paper/ZKnGb4Zh); [Odean working paper PDF](https://faculty.haas.berkeley.edu/odean/papers/day%20traders/day%20trading%20and%20learning%20110217.pdf)
- [PK, Tier A] **Barber, Lee, Liu & Odean, "The Cross-Section of Speculator Skill: Evidence from Day Trading" (Journal of Financial Markets 2014).** **Less than 1%** of day traders predictably earn positive abnormal returns net of fees, although a small group of top-ranked traders shows persistence. The "<1%" figure was **not** found in this session's search results. — [Odean paper PDF (locator)](https://faculty.haas.berkeley.edu/odean/papers/day%20traders/Day%20Trading%20Skill%20110523.pdf)
- [PK, Tier A] **Barber, Lee, Liu & Odean (RFS 2009), "Just How Much Do Individual Investors Lose by Trading?"** Taiwanese individual investors' aggregate trading losses were about **2.2% of Taiwan's GDP**. — [Scholar locator](https://scholar.google.com/scholar?q=Just+how+much+do+individual+investors+lose+by+trading)

#### Prop-firm pass and payout statistics
- **Topstep, 2025 (Jan–Dec), self-disclosed** [V, Tier B]:
  - **16.8% of all Trading Combines initiated** were completed and allowed to advance to the Funded Level (per attempt).
  - **51.8% of individuals** who entered one or more Combines reached the Funded Level at least once (per person, across multiple attempts).
  - **33.3% of individuals at the Funded Level received a payout.**
  - **0.71% of individuals in an Express Funded Account** were called up to a **Live Funded Account**.
  - Topstep notes the statistics **mix simulated and live trading**. Separately it markets a **99.26% approval rate for payout *requests***, which is a different metric from the 33.3%.
  - Denominators differ, so the figures **should not be multiplied together**.
  — [Topstep Disclosures & Notices](https://www.topstep.com/disclosures-notices); [TopstepX page](https://www.topstep.com/topstepx); [Topstep "truth about prop firm payouts"](https://www.topstep.com/blog/truth-about-prop-firm-payouts); secondary: [il.ly](https://il.ly/blog/prop-firm-pass-rates), [tradecovex](https://tradecovex.com/guides/how-many-combines-passed-express-topstep-2025)
- **Cross-firm dataset: FPFX Technologies, about 300,000 accounts.** Roughly **14% of evaluations passed**, and about **7% of all challenge buyers ever received a payout**. Reported by aggregator sites; the primary FPFX release was not accessed. [V, Tier B/C] — [QuantVPS](https://www.quantvps.com/blog/prop-firm-statistics); [PropFirmsCompare](https://propfirmscompare.com/how-many-traders-pass-prop-firm-challenges/)
- **FTMO publishes no official pass rate.** The circulating "~10%" for its two-step challenge and the "90% fail" claim are estimates. **Apex "~40% with resets"** is a self-reported or community figure. All are unverified. [V, Tier C] — [Traders Second Brain](https://traderssecondbrain.com/guides/prop-firm-pass-rate); [Backtrex](https://backtrex.com/en/blog/prop-firm-challenge-success-rate); [Arxum](https://arxum.com/prop-trading-statistics/)

#### Prop-industry economics and events, 2024–2026 (Finance Magnates and others)
- **FTMO financials:** the parent's **2024 revenue was CZK 6.84bn (about US$329m), +53% y/y, with net profit above $62m**. **2025 revenue was CZK 8.9bn (+30%)**, and **paid prop-trading orders rose about 50% to 1.27 million**. [V, Tier B, company filings via trade press] — [Finance Magnates (2024)](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/); [Around Prague (2025)](https://aroundprague.cz/en/people/ftmo-of-marek-vasicek-and-otakar-suffner-8-8bn-crowns-in-revenue-and-the)
- **FTMO acquired OANDA.** It paid **more than CZK 8.79bn (about US$422m)** per the 2025 annual filing, initially financed by a **$250m UniCredit credit line**. The deal **closed 1 Dec 2025** after about 8 months of regulatory approvals, following an early-2025 announcement. [V, Tier B] — [Finance Magnates](https://www.financemagnates.com/forex/ftmo-paid-422-million-for-oanda/); [TradingView/FM weekly wrap](https://www.tradingview.com/news/financemagnates:4556756eb094b:0-weekly-wrap-up-ftmo-s-422-million-oanda-deal-cysec-names-new-chair/)
- **FTMO cumulative payouts: more than $450m** announced at its 10-year anniversary. [V, Tier B self-reported] — [Finance Magnates](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/)
- **Tracked crypto payouts** across top prop firms (FM Intelligence) went from **$55.3m in Q1 2025 to $115.1m in Q1 2026**, but were **flat versus $115.2m in Q4 2025** ("growth has stalled since December"). [V, Tier B] — [FM Data Lab](https://datalab.financemagnates.com/market-insights/tracked-prop-firm-crypto-payouts-doubled-to-115m-in-q1-2026); [Finance Magnates analysis](https://www.financemagnates.com/forex/analysis/prop-firm-crypto-payouts-doubled-to-115-million-in-q1-2026-but-growth-has-stalled-since-december/)
- A **Prop Firm Match league table** put **2025 full-year payouts at about $325m, excluding FTMO and The5ers**. [V, Tier B/C, as reported in search summary] — [Finance Magnates analysis](https://www.financemagnates.com/forex/analysis/prop-firm-crypto-payouts-doubled-to-115-million-in-q1-2026-but-growth-has-stalled-since-december/)
- **Closures:** about **80–100 prop firms ceased operations between Jan 2024 and Q1 2026** (attributed to Finance Magnates Intelligence estimates). **True Forex Funds shut on 13 May 2024**, leaving about **300 traders owed $1.2m**. [V, Tier C secondary citing FM] — [Medium (VeritasChain)](https://medium.com/@veritaschain/what-the-80-firm-collapse-revealed-why-prop-trading-now-requires-a-technical-integrity-layer-d62983893cd8)
- Finance Magnates' year-end piece "Retail Trading & Prop Firms in 2025: Five Defining Trends – And One Prediction for 2026" exists but could not be read (fetch blocked). [V title only] — [Finance Magnates](https://www.financemagnates.com/forex/retail-trading-prop-firms-in-2025-five-defining-trends-and-one-prediction-for-2026/)

### Inferences
- **Converging estimates of the prop-firm funnel:** about 14–17% pass an evaluation per attempt (FPFX 14%, Topstep 16.8%). Roughly one-third of funded traders get any payout (Topstep 33.3%). That implies on the order of **5–7% of attempts or buyers ever see a payout** (FPFX: about 7% of buyers), before considering how much they withdraw relative to fees paid. Topstep's 0.71% Express→Live figure suggests **sustained, firm-capital ("live") trading is reached by under 1%**. This is consistent with the Taiwan "<1% predictably profitable" result [PK] and Brazil's 97% loss rate.
- **The business model is fee-driven.** FTMO's ~1.27m paid orders and ~$400m-equivalent revenue in 2025, against a cumulative $450m paid out over 10 years, imply challenge fees, not trading profits, are the main revenue source. This is an inference from the cited figures; FTMO's cost structure was not verified.
- Topstep's 51.8% "eventually funded" versus 16.8% "per attempt" shows that **many traders buy repeated attempts**. Marketing pass rates "per trader" therefore look much better than per-attempt economics.
- The retail CFD loss rate has been stable at roughly 70–80% since mandatory disclosure began (2018–2026), despite leverage caps. Leverage limits reduced the size of losses but did not change the share of losing accounts. The second half is an inference: before/after loss-size data was not retrieved.
- **Rigor ranking of this section's evidence:** Tier A: Taiwan studies, ESMA review, mandated broker disclosures. Tier B: Brazil FGV working paper, Topstep self-disclosure, FTMO filings. Tier C: FPFX aggregates via blogs, FTMO and Apex pass-rate estimates, closure counts.

### Gaps
- **The ESMA/regulator primary document** with the 74–89% figure, and any **post-2018 ESMA aggregate**, could not be fetched. Only secondary summaries and the April 2026 UK aggregate were found.
- **SEBI (India) derivatives studies**: the researcher recalls [PK, unverified] that SEBI found **93% of individual F&O traders lost money in FY22–FY24** (Sept 2024 study) and **91% in FY25** (July 2025 update). The search for this failed (budget exhausted), so verify before use.
- **CFTC v. My Forex Funds (Traders Global Group)**: the researcher recalls [PK, unverified] that the 2023 case was **dismissed in 2025 with sanctions against the CFTC**. Not verified.
- **MetaQuotes' early-2024 licence crackdown** on prop firms using MT4/MT5 [PK] was not verified.
- **Apex Trader Funding, The5ers, FundedNext, Funding Pips** official pass and payout statistics were not found. Apex has published no verified figures.
- **FTMO's own pass and payout ratios** have never been officially published, per search results.
- **US retail futures day-trader loss statistics** (e.g., an NFA or CFTC equivalent to ESMA disclosures) were not found. US futures brokers are not required to publish loss percentages the way EU/UK CFD providers are.
- The exact "<1% predictably profitable" figure (Barber et al. 2014) and the exact Brazil percentages (0.4% vs 0.5%, 1.1%) need checking against the primary PDFs, which could not be fetched.
