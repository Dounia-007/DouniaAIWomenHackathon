# Metric Lab

Connect sustainability and financial performance through metrics you can examine, discuss and use.

Metric Lab is a research-informed prototype developed by Dounia Chlyeh with ChatGPT/Codex-assisted design and implementation for the AI women hackathon. It helps companies examine integrated key performance indicators (iKPIs), make assumptions explicit and turn potential disagreements into a focused meeting agenda.

## Open the submission

- [Website preview](https://dounia-ai-women-hackathon-git-design-me-1129c3-metric-mortality.vercel.app/#lab)
- [Current application source](https://github.com/Dounia-007/DouniaAIWomenHackathon/tree/design/metric-lab-framework)
- [Implementation pull request](https://github.com/Dounia-007/DouniaAIWomenHackathon/pull/1)
- [Development history and contributions](https://github.com/Dounia-007/DouniaAIWomenHackathon/blob/design/metric-lab-framework/docs/DEVELOPMENT_HISTORY.md)

**Review the `design/metric-lab-framework` branch for the current application.** The default `main` branch contains this submission guide but has not been brought up to date with the application changes. The latest interface deployment was reported successful by Vercel for [commit d89057f](https://github.com/Dounia-007/DouniaAIWomenHackathon/commit/d89057fb9b10d2373bf50885b2db23f16ea53fe7).

## The problem

Companies can track sustainability and financial performance separately while making decisions that depend on both. Combining two numbers does not, by itself, establish that the resulting metric is meaningful.

The CFO, sustainability manager and business team may interpret the same indicator differently. Its assumptions, measurement boundaries and allocation of responsibility need examination before it guides action.

## What the website does

The website introduces the decision gap, explains the research framework and opens the friction lab with **Assess your metric**.

1. Enter an existing iKPI and its formula, if known, or separate financial and sustainability measures.
2. Optionally add feedback already received from the CFO, sustainability manager and Business in three separate boxes.
3. Examine the resulting assessment, potential conflicts and agenda.
4. Record evidence, agreement or a resolution. Resolved issues leave the open agenda; notes remain in the download.

The three role labels are consistent across the decision-gap card, assessment, examples and downloads: CFO, Sustainability manager and Business. The existing Metric Lab logo is retained.

Research evidence and limits follow the form in an expandable section. A carbon-adjusted earnings-per-share example appears last as a guide. The energy example uses the same colours, attribute cards, feedback boxes and four-stage layout.

| Stage | What users examine | Output |
| --- | --- | --- |
| 01 · Establish the meaning | What the metric represents and what improvement would mean | A definition, formula and decision to prepare |
| 02 · Assess the metric | Nine attributes and their conditions | A categorical assessment, without an overall numeric score |
| 03 · Find what could change the decision | Relevant attributes, illustrative role feedback and possible resolutions | A potential conflict map |
| 04 · Prepare the meeting | Questions arising from unresolved issues | An agenda and downloadable record |

Attribute names appear in light-grey boxes. The prepared cases connect role perspectives to proposed resolutions and intended meeting outputs. They illustrate questions to investigate, not established disagreements within a company.

## Try the prototype

### Energy consumption per revenue

In **Assess your metric**, keep **An integrated KPI** selected, enter **Energy consumption per revenue**, optionally add feedback, and select **Assess my metric**.

This named input opens a fixed example assessment without a provider request. The result is labelled **Example assessment**, with its explanation under **Research evidence and limits**. The form contains no example shortcut or instruction telling users what to enter.

The example includes:

- Energy consumption in MWh divided by revenue in € million. An illustrative calculation uses 12,000 MWh and €60 million, giving 200 MWh per € million.
- Nine proposed classifications with conditions.
- Three potential issues concerning interpretation of improvement, accountability and data comparability.
- Illustrative feedback from the CFO, sustainability manager and Business.
- Proposed resolutions, agenda items, proposed leads and expected meeting outputs.
- Editable resolution notes and an assessment download.

Company feedback is displayed and downloaded as supplied. **It does not alter the fixed analysis and is not analysed by AI in this example.** The classifications and role comments are illustrative proposals approved for prototype implementation, not validated research findings.

### Carbon-adjusted earnings per share

Scroll to the worked example below the research notes. It works independently of AI access.

The formula deducts total GHG emissions multiplied by a carbon price from net income, then divides by the number of common shares. Users select what the price represents: an internal shadow price, an expected emissions-related expense or an estimated environmental cost.

The nine-attribute baseline remains visible. Additional notes explicitly name the selected interpretation. The conflict map explains why particular attributes matter and connects the issues to an agenda. Notes and resolutions are kept separately for each interpretation while the page remains open.

## Research foundation

Dounia supplied the conceptual framework, a typology manuscript, an Excel coding workbook and 33 Word interview coding-summary documents. The application does not retrieve the original research files.

The nine attributes are controllability, managerial impact, time orientation, indicator complexity, transparency, stakeholder orientation, accuracy, reliability and signal cost. They describe dimensions, categories and conditional levels rather than interchangeable scores.

The server-side evidence package contains 99 selective paraphrases of analytical themes, three per coding-summary document, and 21 candidate metric records. Candidate records comprise 17 workbook candidates, the EPS example and three additional candidates identified during development. Candidate inclusion does not establish iKPI validity or a complete assessment.

Names, original source codes, organisations, biographies and identifying anecdotes were excluded from the derivative. Neutral source identifiers are used. The package is a selective synthesis, not a complete anonymised reproduction of interviews or a collection of verified quotations. No identity key is committed; residual recognition through research themes cannot be ruled out.

Older workbook classifications have not been automatically converted into the current framework. The prototype does not implement a validated three-type classifier.

## Custom AI implementation and current access

For other metric names, the form submits to `/api/assess`. The server creates an AI SDK `ToolLoopAgent` supplied with:

1. The nine-attribute definitions and subdimensions.
2. The conditional EPS baseline.
3. All 99 evidence paraphrases and their identifiers.
4. Candidate metric names and limitations.
5. The submitted metric and optional feedback from the three company roles.

Instructions require the agent to distinguish reported feedback from inferred perspectives, avoid inventing feedback for empty fields, and propose relevant next steps. Outputs include nine attribute profiles, assumptions, missing evidence, role perspectives, clarifying questions and up to three conflicts linked to an agenda. The server validates the structure and cited identifiers, but not whether a citation substantively supports the inference.

This is inference with supplied context, not fine-tuning, model training, embedding-based retrieval or live interview access. No external search or action tools are attached to the agent.

The default model is `openai/gpt-6-astra` through Vercel AI Gateway; `METRIC_LAB_MODEL` can override it. **Live custom generation remains unresolved.** Gateway logs showed HTTP 403 for requests routed to Azure despite the user reporting an added payment method. No successful live assessment has been verified. The exact restriction remains undetermined.

The configured-connection banner indicates credential presence, not a successful model call. The working energy example and EPS guide do not establish that the live service works.

## Implementation and verification

| Feature or check | Status |
| --- | --- |
| Metric entry and three optional feedback fields | Implemented |
| Prepared energy and EPS assessments | Implemented; user confirmed the energy flow works |
| Grey attribute badges, role boxes and proposed resolutions | Implemented |
| Resolution-linked agenda and styled HTML downloads | Implemented for both examples and the custom-result path |
| Report escaping, open/resolved counts and note retention | Checked locally |
| Live AI request, research context and response validation | Implemented; provider access unresolved |
| Production build, TypeScript and ESLint | Passed for the latest interface changes |
| Energy-name matching, nine attributes and three conflicts | Checked locally |
| Earlier interface, mocked-result and API checks | Recorded in the development history |
| Latest energy layout browser automation | Blocked by the local browser environment; not independently visually verified |
| Company profiles, login and durable assessment history | Planned, not implemented |
| Scientific validity and predictive accuracy | Not established |

## Run locally

Use Node.js 24, as used for development checks, and the committed lockfile.

```bash
git clone --branch design/metric-lab-framework https://github.com/Dounia-007/DouniaAIWomenHackathon.git
cd DouniaAIWomenHackathon
npm ci
npm run dev
```

Open the local URL printed by Next.js. The named energy example and the EPS guide work without provider credentials.

For live custom requests, copy `.env.example` to `.env.local`, set `AI_GATEWAY_API_KEY` privately and restart. Never commit the populated file. On Vercel, configure the key for the relevant Preview environment and branch, then redeploy after environment changes. The application also supports Vercel OIDC when available. Account access must be verified separately through a successful request.

```bash
npm run build
npx tsc --noEmit
npm run lint
npm run start
```

## Architecture

The stack is Next.js 16, React 19, TypeScript/JavaScript, CSS/Tailwind tooling and AI SDK 7, hosted through Vercel's GitHub integration. Exact versions are in `package-lock.json`.

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Product story, decision-gap perspectives and page structure |
| `app/components/FrameworkExplorer.js` | Research framework |
| `app/components/AIReview.js` | Form, feedback, named-example routing, live results and downloads |
| `app/components/EnergyReview.js` | Four-stage energy assessment using the EPS visual template |
| `app/lib/energy-demo.js` | Fixed energy case and input-name matching |
| `app/components/PreparedReview.js` | Lab composition, research notes and EPS review |
| `app/lib/eps-case.js` | Conditional EPS baseline and issues |
| `app/lib/metric-data.js` | Attribute definitions and older helpers |
| `app/api/assess/route.js` | Request validation and server-side AI calls |
| `app/lib/server/assessment.js` | Agent instructions, schema and validation |
| `app/lib/server/evidence.json` | De-identified evidence derivative and candidate catalogue |
| `app/lib/server/ai-error.mjs` | Fixed diagnostic categories without exposing raw provider content |
| `app/lib/download-report.js` | Shared HTML report layout, escaped text and download generation |
| `app/globals.css` | Shared visual styles and responsive layouts |

Earlier manual components remain in source but are not rendered in the current journey.

## Data handling and next steps

Company profiles and saved history are planned. Current entries, feedback and results are held in page state and can be lost on reload or replacement. Downloads retain a local copy. Custom AI submissions are processed by the configured provider; the prepared energy case makes no generation request.

Original research documents and credentials are not committed. The de-identified derivative is publicly readable in this public repository, even though the application uses it on the server.

Input limits, same-origin checks, timeout and per-instance throttling are implemented. The throttle is not a distributed spending cap. Further work includes provider activation, researcher and practitioner evaluation, citation-relevance checks, reconciliation of older research categories, and secure company profiles with durable history.

## Human and AI contributions

Dounia developed the research concept and framework, supplied research materials and EPS classifications, directed the product, selected role perspectives and approved the energy example and interface changes. ChatGPT/Codex assisted with design, implementation, selective evidence paraphrasing, drafting the energy case, checks and documentation.

The project evolved from a dense workbench into an assessment-first journey with optional company feedback, expandable research limits, visible conflict-to-agenda connections and two working prepared cases. GitHub attribution under `Dounia-007` does not imply that the code was written without AI assistance. See the [development history](https://github.com/Dounia-007/DouniaAIWomenHackathon/blob/design/metric-lab-framework/docs/DEVELOPMENT_HISTORY.md) for milestones and verification limits.

## Report downloads

All current assessment downloads use a styled, self-contained HTML report instead of plain text. Reports include the open agenda first, recorded resolutions, attribute cards, company feedback where supplied, role perspectives, proposed outcomes and research limits. Open the file in a browser and use Print → Save as PDF for a PDF copy. The report escapes company input and generated text. Business is now the third role across the form, prepared cases, AI instructions and report labels.
