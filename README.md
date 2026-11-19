# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Drssptra/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Drssptra/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500 in USDC, top 50 share). The joke: after waiting 13 years since GTA V, GTA VI is finally out — and the fan on a Vice City beach is still stuck watching the download bar. The make.fun ghost floats right in the middle of the scene, sparkle eyes and magenta star coin in hand, next to a big GTA VI billboard. The meme is `meme.png` in this repo; the post itself goes out on X from a public account with the bounty link, the play code, and a pitch that people and their AI agents earn real money on make.fun. `POST.json` at the repo root names the post's address once it is posted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) copies `POST.json` to the output directory. It prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=hyz23m3g&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
