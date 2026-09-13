# Metric Lab

Connect sustainability and financial performance through metrics you can act on.

Metric Lab is a research-grounded prototype developed by Dounia Chlyeh with AI-assisted design and implementation for an AI women hackathon. It helps companies examine integrated key performance indicators (iKPIs), understand their assumptions, compare managerial interpretations and prepare a focused discussion agenda.

## Open the project

- [Website preview](https://dounia-ai-women-hackathon-git-design-me-1129c3-metric-mortality.vercel.app)
- [Current implementation branch](https://github.com/Dounia-007/DouniaAIWomenHackathon/tree/design/metric-lab-framework)
- [Draft pull request and changes](https://github.com/Dounia-007/DouniaAIWomenHackathon/pull/1)
- [Development history and research preparation](docs/DEVELOPMENT_HISTORY.md)

At the time of this documentation, the implementation is on `design/metric-lab-framework`. The pull request is open and has not been merged into `main`. Review the branch linked above when judging this submission.

## Prepared scenario review

The friction lab opens with custom assessment and three optional fields for existing feedback from the CFO, sustainability manager and operations department. The server supplies that feedback alongside the research package and asks the agent to distinguish reported comments from inferred perspectives when proposing next steps. Research evidence and limits follow in an expandable section, then the prepared carbon-adjusted EPS example provides guidance. The example names the selected carbon-price interpretation and explains the relevance of conflict-map attributes.

Company profiles, authenticated assessment history and durable storage are a later phase. Current entries and results remain page-local; assessment downloads include the feedback submitted with that assessment. Live provider access remains unresolved.

## The problem

Companies may measure sustainability and financial performance separately while making decisions that depend on both. Sustainability information can remain in disclosure while financial indicators guide resource allocation.

Combining two numbers does not automatically create a useful metric. The same indicator may mean different things to a CEO, sustainability manager and operational manager. Its assumptions, measurement boundaries and allocation of responsibility need examination before it is used.

## The proposed solution

Metric Lab offers one assessment journey for an existing iKPI or separate financial and sustainability measures. A prepared carbon-adjusted EPS example works without an AI connection. Custom assessment uses an AI agent supplied with the research framework and de-identified evidence.

| Company question | Output |
| --- | --- |
| Does this metric meaningfully connect financial and sustainability performance? | A nine-attribute assessment with reasoning, assumptions and missing evidence |
| What could it mean to different managers? | Three hypothetical role perspectives and a potential conflict map |
| What needs resolving before use? | A discussion agenda linked to unresolved issues |

The research section explains the framework separately. The assessment section presents an overview, attribute assessment, potential conflicts and agenda progressively. Users can record resolutions and download their assessment. A resolution removes the issue from the open agenda.

## Research foundation

Dounia supplied the conceptual framework, an Excel coding workbook, a typology manuscript and 33 Word files containing interview coding summaries. The manuscript and workbook were inspected during development. The deployed application does not retrieve the original files.

The nine attributes are controllability, managerial impact, time orientation, indicator complexity, transparency, stakeholder orientation, accuracy, reliability and signal cost. They describe categories, dimensions and conditional levels, not nine interchangeable numeric scores.

A de-identified derivative contains 99 selective paraphrases of analytical coding themes, three per source document, and 21 candidate metric records. These comprise 17 workbook candidates, the researcher-supplied EPS example and three further candidates identified during review. Candidate inclusion does not establish iKPI validity or a complete assessment.

Names, original source codes, organisations, biographies and identifying anecdotes were excluded from the derivative. It uses neutral source identifiers. It is a selective synthesis, not a fully anonymised reproduction of all interview documents. No participant identity key is included. Residual recognition through research themes cannot be ruled out.

The workbook contains older categories, including item-count complexity, which have not been automatically converted into the newer conceptual framework. Its historical classifications are not presented as current training labels.

## How the AI works

The server creates an AI SDK `ToolLoopAgent` for each custom assessment. The model receives:

1. The nine-attribute definitions and subdimensions.
2. The conditional carbon-adjusted EPS worked example.
3. All 99 de-identified coding paraphrases with source identifiers.
4. The candidate metric names and their limitations.
5. The company's submitted metric and optional decision context.

This is structured inference with supplied research context. It is not model fine-tuning, embedding-based retrieval or a validated prediction of managerial behaviour. The small evidence collection is supplied in full for each request. The agent has no external search or action tools.

The response includes all nine attributes, three role perspectives per attribute, assumptions, missing evidence, clarifying questions and up to three potential conflicts. Each conflict links to attributes and an agenda item. The server checks the response structure and whether cited identifiers belong to the supplied corpus. It does not verify that a cited passage substantively supports the model's inference.

The default model is `openai/gpt-6-astra` through Vercel AI Gateway. `METRIC_LAB_MODEL` can override it. The prepared EPS example bypasses the model and uses the same display components.

## Current functionality and verification

| Item | Status |
| --- | --- |
| Unified form and prepared EPS example | Implemented |
| Nine-attribute and three-role display | Implemented |
| Evidence references, conflict map, resolution notes and download | Implemented |
| Server-side AI request and response validation | Implemented |
| Production build, TypeScript and ESLint | Passed during development |
| Missing-credential, invalid-input and cross-origin handling | Checked locally |
| Prepared example, mocked AI result, agenda and mobile display | Checked with browser automation |
| Successful live provider assessment | Not independently verified in this development session |
| Scientific validity or predictive accuracy | Not established |

The user reported an activation-required message. Setup instructions were provided, but credential installation and a successful live assessment have not been confirmed. A configured credential is not proof of available credits or successful inference. Mocked browser responses demonstrate interface behaviour only.

## Run locally

Use a Node.js release compatible with the locked Next.js dependency. Development checks in this session used Node.js 24.

```bash
git clone --branch design/metric-lab-framework https://github.com/Dounia-007/DouniaAIWomenHackathon.git
cd DouniaAIWomenHackathon
npm ci
npm run dev
```

Open the local URL printed in the terminal. Without credentials, choose **Try an example · Carbon-adjusted EPS**. Custom fields remain editable even when the connection check fails. Submitting retries the server directly; setup errors preserve the entries and any previous result.

To enable local custom assessment, copy `.env.example` to `.env.local`, set `AI_GATEWAY_API_KEY` privately and restart the server. Never commit the populated file.

```bash
npm run build
npx tsc --noEmit
npm run lint
npm run start
```

The last command serves the production build after `npm run build` has completed.

## Activate on Vercel

1. Create an AI Gateway key in the correct Vercel workspace. See [AI Gateway keys](https://vercel.com/docs/ai-gateway/authentication-and-byok/api-keys).
2. In the website project's environment variables, save the key as `AI_GATEWAY_API_KEY` for **Preview**. Use Production separately when publishing the production version.
3. Redeploy the preview, then reload the website and request a custom assessment. Environment changes require a new deployment.
4. Confirm that the service has available usage credits and that a real assessment completes before presenting live AI as verified.

Vercel OIDC is also supported when present. Secrets are read on the server and must never use a `NEXT_PUBLIC_` prefix. Do not put a key in GitHub, a screenshot, chat or a public form.

## Architecture and files

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Product story and page composition |
| `app/components/FrameworkExplorer.js` | Research framework explanation |
| `app/components/PreparedReview.js` | Prepared EPS scenarios, baseline, issues and agenda |
| `app/components/AIReview.js` | Unified input, prepared example, generated results and downloads |
| `app/api/assess/route.js` | Credential check, input checks and server-side model request |
| `app/lib/server/assessment.js` | Model instructions, response schema and validation |
| `app/lib/server/evidence.json` | De-identified evidence derivative and candidate catalogue |
| `app/lib/eps-case.js` | Prepared EPS baseline, assumptions and illustrative conflicts |
| `app/lib/metric-data.js` | Attribute definitions and older prototype helpers |
| `app/components/MetricLab.js` | Earlier manual interface retained in source but no longer rendered |
| `app/globals.css` | Styling and responsive layouts |
| `.env.example` | Empty credential template and optional model setting |

The stack is Next.js 16, React 19, TypeScript/JavaScript, CSS/Tailwind tooling and AI SDK 7, hosted through Vercel's GitHub integration. Exact dependencies are in `package-lock.json`.

## Data handling and limitations

The application does not persist company submissions or generated results. React state lasts until reload or replacement by another result. Downloads retain the displayed review locally. The AI provider processes custom inputs under the configured account's service terms.

Only the de-identified derivative is committed, not the research manuscript, original workbook or interview files. Because this repository is public, the committed derivative is publicly readable, even though the application imports it on the server. Server-side processing protects credentials; it does not make repository content private.

Input limits, same-origin checks, a timeout and per-instance request throttling are implemented. The throttle is not distributed and is not a hard spending cap. Broad public use requires additional operational controls and scientific evaluation. Assessments may be incorrect, assumptions may be missing and the model may associate an authentic source ID with unsupported reasoning.

## Human and AI contributions

Dounia developed the research concept and nine-attribute framework, provided the research materials and EPS classifications, selected the managerial perspectives, directed the product story and approved design changes. ChatGPT/Codex assisted with critical discussion, interface design, coding, selective evidence paraphrasing, checks and documentation.

GitHub records commits made through the connected account under `Dounia-007`. This attribution does not mean the code was written without AI assistance. The development history explains that division of work and identifies the milestones preserved in GitHub.

## Demonstration sequence

1. Explain the problem of separate measurement and divergent interpretation.
2. Open **Assess your metric** and choose the prepared EPS example.
3. Inspect its assumptions and the nine attributes across the three roles.
4. Open a potential conflict, record a resolution and show the resulting agenda.
5. Download the assessment.
6. Demonstrate a custom AI assessment only after activation and a successful live test. Clearly distinguish its proposals from the prepared researcher baseline.

## Jury demonstration

Enter `Energy consumption per revenue` in the existing-iKPI form (or use the prepared-demonstration shortcut), then select Assess my metric. This exact named example returns a fixed, labelled prepared demonstration without a provider request. It includes nine proposed classifications, illustrative role feedback, three proposed resolutions and an agenda. Optional company feedback is displayed and downloaded as supplied, not analysed. Other metric names continue to use the custom AI route. The EPS conflict map also displays attribute badges and role prompts with proposed resolutions.
