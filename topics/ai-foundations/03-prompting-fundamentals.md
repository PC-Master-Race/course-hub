---
layout: lesson
title: "Prompting Fundamentals & RTCF"
topic: "ai-foundations"
last_updated: 2026-07-02
youtube_id: "dH8gX3Zg85U"
---

<p>Here is something that surprises almost every student in this course: two people can use the exact same AI tool, on the exact same day, for the exact same task - and get completely different results. One walks away with a polished, useful output. The other walks away frustrated, convinced the AI simply 'doesn't work.'</p>


<div class="impact-callout">
  <h4>**The difference is almost never the tool. The difference is the prompt.**</h4>
</div>

<p>Prompt engineering - the skill of crafting effective instructions for AI models - is the single most practical thing you will learn in this course. You do not need to write code. You do not need to understand how neural networks work. You need to learn how to communicate clearly and strategically with an AI system - and that is something every professional can do.</p>


<h3>This module gives you the framework. The activity that follows gives you the reps.</h3>


<h3>Part 1: Why Prompting Matters - Same Tool, Different World</h3>

<p>Before we get to the framework, let's make the problem concrete. Look at these two prompts and what they produce:</p>


| ❌  Vague Prompt | ✅  Strategic Prompt (RTCF) |
| --- | --- |
| "Write me an email." | "You are a medical office coordinator. Write a 3-sentence email to a patient reminding them of their 2 PM appointment tomorrow. Use a warm, professional tone and include a note about arriving  early for check-in." |
| Result: A generic, bland email with no context, no tone, and no useful details. Could apply to anything, to anyone, in any industry. | Result: A polished, warm, professional patient communication - ready to copy, paste, and send with one quick review. |

<p>The tool did not change. The input did. That is the entire lesson of prompting in one sentence.</p>

<p>When you give an AI model more to work with - more context, more clarity, a defined role, a specified output format - it has more to draw on when generating a response. Better input almost always produces better output.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-03-img1.png" | relative_url }})


<h3>Part 2: The RTCF Framework - Your Prompting Blueprint</h3>

<p>Every strong prompt for a workplace task can be built using four components. Together, they form the RTCF framework: Role, Task, Context, and Format. Think of RTCF as a checklist you run through before sending any prompt - especially for important outputs.</p>


| Component | What It Does | Workplace Example |
| --- | --- | --- |
| R - Role | Tell the AI who it should act as. This frames how it interprets your request and the lens it uses to generate a response. A role gives the model a perspective and a voice. | "You are an experienced HR coordinator at a mid-size healthcare organization." |
| T - Task | State exactly what you want done. Be specific and use active verbs: write, summarize, compare, list, rewrite, translate, evaluate. Vague tasks produce vague output. | "Write a 5-bullet summary of the attached onboarding checklist for new warehouse staff." |
| C - Context | Provide the details that shape the output: audience, purpose, constraints, background information, or anything the model needs to do the job well. Context separates generic from genuinely useful. | "The audience is first-day employees who may not be familiar with safety regulations. Keep language simple and avoid jargon." |
| F - Format | Specify how you want the response structured: bullet list, numbered steps, professional email, one paragraph, table, FAQ format, formal vs. casual tone, word count, etc. | "Format the output as a numbered list. Use plain language. Keep each item to one sentence." |

<p>Important: you don't always need all four components. A quick, low-stakes request can be shorter. But for anything you would put in front of a supervisor, share with a client, or use in a patient-facing communication - run the RTCF checklist. The few extra seconds it takes to build a strong prompt will save you far more time in revisions.</p>


<h4>RTCF Quick Reference Card  -  Keep This Handy</h4>

<p>Role: Who should the AI act as for this task? (e.g., "You are a bilingual customer service representative...")</p>

<p>Task: What exactly should it do? Use a strong verb: Write, Summarize, Compare, Translate, Reformat, Evaluate, List.</p>

<p class="standout-question">Context: What details does it need? Who is the audience? What are the constraints or background?</p>
<p>Format: How should the output look? (e.g., bullet list, numbered steps, formal email, one paragraph, under 200 words)</p>

<p>Pro tip: Write your RTCF prompt in one flowing paragraph - you do not need to label each section out loud. The goal is to ensure all four elements are present, not that they are formatted as a checklist.</p>


<h3>Part 3: RTCF in Action - A Full Worked Example</h3>

<p>Let's walk through one complete prompt, built piece by piece, so you can see how each component adds value.</p>


| What Was Added | The Prompt | Why It Matters |
| --- | --- | --- |
| Task only (bare minimum) | "Summarize this report." | Technically a valid request - but which report? How long? For whom? The model has almost nothing to work with. |
| + Role | "You are a business analyst. Summarize this report." | Better. Now the model has a perspective and an expertise level to bring to the task. |
| + Context | "You are a business analyst. Summarize this quarterly sales report for our department manager, who wants a quick overview before a Monday meeting." | Much stronger. Now the model knows the audience and the purpose - what to emphasize and what to leave out. |
| + Format (complete RTCF) | "You are a business analyst. Summarize this quarterly sales report for our department manager, who wants a quick overview before a Monday meeting. Provide 5 bullet points, each one sentence. Start with the most important finding." | Complete. This will produce a polished, immediately usable output that requires minimal editing. |

<p>Notice how each addition makes the prompt progressively more useful - without making it burdensome. A complete RTCF prompt is typically 2-5 sentences. That is all it takes.</p>


<h3>Part 4: AI Is a Conversation, Not a Search Engine</h3>

<p>This is one of the most important mindset shifts in this course. Most of us are trained to use technology like a search engine: type something in, get a result, move on. AI language tools work differently - and treating them like a search engine is one of the biggest reasons people get frustrated.</p>


| Search Engine Mindset | Conversation Mindset |
| --- | --- |
| •  One prompt, then done <br> •  If the result is wrong, I try a different search <br> •  I type keywords, not full sentences <br> •  The result is fixed - I take it or leave it <br> •  I feel like I failed if I need to ask again | •  First prompt starts the conversation <br> •  If the result isn't right, I follow up: "Make it shorter" or "Try a different angle" <br> •  I write in natural sentences and give context <br> •  The result is a starting draft - I shape it with feedback <br> •  Iteration is the skill, not a sign of failure |


<h4>Powerful Follow-Up Moves</h4>

<p>After your first response, you can refine, redirect, or expand the conversation using natural language. Here are the most useful follow-up prompts:</p>


| Follow-Up Prompt | What It Does |
| --- | --- |
| "Make it shorter / longer." | Instantly adjusts the response length without rewriting your prompt. |
| "Try a more formal / casual tone." | Shifts the register to match your audience or workplace culture. |
| "Give me 3 alternative versions." | Generates options when you want to compare different approaches. |
| "Explain that last point in simpler terms." | Useful for breaking down jargon or technical content for a broader audience. |
| "Add a section on [topic]." | Expands the output without starting the entire prompt over. |
| "Rewrite this as if the audience has never worked in healthcare." | Reframes the audience and complexity level mid-conversation. |
| "Check your previous response for any errors or assumptions." | A self-review nudge - the model will often catch its own mistakes when asked. |

<p>In your role, this means: you do not need to get the perfect prompt on the first try. The professionals who get the most out of AI are the ones who treat it as a working session - not a one-shot vending machine. Start with a solid RTCF prompt, then refine.</p>


<h3>Part 5: The Chain-of-Thought Nudge</h3>

<p>Here is a simple technique that can dramatically improve the quality of AI responses on complex tasks. It is called the chain-of-thought approach - and it requires just one extra phrase at the end of your prompt.</p>


<h4>The Chain-of-Thought Technique</h4>

<p>What it is: Adding a phrase like "Think through this step by step before giving your final answer" instructs the model to reason out loud before committing to a response.</p>

<p>Why it works: When an LLM articulates its reasoning process, it tends to catch errors and produce more accurate, nuanced output - especially on tasks involving analysis, decision-making, or multi-step logic.</p>

<p>When to use it: Complex analysis, comparing options, troubleshooting problems, writing logical arguments, or any task where you want the model to show its work rather than jump straight to a conclusion.</p>

<p>Example:</p>

<p>"You are a logistics coordinator. Evaluate whether our current supplier arrangement is cost-effective given the following data: [your data here]. Think through each factor step by step before giving your recommendation."</p>

<p>Without the chain-of-thought nudge:  the model may jump straight to a recommendation without examining the tradeoffs - and you might miss something important.</p>

<p>Other useful reasoning nudges:</p>

<ul>
  <li>"Before answering, list any assumptions you are making."</li>
  <li>"Identify potential weaknesses in this plan before proposing improvements."</li>
  <li>"What would someone who disagrees with this conclusion say?"</li>
</ul>

<h4>Dig Deeper: Recommended Reading</h4>

<p>These high-quality, trustworthy sources will strengthen your understanding of prompting and AI communication. Each takes  to read.</p>

<ul>
  <li>For a deeper dive, read this from OpenAI: Prompt Engineering Guide - The officia guide from the makers of ChatGPT. Clear, well-organized, and full of tested techniques (Advanced).</li>
  <li>Read this from Anthropic: Prompt Library: Real Examples Across Use Cases - A browsable library of strong prompts across dozens of workplace scenarios. Excellent for inspiration and pattern recognition (Advanced).</li>
  <li>For a deeper dive, read this from Google: How to Write Better AI Prompts - Google's accessible, beginner-friendly take on effective prompting. Practical advice with real examples.</li>
  <li>For a deeper dive, read this from Ethan Mollick - One Useful Thing: How to Use AI to Do Stuff: An Opinionated Guide - Mollick is a Wharton professor and one of the most practical AI educators writing today. Every post is worth reading.</li>
</ul>

<div class="activity-card">


<h4>✏️  ACTIVITY: Prompt Makeover Lab</h4>


<h5 class="card-section-label">Purpose</h5>

<p>To practice transforming weak, vague prompts into strong RTCF prompts - and to see the difference yourself, in real time, with a live AI tool.</p>


<h5 class="card-section-label">Instructions</h5>

<ol>
  <li>Open ChatGPT or Gemini in your browser.</li>
  <li>For each of the three prompts below: first, run the original vague prompt and note the result. Then, rewrite it using the RTCF framework and run your improved version. Record both results in the space provided.</li>
  <li>Be ready to share: What changed? Why did it matter? Which version would you actually use at work?</li>
</ol>
</div>


<h4>Prompt 1 - General Professional</h4>

<p>Original (vague prompt):  "Write a report."</p>

<p class="standout-question">Your RTCF rewrite: Think: What report? What is its purpose? Who will read it? What format should it take?</p>
<ul>
  <li>R - Role:</li>
  <li>T - Task:</li>
  <li>C - Context:</li>
  <li>F - Format:</li>
</ul>

<p><strong>Now apply this and draft your new prompt below, then copy and paste it into your favorite AI tool:</strong></p>
<textarea class="prompt-scratchpad" placeholder="Type your improved prompt here..." rows="4"></textarea>


<h4>Prompt 2 - Healthcare / Office Setting</h4>

<p>Original (vague prompt):  "Help me with a patient email."</p>

<p class="standout-question">Your RTCF rewrite: Consider: What type of communication? What information must be included? What tone is appropriate?</p>
<ul>
  <li>R - Role:</li>
  <li>T - Task:</li>
  <li>C - Context:</li>
  <li>F - Format:</li>
</ul>

<p><strong>Now apply this and draft your new prompt below, then copy and paste it into your favorite AI tool:</strong></p>
<textarea class="prompt-scratchpad" placeholder="Type your improved prompt here..." rows="4"></textarea>


<h4>Prompt 3 - Your Vocational Field (You Choose the Task)</h4>

<p>Original (vague prompt):  "Give me some information about my job."</p>

<p>Your RTCF rewrite: Make this completely specific to your actual job title, a real task you perform, and a realistic output you would use at work.</p>

<ul>
  <li>R - Role:</li>
  <li>T - Task:</li>
  <li>C - Context:</li>
  <li>F - Format:</li>
</ul>

<p><strong>Now apply this and draft your new prompt below, then copy and paste it into your favorite AI tool:</strong></p>
<textarea class="prompt-scratchpad" placeholder="Type your improved prompt here..." rows="4"></textarea>

<p>Reflection:</p>

<ul>
  <li>What was the most noticeable difference between the vague and RTCF versions?</li>
  <li>Which component of RTCF made the biggest single impact: Role, Task, Context, or Format?</li>
  <li>Could you use any of these improved prompts in your actual job this week?</li>
  <li>What was surprising or unexpected about how the AI responded?</li>
</ul>

<h4>Module Wrap-Up: What You Can Now Do</h4>

<p>After completing this lesson and the Prompt Makeover Lab, you should be able to:</p>

<ul>
  <li>Explain why prompting skill matters - and why the same tool produces wildly different results in different hands.</li>
  <li>Apply the RTCF framework (Role, Task, Context, Format) to any workplace prompting task.</li>
  <li>Transform a vague, weak prompt into a complete, strategic one - in under two minutes.</li>
  <li>Use follow-up prompts and iteration to refine AI output rather than starting over from scratch.</li>
  <li>Deploy the chain-of-thought nudge to improve AI reasoning on complex or multi-step tasks.</li>
</ul>
<p>Up Next: Lesson 5 - Identifying Opportunities on the Job. Now that you have the foundational skill, you will learn how to look at your own daily work through an AI lens and identify exactly which tasks in your vocational field are the best candidates for AI assistance.</p>
