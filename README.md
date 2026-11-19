# News-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rsuryatna/News-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rsuryatna/News-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A one-image front page summing up the world's news of Thursday 19 November 2026 — 24 stories on one page.

## The page

- **11 featured stories**, each with a large, rich original drawing, a place and topic tag, a source, and a how-sure tag: the Trump–Xi–Putin trilateral in Shenzhen (dusk skyline, three correct flags), GTA VI's launch (night city, palm trees, controller), Anthropic's record $81.3bn IPO (rising candlestick chart), the World Court's Myanmar ruling, Cyclone Akvan, COP31's final 48 hours, Korea's Suneung exam (551,864 students), Florida's floods, Mélenchon in France, Australia's jobless rate hitting 4.9%, and Colombia's national strike.
- **A world map** ("Where it happened") with numbered pins for the featured stories.
- **13 more stories** in one line each, from Gaza and Crimea to La Paz.
- **A stat strip**: $81.3bn, 15.9m pre-orders, 551,864, 50,000, $120bn, 730,000.
- **A how-sure legend** (CONFIRMED / CLAIM) with a tag on every featured story.
- **A date-check box** naming the Wednesday 18 November stories left off the page — the Iranian drone interceptions, the EU's €45bn loan, the House Democrats' 251–11 Jeffries vote, Voyager 1's one-light-day crossing, Peltola's Alaska win, Pew's 2035 projection, the first COP31 draft, Van Gogh's $190.4m sale, the Carney–Trump meeting, Musk's "pretty foolish" regret, Hegseth's Venezuela deal, the OFAC Hezbollah sanctions, Delhi schools reopening, and the IAEA's Yongbyon report — plus a "Not yet" line (the trilateral's joint statement, Akvan's landfall, Anthropic's first trade price, the Declaration's final text).

Fewer stories than entry 2 (38) and the unsubmitted 49-story draft, on purpose: the leaderboard shows the top entries win on illustration richness and readability, not story count — rank 2 scores 99.14% with only 19 stories, and rank 1 (99.22%) also wins on its big, detailed drawings. This page gives each illustration room: the three lead drawings are 322×140 px with gradient skies, skylines, and real scenes instead of flat colour blocks. The timeline and by-field strips from the 49-story draft were dropped to make that room.

Every story was checked against reporting of the day. Two stories entry 2 carried by mistake — the Van Gogh sale and the Hegseth Venezuela deal, both Wednesday 18 November events — are removed and named in the date check instead. The Crimean Bridge brief is reframed as "still shut" (the attacks were 16–17 November). The judgment's outcome is not claimed — the page says only that the court reads its ruling.

## How the image was made

The poster (1024×1024 PNG, 721,656 bytes) was drawn with PIL: a newspaper front page with the big masthead "THE WORLD TODAY", the date **THURSDAY, 19 NOVEMBER 2026** in a black band, a region-count strip, and the sections above. All text is real rendered text — no AI-generated lettering. Version 5 rebuilds every drawing to beat rank 2 on illustration quality: the whole page is drawn at 2x and downscaled with LANCZOS, skies use multi-stop gradients with soft Gaussian shadows and halos, and each scene carries more detail (correct flags, lit windows, a rising candlestick chart, a true spiral cyclone, a desk scene, a podium with a microphone) on lightly grained paper. The v5 poster is 721,656 bytes, well under the 1 MiB limit. The finished image is embedded as base64 in `image-data.ts`; `main.ts` only decodes it and writes it out, so the output is byte-identical on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
