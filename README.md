# Metric Lab

An interactive prototype for examining integrated sustainability and financial KPIs. Built with Next.js and React, using the nine-attribute framework supplied by Dounia Chlyeh.

## Run it locally

1. Download or clone this repository.
2. Install a Node.js version compatible with the Next.js version in `package.json`.
3. Run `npm ci` to install the locked dependencies.
4. Run `npm run dev` and open the local URL printed in the terminal.

Use `npm run build` for a production build and `npm run start` to serve that build. `npm run lint` checks the source. No API keys or additional services are required for this prototype.

## What you can explore

- Three illustrative candidate metrics and a custom-metric form.
- A nine-attribute framework explorer and editable multidimensional profile.
- A conflict matrix organised by meaning, evidence, time horizon, accountability and metric-specific assumptions.
- Explicit labels for illustrative positions, rule-based prompts and user-entered positions.
- Issue classifications, participant positions, notes and user-confirmed resolutions.
- A meeting agenda derived from the remaining open issues, with links back to their source.
- A downloadable text agenda containing the context, positions, source labels, notes, resolutions and attribute profile.

Different candidates keep independent review state while the page is open. Reloading clears that state. Rebuilding a custom review replaces its previous custom state; download the agenda first to preserve it. There is no database, browser-storage persistence or upload feature.

## What the prototype does not claim

It does not call an AI model, retrieve interviews, predict real managers' behaviour, calculate financial outcomes, or validate a metric. Custom metric structure and horizon select explicit discussion prompts. Free text is displayed as user context; it is not semantically analysed. The framework references were supplied by the researcher and have not been independently verified here. The low/medium/high descriptors are provisional within-attribute assessments, not calibrated scoring thresholds. There is no overall quality or credibility score.

A job title does not establish a stakeholder orientation. Default role positions are illustrative and can be replaced by the user. Marking an issue resolved records a user judgement; it is not independent verification. Attribute edits are included in the export but do not automatically establish or resolve conflict.

## Where to edit

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Branding, introductory sections and page composition |
| `app/globals.css` | Navy, white and orange styling, responsive layouts and motion |
| `app/components/FrameworkExplorer.js` | Research framework browser |
| `app/components/MetricLab.js` | Custom form, review state, conflict map, profile and agenda |
| `app/lib/metric-data.js` | Definitions, examples, issue-generation rules and export content |
| `app/layout.tsx` | Page title, description and fonts |

## Continuing toward evidence-grounded AI

A later implementation can retrieve approved, anonymised interview excerpts on the server and propose structured interpretations with source links. Keep interview evidence, user statements and model inference distinct. Assessment criteria and behavioural claims need evaluation with practitioners before predictive-validity claims can be made. Store future API credentials only in server-side environment variables, never in browser code.

## Reviewing on GitHub and Vercel

Changes are prepared on a separate review branch. Open its pull request to inspect the differences. If the repository's Vercel integration is configured to build branch previews, use the preview link shown by the deployment check. Review the prototype before merging it into the production branch.
