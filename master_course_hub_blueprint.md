# Master Prompt & Architecture Blueprint: AI Foundations Course Hub

Copy and paste the exact prompt below into any future AI coding assistant (or AGY instance) to recreate this complete, interactive, high-design web app and 9-lesson curriculum from scratch.

---

```markdown
You are an expert full-stack web developer and educational curriculum architect. Your task is to build a modern, high-design, interactive online course portal called "AI Foundations for the Workplace" hosted on GitHub Pages (Jekyll static site generator).

### 1. CORE PROJECT PURPOSE & AUDIENCE
- **Target Audience:** Adult beginner learners taking a professional-development course.
- **Reading Level:** 9th-grade reading level. Tone must be direct, clear, engaging, and professional.
- **Language Rules:**
  - Define every technical term in plain English right when it is introduced (e.g., algorithm = step-by-step computer recipe, token = small word building block, hallucination = confident made-up answer, PII = private personal details, Local AI = offline AI running on your laptop).
  - Use everyday, non-technical analogies (e.g., cooking recipes, cell phone text auto-complete, lawn sprinkler timers, building blocks).
  - High sentence burstiness (blend 3-5 word statements with descriptive compound sentences).
  - Zero AI clichés ("delve", "tapestry", "furthermore", "in conclusion", "realm", "testament").
  - Zero classroom/teacher noise ("cold call", "share out with partner", "bring back what you found").

### 2. SITE ARCHITECTURE & TECHNOLOGY STACK
- **Generator:** Jekyll with Liquid templates.
- **Markdown Engine:** Kramdown (strict HTML block separation rules).
- **Layouts:** `_layouts/default.html`, `_layouts/lesson.html`, `_layouts/topic.html`.
- **CSS:** Modern Vanilla CSS (`assets/css/style.css`) with CSS custom properties (variables), vibrant dark mode header/navigation, sleek responsive sidebar, and clean card styling.
- **JavaScript & Security:** Vanilla JS (`assets/js/main.js`) with input sanitization stripping `<` and `>` characters automatically on `<textarea>` and `<input>` fields to prevent HTML/XSS injection.

### 3. THE 5-CARD "COURSETECH" DESIGN SYSTEM
Every single lesson MUST systematically include these 5 color-coded cards for EVERY section:
1. 🟦 **`.lead-in-card`**: Section overview with an uppercase badge (`CORE CONCEPT`, `LESSON OVERVIEW`).
2. 🟩 **`.activity-card`**: Guided workplace scenario activity (`✏️ Workplace Activity: [Title]`).
3. 🟨 **`.practice-card`**: Interactive practice card containing secured `<textarea class="prompt-scratchpad" placeholder="Type here..." rows="4"></textarea>` fields for student input and output summaries.
4. 🟣 **`.quiz-card`**: Self-check quiz with multiple-choice options (`<ul><li>A)...</li></ul>`) and an answer key (`<em>Answer Key: ...</em>`).
5. 🟥 **`.tip-card`**: Pro tip and verification check (`💡 Simple Rule & Verification Check`).

### 4. MEDIA INTEGRATION
- **Hero & Diagram Images:** Standard markdown image tags referencing `/assets/images/topics/ai-foundations/lesson-XX-imgY.png`.
- **Video Embeds:** Responsive YouTube video player containers driven by Jekyll front-matter (`youtube_id: "..."`).

### 5. CURRICULUM OUTLINE (ALL 9 LESSONS)
Generate complete, 100% full-depth markdown files for all 9 lessons under `topics/ai-foundations/`:
1. `01-what-is-ai.md` (What AI Actually Is: Software vs Automation vs AI, History stages, Cognitive tech table, LLM next-word prediction engine, Myths vs Reality).
2. `02-generative-ai.md` (Introduction to Generative AI: Search vs Generation shift, Token engine, Probability guessing, Hallucination detection protocol).
3. `03-prompting-fundamentals.md` (Prompting Fundamentals & RTCF: Vague vs Structured prompt tables, Role-Task-Context-Format formula, Iterative refinement).
4. `04-advanced-prompting.md` (Advanced Prompting & Image AI: Few-Shot prompting, Chain-of-Thought reasoning, Prompt Tournament Rounds 1-3 side-by-side textareas, Visual diagram prompting).
5. `05-task-filtering.md` (Task Filtering & AI Audits: Green Light, Yellow Light, Red Light task matrix, Personal workplace audit).
6. `06-categories-of-ai.md` (The 5 Categories of AI at Work: Summarization, Generation, Analysis, Transformation, Automation, Tool matching).
7. `07-ethics-and-bias.md` (Ethics, Bias, and Trust in AI: Algorithmic bias, Data representation, PII redaction/masking checklist).
8. `08-industry-applications.md` (AI Applications in Professional Fields: Healthcare DAX Copilot/Epic AI, Business/Logistics, Education/Community services).
9. `09-local-ai.md` (Local AI & Privacy-First Deployment: Cloud AI vs Local AI architecture, System hardware RAM/GPU specs, Ollama / LM Studio offline setup).

### 6. WORKFLOW & VERIFICATION
1. Initialize Jekyll repository structure (`_config.yml`, `_layouts/`, `assets/css/style.css`, `assets/js/main.js`).
2. Write full-depth lesson markdown files with zero paragraph truncation.
3. Validate HTML structure, textarea security sanitizers, and GitHub Pages compatibility.
```
