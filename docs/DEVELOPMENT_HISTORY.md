# Metric Lab development history

This record reconstructs the documented development process from the working conversation and verified GitHub milestones. It is not a verbatim transcript, an automatic prompt log or an exhaustive record of every keystroke. The project developed through research discussion, implementation and successive reviews with Dounia Chlyeh and ChatGPT/Codex.

## Starting point

An existing Next.js/React repository and Vercel project were provided. The initial application used the name CONVERGE.AI. Inspection found a Friction Lab that returned fixed results rather than analysing the submitted metric. The original project was not created from an empty repository in this session; earlier repository history should be consulted for its provenance.

## Step by step process

| Step | Decision or action | Result and qualification |
| --- | --- | --- |
| 1 | Inspect the existing source and deployment arrangement | Identified the static review behaviour and a Next.js/React application |
| 2 | Redesign the interface around navy, white and orange | Added clearer typography, responsive presentation and interactive examples |
| 3 | Rename the product Metric Lab | Reframed the experience around examining integrated metrics |
| 4 | Define the research foundation | Dounia supplied nine attributes, subattributes and definitions; categorical profiles were distinguished from numeric scores |
| 5 | Explore assumptions users should examine | Developed questions concerning control, action-to-outcome pathways, time, complexity, transparency, audience, precision, consistency and cost |
| 6 | Design a conflict map | Organised potential disagreement around issues rather than three disconnected role summaries |
| 7 | Link conflicts to an agenda | Each issue gained a discussion question and intended output; resolved issues leave the open agenda |
| 8 | Build the first research workbench | Implemented a framework explorer, example metrics, editable profiles, custom worksheets and downloads |
| 9 | Simplify after user feedback | Replaced dense first-screen controls with a guided review and expandable detail |
| 10 | Define two entry routes | Supported an existing integrated metric or separate financial and sustainability measures |
| 11 | Specify the first worked case | Dounia supplied carbon-adjusted EPS and conditional classifications; parentheses were added so the carbon cost is deducted before division by shares |
| 12 | Compare three managerial perspectives | Adopted the latest requested roles: CEO, sustainability manager and operational manager. Earlier prototypes had used CFO |
| 13 | Inspect research uploads | Read the workbook with 17 candidate columns, the typology manuscript and 33 Word coding-summary documents in a ZIP |
| 14 | Identify research-version differences | The workbook contained older complexity and transparency categories; automatic transfer to current classification rules was not performed |
| 15 | Identify potential additional cases | Found coding themes concerning carbon-adjusted total cost of ownership, abatement cost per tonne and rehabilitation provisions relative to assets |
| 16 | Prepare a de-identified evidence derivative | Selected and paraphrased three analytical themes per document, yielding 99 statements across 33 neutral source IDs; excluded identity details and original quotations |
| 17 | Assemble candidate records | Combined 17 workbook names, the EPS example and three further candidates into 21 records; did not claim complete or validated classifications for all candidates |
| 18 | Connect research context to an AI agent | Added AI SDK and a server-side ToolLoopAgent receiving the framework, conditional baseline and full small evidence collection on each request |
| 19 | Constrain the output | Added nine required attribute profiles, role interpretations, assumptions, missing evidence, source-ID checks and up to three conflicts with agenda points |
| 20 | Implement service handling | Added credential detection, input/origin checks, timeout, per-instance throttling and explicit error messages |
| 21 | Test implementation | Ran builds, type/lint checks and local browser scenarios. Mocked AI responses were used to test rendering; they were not evidence of real model performance |
| 22 | Save work through GitHub | Committed milestone changes to a review branch and maintained draft pull request #1; Vercel reported successful preview deployments |
| 23 | Clarify the product story | Led with the disconnect between measurement and decisions, then the assessment, potential conflict map and agenda |
| 24 | Unify duplicate experiences | Moved the prepared EPS example and custom AI assessments into one section and shared output display; removed the old manual interface from page rendering |
| 25 | Explain activation | Provided instructions for privately setting AI_GATEWAY_API_KEY for Preview and redeploying; successful live inference remains unverified in the session |
| 26 | Prepare hackathon documentation | Replaced contradictory legacy README descriptions with current setup, capabilities, limitations, contributions and this history |

## Verified GitHub milestones

The following five commits were verified in the open draft pull request before adding this documentation. Their GitHub author is `Dounia-007`.

| Commit | Milestone |
| --- | --- |
| [afc93ed](https://github.com/Dounia-007/DouniaAIWomenHackathon/commit/afc93edc671aee995eac359672838d84c5f28075) | Research framework, conflict map and linked agenda |
| [55949f9](https://github.com/Dounia-007/DouniaAIWomenHackathon/commit/55949f93c91ed4c83b15f668aa9b08d86556d02e) | EPS case, two entry routes and guided role assessment |
| [2372b46](https://github.com/Dounia-007/DouniaAIWomenHackathon/commit/2372b466b92ae0b1d470dc915d3e5f9ca9ed08e5) | Research-grounded AI agent and de-identified evidence |
| [f481360](https://github.com/Dounia-007/DouniaAIWomenHackathon/commit/f48136018efb7a29fbf81adf568dce8ea1f75ddc) | Problem, solution and company outcomes |
| [c66dfaa](https://github.com/Dounia-007/DouniaAIWomenHackathon/commit/c66dfaaab0aed07c5215dad7f4a23eb8eb3412cf) | Unified interface and upfront activation status |

The early redesign was incorporated into the first published milestone rather than preserved as one remote commit per conversational iteration. Local commit hashes may differ from remote hashes because changes were also saved through GitHub API commits. Remote links above identify the authoritative published milestones.

## What GitHub preserves

GitHub preserves committed application source, dependency versions, the de-identified evidence derivative, this documentation, the milestone commit history, the pull request and reported deployment checks. The repository is public and owned by `Dounia-007`.

The work is on `design/metric-lab-framework`; `main` remains the original default branch until the pull request is merged. A reviewer opening the repository's default view may therefore see the earlier application. Use the direct implementation-branch link in the README when submitting the project.

GitHub does not automatically preserve the chat, every exploratory idea, every prompt, uploaded original research, Vercel environment values, local screenshots or temporary browser scripts. The browser QA scripts used during this session were temporary workspace files and are not a committed reproducible test suite. This document records the checks and their limits without claiming otherwise.

## Representative directions rather than exact prompts

The development discussion included requests to explain the product's problem and solution, compare iKPIs across nine research attributes and three roles, expose disagreements, derive a discussion agenda, inspect research files, remove identifying information, ground an AI agent in that evidence and simplify the interface. These are summaries of the direction given, not quotations or an exact prompt archive.

## Research transformation and limits

The source ZIP contained coded summaries with biographical material, excerpts presented as quotations and analytical interpretation. The de-identified derivative was constructed from selected analytical themes. Its 99 statements must not be represented as 99 verified participant quotations or a full coding corpus. Source identifiers reference the derivative; an identity key was not committed.

The manuscript inspected during the session uses Core Stabilizers, Strategic Integrators and Impact Integrators. Earlier discussion used different names for the latter types. The deployed AI assessment is organised around the nine attributes and does not implement a validated three-type classifier.

The package is used as context during inference, not as model-training data in a fine-tuning job. No new model weights were trained. No embeddings, vector database, live transcript retrieval, multi-agent debate or quantitative predictive evaluation was implemented. The three managerial perspectives are generated within one structured assessment.

## Checks completed during development

- Production Next.js builds and TypeScript checks completed successfully.
- ESLint completed successfully on the AI and unified-interface changes.
- Browser checks covered desktop and 390px mobile layouts, nine-attribute rendering, example selection, notes, resolution-linked agendas and downloads.
- API checks covered malformed input, cross-origin rejection and the missing-credential response.
- Mocked response tests exercised the generated-result display independently of provider access.
- Vercel reported successful preview deployment checks for the published milestones.

No successful live inference was independently verified. The user observed the activation-required message. The connection could write the GitHub review branch but could not inspect protected Vercel project settings or validate provider activation. These are separate permissions.

## Work remaining after the hackathon prototype

Activate and test the AI provider, evaluate generated assessments against researcher-reviewed cases, reconcile legacy workbook categories, check citation relevance, improve evidence coverage, and validate role interpretations with practitioners. Additional use in companies would require appropriate data governance, durable state if needed and operational controls. These are future tasks, not completed features.

## Follow-up fix for disabled custom input

The activation preflight previously disabled the entire form. A subsequent fix keeps fields editable, allows POST to retry independently of the preflight, and preserves entries and previous results on failure. Server errors distinguish missing credentials, provider authentication, billing and access failures. The production build and lint passed; browser checks confirmed typing without credentials, entry retention after a real local 503 and rendering a mocked successful response after a failed preflight. Live provider access remains unverified because the Vercel connection returns 403.

A further diagnostic update adds fixed error categories and an ML-D2 code, including nested SDK errors and unrecognized 403 responses. It excludes raw error bodies, prompts and credentials, and hides the duplicate banner when an error is shown. Classification and sensitive-content exclusion checks passed alongside the build. Provider access remains unresolved pending a deployed diagnostic.

## Prepared scenario journey

User feedback questioned the value of three simulated role opinions. The revised page prioritises decision consequences, assumptions and evidence gaps, with optional participant prompts. Three carbon-price interpretations preserve the researcher baseline and label scenario implications as proposals awaiting review. The website now includes a clearer problem statement, research limitations and contribution account. Browser checks passed for all nine cards, scenario switching, retained notes, resolutions, agenda export and desktop/mobile overflow. The build and type checks passed; live AI remains inactive.
