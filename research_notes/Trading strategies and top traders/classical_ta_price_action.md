# Classical Technical Analysis and Price-Action Methods for Forex, NQ/ES Index Futures and Gold (XAUUSD)

> **Research-process note for the report writer:** This session's shared web-search budget ran out partway through. The egress proxy also blocked direct fetches of the main primary sources: thepatternsite.com, newyorkfed.org, nber.org, wikipedia, stockcharts, harmonictrader.com, babypips, investopedia, ssrn and brookstradingcourse.com.
>
> - **Cited Findings:** Every item there comes from search results returned in this session, with the URL that result pointed to. Many of these are summaries of the source page rather than full-text reads.
> - **Unverified background:** Items marked **"UNVERIFIED (model background knowledge)"** under *Gaps* are standard textbook definitions: pivot formulas, harmonic ratios, TD Sequential rules, candlestick definitions and so on. They are included so the catalogue is complete. They were **not** checked against a source in this session, so verify them before you cite them.
> - **Topics with no source this session:** pivot formulas, TD Sequential/TD lines, Gann, gap statistics for ES/NQ, Quasimodo, trendline-drawing rules, Elder's Triple Screen and Nison-specific material.

## 1. Dow Theory, trend definition (HH/HL), market structure and multi-timeframe analysis

### Takeaway
Dow Theory is the root of the "trend = higher highs and higher lows" definition. It has one rigorous academic re-test, Brown, Goetzmann & Kumar (1998). They found that William Peter Hamilton's Dow-Theory market timing from 1902–1929 produced positive risk-adjusted returns, and that a neural-net replication beat buy-and-hold out of sample. That evidence covers the US stock index at multi-week/multi-month horizons. It does not test the intraday swing-structure versions used in FX, NQ/ES or gold today. I found no rigorous test of "market structure" (BOS/CHoCH-style) or multi-timeframe alignment rules.

### Cited Findings
- **Brown, Goetzmann & Kumar (1998).** "The Dow Theory: William Peter Hamilton's Track Record Re-Considered", *Journal of Finance*, August 1998. They argue that Alfred Cowles' 1934 test, which seemed to discredit Dow Theory, actually supports it once risk is adjusted for. Cowles compared Hamilton's timing returns with a fully invested portfolio without accounting for Hamilton's lower risk. — [Yale SOM author page](https://viking.som.yale.edu/the-dow-theory-william-peter-hamiltons-track-record-re-considered); [NYU archive working paper FIN-98-013](https://archive.nyu.edu/handle/2451/26858)
- **Hamilton's performance.** His timing strategies, as reconstructed from his editorials, show high Sharpe ratios and positive alphas. One secondary summary gives a Hamilton-portfolio alpha of about 4.04%, with lower volatility than the fully invested Cowles index. — [Yale SOM](https://viking.som.yale.edu/the-dow-theory-william-peter-hamiltons-track-record-re-considered); [CXO Advisory summary](https://www.cxoadvisory.com/?p=582)
- **Hamilton's accuracy.** He was reportedly right about short-term market direction about 60% of the time, and more accurate in bear markets than bull markets. This comes from a secondary summary. — [CXO Advisory](https://www.cxoadvisory.com/?p=582)
- **Out-of-sample neural-net test.** A neural network trained to replicate Hamilton's calls beat buy-and-hold by an average of 4.4 percentage points a year from 1930 to the end of 1997. The 4.04% and 4.4% figures come from different methods and periods, so they are not the same result. — [NYU Stern faculty news](https://stern.nyu.edu/experience-stern/news-events/prof-stephen-brown-s-research-dow-theory-featured)
- **Practitioner adoption.** Surveys reviewed by Park & Irwin indicate that technical analysis is widely used in futures and FX markets. About 30–40% of practitioners believe it is an important factor in price movement at horizons of up to 6 months. — [Park & Irwin 2004 AgMAS report](https://ageconsearch.umn.edu/record/37487/files/AgMAS04_04.pdf)

### Inferences
- **What the Dow evidence does and does not cover.** The only rigorous Dow Theory evidence concerns slow, discretionary, index-level timing by one expert, in 1902–1929 and in a 1930–1997 replication. It neither supports nor refutes the modern use of swing structure (HH/HL, "break of structure") on 1–15-minute NQ/ES or EURUSD charts.
- **Link to trend-following.** The best-documented mechanism behind trend persistence in FX is the Osler order-flow work in Section 2 (stop-loss cascades), along with the broader trend-following literature in Section 9. A trader building an HH/HL trend filter on these markets is effectively running a trend-following rule. Its edge should be judged with trend-following evidence, not with Dow-Theory lore.

### Gaps
- **Not found this session:** a primary source for the six tenets of Dow Theory, Elder's Triple Screen, or any quantitative test of multi-timeframe alignment on FX, futures or gold.
- **UNVERIFIED (model background knowledge), Dow Theory.**
  - **Origins:** Charles H. Dow's Wall Street Journal editorials (1900–1902). William P. Hamilton, *The Stock Market Barometer* (1922). Robert Rhea, *The Dow Theory* (1932).
  - **The six tenets:**
    1. The averages discount everything.
    2. There are three trends: primary (one year or more), secondary (3 weeks to 3 months, typically retracing 1/3–2/3) and minor (under 3 weeks).
    3. Primary trends have three phases: accumulation, public participation, and excess/distribution.
    4. The averages must confirm each other (Industrials/Rails, later Transports).
    5. Volume confirms the trend.
    6. A trend persists until a definite reversal signal.
  - **Uptrend definition:** successive higher peaks and higher troughs. Reversal requires failure to make a new high, then a break of the prior trough.
- **UNVERIFIED (model background knowledge), market structure.**
  - Modern "market structure" vocabulary (swing high/low, break of structure (BOS), change of character (CHoCH)) is a re-labelling of Dow's swing logic, popularized by SMC/ICT communities.
  - Victor Sperandeo's "1-2-3 trend change" and "2B" rules (*Trader Vic*, 1991) formalize the same idea:
    1. Trendline broken.
    2. Retest fails to make a new extreme.
    3. Prior swing point is broken.
- **UNVERIFIED (model background knowledge), multi-timeframe analysis.**
  - Alexander Elder's "Triple Screen" (introduced in *Futures* magazine, 1986; later in *Trading for a Living*, 1993) uses three timeframes about a factor of 5 apart. For example, weekly trend → daily oscillator pullback → intraday breakout entry.
  - The common FX/futures equivalent is a higher-timeframe bias, mid-timeframe setup and low-timeframe trigger, for example daily/4H/15m for EURUSD or XAUUSD, and 60m/15m/1–5m for NQ/ES.
  - No quantitative evidence was located.

## 2. Support and resistance: horizontal levels, round numbers, prior-day/week highs and lows, pivot points, supply/demand zones

### Takeaway
Support and resistance has the strongest FX-specific academic support of any classical concept, through Carol Osler's work at the New York Fed.
- **Published levels:** Support/resistance levels published by six firms predicted intraday trend interruptions in USD/DEM, USD/JPY and GBP/USD in 1996–1998, though predictive power varied by firm and currency.
- **Order clustering:** A large dealing bank's order book showed take-profit orders clustering *at* round numbers, which explains reversals at those levels. Stop-loss orders clustered *just beyond* round numbers, which explains acceleration once a level breaks.
- **Gold:** Peer-reviewed studies find round-number "psychological barrier" effects in gold prices.

No rigorous evidence was found for pivot-point variants or for Seiden-style supply/demand "odds enhancers"; those claims are practitioner/anecdotal.

### Cited Findings
- **Osler (2000), "Support for Resistance: Technical Analysis and Intraday Exchange Rates",** *FRBNY Economic Policy Review*, July 2000. It is described as the first rigorous test of whether *published* support/resistance levels predict intraday trend reversals. — [FRBNY PDF](https://resources.newyorkfed.org/medialibrary/media/research/epr/00v06n2/0007osle.pdf); [IDEAS/RePEc](https://ideas.repec.org/a/fip/fednep/y2000ijulp53-68nv.6no.2.html); [FedInPrint](https://www.fedinprint.org/item/fednep/19790)
  - **Data:** Daily published support/resistance levels from six firms (commercial banks, investment banks and real-time information providers, US and non-US), January 1996 to March 1998. Currencies were DEM, JPY and GBP against USD. The levels were tested against one-minute indicative quotes between 9 a.m. and 4 p.m. New York time.
  - **Result:** The paper reports strong evidence that the levels help predict intraday trend interruptions, but predictive power varies across exchange rates and firms. — [Brandeis ScholarWorks abstract](https://scholarworks.brandeis.edu/esploro/outputs/journalArticle/Support-for-resistance-technical-analysis-and/9924036857501921); [FRBNY PDF](https://resources.newyorkfed.org/medialibrary/media/research/epr/00v06n2/0007osle.pdf)
- **Osler (2003), "Currency orders and exchange rate dynamics: An explanation for the predictive success of technical analysis",** *Journal of Finance*. Earlier published as FRBNY Staff Report 125.
  - **Data:** The first dataset of individual stop-loss and take-profit orders, from a large FX dealing bank.
  - **Take-profit orders** cluster strongly at round numbers. That explains the technical prediction that trends reverse at support/resistance.
  - **Stop-loss orders** cluster strongly just *beyond* round numbers. That explains the prediction that trends accelerate after a level is crossed.
  - **Asymmetries:** The clustering differs between stop-loss and take-profit orders, and between stop-loss buys and stop-loss sells.
  - Sources: [FRBNY Staff Report 125](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr125.html); [EconPapers](https://econpapers.repec.org/RePEc:fip:fednsr:125); [SUFE academic newsletter abstract](https://academicnewsletter.sufe.edu.cn/info/361290)
- **Osler, "Stop-Loss Orders and Price Cascades in Currency Markets"** (FRBNY Staff Report 150). Using minute-by-minute quotes from 1996–1998, it finds that the rate's response to stop-loss orders is larger than its response to take-profit orders. This supports the "price cascade" or "liquidity run" mechanism. — [FRBNY SR150](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr150.html); [conference draft](https://icmaif.soc.uoc.gr/Year/8conf/docs/Osler-Price%20Cascades-03-03.doc); [EconPapers](https://econpapers.repec.org/RePEc:fip:fednsr:150)
- **Gold round numbers, Aggarwal & Lucey (2007).** "Psychological barriers in gold prices?", *Review of Financial Economics* 16:217–230. Round-number levels act as barriers that affect both the conditional mean and the conditional variance of gold prices near those levels. — [IDEAS/RePEc](https://ideas.repec.org:443/a/wly/revfec/v16y2007i2p217-230.html); [TCD IIIS discussion paper](https://www.tcd.ie/triss/assets/PDFs/iiis/iiisdp53.pdf)
- **Gold round numbers, Lucey & O'Connor (2016).** "Mind the gap: Psychological barriers in gold and silver prices", *Finance Research Letters*. Gold prices were fixed *less often* at values ending in 0 and 00, consistent with barriers that show up as gaps in the frequency distribution. Silver showed no statistically significant barrier effect. — [UCC research portal](https://research.ucc.ie/en/publications/mind-the-gap-psychological-barriers-in-gold-and-silver-prices/)
- **Supply/demand zones (Sam Seiden / Online Trading Academy), secondary sources only.**
  - **Zone types:** Rally-Base-Rally (RBR) and Drop-Base-Rally (DBR) are demand zones. Drop-Base-Drop (DBD) and Rally-Base-Drop (RBD) are supply zones. DBR and RBD are reversal formations; RBR and DBD are continuation formations. — [eltraderfinanciado broker blog](https://www.eltraderfinanciado.com/en/blog/supply-and-demand-zones)
  - **OTA "odds enhancers":** strength of the departure from the base, time at the base (fewer candles is better), freshness (untested zones), profit margin (room to the opposing zone), trend, and position on the larger-timeframe "curve". OTA's official scoring table is not public. — [eltraderfinanciado](https://www.eltraderfinanciado.com/en/blog/supply-and-demand-zones)
  - **Entry:** Seiden calls buying during the initial departure a "sucker bet". Traders are told to wait for price to return to the zone. — [eltraderfinanciado](https://www.eltraderfinanciado.com/en/blog/supply-and-demand-zones)
  - **Primary vs secondary zones:** A common practitioner view treats RBD/DBR zones as the primary (strong) zones and RBR/DBD as secondary (semi-strong). — [Freelancer MT4 indicator brief](https://www.freelancer.com.jm/projects/metatrader/indicator-sam-seiden-support-amp) (a job posting, low authority)
  - **Community criticism:** A BabyPips forum user reports that Seiden's teaching seems inconsistent, for example dismissing some RBD/DBR zones as "just a pivot". This is anecdotal. — [BabyPips forum](https://forums.babypips.com/t/revitalizing-supply-and-demand/196189?page=2)

### Inferences
- **Round numbers may matter more than drawn lines.** Osler's order-clustering evidence is the closest thing to a causal, microstructure explanation for why "the obvious level" matters in FX. It applies to *round numbers* and to levels that many participants watch; it does not show that any particular line an individual trader draws matters.
  - For EURUSD/GBPUSD the analogous levels are xx.x000/xx.x050 (the "big figure" and half-figure).
  - For XAUUSD they are $x,x00 and $x,x50 levels; Aggarwal & Lucey support the existence of barrier effects in gold.
  - For NQ/ES they are 100- and 50-point handles. **No NQ/ES-specific round-number study was located.**
- **Bounce vs breakout.** Because take-profits sit *at* the level and stops sit *just beyond* it, the evidence-consistent approach treats the first touch as a fade candidate and a clean push through as a momentum/acceleration candidate. This is the empirical basis for the SMC/ICT "liquidity above equal highs / beyond round numbers" idea.
- **How solid is the FX evidence?** It is from 1996–1998 data, on DEM, JPY and GBP, and from one bank's order book. Market structure has changed since (electronic trading, algorithmic liquidity provision), so the size of the effect today is unknown.
- **Supply/demand zones lack independent tests.** Seiden-style zones are in effect a specific way of drawing support/resistance, anchored on the base candles before an impulsive move. No independent quantitative test of the odds enhancers was located; treat claimed edge as anecdotal.

### Gaps
- **Not found this session:**
  - Osler (2000) exact hit rates: the figures for bounces at published levels vs artificial levels, and how long predictive power lasted. These were not retrievable because newyorkfed.org was blocked.
  - Any quantitative test of pivot points (classic, Camarilla, Woodie, Fibonacci) on FX, ES/NQ or gold.
  - Any study of previous-day or previous-week high/low reactions in ES/NQ or XAUUSD.
- **UNVERIFIED (model background knowledge), Osler (2000) detail.** I recall that the exchange rate bounced at published levels roughly 60% of the time vs roughly 56% at arbitrary levels, and that predictive power persisted for at least five business days after publication. Confirm the exact figures in the FRBNY PDF before citing.
- **UNVERIFIED (model background knowledge), pivot formulas.** H, L, C (and O) are the prior session's high, low, close (and open).
  - **Classic/floor pivots** (originated with exchange floor traders):
    - P = (H+L+C)/3
    - R1 = 2P−L; S1 = 2P−H
    - R2 = P+(H−L); S2 = P−(H−L)
    - R3 = H+2(P−L); S3 = L−2(H−P)
  - **Fibonacci pivots:** P as classic.
    - R1/S1 = P ± 0.382(H−L)
    - R2/S2 = P ± 0.618(H−L)
    - R3/S3 = P ± 1.000(H−L)
  - **Woodie pivots:** P = (H+L+2C)/4, which weights the close; some versions use the current open. R1 = 2P−L, S1 = 2P−H, R2 = P+(H−L), S2 = P−(H−L).
  - **Camarilla pivots** (attributed to Nick Scott, about 1989):
    - Hn = C + (H−L)×1.1/k and Ln = C − (H−L)×1.1/k.
    - k = 12, 6, 4 and 2 for levels 1–4 respectively. So H3 = C + 1.1(H−L)/4 and H4 = C + 1.1(H−L)/2.
    - Typical rule: fade at H3/L3, trade breakouts beyond H4/L4.
  - **DeMark pivots:** X = H+2L+C if C<O; X = 2H+L+C if C>O; X = H+L+2C if C=O. Then P = X/4, R1 = X/2−L, S1 = X/2−H.
  - **Implementation choice:** results depend on which "day" is used.
    - FX normally uses the 17:00 New York close.
    - ES/NQ can use the regular trading hours session (09:30–16:00 ET) or the full Globex session. Practitioners differ.
- **UNVERIFIED (model background knowledge), previous day/week high and low.** PDH/PDL and PWH/PWL are used by ICT/SMC and auction-market traders as "liquidity" reference levels: a sweep beyond the level followed by a reclaim is a reversal setup, and acceptance beyond it is a continuation setup. No academic test was found.

## 3. Trendlines, channels, break-and-retest, trendline liquidity, DeMark TD lines and TD Sequential, wedge/channel breakouts

### Takeaway
Trendlines and channels are among the oldest classical tools, but this session found **no** rigorous evidence on trendline-break strategies, the "three-touch rule" or DeMark's TD Sequential for FX, futures or gold. The most relevant hard data are Bulkowski's wedge statistics, which are poor: rising wedges rank last of 36 patterns for upward breakouts in bull markets. The SMC/ICT "trendline liquidity" concept, that stops accumulate beyond obvious lines and are run before reversal, has a plausible mechanism in Osler's stop-clustering evidence. That evidence is about round numbers, not trendlines.

### Cited Findings
- **Rising wedges are Bulkowski's worst performer.** In his bull-market, upward-breakout rank table, rising wedges sit at the bottom of both the performance list and the failure list (36th of 36). — [Bulkowski rank table](https://www.thepatternsite.com/rank.html); [Bulkowski BestPatterns](https://thepatternsite.com/BestPatterns.html)
- **Bulkowski's failure definition:** a pattern "fails" if price does not move more than 5% away from the breakout price before reversing. — [Bulkowski Failure Rates](https://thepatternsite.com/FailureRates.html)
- **Stops beyond obvious levels.** Stop-loss orders cluster just beyond round-number levels, and stop-loss execution moves price more than take-profit execution does ("price cascades"). This is the empirical microstructure fact on which "liquidity sweep" narratives rest. — [Osler SR125](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr125.html); [Osler SR150](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr150.html)

### Inferences
- **Trendline liquidity is extrapolated, not tested.** It extends Osler's finding to sloped lines on the assumption that many traders draw the same line and place stops behind it. That assumption is untested, and trendline placement is much less consensual than round numbers. Treat it as anecdotal.
- **Short-side wedges.** Bulkowski's poor numbers for upward breakouts from rising wedges suggest that rising wedges are better treated as bearish, or simply avoided. This is consistent with Al Brooks' view of wedges as three-push reversal patterns (Section 6). Bulkowski's data are US stocks on daily charts.

### Gaps
- **Not found this session:** any academic or large-sample test of trendline-break or "break-and-retest" strategies, of TD Sequential or TD Lines, or of channel breakouts on FX, futures or gold.
- **UNVERIFIED (model background knowledge), drawing trendlines.**
  - Classic sources are Edwards & Magee, *Technical Analysis of Stock Trends* (1948), and John Murphy, *Technical Analysis of the Financial Markets* (1999).
  - **Uptrend line:** connect two or more rising swing lows. Two points draw the line and a third touch "confirms" it.
  - More touches and longer duration mean a more significant line. Steeper lines are less durable; Murphy notes that lines steeper than about 45° tend to break.
  - Use log scale for large percentage moves.
  - A **channel** is a parallel line drawn through the intervening swing highs.
  - **Break-and-retest:** after a close beyond the line, enter on the pullback that holds the broken line from the other side. The stop goes beyond the retest swing. The target is the prior swing or a channel-width projection.
- **UNVERIFIED (model background knowledge), DeMark TD Lines** (Tom DeMark, *The New Science of Technical Analysis*, 1994).
  - **TD points:** a Level-1 TD point high is a bar high with a lower high on each side; higher levels require more bars.
  - **Drawing:** connect the two most recent TD points, drawing from right to left so the line reflects current price action.
  - **Breakout qualifiers:** the prior bar closed against the breakout; the open gaps beyond the line; or a calculated demand/supply value lies beyond the line.
  - **Targets:** measured from the greatest distance between line and price.
- **UNVERIFIED (model background knowledge), TD Sequential.**
  - **Buy setup:** 9 consecutive bars each closing below the close 4 bars earlier, beginning after a "price flip".
  - **"Perfected" buy setup:** the low of bar 8 or 9 is at or below the lows of bars 6 and 7.
  - **TDST:** the highest high of the buy setup becomes TDST resistance.
  - **Countdown:** after the setup completes, count 13 bars (not necessarily consecutive) closing at or below the low of 2 bars earlier. Bar 13's low must be at or below bar 8's close.
  - **Cancellation and recycling rules** apply. Sell side is the mirror image.
  - It is widely available on Bloomberg and TradingView.
  - I recall no peer-reviewed evidence of robust profitability on FX or index futures; treat claims as anecdotal.
- **UNVERIFIED (model background knowledge), wedges and channel breakouts.**
  - **Rising wedge:** converging, upward-sloping lines; bearish bias.
  - **Falling wedge:** converging, downward-sloping lines; bullish bias.
  - **Entry:** on a close outside the wedge. **Stop:** beyond the last swing inside it. **Target:** often the wedge's start.

## 4. Chart patterns (H&S, double/triple tops and bottoms, flags, pennants, triangles, wedges, rectangles, cup and handle, rounding bottoms, broadening, diamonds, Quasimodo): rules, measured moves and Bulkowski statistics

### Takeaway
Thomas Bulkowski's *Encyclopedia of Chart Patterns* and thepatternsite.com provide the largest public pattern-statistics database. It is built on **US stocks, daily data, measured from the breakout to the ultimate high/low on "perfect trades"**. Read the results carefully:
- **Reversal patterns look strong:** cup with handle, head-and-shoulders bottom and double bottoms have break-even failure rates of 5–12% and average rises of 43–54%.
- **Short-term continuation patterns are weak:** flags and pennants have break-even failure rates of 44–54% and average moves under 10%, measured on the short-term swing.
- **Failure rates have risen over time:** roughly 2–4x more than in the 1990s.
- **Lo, Mamaysky & Wang (2000)** found that automated pattern detection provides "incremental information" in US stocks from 1962 to 1996.
- **Savin, Weller & Zvingelis** found head-and-shoulders patterns produced about 5–7% a year in risk-adjusted excess returns in US stocks in the 1990s.
- **Chang & Osler** found head-and-shoulders patterns useful in FX, but beaten by simple moving-average and filter rules.

None of the Bulkowski numbers is FX/futures/gold-specific, and none is net of realistic execution.

### Cited Findings

**Bulkowski methodology and caveats**
- **Definitions.** Failure means price fails to move more than 5% beyond the breakout before reversing. The rank tables run from 1 (best) and were last updated 8/24/2020. In the bull-market upward-breakout table, bump-and-run reversal bottoms and rounding bottoms rank first for performance and rising wedges rank last. — [Bulkowski rank](https://www.thepatternsite.com/rank.html); [BestPatterns](https://thepatternsite.com/BestPatterns.html)
- **Failure rates are rising.** A study of about 14,000 patterns from 1991 to 2008 found chart patterns fail 2–4x more often now than in the past. For example, the "10% failure rate" for upward breakouts was 14% in the 1990s bull market and 28% in the 2003–2007 bull market. Some of these statistics are flagged on the site as not updated. — [Bulkowski Failure Rates](https://thepatternsite.com/FailureRates.html)
- **"Perfect trades".** Bulkowski's figures assume entry at the breakout and exit at the ultimate high. Of Adam & Eve double bottoms he writes that the "chance of duplicating such a rise on a consistent basis is probably zero". — [Bulkowski Adam & Eve double bottom](https://thepatternsite.com/aedb.html)
- **AI-use restriction.** Bulkowski's site says its content shall not be used to train AI systems. Cite his figures with attribution only. — [Bulkowski rank page](https://www.thepatternsite.com/rank.html)

**Head-and-shoulders patterns (Bulkowski, bull market)**
- **Top:** break-even failure 19%, average decline 16%, pullback rate 68%, 51% meet the price target. Based on 2,800+ perfect trades, updated August 2020. Overall performance rank 9 of 36. — [Bulkowski H&S top](https://thepatternsite.com/hst.html)
- **Bottom (inverse):** break-even failure 11%, average rise 45%, throwback rate 65%, 71% meet the price target. Based on 3,197 perfect trades (page as of July 2025). An older note citing data only through 2005 gives a 45% throwback rate. — [Bulkowski H&S bottom](https://www.thepatternsite.com/hsb.html)
- **Complex top:** break-even failure 18%, average decline 17%, pullback 66%. — [Bulkowski complex H&S top](https://thepatternsite.com/chst.html)
- **Complex bottom:** break-even failure 7%, average rise 47%, throwback 66%. — [Bulkowski complex H&S bottom](https://thepatternsite.com/chsb.html)
- **Third-party figure:** the TechCharts study (Aksel Kibar's service, reported secondhand) found head-and-shoulders bottoms reached their price objective 73% of the time. The methodology differs from Bulkowski's. — [Investing.com, "Chart Patterns Ranked by Accuracy"](https://uk.investing.com/analysis/chart-patterns-ranked-by-accuracy-200622665)

**Double bottoms (Bulkowski, bull market)**
- **Adam & Eve:** break-even failure 12%, average rise 43%, throwback 67%, 69% meet target, 1,020 perfect trades. Overall rank 17 of 39. — [Bulkowski A&E](https://thepatternsite.com/aedb.html)
- **Eve & Eve:** break-even failure 12%, average rise 50%, 952 perfect trades (older page). Bulkowski calls it the most "bang for the buck" of the four variants. — [Bulkowski E&E](https://www.thepatternsite.com/eedb.html); [Double bottom types](https://thepatternsite.com/DoubleBottomTypes.html)
- **Adam & Adam:** break-even failure 16%, average rise 39%. — [Bulkowski A&A](https://www.thepatternsite.com/aadb.html)
- **Page versions differ.** Pages dated between 2024 and 2026 show different figures, so cite the specific page and date. — [Bulkowski double-bottom setup](https://thepatternsite.com/dbsetup.html)

**Flags, pennants and high-tight flags (Bulkowski)**
- **Flags:** break-even failure 44% (up breakouts) / 45% (down). Average move 9% / 8%. 46% / 46% meet the price target. Flag performance is measured on the *short-term swing*, not to the ultimate high/low, which is why the numbers look small. — [Bulkowski flags](https://thepatternsite.com/flags.html)
- **Pennants:** break-even failure 54% / 54%, average move 7% / 6%. Bulkowski says pennants only work as a "half-staff" measured move about 30% of the time. An older encyclopedia edition claimed the measure rule worked about 90% of the time; the two figures conflict. — [Bulkowski pennants](https://thepatternsite.com/pennants.html)
- **High-tight flag:** an older edition cited a 69% average rise. The updated page lists break-even failure 15% and average rise 39%. Rank is cited as 30 of 39 or 43 of 56 depending on the version. — [Bulkowski HTF](https://thepatternsite.com/htf.html); [Bulkowski HTF study](https://thepatternsite.com/HTFStudy.html)

**Cup with handle (William O'Neil / Bulkowski)**
- **Bulkowski, bull market, up breakouts:** break-even failure 5%, average rise 54%, throwback 62%, 61% meet target, 913 perfect trades. Rank 3 of 39. An older edition showed a 34% average rise, and 7% failure in bear markets. — [Bulkowski cup](https://thepatternsite.com/cup.html); [LuxAlgo summary](https://www.luxalgo.com/blog/cup-and-handle-pattern-success-rates-explained/)
- **Popularized by William O'Neil** in *How to Make Money in Stocks* (1988), as part of CAN SLIM buy timing. No O'Neil-specific failure rate was found. The often-quoted "95% success" is a misreading of the 5% break-even failure rate. — [AlphaEx Capital](https://www.alphaexcapital.com/stocks/technical-analysis-for-stock-trading/price-action-and-chart-patterns/cup-and-handle-pattern-explained); [LuxAlgo](https://www.luxalgo.com/blog/cup-and-handle-pattern-success-rates-explained/)

**Triangles (mostly secondary reports of Bulkowski)**
- **Ascending triangle:** more than 1,400 bull-market samples. Up breakouts 63%, down 37%. Average rise after an up breakout 43%, break-even failure 17%. Rank about 16 of 39 for up breakouts. The widely quoted "83% success" is again a misreading of the 17% failure rate. — [EBC](https://www.ebc.com/forex/ascending-triangle-pattern-how-to-trade-successfully.html); [AlphaEx Capital](https://www.alphaexcapital.com/stocks/technical-analysis-for-stock-trading/price-action-and-chart-patterns/ascending-triangle-pattern-explained)
- **Descending triangle:** one secondary source says about 53% of breakouts were upward, close to a coin flip. Another gives the down-breakout rank as 30 of 36 with a 38% failure rate. These conflict. — [EBC triangle overview](https://www.ebc.com/forex/-triangle-chart-patterns-every-trader-should-know); [LuxAlgo triangles](https://luxalgo.com/blog/triangle-patterns-advanced-analysis)
- **Symmetrical triangle:** the only figure found is from a TradingView idea post, not Bulkowski: about 54% trend continuation. Bulkowski's 1996 article notes that ascending triangles, unlike symmetrical ones, indicate breakout direction. — [TradingView idea](https://www.tradingview.com/ideas/trustthetechnicalanalysis/); [Bulkowski 1996, S&C](https://www.traders.com/Documentation/FEEDbk_docs/1996/11/Abstracts1196/1196Bulkowski.html)

**Academic pattern studies**
- **Lo, Mamaysky & Wang (2000),** "Foundations of Technical Analysis", *Journal of Finance* 55:1705–1765 (NBER WP 7613).
  - They used non-parametric kernel regression to detect patterns automatically in a large sample of US stocks from 1962 to 1996.
  - They compared conditional with unconditional return distributions and concluded that "several technical indicators do provide incremental information and may have some practical value".
  - The CFA digest says the incremental information is especially strong for Nasdaq stocks, and that the traditional head-and-shoulders form may not be optimal.
  - Sources: [MIT author page](https://web.mit.edu/~alo/www/Papers/techanal.html); [NBER](https://www.nber.org/papers/w7613); [CFA Digest](https://rpc.cfainstitute.org/-/media/documents/article/cfa-digest/2001/dig-v31-n1-811-pdf.pdf)
- **Savin, Weller & Zvingelis (2006 working paper),** "The Predictive Power of Head-and-Shoulders Price Patterns in the U.S. Stock Market".
  - They adapted the Lo et al. algorithm with filters based on how a technical analyst would identify the pattern.
  - On S&P 500 and Russell 2000 stocks from 1990 to 1999, the strategy earned about 5–7% a year in risk-adjusted excess returns.
  - Much of the success came from identifying stocks with negative momentum.
  - Source: [Savin et al. PDF](https://www.biz.uiowa.edu/faculty/gsavin/papers/HSrevision_paw_10%2019%2006.pdf)
- **Chang & Osler.** "Methodical Madness: Technical Analysis and the Irrationality of Exchange-Rate Forecasts", *Economic Journal* 109(458):636–661 (1999). Working-paper version: FRBNY Staff Report 4 (1995), "Head and shoulders: not just a flaky pattern".
  - They tested a head-and-shoulders rule on daily major-currency exchange rates against USD from March 1973 to June 1994.
  - Profits were compared with 10,000 bootstrap random-walk simulations.
  - Sources: [IDEAS EJ](https://ideas.repec.org/a/ecj/econjl/v109y1999i458p636-61.html); [IDEAS SR4](https://ideas.repec.org/p/fip/fednsr/4.html); [FRASER](https://fraser.stlouisfed.org/title/research-papers-federal-reserve-bank-new-york-6570/evaluating-chart-based-technical-analysis-head--shoulder-pattern-foreign-exchange-markets-708165)
- **Osler's own summary** in a 2001 interview: head-and-shoulders patterns "were pretty useful for forecasting exchange rate movements", but "you could actually do a lot better using much simpler technical tools, such as moving averages or filter rules". — [Technical Analysis of Stocks & Commodities interview](https://traders.com/Documentation/FEEDbk_docs/2001/06/Abstracts_new/Interview/Interview.html)
- **Lucke (2003).** A further test, "Are technical trading rules profitable? Evidence for head-and-shoulder rules", *Applied Economics* 35(1):33–40. Its findings were not retrieved. — [IDEAS](https://ideas.repec.org/a/taf/applec/v35y2003i1p33-40.html)

### Inferences
- **Bulkowski's numbers do not transfer directly to these markets.** A 5% "failure" threshold and 40–50% average rises are calibrated to individual US stocks on daily/weekly charts.
  - EURUSD's typical daily range is well under 1%, and NQ/ES/XAUUSD intraday swings are a fraction of 5%.
  - Ranks (which patterns are relatively better) are more transferable than magnitudes, but even that is unverified for FX, futures or gold.
- **Rankings.** Bulkowski's data favour **reversal bottoms**: cup with handle, complex and regular inverse head-and-shoulders, double bottoms, rounding bottoms and bump-and-run bottoms. **Continuation flags and pennants** have break-even failure rates near 50%, close to random by his definition, and **rising wedges** are worst for upward breakouts.
- **Edge decay.** The 2–4x rise in failure rates between the 1990s and 2000s is consistent with the broader finding that technical edges decayed after the early 1990s (Section 9).
- **Simpler rules may win.** In FX, head-and-shoulders patterns have some documented information content (Chang & Osler), but simpler trend rules dominated. That supports using patterns as context or filters rather than as stand-alone systems.

### Gaps
- **Not retrieved:** Bulkowski statistics for triple tops/bottoms, rectangles, broadening formations, diamonds, rounding bottoms (other than their top rank), double tops and bear-market tables. Also the full Lo-Mamaysky-Wang results tables, Chang & Osler's per-currency results, and Lucke (2003).
- **Not found:** any FX-, futures- or gold-specific large-sample pattern statistics.
- **UNVERIFIED (model background knowledge), pattern rules.** These follow Edwards & Magee, Murphy and Bulkowski.
  - **Head-and-shoulders top:**
    - **Shape:** left shoulder, higher head, right shoulder roughly level with the left. A neckline joins the two troughs. Volume typically declines on the head and right shoulder.
    - **Entry:** on a close below the neckline, or on the throwback/retest.
    - **Stop:** above the right shoulder.
    - **Measured move:** head-to-neckline height projected down from the breakout.
    - **Inverse head-and-shoulders:** the mirror image.
  - **Double top/bottom:**
    - **Shape:** two peaks (troughs) at about the same price, separated by a meaningful trough (peak).
    - **Confirmation:** a close beyond the middle "confirmation" level.
    - **Target:** pattern height projected from that level.
    - **Bulkowski's Adam/Eve terms:** Adam is a narrow, spiky turn; Eve is a wide, rounded one.
  - **Triple top/bottom:** three touches; target is the height projected from the breakout.
  - **Flag:** a sharp "pole" followed by a small parallel counter-trend channel.
  - **Pennant:** a small converging triangle after a pole.
  - **Flag/pennant target:** the "measure rule" projects the pole length from the breakout. Bulkowski's half-staff variant projects the pole from the flag's midpoint.
  - **Triangles:**
    - **Ascending:** flat top, rising lows.
    - **Descending:** flat bottom, falling highs.
    - **Symmetrical:** converging lines.
    - **Target:** the widest part projected from the breakout.
    - **Timing:** breakouts usually occur two-thirds to three-quarters of the way to the apex.
  - **Rectangle:** horizontal range; target is the range height.
  - **Cup and handle:**
    - **Shape:** a U-shaped base, then a small downward-drifting handle in the upper half of the cup.
    - **Entry:** on a break of the handle high.
    - **Target:** cup depth projected from the breakout.
  - **Rounding bottom (saucer):** a long, gradual U-shaped turn.
  - **Broadening formation (megaphone):** diverging highs and lows.
  - **Diamond:** a broadening phase followed by a symmetrical contraction.
  - **Quasimodo ("over-and-under"):**
    - **Bearish case:** high → low → higher high → a lower low that breaks the prior low.
    - The "QM level" is the left-shoulder high.
    - **Entry:** short on a return to the QM level. **Stop:** above the head.
    - Origin is unclear (popularized in retail FX forums); **no quantitative evidence found**.

## 5. Candlestick patterns: definitions, Nison and Brooks usage, and evidence of predictive power

### Takeaway
Rigorous academic testing on US stocks finds candlestick patterns **not generally profitable**:
- **Marshall, Young & Rose (2006/2007)** tested 28 signals on DJIA stocks from 1992 to 2002 and found no reliable bullish predictors.
- **Later replications** confirm this.

Bulkowski's large-sample work finds a few rare multi-bar patterns with high reversal rates (bearish three-line strike 84%; three stars in the south 86%), but sample sizes are tiny. For example, he found only 85 bearish three-line strikes in more than 4.7 million candle lines.

Practitioners (Nison, Brooks, Fuller) use candles as *context-dependent signal bars* at levels, not as stand-alone systems. That use has not been tested rigorously on FX, futures or gold.

### Cited Findings
- **Marshall, Young & Rose (2006),** "Candlestick technical trading strategies: Can they create value for investors?". This is the core academic test of candlesticks on large US stocks. — [Massey University repository](https://mro.massey.ac.nz/items/edc6c1cf-63d9-4c94-a13d-92ffe1a53481/full); [IDEAS](https://ideas.repec.org/a/ris/jofitr/0834.html)
- **Marshall, Young & Rose (2007),** "Market timing with candlestick technical analysis".
  - Tested 28 candlestick signals on DJIA stocks from 1992 to 2002 with 10-day holding periods.
  - No bullish signal predicts abnormal positive returns with high reliability, and one single-day bullish signal reliably predicts *negative* returns.
  - The strategies are "not generally profitable" on large US stocks, so trading on them alone "does not seem sensible", though they may complement other timing methods.
  - Sources: [CXO Advisory "Candlesticks/Fiddlesticks"](https://www.cxoadvisory.com/technical-trading/candlesticks-fiddlesticks/); [Massey repository](https://mro.massey.ac.nz/bitstreams/7afc8049-23a1-4fe9-ac3a-792d6403ef1c/download)
- **2014 replication.** A 2014 working paper found the patterns not profitable on DJIA components when using the Marshall-Young-Rose holding strategy. — [IDEAS WP 14-A010](https://ideas.repec.org/p/sin/wpaper/14-a010.html)
- **2016 study (findings not retrieved).** "Can 1-day candlestick patterns be profitable on the 30 component stocks of the DJIA?", *Applied Economics* 48(35):3345–3354. — [IDEAS](https://ideas.repec.org/a/taf/applec/v48y2016i35p3345-3354.html)
- **Bulkowski on candles.**
  - The bearish three-line strike tested as a *bullish* reversal 84% of the time; the bullish three-line strike reverses bearish 65% of the time.
  - Bulkowski found only 85 bearish three-line strikes in more than 4.7 million candle lines. He warns that the statistics "may change with additional samples" and that the candle "doesn't perform as well as the numbers suggest".
  - In his top-10 reversal list, three stars in the south ranks first at 86%.
  - Sources: [Bulkowski three-line strike bearish](https://thepatternsite.com/ThreeLineStrikeBear.html); [Bulkowski CandleReverse](https://thepatternsite.com/CandleReverse.html); [Bulkowski CandlePerformers](https://www.thepatternsite.com/CandlePerformers.html); [Fidelity-hosted Bulkowski "Top 10 Candles That Work" PDF](https://fidelity.com/bin-public/060_www_fidelity_com/documents/Top10CandlesWork_620095.pdf)
- **Secondary reports.** Secondary sites repeat the 84% three-line-strike figure as "most accurate". Treat these as secondary. — [Investing.com](https://uk.investing.com/analysis/chart-patterns-ranked-by-accuracy-200622665)
- **Fuller's inside bar.** Fuller treats an inside bar as valid only when its full range (high to low) sits inside the mother bar's range. — [Comparic (translated Fuller article)](https://comparic.pl/strategia-inside-bar-nial-fuller/). See Section 6 for his trade rules.

### Inferences
- **Mostly stock evidence.** The academic evidence is almost entirely on US equities with daily bars and fixed holding periods, which is not how Nison, Brooks or Fuller use candles; they use location, trend and confirmation. The tests therefore reject "candles as a mechanical system", not "candles as entry triggers at pre-qualified levels". The latter remains **untested**, so any claimed edge is anecdotal.
- **Rare patterns.** High-reversal-rate multi-candle patterns (three-line strike, three stars in the south) are too rare to build an intraday FX/futures strategy on. Small samples also inflate apparent accuracy.
- **Gap-based patterns in 24-hour markets.** FX and XAUUSD trade nearly continuously, and NQ/ES trade nearly 23 hours a day, so traditional gap-dependent definitions are routinely relaxed for these markets. That means the classic definitions, and any stock-based statistics, do not map one-to-one. Examples are the morning/evening star, the abandoned baby, and the gap between bodies in a harami.

### Gaps
- **Not retrieved:** primary Steve Nison material, and Bulkowski's per-pattern statistics for hammer, engulfing, doji, harami, morning/evening star, tweezer and marubozu.
- **Not found:** any candlestick study on FX majors, ES/NQ or XAUUSD.
- **UNVERIFIED (model background knowledge), history.** Candlestick charting traces to 18th-century Japanese rice trading (Munehisa Homma is often credited). Steve Nison introduced it to the West in *Japanese Candlestick Charting Techniques* (1991) and *Beyond Candlesticks* (1994). Nison stresses that candles require context: trend, support/resistance and confirmation.
- **UNVERIFIED (model background knowledge), single-bar definitions.**
  - **Hammer:** after a decline; small real body near the top of the range; lower shadow at least 2x the body; little or no upper shadow.
  - **Hanging man:** the same shape after an advance.
  - **Shooting star:** after an advance; small body near the low; long upper shadow.
  - **Inverted hammer:** the same shape after a decline.
  - **Retail "pin bar":** the umbrella term for hammer/shooting-star shapes (long tail of roughly two-thirds or more of the bar, close near one end).
  - **Doji:** open ≈ close. Variants: long-legged, dragonfly (long lower shadow), gravestone (long upper shadow) and four-price.
  - **Marubozu:** full body with no shadows.
  - **Inside bar:** high ≤ prior high and low ≥ prior low.
  - **Outside bar:** high > prior high and low < prior low.
- **UNVERIFIED (model background knowledge), multi-bar definitions.**
  - **Engulfing:** the second real body engulfs the first, opposite colour, at the end of a trend.
  - **Harami:** a small second body inside the first's body.
  - **Morning star:** a long bearish bar, then a small-bodied star (gapping down in stocks), then a long bullish bar closing well into the first bar's body. **Evening star** is the mirror image.
  - **Three white soldiers / three black crows:** three consecutive long same-colour bodies, each closing near its extreme.
  - **Tweezer top/bottom:** consecutive bars with matching highs (lows).
- **UNVERIFIED (model background knowledge), standard trade mechanics.**
  - **Entry:** a stop order one tick or pip beyond the signal bar's extreme in the trade direction.
  - **Stop:** beyond the opposite extreme.
  - **Target:** the next support/resistance level or a fixed R-multiple.

## 6. Price-action schools: Al Brooks, Nial Fuller, Bob Volman, Lance Beggs (YTC) and "naked" trading

### Takeaway
The main modern price-action schools are bar-by-bar, discretionary frameworks:
- **Al Brooks:** 5-minute E-mini S&P, bar counting (H1/H2, L1/L2), wedges, measured moves, always-in direction.
- **Nial Fuller:** daily-chart FX pin bars and inside bars at key levels.
- **Bob Volman:** 70-tick EUR/USD scalping using build-ups, false/tease/proper breaks, plus an EMA as the only indicator.
- **Lance Beggs (YTC):** intraday futures/FX swing-structure setups.

All performance claims for these schools are **anecdotal or self-reported**. No independent audited track records or academic tests were found.

### Cited Findings
- **Brooks' bar counting.** In a bull-trend pullback, each bar whose high exceeds the prior bar's high is an attempt to resume the trend.
  - The first attempt is a High 1 (H1); the next, after a lower-high correction, is a High 2 (H2).
  - Brooks' glossary calls a High 3 a "wedge bull flag" variant.
  - Bear-trend rallies are counted the same way with Low 1 / Low 2 (L1/L2).
  - Sources: [LuxAlgo bar-counting concept](https://www.luxalgo.com/library/concept/bar-counting-h1-h2/); [Brooks Trading Course forum, terminology H1/H2/L1/L2](https://www.brookstradingcourse.com/support-forum/01-terminology/h1-h2-l1-l2-etc/paged/2/)
- **Brooks' entries and count resets.** Entry is a stop order one tick above the H1/H2 signal bar's high (one tick below for L1/L2 shorts). The count resets when the market rallies beyond the prior swing. — [Brooks forum](https://www.brookstradingcourse.com/support-forum/01-terminology/h1-h2-l1-l2-etc/paged/2/); [LuxAlgo](https://www.luxalgo.com/library/concept/bar-counting-h1-h2/)
- **Always-In.** A forum-documented "Always In" approach uses H2/L2 reversals to take profits and "stand aside" until price resumes in the always-in direction. — [Brooks forum journal "strategies always in"](https://www.brookstradingcourse.com/support-forum/trading-journals/strategies-always-in-24-and-h-l2-reversals-1x-risk/)
- **Volman's markets and indicator.** *Forex Price Action Scalping* focuses on EUR/USD on a 70-tick chart. The book discusses hundreds of setups with entries and exits "to the pip". The only indicator allowed is an exponential moving average. — [Goodreads book page](https://www.goodreads.com/book/show/13269524-forex-price-action-scalping); [SlideShare excerpt of Volman's "Understanding Price Action"](https://www.slideshare.net/slideshow/understanding-price-actionpdf-258251088/258251088)
- **Volman's break types.** He classifies breaks as **false breaks, tease breaks and proper breaks**.
  - A Volman-style "pattern break" with a good **build-up** has price wedged between support and resistance, forming several tops at the same level ("false highs").
  - An **inside range break** is a small box inside a larger one, entered on a break of the small box's edge.
  - Sources: [TradingView VN (false break ideas)](https://vn.tradingview.com/ideas/falsebreak/); [Brooks forum post on a Volman setup](https://www.brookstradingcourse.com/es/support-forum/trading-journals/good-bob-volman-setup-also-a-good-bpa-setup/)
- **YTC Price Action Trader (Lance Beggs).** Six volumes, about 590 pages and 377 charts, aimed at intraday traders. This comes from a reseller/sales page. — [globaltradingtools listing](https://globaltradingtools.com/?p=17029)
- **YTC community views (anecdotal).** NexusFi users say Beggs has fewer setups than Volman ("only three"). They also say the main YTC setups suit longer intraday timeframes than Volman's tick charts, and that they are hard to identify live as opposed to on static charts. — [NexusFi Volman thread](https://nexusfi.com/forex-currency-trading/23893-bob-volman-price-action-scalping-5.html); [NexusFi YTC review](https://nexusfi.com/vendors-product-reviews/12944-ytc-price-action-trader-www-ytcpriceactiontrader-com-6.html); [NexusFi YTC getting going](https://nexusfi.com/beginners-introductions-tutorials/12944-ytc-price-action-trader-getting-going.html)
- **Fuller's inside-bar rules** (translated Fuller articles).
  - **Entry:** a buy stop just above the mother bar's high or a sell stop just below its low.
  - **Context:** he prefers daily charts and strong trends; the pattern works best on breakouts in the trend's direction.
  - **Pitfalls:** inside bars produce many false breakouts in ranges or against the trend.
  - **Confirmation:** he advises waiting for a *close* beyond a key level rather than trading the intrabar break.
  - Sources: [Comparic: Fuller inside bar](https://comparic.pl/strategia-inside-bar-nial-fuller/); [Comparic: filtering PA signals](https://comparic.pl/jak-filtrowac-dobre-zle-sygnaly-price-action-nial-fuller/); [Comparic: entries/management](https://comparic.pl/jak-wyszukiwac-wchodzic-zarzadzac-transakcjami/)
- **Fuller's inside-bar stop (secondary).** A non-Fuller summary places the stop at the opposite end of the mother bar, or near its 50% level when the mother bar is large. — [TradingView DXY inside-bar post](https://my.tradingview.com/chart/DXY/AqWZ8Ckq-INSIDE-BAR-FOREX-TRADING-STRATEGY-RULES)
- **Fuller's combo setups.**
  - A pin bar followed by a small inside bar, ideally leaning toward the pin's main wick.
  - An "inside pin bar", where the whole pin bar sits inside the prior candle.
  - A "50% tweaked" pin-bar entry, which waits for a retrace to the middle of a large pin bar to reduce stop size (2014 weekly commentary).
  - Sources: [Comparic: pin bar + inside bar combo](https://comparic.pl/strategia-tradingowa-pin-bar-inside-bar-combo-nial-fuller/); [Comparic: weekly outlook June 2014](https://comparic.pl/nial-fullers-price-action-tygodniowe-spojrzenie-na-rynki-9-13-czerwca-2014/)
- **Forum variant (anecdotal).** A forum trader trades the mother-bar breakout rather than the inside-bar breakout, in the trend's direction. — [karmaheights inside bar summary](https://karmaheights.com/2025/04/23/inside-bar-forex-5); [BabyPips forum S/R + pin bar](https://forums.babypips.com/t/support-and-resistance-pin-bar-trading/107881)

### Inferences
- **Common structure.** All four schools reduce to the same skeleton:
  1. Define trend or range context (swing structure, EMA, prior levels).
  2. Wait for a pullback or test at a level.
  3. Enter on a stop beyond a signal bar or micro-range ("build-up" or inside bar).
  4. Place the stop beyond the structure.
  5. Target the prior swing or a measured move.

  The evidence bearing on this skeleton is indirect: Osler's support/resistance and stop-cascade results, and the time-series momentum/trend literature.
- **Market fit:**
  - **NQ/ES:** Brooks' framework was built on the ES 5-minute chart, so it transfers most naturally. NQ's higher volatility implies wider stops in points.
  - **Volman's scalping** is EUR/USD-specific and very sensitive to spread and commission. A 70-tick chart with targets of a few pips leaves costs as a large fraction of edge.
  - **Fuller's daily-chart pin and inside bars** are the least cost-sensitive of the four, and the most aligned with Osler-style daily support/resistance levels.

### Gaps
- **No independent performance data** exists for any of these schools. Brooks, Fuller, Volman and Beggs publish no audited records; in this session I found only forum anecdotes.
- **Not reached:** primary sources for Brooks' "always-in" definition, the traders' equation and measured-move rules (brookstradingcourse.com was blocked).
- **UNVERIFIED (model background knowledge), Al Brooks.**
  - **Books:** *Reading Price Charts Bar by Bar* (2009) and the *Trading Price Action* trilogy (Trends; Trading Ranges; Reversals, 2012).
  - **Chart:** primarily the ES 5-minute chart with a 20-bar EMA.
  - **Key ideas:**
    - **Always-in long/short:** if you had to hold a position, which side would you hold?
    - **Second entries:** H2/L2 entries are higher-probability than first entries.
    - **Wedges:** three pushes; a reversal or flag.
    - **Measured moves:** leg 1 ≈ leg 2, or a projection from a breakout "gap".
    - **Traders' equation:** probability × reward > (1 − probability) × risk.
    - **Breakout failure claim:** most breakout attempts from trading ranges fail; Brooks often cites about 80%. This is his claim and unverified.
- **UNVERIFIED (model background knowledge), Volman.**
  - **Book setups** (*Forex Price Action Scalping*, 2011): double-doji break (DD), first break (FB), second break (SB), block break (BB), range break (RB), inside range break (IRB) and advanced range break (ARB).
  - **Chart:** 70-tick EUR/USD with a 25 EMA.
  - ***Understanding Price Action*** (2014) moved to 5-minute charts. It introduced "ledges" (small bases with two or more matching highs or lows), "pressure" and "build-ups" near levels.
- **UNVERIFIED (model background knowledge), Lance Beggs (YTC).** Core setups:
  - TST: test of support/resistance.
  - BOF: breakout failure.
  - BPB: breakout pullback.
  - PB: simple pullback.
  - CPB: complex pullback.
  - "RB" is not a YTC setup name as far as I know.
- **UNVERIFIED (model background knowledge), Fuller.** Fuller (LearnToTradeTheMarket.com) teaches confluence with horizontal levels and the 8/21 EMA "dynamic support/resistance zone", plus a "set and forget" approach on the daily timeframe. A pin bar needs a tail clearly protruding from the surrounding bars; a common rule of thumb is a tail of two-thirds or more of the range.

## 7. Fibonacci, Elliott Wave, harmonic patterns, Wyckoff, W.D. Gann and market cycles

### Takeaway
These "geometric" and structural methods have the **weakest quantitative support** in this catalogue:
- **Fibonacci zones:** in the one peer-reviewed automated test found, they behaved no differently from non-Fibonacci zones.
- **Elliott Wave:** its leading forecaster (Prechter) scored 21% on CXO Advisory's guru scorecard against a 47% guru average. Newsletter tracking reportedly shows large underperformance.
- **Harmonic patterns:** studies find them rare. An EUR/USD and AUD/USD scan of 7,382 patterns from 2003 to 2018 found no evidence of non-randomness.
- **Wyckoff and Gann:** no rigorous tests were found.

Wyckoff's phase schematics remain the most coherent framework conceptually (auction/supply-demand logic), but evidence for them is anecdotal.

### Cited Findings

**Fibonacci retracements**
- **Peer-reviewed test (title as indexed): "Automatic identification and evaluation of Fibonacci retracements: Empirical evidence from three equity markets".** Indexed under ISSN 0957-4174 (*Expert Systems with Applications*), vol. 391.
  - It reports a positive relationship between zones and the probability of price bounces.
  - However, behaviour at Fibonacci and non-Fibonacci zones **did not differ statistically**.
  - Source: [datalearner index of the paper](https://www.datalearner.com/academic/journal-papers/0957-4174/volumes-and-issues/391/paper-detail/17703)
- **Student backtest.** An HKUST independent-study backtest found Fibonacci-retracement trading on Vanguard ETFs significantly underperformed the passive strategy. This is a student project, so it is modest evidence. — [HKUST project PDF](https://cse.hkust.edu.hk/~rossiter/independent_studies_projects/fibonacci_trading/fibonacci_trading.pdf)
- **Chance argument (commentary, not a test).** If reversals at Fibonacci lines can be explained by chance, the lines are no better than random lines. — [ForexOp](https://forexop.com/strategy/fibonacci-fact-or-fiction/)
- **Vendor claim, not traceable.** A vendor page claims a 63% failure rate and cites "ten academic research papers" without naming them. — [Liberated Stock Trader](https://www.liberatedstocktrader.com/how-to-use-fibonacci-retracement/)

**Elliott Wave**
- **Hard rules:**
  1. Wave 2 never retraces more than 100% of wave 1.
  2. Wave 3 is never the shortest of waves 1, 3 and 5.
  3. Wave 4 never enters wave 1's price territory, except in diagonals.

  Breaking any of these invalidates the count. — [LuxAlgo Elliott hard rules](https://www.luxalgo.com/library/concept/elliott-hard-rules/)
- **Guidelines** rank valid counts:
  - **Alternation:** waves 2 and 4 take alternate forms, for example a sharp wave 2 followed by a sideways, complex wave 4.
  - **Equality:** wave 5 is often about equal to wave 1, or 61.8% or 161.8% of it.
  - **Channelling.**
  - **Fourth-wave depth:** wave 4 often ends within the span of the previous fourth wave of one lesser degree.

  The standard reference is Frost & Prechter, *Elliott Wave Principle* (1978). — [LuxAlgo Elliott guidelines](https://www.luxalgo.com/library/concept/elliott-guidelines/)
- **Prechter's forecasting record.**
  - CXO Advisory graded his stock-market forecasts (mostly from April 2002 onward) at 21% accuracy against a guru average of 47%. His forecasts underperformed buy-and-hold over 2002–2012.
  - CXO cautions that the sample is small because of his long forecast horizons.
  - Source: [CXO Advisory Robert Prechter](https://www.cxoadvisory.com/individual-gurus/robert-prechter/)
- **Newsletter tracking and falsifiability.** A columnist citing Mark Hulbert's newsletter data reported that Prechter underperformed broad market averages by 25% a year since 1985. Critics argue Elliott Wave's loosely defined rules and nested degrees make it hard to falsify. — [Wikipedia, Robert Prechter](https://en.wikipedia.org/wiki/Robert_Prechter) (secondary; not fetched in full)

**Harmonic patterns**
- **Gartley's claim.** H.M. Gartley claimed his pattern, back-tested on several time frames up to 1933, "was correct about 70 per cent of the time". This is the originator's own unverified claim. — [Gartley pattern PDF (mql5)](https://c.mql5.com/3/132/Gartley_Pattern.pdf); [Society of Technical Analysts blog, history of the Gartley pattern](https://www.technicalanalysts.com/sta-blog/history-of-the-gartley-pattern-with-thanks-to-larry-pesavento-and-leslie-jouflas/)
- **Scott Carney** is the principal modern researcher. His work centres on precise Fibonacci-ratio price structures for reversals: Gartley, Bat, Butterfly, Crab, Shark, Cypher and their variants. — [TradingView Harmonic Patterns Library (TradingFinder)](https://my.tradingview.com/script/fntrGof5-Harmonic-Patterns-Library-TradingFinder/)
- **HKUST study.** Bullish Gartley, Butterfly, Bat and Crab patterns were tested on an S&P 500 ETF, EUR/USD and BTC/USD.
  - The patterns occur infrequently, which limits profitability.
  - Bullish Bat and Crab patterns predicted upward reversals with high accuracy in uptrending markets.
  - Source: [HKUST harmonic study PDF](https://cse.hkust.edu.hk/~rossiter/independent_studies_projects/trading_harmonic_patterns/trading_harmonic_patterns.pdf)
- **Forex harmonic-pattern paper.** A *Latin American Journal of Development* paper on forex time series found that only one of the popular patterns occurs with a probability "beyond the trivial". — [Biblat/UNAM record](https://biblat.unam.mx/en/revista/latin-american-journal-of-development/articulo/an-analysis-of-harmonic-patterns-in-the-time-series-of-the-forex-market)
- **EUR/USD and AUD/USD scan.** A quant analysis of 2003–2018 found 7,382 patterns and no indication of a market bias or non-randomness. — [Linclund analysis](https://linclund.com/?p=2654); [Linclund harmonic trading](https://linclund.com/harmonic-trading/)
- **ABCD patterns.** A study on six G10 currency pairs over three years reported win rates above 50% for many strategies, but an optimized strategy built from those findings gave no significant improvement in backtests. — [Linclund harmonic trading](https://linclund.com/harmonic-trading/) (attribution within the search summary was not fully clear)

**Wyckoff method**
- **Accumulation schematic.**
  - **Phase A** stops the downtrend: Preliminary Support (PS), Selling Climax (SC, a capitulation spike on heavy volume), Automatic Rally (AR, which sets the range top) and Secondary Test (ST, which revisits the SC area on lower volume and narrower spread).
  - **Phase B** builds the "cause": institutions accumulate, and swings are wide early and narrower later.
  - **Phase C** is the Spring, a brief break below support that traps sellers. Some schematics have no Spring and use a higher-low test instead.
  - **Phase D** brings the Sign of Strength (SOS), a rally through resistance on wider spread and volume, then the Last Point of Support (LPS), a shallow pullback on lighter volume.
  - **Phase E** is the markup out of the range.
  - Sources: [TrendSpider Wyckoff accumulation](https://trendspider.com/learning-center/chart-patterns-wyckoff-accumulation/); [StockCharts "Wyckoff Power Charting"](https://articles.stockcharts.com/article/articles-wyckoff-2015-07-wyckoff-power-charting-lets-review); [NexusFi Wyckoff schematics](https://nexusfi.com/a/strategies/wyckoff-accumulation-distribution-schematics)
- **Hank Pruden.** StockCharts and schematic documents credit the modern schematics to Hank Pruden's adaptation of Richard Wyckoff's original framework. — [Wyckoff Schematics: Visual Templates for Market Timing Decisions (PDF)](https://www.prorealcode.com/wp-content/uploads/2019/11/WyckoffSchematics-VisualTemplatesForMarketTimingDecisions.pdf); [StockCharts](https://my.stockcharts.com/articles/wyckoff/2015/07/wyckoff-power-charting-lets-review.html)

### Inferences
- **Fibonacci.** The best available test says Fibonacci retracement zones act like any support/resistance zone; the specific ratios add nothing measurable. The defensible use in FX, NQ/ES and gold is as one of several confluence inputs ("pullback depth zone"), not as precise turning points. Claims for the "golden pocket" (0.618–0.65) are anecdotal.
- **Elliott Wave** is unfalsifiable in real time (many alternate counts) and has a poor public forecasting record. Its hard rules are still useful as *invalidation* levels for risk placement, for example "below the wave-1 high the impulse count is wrong".
- **Harmonics.** The HKUST and LAJD studies, and the 7,382-pattern FX scan, imply that strict-ratio harmonics are either too rare or not reliably predictive after costs. The Bat and Crab results are small-sample and in-sample.
- **Wyckoff.** Its logic (climax → test → spring/upthrust → sign of strength or weakness) maps onto Osler's evidence of stop-runs beyond obvious levels: the spring and upthrust are failed breaks that trigger stop-loss cascades. That makes it conceptually consistent with the microstructure evidence, but it is still untested as a system.

### Gaps
- **Not found this session:**
  - Rigorous tests of Wyckoff schematics.
  - Any test of Gann angles, the Square of Nine or Gann time cycles.
  - Any test of Elliott Wave counting itself, as opposed to one forecaster.
  - Any test of the "golden pocket" or Fibonacci extensions.
  - Any test of harmonics on XAUUSD or NQ/ES.
  - Glenn Neely/NEoWave material.
- **Not retrievable:** Scott Carney's exact ratio tables (harmonictrader.com was blocked).
- **UNVERIFIED (model background knowledge), Fibonacci.**
  - **Retracements:** 23.6%, 38.2%, 50% (not a Fibonacci ratio, from Dow/Gann), 61.8% and 78.6%.
  - **Extensions:** 127.2%, 161.8% and 261.8%.
  - **"Golden pocket":** 61.8–65%, popularized in crypto and FX.
  - **Use:** draw from swing low to swing high in an uptrend.
- **UNVERIFIED (model background knowledge), Elliott Wave history.**
  - R.N. Elliott, *The Wave Principle* (1938).
  - Frost & Prechter (1978); Prechter founded Elliott Wave International.
  - Glenn Neely, *Mastering Elliott Wave* (1990), introduced the more rule-bound "NEoWave".
- **UNVERIFIED (model background knowledge), Elliott Wave structure.**
  - **Impulse:** 5-3-5-3-5.
  - **Corrections:**
    - zigzag 5-3-5;
    - flat 3-3-5 (regular, expanded or running);
    - triangle 3-3-3-3-3 (contracting or expanding);
    - double/triple threes.
  - **Diagonals:** leading (5-3-5-3-5 or 3-3-3-3-3) and ending (3-3-3-3-3), wedge-shaped, with wave 4 overlapping wave 1.
  - **Typical relationships:**
    - wave 2 retraces 50–61.8% of wave 1;
    - wave 3 is about 161.8% of wave 1;
    - wave 4 retraces about 38.2% of wave 3;
    - zigzag C ≈ A.
- **UNVERIFIED (model background knowledge), harmonic ratios** (Carney, *Harmonic Trading* Vols. 1–3, 1999–2016). XA = initial leg; the PRZ (potential reversal zone) is at D.
  - **Gartley "222":** named for p. 222 of Gartley's *Profits in the Stock Market* (1935).
    - B = 0.618 XA
    - C = 0.382–0.886 AB
    - D = 0.786 XA
    - BC projection 1.13–1.618
    - AB = CD (often)
  - **Bat** (Carney, 2001):
    - B = 0.382–0.50 XA
    - C = 0.382–0.886 AB
    - D = 0.886 XA
    - BC projection 1.618–2.618
  - **Alternate Bat:** B ≤ 0.382; D = 1.13 XA.
  - **Butterfly** (Bryce Gilmore / Carney):
    - B = 0.786 XA
    - C = 0.382–0.886
    - D = 1.27 XA (to 1.618)
    - BC projection 1.618–2.24
  - **Crab** (Carney, 2000):
    - B = 0.382–0.618 XA
    - D = 1.618 XA
    - BC projection 2.24–3.618
  - **Deep Crab:** B = 0.886.
  - **Shark** (Carney, about 2011): an O-X-A-B-C structure.
    - C = 1.13–1.618 extension of XA
    - C completes at 0.886–1.13 of OX
    - BC projection 1.618–2.24
  - **Cypher** (Darren Oglesbee):
    - B = 0.382–0.618 XA
    - C = 1.272–1.414 XA extension
    - D = 0.786 of XC
  - **AB=CD:**
    - C = 0.618–0.786 AB
    - D = 1.27–1.618 BC projection
    - CD ≈ AB in price and time
  - **Trade mechanics:**
    - Enter in the PRZ, ideally on price-action confirmation.
    - Stop beyond X, or beyond the PRZ's far edge.
    - Targets are 0.382 and 0.618 retracements of AD.
- **UNVERIFIED (model background knowledge), Wyckoff.**
  - **Origins:** Richard D. Wyckoff (1873–1934); the Wyckoff Stock Market Institute course of the 1930s.
  - **Three laws:**
    1. Supply and demand.
    2. Cause and effect (the point-and-figure count projects the markup).
    3. Effort vs result (volume vs spread divergence).
  - **"Composite Operator" / "Composite Man":** a heuristic for treating the market as one large operator.
  - **Distribution events:**
    - Preliminary Supply (PSY)
    - Buying Climax (BC)
    - Automatic Reaction (AR)
    - Secondary Test (ST)
    - Upthrust (UT)
    - Upthrust After Distribution (UTAD)
    - Sign of Weakness (SOW)
    - Last Point of Supply (LPSY)
  - **Modern teachers:** Wyckoff Analytics (Roman Bogomazov, Bruce Fraser), and David Weis's Weis Wave.
  - **FX and gold caveat:** spot FX and spot gold have no centralized volume. Tick volume, or CME futures volume (6E, GC), must be used as a proxy.
- **UNVERIFIED (model background knowledge), W.D. Gann.**
  - **Angles:**
    - A 1x1 angle is one unit of price per one unit of time.
    - Other angles are 2x1, 1x2, 4x1 and so on.
    - Angles depend on chart scaling, which is a common criticism.
  - **Square of Nine:** numbers spiral outward from the centre. Commonly √P ± 2 represents one full 360° rotation, ±1 is 180°, ±0.5 is 90° and ±0.25 is 45°.
  - **Time cycles:** 30, 45, 60, 90, 120, 144, 180 and 360 days, and anniversary dates.
  - **Evidence:** no credible statistical evidence is known to me; Gann's own track-record claims are disputed.
- **UNVERIFIED (model background knowledge), market cycles.**
  - J.M. Hurst, *The Profit Magic of Stock Transaction Timing* (1970), on nested cycles.
  - The 4-year Presidential cycle (US equities).
  - Seasonality.
  - None was verified this session.

## 8. Gaps: breakaway, runaway and exhaustion gaps; gap-fill strategies on index futures

### Takeaway
**This session found no sourced statistics on gap types or gap-fill rates for ES, NQ, FX or gold** (the search budget ran out before this topic). Everything below is unverified background and should be treated as a gap to fill.

### Cited Findings
- None retrieved this session.

### Inferences
- **Market structure determines which gaps exist.**
  - **ES/NQ:** CME Globex trades nearly 23 hours a day, so the "gap" used in practice is the difference between the regular-session (09:30 ET) open and the prior regular-session close (16:00 ET), or the prior settlement. True Globex gaps occur mainly at the Sunday reopen.
  - **EURUSD/GBPUSD and XAUUSD:** these trade 24/5, so meaningful gaps are mostly weekend (Sunday-open) gaps, plus small gaps around the daily 17:00–18:00 ET break in gold.
  - Classic stock-based gap taxonomy and statistics therefore do not transfer directly to these markets.

### Gaps
- **Not found:** any study of opening-gap fill rates on ES/NQ (by gap size or by day of week), weekend-gap fill statistics for EURUSD or XAUUSD, or Bulkowski's gap statistics.
- **UNVERIFIED (model background knowledge), gap taxonomy** (Edwards & Magee, *Technical Analysis of Stock Trends*):
  - **Common (area) gaps:** inside ranges; usually filled quickly.
  - **Breakaway gaps:** out of a base or range at the start of a move; often *not* filled soon.
  - **Runaway (measuring) gaps:** mid-trend. The "measuring" rule says the gap often marks the halfway point of the move.
  - **Exhaustion gaps:** late in a trend, on climactic volume; filled quickly, often forming an island reversal.
- **UNVERIFIED (model background knowledge), gap-fill trading in index futures.**
  - **Common practice:**
    - Fade small regular-session opening gaps (for example under about 0.3–0.5% in ES) toward the prior close.
    - Go with large gaps that hold the opening range ("gap-and-go").
    - Filters include gap size, the overnight range, the prior-day range, day of week and economic releases.
  - **Vendor statistics:** vendors frequently publish high fill-rate statistics for small ES gaps (for example 70%+ same-day fills for the smallest gaps). I could not verify these this session, so treat them as vendor claims pending a primary source.

## 9. Cross-cutting: overall academic evidence on classical technical analysis (relevant to FX, futures and gold)

### Takeaway
The academic literature finds that technical trading rules showed profits in many speculative markets, including FX and futures, **up to about the early 1990s**:
- **Park & Irwin (2007)** reviewed 95 modern studies: 56 positive, 20 negative, 19 mixed.
- **Methodological problems:** data snooping, ex-post rule selection, and difficulty estimating risk and transaction costs.
- **Later decline:** later work finds profitability strongly declined or disappeared in stocks, and declined in FX and futures.
- **Pattern-specific evidence:** Lo et al. 2000; Savin et al.; Chang & Osler; Osler's support/resistance work. It shows *some* information content, mostly in older data and US stocks.

The modern FX/futures/gold practitioner should treat classical tools as **context and risk-placement frameworks** with modest, decaying, cost-sensitive edges, not as validated stand-alone systems.

### Cited Findings
- **Park & Irwin (2007),** "What Do We Know About the Profitability of Technical Analysis?", *Journal of Economic Surveys* 21(4):786–826.
  - Of 95 modern studies, 56 found positive results, 20 negative and 19 mixed (as quoted by secondary sources).
  - The 2004 working-paper version counted 92 studies, 58 positive and 24 negative.
  - Sources: [IDEAS JES listing](https://ideas.repec.org/a/bla/jecsur/v21y2007i4p786-826.html); [Javeriana paper quoting Park & Irwin](https://revistas.javeriana.edu.co/index.php/cuadernos_admon/article/download/8529/7003); [Hedge Fund Alpha summary](https://hedgefundalpha.com/strategies/technical-trading-studies/); [2004 AgMAS report](https://ageconsearch.umn.edu/record/37487/files/AgMAS04_04.pdf)
- **Park & Irwin's caveats.**
  - Most of the empirical studies suffer from problems in their testing procedures: data snooping, ex-post selection of trading rules or search technologies, and difficulty estimating risk and transaction costs.
  - Profits were found in a variety of speculative markets "at least until the early 1990s".
  - Sources: [Farmdoc summary](https://farmdoc.illinois.edu/publications/the-profitability-of-technical-analysis-a-review); [AgMAS 2004](https://ageconsearch.umn.edu/record/37487/files/AgMAS04_04.pdf)
- **WIFO working paper (Schulmeister).** Recent studies on daily data find that the profitability of technical analysis has strongly declined or even ceased to exist in stock markets, with similar declines in FX and many futures markets. Most studies test only a few rules, which raises data-mining concerns. — [WIFO WP 2007/289](https://wifo.ac.at/wp-content/uploads/upload-4606/WP_2007_289.pdf)
- **Lo, Mamaysky & Wang (2000).** Automated pattern recognition on US stocks from 1962 to 1996 finds that several technical patterns provide incremental information, especially for Nasdaq stocks. — [NBER w7613](https://www.nber.org/papers/w7613); [CFA Digest](https://rpc.cfainstitute.org/-/media/documents/article/cfa-digest/2001/dig-v31-n1-811-pdf.pdf)
- **Bulkowski's failure rates rose roughly 2–4x** between the 1990s and the 2000s (about 14,000 patterns, 1991–2008). — [Bulkowski Failure Rates](https://thepatternsite.com/FailureRates.html)

### Inferences
- **Mechanism-backed methods.** The methods with a plausible *mechanism* supported by data are:
  - Support/resistance at widely watched, especially round-number, levels (Osler).
  - Stop-run and acceleration behaviour beyond those levels (Osler).
  - Trend persistence (the Dow/Hamilton re-test, and early FX trading-rule profits).

  Price-action entries at such levels (pin bars, inside bars, H2/L2, Wyckoff springs, "liquidity sweeps") can be seen as execution tactics around these mechanisms, but their *incremental* value is unproven.
- **Weakest support.** Precise geometric claims have the least support: Fibonacci ratios, harmonic ratio tolerances, Gann angles and Elliott wave counts.
- **Costs matter.** For intraday FX and NQ/ES scalping (Volman, Brooks at 1–5-minute scale), costs, slippage and spread are a large share of the documented effect sizes. Any backtest for these markets should be cost-inclusive and out-of-sample, and should account for data snooping. Park & Irwin flag exactly these failures in the literature.

### Gaps
- **Not retrieved:**
  - Neely, Weller & Ulrich (2009) on adaptive markets and declining FX technical-rule profits.
  - Menkhoff & Taylor (2007), "The Obstinate Passion of Foreign Exchange Professionals: Technical Analysis" (*Journal of Economic Literature*).
  - Sullivan, Timmermann & White (1999) on data snooping.
  - Any gold-specific technical-rule studies beyond the round-number papers.
- **Not found:** peer-reviewed studies of SMC/ICT concepts (order blocks, fair value gaps, liquidity sweeps), or of classical patterns specifically on NQ/ES futures or XAUUSD intraday data.
- **Process gap:** the web-search budget for this session was exhausted and the proxy blocked direct page fetches, so several sections rely on search-result summaries rather than full-text reads. A follow-up session could do the following:
  - Fetch Osler (2000) for exact hit rates.
  - Fetch Bulkowski's pages for rectangles, triple tops/bottoms, broadening patterns, diamonds and candlestick statistics.
  - Fetch Carney's ratio tables.
  - Fetch StockCharts' TD Sequential and pivot-point pages.
  - Find empirical studies of ES/NQ gap fills and FX weekend gaps.
