# Firework Conference: Economic Science Society 1st Asia Meeting

Phase-1 conference website for the Firework Conference: Economic Science Society 1st Asia Meeting (theme: Causal Inference in the Age of AI).

**Stack:** Astro + Tailwind CSS  
**Languages:** English and 中文  
**Scope:** local preview only

## Local preview

```bash
npm install
npm run dev
```

Then open the URL Astro prints (usually `http://localhost:4321`).

- English: `/`
- 中文: `/zh`

The first visit in a browser session opens a colorful fireworks splash, centered in the viewport. It dismisses automatically after about 2.3 seconds, or immediately via **Enter the meeting** / **进入会议** or **Skip**. Later views in the same session skip the splash (`sessionStorage`).

## Build (optional)

```bash
npm run build
npm run preview
```

## Deployment

**Out of scope.** This repository is for local preview only. Do not deploy.

## Notes

The finished Phase-1 site was originally developed on Cursor Origin. This GitHub copy is the local-preview source of truth going forward.

## Image credits

- About illustration: `public/images/about-academic.jpg` — [Headway](https://unsplash.com/@headwayio) on [Unsplash](https://unsplash.com/photos/n31H3zWClN4) (Unsplash License). Decorative lecture-hall photo only; it is not a photo of this meeting.
- Speaker portraits: monogram placeholders in `public/images/speakers/`. Rights-safe official headshots were not confirmed, so real photos are not used. Candidate faculty pages (TODO, do not hotlink until license is confirmed):
  - James Heckman — https://cehd.uchicago.edu/
  - Daniel Houser — https://economics.gmu.edu/people/dhouser
  - Jie Zheng — https://faculty.sdu.edu.cn/zhengjie/en/index.htm
  - Te Bao — https://dr.ntu.edu.sg/entities/person/Bao-Te
