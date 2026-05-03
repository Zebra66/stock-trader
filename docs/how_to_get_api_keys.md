# How to Get API Keys for Autonomous Stock Trader

This guide explains step-by-step how to generate the API credentials required to run the stock trader system and provides an estimate of the expected monthly costs.

---

## 1. Google Gemini API Key (`GEMINI_API_KEY`)

The Gemini API acts as the "brain" of your trading system.

### How to get it:
1. Go to **[Google AI Studio](https://aistudio.google.com/)** and sign in with your Google account.
2. Click on **"Get API key"** in the left-hand navigation menu.
3. Click the **"Create API key"** button.
4. Create the key in a new or existing Google Cloud Project.
5. Copy the generated key and paste it as `GEMINI_API_KEY` in your `.env` file.

### Estimated Cost: **~$0 to $2 / month**
- **Free Tier**: Google provides a generous free tier for both Gemini 1.5 Flash (15 requests per minute) and Gemini 1.5 Pro (2 requests per minute). Given our execution loop (Flash every 10 mins, Pro every 60 mins), **you will likely stay entirely within the Free Tier**.
- **Pay-as-you-go**: Even if you exceed the free tier, Gemini 1.5 Flash is incredibly cheap (approx. $0.075 per 1 million input tokens). Running 24/7, the cost would be negligible (under a few dollars a month).

---

## 2. Alpaca API Keys (`ALPACA_API_KEY`, `ALPACA_API_SECRET`)

Alpaca is the brokerage that executes your trades and provides real-time market data.

### How to get it:
1. Go to **[Alpaca Markets](https://app.alpaca.markets/signup)** and sign up for an account.
2. Once logged in, you will be on the **Paper Trading** dashboard (you can switch to Live Trading later).
3. On the right side of the dashboard, find the **"Your API Keys"** box.
4. Click **"Generate New Keys"** (or "View").
5. Copy the **API Key ID** and **Secret Key**. Paste them into `.env`.
   - *Note: The Secret Key is only shown once!*
6. Set `ALPACA_PAPER=true` in your `.env` to ensure you are trading with virtual money.

### Estimated Cost: **$0 / month**
- **Trading**: Alpaca offers $0 commission trading on US stocks and ETFs.
- **Market Data**: The free tier includes real-time IEX market data, which is sufficient for our 10-minute algorithms.
- *Optional*: If you want full SIP (all exchanges) direct market data feeds in the future, Alpaca charges a $99/month data fee, but this is **not required** for the bot to function.

---

## 3. Financial Modeling Prep (`FMP_API_KEY`)

FMP provides the fundamental data and top analyst estimates (Price Targets, Upgrades/Downgrades) that the LLM uses for sentiment scoring.

### How to get it:
1. Go to **[Financial Modeling Prep](https://site.financialmodelingprep.com/developer/docs)** and sign up.
2. After logging in, go to your **Dashboard**.
3. Your API Key will be clearly visible at the top of the dashboard. Copy and paste it into `.env`.

### Estimated Cost: **~$19 to $49 / month**
- **Free Tier**: FMP offers a free tier (250 requests/day), but it usually restricts access to premium endpoints like **Analyst Estimates**.
- **Starter/Premium**: To reliably fetch historical data and analyst estimations every 10 minutes, you will likely need the Starter tier (~$19/mo) or Premium tier (~$49/mo) depending on their latest pricing structure.

---

## 4. Google OAuth Credentials (`GOOGLE_OAUTH_CLIENT_ID`, `GOOGLE_OAUTH_CLIENT_SECRET`)

These credentials are used to secure your ElysiaJS Web Dashboard so only you can access it and click the "Pause" button.

### How to get it:
1. Go to the **[Google Cloud Console](https://console.cloud.google.com/)**.
2. Create a new project or select an existing one.
3. Navigate to **APIs & Services > Credentials**.
4. Click **"+ CREATE CREDENTIALS"** at the top and select **OAuth client ID**.
5. *If prompted, you may need to configure the "OAuth consent screen" first (just set it to External, fill in the required names, and add your own email as a Test User).*
6. Select **Web application** as the Application type.
7. Under **Authorized redirect URIs**, add `http://localhost:3000/auth/google/callback` (for local testing) and your future Cloud Run URL.
8. Click **Create**.
9. Copy the **Client ID** and **Client Secret** into your `.env` file.

### Estimated Cost: **$0 / month**
- Using Google Login for your personal web application is completely free.
