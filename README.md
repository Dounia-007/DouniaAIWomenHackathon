# Metric Lab

An interactive prototype for examining integrated sustainability and financial KPIs. Built with Next.js and React, using the nine-attribute framework supplied by Dounia Chlyeh.

## Run it locally

1. Download or clone this repository.
2. Install a Node.js version compatible with the Next.js version in `package.json`.
3. Run `npm ci` to install the locked dependencies.
4. Run `npm run dev` and open the local URL printed in the terminal.

Use `npm run build` for a production build and `npm run start` to serve that build. `npm run lint` checks the source. The worked example needs no credentials. Live AI assessment requires Vercel AI Gateway access as described below.

## What you can explore

- The research framework, with nine attributes and their definitions.
- A worked carbon-adjusted EPS case supplied by Dounia Chlyeh.
- Two entry points: an existing integrated KPI or separate financial and sustainability metrics.
- A guided sequence: understand the metric, compare nine attributes across CEO/sustainability manager/operational manager, explore potential friction, and prepare an agenda.
- A shared researcher baseline, explicit assumptions and separately labelled illustrative role interpretations.
- Three issue cards with participant positions, notes and user-confirmed resolutions.
- An editable agenda generated from unresolved issues and a downloadable review containing the matrix, assumptions, notes and resolutions.

Each entry point retains independent state while the page is open. Reloading clears it. Preparing a replacement worksheet resets that route's notes with an explicit warning. Inputs are not submitted to a person or remote service. Download before reloading to retain the review.

## Assessment boundaries

The manual worked example and worksheets do not call AI. The separate AI assessment flow calls a server-side research-grounded agent. The EPS case uses researcher-supplied classifications; its role interpretations and conflict map are proposed applications, not empirical findings. Time orientation is explicitly proposed, pending confirmation. Accuracy, reliability, complexity, transparency and cost retain their stated conditions rather than being presented as verified findings.

Custom inputs create a worksheet with unassessed attributes and framework-based questions. Separate metrics receive five preliminary integration questions, but no invented formula or recommendation. Keeping measures separate is a legitimate possible outcome. The application does not calculate financial outcomes or establish a causal relationship from metric names.

A job title does not establish someone's priorities. No overall quality or conflict score is calculated. Resolutions record a user judgement. Attribute notes are exported but do not automatically generate role disagreement. Framework references were supplied by the researcher and are not independently verified here.

## Where to edit

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Branding, introductory sections and page composition |
| `app/globals.css` | Navy, white and orange styling, responsive layouts and motion |
| `app/components/FrameworkExplorer.js` | Research framework browser |
| `app/components/MetricLab.js` | Custom form, review state, conflict map, profile and agenda |
| `app/lib/metric-data.js` | Research attribute definitions |
| `app/lib/eps-case.js` | EPS baseline, assumptions, role interpretations and worksheet questions |
| `app/layout.tsx` | Page title, description and fonts |

## Continuing toward evidence-grounded AI

A later implementation can retrieve approved, anonymised interview excerpts on the server and propose structured interpretations with source links. Keep interview evidence, user statements and model inference distinct. Assessment criteria and behavioural claims need evaluation with practitioners before predictive-validity claims can be made. Store future API credentials only in server-side environment variables, never in browser code.

## Reviewing on GitHub and Vercel

Changes are prepared on a separate review branch. Open its pull request to inspect the differences. If the repository's Vercel integration is configured to build branch previews, use the preview link shown by the deployment check. Review the prototype before merging it into the production branch.

## Live research-grounded AI

The main lab now calls `/api/assess`, a server-side AI SDK ToolLoopAgent using the nine-attribute framework, the conditional EPS baseline, 99 de-identified paraphrases of analytical coding themes and 21 candidate metric names. This is inference with supplied research context, not fine-tuning. Original interviews, names and identity keys are not included.

Authentication uses Vercel OIDC when available, or `AI_GATEWAY_API_KEY` in the deployment environment. If activation is required, add an AI Gateway key in Vercel Project Settings > Environment Variables for Preview (and Production when ready), then redeploy. Never enter keys into the website or commit them. `METRIC_LAB_MODEL` optionally overrides the default `openai/gpt-6-astra` model. Provider usage can incur charges.

The result contains nine attribute profiles, three hypothetical role perspectives per attribute, explicit assumptions and missing evidence, validated evidence identifiers, up to three potential conflicts and linked agenda points. Exact output shape and citation identifiers are checked server-side. Citation relevance and scientific validity still need human evaluation. Evidence paraphrases are not participant quotations. The small de-identified corpus is supplied in full on each request; no embedding index or raw document retrieval is used.

Requests and results are not stored by this app. Results have a generation ID and downloadable text export but no persistent history. The AI provider processes submitted text under the account's service terms. Input limits, same-origin checks, a timeout and per-instance throttling are included. The in-memory throttle is not a distributed spending limit; configure platform controls before broad public use.

Validation includes build/type/lint checks, input/origin/unconfigured API checks, and browser tests using a clearly separate fixture for result rendering, evidence display, resolution-to-agenda and export. A fixture does not demonstrate a successful provider call.

## Unified assessment interface

One Assess your metric section now handles custom submissions and the prepared EPS example. Both use the same overview, nine-attribute view, conflict map and downloadable agenda. GET /api/assess checks credential presence before enabling custom input; this is not a provider health or credit check. Provider activation errors disable custom input for that page session. The prepared example is available without credentials and clearly distinguished from AI-generated results.
