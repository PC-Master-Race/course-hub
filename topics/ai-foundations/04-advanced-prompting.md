---
layout: lesson
title: "Advanced Prompting & Image AI"
topic: "ai-foundations"
last_updated: 2026-07-02
youtube_id: "JUp8B2r7zD8"
---


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img1.png" | relative_url }})


<h3>Part 1: Case Study Reflection</h3>

<p>Recently, you were asked to try one AI tool on a real task and bring back what you found. Now it is time to share. There are no wrong answers here - what matters is what you actually experienced, not what you thought you were supposed to experience.</p>


<h4>Instructor Facilitation Guide</h4>

<p>Call 3-4 users. If the group is quiet, use your roster and cold-call warmly: 'Tell us what you tried - no judgment, just what happened.'</p>

<p>Prompts to draw out deeper responses:</p>

<ul>
  <li>'What task did you use AI for? Was it something from work, school, or personal life?'</li>
  <li>'Did the output surprise you - in a good way or a frustrating way?'</li>
  <li>'Would you have done anything differently based on what you learned in Lesson 3 or 4?'</li>
  <li>'Did you find yourself verifying the output? Why or why not?'</li>
</ul>
<p>Teaching move: After 2-3 responses, synthesize below. Write 1-2 takeaways in real time ('What I'm hearing: AI works best when...'). This models the analytical listening you want students to develop.</p>


<div class="practice-card">


<h4>Your Independent Practice - Quick Recap</h4>

<p>Before we hear from users, take 90 seconds to fill in the row below so your own experiment is fresh in your mind.</p>

</div>


| The task I tried AI on | Tool I used | What worked / what surprised me | What I would do differently |
| --- | --- | --- | --- |
|  |  |  |  |


<h3>Part 2: RTCF Rapid Review</h3>

<p>In Lesson 3 you learned the RTCF framework - a four-part structure for writing prompts that get professional results. Before we go deeper with advanced techniques today, let's make sure that foundation is solid.</p>


<h4>Instructor Review Protocol</h4>

<p>Select one student. Ask: 'Without looking at your notes, walk us through the RTCF framework. What does each letter stand for, and why does each part matter?'</p>

<p>After the student responds, open it with others for additions or corrections. Then reveal the reference below. Affirm what was right - correct gently what was incomplete.</p>

<p>If no one users: say 'Let's build it together' and call out letters one at a time, asking different students for each component. This still achieves the retrieval practice goal.</p>


<h4>RTCF Framework - Quick Reference</h4>

<p>Use this as your check after the Review. Each component is described with its purpose and a quick workplace example:</p>


| Letter | Component + Purpose | Workplace Example |
| --- | --- | --- |
| R - Role | Tell the AI who it is speaking as or who it is writing for. Sets the perspective, expertise level, and vocabulary of the response. | 'You are a medical billing specialist helping a patient understand an insurance denial letter.' |
| T - Task | State exactly what you need the AI to produce. Be specific about the action verb and the deliverable. | 'Write a 3-sentence summary of the following claim status update that a patient can understand without medical training.' |
| C - Context | Provide the background information the AI needs to give you a relevant answer. Include audience, constraints, or any relevant details. | 'The patient is elderly, has Medicare, and is anxious about costs. The letter uses medical billing codes she does not recognize.' |
| F - Format | Specify how you want the output structured: length, tone, bullet points, numbered steps, table, email, etc. | 'Format as 3 short bullet points. Use plain language. End with one sentence telling her the next step to take.' |

<p>Quick check: Look at your filled-in RTCF row from Lesson 3. Does it hit all four components? If not, revise it now. You will use this skill again in Module 5 - today we layer advanced techniques on top of this foundation.</p>


<h4>Coming Up Next: Module 5 - Advanced Prompting Techniques ()</h4>

<p>You have recalled the foundation. Now we build on it. Module 5 introduces four professional-grade prompting techniques that go beyond RTCF - few-shot prompting, chain-of-thought, persona and constraint prompting, and iterative refinement. You will use all of them in the Prompt Tournament activity.</p>

<p>Your only task right now: get your notes from in this lesson in front of you and think of one workplace task you have not yet tried in AI. You will use it in today's activity.</p>


<h4>--- MODULE 5: Advanced Prompting Techniques ---</h4>


<h4>Advanced Prompting Techniques</h4>


<h4>From Framework to Fluency - Techniques That Unlock Professional-Grade Output</h4>


<h4>From RTCF to Fluency</h4>

<p>In Lesson 3 you learned a structured framework for writing prompts. RTCF gives you a reliable starting point - and for many everyday tasks, it is all you need. But the most effective AI users do not stop at the framework. They layer additional techniques on top of it to get outputs that are more accurate, more tailored, and more immediately useful.</p>

<p>This module introduces four advanced techniques used by professionals who rely on AI tools daily. None of them require technical knowledge. All of them are learnable in a single class session. By the end of the Prompt Tournament activity, you will have practiced each one with a real workplace task - and you will be able to see the difference in output quality with your own eyes.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img2.png" | relative_url }})


<h4>Technique 1: Few-Shot Prompting</h4>

<p>The name sounds technical but the idea is simple: before you ask the AI for what you want, you show it an example of exactly what you want. You give the model a few 'shots' - sample inputs and outputs - so it understands the pattern, tone, format, and level of detail you expect.</p>

<p>Think of it like training a new employee. Instead of describing the job in the abstract, you hand them a completed example and say: 'Here is what a finished version looks like. Now do one like this for the new situation.' AI responds to this the same way a fast learner does - it picks up the pattern and replicates it.</p>


<h4>Definition: Few-Shot Prompting</h4>

<p>Few-shot prompting means including one or more examples of the desired input-output pair inside your prompt before making your actual request. The examples teach the model the pattern you expect - format, tone, length, vocabulary, and structure - without you having to describe each of those requirements explicitly.</p>

<p>Zero-shot: No examples provided. Just the request. Works for simple tasks.</p>

<p>One-shot: One example provided. Works well for most professional formatting tasks.</p>

<p>Few-shot: Two or more examples. Use when the format or style is very specific and hard to describe in words.</p>

<p>Side-by-Side: Without vs. With Few-Shot</p>


| Without few-shot (zero-shot) | With few-shot (one example provided) |
| --- | --- |
| PROMPT: Write a follow-up email after a job interview. | PROMPT: Write a follow-up email after a job interview. Here is an example of the tone and length I want: <br> Example: 'Hi Ms. Chen, Thank you for taking the time to meet with me yesterday about the Medical Records Coordinator role. I enjoyed learning about your team's workflow and am excited about the opportunity. Please let me know if you need any additional information. I look forward to hearing from you. Best, Maria' <br> Now write a similar email for someone who interviewed for a Warehouse Supervisor position at a logistics company. |
| Result: Generic, overly formal, often too long. May miss the industry or role entirely. | Result: Matches the tone, length, and warmth of your example - ready to send or lightly edit. |

<p>In your role, this means: when you have a format that works - a successful email, a good summary, a well-written report - save it. It becomes your few-shot example for the next time you need something similar. The AI learns from your best work.</p>


<h4>Technique 2: Chain-of-Thought Prompting</h4>

<p>Standard AI prompts ask for an answer. Chain-of-thought (CoT) prompts ask the model to think through the problem step by step before giving its answer. This single instruction - 'think step by step before responding' - reliably improves output quality on tasks that involve reasoning, analysis, planning, or multi-step decisions.</p>

<p>The reason it works is rooted in how LLMs generate text. When a model is forced to articulate intermediate reasoning steps - rather than jumping straight to a conclusion - it surfaces assumptions, catches contradictions, and produces more defensible answers. It is the AI equivalent of showing your work.</p>


<h4>Definition: Chain-of-Thought Prompting</h4>

<p>Chain-of-thought (CoT) prompting is the practice of explicitly instructing the AI to reason through a problem step by step before delivering its final answer. This is activated by adding phrases like 'Think step by step,' 'Walk me through your reasoning,' or 'Before you answer, explain your logic' to your prompt.</p>

<p>Best used for: complex decisions, multi-step procedures, analysis tasks, troubleshooting, creating checklists, and any situation where the process matters as much as the final output.</p>


<div class="practice-card">


<h4>Chain-of-Thought in Practice: Two Versions of the Same Prompt</h4>

</div>


| Standard prompt | Chain-of-thought prompt |
| --- | --- |
| 'You are a healthcare office manager. Write a plan for reducing patient no-shows at our clinic.' | 'You are a healthcare office manager. Think step by step about the root causes of patient no-shows before writing a plan to reduce them. First identify the most common reasons patients miss appointments. Then propose one action for each root cause. Finally, summarize the three highest-priority actions.' |

<p>The chain-of-thought version produces a structured, reasoned plan rather than a generic list. More importantly, you can read the reasoning and catch it if the AI made a wrong assumption about your clinic's situation. The standard version gives you a finished answer you cannot interrogate.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img3.png" | relative_url }})


<h4>Technique 3: Persona + Constraint Prompting</h4>

<p>The RTCF Role component establishes who the AI is writing for. Persona + constraint prompting takes that further: you give the AI an explicit identity (persona) and then set boundaries on what it should never do, always include, or specifically avoid (constraints). The structure is consistent and memorizable.</p>


<h4>The Persona + Constraint Structure</h4>

<p>You are [specific persona]. Never [constraint to avoid]. Always [positive constraint]. [Then give your task.]</p>

<p>The persona tells the AI the expertise level, vocabulary, audience awareness, and professional judgment to apply. The constraints shape every sentence it produces - without them, even a well-defined persona can drift into generic responses.</p>


<h4>Persona + Constraint Across Different Workplaces</h4>

<p>Here is how the same structure adapts to different professional contexts:</p>


| Field | Persona | Constraints added |
| --- | --- | --- |
| Healthcare | You are a patient care coordinator writing discharge instructions. | Never use medical jargon without defining it. Always include a phone number to call with questions. Never give specific medication dosages. |
| Logistics / Warehousing | You are a warehouse supervisor writing a daily safety briefing for a team of 12. | Always lead with the most critical hazard of the day. Never exceed 150 words. Always end with a one-sentence team motivation statement. |
| Business / Administration | You are an executive assistant drafting a response to a client complaint. | Never admit fault on behalf of the company without approval. Always acknowledge the client's frustration in the first sentence. Never use passive voice. |
| Early Childhood Education | You are a preschool teacher writing a weekly parent newsletter. | Always use a warm, encouraging tone. Never use acronyms or educational jargon. Always include one specific learning space highlight from the week. |
| Retail / Customer Service | You are a customer service specialist responding to a negative online review. | Never be defensive. Always thank the customer for their feedback. Never promise a specific resolution you cannot guarantee. |

<p>Pro tip: Start with just one constraint and see what it changes. Then add a second. Adding constraints iteratively helps you understand which boundaries are actually shaping the output and which are redundant. This leads directly into our next technique.</p>


<h4>Technique 4: Iterative Refinement</h4>

<p>The biggest mistake most new AI users make is treating every prompt like a single transaction: one prompt, one output, done. Professionals use AI the way a good editor uses a draft - as the beginning of a conversation, not the end of it.</p>

<p>Iterative refinement means deliberately cycling through prompts: generate a first draft, evaluate what works and what does not, then send a follow-up prompt that targets exactly what needs to change. Each cycle gets closer to the output you actually want. The AI retains context within a conversation, which means your follow-ups can be short and precise.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img4.png" | relative_url }})


<div class="practice-card">


<h4>The Iterative Refinement Cycle in Practice</h4>

<p>A real workplace example - drafting a professional email to a difficult vendor:</p>

</div>


| Round | Prompt sent | What to evaluate + refine |
| --- | --- | --- |
| 1 - Initial | You are a purchasing manager. Write an email to our vendor about a late delivery that is impacting our production schedule. | Is the tone right? Does it state the problem clearly? Is it too aggressive or too passive? Does it say what you need from them? |
| 2 - Refine tone | The email is too formal. Make it more direct but keep it professional. We need them to commit to a delivery date by end of business today. | Does it include a clear deadline? Is the urgency felt without being hostile? Would you send this? |
| 3 - Add specifics | Add that this is the third late delivery in two months and that we will need to review our contract if this continues. | Does the new information change the tone appropriately? Is the escalation clear without being a legal threat? |
| 4 - Final polish | Tighten it to under 100 words. Remove anything that sounds like filler. | Is it concise? Every sentence pulling weight? Read it aloud - does it sound like you? |

<p>The shift in mindset: AI does not have to get it right the first time. You do not have to write the perfect prompt on the first try. What matters is that each cycle is intentional - you know what you are improving and why. That deliberateness is what separates a professional AI user from someone who just pastes in a task and hopes.</p>


<h4>When NOT to Use AI: The Professional Judgment Line</h4>

<p>The four techniques above make AI significantly more powerful. That makes it all the more important to be clear about where AI should not be the tool you reach for. Knowing this line is part of professional competence, not AI skepticism.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img5.png" | relative_url }})


| Situation where AI is a poor fit | Why it falls short | What to use instead (or alongside) |
| --- | --- | --- |
| Tasks requiring real-time or live data | LLMs have a training cutoff. They cannot tell you today's price, current inventory, live patient status, or breaking regulatory updates. | Your organization's live systems, databases, verified government websites, or real-time dashboards. Use AI to help you interpret data once you have it. |
| Physical judgment or hands-on assessment | AI cannot observe, touch, smell, or experience the physical world. It cannot assess a patient's skin color, the feel of a machine vibration, or whether a construction joint looks right. | Your own professional senses and training. AI can help you document or research after the physical assessment - not replace it. |
| Legal accountability and binding decisions | AI is not a licensed attorney, compliance officer, or certified professional. Output is not legally defensible and cannot substitute for professional review when legal liability is at stake. | A qualified professional for any decision with legal, regulatory, or contractual consequences. Use AI to draft or research, then have a professional review. |
| Highly confidential or personally identifiable information | Inputting protected health information, Social Security numbers, financial account details, or trade secrets into a public AI tool creates real privacy and compliance risk. | Your organization's approved internal AI tools (if any) or process the information manually. Know your organization's AI usage policy. |
| Situations requiring genuine human empathy or authority | A difficult termination conversation, a patient delivering bad news, a community leader addressing a crisis - these require a human presence, tone, and accountability that AI cannot replicate. | Your own professional judgment and interpersonal skill. AI can help you prepare talking points, but the conversation belongs to you. |

<p>The goal is not to avoid AI - it is to use it where it genuinely helps and step in yourself where it genuinely does not. That judgment is what employers are starting to look for in every field: not just 'can this person use AI' but 'does this person know when not to.'</p>


<div class="activity-card">


<h4>ACTIVITY: The Prompt Tournament</h4>


<h5 class="card-section-label">Purpose</h5>

<p>To see - with your own eyes, side by side - how each layer of prompting technique changes the quality, usability, and relevance of AI output. By the end of three rounds, you will have a concrete answer to: 'Which version of this output would I actually use at work?'</p>


<h5 class="card-section-label">Purpose</h5>

<p>To see - with your own eyes, side by side - how each layer of prompting technique changes the quality, usability, and relevance of AI output. By the end of three rounds, you will have a concrete answer to: 'Which version of this output would I actually use at work?'</p>

</div>


<h4>The Task</h4>

<p>You are going to prompt an AI tool to draft a professional response to an upset customer or client. Choose whichever version of this scenario fits your field best:</p>


| Healthcare / Social Services | Business / Logistics / Retail | Education / Community Services |
| --- | --- | --- |
| A patient or client is upset because they received a bill they did not expect. They have left an angry voicemail. You need to draft a written response. | A customer is angry about a delayed order or poor service. They have posted a negative review or sent a complaint email. You need to draft a professional response. | A parent or community member is upset about a decision or miscommunication. They have sent an angry email. You need to draft a response that de-escalates and invites dialogue. |


<h4>The Three Rounds</h4>

<p>Run all three rounds in the same chat session. Do NOT start a new conversation between rounds - the AI will build on the context. After each round, copy the output into the recording table below.</p>


<h4>Round 1: Round 1: Basic Prompt (No Framework)</h4>

<p>Just type a simple, natural request. Do not use RTCF. Do not add any structure. Write the kind of prompt you would have written before this course.</p>


| My prompt (write it here) | AI output (paste key phrases or summarize) |
| --- | --- |
|  |  |


<h4>Round 2: Round 2: Add RTCF</h4>

<p>Now write a new prompt for the same task using the full RTCF framework. Include a specific Role, a precise Task, relevant Context about the situation and audience, and your preferred Format.</p>


| My prompt (write it here) | AI output (paste key phrases or summarize) |
| --- | --- |
|  |  |


<h4>Round 3: Round 3: Add Few-Shot + Chain-of-Thought</h4>

<p>Build on your RTCF prompt. Add (a) one example of the tone and length you want - quote a sentence or two from a response you consider professional. Then add (b) 'Before writing, think step by step about what this customer needs to hear and why. Then write the response.'</p>


| My prompt (write it here) | AI output (paste key phrases or summarize) |
| --- | --- |
|  |  |


<h4>After All Three Rounds: Side-by-Side Evaluation</h4>

<p>Look at all three outputs. For each criterion below, circle which round produced the best result:</p>


| Evaluation criterion | Round 1 | Round 2 | Round 3 |
| --- | --- | --- | --- |
| Which output is closest to something I would actually send? | Circle: Yes / No | Circle: Yes / No | Circle: Yes / No |
| Which output best matches the tone for my field? | Circle: Yes / No | Circle: Yes / No | Circle: Yes / No |
| Which output requires the least editing? | Circle: Yes / No | Circle: Yes / No | Circle: Yes / No |
| Which output shows the most professional judgment? | Circle: Yes / No | Circle: Yes / No | Circle: Yes / No |

<p>Debrief Questions - group discussion</p>

<ul>
  <li>Which round produced something you would actually use at work - without major editing? What made it better?</li>
  <li>How much longer did it take to write the Round 3 prompt compared to Round 1? Was the extra time worth it?</li>
  <li>Is there a situation in your job where a basic prompt (Round 1) would be enough? What about a situation where Round 3 is worth the effort?</li>
  <li>What would you add to Round 3 to make it even better? What constraint or persona detail was missing?</li>
</ul>

<h4>Module Wrap-Up: What You Can Now Do</h4>


<h3>After completing this lesson and the Prompt Tournament activity, you should be able to:</h3>

<ul>
  <li>Use few-shot prompting by providing the AI with one or more examples of the format, tone, or structure you want before making your request.</li>
  <li>Apply chain-of-thought instruction to get the AI to reason through complex problems step by step before giving its final answer - producing more defensible, auditable output.</li>
  <li>Build persona + constraint prompts that define who the AI is writing as and set explicit boundaries on what it should always and never do.</li>
  <li>Practice iterative refinement by treating the AI conversation as a draft cycle, not a single transaction - improving each output with a targeted follow-up prompt.</li>
  <li>Identify situations where AI is the wrong tool - real-time data, physical judgment, legal accountability, sensitive confidential information, and high-stakes human conversations.</li>
</ul>
<p>You have moved from framework user to technique practitioner. Coming up next: Module 6 introduces Image AI - a completely different modality with its own prompting logic and workplace applications. The same critical-thinking habits you are building here apply directly.</p>


<h4>--- MODULE 6: Image AI: A Practical Intro ---</h4>


<h4>Image AI: A Practical Intro</h4>


<h4>Expanding the Toolkit Beyond Text - What Image AI Can Do at Work</h4>


<h4>Beyond Text: A New Modality in Your Toolkit</h4>

<p>Everything you have learned so far - RTCF, chain-of-thought, persona and constraint, iterative refinement - applies to text. Text is where most workplace AI value lives right now. But there is a second modality worth understanding, because it is already showing up in your field: image generation.</p>

<p>Image AI tools can create original visuals from a written description. Marketing teams use them to mock up campaigns in minutes. Healthcare educators use them to generate training diagrams without a graphic designer.</p>
<p>Logistics companies use them for safety signage. Construction firms use them for site layout visualizations. The technology is not perfect - and this module will be honest about what it cannot do - but it is real, it is accessible, and it is already part of professional workflows in every industry represented in this room.</p>

<p>This is brief introduction. You will learn how these tools work, where they fit in your work, which tools to use, what their limitations are, and how to write image prompts that actually produce useful results. Then you will generate one.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img6.png" | relative_url }})


<h3>Part 1: How Image Generation Models Actually Work</h3>

<p>You do not need to understand the mathematics. But knowing the basic mechanism helps you understand why these tools behave the way they do - why they sometimes produce brilliant results and why they sometimes produce a person with six fingers.</p>


<h4>How Diffusion Models Work - Plain English</h4>

<p>The short version: Image generation tools like Gemini, Adobe Firefly, and DALL-E are built on something called a diffusion model. During training, the model was shown millions of images - photographs, illustrations, diagrams, paintings - paired with text descriptions. It learned the statistical relationships between words and visual patterns.</p>

<p>When you type a prompt, the model does not search a database or paste images together. It starts with random visual noise - imagine static on a television screen - and then gradually refines that noise, guided by your text, until a coherent image emerges. Each refinement step moves the image closer to matching your description.</p>

<p>Why this matters for you: The model is generating something statistically plausible, not looking up the correct answer. This is why it can produce a stunning, photorealistic image of a hospital room but put the electrical outlets in the wrong place, or write text on a sign that looks like letters but spells nothing. It has learned what images look like, not what the world is actually like.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img7.png" | relative_url }})

<p>The implication for workplace use: image AI is a powerful drafting tool, not a production tool. It gets you to a starting point very quickly. A professional designer, educator, or subject matter expert still needs to review the output for accuracy, appropriateness, and quality before it goes anywhere important.</p>


<h3>Part 2: What Image AI Can Do at Work - By Industry</h3>

<p>Here is where image generation is showing up in professional settings today. This is not a future-forward prediction - these are current uses that workers in these fields are already experimenting with:</p>


| Field | Image AI use cases | Realistic time savings |
| --- | --- | --- |
| Healthcare & Patient Services | Patient education diagrams, anatomy illustrations, multilingual signage, training scenario visuals for staff | Eliminates hours of stock photo searching or waiting for a graphic designer. A training flyer that took 2 days now takes . |
| Logistics, Warehousing & Manufacturing | Safety procedure posters, equipment layout diagrams, hazard zone visualizations, onboarding visual guides | Safety signage that previously required a vendor can be mocked up in-house in under an hour - then refined with a designer. |
| Business Administration & Office Professionals | Presentation visuals, report infographics, professional headshots (with caveats), social media graphics for company pages | A professional-looking slide deck visual that would have required Shutterstock or a designer can be generated and customized in minutes. |
| Early Childhood & Education | Custom learning space illustrations, story visuals for student materials, parent newsletter headers, culturally inclusive imagery | Teachers can create visuals that reflect their specific student community instead of defaulting to generic stock images. |
| Retail, Marketing & Customer Service | Product mockup visuals, promotional flyer layouts, social media campaign images, seasonal graphics | Small businesses without design budgets can produce professional-looking marketing materials for pennies per image. |
| Construction, Trade & Technical Fields | Site layout visualizations, safety compliance posters, step-by-step procedure diagrams, equipment identification guides | Visual job aids that once required professional illustration can now be drafted quickly and handed to a designer for polish. |


<h3>Part 3: The Tools - A Brief Comparison</h3>

<p>You do not need to master every tool. You need to know which one fits your situation. Here is a practical comparison of the three tools you are most likely to encounter in a workplace context:</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img8.png" | relative_url }})


| Comparison point | Gemini Image Gen (Google) | Canva AI (Magic Studio) | Adobe Firefly |
| --- | --- | --- | --- |
| Best for | General workplace use; integrated with Google Docs, Gmail, and Slides; great starting point for most learners. Excellent text creation. | Non-technical users who want drag-and-drop design workflow alongside AI generation; excellent for flyers and presentations | High visual quality; best for marketing and professional materials; fully integrated into Adobe Creative Cloud |
| Ease of use | Easy. Available directly in the Gemini app and Google Workspace. No design experience needed. | Very easy. The most beginner-friendly option. Templates help you go from prompt to finished design quickly. | Moderate. More powerful but requires some familiarity with Adobe tools for best results. |
| Legal / copyright considerations | Images generated are available for personal and commercial use per Google's terms. Always check current policy. | Canva AI images are licensed for commercial use within Canva's terms. Read the pro vs. free tier differences. | Trained exclusively on Adobe Stock and openly licensed content. Currently the safest option for professional commercial use. |
| Free access? | Yes - available with a free Google account. Some advanced features require Gemini Advanced subscription. | Yes - free tier available. Some AI features require Canva Pro subscription (~$15/month). | Limited free tier available. Full access requires Adobe Creative Cloud subscription. |

<p>Instructor recommendation: For today's activity, use Gemini, Chat GPT (free, no download, works on phones) or Canva AI (free tier, most beginner-friendly). If students have Adobe accounts, Firefly is an excellent option. Avoid tools that require email sign-up during study time.</p>


<h3>Part 4: Key Limitations - Use Image AI Carefully</h3>

<p>Image AI is impressive and increasingly useful. It also has limitations that matter directly to professional use. These are not minor bugs to be patched - they are structural characteristics of how these models work. Understanding them is part of being a responsible, effective user.</p>

<p>Accuracy errors - the 'six fingers' problem</p>

<p>Image models are trained on patterns, not on ground truth about how the world works.</p>
<p>This means they can generate anatomically incorrect hands, text on signs that looks realistic but says nothing, architectural features that violate physics, and equipment that looks right but has the wrong number of parts or buttons. For workplace use, any image showing a procedure, a piece of equipment, or a physical space must be checked by someone who knows what correct looks like.</p>

<p>Professional guidance: Always have a subject-matter expert review any generated image that will be used in training materials, safety documentation, patient communications, or any context where accuracy directly affects people.</p>

<p>Bias in visual representation</p>

<p>Image models trained on internet data inherit the biases present in that data. This means: prompts for 'a doctor' may default to a specific demographic; prompts for 'a worker' in a given field may not reflect the diversity of your actual workforce; prompts for 'a family' may reflect cultural defaults that do not match your community. These defaults are not always obvious until you look critically.</p>

<p>Professional guidance: Be intentional and specific in your prompts about representation. If your workplace or community includes diverse people, describe that explicitly. Review generated images for stereotyping before using them professionally.</p>

<p>Legal and copyright uncertainty</p>

<p>The legal landscape around AI-generated images is actively evolving. Questions about copyright, ownership, and commercial licensing are being litigated in courts right now.</p>
<p>While tools like Adobe Firefly were trained on licensed content specifically to reduce legal risk, other tools have less clear provenance. Using AI-generated images in published marketing materials, commercial products, or official documents carries some legal uncertainty.</p>

<p>Professional guidance: For commercial or high-stakes professional use, Adobe Firefly is the lowest-risk option. For internal drafts, mockups, and non-commercial materials, most tools are fine. When in doubt, check your organization's policy and, for important materials, consult your legal or compliance team.</p>

<p>AI images cannot show your real situation</p>

<p>A generated image is always generic in some ways - it depicts a plausible version of something, not your specific workplace, your specific team, your specific product, or your specific patient. For materials that need to be specific - a safety poster for your actual facility layout, training materials featuring your actual equipment - AI-generated images are a starting point, not a finish line.</p>

<p>Professional guidance: Use AI images for drafting and mockups. For final materials that need to reflect specific real-world contexts, work with a photographer or designer to capture or customize the actual situation.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img9.png" | relative_url }})


<h3>Part 5: Prompting for Images - The Anatomy of a Good Image Prompt</h3>

<p>The same principles that make text prompts better - specificity, context, format - apply directly to image prompts. The difference is that the 'format' for images includes visual elements: style, composition, lighting, color, and medium.</p>

<p>Vague image prompts produce generic, often unusable results. Specific image prompts produce outputs that are much closer to what you actually need. Here is the structure to use:</p>


<h4>The Five-Part Image Prompt Formula</h4>


<h4>[Subject + Setting + Style + Mood/Tone + Format/Specs]</h4>

<p>Subject: Who or what is in the image. Be specific - not 'a worker' but 'a female warehouse supervisor in her 40s wearing a hard hat and safety vest, reviewing a clipboard'</p>

<p>Setting: Where the scene takes place and what surrounds the subject. Not 'a workplace' but 'a busy warehouse with shelving units and boxes in the background, natural daylight from overhead windows'</p>

<p>Style: The visual style you want. Options include: photorealistic, flat illustration, watercolor, infographic, technical diagram, professional photography, hand-drawn sketch, minimalist icon</p>

<p>Mood/Tone: The emotional quality and color feel. Options include: professional and calm, energetic and bright, warm and welcoming, clinical and clean, serious and authoritative</p>

<p>Format/Specs: Aspect ratio, orientation, or intended use. Options include: landscape 16:9 for a slide, square for social media, portrait for a flyer, white background for a logo, transparent background</p>

<p>Prompt Comparison: Vague vs. Specific</p>


| Vague prompt (weak results) | Specific prompt (usable results) |
| --- | --- |
| A nurse | A female nurse in her 30s with natural hair, wearing teal scrubs and a stethoscope, standing in a bright modern clinic hallway, smiling warmly at the camera, photorealistic professional photography style, natural lighting, 16:9 landscape orientation |
| Safety poster | A professional workplace safety poster showing a warehouse worker wearing full PPE (hard hat, safety vest, steel-toe boots, gloves), standing next to clearly labeled safety equipment. Bold header area at the top for text. Flat illustration style, high contrast colors, portrait orientation for printing |
| Training diagram | A clean step-by-step training diagram showing 4 numbered steps for a hand-washing procedure, each step illustrated with a simple clear icon showing hand position, minimalist infographic style, blue and white color scheme, horizontal layout for a printed handout |


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img10.png" | relative_url }})

<p>Quick tip: Start with your subject and style. If the result is not right, use iterative refinement just like you would with text - send a follow-up describing exactly what needs to change. Most image tools accept follow-up instructions in the same session. 'Make the background white.' 'Change her uniform to navy blue.' 'Remove the text from the sign.'</p>


<h4>Dig Deeper: Recommended Reading</h4>

<p>These sources will give you a deeper understanding of image AI capabilities, limitations, and responsible workplace use.</p>

<ul>
  <li>Canva: Canva AI Features and Magic Studio Overview - Canva's plain-English explanation of its AI image generation tools. Great starting point for students who want the most accessible entry into image AI.</li>
  <li>Colombia University: AI for Beginners: Getting Started with AI Image Generators - MIT's examination of the ethical and legal complexities of AI-generated images - copyright, artist rights, and what 'training data' actually means for creators.</li>
  <li>Harvard Business Review: Generative AI Has an Intellectual Property Problem - HBR's clear-eyed look at the legal risks of using AI-generated images commercially. Important context for any professional planning to use image AI in their work.</li>
</ul>

<div class="activity-card">


<h4>ACTIVITY: Generate for Your Field</h4>


<h5 class="card-section-label">Purpose</h5>

<p>To move from understanding image AI to actually using it - generating one work-relevant image, evaluating it honestly, and building the habit of critical assessment before any AI-generated visual is used professionally.</p>


<h5 class="card-section-label">Purpose</h5>

<p>To move from understanding image AI to actually using it - generating one work-relevant image, evaluating it honestly, and building the habit of critical assessment before any AI-generated visual is used professionally.</p>

</div>


<h4>Your Task</h4>

<p>Generate one image that is relevant to your trade, vocational program, or current job. Choose one of the following formats - pick the one that would save you the most time or effort in your real work:</p>


| Training diagram | Workplace flyer or poster | Product or service mockup | Presentation visual / slide image |
| --- | --- | --- | --- |
| A step-by-step visual guide, safety procedure, or labeled diagram for your field | An announcement, safety notice, or promotional flyer for your workplace or program | A visual mockup of a product, service, or space relevant to your industry | A professional image for a slide deck, report, or presentation you might actually give |


<h4>Beginner Path: Use This Template Prompt</h4>

<p>Fill in the brackets below, then copy and paste the completed prompt into Gemini or Canva AI:</p>

<p>"A [photorealistic / flat illustration / professional diagram] showing [describe what you want to show] in a [describe the setting or context]. The image should feel [professional / warm / clinical / energetic]. [Portrait / Landscape / Square] orientation, suitable for [a training handout / a workplace poster / a presentation slide]."</p>

<p>Example (completed): "A flat illustration showing a warehouse worker in full PPE checking items against a clipboard, with shelving units in the background. The image should feel professional and clear. Landscape orientation, suitable for a training handout."</p>


<h4>Advanced Path: Write From Scratch and Try Two Style Variations</h4>

<p>Write your own image prompt using the five-part formula (Subject + Setting + Style + Mood + Format). Then generate it twice with different style descriptors and compare the results:</p>

<p>Version A: use 'photorealistic professional photography style'</p>

<p>Version B: use 'clean flat illustration style, minimal color palette'</p>

<p>Challenge question: Which version would you actually use for your specific purpose - and why? There is no universally correct answer. The right style depends on your audience, your context, and what the image needs to communicate.</p>


<h4>Critique Your Output - Record Your Assessment</h4>

<p>After generating your image, answer these questions honestly. This is the professional habit that separates an AI user from an AI-dependent user:</p>


| Critique question | Your assessment |
| --- | --- |
| Is it accurate? Does anything look physically wrong, anatomically incorrect, or technically off for your field? |  |
| Is it usable as-is, or does it need editing? What specifically would you change? |  |
| Would you actually use this at work - as a draft, a mockup, or a final product? |  |
| How long did it take to generate vs. how long would it take to create from scratch or find a stock image? |  |
| Are there any bias, representation, or appropriateness concerns for your specific audience? |  |

<p>Debrief Questions - group discussion</p>

<ul>
  <li>Who got a result they would actually use at work right away? What made your prompt work?</li>
  <li>Who got a result that missed the mark? What would you change in the prompt to fix it?</li>
  <li>Was there anything in the generated image that was inaccurate for your specific field? What was it?</li>
  <li>How does generating an image with AI compare to searching for stock photos or asking a colleague with design skills?</li>
</ul>

<h4>Module Wrap-Up: What You Can Now Do</h4>


<h3>After completing this lesson and the Generate for Your Field activity, you should be able to:</h3>

<ul>
  <li>Explain in plain terms how diffusion-based image generation models work - and why they produce confident-but-sometimes-wrong results.</li>
  <li>Identify at least three specific workplace use cases for image AI that apply to your field.</li>
  <li>Compare the three main workplace image tools - Gemini, Canva AI, and Adobe Firefly - and choose the right one for a given situation.</li>
  <li>Recognize the four key limitations of AI-generated images: accuracy errors, bias, legal uncertainty, and lack of real-world specificity.</li>
  <li>Write a specific image prompt using the five-part formula (Subject + Setting + Style + Mood + Format) and refine it iteratively.</li>
  <li>Evaluate an AI-generated image critically before using it professionally - checking for accuracy, representation, usability, and legal appropriateness.</li>
</ul>
<p>Coming up after the break: the Anchor Activity - the centerpiece of This course. You will put everything from both days together in a structured, field-specific AI audit of your own work. Bring your in this lesson notes.</p>


<h4>BONUS SKILL PREVIEW</h4>

<p>Audio AI & Chain-of-Thought Reasoning  |  This course, in this lesson  |</p>


<h4>What This Bonus Preview Covers</h4>

<p>The final  of This course is a forward-looking glimpse at two powerful AI capabilities you have not yet explored: Audio AI tools and Chain-of-Thought (CoT) reasoning. This preview is intentionally brief - you will go deeper in this course and 3. in this session, the goal is simple: expand your sense of what is possible.</p>

<p>You do not need to master these tools right now. You need to walk away thinking: 'That is something I could actually use.' If any of in this session's demonstrations spark a question or a use case in your field, write it down - your curiosity is exactly the fuel that makes This course powerful.</p>


<h3>Part 1: Audio AI - Transcription, Voice, and Meeting Intelligence</h3>

<p>Audio AI is a category of tools that work with spoken language rather than typed text. These tools can transcribe speech to text, summarize spoken conversations, generate realistic synthetic voices, and extract action items from meetings - all automatically.</p>


<h4>What Audio AI Can Do For You</h4>

<p>Transcription: Convert recorded speech - meetings, lectures, client calls, site walkthroughs - into searchable, editable text within minutes.</p>

<p>Meeting summarization: Automatically generate a summary, key decisions, and action items from any meeting recording.</p>

<p>Voice synthesis: Generate realistic human-sounding voice narration from text - used in training videos, product demos, and accessibility tools.</p>

<p>Real-time transcription: Caption live conversations or interviews as they happen, removing the need for manual note-taking.</p>


<h4>Three Tools Worth Knowing</h4>


| Tool | Primary Use Case | Field Relevance Examples |
| --- | --- | --- |
| Otter.ai | Transcribes meetings and generates summaries and action item lists automatically | Healthcare: transcribe patient intake conversations. Education: capture lecture notes. Business: document client meetings. |
| ElevenLabs | Generates realistic synthetic voice narration from any written text | Create narrated training videos, client-facing product demos, or accessible audio versions of written materials. |
| Microsoft Copilot (Teams) | Integrated AI meeting assistant - live transcription, summaries, follow-up emails, inside Microsoft 365 | Any field using Teams: automatically summarized meetings, action items sent to participants, searchable meeting archive. |


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img11.png" | relative_url }})


<h4>Live Demonstration: Otter.ai Transcription</h4>


<h4>Instructor Demo</h4>

<p>Speak aloud for 60-90 seconds on a workplace scenario relevant to your students' fields (e.g., a mock client consultation, a brief site safety briefing, a customer service interaction). Let Otter.ai transcribe it live on the projected screen.</p>

<p>After the recording, show the generated summary and highlight:</p>

<ul>
  <li>The accuracy of the transcription (including any errors - this is a teaching moment)</li>
  <li>The auto-generated summary paragraph</li>
  <li>The action items list</li>
</ul>
<p>Discussion prompt : "In your field, what conversation or meeting would be most valuable to have an automatic record of?"</p>


<div class="tip-card">


<h4>Quick Note: AI Voice Synthesis</h4>

<p>Voice synthesis tools like ElevenLabs can generate speech that is nearly indistinguishable from a real human voice. This has powerful legitimate applications: accessibility tools, training video narration, multilingual content creation.</p>

<p>It also introduces a responsibility: synthesized voice can be used to create deceptive audio. Always ask yourself - and your students - 'Is this voice real?' before sharing or acting on audio content you did not personally record.</p>

</div>


<h3>Part 2: Chain-of-Thought (CoT) Reasoning - Watching AI Think</h3>

<p>In Module 5, you learned that AI generates responses by predicting likely next words based on patterns. Chain-of-Thought (CoT) reasoning is a technique - and increasingly a built-in capability - that pushes AI models to show their reasoning step by step before giving a final answer.</p>

<p>Think of it this way: instead of just telling you the answer, a CoT-enabled AI shows its work. This makes the reasoning process visible, checkable, and much more reliable for complex multi-step problems.</p>


<h4>Chain-of-Thought in Plain Language</h4>

<ul>
  <li>Standard AI response: You ask a question → AI gives you an answer. No explanation of how it got there.</li>
  <li>Chain-of-Thought response: You ask a question → AI works through the problem step by step, showing intermediate reasoning → then gives a final answer.</li>
</ul>

<h4>How to Trigger Chain-of-Thought Reasoning</h4>


<h4>Prompting Strategies That Activate CoT</h4>

<p>Add 'think step by step' to any prompt: "Analyze this client complaint and think step by step about the most likely causes and appropriate responses."</p>

<p>Ask for a reasoning process: "Walk me through your reasoning before giving your final answer."</p>

<p>Request explicit steps: "List the steps you would follow to diagnose this issue, then give your recommendation at the end."</p>

<p>Use reasoning models: OpenAI's o1/o3 models and Claude's extended thinking mode are purpose-built for multi-step reasoning and show their work by design.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img12.png" | relative_url }})


<h4>Live CoT Demo: Student Observation Sheet</h4>

<p>the guide will now run a live Chain-of-Thought demonstration using ChatGPT or Claude on a workplace problem relevant to your field. Use the observation sheet below to capture what you notice. You will use your observations in a brief discussion.</p>


<h4>Observation Sheet - CoT Live Demo</h4>

<ol>
  <li>The prompt the instructor used (write it below):</li>
  <li>What steps did the AI work through? List 2-3 things it reasoned about:</li>
  <li>Did the AI's reasoning seem accurate and trustworthy? What would you verify?</li>
  <li>Name one decision or problem in your field where step-by-step AI reasoning could be useful:</li>
</ol>

<h4>Want to Go Deeper? Further Reading & Resources</h4>


<h4>Credible Sources for Continued Learning</h4>

<p>Audio AI & Meeting Intelligence:</p>

<ul>
  <li>Microsoft Work Trend Index (microsoft.com/worklab) - annual research on how AI tools like Copilot are affecting meeting productivity and collaboration.</li>
</ul>
<p>Chain-of-Thought Reasoning:</p>

<ul>
  <li>Anthropic Research Blog (anthropic.com) - "Claude's Extended Thinking" - explains how step-by-step reasoning improves reliability on complex tasks.</li>
  <li>Google DeepMind Blog (deepmind.google) - "Chain of Thought Prompting Elicits Reasoning in Large Language Models" - the foundational research paper made accessible.</li>
</ul>

<h4>Instructor Notes: Running This Segment</h4>


<h4>Pacing and Facilitation</h4>

<p>Timing: This is a 20-minute segment -  Audio AI,  CoT. Do not let this expand. Students are likely fatigued at . Keep energy high through live demonstration rather than slides.</p>

<p>Audio AI demo tip: Pre-load Otter.ai and have a 60-second script ready. If live Otter.ai demo has technical issues, show a pre-recorded screenshot sequence instead. The key is students seeing an actual transcription and summary - not a PowerPoint description of one.</p>

<p>CoT demo tip: Use a real workplace prompt with enough complexity to show multiple reasoning steps. Example: 'I am a medical office assistant and a patient is upset because they received a bill they don't understand. Think step by step about what I should do.' Watch the AI work through it aloud with your students.</p>

<p>Observation sheet: Students do NOT submit this. It is a structured attention-focusing tool. After the CoT demo, briefly ask 2-3 students to share what they wrote for question 4 - this is your bridge into This course.</p>


<h4>- End of Bonus Skill Preview: Audio AI & Chain-of-Thought Reasoning -</h4>

<p>This course CLOSE & This course PREVIEW</p>


<h3>Part 1: AI Word Association Revisit</h3>

<p>At the start of This course, in this lesson, you contributed words which represented your initial associations with AI before any instruction. You have spent the past two days learning what AI actually is, how to prompt it, how to identify opportunities, how to catch its errors, and how to approach it as a critical thinking tool.</p>

<p>Now it is time to look at what you wrote one more time not to erase it, but to see how your thinking has evolved.</p>

<p>Word Wall Final Reflection - group discussion</p>

<p>Instructor: Display or refer to the original Word Wall from in this lesson. Give students 60 seconds of quiet thinking time, then open the floor.</p>

<p>Prompt 1: "Look at the words you added at the beginning of This course. Which one would you add a footnote to now - something you would want to add or change?"</p>

<p>Prompt 2: "Is there a word on this wall that belongs on the wall from This course that nobody put up? What did we miss?"</p>

<p>Prompt 3 (for energy): "What is one word you would add RIGHT NOW that wasn't there before?" - Invite 3-4 students to physically add a word.</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-04-img13.png" | relative_url }})

<p>Complete this sentence:</p>

<p>"AI can help someone in my field by _____________________________________________, and I plan to try it by ___________________"</p>


| Name: ___________________________________ | Field / Trade: ___________________________ |
| --- | --- |

<p>Be specific, not general: "AI can help someone in my field by drafting follow-up emails after client consultations" is strong. "AI can help with writing" is too vague.</p>

<p>Set a real deadline: The second blank is a date - not 'someday.' Write an actual date within the next 7 days. Make it real.</p>


<h3>Part 3: Between-Session Challenge</h3>

<p>Between This course and This course, you have one challenge. This is not a independent practice assignment - it is an experiment. You are a researcher, and your workplace or training program is your lab.</p>

<p>Your This course-to-This course Challenge</p>

<p>The Challenge:</p>

<p>What to bring to This course:</p>

<ul>
  <li>A screenshot of your AI output - or written notes if screenshots are not possible</li>
  <li>One thing that surprised you - good or bad</li>
  <li>One question the experiment raised that you want to dig into in this course</li>
</ul>

<h4>You Are the Expert on Your Field - Not the AI</h4>

<p>When you test AI on a real task from your field, you are doing something no textbook can do: you are evaluating AI against the actual standard of your professional knowledge. You know what a correct answer looks like. The AI does not.</p>

<p>Your job is not to be impressed by AI. Your job is to decide whether it earns a place in your workflow. That is an expert judgment - and only you can make it.</p>

<p>in this lesson Quick Reference  |</p>

<p>📖  in this lesson KEY TERMS & DEFINITIONS</p>


| Few-Shot Prompting | Giving the AI 2-3 examples of the output you want before making your real request. The AI learns your intended pattern and replicates it. |
| --- | --- |
| Zero-Shot Prompting | Asking the AI to complete a task with no examples - just a direct instruction. Faster but less precise than few-shot. |
| Chain-of-Thought (CoT) | A technique that prompts AI to show its reasoning step by step before giving a final answer. Improves accuracy on complex tasks. |
| Persona + Constraint | Combining a specific expert role with explicit rules about what the AI should NOT do (no jargon, under 100 words, avoid X). Narrows the output to exactly what you need. |
| Iterative Refinement | Treating AI as a conversation - following up with 'make this shorter,' 'change the tone,' 'add a section on X.' First output is rarely final. |
| Text-to-Image AI | AI tools that generate images from a written text description. They use diffusion models - starting with random noise and sculpting it using your prompt. |
| Image Prompt | The text description you write to generate an image. Effective image prompts specify: subject, setting, lighting, style, mood, and composition. |
| Audio AI | AI tools that process spoken language - transcribing recordings to text, generating synthetic voice narration, or summarizing meetings automatically. |
| Transcription | Converting spoken audio to written text automatically. Tools like Otter.ai can transcribe a meeting and generate a summary in minutes. |
| Trust Assessment | Your professional judgment about whether an AI output is accurate enough, appropriate enough, and specific enough to use in your work. |


<h4>✍️  ADVANCED PROMPTING TECHNIQUES  (Building on RTCF)</h4>


| FEW-SHOT PROMPTING <br> Use when: you need consistent format, tone, or style; when zero-shot keeps giving generic results; when your field has a specific way things must be written. <br> Example prompt structure: <br> "Here are two examples of how I write safety briefing summaries: [Example 1] [Example 2]. Now write a safety briefing summary for today's rooftop work order." | CHAIN-OF-THOUGHT (CoT) <br> Use when: the task involves multiple steps or complex reasoning; when you need to verify the AI's logic before trusting the conclusion; for analysis, diagnoses, or decisions. <br> Add these phrases to any prompt: <br> "Think step by step before answering."  /  "Walk me through your reasoning."  /  "Show your work, then give your final answer." |
| --- | --- |
| PERSONA + CONSTRAINT <br> Use when: default output is too generic, too long, or uses wrong vocabulary; when you need the AI to write in a specific professional register; when you want tight format control. <br> Example prompt structure: <br> "You are a certified HVAC technician writing for a homeowner with no technical knowledge. Explain what a refrigerant leak means. Use no jargon. Maximum 5 sentences. Do not recommend a DIY fix." | ITERATIVE REFINEMENT <br> Use when: the first output is close but not quite right; when you want to improve one specific part without redoing the whole prompt; this is standard professional AI workflow. <br> Follow-up prompt patterns: <br> "Make the second paragraph shorter."  /  "Change the tone to be more formal."  /  "Add a section about [X]."  /  "Redo only the opening sentence."  /  "Remove all bullet points." |


<h4>COMBINING TECHNIQUES - Full Example (Healthcare Context)</h4>

<p>FEW-SHOT + PERSONA + CONSTRAINT:</p>

<p>"You are a medical office administrator writing for patients with limited health literacy [Persona]. Do not use clinical abbreviations [Constraint]. Here are two examples of how I explain billing notices: [Example 1: Dear Mr. Reyes, your insurance covered most of your visit.</p>
<p>The remaining $45 is your copay. Please call us at 555-0100 if you have questions.] [Example 2: Dear Ms. Park, we received a payment of $120 from your insurance. Your balance of $30 is due by the 15th.] [Few-Shot] Now write a notice for a patient who owes $75 after insurance, with a payment due date of June 30."</p>

<p>in this lesson Quick Reference  -  Page 2 of 2</p>


<h4>🖼️  IMAGE AI - TOOLS, PROMPTS & PROFESSIONAL USE</h4>


| GEMINI (Google) <br> gemini.google.com <br> Fast generation, integrated with Google Workspace. Best for: quick concept images, presentations, brainstorming visuals. <br> ✅ Free tier available <br> ⚠️ Review terms for commercial use | CANVA AI <br> canva.com <br> Design-focused generation inside templates. Best for: social media, marketing materials, professional layouts, branded content. <br> ✅ Integrates with Canva designs <br> ✅ Good for non-designers | ADOBE FIREFLY <br> firefly.adobe.com <br> Trained on licensed Adobe Stock content. Best for: commercial work, client-facing materials, legally safer use cases. <br> ✅ Commercially safest option <br> ✅ Attribution-clear content |
| --- | --- | --- |


<h4>IMAGE PROMPT ANATOMY - The 6 Elements</h4>


| SUBJECT <br> Who or what is the main focus? <br> "A female electrician in her 30s" | SETTING <br> Where is the scene taking place? <br> "Inside a commercial server room" | LIGHTING <br> What is the quality of light? <br> "Soft overhead fluorescent light" |
| --- | --- | --- |
| STYLE <br> Photo, illustration, diagram, painting? <br> "Photorealistic, professional photography" | MOOD <br> What feeling should the image convey? <br> "Focused, competent, calm" | COMPOSITION <br> Angle, framing, distance from subject? <br> "Medium shot, eye-level angle" |


<h4>FULL IMAGE PROMPT EXAMPLE</h4>

<p>"A female electrician in her 30s [Subject] working inside a commercial server room [Setting], soft overhead fluorescent light [Lighting], photorealistic professional photography style [Style], focused and competent expression [Mood], medium shot at eye-level [Composition]."</p>

<ul>
  <li>Compare:  'an electrician at work'  →  generic stock photo result  vs.  the prompt above  →  specific, usable professional image</li>
</ul>

<h4>🎙️  AUDIO AI TOOLS - QUICK REFERENCE</h4>


| TOOL | WHAT IT DOES | BEST FOR IN YOUR FIELD |
| --- | --- | --- |
| Otter.ai <br> otter.ai | Transcribes meetings and recordings in real time. Auto-generates summary, key points, and action items. | Any field with client meetings, team calls, interviews, or site walkthroughs needing a written record. |
| ElevenLabs <br> eighttenlabs.io | Generates realistic synthetic voice narration from any written text - multiple voices and languages. | Creating training video narration, multilingual client materials, accessible audio versions of written documents. |
| Microsoft Copilot <br> (Teams/M365) | Integrated meeting AI - live transcription, auto-summary, follow-up emails, searchable meeting archive inside Microsoft 365. | Any workplace already using Microsoft Teams: automated post-meeting summaries sent directly to all participants. |


| ⚖️  TRUST ASSESSMENT FRAMEWORK <br> □  Is this output accurate? (Did I verify the key facts independently?) <br> □  Is this output appropriate? (Right tone, format, and audience?) <br> □  Is this output complete? (Does it cover everything it needs to?) <br> □  Is this output mine? (Did I review, edit, and own this output?) <br> □  What happens if this is wrong? (What is my professional exposure?) <br> If you would not sign your name to it → verify before using. |  | 🧠  CHAIN-OF-THOUGHT TRIGGERS <br> "Think step by step before answering."  - general purpose <br> "Walk me through your reasoning."  - for analysis or decisions <br> "Show your work, then give your final answer."  - for calculations or diagnoses <br> "List the steps you would follow before giving your recommendation."  - for processes <br> "What could go wrong with this approach? Reason through it."  - for risk assessment <br> Use CoT whenever errors in reasoning would be costly. | 🧠  CHAIN-OF-THOUGHT TRIGGERS <br> "Think step by step before answering."  - general purpose <br> "Walk me through your reasoning."  - for analysis or decisions <br> "Show your work, then give your final answer."  - for calculations or diagnoses <br> "List the steps you would follow before giving your recommendation."  - for processes <br> "What could go wrong with this approach? Reason through it."  - for risk assessment <br> Use CoT whenever errors in reasoning would be costly. |
| --- | --- | --- | --- |
|  |  |  |

<p class="standout-question">🔀  WHICH TECHNIQUE SHOULD I USE?</p>

| SITUATION | BEST TECHNIQUE | WHY IT WORKS |
| --- | --- | --- |
| I need output that matches my exact format every time | Few-shot prompting | You show the pattern; AI replicates it reliably |
| The task is complex and I need to check the reasoning | Chain-of-thought | Errors become visible before they affect your work |
| Output keeps being too generic or too long | Persona + constraint | Role narrows the context; constraints cut the noise |
| The first draft was close but needs tweaking | Iterative refinement | Follow-up prompts fix specific problems without starting over |
