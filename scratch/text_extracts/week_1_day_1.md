
# MODULE 1: What AI Actually Is

AI for the Workplace  |  Day 1 , Foundations of AI  |  
What AI Actually Is
Demystifying the Technology Before You Touch It


Welcome to the Starting Line
Before you can use AI effectively at work, you need to know what it actually is , not what movies say it is, not what your coworker heard, and not what the headlines are screaming this week. The goal of this module is simple:by the time you finish reading, you will be able to explain AI in plain English to anyone, spot it in tools you already use, and walk into the rest of this course with your feet firmly on the ground.
Let's clear the air.


## Part 1: Three Things That Are Not the Same

One of the most common sources of confusion in the workplace is the blurring of three distinct concepts: software, automation, and artificial intelligence. They are related , but they are not the same thing. Here is how to tell them apart:


The key difference: Software and automation follow rules. AI learns from examples. A traditional spell-checker follows a fixed dictionary. An AI writing assistant learns what "sounds right" from billions of examples of human writing , and that is a fundamentally different kind of system.




## Part 2: How We Got Here , A Quick (Painless) History

You do not need to know the history of AI to use it. But understanding the arc , where it started and where it is now , will help you understand why today's tools work the way they do and why they sometimes fail.

Stage 1: Rules-Based AI (1950s - 1980s)
Early AI systems were elaborate if-then rule books written by human experts. Programmers manually coded thousands of rules: "If the patient has a fever AND a sore throat, then flag for strep test." These systems were powerful within their narrow domain , but they broke down the moment a situation arose that a programmer hadn't anticipated. They couldn't learn. They couldn't adapt.
Stage 2: Machine Learning (1980s - 2010s)
Machine learning (ML) , a type of AI in which a system learns patterns from large amounts of data, rather than following hand-coded rules , changed everything. Instead of programming every rule, systems could find patterns on their own. You show the system a million emails , some spam, some not , and it learns the difference. This is how your email filter works today. ML enabled AI to tackle messy, real-world problems at scale.
Stage 3: Large Language Models (2017 - Present)
Large language models (LLMs) , AI systems trained on massive amounts of text that can understand and generate human language , are the technology powering tools like ChatGPT, Gemini, and Claude. They emerged from a breakthrough called the "transformer" architecture and enable AI to do something that previously seemed impossible: hold a natural conversation, write a memo, summarize a report, explain a concept , all in response to plain English instructions from ordinary users.
That last point is worth pausing on: for the first time, you do not need to be a programmer to use the power of AI. That is exactly why this course exists.




## Part 3: The Four Cognitive Technologies in Your Workplace

AI is not one single thing. Researchers and business analysts identify four broad categories of what are called cognitive technologies , AI systems that perform tasks that previously required human thinking. You almost certainly encounter all four on the job already, even if you didn't know what to call them.


In your role, this means: you are not starting from zero. You have been navigating AI systems for years. This course is about learning to use them intentionally and skillfully , especially the language AI tools that are reshaping how professionals write, research, analyze, and communicate.




## Part 4: What Large Language Models Actually Do

This section surprises most people , and understanding it will make you a much better, more critical user of these tools.

The Honest Answer: LLMs Predict the Next Word
When you type a message into ChatGPT or Gemini and press send, here is what is actually happening: the model reads your input and predicts, word by word (technically, token by token , a token being roughly a word or part of a word), what text is most likely to come next. It does this by drawing on statistical patterns it learned from an enormous amount of text during training.
It does not search the internet (unless a specific web-search feature is enabled). It does not "know" facts the way you look something up in a textbook. It generates text that is statistically likely to be correct and coherent , based on patterns in its training data. Most of the time, that output is remarkably useful. Sometimes, it is confidently wrong. You will learn a great deal more about that in Module 4.

A Helpful Analogy
Imagine a colleague who has read every book, article, email, manual, and website ever published , in dozens of languages , and has an extraordinary ability to articulate a helpful response to almost any question. They are incredibly well-read. But they were not in the room when your company made its last policy change, and they do not have access to your patient files or internal data.
That colleague is a useful collaborator , not an oracle. That is the mindset to bring to every interaction with an LLM.




## Part 5: Busting the Big Myths

Let's address the misconceptions head-on. You may have heard some of these. You may have believed some. Here is the reality.




Dig Deeper: Recommended Reading
These are high-quality, trustworthy sources to expand your understanding of today's topics. Each takes 5-15 minutes to read.

For a deeper dive, read this from McKinsey & Company: What Is AI? A Plain-English Explainer , Clear, jargon-free overview of AI fundamentals with real business examples across industries.
For a deeper dive, read this from Pew Research Center: How Americans View AI and Its Impact on People and Society , Survey data on public attitudes toward AI. Useful for understanding the range of reactions you will encounter on the job.
For a deeper dive, read this from Anthropic: What is Claude? , A transparent overview by IBM providing an overview of Claude AI.






Module Wrap-Up: What You Can Now Do
After completing this module, you should be able to:

Explain the difference between software, automation, and AI , in plain English, to a coworker or supervisor.
Describe the three stages of AI development and why LLMs are a significant shift for non-technical workers.
Identify the four cognitive technologies and give at least one workplace example of each.
Articulate what an LLM actually does (predicts statistically likely text from patterns) and why that matters for how you use and verify it.
Push back against common AI myths with facts, nuance, and confidence.

Up Next: Module 2 , Prompting Fundamentals. Now that you understand what AI is, you are ready to start using it. In the next module, you will learn the foundational skill that separates mediocre AI results from exactly what you need: the art and science of the prompt.

, End of Module 1 ,


# MODULE 2: Prompting Fundamentals

AI for the Workplace  |  Day 1 , Foundations of AI  |  
Prompting Fundamentals
The Foundational Skill That Everything Else Builds On



The Single Skill That Changes Everything
Here is something that surprises almost every student in this course: two people can use the exact same AI tool, on the exact same day, for the exact same task , and get completely different results. One walks away with a polished, useful output. The other walks away frustrated, convinced the AI simply 'doesn't work.'
The difference is almost never the tool. The difference is the prompt.
Prompt engineering , the skill of crafting effective instructions for AI models , is the single most practical thing you will learn in this course. You do not need to write code. You do not need to understand how neural networks work. You need to learn how to communicate clearly and strategically with an AI system , and that is something every professional can do.
This module gives you the framework. The activity that follows gives you the reps.




## Part 1: Why Prompting Matters , Same Tool, Different World

Before we get to the framework, let's make the problem concrete. Look at these two prompts and what they produce:


The tool did not change. The input did. That is the entire lesson of prompting in one sentence.
When you give an AI model more to work with , more context, more clarity, a defined role, a specified output format , it has more to draw on when generating a response. Better input almost always produces better output.





## Part 2: The RTCF Framework , Your Prompting Blueprint

Every strong prompt for a workplace task can be built using four components. Together, they form the RTCF framework: Role, Task, Context, and Format. Think of RTCF as a checklist you run through before sending any prompt , especially for important outputs.


Important: you don't always need all four components. A quick, low-stakes request can be shorter. But for anything you would put in front of a supervisor, share with a client, or use in a patient-facing communication , run the RTCF checklist. The few extra seconds it takes to build a strong prompt will save you far more time in revisions.





## Part 3: RTCF in Action , A Full Worked Example

Let's walk through one complete prompt, built piece by piece, so you can see how each component adds value.


Notice how each addition makes the prompt progressively more useful , without making it burdensome. A complete RTCF prompt is typically 2-5 sentences. That is all it takes.




## Part 4: AI Is a Conversation, Not a Search Engine

This is one of the most important mindset shifts in this course. Most of us are trained to use technology like a search engine: type something in, get a result, move on. AI language tools work differently , and treating them like a search engine is one of the biggest reasons people get frustrated.


Powerful Follow-Up Moves
After your first response, you can refine, redirect, or expand the conversation using natural language. Here are the most useful follow-up prompts:


In your role, this means: you do not need to get the perfect prompt on the first try. The professionals who get the most out of AI are the ones who treat it as a working session , not a one-shot vending machine. Start with a solid RTCF prompt, then refine.




## Part 5: The Chain-of-Thought Nudge

Here is a simple technique that can dramatically improve the quality of AI responses on complex tasks. It is called the chain-of-thought approach , and it requires just one extra phrase at the end of your prompt.




Dig Deeper: Recommended Reading
These high-quality, trustworthy sources will strengthen your understanding of prompting and AI communication. Each takes 5-15 minutes to read.

For a deeper dive, read this from OpenAI: Prompt Engineering Guide , The officia guide from the makers of ChatGPT. Clear, well-organized, and full of tested techniques (Advanced).
Read this from Anthropic: Prompt Library: Real Examples Across Use Cases , A browsable library of strong prompts across dozens of workplace scenarios. Excellent for inspiration and pattern recognition (Advanced).
For a deeper dive, read this from Google: How to Write Better AI Prompts , Google's accessible, beginner-friendly take on effective prompting. Practical advice with real examples.
For a deeper dive, read this from MIT Sloan Management Review: Effective Prompts for AI , Research-backed advice on prompt construction from an enterprise perspective.
For a deeper dive, read this from Ethan Mollick , One Useful Thing: How to Use AI to Do Stuff: An Opinionated Guide , Mollick is a Wharton professor and one of the most practical AI educators writing today. Every post is worth reading.






Module Wrap-Up: What You Can Now Do
After completing this module and the Prompt Makeover Lab, you should be able to:

Explain why prompting skill matters , and why the same tool produces wildly different results in different hands.
Apply the RTCF framework (Role, Task, Context, Format) to any workplace prompting task.
Transform a vague, weak prompt into a complete, strategic one , in under two minutes.
Use follow-up prompts and iteration to refine AI output rather than starting over from scratch.
Deploy the chain-of-thought nudge to improve AI reasoning on complex or multi-step tasks.

Up Next: Module 3 , Identifying Opportunities on the Job. Now that you have the foundational skill, you will learn how to look at your own daily work through an AI lens and identify exactly which tasks in your vocational field are the best candidates for AI assistance.

, End of Module 2 ,


# MODULE 3: Identifying Opportunities on the Job

AI for the Workplace  |  Day 1 , Foundations of AI  |  
Identifying Opportunities on the Job
Connecting AI Capabilities to Your Actual Work


From Understanding AI to Using It Purposefully
You now know what AI is and how to talk to it. The next question , the one that actually changes your career , is this: where does it belong in your work?
Not every task is a good fit for AI assistance. Not every workflow needs to be touched. The professionals who get genuine value from these tools are not the ones who try to use AI for everything , they are the ones who develop a sharp eye for which tasks AI handles well and which tasks still require a human.
This module gives you two practical tools for developing that eye: a four-question evaluation framework, and a central question that will follow you throughout your entire career. The anchor activity at the end puts both to work immediately , using your real job.




## Part 1: The Four-Question AI Suitability Check

When you look at a task on your plate and wonder, "Could AI help with this?" , run it through four diagnostic questions. Not every task needs to score a "yes" on all four. But the more "yes" answers a task gets, the stronger the candidate it is for AI assistance.


A practical rule of thumb: if a task is repetitive, language-based, information-heavy, and low-stakes if imperfect , it is almost certainly worth trying with AI. If a task is one-of-a-kind, requires physical action, involves deep ethical judgment, or has zero tolerance for error , keep the human in the lead.





## Part 2: The Central Question , Remove, Accelerate, or Improve?

Once you have identified a task that could be an AI candidate, ask yourself one more thing before you start prompting. This question cuts through the noise and focuses your effort where it will actually pay off:


Each of those three verbs points to a different kind of value. Understanding which one applies to your situation helps you use AI more strategically , and helps you explain the value to a supervisor or team.


In practice, many AI use cases do all three at once: removing the most tedious part of a task, accelerating the parts that remain, and improving the overall quality of what you produce. But knowing which value you are primarily after helps you prompt more effectively and evaluate the output more honestly.




## Part 3: Same Tool, Different Trades

One of the most important things to understand about AI language tools is that they are generalists. The same ChatGPT or Gemini that helps a marketing manager write ad copy will also help a warehouse supervisor create a shift handoff report , if it is given the right context.
What changes across trades is not the tool , it is the prompts, the use cases, and the specific workflows where AI adds value. Here is how the same capabilities show up across the kinds of vocational fields represented in this classroom:






## Part 4: The Flip Side , Tasks Where AI Falls Short

Knowing where AI excels is only half the equation. Equally important is knowing where it struggles , so you don't hand over tasks it is not equipped to handle well.
We will go deep on AI limitations and risks in Module 4. For now, here is your quick orientation:




Dig Deeper: Recommended Reading
These trustworthy sources will help you think more rigorously about where AI fits , and does not fit , in workplace workflows.

For a deeper dive, read this from McKinsey Global Institute: The Economic Potential of Generative AI: The Next Productivity Frontier , McKinsey's landmark research on which job tasks AI is most likely to transform across industries. Excellent data across dozens of vocational fields.
For a deeper dive, read this from Harvard Business Review: How Generative AI Can Augment Human Creativity , A nuanced look at which types of work benefit most from AI augmentation vs. which require human-only judgment.
For a deeper dive, read this from Brookings Institution: How Artificial Intelligence Is Transforming the World , A clear, objective overview of AI's real-world impact on industries, jobs, and communities. Credible and balanced.
For a deeper dive, read this from U.S. Department of Labor , O*NET: Occupation-Specific AI Exposure Data , The government's occupational database, which researchers now use to map AI exposure by job title. Search your own occupation for a data-grounded perspective.
For a deeper dive, read this from World Economic Forum: Future of Jobs Report , The WEF's authoritative global forecast on which jobs and skills are growing, which are declining, and where AI is the primary driver.






Module Wrap-Up: What You Can Now Do
After completing this module and the Baseline Chat Session, you should be able to:

Apply the four-question AI suitability check to any task in your workflow , and make a principled decision about whether AI is a good fit.
Use the Remove / Accelerate / Improve framework to identify the specific type of value AI can add to a given task.
Recognize AI opportunities specific to your vocational field , including use cases you may not have considered before today.
Identify categories of tasks where AI is not well-suited, and explain why human judgment must remain in the lead.
Describe at least 3 real tasks from your own job where AI assistance could save time, improve quality, or both.

Up Next: Module 4 , When AI Gets It Wrong. Before Day 1 ends, you will get your first introduction to AI hallucinations, the human-in-the-loop principle, and why critical thinking is not optional when working with these tools. This is the warning label , and it is an important one.

, End of Module 3 ,


# MODULE 4: When AI Gets It Wrong

AI for the Workplace  |  Day 1 - Foundations of AI  |  
When AI Gets It Wrong
Planting the Critical-Thinking Habit on Day One



The Warning Label - And Why It Comes Before Anything Else
Every powerful tool comes with instructions for safe use. A scalpel, a forklift, a prescription medication - all of them are genuinely useful, and all of them can cause real harm when misused or misunderstood. AI is no different.
This module is the warning label. It does not exist to scare you away from using AI tools - you have already seen how valuable they can be. It exists because the most dangerous AI user is not the skeptic who refuses to try it. The most dangerous AI user is the one who trusts AI completely, skips verification, and lets an incorrect output cause a real-world problem.
By the end of this module, you will have one critical habit locked in: AI proposes, you verify, you decide. That habit protects you, your employer, and the people you serve.




## Part 1: Hallucination - When AI Makes Things Up

The single most important limitation to understand about AI language tools is a phenomenon researchers call hallucination - and it is nothing like what the word might suggest to you.


Why Does This Happen?
Recall from Module 1: an LLM does not retrieve facts from a database. It predicts the most statistically likely next word based on patterns in its training data. When you ask it for a specific fact - a date, a citation, a statistic - it generates what sounds like the right kind of answer based on patterns it has seen.
If the true answer was well-represented in its training data, the model will often be right. If the true answer was obscure, recent, or simply not well-documented, the model may produce something plausible-sounding but completely invented - and it will write it with the same smooth confidence as when it is correct.
This is the core danger: there is no built-in signal to tell you when the model is guessing. A hallucinated citation looks identical to a real one. A made-up statistic is formatted exactly like a real one. Without verification, you cannot tell the difference from the text alone.

A Case Study That Made Headlines: The Lawyer and the Fake Cases


Five Types of Hallucination You May Encounter at Work
The Mata case is dramatic, but hallucinations appear in much more everyday forms. Here is what to watch for in typical workplace outputs:





## Part 2: The Human-in-the-Loop Principle

Understanding hallucination leads directly to one of the most important operating principles in professional AI use. It is called the human-in-the-loop principle, and it can be summarized in three lines:


This principle does not mean you distrust every word the AI produces. It means you maintain the professional judgment that is yours to keep. AI is an extraordinarily fast and capable drafting tool. The quality control, the verification, and the final decision - those belong to you.
Think of it like this: if you hired a very fast, very articulate research assistant who sometimes confidently stated wrong things without realizing it, you would not fire them. You would check their work before it went to anyone important. That is exactly the relationship to build with AI.

A Practical Verification Checklist
Not every AI output requires the same level of scrutiny. Use this checklist to calibrate your verification effort to the stakes involved:


In your role, this means: every time you use AI to produce something that will leave your hands, an email, a report, a patient communication, a client document - take 60 seconds to ask: are there any specific claims here that I have not verified? That 60 seconds is your professional protection.




## Part 3: A First Look at What Else Can Go Wrong

Hallucination is the most immediate risk, but it is not the only one. Here is a brief preview of three other important limitations you will encounter. You will go much deeper on all of these in Week 3 - for now, this is your first warning label on each.





Dig Deeper: Recommended Reading
These sources will help you understand AI limitations, verification practices, and the ethical landscape more fully.

The New York Times: California issues historic fine over lawyer's ChatGPT fabrications - The original reporting on the Mata v. Avianca case. A clear, concrete illustration of what happens when AI output goes unverified.
IBM: What Is AI Hallucination? - A clear, accessible explanation of why hallucinations happen and how organizations are working to address them.
MIT Technology Review: In AI We Trust - Too Much? - MIT's ongoing coverage of AI reliability, accuracy, and the challenge of knowing when to trust model outputs.
Stanford HAI: How Harmful Are AI's Biases on Diverse Student Populations? - Stanford's accessible overview of how bias enters AI systems, affects diverse populations, and why it is not a simple problem to solve.
Anthropic: Core Views on AI Safety - A transparent look at how one of the leading AI labs thinks about the risks of its own models and what it is doing to mitigate them.


















Instructions
1.  Read the AI-generated passage below carefully. It looks professional and authoritative.
2.  Using Google (or any search engine), spend 10-15 minutes fact-checking the specific claims in the passage. Look for anything that seems off, invented, or impossible to verify.
3.  Mark or underline any claims you could not confirm or found to be incorrect.
4.  In the recording table below, note what you found.
5.  Be ready to share during our discussion: How easy was it to spot the errors? What would have happened if this passage had gone to a supervisor unverified?

AI-Generated Passage - Fact-Check This:

Record Your Findings
Use this table to log what you find during your fact-check. You will need it for the class debrief.


Reflection
How many errors or unverifiable claims did you find? Were you surprised by the number?
How easy was it to spot the errors just by reading - without searching?
What would have happened if this passage had been submitted to your supervisor, or included in a report shared with a client?
Based on this experience, how will you approach verifying AI-generated content in your actual job?


Module Wrap-Up: What You Can Now Do
After completing this module and the Catch the Hallucination activity, you should be able to:

Define AI hallucination and explain - in plain terms - why it happens mechanically.
Recognize the types of hallucinations most likely to appear in real workplace AI outputs.
Apply the human-in-the-loop principle: AI proposes, human verifies, human decides - every time.
Calibrate your verification effort to the stakes: light review for low-risk drafts, rigorous fact-checking for anything patient-facing, legally relevant, or going to leadership.
Name three other AI limitations - bias, privacy risks, and outdated information - and know that Week 3 goes deeper on all of them.

You made it through Day 1. You understand what AI is, how to prompt it effectively, where to look for opportunities in your own work, and - critically - why verification is non-negotiable. Between now and Day 2, try one AI tool for a real task. Screenshot the result. You will bring it back to class.

- End of Module 4 -





















