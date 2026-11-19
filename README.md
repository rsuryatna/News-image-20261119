# News-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rsuryatna/News-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rsuryatna/News-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A one-image front page summing up the world's news of Thursday 19 November 2026.

## The six stories

1. **GTA VI launches worldwide** — Rockstar's Vice City return opens at midnight. (Rockstar Games)
2. **Anthropic debuts on Nasdaq** — Claude's maker lists as ANT in a record $81.3bn IPO. (Anthropic, NPR)
3. **World Court rules on Myanmar** — The Hague delivers its Rohingya genocide verdict. (ICJ)
4. **Jeffries nominated for Speaker** — Jeffries wins 251–11; Senate goes 56–44 to Democrats. (NPR)
5. **EU proposes €45bn Ukraine loan** — Kyiv repays only after Russia pays reparations. (Reuters)
6. **Israeli tanks cross truce line** — First ground raid in Gaza since the 2025 ceasefire. (Reuters)

## How the image was made

The poster (1024×1024 PNG) was drawn with PIL: a newspaper front page with a big masthead, the date **THURSDAY, 19 NOVEMBER 2026** in a black band, and six story rows, each with a small flat icon, a headline and a one-line summary. All text is real rendered text — no AI-generated lettering. The finished image is embedded as base64 in `image-data.ts`; `main.ts` only decodes it and writes it out, so the output is byte-identical on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
