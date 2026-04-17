# Personal Brand Website — Plan

## Why We're Building This

A single canonical place that establishes Surabhi as a brand in the AI engineering and AI-powered content creation space. The site's job is **identity** — not conversion, not a resume, not a portfolio that closes job offers. It answers: *who is Surabhi and why should I pay attention to her?*

---

## Key Decisions Made

| Decision | Choice | Reason |
|---|---|---|
| Structure | Single scrolling narrative with sections | Tabs fragment identity; sections tell one story |
| Hosting | GitHub Pages | Free, brand-appropriate, expandable later |
| Framework | Next.js 14 (static export) | Component structure, Tailwind support, room to grow |
| Styling | Tailwind CSS | Fast, no context switching |
| Animation | Framer Motion | Site should feel alive, not static |
| Blog format | MDX | Write posts in markdown directly in repo |
| Deployment | GitHub Actions | Auto-deploy on push to main, set once |
| Domain | `surabhi.github.io` to start, custom `.dev` domain later | Clean URL, cheap upgrade path |

---

## North Star

> **"Building things that think"**

The through-line across all work: building systems where AI does something that used to require significant human effort — research, memory, financial tracking, visual storytelling. All projects are evidence of this one idea.

**Aesthetic:** Warm, precise, opinionated. Technical beauty, not cold minimalism. Reference: the topographic loss-landscape GitHub banner.

---

## Site Structure

### 1. Hero
- Name + thesis line
- "Building things that think" as the seed — may need one grounding sentence underneath
- **No skills list. No "X years of experience."**
- Goal: make someone feel something in 5 seconds

### 2. About — but not a bio
- Not career history
- A paragraph that sounds like you wrote it because you actually believe it
- Why this work, why now, what you're trying to figure out
- This is what makes people feel like they *know* you

### 3. Work / Projects
- 3–4 projects max
- Each gets: what it is, why you built it, what's interesting about the technical decision
- Candidate projects:
  - **Cartograph** — Deep Research Agent (LangGraph, Llama 3.1 8B, DuckDuckGo, FAISS, Gradio)
  - **shared-memory-protocol** — framework-agnostic shared memory layer for multi-agent systems
  - **SpendWise.ai** — personal finance app on local LLM stack
  - **visual-reads** — Python pipeline transforming books into AI-generated visual summaries
  - **RAG benchmark project** — HotpotQA, FAISS, all-MiniLM-L6-v2, Llama 3.1 8B
- Framing matters more than the list — show *how you think*, not just what you made

### 4. Writing
- Not an archive — curated
- 3–4 best pieces with a one-line hook each
- Links out to Medium / LinkedIn
- Signals: you think in public

### 5. Now *(optional but high signal)*
- Short "what I'm currently working on / thinking about"
- Makes the site feel alive between big updates
- Credit: Derek Sivers `/now` page format

### 6. Connect
- Simple. One line, one or two links.
- No contact form needed.

---

## Technical Setup Notes

### next.config.js
```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // GitHub Pages can't optimize images server-side
}
```

### Repo
- Name: `surabhi.github.io` → lives at `surabhi.github.io`
- Avoid `/repo-name` suffix URLs for a brand site

### GitHub Actions
- Set up once: auto-builds and deploys `out/` folder to GitHub Pages on every push to `main`

### Watch-out
- `next/image` optimization disabled on static export — manually optimize images before importing

---

## What's Next

1. **Write the copy first** — site is only as good as the content going into it
   - Hero thesis line (hardest, most important)
   - About paragraph
   - One-paragraph write-ups per project
2. Scaffold the Next.js repo
3. Build section by section
4. Set up GitHub Actions for deployment
5. Get a custom domain when ready (`.dev` is on-brand)

---

*Discussed: April 2026*
