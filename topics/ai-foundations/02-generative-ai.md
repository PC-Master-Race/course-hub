---
layout: lesson
title: "Introduction to Generative AI"
topic: "ai-foundations"
last_updated: 2026-07-02
youtube_id: "2IK3DFHRF8g"
---

![Educational diagram illustrating introduction to generative ai concepts]({{ "/assets/images/topics/ai-foundations/lesson-02-img1.png" | relative_url }})

<div class="lead-in-card">
  <span class="lead-in-badge">LESSON OVERVIEW</span>
  <h3>Inside the Generative Prediction Engine</h3>
  <p>Generative AI is not looking up answers in an encyclopedia. It is generating new text token-by-token using probability.</p>
  <p>In this lesson, you will discover how Large Language Models (LLMs) calculate next-word probabilities, understand why hallucinations occur, and master the exact verification framework to catch errors.</p>
</div>

<h3>Part 1: The Generative Shift</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">PARADIGM SHIFT</span>
  <p>Generative AI creates new content rather than retrieving pre-existing files.</p>
</div>

<p>Traditional search engines index existing web pages and return links. Generative AI generates brand-new text based on statistical likelihood.</p>

<p>When you prompt an LLM, it evaluates the context of your prompt and predicts the most likely next word, sentence, and paragraph.</p>

<p>Understanding this shift changes how you prompt: **You are not querying a database; you are guiding a text predictor.**</p>

![Diagram showing the generative shift]({{ "/assets/images/topics/ai-foundations/lesson-02-img2.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Search vs. Generation Comparison</h4>
  <p>Compare searching for a policy on Google versus prompting an LLM to draft a policy outline.</p>
  <ul>
    <li>Observe Search output</li>
    <li>Observe LLM output</li>
    <li>Identify key structural differences</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Draft a Guidance Prompt</h4>
  <p>Write a prompt asking an LLM to generate a 3-step checklist for onboarding new clients:</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>Analyze the output: Did it generate original text or copy a template?</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Pro Tip & Verification Check: Predictor Mindset</h4>
  <p>Always provide strong contextual clues. The more context you provide, the narrower and more accurate the AI's predictions become.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: How does Generative AI differ from traditional web search engines?</h4>
  <ul>
    <li>A) Web search generates new text; Generative AI returns web links.</li>
    <li>B) Web search retrieves existing pages; Generative AI predicts and synthesizes new text.</li>
    <li>C) Generative AI only works with numerical spreadsheet data.</li>
    <li>D) There is no practical difference.</li>
  </ul>
  <p><em>Answer Key: B — Search retrieves indexed content; Generative AI generates original text.</em></p>
</div>

<h3>Part 2: The Token Prediction Engine</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">HOW LLMs WORK</span>
  <p>LLMs break text into 'tokens' and calculate probabilities for what comes next.</p>
</div>

<p>A token is a fragment of a word (roughly 4 characters or 0.75 words). Models convert words into numerical vectors.</p>

<p>Given the sentence 'The weather today is warm and ____', the model calculates probability scores: 'sunny' (75%), 'breezy' (15%), 'banana' (0.001%).</p>

<p>Because output depends on probability, **varying the prompt structure leads to dramatically different results.**</p>

| Input Context | Top Predicted Token | Probability | Why It Was Chosen |
| --- | --- | --- | --- |
| Please find attached the signed ____ | contract | 88% | High co-occurrence in business training data |
| In case of emergency, call ____ | 911 | 95% | Strong statistical association in safety documentation |
| The patient presents with symptoms of ____ | fever | 62% | Common clinical description context |


![Diagram showing the token prediction engine]({{ "/assets/images/topics/ai-foundations/lesson-02-img3.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Token Prediction Experiment</h4>
  <p>Test how adding context shifts the AI's token predictions.</p>
  <ul>
    <li>Prompt 1: 'Write a letter about a policy change.'</li>
    <li>Prompt 2: 'Write a 2-paragraph formal letter to senior leaders detailing a remote work policy change effective Sept 1.'</li>
    <li>Compare how specificity constrains prediction.</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Constrain the Token Engine</h4>
  <p>Draft a prompt with tight constraints (tone, audience, word count) for an internal update:</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>Check output: Did tight constraints produce more focused text?</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Pro Tip & Verification Check: Eliminate Ambiguity</h4>
  <p>Vague prompts produce generic token predictions. Specific prompts force high-precision token outputs.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: What is a 'token' in the context of Large Language Models?</h4>
  <ul>
    <li>A) A digital cryptocurrency used to pay for API calls.</li>
    <li>B) A chunk or sequence of characters processed as a single statistical unit.</li>
    <li>C) A physical security key required to log into AI software.</li>
    <li>D) A file format used for saving documents.</li>
  </ul>
  <p><em>Answer Key: B — Tokens are word fragments processed statistically by language models.</em></p>
</div>

<h3>Part 3: Hallucinations & Fact-Checking Protocol</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">RISK MANAGEMENT</span>
  <p>AI models can generate completely fabricated facts, citations, or data with absolute confidence.</p>
</div>

<p>A 'hallucination' occurs when a model generates plausible-sounding text that is factually false or invented.</p>

<p>Because LLMs predict text likelihood rather than checking facts, they can invent book titles, legal cases, or statistical figures.</p>

<p>Establish a mandatory **Fact-Checking Protocol** for any AI-generated claims.</p>

![Diagram showing hallucinations & fact-checking protocol]({{ "/assets/images/topics/ai-foundations/lesson-02-img4.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Hallucination Detection Challenge</h4>
  <p>Prompt an AI for 3 historical citations or statistics in your field. Independently verify every reference.</p>
  <ul>
    <li>Ask AI for citations</li>
    <li>Search academic/official databases for verification</li>
    <li>Log any missing or false citations</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Fact Verification Checklist</h4>
  <p>Paste an AI-generated paragraph containing dates, statistics, or claim statements:</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>List primary sources used to confirm or refute each claim:</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Pro Tip & Verification Check: Never Trust Unverified Numbers</h4>
  <p>Always verify names, dates, quotes, legal citations, and mathematical figures against authoritative sources.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: What is an AI 'hallucination'?</h4>
  <ul>
    <li>A) A visual display glitch on the monitor screen.</li>
    <li>B) A confident output that contains false or completely fabricated information.</li>
    <li>C) When an AI model takes longer than 10 seconds to respond.</li>
    <li>D) An automatic software update.</li>
  </ul>
  <p><em>Answer Key: B — Hallucinations are false outputs presented with high confidence.</em></p>
</div>

<h3>Lesson Summary & Next Steps</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">KEY TAKEAWAYS</span>
  <p>You have completed <strong>Introduction to Generative AI</strong>. Apply these principles in your daily workflow before moving to the next lesson.</p>
</div>
