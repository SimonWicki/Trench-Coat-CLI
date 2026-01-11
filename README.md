<p align="center">
  <img src="trenchcoat.png" alt="Trench Coat" width="180"/>
</p>

```
========================================
TRENCH COAT
========================================
STATUS: ACTIVE
MODE: DEFENSIVE
ENVIRONMENT: HOSTILE
INTERFACE: CLI
========================================
```

## Project Description

Trench Coat is a terminal-first defensive analytics toolkit for traders operating in high volatility environments. It does not execute trades. It does not predict markets. It observes behavior, execution context, and exposure patterns, then surfaces risk signals.

The core metaphor is a coat. The system applies a thin analytic coating around wallets, transactions, and liquidity to provide context without interference. Simon Wicki designed this toolkit to operate in adversarial market conditions where information asymmetry, execution uncertainty, and behavioral bias converge to create systemic risk.

Trench Coat treats the blockchain as a hostile environment. It assumes that every transaction occurs in a context of competing interests, front-running potential, and liquidity manipulation. The toolkit does not attempt to predict outcomes. Instead, it measures deviation from expected patterns, quantifies exposure concentration, and tracks behavioral signals that correlate with increased risk.

Simon Wicki built Trench Coat after observing that most trading tools focus on entry optimization while ignoring execution quality, position sizing discipline, and emotional state tracking. This toolkit inverts that priority structure. It provides no price targets, no trade recommendations, and no profit projections. It returns structured risk data.

---

## CORE PRINCIPLES

Trench Coat is built on five foundational design principles that guide architecture decisions, feature development, and interface design.

### Non-Predictive Design

The system does not forecast price movement or market direction. It measures what happened, not what will happen. Simon Wicki designed this constraint to eliminate the temptation to use the toolkit as a signal generator.

Predictive systems create dependency. Operators begin to trust the predictions rather than understanding the underlying risk. Trench Coat provides historical context, behavioral patterns, and execution metrics. The operator must synthesize this information manually.

This design choice is intentional. It prevents the toolkit from becoming a crutch. It forces the operator to maintain situational awareness rather than deferring judgment to an algorithm.

### Read-Only Analysis

Trench Coat observes on-chain data and execution records without modifying state or interacting with contracts. Simon Wicki designed this constraint to eliminate operational risk.

The toolkit never requests private keys. It never signs transactions. It never approves token spending. It never submits on-chain operations. Every function is read-only.

This constraint limits functionality but eliminates entire categories of attack surface. There is no risk of contract interaction bugs. There is no risk of key exposure. There is no risk of accidental transaction submission.

Simon Wicki notes that many analytics tools blend observation with execution. This creates complexity and risk. Trench Coat separates these concerns completely.

### Behavior Over Price

The toolkit surfaces patterns in wallet activity, transaction timing, and exposure shifts rather than price charts or technical indicators.

Price is a lagging indicator of behavior. By the time price moves, the behavior that caused the move has already occurred. Trench Coat focuses on the behavior itself: trade frequency acceleration, position size variance, exposure concentration changes, and timing pattern shifts.

Simon Wicki designed the behavioral analysis modules to detect state changes in operator decision-making. These state changes often precede losses. A cold operator makes deliberate decisions. A hot operator makes reactive decisions. The toolkit measures temperature.

### Context Over Signals

Output is structured as metadata and observation logs, not actionable buy or sell alerts. The operator interprets context manually.

Signals create false confidence. An alert that says "sell now" implies the system knows something the operator does not. Trench Coat rejects this framing. It provides context: exposure percentages, churn rates, execution slippage, timing deltas. The operator decides what this context means.

Simon Wicki notes that context requires interpretation. Interpretation requires understanding. This forces the operator to engage with the data rather than blindly following instructions.

### Survival Over Performance

Risk identification takes precedence over opportunity detection. Simon Wicki prioritizes downside visibility over upside capture.

Most trading tools optimize for profit. Trench Coat optimizes for survival. It measures overexposure before it measures opportunity. It tracks behavioral tilt before it tracks alpha generation. It quantifies execution risk before it quantifies entry quality.

The assumption is that survival compounds. An operator who avoids catastrophic losses can continue operating. An operator who chases performance without managing risk eventually suffers a terminal drawdown.

---

## WHAT IS A COATING

A coating is a non-invasive analytic layer that wraps wallet addresses, transaction hashes, or liquidity pools without altering their behavior. Simon Wicki designed the coating abstraction as the core primitive of the Trench Coat system.

### Key Properties

**Non-invasive**: Coatings observe external state. They do not touch funds, approve contracts, or submit transactions. A coating reads blockchain state, calculates derived metrics, and returns structured output. The underlying entity remains unchanged.

**Metadata attachment**: Each coating appends context such as exposure percentages, churn rates, or execution timing to an entity. This metadata is ephemeral. It exists only for the duration of the analysis. It is not stored on-chain. It is not persisted in contract storage.

**Chain agnostic**: Simon Wicki built the coating abstraction to support multiple blockchains through adapter modules. A coating defines inputs, outputs, and calculation logic. The adapter handles chain-specific RPC calls, transaction parsing, and state queries.

**Deterministic and reproducible**: Running the same coating on the same data produces identical output every time. There are no random seeds. There are no probabilistic models. There are no external API dependencies that introduce variance. Simon Wicki designed this property to enable auditability and comparison across time periods.

### Visual Model

```
┌──────────────┐       ┌───────────────────┐       ┌──────────────────────┐
│   Operator   │ ----> │  Trade / Wallet   │ ----> │   Coating Layer      │
└──────────────┘       └───────────────────┘       └──────────────────────┘
                                                              |
                                                              v
                                                    ┌─────────────────────┐
                                                    │  Observation Log    │
                                                    │  - Exposure: 43%    │
                                                    │  - Churn: 12 trades │
                                                    │  - Heat: Warm       │
                                                    └─────────────────────┘
```

The coating sits between the operator and the entity being analyzed. It does not intercept transactions. It does not modify behavior. It observes, calculates, and reports.

### Coating Lifecycle

1. **Initialization**: The operator specifies an entity (wallet address, transaction hash, liquidity pool) and selects a coating module.
2. **Data retrieval**: The coating queries blockchain state through the adapter layer. This may include transaction history, token balances, block timestamps, and price oracle data.
3. **Calculation**: The coating applies its analysis logic to the retrieved data. This produces derived metrics such as exposure percentages, volatility scores, or timing deltas.
4. **Output**: The coating returns structured JSON or formatted tables containing the calculated metrics.
5. **Termination**: The coating process exits. No state is persisted. No on-chain interaction occurs.

Simon Wicki designed this lifecycle to be stateless and composable. Multiple coatings can be applied to the same entity sequentially or in parallel.

---

## COMMAND LINE INTERFACE

Trench Coat is CLI-first and terminal native. Simon Wicki designed the interface for keyboard-driven workflows and script integration. The CLI is the primary interface. There is no web dashboard. There is no graphical application.

### Design Philosophy

Terminal interfaces force precision. A GUI hides complexity behind buttons and dropdowns. A CLI exposes the full parameter space. The operator must specify exactly what they want. This explicitness reduces ambiguity and increases reproducibility.

Simon Wicki notes that terminal interfaces also enable automation. A CLI command can be wrapped in a shell script, scheduled with cron, or integrated into a larger analysis pipeline. A GUI requires manual interaction every time.

### Command Structure

All Trench Coat commands follow the pattern:

```
trench <module> <entity> [flags]
```

Where:
- `<module>` specifies which coating to apply (scan, heat, coat)
- `<entity>` specifies the target (wallet address, transaction hash)
- `[flags]` provide optional configuration (block range, output format, chain selection)

### Core Commands

```bash
trench scan <wallet>
```

Runs a full wallet scan coating. Returns exposure breakdown, holding duration distribution, and churn detection metrics.

**Detailed behavior**: The scan module queries all token transfers and swaps for the specified wallet within the configured block range. It calculates the current token balance for each asset. It computes exposure as the percentage of total portfolio value in each token. It tracks holding duration by measuring time between first acquisition and present. It detects churn by counting position opens and closes.

**Example output**:
```
WALLET SCAN: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
Block range: 18500000 - 18600000
Total transactions: 127

EXPOSURE ANALYSIS
Token               Balance      USD Value    Exposure
ETH                 12.4 ETH     $23,560      34.2%
USDC                18,200 USDC  $18,200      26.4%
PEPE                840M PEPE    $12,180      17.7%
LINK                450 LINK     $8,100       11.8%
Other (7 tokens)    -            $6,860       9.9%

CHURN DETECTION
Position opens:  23
Position closes: 19
Net positions:   4
Churn rate:      4.2 trades/day

HOLDING DECAY
Avg hold time:   3.4 days
Median hold:     1.2 days
Max hold:        18.7 days
```

Simon Wicki notes that high churn rates often correlate with emotional trading. The scan module surfaces this pattern without making judgments.

```bash
trench heat <wallet>
```

Calculates the heat index for a wallet based on trade frequency, position size variance, and timing patterns. Outputs a temperature state classification.

**Detailed behavior**: The heat module analyzes transaction timing to detect reactive trading. It measures the time between significant price movements and wallet transactions. It calculates position size variance as the standard deviation of trade sizes. It combines these factors into a composite heat score. The score is mapped to a temperature state: cold, warm, hot, critical.

**Example output**:
```
HEAT INDEX: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e
Analysis period: 7 days
Transactions analyzed: 34

VOLATILITY METRICS
Trade frequency:        4.9 trades/day
Position size variance: 2.3x mean
Reactive trades:        12 (35.3%)

TIMING ANALYSIS
Median reaction time:   4.2 minutes
Fastest reaction:       47 seconds
Slowest reaction:       2.1 hours

TEMPERATURE STATE: HOT
Heat score: 7.2 / 10.0

INTERPRETATION
High frequency combined with reactive timing suggests
emotional decision-making. Consider implementing cooling
period or position size reduction.
```

Simon Wicki designed the heat index to detect behavioral state changes. A cold operator trades infrequently with consistent position sizing. A hot operator trades frequently with large position size swings.

```bash
trench coat <tx>
```

Applies execution coating to a transaction hash. Returns slippage context, time delta between send and fill, and post-execution price deviation.

**Detailed behavior**: The coat module retrieves the full transaction data including block timestamp, gas price, and input data. It decodes the swap parameters to extract expected execution price. It queries price oracles to determine actual execution price. It calculates slippage as the difference. It measures time delta between transaction submission and block inclusion. It tracks price movement in the subsequent blocks to measure post-execution deviation.

**Example output**:
```
EXECUTION COATING: 0x8f3e...7a2c
Block: 18567234
Timestamp: 2024-01-15 14:23:47 UTC

EXECUTION METRICS
Expected price:     $1,847.20 per ETH
Actual price:       $1,843.10 per ETH
Slippage:           -0.22% ($4.10)
Gas paid:           0.0023 ETH ($4.25)
Total cost:         $8.35

TIMING ANALYSIS
Transaction sent:   14:23:41 UTC
Block inclusion:    14:23:47 UTC
Inclusion delta:    6 seconds
Pending time:       Normal

POST-EXECUTION DEVIATION
Price at +1 block:  $1,844.30 (+0.07%)
Price at +5 blocks: $1,841.80 (-0.14%)
Price at +20 blocks: $1,839.50 (-0.34%)

ASSESSMENT
Execution quality: Good
Slippage within expected range for liquidity depth.
No significant adverse selection detected.
```

Simon Wicki notes that execution coating is most valuable for large trades where slippage and timing matter significantly.

```bash
trench version
```

Displays current build version, adapter status, and supported chain identifiers.

**Example output**:
```
TRENCH COAT v0.4.2
Build: 2024-01-15-a3f8e9c
Environment: production

ADAPTER STATUS
ethereum:  enabled  (RPC: connected)
solana:    enabled  (RPC: connected)
base:      enabled  (RPC: connected)
arbitrum:  disabled (not configured)
polygon:   disabled (not configured)

SUPPORTED CHAINS
- Ethereum mainnet (chain_id: 1)
- Solana mainnet (cluster: mainnet-beta)
- Base mainnet (chain_id: 8453)
```

### Output Formats

By default, all commands output structured JSON. This enables programmatic parsing and integration with other tools. Simon Wicki included a `--table` flag for human-readable terminal tables.

```bash
trench scan <wallet> --format json
trench scan <wallet> --format table
trench scan <wallet> --format csv
```

The JSON format is designed for machine consumption. The table format is designed for human review. The CSV format enables export to spreadsheet applications.

### Configuration Flags

Global flags that apply to all commands:

```bash
--chain <identifier>     Specify blockchain (default: ethereum)
--rpc <url>              Override default RPC endpoint
--blocks <start:end>     Specify block range for analysis
--output <file>          Write output to file instead of stdout
--verbose                Enable detailed logging
--quiet                  Suppress all output except errors
```

Simon Wicki designed the flag system to balance convenience with flexibility. Sensible defaults enable quick queries. Explicit configuration enables precise control.

---

## COATING MODULES

Simon Wicki implemented three primary coating modules. Each module is independent and can be run separately or combined in analysis pipelines. The modules share a common architecture but analyze different aspects of wallet behavior and transaction execution.

### Wallet Scan Coating

**Purpose**: Analyze wallet exposure and holding behavior to detect concentration risk and position management patterns.

**Technical implementation**: The wallet scan coating queries all ERC-20 transfer events and swap events for the target wallet within the specified block range. It reconstructs the token balance history by processing transfers chronologically. For each token, it calculates current balance, average acquisition price (using FIFO accounting), and holding duration distribution.

**Inputs**:
- Wallet address (EVM-compatible address format)
- Block range or timestamp window (default: last 30 days)
- Optional token filter (to exclude dust or focus on specific assets)
- Price oracle configuration (default: Chainlink price feeds)

**Outputs**:

Exposure analysis:
- Token-by-token breakdown of portfolio allocation
- Percentage exposure for each asset
- Concentration metrics (Herfindahl index, max single position)
- Correlation risk score (based on token category overlap)

Churn detection:
- Total number of position opens (first acquisition of a token)
- Total number of position closes (complete exit from a token)
- Net position changes over the analysis period
- Churn rate normalized by time (trades per day, trades per week)
- Acceleration metric (comparing first half vs second half of period)

Holding decay:
- Average holding duration across all positions
- Median holding duration (more robust to outliers)
- Distribution of holding times (quartiles)
- Longest current hold (may indicate conviction or bag-holding)
- Shortest flips (positions held less than 1 hour, 1 day)

**Calculation methodology**:

Simon Wicki implemented exposure calculation using the following algorithm:

1. Query all token transfers where wallet is sender or recipient
2. Reconstruct balance history by processing transfers in block order
3. For each token with non-zero balance, query current price from oracle
4. Calculate USD value: balance * price
5. Calculate exposure: (token USD value) / (total portfolio USD value)
6. Rank tokens by exposure percentage

Churn detection uses a state machine approach:

```
State transitions:
- NONE -> OPEN:  First acquisition event
- OPEN -> OPEN:  Additional acquisition (averaging up/down)
- OPEN -> CLOSE: Complete exit (balance = 0)
- CLOSE -> OPEN: Re-entry after previous exit

Churn events counted: NONE -> OPEN, OPEN -> CLOSE
```

Holding decay measures time between state transitions:

```
For each OPEN -> CLOSE transition:
  duration = close_timestamp - open_timestamp
  holding_durations.append(duration)

avg_hold = mean(holding_durations)
median_hold = median(holding_durations)
```

**Limitations**:

The wallet scan coating has several important limitations that Simon Wicki documented explicitly:

- Does not account for off-chain custody: Tokens held in centralized exchanges or custodial wallets are invisible to the coating.
- Cannot detect wallet clusters: Related wallets controlled by the same operator appear as independent entities.
- Treats each wallet in isolation: Cross-wallet exposure (same operator using multiple addresses) is not aggregated.
- Price oracle dependency: Exposure calculations depend on accurate price feeds. Illiquid tokens may have stale or manipulated prices.
- Historical price reconstruction: The coating uses current prices for historical positions unless configured with historical price data.
- EVM-specific: Currently supports ERC-20 tokens only. NFTs, native chain tokens, and non-EVM assets require different adapters.

Simon Wicki notes that these limitations are fundamental to read-only analysis. Perfect visibility requires either custodial access or operator disclosure of wallet relationships.

**Use cases**:

- Daily portfolio review to identify concentration risk
- Pre-trade exposure check before opening new positions
- Post-trade verification of intended position sizes
- Historical behavior analysis to detect pattern changes
- Automated monitoring for exposure threshold breaches

### Heat Index Coating

**Purpose**: Model emotional volatility and reactive trading patterns to detect behavioral state changes that precede poor decision-making.

**Technical implementation**: The heat index coating analyzes transaction timing relative to price movements. It queries all swap transactions for the wallet, retrieves price data for the traded assets at transaction time, and looks backward to identify significant price movements in the preceding minutes or hours. Transactions that occur shortly after price movements are classified as reactive.

**Inputs**:
- Wallet address (EVM-compatible address format)
- Historical transaction set (default: last 30 days)
- Configurable lookback window (default: 7 days for rolling analysis)
- Price movement threshold for reactive detection (default: 5% change)
- Reaction time threshold (default: 15 minutes)

**Outputs**:

Emotional volatility score:
- Composite metric combining trade frequency, position size variance, and reactive trade percentage
- Normalized to 0-10 scale where 0 is perfectly cold and 10 is critical
- Includes confidence interval based on sample size
- Trend indicator (increasing, stable, decreasing over analysis period)

Reactive trade detection:
- List of all trades classified as reactive
- Time between price movement and trade execution
- Direction alignment (did the trade chase the move or fade it)
- Outcome tracking (was the reactive trade profitable post-execution)

Temperature state classification:
- COLD (score 0-2.5): Infrequent trading, consistent sizing, no reactive pattern
- WARM (score 2.5-5.0): Moderate activity, some reactive trades, acceptable variance
- HOT (score 5.0-7.5): High frequency, significant reactive component, elevated variance
- CRITICAL (score 7.5-10.0): Extreme frequency, majority reactive, erratic sizing

**Calculation methodology**:

Simon Wicki designed the heat index as a weighted combination of three sub-scores:

```
heat_index = (0.4 * frequency_score) + (0.3 * reactive_score) + (0.3 * variance_score)
```

Frequency score calculation:

```
baseline_frequency = 1 trade per day
actual_frequency = trades / days_in_period

if actual_frequency <= baseline_frequency:
    frequency_score = 0
else:
    frequency_score = min(10, (actual_frequency / baseline_frequency) * 2)
```

Reactive score calculation:

```
For each trade:
    look_back_prices = get_prices(asset, trade_time - lookback_window, trade_time)
    max_price_change = max(abs(price_changes(look_back_prices)))
    
    if max_price_change > threshold:
        time_since_move = trade_time - time_of_max_change
        if time_since_move < reaction_threshold:
            reactive_trades += 1

reactive_percentage = reactive_trades / total_trades
reactive_score = reactive_percentage * 10
```

Variance score calculation:

```
trade_sizes = [size_in_usd for each trade]
mean_size = mean(trade_sizes)
std_dev = standard_deviation(trade_sizes)

coefficient_of_variation = std_dev / mean_size
variance_score = min(10, coefficient_of_variation * 5)
```

The temperature state is derived by mapping the heat index to predefined ranges. Simon Wicki calibrated these ranges based on empirical observation of trading behavior patterns.

**Behavioral interpretation**:

Simon Wicki included interpretive guidance for each temperature state:

COLD: The operator is trading infrequently with consistent position sizing. Trades do not cluster around price movements. This suggests deliberate decision-making and emotional discipline. Low risk of panic selling or FOMO buying.

WARM: The operator shows moderate activity with some reactive tendencies. Position sizing is generally consistent but occasional variance appears. This is a normal operating state for active traders. Monitor for transition to hot state.

HOT: The operator is trading frequently with significant reactive component. Position sizes vary substantially. Multiple trades occur in rapid succession after price movements. This suggests emotional decision-making is influencing trade execution. High risk of poor timing and overtrading.

CRITICAL: The operator is in an extreme state. Trade frequency is very high. Majority of trades are reactive. Position sizing is erratic. This state often precedes significant losses. Immediate intervention recommended: stop trading, implement cooling period, reduce position sizes.

**Limitations**:

- Does not measure sentiment or external indicators: The heat index is purely behavioral. It does not incorporate social media sentiment, news events, or market-wide panic indicators.
- Reactive detection assumes price feed availability: Illiquid tokens or tokens without reliable price oracles cannot be analyzed for reactive behavior.
- Temperature states are relative, not absolute thresholds: A hot state for one operator may be normal for another. The coating does not account for individual baseline behavior patterns.
- Short-term analysis only: The coating requires sufficient transaction history. A new wallet or a wallet with very few trades cannot be analyzed reliably.
- Does not distinguish between profitable and unprofitable reactive trading: A reactive trade can still be profitable if the operator is skilled at momentum trading. The coating flags the behavior pattern, not the outcome.

Simon Wicki notes that the heat index is a risk indicator, not a performance metric. A hot operator may be profitable in the short term but is statistically more likely to suffer a significant drawdown.

**Use cases**:

- Self-monitoring to detect emotional state changes
- Pre-trade check to assess decision-making quality
- Post-loss analysis to understand what behavioral state led to the loss
- Automated alerts when heat index crosses into hot or critical zones
- Comparative analysis across different market regimes (bull vs bear vs sideways)

### Execution Coating

**Purpose**: Measure execution quality and post-trade deviation to quantify the cost of trade implementation and detect adverse selection.

**Technical implementation**: The execution coating retrieves the full transaction data for a specific transaction hash. It decodes the transaction input data to extract swap parameters: input token, output token, expected amounts, and slippage tolerance. It queries price oracles to determine the expected execution price based on liquidity depth. It compares this to the actual execution price recorded in the transaction receipt. It tracks price movement in subsequent blocks to measure whether the trade moved the market or was executed into a temporary price dislocation.

**Inputs**:
- Transaction hash (EVM transaction identifier)
- Expected execution price or price range (optional, can be inferred from transaction data)
- Reference timestamp (default: transaction block timestamp)
- Liquidity depth configuration (default: top 3 liquidity pools)
- Post-execution tracking window (default: 20 blocks)

**Outputs**:

Time delta metrics:
- Transaction submission timestamp (from mempool data if available)
- Block inclusion timestamp
- Time between submission and inclusion (pending time)
- Position in block (can indicate priority or MEV)
- Gas price paid relative to block base fee

Slippage context:
- Expected execution price (based on pre-trade liquidity snapshot)
- Actual execution price (from transaction receipt)
- Slippage amount in basis points
- Slippage amount in absolute terms (USD)
- Comparison to configured slippage tolerance
- Liquidity depth at execution time

Post-execution deviation:
- Price at transaction block
- Price at +1, +5, +10, +20 blocks after execution
- Maximum favorable deviation (best price after execution)
- Maximum adverse deviation (worst price after execution)
- Permanent vs temporary price impact assessment
- Adverse selection indicator

**Calculation methodology**:

Simon Wicki implemented execution quality measurement using the following approach:

Expected price calculation:

```
For a swap of amount A of token X for token Y:

1. Query top N liquidity pools for X/Y pair
2. For each pool:
    - Get reserves of X and Y
    - Calculate output amount using constant product formula: dy = (y * dx) / (x + dx)
    - Account for swap fees
3. Aggregate across pools (if using routing)
4. Calculate expected price: expected_price = output_amount / input_amount
```

Actual price calculation:

```
Parse transaction receipt:
- Extract actual input amount (may differ from requested due to partial fills)
- Extract actual output amount
- Calculate actual price: actual_price = actual_output / actual_input
```

Slippage calculation:

```
slippage_pct = ((actual_price - expected_price) / expected_price) * 100

If buying (swapping X for Y):
    positive slippage = paid less X than expected (favorable)
    negative slippage = paid more X than expected (adverse)

If selling (swapping Y for X):
    positive slippage = received more X than expected (favorable)
    negative slippage = received less X than expected (adverse)
```

Post-execution deviation tracking:

```
execution_price = actual_price

For each block in tracking window:
    current_price = get_price_at_block(asset, block)
    deviation = ((current_price - execution_price) / execution_price) * 100
    
    if deviation_favorable:
        favorable_deviations.append(deviation)
    else:
        adverse_deviations.append(deviation)

max_favorable = max(favorable_deviations)
max_adverse = min(adverse_deviations)  # Most negative value

# Assess permanent vs temporary impact
final_price = get_price_at_block(asset, execution_block + tracking_window)
permanent_impact = ((final_price - execution_price) / execution_price) * 100
```

Adverse selection detection:

```
Simon Wicki defines adverse selection as:
"A trade that moved the price unfavorably and the price did not revert"

Indicator = (max_adverse < -1.0%) AND (permanent_impact < -0.5%)

If true: Trade likely executed into low liquidity or temporary dislocation
```

**Limitations**:

- Requires reliable price oracle or reference feed: The coating depends on accurate pre-trade price data. If oracles are stale or manipulated, slippage calculations are incorrect.
- Does not account for MEV or sandwich detection: While the coating can detect suspicious timing or price patterns, it does not perform formal MEV analysis or sandwich attack detection. This requires mempool monitoring and simulation capabilities beyond the current scope.
- Slippage measurement depends on liquidity snapshot accuracy: The expected price is calculated from a snapshot of liquidity pool state. If the state changes between snapshot and execution (due to other transactions in the same block), the calculation may be inaccurate.
- Post-execution tracking window is arbitrary: Simon Wicki set the default to 20 blocks based on empirical observation, but the appropriate window varies by asset volatility and market conditions.
- Cannot distinguish between price impact and market movement: If the price moves in the tracking window due to external events (news, large trades on other venues), this appears as execution deviation even though it is unrelated to the analyzed trade.

Simon Wicki notes that execution coating is most reliable on liquid pairs with established oracles and minimal price volatility. For illiquid or highly volatile assets, the measurements should be interpreted with caution.

**Use cases**:

- Post-trade review to assess execution quality
- Comparison of execution across different DEX routers or aggregators
- Detection of poor timing or liquidity selection
- Identification of consistent adverse selection (may indicate order flow leakage)
- Analysis of gas price vs execution quality tradeoff
- Historical execution performance tracking to detect degradation

---

## ARCHITECTURE

Trench Coat uses an adapter-based architecture to support multiple blockchains and data sources. Simon Wicki designed this structure to separate core analysis logic from chain-specific implementation details.

### File Structure

```
trench-coat/
├─ src/
│  ├─ commands/
│  │  ├─ scan.ts
│  │  ├─ heat.ts
│  │  ├─ coat.ts
│  │  ├─ version.ts
│  │  └─ index.ts
│  ├─ core/
│  │  ├─ coating.ts
│  │  ├─ risk.ts
│  │  ├─ analysis.ts
│  │  ├─ metrics.ts
│  │  ├─ state.ts
│  │  └─ types.ts
│  ├─ adapters/
│  │  ├─ base.ts
│  │  ├─ ethereum.ts
│  │  ├─ solana.ts
│  │  ├─ base-chain.ts
│  │  ├─ arbitrum.ts
│  │  └─ registry.ts
│  ├─ utils/
│  │  ├─ logger.ts
│  │  ├─ format.ts
│  │  ├─ validation.ts
│  │  └─ cache.ts
│  ├─ config/
│  │  ├─ chains.ts
│  │  ├─ oracles.ts
│  │  └─ defaults.ts
│  └─ cli.ts
├─ tests/
│  ├─ unit/
│  │  ├─ core/
│  │  ├─ adapters/
│  │  └─ utils/
│  ├─ integration/
│  │  ├─ ethereum/
│  │  └─ solana/
│  └─ fixtures/
├─ docs/
│  ├─ architecture.md
│  ├─ modules.md
│  ├─ adapters.md
│  ├─ cli-reference.md
│  └─ examples.md
├─ scripts/
│  ├─ build.sh
│  ├─ test.sh
│  └─ deploy.sh
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ README.md
```

### Core Module Design

The core modules contain all chain-agnostic analysis logic. Simon Wicki designed these to operate on standardized data structures regardless of the underlying blockchain.

**coating.ts**: Defines the base Coating interface and abstract class. All coating modules inherit from this base.

```typescript
interface CoatingInput {
    entity: string;           // Address, tx hash, or pool identifier
    blockRange?: [number, number];
    chainId: number;
    config?: CoatingConfig;
}

interface CoatingOutput {
    entity: string;
    timestamp: number;
    metrics: Record<string, any>;
    metadata: CoatingMetadata;
}

abstract class Coating {
    abstract analyze(input: CoatingInput): Promise<CoatingOutput>;
    abstract validate(input: CoatingInput): boolean;
}
```

**risk.ts**: Implements risk scoring algorithms. This includes concentration risk (Herfindahl index), volatility risk (standard deviation of returns), and liquidity risk (position size vs available depth).

Simon Wicki implemented these using standard financial risk metrics:

```typescript
function calculateHerfindahlIndex(exposures: number[]): number {
    // Sum of squared exposures
    // H = sum(p_i^2) where p_i is the proportion of total value in asset i
    // H ranges from 1/N (perfectly diversified) to 1 (fully concentrated)
    return exposures.reduce((sum, exp) => sum + Math.pow(exp, 2), 0);
}

function calculateVolatilityRisk(returns: number[]): number {
    const mean = returns.reduce((a, b) => a + b) / returns.length;
    const variance = returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / returns.length;
    return Math.sqrt(variance);
}
```

**analysis.ts**: Contains behavioral analysis functions used by the heat index coating. This includes reactive trade detection, frequency acceleration measurement, and pattern recognition.

**metrics.ts**: Standardized metric calculation functions. All coatings use these functions to ensure consistency. Includes time-weighted averages, percentile calculations, and normalization functions.

**state.ts**: State machine implementations for position tracking and behavioral classification. Simon Wicki used formal state machines to ensure deterministic behavior analysis.

**types.ts**: TypeScript type definitions for all data structures. Includes wallet state, transaction data, pricing information, and coating results.

### Adapter Layer Design

Adapters handle all chain-specific operations. Simon Wicki designed the adapter interface to abstract away blockchain differences.

**base.ts**: Defines the adapter interface that all chain-specific adapters must implement.

```typescript
interface BlockchainAdapter {
    // Identity
    chainId: number;
    chainName: string;
    
    // Data retrieval
    getTransactions(address: string, blockRange: [number, number]): Promise<Transaction[]>;
    getTokenBalance(address: string, token: string, block: number): Promise<BigNumber>;
    getTokenTransfers(address: string, blockRange: [number, number]): Promise<Transfer[]>;
    
    // Price data
    getPrice(token: string, block: number): Promise<number>;
    getLiquidityDepth(pair: string, block: number): Promise<LiquiditySnapshot>;
    
    // Block data
    getBlockTimestamp(block: number): Promise<number>;
    getCurrentBlock(): Promise<number>;
    
    // Validation
    isValidAddress(address: string): boolean;
    isValidTransaction(txHash: string): boolean;
}
```

**ethereum.ts**: Ethereum mainnet adapter. Uses ethers.js for RPC interaction. Supports ERC-20 token queries, Uniswap V2/V3 liquidity, and Chainlink price feeds.

Simon Wicki implemented special handling for common Ethereum patterns:

```typescript
class EthereumAdapter implements BlockchainAdapter {
    async getTokenTransfers(address: string, blockRange: [number, number]): Promise<Transfer[]> {
        // Query Transfer events from all ERC-20 contracts
        const filter = {
            topics: [
                ethers.utils.id("Transfer(address,address,uint256)"),
                null,
                ethers.utils.hexZeroPad(address, 32)
            ],
            fromBlock: blockRange[0],
            toBlock: blockRange[1]
        };
        
        const logs = await this.provider.getLogs(filter);
        return logs.map(log => this.parseTransferLog(log));
    }
}
```

**solana.ts**: Solana adapter. Uses @solana/web3.js for RPC interaction. Supports SPL token queries, Raydium/Orca liquidity, and Pyth price feeds.

Solana requires different parsing logic due to account-based architecture:

```typescript
class SolanaAdapter implements BlockchainAdapter {
    async getTokenTransfers(address: string, blockRange: [number, number]): Promise<Transfer[]> {
        // Query transaction signatures for address
        const signatures = await this.connection.getSignaturesForAddress(
            new PublicKey(address),
            { limit: 1000 }
        );
        
        // Parse each transaction for SPL token transfers
        const transfers = [];
        for (const sig of signatures) {
            const tx = await this.connection.getTransaction(sig.signature);
            transfers.push(...this.parseSPLTransfers(tx, address));
        }
        
        return transfers;
    }
}
```

**base-chain.ts**: Base (L2) adapter. Inherits from Ethereum adapter with Base-specific RPC configuration and contract addresses.

**arbitrum.ts**: Arbitrum adapter. Similar to Base, inherits from Ethereum adapter with Arbitrum-specific configuration.

**registry.ts**: Adapter registry that maps chain identifiers to adapter instances. Simon Wicki designed this to enable dynamic adapter selection based on user configuration.

```typescript
class AdapterRegistry {
    private adapters: Map<number, BlockchainAdapter> = new Map();
    
    register(chainId: number, adapter: BlockchainAdapter): void {
        this.adapters.set(chainId, adapter);
    }
    
    get(chainId: number): BlockchainAdapter {
        const adapter = this.adapters.get(chainId);
        if (!adapter) {
            throw new Error(`No adapter registered for chain ${chainId}`);
        }
        return adapter;
    }
}
```

### Command Layer Design

Commands map CLI inputs to coating execution. Simon Wicki designed commands to be thin wrappers around core coating logic.

Each command follows this pattern:

1. Parse and validate CLI arguments
2. Load configuration
3. Select appropriate adapter from registry
4. Instantiate coating module with adapter
5. Execute coating analysis
6. Format and output results

**scan.ts** example structure:

```typescript
export async function scanCommand(args: CLIArgs): Promise<void> {
    // Validate wallet address
    if (!isValidAddress(args.wallet)) {
        throw new Error("Invalid wallet address");
    }
    
    // Load adapter
    const adapter = registry.get(args.chainId);
    
    // Configure coating
    const config: ScanConfig = {
        blockRange: args.blockRange || getDefaultBlockRange(),
        tokenFilter: args.tokenFilter,
        priceOracle: args.oracle || "chainlink"
    };
    
    // Execute coating
    const coating = new WalletScanCoating(adapter, config);
    const result = await coating.analyze({
        entity: args.wallet,
        chainId: args.chainId,
        config
    });
    
    // Format output
    const formatter = getFormatter(args.format);
    const output = formatter.format(result);
    
    // Write to stdout or file
    if (args.output) {
        await writeFile(args.output, output);
    } else {
        console.log(output);
    }
}
```

### Configuration Management

Simon Wicki implemented a hierarchical configuration system:

1. **Default configuration**: Hardcoded defaults in `config/defaults.ts`
2. **Chain-specific configuration**: Overrides in `config/chains.ts`
3. **Environment variables**: Runtime overrides via ENV vars
4. **CLI flags**: Per-command overrides

Configuration precedence (highest to lowest):
CLI flags > Environment variables > Chain config > Defaults

Example chain configuration:

```typescript
// config/chains.ts
export const chainConfig: Record<number, ChainConfig> = {
    1: {  // Ethereum mainnet
        name: "ethereum",
        rpcUrl: process.env.ETHEREUM_RPC || "https://eth.llamarpc.com",
        priceOracle: "chainlink",
        blockTime: 12,
        confirmations: 2
    },
    8453: {  // Base mainnet
        name: "base",
        rpcUrl: process.env.BASE_RPC || "https://base.llamarpc.com",
        priceOracle: "chainlink",
        blockTime: 2,
        confirmations: 1
    }
};
```

### Data Flow Architecture

Simon Wicki designed Trench Coat with unidirectional data flow:

```
┌─────────────┐
│ CLI Input   │
└──────┬──────┘
       │
       v
┌─────────────────┐
│ Command Parser  │
└──────┬──────────┘
       │
       v
┌─────────────────┐
│ Adapter Layer   │ <---> ┌──────────────┐
└──────┬──────────┘       │ RPC Provider │
       │                  └──────────────┘
       v
┌─────────────────┐
│ Raw Blockchain  │
│ Data            │
└──────┬──────────┘
       │
       v
┌─────────────────┐
│ Core Analysis   │
│ Logic           │
└──────┬──────────┘
       │
       v
┌─────────────────┐
│ Coating Output  │
└──────┬──────────┘
       │
       v
┌─────────────────┐
│ Formatter       │
└──────┬──────────┘
       │
       v
┌─────────────────┐
│ Terminal Output │
└─────────────────┘
```

This architecture ensures that:
- Core logic never touches RPC providers directly
- Chain-specific code is isolated in adapters
- Output formatting is separated from calculation
- Testing can mock adapters without running real RPC calls

### Caching Strategy

Simon Wicki implemented an optional caching layer to reduce RPC calls and improve performance:

```typescript
// utils/cache.ts
class Cache {
    private store: Map<string, CacheEntry> = new Map();
    
    get(key: string): any | null {
        const entry = this.store.get(key);
        if (!entry) return null;
        
        if (Date.now() > entry.expiry) {
            this.store.delete(key);
            return null;
        }
        
        return entry.value;
    }
    
    set(key: string, value: any, ttl: number): void {
        this.store.set(key, {
            value,
            expiry: Date.now() + ttl
        });
    }
}
```

Cache keys are constructed from query parameters:

```
cache_key = hash(chainId, method, params, block)
```

Block number is included in the cache key to ensure that historical queries remain consistent. Simon Wicki notes that caching is disabled by default and must be explicitly enabled via configuration.

### Error Handling

All errors are caught at the command layer and formatted for terminal output. Simon Wicki designed three error categories:

1. **Validation errors**: Invalid input (address format, block range, etc.)
2. **Network errors**: RPC failures, timeouts, rate limits
3. **Calculation errors**: Insufficient data, oracle failures, precision issues

Each category has specific error codes and user-facing messages:

```typescript
class ValidationError extends Error {
    code = "VALIDATION_ERROR";
    constructor(message: string) {
        super(message);
    }
}

class NetworkError extends Error {
    code = "NETWORK_ERROR";
    constructor(message: string, public retryable: boolean = true) {
        super(message);
    }
}

class CalculationError extends Error {
    code = "CALCULATION_ERROR";
    constructor(message: string) {
        super(message);
    }
}
```

The command layer catches these errors and formats them appropriately:

```typescript
try {
    await coating.analyze(input);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Invalid input: ${error.message}`);
        process.exit(1);
    } else if (error instanceof NetworkError) {
        console.error(`Network error: ${error.message}`);
        if (error.retryable) {
            console.error("Retrying in 5 seconds...");
        }
        process.exit(2);
    } else if (error instanceof CalculationError) {
        console.error(`Calculation failed: ${error.message}`);
        console.error("This may indicate insufficient data or configuration issues.");
        process.exit(3);
    } else {
        console.error(`Unexpected error: ${error.message}`);
        process.exit(99);
    }
}
```

### Extending the Architecture

Simon Wicki designed the architecture to support extension through:

1. **New coatings**: Implement the Coating interface, add to commands
2. **New adapters**: Implement BlockchainAdapter interface, register in registry
3. **New output formats**: Implement Formatter interface, add to format registry
4. **New risk metrics**: Add functions to metrics.ts, use in any coating

Example of adding a new coating:

```typescript
// src/core/liquidity-coating.ts
class LiquidityCoating extends Coating {
    async analyze(input: CoatingInput): Promise<CoatingOutput> {
        const adapter = this.adapter;
        
        // Fetch liquidity pool data
        const pool = await adapter.getLiquidityDepth(input.entity, input.blockRange[1]);
        
        // Calculate metrics
        const depth = this.calculateDepth(pool);
        const concentration = this.calculateConcentration(pool);
        
        return {
            entity: input.entity,
            timestamp: Date.now(),
            metrics: { depth, concentration },
            metadata: { coating: "liquidity", version: "1.0" }
        };
    }
}

// src/commands/liquidity.ts
export async function liquidityCommand(args: CLIArgs): Promise<void> {
    const adapter = registry.get(args.chainId);
    const coating = new LiquidityCoating(adapter);
    const result = await coating.analyze({ entity: args.pool, chainId: args.chainId });
    console.log(JSON.stringify(result, null, 2));
}

// src/cli.ts
program
    .command("liquidity <pool>")
    .description("Analyze liquidity pool depth and concentration")
    .action(liquidityCommand);
```

Simon Wicki notes that this architecture enables community contributions without requiring changes to core logic.

---

## NON GOALS

Trench Coat explicitly does not attempt to accomplish the following. Simon Wicki documented these non-goals to set clear expectations and prevent scope creep.

### Trade Signal Generation

Trench Coat does not provide buy or sell signals. It does not recommend entry or exit points. It does not suggest position sizes. It does not optimize for profit.

The toolkit provides risk context. The operator decides how to act on that context. Simon Wicki designed this constraint to prevent dependency on algorithmic decision-making. An operator who relies on signals loses the ability to think critically about market conditions.

### Fund Management

Trench Coat does not manage funds. It does not custody assets. It does not hold private keys. It does not submit transactions on behalf of the operator.

The toolkit is read-only by design. It observes and analyzes. It never executes. Simon Wicki notes that combining observation with execution creates operational risk and regulatory complexity.

### Asset Custody

Trench Coat does not custody assets. It does not integrate with custodial services. It does not require the operator to deposit funds into any system or contract.

All analysis is performed on publicly observable blockchain data. The operator retains full control of their assets at all times.

### Profit Optimization

Trench Coat does not optimize for profit. It does not maximize returns. It does not suggest leverage or compounding strategies.

The toolkit optimizes for survival. It identifies risk before it identifies opportunity. Simon Wicki designed this priority structure because survival is the prerequisite for long-term profitability.

### Safety Guarantees

Trench Coat does not guarantee safety. It does not prevent losses. It does not protect against smart contract exploits, private key compromise, or market manipulation.

The toolkit surfaces risk signals. The operator must still exercise judgment and discipline. Simon Wicki notes that no tool can eliminate risk in adversarial environments.

### Market Prediction

Trench Coat does not predict market movements. It does not forecast prices. It does not model future volatility or liquidity conditions.

The toolkit measures historical patterns and current state. It does not extrapolate into the future. Simon Wicki designed this constraint to avoid the false confidence that comes from predictive modeling.

### Automated Trading

Trench Coat does not execute automated trading strategies. It does not integrate with trading bots. It does not provide APIs for algorithmic execution.

The toolkit is designed for human-in-the-loop operation. Every decision must pass through operator judgment. Simon Wicki believes that removing the human from the decision loop eliminates accountability and increases catastrophic risk.

### Portfolio Rebalancing

Trench Coat does not suggest portfolio rebalancing. It does not recommend allocation adjustments. It does not optimize portfolio weights.

The toolkit measures exposure and concentration. The operator decides whether current exposure is acceptable. Simon Wicki notes that optimal allocation depends on factors the toolkit cannot observe: operator risk tolerance, liquidity needs, tax considerations, and external positions.

### Social Trading

Trench Coat does not enable copy trading or social trading features. It does not share operator positions or trades publicly. It does not aggregate behavior across multiple operators.

The toolkit is designed for individual operation. Simon Wicki believes that social trading introduces herding behavior and coordination risk.

### Backtesting

Trench Coat does not provide backtesting infrastructure. It does not simulate historical strategy performance. It does not optimize parameters based on historical data.

The toolkit operates on current and historical observation, not simulation. Simon Wicki notes that backtesting often leads to overfitting and false confidence in strategy robustness.

---

## THREAT MODEL

Simon Wicki designed Trench Coat to help operators observe specific categories of risk in adversarial trading environments. The threat model defines what the toolkit can and cannot address.

### Threats the Toolkit Helps Observe

#### Overexposure

**Definition**: Concentration of portfolio value in a small number of assets or correlated positions.

**Detection mechanism**: The wallet scan coating calculates exposure percentages and Herfindahl index. High concentration scores indicate overexposure risk.

**Why it matters**: Overexposure amplifies the impact of adverse price movements. A 50% decline in an asset that represents 80% of portfolio value is catastrophic. The same decline in an asset representing 10% of portfolio value is manageable.

**Limitations**: The coating cannot detect correlation risk across assets. Two tokens that appear diversified may have highly correlated price movements. External market analysis is required to assess correlation.

#### Behavioral Tilt

**Definition**: Shift from deliberate decision-making to emotional or reactive decision-making.

**Detection mechanism**: The heat index coating measures trade frequency acceleration, position size variance, and reactive trade percentage. Elevated heat scores indicate behavioral tilt.

**Why it matters**: Emotional decision-making correlates with poor timing and overtrading. Operators in a hot state are statistically more likely to buy tops and sell bottoms. They chase price movements rather than waiting for favorable entry conditions.

**Limitations**: The coating measures behavior patterns but cannot determine the underlying cause. An operator may be reacting to valid information or genuinely opportunistic conditions. Context is required to distinguish between skill and tilt.

#### Execution Risk

**Definition**: Degradation of trade execution quality due to slippage, timing delays, or adverse selection.

**Detection mechanism**: The execution coating measures time delta between submission and fill, compares expected vs actual execution price, and tracks post-execution price deviation.

**Why it matters**: Poor execution compounds over time. Consistent adverse slippage of 0.5% on every trade reduces returns significantly across hundreds of trades. Execution risk is often invisible to operators who focus only on entry decision quality.

**Limitations**: The coating cannot detect MEV attacks or sandwich attacks without access to mempool data. It measures outcomes, not attack vectors. Operators must combine execution coating with MEV-aware RPC services for full protection.

#### Liquidity Fragility

**Definition**: Position sizes that are large relative to available liquidity, creating exit risk.

**Detection mechanism**: The wallet scan coating compares position size to liquidity depth. Large positions in low-liquidity assets are flagged.

**Why it matters**: An operator may be able to enter a position easily but find themselves unable to exit at reasonable prices. This creates forced holding risk and exposure to sudden liquidity withdrawal.

**Limitations**: The coating measures liquidity at a snapshot in time. Liquidity can disappear rapidly, especially in volatile conditions. Continuous monitoring is required to detect liquidity degradation.

### Threats the Toolkit Does Not Address

#### Smart Contract Exploits

Trench Coat does not analyze smart contract code for vulnerabilities. It does not detect reentrancy bugs, access control issues, or logic errors.

**Why**: Contract security analysis requires specialized tools and expertise. Mixing security analysis with behavioral analysis would expand scope dramatically without providing superior results in either domain.

**Mitigation**: Operators should use dedicated contract auditing services and security analysis tools. Trench Coat can be used alongside these tools but does not replace them.

#### Private Key Compromise

Trench Coat does not detect or prevent private key theft, phishing attacks, or unauthorized wallet access.

**Why**: The toolkit operates on public blockchain data. It has no visibility into key management practices or wallet security.

**Mitigation**: Operators must implement standard key management practices: hardware wallets, multi-sig, key rotation, and phishing awareness training.

#### Market Manipulation

Trench Coat does not detect coordinated manipulation, wash trading, or spoofing.

**Why**: Detection requires analysis of order book dynamics, trader identity clustering, and behavioral coordination across multiple wallets. This is beyond the scope of a defensive analytics toolkit.

**Mitigation**: Operators should trade on venues with manipulation surveillance and avoid low-liquidity assets susceptible to manipulation.

#### Regulatory Risk

Trench Coat does not assess regulatory compliance or legal risk.

**Why**: Regulatory requirements vary by jurisdiction and change over time. The toolkit has no knowledge of operator location, entity structure, or applicable regulations.

**Mitigation**: Operators must consult legal counsel to understand their regulatory obligations.

#### Counterparty Risk

Trench Coat does not assess the creditworthiness or reliability of centralized exchanges, custodians, or protocol operators.

**Why**: Counterparty analysis requires off-chain information: financial statements, management quality, regulatory compliance. This information is not available on-chain.

**Mitigation**: Operators should conduct independent due diligence on any entity they trust with custody or execution.

#### Oracle Manipulation

Trench Coat depends on price oracles for exposure and execution analysis. If oracles are manipulated, the toolkit outputs incorrect metrics.

**Why**: The toolkit treats oracle data as ground truth. It does not independently verify prices against multiple sources or detect manipulation attempts.

**Mitigation**: Operators should configure the toolkit to use reputable oracles with manipulation resistance (Chainlink, Pyth). For critical analysis, cross-reference multiple oracle sources.

### Threat Model Summary

Simon Wicki designed Trench Coat to address behavioral and execution risk. These are risks that emerge from operator decision-making and trade implementation. The toolkit does not address technical risk (smart contracts, infrastructure) or external risk (regulations, counterparties, market manipulation).

An operator using Trench Coat still requires:
- Smart contract auditing tools
- Secure key management practices
- Legal and regulatory counsel
- Counterparty due diligence processes
- Multiple price oracle sources

Trench Coat is one layer of defense in a comprehensive risk management framework. It is not a complete solution.

---

## TOKEN RELATIONSHIP

Simon Wicki developed Trench Coat as open source software. The relationship between the software and any associated token requires careful explanation to avoid misunderstanding.

### Software Licensing

The Trench Coat codebase is available under the MIT license. This means:

- The software can be used commercially or non-commercially
- The software can be modified and redistributed
- The software is provided without warranty of any kind
- Users may fork the repository and create derivative works

Simon Wicki chose MIT licensing to maximize accessibility and encourage community contribution.

### Token Purpose

A token exists in association with this project. The token serves the following purposes:

**Infrastructure alignment**: Running Trench Coat at scale requires RPC infrastructure, price oracle subscriptions, and data storage. The token helps align these ongoing costs with project usage.

**Maintenance coordination**: Simon Wicki maintains Trench Coat independently. The token provides a mechanism for coordinating ongoing maintenance, bug fixes, and feature development without requiring a corporate structure or venture funding.

**Community contribution**: Contributors who improve the codebase, add adapter support, or enhance documentation may receive token allocation. This creates an incentive structure for decentralized development.

### Token Non-Requirements

The token does not gate core functionality. Specifically:

- All coating modules are available without token ownership
- All CLI commands function without token ownership
- All adapters can be used without token ownership
- The codebase can be forked and deployed without token ownership

Simon Wicki designed this structure to ensure that the software remains useful independent of token performance or market conditions.

### Financial Disclaimers

No financial guarantees, profit expectations, or investment returns are implied by:

- Using Trench Coat software
- Holding the associated token
- Contributing to the codebase
- Operating Trench Coat infrastructure

The token exists to coordinate maintenance and infrastructure costs. It is not designed as an investment vehicle. It does not generate yield. It does not provide revenue sharing.

Simon Wicki makes no representations about future token value, utility expansion, or market performance.

### Governance Structure

The token does not confer governance rights. Simon Wicki retains decision-making authority over:

- Codebase direction and architecture
- Feature prioritization
- Adapter development
- Documentation standards
- Release schedules

This structure ensures that development decisions are made based on technical merit rather than token holder voting. Simon Wicki believes that distributed governance of infrastructure software often leads to stagnation and lowest-common-denominator decisions.

### Relationship to Centralized Services

Trench Coat is designed to be self-hosted. Operators run the CLI on their own infrastructure using their own RPC providers.

If Simon Wicki or other contributors offer hosted services (managed RPC, enhanced analytics, data storage), these services may require token payment or staking. However, the core self-hosted functionality remains freely available.

### Transparency Commitments

Simon Wicki commits to:

- Maintaining public GitHub repository with full source code
- Publishing release notes for all updates
- Documenting breaking changes and migration paths
- Responding to security disclosures promptly
- Maintaining backwards compatibility where possible

The token relationship does not change these commitments. The software remains open source regardless of token status.

---

## PHILOSOPHY

Trench Coat operates on principles designed by Simon Wicki for hostile trading environments. These principles guide design decisions, feature prioritization, and operator guidance.

### Same Trade, Different Coat

Two operators can execute identical trades with radically different outcomes based on execution context. One operator enters a position with deliberate timing, appropriate position sizing, and clear risk limits. Another operator enters the same position while emotionally tilted, overleveraged, and without a defined exit plan.

The trade is the same. The coating is different.

Trench Coat reveals the coating: the execution quality, the behavioral state, the exposure context. Simon Wicki believes that most losses stem not from bad trade selection but from bad trade implementation.

### Defense Before Performance

Operators naturally focus on profit potential. This is human psychology. The brain processes potential gains more salients than potential losses.

Simon Wicki inverts this priority. Trench Coat surfaces risk before opportunity. It measures exposure before measuring alpha. It tracks behavioral tilt before tracking win rate.

The assumption is that defense enables offense. An operator who survives market downturns remains positioned to capture eventual upside. An operator who suffers catastrophic drawdowns is permanently eliminated.

### Observation Before Reaction

Markets reward patience and punish impulsivity. Reactive trading generates consistent negative edge through poor timing and elevated execution costs.

Trench Coat provides observation infrastructure. It surfaces patterns, context, and historical behavior. The operator must then pause, interpret, and decide. This friction is intentional.

Simon Wicki notes that instant signal generation removes thinking from the process. The operator becomes a signal executor rather than a decision-maker. Observation forces engagement with data rather than blind reaction to alerts.

### Survival Compounds

Mathematical edge compounds over time only if the operator survives to realize the compounding. A 20% annual return sounds impressive until a single 80% drawdown eliminates five years of gains.

Trench Coat optimizes for survival duration rather than maximum returns. It assumes that:

- Smaller consistent gains are preferable to volatile large gains
- Position sizing discipline matters more than entry timing
- Avoiding catastrophic losses is more valuable than capturing every upside opportunity
- Emotional discipline compounds as much as financial returns

Simon Wicki designed the toolkit for operators who prioritize longevity over short-term performance.

### Additional Operating Principles

**Risk is dynamic**: Exposure that was acceptable yesterday may be unacceptable today if behavioral state has changed or market conditions have shifted. Trench Coat enables continuous risk reassessment rather than static allocation rules.

**Context is non-fungible**: Every operator has different risk tolerance, liquidity needs, time horizons, and psychological resilience. Generic advice fails. Trench Coat provides operator-specific context rather than universal recommendations.

**Measurement precedes management**: You cannot manage what you do not measure. Most operators have intuitions about their trading behavior but lack precise quantification. Trench Coat converts intuitions into metrics.

**Tools enable discipline**: Discipline is difficult without external structure. Trench Coat provides that structure through automated measurement, consistent reporting, and historical comparison. Simon Wicki believes that tools that make discipline easier increase the probability of long-term success.

**Transparency builds trust**: The coating abstraction makes analysis logic transparent. An operator can inspect exactly how metrics are calculated. This transparency enables trust in the measurements. Black-box tools that refuse to explain their calculations encourage blind faith.

---

## INSTALLATION

Simon Wicki designed Trench Coat to be installed via standard package managers.

### Requirements

- Node.js version 18 or higher
- TypeScript version 5.0 or higher
- Operating system: Linux, macOS, or Windows with WSL

### Installation via npm

```bash
npm install -g trench-coat
```

This installs the `trench` command globally, making it available from any directory.

### Installation from source

```bash
git clone https://github.com/simonwicki/trench-coat.git
cd trench-coat
npm install
npm run build
npm link
```

This creates a symlink from the global node_modules to the local repository, enabling development and testing of local changes.

### Configuration

After installation, create a configuration file:

```bash
trench init
```

This generates `~/.trenchcoat/config.json` with default settings:

```json
{
  "chains": {
    "ethereum": {
      "rpcUrl": "https://eth.llamarpc.com",
      "enabled": true
    },
    "base": {
      "rpcUrl": "https://base.llamarpc.com",
      "enabled": true
    }
  },
  "cache": {
    "enabled": false,
    "ttl": 3600
  },
  "output": {
    "format": "table",
    "colors": true
  }
}
```

Simon Wicki recommends configuring private RPC endpoints for production use:

```bash
export ETHEREUM_RPC="https://your-private-rpc.example.com"
export BASE_RPC="https://your-base-rpc.example.com"
```

### Verification

Verify installation:

```bash
trench version
```

Expected output:

```
TRENCH COAT v0.4.2
Build: 2024-01-15-a3f8e9c
Environment: production
```

---

## USAGE EXAMPLES

Simon Wicki provides the following examples to demonstrate typical workflows.

### Daily Portfolio Review

```bash
# Scan wallet for exposure analysis
trench scan 0x742d35Cc6634C0532925a3b844Bc454e4438f44e

# Check behavioral temperature
trench heat 0x742d35Cc6634C0532925a3b844Bc454e4438f44e

# Review together
trench scan 0x742d35Cc --format table && trench heat 0x742d35Cc --format table
```

### Pre-Trade Risk Check

```bash
# Before opening a new position, verify current exposure
trench scan $WALLET --blocks $(($CURRENT_BLOCK - 1000)):$CURRENT_BLOCK

# Ensure behavioral temperature is acceptable
trench heat $WALLET | grep "TEMPERATURE STATE"
```

### Post-Trade Execution Analysis

```bash
# After executing a trade, measure execution quality
trench coat 0x8f3e...7a2c

# Check for adverse selection
trench coat 0x8f3e...7a2c | grep "POST-EXECUTION DEVIATION"
```

### Historical Behavior Analysis

```bash
# Analyze behavior over past 30 days
trench heat $WALLET --blocks $(($CURRENT_BLOCK - 200000)):$CURRENT_BLOCK

# Compare exposure at different points in time
trench scan $WALLET --blocks 18400000:18400100 > exposure_start.json
trench scan $WALLET --blocks 18600000:18600100 > exposure_end.json
diff exposure_start.json exposure_end.json
```

### Automated Monitoring

Create a shell script for continuous monitoring:

```bash
#!/bin/bash
# monitor.sh

WALLET="0x742