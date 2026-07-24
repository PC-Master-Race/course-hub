---
layout: lesson
title: "Ethics, Bias, and Trust in AI"
topic: "ai-foundations"
last_updated: 2026-07-02
youtube_id: "e9f8g7h6i5j"
---

![Educational diagram illustrating ethics, bias, and trust in ai concepts]({{ "/assets/images/topics/ai-foundations/lesson-07-img1.png" | relative_url }})

<div class="lead-in-card">
  <span class="lead-in-badge">LESSON OVERVIEW</span>
  <h3>Ethical & Responsible AI Deployment</h3>
  <p>Protect your organization against algorithmic bias, privacy leaks, and copyright infringement.</p>
  <p>In this lesson, you will learn data privacy laws, PII masking protocols, and ethical AI review practices.</p>
</div>

<h3>Part 1: Algorithmic Bias & Fairness</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">ETHICAL SAFETY</span>
  <p>AI algorithms reproduce historical biases embedded in training datasets unless actively mitigated.</p>
</div>

<p>If training data contains historical biases in hiring, lending, or healthcare access, the AI model will replicate those disparities.</p>

<p>Ethical deployment requires ongoing audits, diverse evaluation teams, and transparent decision criteria.</p>

<p>Never allow automated scoring systems to make unmonitored decisions affecting human lives.</p>

![Diagram showing algorithmic bias & fairness]({{ "/assets/images/topics/ai-foundations/lesson-07-img2.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Ethical Impact Assessment</h4>
  <p>Evaluate an AI customer credit scoring tool for potential demographic bias.</p>
  <ul>
    <li>Identify risk variables</li>
    <li>Propose bias mitigation steps</li>
    <li>Establish human appeal review process</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Audit a Workplace AI System</h4>
  <p>Describe an automated or AI system used in your industry. What ethical risks exist?</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>Propose 2 mandatory human oversight safeguards:</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Pro Tip & Verification Check: Transparency Is Required</h4>
  <p>Always disclose when AI has been used to generate public-facing or candidate-evaluation materials.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: What is the primary cause of algorithmic bias in AI systems?</h4>
  <ul>
    <li>A) Server hardware overheating.</li>
    <li>B) Biased or unrepresentative historical training data.</li>
    <li>C) Using open-source web browsers.</li>
    <li>D) High internet bandwidth speed.</li>
  </ul>
  <p><em>Answer Key: B — Training data disparities create algorithmic bias.</em></p>
</div>

<h3>Part 2: Privacy, Confidentiality & PII Protection</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">DATA SECURITY</span>
  <p>Never enter Personally Identifiable Information (PII) or proprietary trade secrets into public cloud AI.</p>
</div>

<p>Public AI services may retain user inputs for model retraining. Uploading patient records, social security numbers, or internal financial spreadsheets breaches privacy laws (HIPAA, FERPA, GDPR).</p>

<p>Always mask or redact sensitive data before prompting: replace names with 'Client A' and numbers with generic placeholders.</p>

<p>Verify whether your company has an enterprise private tenant before processing internal documents.</p>

![Diagram showing privacy, confidentiality & pii protection]({{ "/assets/images/topics/ai-foundations/lesson-07-img3.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Data Redaction Practice</h4>
  <p>Sanitize a confidential email excerpt by removing all PII before creating an AI prompt.</p>
  <ul>
    <li>Identify names, addresses, SSNs</li>
    <li>Replace with generic tokens [CLIENT_NAME], [DATE]</li>
    <li>Verify text is fully sanitized</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Sanitize a Confidential Record</h4>
  <p>Paste an example document containing sensitive fields:</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>Paste the fully sanitized version safe for AI prompting:</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Pro Tip & Verification Check: The Whiteboard Test</h4>
  <p>If you wouldn't write the information on a public whiteboard in a coffee shop, do not type it into a public AI prompt.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: What should you do before entering a document containing client names into a public AI tool?</h4>
  <ul>
    <li>A) Type it in immediately without changes.</li>
    <li>B) Mask or redact all Personally Identifiable Information (PII).</li>
    <li>C) Change the font color to white.</li>
    <li>D) Save the document as a PDF.</li>
  </ul>
  <p><em>Answer Key: B — Always redact PII before using public AI tools.</em></p>
</div>

<h3>Lesson Summary & Next Steps</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">KEY TAKEAWAYS</span>
  <p>You have completed <strong>Ethics, Bias, and Trust in AI</strong>. Apply these principles in your daily workflow before moving to the next lesson.</p>
</div>
