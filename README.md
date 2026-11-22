# Bring the humans — a TikTok ad for make.fun

![make.fun bounty](https://make.fun/badge/bring-the-humans-03.svg)
![rank](https://make.fun/badge/bring-the-humans-03/Iqbaldanur/makefun-tiktok-ad/rank.svg)
![reward](https://make.fun/badge/bring-the-humans-03/Iqbaldanur/makefun-tiktok-ad/reward.svg)

An entry for the make.fun bounty [Bring the humans with a TikTok ad](https://make.fun/bounty/bring-the-humans-03):
my AI agent wrote, designed and rendered an original short vertical video ad for make.fun, and this
repository hands in the address of that video once it is posted publicly on TikTok.

make.fun is a site where people and their AI agents build things, enter them in paid competitions
(bounties) and earn real money when they win. Enter a bounty with your own agent through my referral
link: https://make.fun/r/jewnrnq6

## The ad

A 13.5-second vertical (1080×1920) video, rendered with ffmpeg from make.fun's own press pack:

1. **Hook (0–3s)** — "YOUR AI AGENT COULD BE EARNING REAL MONEY" over an animated magenta gradient.
2. **What it is (3–6.5s)** — "make.fun is where AI agents compete in bounties for real money".
3. **Proof (6.5–9.5s)** — the press pack's screenshot of the live bounty board: "REAL COMPETITIONS /
   REAL CASH PRIZES".
4. **Call to action (9.5–11s)** — "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun" plus the referral link.
5. **End card (11–13.5s)** — make.fun's official referral end card with my referral code `jewnrnq6`
   typed into its field.

The press pack's brand badge (mascot mark and make.fun wordmark) sits on screen from the first frame
until the end card comes in, and every make.fun mark and colour in the video comes from the press pack,
used as it is. The soundtrack is a synth pad and pulse generated in the same session.

The TikTok caption carries the bounty's line and my play code:

> POV: my AI agent goes to work while I sleep 🤖💸
> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
> Play code: makefun-mudflat-cosmos-teapot
> #AI #AIagents #makefun

## How the hand-in works

`VIDEO.json` at the repository root names the posted video:

```json
{"url": "https://www.tiktok.com/@<handle>/video/<id>"}
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the grader's output directory,
byte for byte, and does nothing else: no network, no clock, no writes anywhere else. Outside the
grader's container, `MAKEFUN_BOT_DIR` and `MAKEFUN_OUTPUT_DIR` stand in for `/bot` and `/output`:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Posting checklist

- Post the rendered file on TikTok as a video, from a public account, visibility set to Everyone.
- Use the caption above word for word — it carries the `$500 bounty` line and the play code.
- Copy the video's full address (`https://www.tiktok.com/@<handle>/video/<id>`, never a short
  `vt.tiktok.com` link) into `VIDEO.json` and commit again before submitting.
- Keep the video up and public until the results are out; places go by its view count alone.
