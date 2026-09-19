# Firework Conference: Economic Science Society 1st Asia Meeting

Phase-1 conference website for the Firework Conference: Economic Science Society 1st Asia Meeting (theme: Causal Inference in the Age of AI).

**Stack:** Astro + Tailwind CSS  
**Languages:** English and 中文  
**Live site:** https://Evelyn5114.github.io/firework-ess-asia-meeting/

## Local preview

```bash
npm install
npm run dev
```

Then open the URL Astro prints. Because `base` is `/firework-ess-asia-meeting/`, local dev is usually `http://localhost:4321/firework-ess-asia-meeting/`. `npm run dev` still works; the prefix is applied in both dev and the production build.

- English: `/firework-ess-asia-meeting/`
- 中文: `/firework-ess-asia-meeting/zh/`

The first visit in a browser session opens a colorful fireworks splash, centered in the viewport. It dismisses automatically after about 2.3 seconds, or immediately via **Enter the meeting** / **进入会议** or **Skip**. Later views in the same session skip the splash (`sessionStorage`).

Use the header **Light / Dark** (亮色 / 暗色) control to switch themes. The choice is stored in `localStorage` (`firework-ess-theme`). First-time visitors get **light** (浅色) unless they have already saved a preference.

## Build (optional)

```bash
npm run build
npm run preview
```

## GitHub Pages

The site deploys from `main` via `.github/workflows/deploy-pages.yml`.

1. In the GitHub repo, open **Settings → Pages**.
2. Set **Source** to **GitHub Actions** (one-time, if it is not already selected).
3. After the workflow succeeds, the site is at https://Evelyn5114.github.io/firework-ess-asia-meeting/

`npm run build` writes static files to `dist/` with asset paths under `/firework-ess-asia-meeting/`.

## Notes

The finished Phase-1 site was originally developed on Cursor Origin. This GitHub copy is the local-preview source of truth going forward.

## Image credits

- About illustration: `public/images/about-academic.jpg` — [Headway](https://unsplash.com/@headwayio) on [Unsplash](https://unsplash.com/photos/n31H3zWClN4) (Unsplash License). Decorative lecture-hall photo only; it is not a photo of this meeting.
- Speaker portraits (1:1 official academic headshots, slight shared desaturation; see also `public/speakers/SOURCES.md`):
  - James Heckman — University of Chicago Department of Economics faculty page https://economics.uchicago.edu/directory/james-j-heckman (`james_heckman_headshot.png`)
  - Daniel Houser — George Mason University Department of Economics faculty page https://economics.gmu.edu/people/dhouser (`DanHouser.jpg`)
  - Jie Zheng — Shandong University faculty homepage https://faculty.sdu.edu.cn/zhengjie/ (faculty portrait). Same likeness as his academic page https://meetecon.com/jie
  - Te Bao — NTU Graduate College Deanery https://www.ntu.edu.sg/graduate-college/about-gc/deanery (`prof-bao.jpg`, listed beside BAO Te)
