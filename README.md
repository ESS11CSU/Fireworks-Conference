# Fireworks Conference: Inaugural Asia Meeting of the Economic Science Society

Conference website for the Fireworks Conference: Inaugural Asia Meeting of the Economic Science Society (theme: Causal Inference in the Age of AI).

**Stack:** Astro + Tailwind CSS  
**Languages:** English and 中文  
**Live site:** https://Evelyn5114.github.io/Fireworks-Conference/

## Local preview

```bash
npm install
npm run dev
```

Then open the URL Astro prints. Because `base` is `/Fireworks-Conference/`, local dev is usually `http://localhost:4321/Fireworks-Conference/`. `npm run dev` still works; the prefix is applied in both dev and the production build.

- English: `/Fireworks-Conference/`
- 中文: `/Fireworks-Conference/zh/`

The first visit in a browser session opens a colorful fireworks splash, centered in the viewport. It dismisses automatically after about 4.6 seconds, or immediately via **Enter the meeting** / **进入会议** or **Skip**. Later views in the same session skip the splash (`sessionStorage`).

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
3. After the workflow succeeds, the site is at https://Evelyn5114.github.io/Fireworks-Conference/

`npm run build` writes static files to `dist/` with asset paths under `/Fireworks-Conference/`. The GitHub repository name must be **Fireworks-Conference** so project Pages matches this `base`.

## Notes

The finished Phase-1 site was originally developed on Cursor Origin. This GitHub copy is the local-preview source of truth going forward.

## Image credits

- About illustration: `public/images/about-banner.jpg` — organizer-provided conference artwork (fireworks / AI / cityscape). Not an Unsplash photo and not a photograph of the 2026 meeting.
- Speaker and co-chair portraits (official academic headshots in a shared 2:3 frame; see also `public/speakers/SOURCES.md`):
  - James Heckman — University of Chicago Department of Economics faculty page https://economics.uchicago.edu/directory/james-j-heckman (`james_heckman_headshot.png`)
  - Daniel Houser — George Mason University Department of Economics faculty page https://economics.gmu.edu/people/dhouser (`DanHouser.jpg`)
  - Jie Zheng — Shandong University faculty homepage https://faculty.sdu.edu.cn/zhengjie/ (faculty portrait). Same likeness as his academic page https://meetecon.com/jie
  - Te Bao — NTU Graduate College Deanery https://www.ntu.edu.sg/graduate-college/about-gc/deanery (`prof-bao.jpg`, listed beside BAO Te)
  - Soo Hong Chew — National University of Singapore Discovery profile https://discovery.nus.edu.sg/2217 (official profile thumbnail)
  - Juanjuan Meng — Peking University Guanghua School of Management faculty profile https://www.gsm.pku.edu.cn/faculty/jumeng/ (`0382_PHOTO.JPG`)
  - Xiangdong Qin — ACEM / Shanghai Jiao Tong University faculty page https://www.acem.sjtu.edu.cn/faculty/qingxiangdong.html (`/faculty/images/131_PHOTO.GIF`)
  - Erte Xiao — Monash University research portal https://research.monash.edu/en/persons/erte-xiao/ (`picture_1.png`)
  - Songfa Zhong — HKUST Department of Economics faculty profile https://econ.hkust.edu.hk/faculty-and-staff/directory/szhong (`songfa.jpg`)
  - Yongmei Liu — Central South University Business School faculty profile https://bs.csu.edu.cn/info/1863/23741.htm (official faculty portrait)
