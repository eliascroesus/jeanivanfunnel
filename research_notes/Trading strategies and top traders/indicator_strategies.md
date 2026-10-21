# Technical Indicators and Indicator-Based Trading Strategies (Forex, NQ/ES Futures, Gold/XAUUSD)

> Research-process note for the report writer: these notes were compiled on 2026-10-21. Direct page fetching (WebFetch/curl) was blocked in this environment (DNS/egress-proxy refusals), and the shared web-search budget ran out after ~30 queries. As a result, (a) every **Cited Finding** below comes from search-engine summaries of the linked pages, not full-text reads, and (b) many standard indicator formulas could not be tied to a retrieved source. Those formulas are listed in the **Gaps** sections, explicitly labelled as *background knowledge, unverified this session*. They are textbook definitions and are very likely correct, but they should be checked against StockCharts ChartSchool, TradingView Help, or the original author texts before publication.

---

## Q1. Trend indicators: moving averages and crossovers, Supertrend, Parabolic SAR, ADX/DMI, Ichimoku, Donchian/Turtle, Keltner, regression channels, Heikin-Ashi

### Takeaway
Trend tools all do the same job in slightly different ways: they define direction with a lagging price filter (a moving average, a midpoint of highs and lows, or an ATR trailing line). Their documented edge is mainly **lower drawdowns in long trends**, not higher raw returns. On the S&P 500, the 50/200 "golden cross" roughly matches buy-and-hold CAGR (slightly below or above depending on the window) while cutting maximum drawdown from about 55% to about 20–33%. Rigorous evidence for Supertrend, Ichimoku and Parabolic SAR on ES, NQ, FX or gold is thin or negative. The Turtle system (Donchian breakouts plus N/ATR sizing) is the best-documented full system, but its exact unit limits are reported inconsistently in secondary sources.

### Cited Findings

**Moving-average crossover / golden cross (50/200 SMA)**
- QuantifiedStrategies-style test on the S&P 500 from 1960: golden-cross CAGR **6.8% vs 7.2%** for buy-and-hold, max drawdown **33% vs 56%**, invested about **70%** of the time. A second QS page gives 6.9% vs 7.4% and 33% vs 55%, so their own figures differ slightly. — [QuantifiedStrategies (Substack) – MA crossover](https://quantifiedstrategies.substack.com/p/moving-average-crossover-trading); [QuantifiedStrategies – golden cross backtest](https://quantifiedstrategies.substack.com/p/golden-cross-trading-strategy-backtest-798)
- StockCharts/Arthur Hill (SystemTrader), S&P 500 1990–2016: golden-cross compound annual return **7.42% vs 6.90%** for buy-and-hold. Another StockCharts 25-year test reports **8.48% vs 7.55%**, with buy-and-hold max drawdown **−56.74%** vs about **−20%** for the cross. — [StockCharts – Quantifying the Golden Cross for the S&P 500](https://articles.stockcharts.com/article/articles-arthurhill-2016-06-trading-strategy---crossing-to-the-dark-side---quantifying-the-golden-cross-for-the-sp-500/)
- The same author found the golden cross did **not** beat buy-and-hold on the Dow or the Russell 2000, and also tested Nasdaq-100 and whether short positions add value. — [StockCharts – Golden Cross on Nasdaq 100 and Russell 2000](https://articles.stockcharts.com/article/articles-arthurhill-2016-06-testing-the-golden-cross-with-the-nasdaq-100-and-russell-2000---do-short-positions-add-value---pitfalls-of-optimization/)
- SPY over about 20 years: golden-cross system **8.46%/yr**, average drawdown **17.22%**, vs buy-and-hold 7.52%/yr and 29% average drawdown. This uses the average of the top-five drawdowns, so it is not comparable with single max-DD figures. — [Edgeful – Golden cross guide](https://www.edgeful.com/blog/posts/golden-cross-trading-complete-guide)
- Caveat repeated across sources: the golden cross lags and often triggers after much of the rally is done. — [Edgeful](https://www.edgeful.com/blog/posts/golden-cross-trading-complete-guide)
- StockCharts SystemTrader also compared trailing stops with profit targets on an MA-crossover system. — [StockCharts – Trailing stops vs profit targets](https://articles.stockcharts.com/article/articles-arthurhill-2017-05-systemtrader---trailing-stops-versus-profit-targets-for-a-moving-average-crossover-system/)

**Moving-average rules: academic evidence (equities)**
- Brock, Lakonishok & LeBaron (1992), *Journal of Finance* 47(5):1731–1764. They tested moving-average and trading-range-break rules on the DJIA from 1897 to 1986 using bootstrap tests. Returns after signals were inconsistent with random walk, AR(1), GARCH-M and EGARCH nulls, buy signals outperformed sell signals, and returns after sell signals were negative. — [IDEAS/RePEc – BLL 1992](https://ideas.repec.org/a/bla/jfinan/v47y1992i5p1731-64.html); commentary: [Alpha Architect – Old-school academics on MA rules](https://alphaarchitect.com/2014/08/old-school-academics-on-moving-average-rules-remarkable/)
- Sullivan, Timmermann & White (1999), *Journal of Finance* 54:1647–1691. They expanded BLL's universe of 26 rules and applied White's Reality Check to about 100 years of DJIA data. On 1987–1996 data the best rule earned a **statistically insignificant 8.63%/yr before transaction costs**. — [FMG/LSE discussion paper](https://www.fmg.ac.uk/sites/default/files/2020-11/dp303.pdf); [LSE Research Online](https://researchonline.lse.ac.uk/id/eprint/119144)
- A re-examination (Hsu & Kuan) using the Reality Check and Hansen's SPA test found significantly profitable simple rules in "young" markets (**NASDAQ Composite, Russell 2000**) but **not in mature markets (DJIA, S&P 500)**. — [Re-Examining the Profitability of Technical Analysis with White's Reality Check and Hansen's SPA Test (PDF)](https://c.mql5.com/forextsd/forum/211/Re-Examining%20the%20Profitability%20of%20Technical%20Analysis%20with%20Whitets%20Reality%20Check%20and%20Hansen9s%20SPA%20Tes.pdf)
- A later stepwise-SPA study of growth and emerging-market indices found significant predictive power that **weakened after ETFs on those indices were introduced**. — [HKU repository (Hsu, Hsu & Kuan stepwise SPA)](https://hub.hku.hk/handle/10722/229640)
- A follow-up on recent DJIA data reportedly found that BLL rule profitability had disappeared, except the **22-day MA rule**, which still performed positively. This comes from a search summary. The URL appears to be the *ISE Review* 2009 record. — [IDEAS – ISE Review 2009](https://ideas.repec.org/a/bor/iserev/v11y2009i41p25-44.html)

**Supertrend**
- Construction: bands at the bar midpoint (high+low)/2 ± multiplier × ATR. Defaults are **ATR 10, multiplier 3** (suggested by creator **Olivier Seban**). The lower band cannot fall during an uptrend and the upper band cannot rise during a downtrend. A flip happens when price closes through the line. — [ForexTester – Supertrend](https://forextester.com/blog/supertrend-indicator/); [TradingView – SuperTrend STRATEGY script](https://www.tradingview.com/script/VLRj2sG9/)
- The ATR smoothing differs by implementation (Wilder RMA vs SMA of TR), so signals differ across platforms. Lower multipliers give more signals and more whipsaws. — [Unger Academy – Supertrend](https://ungeracademy.com/?p=6779); [ForexTester](https://forextester.com/blog/supertrend-indicator/)
- QuantifiedStrategies backtested Supertrend on the S&P 500 from 1960. The retrieved excerpt showed only one trade (buy 29 May 2020 at 3,044.31, sell 21 Jan 2022 at 4,397.94, +44.46%). The full statistics were **not retrieved**. — [QuantifiedStrategies – The Supertrend indicator backtested](https://quantifiedstrategies.substack.com/p/the-supertrend-indicator-backtested)

**Parabolic SAR (Wilder, 1978)**
- Acceleration factor (AF) starts at **0.02**, rises **0.02** each time the trend sets a new extreme point, and caps at **0.20**. Some sources suggest AF 0.01 for stocks and 0.02 for commodities and currencies. — [Wikipedia – Parabolic SAR](https://en.wikipedia.org/wiki/Parabolic_SAR); [TradingView Help – Parabolic SAR](https://www.tradingview.com/support/solutions/43000502597-parabolic-sar-sar/); [AvaTrade – Parabolic SAR](https://www.avatrade.com.au/education/professional-trading-strategies/parabolic-sar-indicator)
- Common practitioner filter (not Wilder's own rule): take SAR signals only when **ADX > 25** and skip them when **ADX < 20**. SAR gives the entry and ADX confirms the trend. — [LuxAlgo – Parabolic SAR](https://www.luxalgo.com/library/concept/parabolic-sar/); [CrossTrade – Parabolic SAR](https://crosstrade.io/learn/technical-indicators/parabolic-sar)

**Ichimoku Kinko Hyo (standard 9/26/52)**
- **Tenkan-sen** = (9-period highest high + 9-period lowest low)/2. **Kijun-sen** = the same over 26 periods. **Senkou Span A** = (Tenkan + Kijun)/2, plotted 26 periods ahead. **Senkou Span B** = (52-period high + 52-period low)/2, plotted 26 ahead. **Chikou Span** = current close plotted 26 periods back. The Kumo (cloud) is the area between Span A and B, green when A > B. These are midpoints of highs and lows, not moving averages of closes. — [MQL5 blog – five lines with exact formulas](https://www.mql5.com/en/blogs/post/774886); [WealthCharts – Ichimoku formulas](https://wealthcharts.crunch.help/en/indicator-formulas/ichimoku-cloud); [CrossTrade – Ichimoku](https://crosstrade.io/learn/technical-indicators/ichimoku-cloud)
- Source conflict: StockDoctor gives Kijun as 22 and Chikou as shifted Span B. This conflicts with all other sources and looks like an error. — [StockDoctor help](https://help.stockdoctor.com.au/hc/en-us/articles/360000100195-Ichimoku-Clouds)
- Backtest (practitioner, not peer-reviewed): Liberated Stock Trader tested Ichimoku on the DJ-30 stocks over 20 years with TrendSpider (about **15,000 trades**). It reported that Ichimoku **underperformed buy-and-hold 90% of the time**, with a reward/risk of **3.1** but losing signals **over 60%** of the time. The same summary also gives a "10% win rate", which conflicts with the 60%-losers figure, so treat both numbers as **unverified**. — [Liberated Stock Trader – Ichimoku tested](https://www.liberatedstocktrader.com/ichimoku-cloud/)
- A TradingView community Ichimoku strategy reported "good" Strategy Tester results when paired with RSI. The author said it worked better without the RSI filter. These are self-published results. — [TradingView – Ichimoku Clouds Strategy Long and Short](https://www.tradingview.com/script/uycyVpIq-Ichimoku-Clouds-Strategy-Long-and-Short/)

**Donchian channels and the Turtle Trading System (Dennis/Eckhardt; Curtis Faith, *Way of the Turtle*)**
- **System 1**: 20-day breakout entry with a **skip rule** (ignore the signal if the previous System 1 breakout in that direction would have been a winner). Longs exit on a **10-day low**, shorts on a 10-day high. **System 2**: 55-day breakout, every signal taken, exit on a **20-day** opposite breakout. — [MQL5 – Automating the Original Turtle Trading Rules](https://www.mql5.com/en/articles/23448); [TradingView Turtle script](https://www.tradingview.com/script/jbyeMkat/) (mirror: [ar.tradingview.com](https://ar.tradingview.com/script/jbyeMkat/))
- **N** = 20-day ATR. **Unit** = (1% of account) / (N × dollars per point). The initial stop is **2N**. Pyramid by adding a unit every **½N** in your favour, up to **4 units** per market, and raise the stops on earlier units so the combined stop stays about 2N from the latest entry. — [MQL5 article](https://www.mql5.com/en/articles/23448); [FXOpen – Turtle Trading rules](https://fxopen.com/blog/en/turtle-trading-system-rules-and-strategy/amp/); [ForexOp – Turtle system](https://forexop.com/strategy/turtle-system/)
- Portfolio limits are reported inconsistently. One source gives **12 units per direction** and 4 per market. A TradingView script lists risk caps of 2% per trade, 4% per market, **6% closely correlated**, **10% loosely correlated**, and **12% per direction**. Another source cites "2% of equity per trade". — [FXOpen](https://fxopen.com/blog/en/turtle-trading-system-rules-and-strategy/amp/); [TradingView turtletrader scripts](https://br.tradingview.com/scripts/turtletrader); [Torus Digital](https://www.torusdigital.com/toruscope/?p=6475)

**Time-series momentum / trend following (context for MA and breakout rules on futures, FX and gold)**
- Hurst, Ooi & Pedersen, "A Century of Evidence on Trend-Following Investing" (AQR; *Journal of Portfolio Management*, 2017). They built a time-series momentum strategy with 1-, 3- and 12-month lookbacks across **67 markets** (29 commodities, 11 equity indices, 15 bond markets, 12 currency pairs) from 1880 to 2016. Returns were positive in every decade, correlation with traditional assets was low, and the strategy performed well in equity bear markets. CXO's summary reports an average Sharpe ratio of about **0.4 after 2/20 fees** (verify against the paper). — [AQR white paper PDF](https://www.TrendFollowing.com/whitepaper/Century_Evidence_Trend_Following.pdf); [CXO Advisory summary](https://www.cxoadvisory.com/momentum-investing/trend-following-with-intrinsic-momentum-over-the-very-long-run); [Alpha Architect](https://alphaarchitect.com/?p=58168)

### Inferences
- **The Turtle 1% vs 2% conflict reconciles cleanly.** A unit is sized so that a **1N** move equals 1% of equity. With a **2N** stop, each unit therefore risks about **2%** of equity. The "1% per unit" and "2% per trade" statements describe the same rule. The 2/4/6/10/12% caps in the TradingView script appear to be the unit limits (4 per market, 6 closely correlated, 10 loosely correlated, 12 per direction) restated as N-risk percentages.
- On ES/SPX, MA-crossover filters work as **risk-reduction overlays**, cutting drawdown by about half. They are not alpha generators. On NQ (Nasdaq), older studies found more technical predictability than on the S&P/DJIA, but the evidence weakens in more recent, ETF-era data.
- Short-term crossover variants popular with retail intraday traders (9/21 EMA, 20/50 EMA on 1–15-minute NQ, ES, EURUSD or XAUUSD charts) have **no rigorous public evidence** in the sources found. Any performance claims for them should be treated as unverified.
- Ichimoku's 9/26/52 parameters are fixed conventions rather than optimised values. The only systematic test found (DJ-30 stocks, daily) was negative. No independent FX or gold Ichimoku backtest was found.

### Gaps
- **Not retrieved:** full QuantifiedStrategies statistics for Supertrend, Parabolic SAR, Ichimoku, Donchian and MA-pullback strategies on ES, NQ, EURUSD or gold. No sourced backtest of the 9/21 EMA, 20/50 EMA, MA ribbons (e.g. Guppy GMMA) or MA-pullback strategies on NQ, ES, FX or gold.
- No Curtis Faith primary text was retrievable. The following "Original Turtle Trading Rules" details are **background knowledge, unverified this session**:
  - N uses Wilder-style smoothing: N = (19 × previous N + current TR)/20.
  - Dollar volatility = N × dollars per point.
  - Unit limits: 4 per single market, 6 closely correlated, 10 loosely correlated, 12 per direction.
  - For each 10% drawdown, the notional account used for sizing is cut by 20%.
  - A "failsafe" System 1 entry is taken at the 55-day breakout if the 20-day signal was skipped.
  - An alternative ½N "whipsaw" stop was allowed.
  - Entries were intraday on the breakout tick.
- **Background-knowledge definitions (unverified this session; verify against StockCharts or TradingView Help):**
  - **SMA**(n) = ΣClose/n.
  - **EMA**: α = 2/(n+1), EMAₜ = α·Pₜ + (1−α)·EMAₜ₋₁.
  - **WMA**: linear weights n…1 divided by n(n+1)/2.
  - **HMA (Alan Hull, 2005)** = WMA[2·WMA(P, n/2) − WMA(P, n), √n].
  - **Golden cross / death cross** = 50-day SMA crossing above / below the 200-day SMA.
  - **ADX/DMI (Wilder 1978, period 14)**:
    - +DM = Hₜ−Hₜ₋₁ if that is greater than Lₜ₋₁−Lₜ and positive (else 0); −DM is the mirror.
    - +DI/−DI = 100 × Wilder-smoothed DM / ATR.
    - DX = 100·|+DI − −DI|/(+DI + −DI); ADX = Wilder-smoothed DX.
    - Signals: +DI/−DI crossover for direction; ADX > 25 (some use 20) means a trending market, < 20 means range.
  - **Parabolic SAR**: SARₜ₊₁ = SARₜ + AF·(EP − SARₜ).
  - **Ichimoku signals**:
    - TK cross: Tenkan crossing Kijun, rated strong above the cloud, neutral inside it, weak below it.
    - Kumo breakout: close above or below the cloud.
    - Chikou confirmation: Chikou above (or below) price 26 bars ago.
    - Kumo twist: Span A crossing Span B.
    - Origin: Goichi Hosoda ("Ichimoku Sanjin"), published 1969. The 9/26/52 settings are said to derive from a 6-day trading week.
  - **Donchian channel** = n-period highest high / lowest low (Richard Donchian's "4-week rule" ≈ 20-day breakout).
  - **Keltner channel**: the original Chester Keltner (1960) version was a 10-day SMA of typical price ± 10-day average range. The modern StockCharts/Raschke version is a 20-EMA ± 2 × ATR(10). TTM uses 1.5 × ATR.
  - **Linear regression channel**: least-squares line over n bars ± k standard deviations (Raff channel = ± max deviation).
  - **Heikin-Ashi**: HA-Close = (O+H+L+C)/4; HA-Open = (prior HA-Open + prior HA-Close)/2; HA-High = max(H, HA-Open, HA-Close); HA-Low = min(L, HA-Open, HA-Close).

---

## Q2. Momentum oscillators: RSI (Wilder, Connors RSI(2), ConnorsRSI, Cardwell), stochastic, StochRSI, MACD, CCI, Williams %R, ROC, Awesome Oscillator, TTM Squeeze, Elder Triple Screen/Impulse, Schaff Trend Cycle

### Takeaway
The best-evidenced oscillator strategies are **short-term mean-reversion systems on US equity indices**: Connors' RSI(2), Williams %R and IBS on SPY/QQQ. They show high win rates (about 70%+) with roughly 2-day holding periods and low market exposure. Standard **MACD 12/26/9 crossovers on the S&P 500 underperformed buy-and-hold** in the tests found. TTM Squeeze, Elder Triple Screen and the Schaff Trend Cycle have well-documented rules but no independent performance evidence. Nearly all performance figures come from practitioner or vendor backtests with unstated costs and should be flagged as unverified.

### Cited Findings

**Connors RSI(2) (Larry Connors, *Short Term Trading Strategies That Work*, 2008)**
- Long rules: price above the **200-day SMA** (trend filter), buy when **RSI(2) < 10** (aggressive variant < 5), exit on a close above the **5-day SMA** (some versions exit when RSI(2) > 65–70). — [MQL5 Connors RSI2 EA listing](https://www.mql5.com/fr/market/product/172894); [Backtrex – Does RSI(2) work on the S&P 500?](https://backtrex.com/en/backtests/connors-rsi-2-sp-500)
- Connors reportedly found that **stop-losses "damaged" performance** across a test of hundreds of thousands of trades, and did not advocate stops. This is a secondhand account. — [FMZ/Steemit – Larry Connors RSI2 mean reversion](https://steemit.com/fmz/@fmz.com/larry-connors-rsi2-mean-reversion-strategy)
- Average trade length is just over **2 days** (S&P 100 test by a TradingView author; numbers sit in a linked PDF that was not retrieved). — [TradingView – CM RSI-2 Strategy](https://de.tradingview.com/script/4dCKsn7c-CM-RSI-2-Strategy-Upper-Indicators)
- Backtrex ran a 2026 backtest of RSI(2) < 5 / 200-DMA filter / exit above the 5-DMA on daily S&P 500 data from Oct 2016 to Oct 2026 with costs included. The **results were not visible in the snippet**. — [Backtrex](https://backtrex.com/en/backtests/connors-rsi-2-sp-500)

**ConnorsRSI (CRSI 3,2,100)**
- CRSI = [RSI(Close, 3) + RSI(Streak, 2) + PercentRank(1-day return, 100)] / 3. The streak counts consecutive up closes (positive) or down closes (negative) and resets to 0 on an unchanged close. Readings **< 10** are oversold and **> 90** overbought. PercentRank tie conventions differ across platforms. — [Backtrader – CRSI recipe](https://backtrader.com/recipes/indicators/crsi/crsi/); [NexusFi – Connors RSI](https://nexusfi.com/a/indicators/connors-rsi-indicator); [LuxAlgo – Connors RSI](https://www.luxalgo.com/library/concept/connors-rsi.md)

**Andrew Cardwell RSI range rules**
- In uptrends RSI usually holds **40–80**; in bear markets it ranges about **20–60** (Mike Carr, *Technical Analysis of Stocks & Commodities*). In a bull regime 40 acts as support; in a bear regime 60 acts as resistance. — [Traders.com – Carr on Cardwell](https://technical.traders.com/tradersonline/display.asp?art=4866); [TradingView – Cardwell RSI scripts](https://id.tradingview.com/scripts/cardwellrsi/)
- **Positive reversal** = RSI makes a lower low while price makes a higher low. It is a **continuation** (bullish) signal, the mirror image of classic divergence. — [TradingView – RSI Levels & Regime Map / Cardwell reversal signals](https://vn.tradingview.com/scripts/style/)

**Williams %R and IBS (mean reversion on QQQ/SPY)**
- QuantifiedStrategies: **5-day Williams %R < −90** buy, exit when the close exceeds the prior day's high. Reported **72% win rate on QQQ** with only **21% time in market**, and said to also work on the S&P 500. This is a vendor claim with costs unstated. — [QuantifiedStrategies – Williams %R mean reversion](https://quantifiedstrategies.substack.com/p/profitable-williams-r-strategy-for)
- IBS (Internal Bar Strength = (C−L)/(H−L)): buy QQQ when **IBS < 0.10** (10), sell when **> 0.90**. WealthLab (Dec 2025) claims **>300%** return over the past decade. Drawdown and costs were not shown. — [WealthLab – IBS mean reversion](https://wealth-lab.com/blog/build-a-profitable-mean-reversion-strategy-using-the-ibs-indicator)
- An S&P 500 variant buys when **IBS < 0.25 and RSI(21) < 45** and exits on a close above the prior close. Results were not in the snippet. — [QuantifiedStrategies – S&P 500 mean reversion IBS + RSI](https://quantifiedstrategies.substack.com/p/s-and-p-500-mean-reversion-using-a49)
- A paid Substack reports a **16.22 return/drawdown ratio** for an IBS-only portfolio across **ES, NQ and YM futures** (unverified, paywalled). — [Alpha Algo Trading Research](https://algotr.substack.com/p/the-mean-reversion-portfolio-that)
- QuantifiedStrategies also tests RSI combined with ADX. — [QuantifiedStrategies – RSI and ADX](https://quantifiedstrategies.substack.com/p/rsi-and-adx-trading-strategies-backtest)

**MACD (Gerald Appel, 12/26/9)**
- Seeking Alpha test on the daily S&P 500 since 2000 (long on buy, flat on sell): the standard MACD **underperformed buy-and-hold even before costs**, and the *inverse* of the signals did better. — [Seeking Alpha – Why you shouldn't use the MACD](https://seekingalpha.com/article/4037100-why-you-shouldnt-use-the-macd)
- CXO Advisory, Jan 1993 to Feb 2008, MACD/signal crossover with a 25% filter: **84 round trips, 45% exposure, 1.3% average gain per round trip**, still **underperformed SPY buy-and-hold**. — [CXO Advisory – MACD crossover test](https://www.cxoadvisory.com/technical-trading/simple-test-of-macd-crossover-as-an-abnormal-returns-indicator)
- A TrendSpider marketplace MACD strategy on SPY (with a 21% take-profit and 7% stop) returned **365% vs 573%** for buy-and-hold with a **−48.8%** drawdown. This is a vendor showcase and the date range was blank. — [TrendSpider shared strategy](https://charts.trendspider.com/shared/64974bd24d85120015310282)
- In Elder's Triple Screen, the MACD histogram on **weekly** settings 12/26/9 serves as the "tide" filter, and weekly signals lag. — [Incredible Charts – MACD histogram](https://www.incrediblecharts.com/technical/macd_and_histogram.php)

**TTM Squeeze (John Carter, *Mastering the Trade*) and LazyBear's Squeeze Momentum**
- Squeeze is "on" when the **Bollinger Bands (20, 2σ)** sit fully inside the **Keltner Channels (20, 1.5 × ATR)**. It "fires" at the first bar the BBs move back outside (first green dot). The original used only the 1.5-ATR Keltner. **TTM Squeeze Pro** grades compression with 1.0 ATR (orange, high), 1.5 ATR (red, medium) and 2.0 ATR (black, low) channels. — [TradingView – TTM Squeeze Pro](https://www.tradingview.com/script/0drMdHsO-TTM-Squeeze-Pro); [LuxAlgo – TTM Squeeze](https://www.luxalgo.com/library/concept/ttm-squeeze.md)
- Histogram colours: cyan = positive and rising, blue = positive and falling, red = negative and falling, yellow = negative and rising. Blue and yellow are possible exhaustion signals. A histogram fading toward zero after the fire is a common exit cue. Longer squeezes are *watched* for larger releases, but squeeze duration does not predict the size of the move. — [LuxAlgo – TTM Squeeze](https://www.luxalgo.com/library/concept/ttm-squeeze.md); [TradingView – TTM Squeeze Pro](https://www.tradingview.com/script/0drMdHsO-TTM-Squeeze-Pro)
- LazyBear's "Squeeze Momentum Indicator" is claimed (by an automation vendor blog) to be the **most-liked TradingView indicator (~97.4K likes)**. This is unverified. — [PickMyTrade blog](https://blog.pickmytrade.io/top-free-indicators-and-strategies-on-tradingview.md)

**Elder Triple Screen and Impulse System (Alexander Elder, *Trading for a Living*)**
- Screen 1 ("tide"): **weekly MACD-histogram** (12/26/9 weeks) slope sets the trend. Screen 2 ("wave"): a daily oscillator (Elder-ray, Stochastic, Force Index, Williams %R) flags pullbacks against the weekly trend. Screen 3: entry via a **buy-stop just above the prior day's high** (sell-stop below the prior day's low in downtrends). — [Incredible Charts](https://www.incrediblecharts.com/technical/macd_and_histogram.php); [Babypips forum – Triple Screen on EURUSD](https://forums.babypips.com/t/the-triple-screen-trading-system-for-eurusd/37362)
- On a BabyPips EURUSD forward test, the traditional weekly-MACD-histogram filter gave only **about 5 trades a year** and was "not very profitable", so the author changed it. This is anecdotal. — [Babypips forum](https://forums.babypips.com/t/the-triple-screen-trading-system-for-eurusd/37362)
- Impulse System: bar is **green** when the **13-EMA is rising and the MACD-histogram is rising**, red when both are falling, and blue (neutral) otherwise. Green prohibits shorting and red prohibits buying. — [TradingView – Elder Unified Trading System](https://www.tradingview.com/scripts/triplescreen/); [TradingView – Elder's Complete Trading System](https://my.tradingview.com/script/v5aXloyy-Elder-s-Complete-Trading-System)

**Schaff Trend Cycle (Doug Schaff, FX trader, 1990s)**
- Defaults: MACD from the **23 and 50 EMAs**, a **10-bar** cycle with a double stochastic of the MACD, and a smoothing factor of about **0.5**. A cross up through **25** signals an uptrend and a cross down through **75** a downtrend. Readings pinned near 0 or 100 indicate an ongoing trend. It whipsaws in chop. — [Schaff, "The Schaff Trend Cycle" (PDF)](https://c.mql5.com/forextsd/forum/70/the_schaff_trend_cycle.pdf); [StockSharp docs – STC](https://doc.stocksharp.com/en/topics/api/indicators/list_of_indicators/schaff_trend_cycle); [LuxAlgo – STC](https://www.luxalgo.com/library/concept/schaff-trend-cycle/)
- Source conflict: IndiaInfoline's one-line STC formula is a simplified or incorrect version and should not be used. — [IndiaInfoline](https://indiainfoline.com/knowledge-center/online-share-trading/what-is-the-schaff-trend-cycle)

### Inferences
- The oscillator evidence divides by holding period and market. **Very short lookbacks** (RSI(2), 5-day %R, IBS) used as **mean-reversion entries in an uptrend** on US equity indices have the strongest practitioner evidence. Standard-length oscillators (RSI 14 at 70/30, MACD 12/26/9) used as stand-alone signals have weak or negative evidence on the S&P 500.
- These equity-index mean-reversion results apply most directly to **ES and NQ** traded on daily bars. There is no evidence in the gathered sources that they transfer to EURUSD or XAUUSD. Gold and FX have historically shown more trend persistence (see Q6).
- Because the RSI(2), %R and IBS systems hold positions about 2 days and trade often, **costs and slippage matter a lot**. The QQQ and SPY claims do not state costs.
- Cardwell's framework re-labels RSI 40/60 as regime support and resistance. It conflicts with naive 70/30 overbought/oversold trading in trends: in a bull trend, RSI 40 is a buy zone, not "neutral".

### Gaps
- No primary QuantifiedStrategies RSI(2) statistics were retrieved (CAGR, win rate, profit factor and max DD are all missing), and no Connors book numbers were found. No sourced backtests were found for stochastic, StochRSI, CCI, ROC, Awesome Oscillator, TTM Squeeze or STC on ES, NQ, EURUSD or XAUUSD.
- Bollinger and Carter's own published squeeze rules were not retrieved. The exact TTM histogram math is **background knowledge, unverified**: LazyBear's version = linear regression (length 20) of [close − average(average(highest high₂₀, lowest low₂₀), SMA₂₀(close))].
- The YouTube-style "100 trades" backtests (e.g. Trading Rush on MACD, RSI, Supertrend) are widely cited by retail traders but were not retrieved. Treat them as unverified.
- **Background-knowledge definitions (unverified this session):**
  - **RSI (J. Welles Wilder, *New Concepts in Technical Trading Systems*, 1978)**: RS = Wilder-smoothed average gain / average loss over 14 periods; RSI = 100 − 100/(1+RS). Levels 70/30, with centreline 50 and failure swings.
  - **Stochastic (George Lane)**: %K = 100·(C − LLₙ)/(HHₙ − LLₙ), n=14; %D = 3-SMA of %K. The "slow" stochastic smooths %K by 3. Levels 80/20.
  - **StochRSI (Chande & Kroll, 1994)**: (RSI − min RSIₙ)/(max RSIₙ − min RSIₙ), typically 14,14,3,3, with levels 0.8/0.2.
  - **MACD (Appel, late 1970s)**: EMA12 − EMA26, with a signal line of EMA9 of MACD. The histogram (Thomas Aspray, 1986) = MACD − signal. Signals: signal-line cross, zero-line cross, histogram slope, divergence.
  - **CCI (Donald Lambert, 1980)**: TP = (H+L+C)/3; CCI = (TP − SMA₂₀(TP))/(0.015 × mean absolute deviation). Levels ±100.
  - **Williams %R (Larry Williams)**: −100·(HHₙ − C)/(HHₙ − LLₙ), n=14. Levels −20/−80.
  - **ROC** = 100·(Cₜ − Cₜ₋ₙ)/Cₜ₋ₙ; Momentum = Cₜ − Cₜ₋ₙ.
  - **Awesome Oscillator (Bill Williams)**: SMA₅ of median price (H+L)/2 minus SMA₃₄ of median price. Signals: zero-line cross, "saucer", "twin peaks".

---

## Q3. Volatility indicators: ATR (stops, sizing, Chandelier), Bollinger Bands (squeeze, band walks, %b, rules, mean reversion vs breakout), standard-deviation channels, volatility contraction

### Takeaway
ATR is the backbone of modern stop and position-sizing logic. Examples are the Turtles' N-based units and 2N stops, the Chandelier exit (highest high − 3 × ATR(22)), Supertrend and UT Bot. Bollinger Bands (20-SMA ± 2σ) can be used two opposite ways: **fade** band touches in ranges, or **trade the breakout** after a squeeze (BandWidth at a 6-month low). Bollinger himself says band tags are not signals by themselves. No rigorous public evidence was found that either Bollinger approach is profitable net of costs on ES, NQ, FX or gold.

### Cited Findings
- **Chandelier Exit (Chuck LeBeau)**: long stop = **highest high(22) − 3 × ATR(22)**; short stop = lowest low(22) + 3 × ATR(22). LeBeau's original hangs the stop from the highest high or highest close **since trade entry**, while the fixed 22-bar lookback is the charting adaptation. An ATR expansion without a new high *lowers* the stop unless it is ratcheted. — [Corporate Finance Institute – Chandelier Exit](https://corporatefinanceinstitute.com/resources/equities/chandelier-exit/); [LuxAlgo – Chandelier Stop](https://www.luxalgo.com/library/concept/chandelier-stop/); [Incredible Charts – Chandelier exits](https://www.incrediblecharts.com/indicators/chandelier_exits.php)
- Worked **ES** example: a high of 5268 with ATR(22) of 8.5 gives a stop at 5268 − 25.5 = **5242.5**. — [NexusFi – Chandelier Exit](https://nexusfi.com/a/indicators/chandelier-exit)
- **ATR position sizing (Turtle N)**: Units = (1% of equity)/(N × $ per point), with a 2N initial stop (see Q1). — [MQL5 – Original Turtle Rules](https://www.mql5.com/en/articles/23448)
- **Bollinger Bands**: John Bollinger's default is a **20-period SMA ± 2 standard deviations**.
  - **%b** = (Close − Lower)/(Upper − Lower): 1 at the upper band, 0 at the lower band, above 1 or below 0 outside the bands.
  - **BandWidth** = (Upper − Lower)/Middle.
  - A **Squeeze** is commonly defined as BandWidth at its **lowest level in 125 periods** ("where trend is born"). Others define it as a low relative to the instrument's own history rather than a fixed threshold.

  — [LuxAlgo – BandWidth](https://www.luxalgo.com/library/concept/bandwidth.md); [TradingView – Bollinger squeeze script](https://ar.tradingview.com/script/xoT9w66V); [The Right Trader – BB width](https://therighttrader.com/learn/indicators/bollinger-band-width)
- Bollinger's own rules page says the bands "do not provide continuous advice; rather they help identify setups where the odds may be in your favor". BandWidth's most popular use is identifying "The Squeeze", and it also helps spot trend changes. — [BollingerBands.com – Bollinger Band Rules](https://www.bollingerbands.com/bollinger-band-rules)
- The TTM Squeeze (BB inside KC) is a volatility-contraction filter (see Q2). Squeeze duration does not predict the size of the move. — [LuxAlgo – TTM Squeeze](https://www.luxalgo.com/library/concept/ttm-squeeze.md)

### Inferences
- **Regime determines how to use the bands.** In ranges, buying at %b ≤ 0 and selling at the middle or upper band is a mean-reversion trade, similar to RSI(2) and IBS logic on indices. In trends, repeated closes outside the bands ("walking the band") are continuation evidence, and fading them is the classic losing trade.
- ATR-based stops (2N, 3 × ATR Chandelier, Supertrend 3 × ATR10) normalise risk across instruments with very different volatility (EURUSD vs NQ vs XAUUSD). This is likely the most transferable indicator concept across the three markets, even where entry signals are not.

### Gaps
- Bollinger's full 22 rules, and the definitions of "walking the bands" and Methods I–III, were not retrieved. **Background knowledge, unverified:**
  - Tags of the bands are not signals in themselves.
  - Closes outside the bands are initially continuation signals.
  - When changing the length, adjust the σ multiplier: about 1.9σ for 10 periods and 2.1σ for 50 periods.
  - Method I is volatility breakout after a squeeze. Method II is trend-following with %b and MFI confirmation. Method III is reversals via W-bottoms and M-tops with %b or volume-indicator divergence.
- No sourced net-of-cost backtest of Bollinger mean reversion or breakout on ES, NQ, EURUSD or gold. No sourced backtest of the Chandelier exit vs fixed stops.
- **Background-knowledge definitions (unverified):**
  - **ATR (Wilder 1978)**: TR = max(H−L, |H−Cₚᵣₑᵥ|, |L−Cₚᵣₑᵥ|); ATR14 is a Wilder-smoothed TR.
  - **Standard-deviation channel**: regression line ± k·σ of the residuals.
  - **Volatility-contraction setups** include NR7 (Toby Crabel's narrowest range in 7 bars), inside bars, and Mark Minervini's VCP. These are price-pattern rather than indicator setups and were not researched here.

---

## Q4. Volume-based indicators (light coverage): OBV, MFI, Chaikin, Accumulation/Distribution, VWAP

### Takeaway
No sources on volume indicators were retrieved before the search budget ran out. This section is entirely background knowledge and should be verified. Note that spot FX and spot XAUUSD have **no centralised volume**: OBV, MFI and VWAP on those charts use broker tick volume. Volume indicators are therefore more meaningful on CME NQ/ES and gold futures (GC/MGC).

### Cited Findings
- None retrieved this session (search budget exhausted; see Gaps).

### Inferences
- Because spot FX and XAUUSD CFDs report only tick volume from a single liquidity source, volume-weighted indicators on those instruments are proxies. On ES, NQ and GC futures they use exchange volume. This is an inference from market structure and is not sourced here.

### Gaps
- **All formulas below are background knowledge, unverified this session:**
  - **OBV (Joseph Granville, 1963)**: running total that adds the day's volume on an up close and subtracts it on a down close. Used for divergence and trend confirmation.
  - **Accumulation/Distribution Line (Marc Chaikin)**: CLV = [(C−L) − (H−C)]/(H−L); A/D = running sum of CLV × Volume.
  - **Chaikin Oscillator** = EMA₃(A/D) − EMA₁₀(A/D).
  - **Chaikin Money Flow** = Σ₂₀(CLV × V)/Σ₂₀(V), with ±0.05 to 0.25 thresholds used in practice.
  - **MFI (Gene Quong & Avrum Soudack)**: typical price × volume is split into positive and negative flow over 14 periods; MFI = 100 − 100/(1 + positive/negative flow ratio). Levels 80/20, described as a volume-weighted RSI. Bollinger uses MFI in his Method II.
  - **VWAP** = Σ(typical price × volume)/Σ(volume), reset each session. Variants: ±1σ/2σ bands, anchored VWAP. It is used as an institutional benchmark and an intraday mean or trend reference on ES and NQ.
- Order-flow tools (delta, footprint, volume profile) are out of scope here; another researcher covers them.

---

## Q5. Divergence strategies, multi-indicator confluence, popular TradingView indicators (2024–2026), and retail XAUUSD algorithmic systems (EAs)

### Takeaway
Divergence (regular = reversal, hidden = continuation) is the most widely taught oscillator setup, but no rigorous performance evidence was found for it. Popular TradingView tools in 2024–2026 are dominated by ATR-trailing-stop systems (UT Bot, Supertrend variants), squeeze/momentum tools (LazyBear Squeeze Momentum, WaveTrend) and Smart Money Concepts (SMC) structure indicators (LuxAlgo). Their popularity metrics are vendor-reported and none has an independent, peer-reviewed track record. The retail XAUUSD EA market is dominated by grid and martingale systems that tend to blow up in strong one-directional gold moves. Live-verified (e.g. Myfxbook) drawdowns typically far exceed the backtests.

### Cited Findings

**Divergence**
- Cardwell's "positive reversal" (RSI lower low with price higher low) is a **bullish continuation** signal, the mirror image of classic bullish divergence (price lower low, RSI higher low). This corresponds to what many retail sources call "hidden bullish divergence". — [TradingView – Cardwell reversal signals](https://vn.tradingview.com/scripts/style/); [Traders.com – Carr on Cardwell](https://technical.traders.com/tradersonline/display.asp?art=4866)

**Popular TradingView indicators**
- **UT Bot Alerts**: a volatility trend-following system with an ATR trailing stop. Inputs are a **Key Value** (ATR multiplier/sensitivity: lower values give more signals) and an **ATR Period (default 10)**, with an option to calculate on **Heikin-Ashi** candles. One MQL5 port uses Wilder RMA smoothing. Vendor-suggested Key Values are about 2.0–3.5 for BTC/ETH on daily to H4 charts. — [TradingView – UT Bot script page](https://my.tradingview.com/script/lPLuynjG); [MQL5 – UTBot Alerts port](https://www.mql5.com/zh/market/product/166242)
- **Squeeze Momentum (LazyBear)**: claimed by a vendor blog as the most-liked TradingView indicator (~97.4K likes, unverified). **Smart Money Concepts** is described as an all-in-one tool showing real-time market structure (BOS/CHoCH), order blocks, premium/discount zones and liquidity grabs. **WaveTrend Oscillator (LazyBear)** also appears in community "best indicators" lists. — [PickMyTrade – top free TradingView indicators](https://blog.pickmytrade.io/top-free-indicators-and-strategies-on-tradingview.md); [TradingView – Top 10 best indicators for 2025](https://www.tradingview.com/chart/BTCUSD/9wGoeKnE-TOP-10-BEST-TRADINGVIEW-INDICATORS-FOR-2025); [CMC Markets – seven best TradingView indicators](https://www.cmcmarkets.com/en-au/cfd/learn/tradingview/best-indicators-for-tradingview)
- No authoritative 2025 popularity ranking exists. TradingView's own script library sorted by likes is the best primary check. — [PickMyTrade](https://blog.pickmytrade.trade/best-tradingview-indicators/)

**Retail XAUUSD EAs**
- "Gold trading EAs have flooded the market—most using dangerous grid/martingale tactics that eventually blow accounts when gold corrects." A martingale grid can blow an account when gold makes an extended directional move without significant pullbacks. — [NYC Servers – Gold Reaper review](https://newyorkcityservers.com/blog/the-gold-reaper-review); [NYC Servers – EA Gold Stuff review](https://newyorkcityservers.com/blog/ea-gold-stuff-review)
- Example martingale lot escalation from an EA specification: **0.02 → 0.03 → 0.05 → 0.09 → 0.16 → 0.28 → 0.48**, so exposure grows about 24× in 7 steps. — [MQL5 EA specification example](https://c.mql5.com/21/597/EA_Specification_first_.txt?d=1)
- Vendor listings themselves warn that grid and martingale strategies can suffer significant drawdowns in strong one-directional markets. — [MQL5 – SmartBalance Gold EA](https://www.mql5.com/ru/market/product/187408); [cTrader store listing](https://ctrader.com/zh/products/316)
- "The Gold Reaper" (a breakout EA, not grid) showed a live **max drawdown of 41.66%** on a moderate-risk account, much higher than its backtest drawdown. The reviewer may be an interested party. — [NYC Servers – Gold Reaper review](https://newyorkcityservers.com/blog/the-gold-reaper-review)
- Typical retail gold-scalping EA marketing (e.g. "Gold Scalping King", "Quantum scalper x AI") makes performance claims without independent audit. — [MQL5 – Gold Scalping King](https://mql5.com/8cpen); [MQL5 – Quantum scalper x AI](https://www.mql5.com/ru/market/product/187886)

### Inferences
- Many "new" TradingView indicators are re-packagings of older ideas. UT Bot and Supertrend are both ATR trailing stops in the lineage of Wilder's Volatility System and LeBeau's Chandelier exit. Squeeze Momentum is Carter's TTM Squeeze with a linear-regression momentum histogram. SMC indicators automate price-structure labels rather than computing classical indicators.
- **Gold specifically**: XAUUSD's large intraday ranges and multi-week one-directional runs make grid and martingale EAs especially fragile. A credible XAUUSD EA due-diligence checklist is: verified live track record of 12+ months on Myfxbook or FXBlue with real-money tracking, no averaging-down or martingale lot progression, a hard stop-loss on every trade, and live max drawdown close to backtest drawdown.
- **Confluence systems** (e.g. trend filter + oscillator pullback + ATR stop, as in Elder's Triple Screen or RSI(2) above the 200-DMA) are the structure behind most documented strategies. Adding more indicators raises data-snooping risk (see Q6) unless the additions are validated out of sample.

### Gaps
- No rigorous study of regular vs hidden divergence profitability was found. **Background-knowledge definitions (unverified):**
  - Regular bullish = price lower low + oscillator higher low (reversal).
  - Regular bearish = price higher high + oscillator lower high.
  - Hidden bullish = price higher low + oscillator lower low (continuation).
  - Hidden bearish = price lower high + oscillator higher high.
- The exact UT Bot Pine formula and authorship (often credited to "Yo_adriiiiaan", building on HPotter's ATR trailing stop, with a strategy version by QuantNomad) are **unverified**. The default Key Value of 1 is also unverified.
- LuxAlgo product details, popularity metrics and any audited performance were not retrieved.
- No aggregate data on XAUUSD EA failure rates was found. No regulator or neutral audit exists in the results, and no Myfxbook records were pulled directly.

---

## Q6. Trending vs ranging markets; Forex vs NQ/ES vs gold; what rigorous studies say about net-of-cost profitability

### Takeaway
The academic record supports technical rules where markets were **less efficient or younger**:
- FX trend rules worked in the 1970s–80s.
- NASDAQ and Russell technical rules showed predictability in older samples.
- Emerging-currency rules still show predictability in a large data-snooping-controlled study.

The record also shows that **simple, popular rules decay** once widely known (FX MA and filter rules by the early 1990s; DJIA and S&P 500 after data-snooping correction). Park & Irwin's review of 95 modern studies found more positive than negative results (56 positive, 20 negative, 19 mixed; figure from a secondary source), but flagged data snooping, ex-post rule selection and cost estimation as pervasive problems. Long-horizon trend following across futures (including gold and FX) has the most robust net-of-fee record. Short-horizon mean reversion is the most-cited practitioner edge on US equity indices (ES, NQ).

### Cited Findings

**Surveys and reviews**
- Park & Irwin (2007), "What Do We Know About the Profitability of Technical Analysis?", *Journal of Economic Surveys* 21(4):786–826. — [IDEAS/RePEc](https://ideas.repec.org/a/bla/jecsur/v21y2007i4p786-826.html); earlier version: [Univ. of Illinois farmdoc – The Profitability of Technical Analysis: A Review](https://farmdoc.illinois.edu/publications/the-profitability-of-technical-analysis-a-review)
  - Headline count: **95 modern studies — 56 positive, 20 negative, 19 mixed**. The authors note data-snooping, ex-post rule selection and difficult risk and transaction-cost estimation. *This count comes from a secondary blog and was not verified against the paper.* — [ThorTradeCopier – does technical analysis work](https://thortradecopier.com/blog/does-technical-analysis-work)
- A WIFO (Schulmeister, 2007) working paper cites Park & Irwin (2005) for the finding that **technical trading profits have declined in many futures markets**. — [WIFO WP 2007/323](https://wifo.ac.at/wp-content/uploads/upload-8775/WP_2007_323.pdf)
- Menkhoff & Taylor (2007), "The Obstinate Passion of Foreign Exchange Professionals: Technical Analysis", *Journal of Economic Literature* 45(4):936–972:
  - Technical analysis is widespread among FX professionals and **may be profitable**.
  - They test four explanations: non-rational behaviour, exploitation of central-bank intervention, efficient information processing, and signals about non-fundamental influences.
  - The last explanation is the most plausible. Neither irrationality nor intervention is widespread or persistent enough to explain the "obstinate passion".

  — [EconPapers – JEL 2007](https://econpapers.repec.org/article/aeajeclit/v_3a45_3ay_3a2007_3ai_3a4_3ap_3a936-972.htm); [Warwick WRAP](https://wrap.warwick.ac.uk/30672/); [IDEAS working paper](https://ideas.repec.org/p/han/dpaper/dp-352.html)

**Forex**
- Neely, Weller & Ulrich (2009), *JFQA* 44(2):467–488:
  - FX technical excess returns of the **1970s–80s were genuine**, not data mining.
  - **Filter and moving-average rule profits had disappeared by the early 1990s.**
  - Returns on less-studied rules also declined but "probably have not completely disappeared".
  - High volatility makes mean returns imprecise.
  - The pattern fits Lo's **Adaptive Markets Hypothesis**, not the EMH.

  — [UPenn GP bibliography – Neely 2009 JFQA](https://gpbib.pmacs.upenn.edu/gp-html/Neely_2009_JFQA.html); [St. Louis Fed WP 2006-046](https://files.stlouisfed.org/files/htdocs/wp/2006/2006-046.pdf)
- Neely & Weller (2011 review): risk adjustment and central-bank intervention do not plausibly justify the observed excess returns from simple rules, and psychological biases could contribute. — [St. Louis Fed WP 2011-001](https://fraser.stlouisfed.org/docs/publications/frbsl_wp/2011-001.pdf)
- Olson (2004), "Have trading rule profits in the currency markets declined over time?", *Journal of Banking & Finance* 28(1):85–105. The title and record were retrieved but the findings were not. — [IDEAS](https://ideas.repec.org:443/a/eee/jbfina/v28y2004i1p85-105.html)
- Hsu, Taylor & Wang (2016), "Technical trading: Is it still beating the foreign exchange market?", *Journal of International Economics* 102:188–208:
  - Covers **45 years** of daily data, **30 developed and emerging currencies**, and **more than 21,000 rules**, using a stepwise SPA test to control data snooping.
  - Finds **substantial predictability and excess profitability** for both developed and emerging currencies, supported out of sample, but with time variation and cross-sectional variation.
  - Attributes this to temporary irrationality and market immaturity.

  — [WashU profile](https://profiles.wustl.edu/en/publications/technical-trading-is-it-still-beating-the-foreign-exchange-market/); [CEPR DP10018](https://cepr.org/publications/DP10018); [STA blog summary](https://www.technicalanalysts.com/sta-blog/technical-trading-still-beating-foreign-exchange-market/)

**Equity indices (ES/NQ)**
- After data-snooping correction, DJIA rule profits are statistically insignificant, at 8.63%/yr for the best rule before costs on 1987–1996 data. — [FMG DP303](https://www.fmg.ac.uk/sites/default/files/2020-11/dp303.pdf)
- Simple rules were significantly profitable on the **NASDAQ Composite and Russell 2000** but not on the **DJIA or S&P 500** (Reality Check / SPA re-examination). — [Hsu & Kuan re-examination (PDF)](https://c.mql5.com/forextsd/forum/211/Re-Examining%20the%20Profitability%20of%20Technical%20Analysis%20with%20Whitets%20Reality%20Check%20and%20Hansen9s%20SPA%20Tes.pdf)
- Predictability in growth and emerging indices **weakened after index ETFs were introduced**. — [HKU repository](https://hub.hku.hk/handle/10722/229640)

**Gold**
- Urquhart et al. (2015), MA crossover rules (SMA, EMA, WMA) on **5-minute spot gold and silver, 2008–2015**:
  - Conventional parameters were **not profitable**.
  - Across a wide parameter sweep, some gold combinations were profitable, with longer lookbacks doing better.
  - Silver showed no significant profits.

  — [Urquhart et al., "Does technical analysis beat the market? Evidence from high frequency trading in gold and silver" (PDF)](https://c.mql5.com/forextsd/forum/174/does_technical_analysis_beat_the_market__evidence_from_high_frequency_trading_in_gold_and_silver.pdf)
- Monthly gold timing (hold gold when a short MA is above a long MA) reportedly **outperformed**. The authors attribute this to investor underreaction, a behavioural explanation, rather than to crash-risk compensation. — [Quantpedia – An Extensive Test of Market Timing Strategies in the Gold Market](https://quantpedia.com/an-extensive-test-of-market-timing-strategies-in-the-gold-market/)
- QuantifiedStrategies, gold **12-month MA** (hold when price is above the 12-month / ~250-day average, else cash): **$100k in 1971 grew to ~$10M vs ~$4M buy-and-hold**. Methodology details and costs were not shown. — [QuantifiedStrategies – Gold moving average strategy](https://quantifiedstrategies.substack.com/p/gold-moving-average-strategy-best)
- QuantifiedStrategies: an RSI(5) rule on the **gold/silver ratio** (buy when it crosses above 75, sell below 50) **performed poorly on GLD**, and a pair-trade variant was about flat. — [QuantifiedStrategies – Gold silver ratio strategy](https://quantifiedstrategies.substack.com/p/gold-silver-chart-ratio-strategy)
- Anderson & Faff (2005): dual-MA and channel-breakout rules on **COMEX gold futures (1990–1998)** were **not statistically or economically significant**. — [Bond University – Profitability of trading rules in futures markets](https://research.bond.edu.au/en/publications/profitability-of-trading-rules-in-futures-markets/)
- Marshall et al.: **7,846 rules on 15 commodity futures** found technical rules **not reliably profitable** as stand-alone strategies. — [CXO Advisory – Does technical trading work with commodity futures?](https://www.cxoadvisory.com/technical-trading/does-technical-trading-work-with-commodity-futures/)
- Balsara et al. (1996): fixed-parameter rules showed large performance swings across commodities and periods, and the authors recommend adaptive parameters. — [Financial Decisions – Balsara et al.](https://www.financialdecisionsonline.org/archive/pdffiles/v09n1/balsara.pdf)

**Cross-asset trend following**
- Across 67 futures markets from 1880 to 2016, trend following was positive in every decade with low correlation to traditional assets. Reported Sharpe was about 0.4 after 2/20 fees (CXO summary; verify against the paper). — [AQR – A Century of Evidence on Trend-Following](https://www.TrendFollowing.com/whitepaper/Century_Evidence_Trend_Following.pdf); [CXO Advisory](https://www.cxoadvisory.com/momentum-investing/trend-following-with-intrinsic-momentum-over-the-very-long-run)

### Inferences

**Trending vs ranging**
- Trend tools (MA crosses, Donchian/Turtle, Supertrend, Parabolic SAR, Ichimoku, UT Bot) profit in persistent trends and lose through whipsaws in ranges.
- Oscillators (RSI, Stochastic, %R, CCI, BB %b fades) do the opposite.
- **ADX** (> 25 trending, < 20 ranging) and **BandWidth or squeeze state** are the standard regime filters.
- Practitioner evidence points to **short-term mean reversion on US equity indices** and **longer-horizon trend following on gold and diversified futures** as the better-supported pairings.

**Forex**
- Classic MA and filter rules on major pairs lost their edge by the early 1990s.
- Data-snooping-controlled evidence still finds predictability, especially in **emerging and less liquid currencies**. Those are less relevant to retail EURUSD/GBPUSD traders, who also face spreads on short timeframes.
- Expect intraday indicator systems on majors to struggle net of costs unless they have a demonstrable out-of-sample edge.

**NQ vs ES**
- Older studies found technical predictability on NASDAQ but not on the S&P 500 or DJIA, which weakly favours NQ for trend and technical rules. That evidence predates heavy ETF and futures participation and weakened afterward.
- Practitioner mean-reversion results (RSI(2), %R, IBS) are reported on both SPY and QQQ, and on an ES/NQ/YM futures portfolio, all unverified.

**Gold**
- Long-horizon MA timing (10–12-month or 200–250-day) has the best support: behavioural underreaction, the QS 1971–present test, and the Quantpedia study.
- Daily futures rules (1990–1998) and conventional intraday MA rules were not significant.
- Intraday XAUUSD indicator scalping therefore lacks rigorous support, and the dominant retail EA designs (grid/martingale) carry tail-risk blow-up profiles.

**Net of costs**
- Few studies report robust net-of-cost profits for simple indicator rules on liquid, mature markets in recent decades.
- Positive results usually come from one of three places: (a) older samples, (b) less mature markets, or (c) practitioner backtests that omit costs or slippage, use ex-post parameter choices, or test on a single index.
- Data snooping matters: testing thousands of rules, as in Sullivan et al., Marshall et al. and Hsu et al., is what separates genuine from lucky results.

### Gaps
- The Park & Irwin 56/20/19 figures could not be verified from the paper itself (the search tool only reached a secondary blog). The paper's specific FX and futures sub-findings were not retrieved.
- The Taylor & Allen (1992) survey statistic (commonly cited as about 90% of London FX dealers using technical analysis at short horizons) was **not retrieved**. It is background knowledge and unverified.
- The Bessembinder & Chan (1998) finding that BLL rules are not profitable after costs appeared only in an unattributed search summary and should be verified before use.
- Olson (2004) findings were not retrieved. The background-knowledge claim that FX MA-rule risk-adjusted returns declined from the late 1970s toward about zero by the late 1990s is unverified.
- No sourced rigorous study specific to **NQ or ES futures intraday** indicator rules (e.g. 1–15-minute charts) was found, and none specific to **XAUUSD intraday** apart from Urquhart et al.'s 5-minute MA study.
- No independent net-of-cost evidence was found for TradingView community indicators (LuxAlgo, UT Bot, Squeeze Momentum, SMC).
- Searches not run because the budget was exhausted: Zakamulin's critiques of MA timing, Bollinger-band backtests on S&P/gold, Parabolic SAR and Ichimoku FX backtests, and the Taylor & Allen survey. A follow-up session with working page fetches should retrieve QuantifiedStrategies' RSI(2), Bollinger, Supertrend and gold pages for exact CAGR, win-rate and drawdown figures.
