# Vercel Edge API Proxy

Ye API Edge Function ke through external API se data fetch karta hai, client ko key expose kiye bina.

## Setup

1. Clone repo:
```
git clone <your-repo-url>
cd my-vercel-edge-api
```

2. Install dependencies:
```
npm install
```

3. Environment variable add karo `.env.local` ya Vercel dashboard me:
```
DARK_OP_KEY=wasdark
```

4. Run locally:
```
npm run dev
```

5. API call example:
```javascript
fetch('http://localhost:3000/api/proxy?vehicle=JK05F1806')
  .then(res => res.text())
  .then(data => console.log(data));
```

6. Deploy to Vercel:
   - GitHub repo connect karo
   - Framework: Next.js (App Router)
   - Environment variable set karo
   - Deploy

7. Test deployed API:
```javascript
fetch('https://<your-vercel-domain>/api/proxy?vehicle=JK05F1806')
  .then(res => res.text())
  .then(data => console.log(data));
```

✅ Ye setup ready hai for instant deployment aur testing.