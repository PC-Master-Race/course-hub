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
  <h3>How Generative AI Predicts What Comes Next</h3>
  <p>Generative AI does not look up facts in a filing cabinet. It predicts new sentences word-by-word, much like auto-complete on your smartphone.</p>
  <p>In this guide, you will learn how Generative AI builds text, why it sometimes makes up false stories ('hallucinations'), and how to spot errors easily.</p>
</div>

<h3>Part 1: The Generative Shift</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">NEW TOOLS</span>
  <p>Generative AI creates new text instead of just finding old files.</p>
</div>

<p>When you search on Google, the search engine looks through saved websites to find matching links. That is retrieval.</p>

<p>Generative AI works differently. **It creates brand-new sentences word-by-word based on what words usually come next.**</p>

<p>Think of Generative AI like a super-smart auto-complete on your cell phone text messages. It guesses the next logical word.</p>

![Diagram showing the generative shift]({{ "/assets/images/topics/ai-foundations/lesson-02-img2.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Compare Search vs. AI Generation</h4>
  <p>Compare searching for a recipe on Google versus asking AI to create a custom recipe based on items in your fridge.</p>
  <ul>
    <li>Notice how Google gives links</li>
    <li>Notice how AI writes new text</li>
    <li>Compare the results</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Try a Helpful Prompt</h4>
  <p>Write a short request asking AI to write 3 helpful tips for organizing a workspace:</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>Did the AI write clear, new sentences or copy an existing article?</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Simple Rule & Verification Check: Give Clear Clues</h4>
  <p>The more clear details you give in your request, the better the AI can guess the exact words you need.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: How is Generative AI different from a standard web search?</h4>
  <ul>
    <li>A) Search creates new text; Generative AI gives website links.</li>
    <li>B) Search finds saved web pages; Generative AI predicts and creates new text.</li>
    <li>C) Generative AI only works on math spreadsheets.</li>
    <li>D) Both tools work exactly the same way.</li>
  </ul>
  <p><em>Answer Key: B — Search finds existing pages; Generative AI creates new sentences.</em></p>
</div>

<h3>Part 2: The Word Prediction Engine</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">HOW IT PREDICTS</span>
  <p>AI breaks text into small pieces called 'tokens' and guesses the most likely next piece.</p>
</div>

<p>A **token** is a small piece of a word (like a single syllable or building block).</p>

<p>If you type: 'The weather today is warm and ____', the AI looks at past text patterns and guesses: 'sunny' (75% likely), 'breezy' (15% likely), 'purple' (0.001% likely).</p>

<p>Because AI picks words based on probability, **changing a few words in your request can completely change the answer.**</p>

| Your Request Starts With... | AI Top Guess | Likelihood | Why AI Guessed It |
| --- | --- | --- | --- |
| Please find attached the signed ____ | document | 85% | Common phrase in business text |
| In case of emergency, call ____ | 911 | 95% | Very common safety phrase |
| The patient is experiencing a high ____ | fever | 70% | Common medical phrase |


![Diagram showing the word prediction engine]({{ "/assets/images/topics/ai-foundations/lesson-02-img3.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Test Sentence Guesses</h4>
  <p>See how adding details changes the AI's text predictions.</p>
  <ul>
    <li>Try a vague sentence: 'Write a note about a schedule change.'</li>
    <li>Try a detailed sentence: 'Write a 2-sentence polite note to a patient letting them know their 2:00 PM appointment is moved to 3:00 PM.'</li>
    <li>Compare how much clearer the detailed note is.</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Write a Focused Request</h4>
  <p>Write a request with clear details (who it is for, how long it should be, what tone to use):</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>Was the AI answer more helpful when you added those details?</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Simple Rule & Verification Check: Clear Details Get Clear Results</h4>
  <p>Vague requests make the AI guess blindly. Clear details guide the AI straight to the target.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: What is a 'token' when using an AI language tool?</h4>
  <ul>
    <li>A) A game coin used for logging in.</li>
    <li>B) A small piece or building block of a word.</li>
    <li>C) A type of computer cable.</li>
    <li>D) A password security code.</li>
  </ul>
  <p><em>Answer Key: B — Tokens are small word building blocks that AI uses to build text.</em></p>
</div>

<h3>Part 3: Made-Up Answers ('Hallucinations')</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">SPOTTING ERRORS</span>
  <p>Sometimes AI tools state false facts with total confidence. This is called a hallucination.</p>
</div>

<p>A **hallucination** happens when the AI creates an answer that sounds completely convincing, but is actually false or made-up.</p>

<p>Because AI guesses words based on patterns rather than checking facts, it can invent fake book titles, wrong dates, or fake court cases.</p>

<p>Always use a simple **Double-Check Rule** for any dates, numbers, or claims.</p>

![Diagram showing made-up answers ('hallucinations')]({{ "/assets/images/topics/ai-foundations/lesson-02-img4.png" | relative_url }})

<div class="activity-card">
  <h4>✏️ Workplace Activity: Fact-Check Challenge</h4>
  <p>Ask the AI for 3 facts or book recommendations in your field. Look them up independently to verify.</p>
  <ul>
    <li>Ask AI for facts</li>
    <li>Search official sources to verify</li>
    <li>Note any incorrect details</li>
  </ul>
</div>

<div class="practice-card">
  <h4>🎯 Practice Scratchpad: Fact Check Practice</h4>
  <p>Paste an AI paragraph that lists facts, dates, or numbers:</p>
  <textarea class="prompt-scratchpad" placeholder="Type your response here..." rows="4"></textarea>
  <p>List the trusted sources you used to verify each item:</p>
  <textarea class="prompt-scratchpad" placeholder="Paste or summarize output here..." rows="4"></textarea>
</div>

<div class="tip-card">
  <h4>💡 Simple Rule & Verification Check: Check Every Number and Name</h4>
  <p>Never copy and paste dates, names, or dollar amounts from AI without checking them first.</p>
</div>

<div class="quiz-card">
  <h4>🟣 Self-Check Quiz: What is an AI 'hallucination'?</h4>
  <ul>
    <li>A) A bright flashing color on your screen.</li>
    <li>B) A false or made-up answer presented by the AI with high confidence.</li>
    <li>C) When your computer battery runs low.</li>
    <li>D) An automatic virus scan.</li>
  </ul>
  <p><em>Answer Key: B — Hallucinations are confident but false statements made by AI.</em></p>
</div>

<h3>Lesson Summary & Next Steps</h3>

<div class="lead-in-card">
  <span class="lead-in-badge">KEY TAKEAWAYS</span>
  <p>You have finished <strong>Introduction to Generative AI</strong>. Practice these easy steps in your work routine before starting the next lesson.</p>
</div>
