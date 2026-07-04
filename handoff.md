# Project Handoff & Changelog

This document serves as a permanent record of the structural, design, and content modifications made to the **Course Hub** Jekyll site. It should be updated periodically as new features are added or major bugs are fixed.

## Overview
The Course Hub is a self-paced, online curriculum generated from a series of Word documents and PDF text extracts. A Python compiler script (`compile_curriculum_v6.py`) parses these source documents and generates stylized, Jekyll-compatible Markdown files.

## Major Accomplishments & Completed Tasks

### 1. Compiler Architecture (`compile_curriculum_v6.py`)
- **State Machine Implementation:** Built a `ContentBuilder` class to handle complex Markdown parsing state (e.g., knowing when we are inside a list vs. an activity card). 
- **Card System:** The compiler automatically detects activity sections, tips, and practice scenarios and wraps them in custom HTML components (`<div class="activity-card">`).
- **Interactive Scratchpads:** Replaced static "Your complete improved prompt:" lines with interactive HTML `<textarea class="prompt-scratchpad">` elements to encourage active learning.

### 2. Design System (`style.css`)
- **Aesthetics:** Implemented a modern, premium design system using Slate (high trust) and Royal Blue (`#2563eb`) accents. 
- **WCAG Compliance:** Maintained 4.5:1 contrast ratios across the UI.
- **List Styling:** Fixed a bug where list markers (bullet points) were blue everywhere; constrained the blue markers specifically to activity/practice cards, leaving standard text markers black/inherit.
- **Table Styling:** Removed aggressive global first-column bolding (`td:first-child`) to ensure complex tables (like the Search Engine Mindset table) render cleanly.

### 3. Content Scrubbing & Refinement
- **Jargon Removal:** Stripped all references to synchronous physical classrooms (e.g., "in the next class", "group work", "your instructor") and replaced them with self-paced, online-friendly phrasing.
- **Typography:** Globally replaced all em dashes (`—`) and en dashes (`–`) with standard hyphens (`-`) across the compiler and generated Markdown to eliminate "AI-generated" connotations.

### 4. Image Extraction & Formatting
- **Full Audit:** Verified all 44 images across the curriculum.
- **PDF Injection Bug:** Fixed a logic bug where images from Lessons 5 and 6 (extracted from PDFs) were being discarded by the compiler.
- **Mapping Fixes:** Correctly renamed and mapped `lesson-02-img1.png` to `lesson-03-img1.png` ("Visual illustration of lesson concepts").
- **Accessibility:** Updated the image injection logic to automatically apply simple, WCAG-compliant alt text (`![Educational diagram illustrating lesson concepts]`).

## Known Issues & Ongoing Work
- **None at this time.** The curriculum is fully compiled and the local Jekyll server is running successfully at `/course-hub/`.

---
*Note for Future Editors: When making structural changes to the Markdown files, always update `compile_curriculum_v6.py` rather than hard-editing the `.md` files in `topics/`, as running the compiler will overwrite any manual changes in the `topics/` directory.*

### 5. Content Updates
- **Job Displacement Section:** Rewrote the 'AI will take all the jobs' section in Lesson 1 to acknowledge Goldman Sachs projections regarding 15 million displaced jobs while maintaining the course's empowering tone about adapting to the evolving landscape.

- **Lesson 1 Video Update:** Replaced the video placeholder in Lesson 1 ('What AI Actually Is') with the new YouTube video ID ('S08kQNgNGjk').
