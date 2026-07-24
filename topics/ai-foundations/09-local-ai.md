---
layout: lesson
title: "Local AI vs. Hosted Workflows"
topic: "ai-foundations"
last_updated: 2026-07-02
---

<p>A later module -- in this lesson</p>


<h4>Hands On, Speak Up, and Move Forward</h4>

<p>Local AI vs. Hosted AI, Exploration Time, and Your Final Presentation</p>


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-09-img1.png" | relative_url }})

<p>Lesson 1</p>

<p>Local AI vs. Hosted AI: What You Need to Know</p>

<p>Every AI tool you use falls into one of two categories: it either runs on someone else's computer (hosted) or it runs on your own computer (local). Most people use hosted AI every day without realizing it.</p>
<p>Local AI is newer, less common, and comes with very different rules about privacy, cost, and capability. Understanding the difference matters -- especially if you work with sensitive information.</p>


<h4>Definition: Hosted AI</h4>

<p>AI that runs on a company's servers and that you access through a website or app. When you use ChatGPT, Gemini, Claude, Grok, or Microsoft Copilot, you are using hosted AI. Your prompts and data travel over the internet to the company's computers, the AI processes them there, and the response comes back to your screen. You do not need a powerful computer all the heavy work happens on their end.</p>


<h4>Definition: Local AI</h4>

<p>AI that runs entirely on your own computer, with no internet connection required. The AI model is downloaded and stored on your hard drive. When you send a prompt, it is processed right on your machine and the response comes back without any data ever leaving your device. This requires a computer with enough power to run the model we will cover what that means shortly.</p>


<h4>Privacy: The Biggest Practical Difference</h4>

<p>The most important difference between local and hosted AI especially for your job is what happens to the information you type into it.</p>


| Question | Hosted AI | Local AI |
| --- | --- | --- |
| Where does my data go? | Your prompt is sent to the AI company's servers. Your logs are saved even if you do not want them to. This is for legal reasons. Your chats may be stored and used to improve their model if you allow it. | Nowhere. Your data never leaves your computer. It is processed locally and stays on your device. Your chats are private. |
| Can my employer or a client see what I type? | Possibly if your company uses an enterprise version i.e. Copilot, admins will likely have access to logs. Free consumer versions vary by provider. | No. Nothing is transmitted. Only someone with physical access to your computer could see your prompts. If you are logged into company software like Copilot there may be some potential spying. |
| Is it safe for sensitive information like patient data or financial records? | Generally not recommended without an enterprise contract and data processing agreement. Consumer versions of hosted AI should never receive confidential client data. | Yes -- this is one of the main reasons people run local AI. Sensitive data stays on your machine and is never exposed to a third party. |

<p>Important -- Free vs. Enterprise AI Accounts</p>

<p>Free accounts on tools like ChatGPT, Gemini, and Claude are consumer products. The companies that make them may use your conversations to improve their models.</p>
<p>Never type patient names, social security numbers, client financial details, student records, or any other confidential information into a free consumer AI account. Enterprise and business accounts have different terms that typically prohibit data training -- but always read the policy before you type anything sensitive.</p>

<p class="standout-question">What Does It Take to Run Local AI?</p>
<p>Running AI locally means your computer does all the work. Think of it like the difference between streaming a movie from Netflix (hosted) versus playing a video game stored on your computer (local). The game requires a machine powerful enough to run it. Local AI is the same. Here is what the key terms mean:</p>


<h4>Definition: VRAM (Video Random Access Memory)</h4>

<p>RAM is your computer's short-term memory the space it uses to hold information it is actively working with. Running a local AI model requires significant RAM. Think of it like this: a small model might need 8 GB of RAM to run comfortably, while a larger, more capable model might need 32 GB or more. Most everyday laptops have 8--16 GB of RAM, which is enough to run smaller local models.</p>


<h4>Definition: GPU (Graphics Processing Unit)</h4>

<p>A GPU is a specialized chip originally designed for video games and graphics. It turns out that the same kind of math GPUs are great at is exactly what AI models need. Running local AI with a dedicated GPU (like those made by NVIDIA) is much faster than relying on your CPU alone. A good GPU can make the difference between a response that takes 30 seconds and one that takes 2 seconds.</p>


<h4>Definition: Storage (Hard Drive or SSD)</h4>

<p>AI model files are large. A small local model might be 4--8 GB in size. Larger models can be 20--70 GB or more. You need enough free storage on your computer to download and store the model file. An SSD (Solid State Drive) or an NVME SSD (Non-Volatile Memory Express) drive is faster than a traditional hard drive and makes loading models quicker.</p>


<h4>Definition: CPU (Central Processing Unit)</h4>

<p class="standout-question">Model Size: What Does 3B vs. 30B Actually Mean?</p>

| Model Size | What It Is Good At | Limitations | Hardware Needed |
| --- | --- | --- | --- |
| 3B (3 billion parameters) | Simple tasks: answering basic questions, summarizing short documents, casual conversation, basic writing assistance. | Struggles with complex reasoning, multi-step instructions, or tasks requiring deep expertise. May make more factual errors. | Can run on most modern laptops with 8 GB of RAM. No GPU required. |
| 7B (7 billion parameters) | A solid everyday model. Good for drafting emails, summarizing documents, basic coding help, and most workplace writing tasks. | Still limited on highly technical or specialized topics. Slower without a GPU. | 8--16 GB RAM recommended. Runs better with a GPU with adequate VRAM but can work on CPU. |
| 13B to 30B (13 to 30 billion parameters) | Noticeably smarter. Better at following complex instructions, writing longer content accurately, reasoning through problems. | Requires more powerful hardware. Response times will be slow without a dedicated GPU or unified memory. | 16--32 GB RAM. A dedicated GPU (8 GB VRAM or more) strongly recommended depending on parameter size. |
| 70B and above | Approaches the quality of hosted models like GPT-4. Excellent at reasoning, analysis, and complex professional tasks. | Requires very powerful hardware that most people do not have at home. Unified memory is making this possible now. Expensive to run locally. | 64 GB RAM or more. High-end GPU (24 GB+ VRAM) essentially required. Remember that Windows uses some of this for its processes. |


![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-09-img2.png" | relative_url }})

<p>Local vs. Hosted AI: Pros and Cons at a Glance</p>


|  | LOCAL AI | HOSTED AI |
| --- | --- | --- |
| Privacy | STRONG -- data never leaves your device. Ideal for sensitive or confidential work. | Free accounts may use your data for training. Enterprise accounts offer stronger protections but ultimately you are giving your data to a host and your data is up for legal discovery and trade secrets are not protected as AI is a third party. |
| Cost | Free after setup. No monthly subscription. You pay for hardware once. | Free tiers available but limited. More powerful features usually require a monthly subscription ($20--$200+/month). |
| Internet Required | No. Works completely offline once the model is downloaded. You can enable web search for grounding however. | Yes. No internet means no access. |
| Ease of Setup | More technical to set up. Requires downloading software and model files. Not plug-and-play for beginners. Very sensitive and can break leading to difficult recoveries. Works better on Linux usually. | Very easy. Go to a website, create an account, start typing. No installation needed. |
| Capability | Depends on model size and your hardware. Smaller models are less capable than top hosted models. Very consistent quality no one can change your settings once you download the model other than you. | Access to models with the highest theoretical potential available (GPT-4, Gemini Ultra, Claude Opus). Quality can vary depending on if the host infrastructure is spread too thin or settings that you do not have control over. |
| Updates | Manual. You download new model versions when you choose to update. | Automatic. The company updates the model and you always get the latest version that your paid level allows for. |
| Best For | Privacy-sensitive work, professionals handling confidential data, people who want full control over their AI. | Great for beginners and most enterprise use. Most everyday workplace tasks, people new to AI, teams that need high-quality output without setup or a high powered computer. |

<p>Lesson 3</p>


<h4>Hands-On Exploration Time</h4>

<p>This is your time to try things. The goal is not to produce a perfect result the goal is to get comfortable with the tools by actually using them. The best way to learn AI tools is to use them, make mistakes, adjust your prompt, and try again. That process is the skill.</p>


<h4>How to Use This Time</h4>

<p>You have three options for how to spend this exploration time. Pick the one that fits where you are:</p>


| Option 1 -- Try the prompts below | If you are not sure where to start, use the guided prompts on the next page. They are designed for your specific field and will walk you through a real task step by step. |
| --- | --- |
| Option 2 -- Work on your own AI task | If you already know what you want to do, spend this time actually building or testing your AI workflow from your discussion post. Bring your questions and share what you are finding. |
| Option 3 -- Explore a tool from in this lesson | Go back to the in this lesson guide, find a tool from your field you want to try, and spend this time experimenting with it. If it has a free version or trial, jump in. |


<h4>Guided Prompts -- Try These in ChatGPT, Gemini, or Claude</h4>

<p>Each prompt below is designed for a specific vocation. Find your field and try the prompt exactly as written first -- then adjust it based on what you see. When you adjust a prompt and get a better result, that is you learning prompt engineering in real time.</p>

<p>How to try a prompt:</p>

<ul>
  <li>Go to chat.openai.com, gemini.google.com, or claude.ai and sign in (or create a free account).</li>
  <li>Click the message box at the bottom of the screen.</li>
  <li>Type or paste the prompt below exactly as written.</li>
  <li>Press Enter or click the send button.</li>
  <li>Read the response. If it is not quite right, try changing one part of the prompt and sending again.</li>
</ul>

<h4>Entrepreneur / Small Business Owner</h4>

<p>I run a small [type of business -- for example: catering company, cleaning service, online boutique]. Write me a short professional email to send to a potential client who contacted me last week but has not replied to my follow-up. Keep it friendly, not pushy, and under 100 words.</p>

<p>Accounting</p>

<p>Explain accounts payable and accounts receivable to me like I am explaining it to a new employee who has never worked in finance before. Use a simple real-life example.</p>


<h4>Real Estate</h4>

<p>Research current listing creation rules with CRMLS and write a property listing public description for a 3-bedroom, 2-bathroom home in a quiet neighborhood. The home has a newly remodeled kitchen, a large backyard with a patio, and an attached two-car garage. Write it in a warm, inviting tone for a family buyer and ensure that you do not break any property listing public description rules.</p>


<h4>Interior Design</h4>

<p>I have a client who wants to redesign their living room. The space is 400 square feet, gets natural light in the afternoon, and the client likes a modern minimalist style with warm tones. Give me five design concept ideas I can present to them, including furniture suggestions and a color palette for each.</p>


<h4>Floral Design</h4>

<p>Write a wedding floral proposal email to a client who wants a garden-style wedding with soft pinks, whites, and greens. The wedding has 150 guests, an outdoor ceremony, and a seated dinner reception. Include a brief description of the bridal bouquet, ceremony arch, and centerpieces.</p>


<h4>CNA / Nursing</h4>

<p>Explain what the SBAR communication method is and give me an example of how a CNA would use it to report a patient concern to a nurse. Make the explanation simple enough for a first-week CNA.</p>


<h4>Pharmacy Tech</h4>

<p>A customer comes in and says their medication is not working the way they expected. What questions should a pharmacy technician ask before escalating to the pharmacist? Give me a list of five appropriate questions.</p>


<h4>Customer Service</h4>

<p>Write a professional response to this customer complaint: 'I ordered a product two weeks ago and it still has not arrived. Your tracking link does not work and no one has responded to my emails. This is unacceptable.' The response should apologize sincerely, acknowledge the issue, and offer a clear next step.</p>

<p>Sales</p>

<p>I sell [type of product or service -- for example: software subscriptions, office furniture, insurance]. A potential client told me they are interested but the price is too high. Give me three responses I could use to address this objection without immediately discounting my price.</p>

<p>Education</p>

<p>I am a teacher preparing a lesson on [topic -- for example: fractions, the water cycle, the Civil War]. Give me a five-minute warm-up activity I can use at the start of class to get students thinking about the topic before I introduce new material.</p>


<h4>Behavioral Specialist</h4>

<p>A student in a learning space is frequently leaving their seat, interrupting lessons, and having difficulty staying on task. Write three possible positive behavior intervention strategies I can present to the learning space teacher. Use simple, practical language.</p>

<p>Manufacturing</p>

<p>Explain what predictive maintenance means in a manufacturing context and give me a simple example of how it could prevent an expensive machine breakdown. Use language that a factory floor worker with no technical background would understand.</p>


<h4>Business Admin -- Architectural Firm</h4>

<p>Write a professional meeting summary for a project kickoff meeting between an architecture firm and a new commercial client. The meeting covered the project scope (a new 10,000 sq ft office building), the timeline (18 months), the budget (under discussion), and next steps (site visit next week and design brief due in three weeks).</p>

<p>ERP</p>

<p>Explain what an ERP system is to someone who has never heard of it before. Use an analogy that compares it to something from everyday life to make it easy to understand.</p>

<p>Lesson 5</p>


<h4>Group Discussion: Your AI Workflow</h4>

<p>You have been working on your AI workflow plan across three weeks of discussion posts. Now it is time to share that plan with a small group and hear from others. This is a conversation, not a formal presentation. No one is being graded on how polished it sounds.</p>


<h4>Small Group Discussion</h4>


<h5 class="card-section-label">Purpose</h5>

<p>Share your AI workflow plan and hear from peers in a low-pressure setting</p>


<h5 class="card-section-label">Instructions</h5>

<ol>
  <li>Get into groups of 3 to 4 people.</li>
  <li>Each group takes  to share their AI workflow plan with their group. Cover three things: what task you chose, what tool you are using (or planning to use), and one thing you learned from the ethics questions in your A later module discussion post.</li>
  <li>After each person shares, the group has  to ask a question or make a comment. Keep it supportive -- this is a learning environment.</li>
  <li>As a group, decide which plan you want to share with the full class. The person whose plan you choose will be the one to speak -- or the group can choose a spokesperson to summarize all of the group's ideas together.</li>
  <li>Prepare a 2 to 3 minute summary of what you discussed. You do not need notes or slides -- just a few sentences about what you talked about and what stood out.</li>
</ol>

<h4>A Note on Group Presentations</h4>

<p>Every group will share -- but not every individual has to present. The group decides together who speaks. This is intentional. Everyone's thinking contributed to the conversation, and that matters whether you are the one who speaks or not.</p>

<p>Lesson 7</p>


<h4>Group Presentations</h4>


| Type:  Full Group Share-Out | Time: | Format:  One speaker per group |
| --- | --- | --- |

<p>Each group will take 2 to  to share with the full class. Listen to each group -- you are going to hear a range of industries, tools, and approaches. Some of what you hear might spark an idea for your own workflow.</p>

<p>What to Cover in you's Summary</p>

<ul>
  <li>What field or fields were represented in you?</li>
  <li>What AI task did you focus on -- or what was the most interesting one that came up?</li>
  <li>What was one risk or ethics concern you identified?</li>
  <li>What is one thing you agreed on about using AI safely or effectively?</li>
</ul>
<p>You do not need to memorize these. Just have a natural conversation with others about what you talked about. Two to three minutes is plenty.</p>


<h4>Course Send-Off</h4>


<h4>Where You Go From Here</h4>

<p>Three weeks ago you walked into this course knowing that AI existed. You are walking out knowing what it actually does, how to use it, where it falls short, when to be careful, and how it fits into your specific field. That is not a small thing. I can say with confidence that you now know more than 75 percent of people out there and you will only continue to learn more.</p>


<h4>What You Built Over These Three Weeks</h4>


| this course and 2 | You built your foundation. You learned what AI actually is, how language models work, how to write prompts that get useful results, and how to identify tasks in your own career that AI can realistically help with. You built an Opportunity Chart for your own workflow. |
| --- | --- |
| A later module | You built your ethics layer. You learned about accountability gaps, algorithmic bias, the right to explanation, and the real-world consequences when AI goes wrong. You applied that thinking directly to your own plan and made a public commitment to use AI intentionally and safely. |
| A later module | You saw the full picture. You mapped AI tools across fourteen different vocations, learned the difference between local and hosted AI, and put your hands on the tools. You heard your peers' plans and shared your own. |

<p>Five Things to Do After this course</p>

<ul>
  <li>Keep using the tools. The only way to get better at AI is to keep using it. Pick one task from your workflow and try it with AI at least once in the next week. If it works, great. If it does not, adjust and try again.</li>
  <li>Stay current. AI is moving fast. Following one or two people on LinkedIn or YouTube who cover AI in your industry will keep you informed without being overwhelming. Look for voices in your specific field -- healthcare AI, education technology, real estate AI, etc.</li>
  <li>Know your workplace's policy. Before you use any AI tool at work with real client or patient data, find out if your employer has an AI use policy. If they do not have one, that is actually an opportunity -- you now know enough to help draft one.</li>
  <li>Teach someone else. The best way to lock in what you learned is to explain it to someone who does not know it yet. Tell a coworker what AI could do for their workflow. Walk a family member through using a prompt. Teaching reinforces your own understanding.</li>
  <li>Come back to your commitment statement. You wrote a commitment at the end of your final discussion post. Keep it somewhere you will see it. In three months, look at it again and ask yourself: am I actually doing this?</li>
</ul>

![Educational diagram illustrating lesson concepts]({{ "/assets/images/topics/ai-foundations/lesson-09-img3.png" | relative_url }})

<p>You came in curious. You are leaving capable.</p>

<p>The workers who shape how AI is used in their workplaces will be the ones who understood it early, asked the hard questions, and kept the human at the center. That is exactly what you did here.</p>

<p>Go do something great with it.</p>
