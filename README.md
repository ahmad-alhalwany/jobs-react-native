# Jobs React Native — Mobile Job Search App

A cross-platform **job search mobile app** built with **React Native**, **Expo**, and **Expo Router**. Browse popular and nearby jobs, search by keyword or job type, view detailed listings, and apply directly — powered by the **JSearch API** via RapidAPI.

[![React Native](https://img.shields.io/badge/React_Native-0.74-blue?logo=react)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo-51-black?logo=expo)](https://expo.dev)
[![Expo Router](https://img.shields.io/badge/Expo_Router-3.5-purple)](https://docs.expo.dev/router/introduction/)
[![Axios](https://img.shields.io/badge/Axios-1.7-green)](https://axios-http.com)

---

## Overview

**Jobs React Native** centralizes job discovery in one mobile experience. Instead of switching between job boards, users browse curated listings on the home screen, filter by job type, search by keyword, and open full job details with qualifications, responsibilities, and a one-tap apply link.

**Why this project matters:** It demonstrates a production-style React Native architecture — file-based routing with Expo Router, reusable data-fetching hooks, component-driven UI with co-located styles, and real third-party API integration — all from a single codebase for iOS and Android.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────┐
│              React Native + Expo Router                  │
├─────────────────────────────────────────────────────────┤
│  /home          → Welcome + Popular + Nearby jobs       │
│  /search/:id    → Keyword search + pagination           │
│  /job-details/:id → Tabs: About · Qualifications · Resp. │
│  /all-jobs      → Full job list (5 pages)               │
├─────────────────────────────────────────────────────────┤
│  useFetch hook  →  axios  →  JSearch API (RapidAPI)     │
└─────────────────────────────────────────────────────────┘
```

### API endpoints used

| Hook call | JSearch endpoint | Purpose |
|-----------|------------------|---------|
| `useFetch("search", { query })` | `/search` | List jobs by keyword |
| `useFetch("job-details", { job_id })` | `/job-details` | Single job full details |

---

## Features

### Home screen
- **Welcome header** — personalized greeting + search bar
- **Job type filters** — Full-time, Part-time, Contractor (horizontal chips)
- **Popular jobs** — horizontal scroll of top React developer roles
- **Nearby jobs** — vertical list of React Native developer roles
- **Show all** — navigate to full job listings

### Search
- **Keyword search** — type a query and navigate to results
- **Paginated results** — prev/next page controls with page counter
- **Loading & error states** — ActivityIndicator and fallback messages

### Job details
- **Tabbed content** — About, Qualifications, Responsibilities
- **Company section** — employer logo, name, and info
- **Apply button** — opens the job application URL via `Linking`
- **Pull to refresh** — reload job data on swipe down

### Developer experience
- **Expo Router** — file-based navigation in `app/` directory
- **Custom `useFetch` hook** — reusable axios wrapper with loading/error/refetch
- **Co-located styles** — each component has its own `.style.js` file
- **DM Sans fonts** — custom typography loaded via `expo-font`
- **Design system** — shared `COLORS`, `FONT`, `SIZES`, `SHADOWS` constants

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React Native 0.74 |
| Platform | Expo 51 |
| Navigation | Expo Router 3.5 |
| HTTP | Axios 1.7 |
| API | [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) (RapidAPI) |
| Fonts | DM Sans (Bold, Medium, Regular) |
| Language | JavaScript |

---

## Prerequisites

| Tool | Version | Check |
|------|---------|-------|
| **Node.js** | 18+ (LTS recommended) | `node -v` |
| **npm** | 9+ | `npm -v` |
| **Expo Go app** | Latest | [iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) |
| **RapidAPI key** | Required | [rapidapi.com](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) |

> Optional: Android Studio (emulator) or Xcode (iOS simulator) for native builds.

---

## How to Run

### Step 1 — Clone the repository

```bash
git clone https://github.com/ahmad-alhalwany/jobs-react-native.git
cd jobs-react-native
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Configure RapidAPI key

The app uses [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch). Replace the API key in:

- `hook/useFetch.js`
- `app/search/[id].js`

```javascript
headers: {
  'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY_HERE',
  'x-rapidapi-host': 'jsearch.p.rapidapi.com'
}
```

> Subscribe to the free JSearch plan on RapidAPI before running.

### Step 4 — Start the Expo dev server

```bash
npx expo start
```

You should see a QR code in the terminal.

### Step 5 — Open the app

| Platform | How |
|----------|-----|
| **Physical device** | Scan QR code with Expo Go (Android) or Camera app (iOS) |
| **Android emulator** | Press `a` in the terminal |
| **iOS simulator** | Press `i` in the terminal (macOS only) |
| **Web browser** | Press `w` in the terminal |

### Step 6 — Explore the app

1. Home screen loads popular and nearby jobs automatically
2. Type in the search bar and press search → results page
3. Tap job type chips (Full-time / Part-time / Contractor)
4. Tap any job card → full details with tabs
5. Tap **Apply for job** → opens the employer's application URL

---

## App Routes (Expo Router)

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/index.js` | Entry redirect |
| `/home` | `app/home.js` | Main home screen |
| `/search/:id` | `app/search/[id].js` | Search results by keyword |
| `/job-details/:id` | `app/job-details/[id].js` | Job detail with tabs |
| `/all-jobs` | `app/all-jobs/index.js` | Full job listing |

---

## Project Structure

```text
jobs-react-native/
├── app/                          # Expo Router pages
│   ├── _layout.js                # Root layout + font loading
│   ├── index.js                  # Entry redirect
│   ├── home.js                   # Home screen
│   ├── all-jobs/
│   │   └── index.js              # All jobs list
│   ├── search/
│   │   └── [id].js               # Search results + pagination
│   └── job-details/
│       └── [id].js               # Job detail tabs
├── components/
│   ├── home/
│   │   ├── welcome/              # Search bar + job type filters
│   │   ├── popular/              # Horizontal popular jobs
│   │   └── nearby/               # Vertical nearby jobs
│   ├── jobdetails/
│   │   ├── about/                # Job description tab
│   │   ├── specifics/            # Qualifications / Responsibilities
│   │   ├── company/              # Employer info
│   │   ├── tabs/                 # Tab switcher
│   │   └── footer/               # Apply button
│   └── common/
│       ├── cards/                # PopularJobCard, NearbyJobCard
│       └── header/               # ScreenHeaderBtn
├── hook/
│   └── useFetch.js               # Reusable API hook
├── constants/
│   ├── theme.js                  # COLORS, FONT, SIZES, SHADOWS
│   ├── icons.js                  # Icon asset map
│   └── images.js                 # Image asset map
├── assets/
│   ├── fonts/                    # DM Sans (Bold, Medium, Regular)
│   ├── icons/                    # UI + company icons
│   └── images/                   # Profile images
├── styles/
│   └── search.js                 # Search page styles
├── utils/
│   └── index.js                  # checkImageURL helper
├── app.json
├── babel.config.js
└── package.json
```

---

## Custom Hook — `useFetch`

```javascript
const { data, isLoading, error, refetch } = useFetch("search", {
  query: "React Native developer",
  num_pages: "1",
});
```

- Fetches on mount via `useEffect`
- Returns `data`, `isLoading`, `error`, and `refetch()` for pull-to-refresh
- Uses axios with JSearch RapidAPI headers

---

## Build for Production

### Android APK (via EAS)

```bash
npm install -g eas-cli
eas build --platform android
```

### iOS (via EAS — macOS + Apple Developer account)

```bash
eas build --platform ios
```

### Web

```bash
npx expo start --web
```

---

## Environment Variables (recommended)

Move the RapidAPI key out of source code:

1. Create `.env`:

```env
RAPIDAPI_KEY=your_key_here
```

2. Enable in `babel.config.js`:

```javascript
plugins: [["module:react-native-dotenv"]]
```

3. Use in `useFetch.js`:

```javascript
import { RAPIDAPI_KEY } from '@env';
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| No jobs loading | Verify RapidAPI key is valid and JSearch subscription is active |
| `429 Too Many Requests` | Free RapidAPI tier has rate limits — wait or upgrade plan |
| Expo Go won't connect | Ensure phone and PC are on the same Wi-Fi network |
| Fonts not loading | Wait for `useFonts` in `_layout.js` to finish before render |
| Blank screen on `/` | Check `app/index.js` redirects to `/home` correctly |
| Android emulator slow | Enable hardware acceleration in Android Studio AVD settings |
| `npx expo start` fails | Run `npm install` and ensure Node.js 18+ |

---

## Screenshots

| Home | Search | Job Details |
|------|--------|-------------|
| _Add screenshot_ | _Add screenshot_ | _Add screenshot_ |

---

## Roadmap

- [ ] Move RapidAPI key to `.env` (remove hardcoded keys)
- [ ] Fix `app/index.js` redirect to `/home`
- [ ] Add bookmark / saved jobs feature
- [ ] Migrate to TypeScript
- [ ] Publish to App Store / Google Play via EAS

---

## Author

**Ahmad Alhalwany**

- GitHub: [@ahmad-alhalwany](https://github.com/ahmad-alhalwany)
- Repository: [jobs-react-native](https://github.com/ahmad-alhalwany/jobs-react-native)

---

## License

MIT — free to use for learning and reference.
