# News-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rsuryatna/News-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rsuryatna/News-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A one-image front page summing up the world's news of Thursday 19 November 2026 — 38 stories on one page.

## The page

- **13 featured stories**, each with an original drawing, a place and topic tag, and a source: the Trump–Xi–Putin trilateral in Shenzhen, GTA VI's launch, Anthropic's record $81.3bn IPO, the World Court's Myanmar ruling, COP31's final 48 hours, Cyclone Akvan, Ukraine left off the summit agenda, the APEC Shenzhen Declaration, Florida's floods, Earth's missing billion years, Mélenchon in France, the Jazan all-clear, and a drug seizure in Benghazi.
- **A dotted world map** ("Where it happened") with numbered pins for the featured stories and grey dots for the briefs.
- **25 more stories** in one line each, from Gaza and Crimea to La Paz.
- **A stat strip**: $81.3bn, 15.9m pre-orders, 204,000 identified for evacuation, $120bn, 730,000, $20m.
- **A date-check box** naming the Wednesday 18 November stories left off the page — the Iranian drone interceptions, the EU's €45bn loan, the House Democrats' 251–11 Jeffries vote, Voyager 1's one-light-day crossing, Peltola's Alaska win, Pew's 2035 projection, and the first COP31 draft.

Every story was checked against reporting of the day; two facts were verified by web search (Cyclone Akvan's landfall between Narsapur and Puri by noon on 20 November, with 46,700 people already in shelters; the ICJ judgment set for 10am on 19 November). The judgment's outcome is not claimed — the page says only that the court reads its ruling.

## How the image was made

The poster (1024×1024 PNG) was drawn with PIL: a newspaper front page with the big masthead "THE WORLD TODAY", the date **THURSDAY, 19 NOVEMBER 2026** in a black band, a region-count strip, and the sections above. All text is real rendered text — no AI-generated lettering. The finished image is embedded as base64 in `image-data.ts`; `main.ts` only decodes it and writes it out, so the output is byte-identical on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
