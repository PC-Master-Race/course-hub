---
layout: default
title: "AI Foundations"
description: "A comprehensive guide to how artificial intelligence works, prompting frameworks, ethical considerations, and real-world career applications."
---

<div class="container" style="padding-top: 48px; padding-bottom: 64px; max-width: 800px;">
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      <li><a href="{{ '/' | relative_url }}">Home</a></li>
      <li aria-current="page">AI Foundations</li>
    </ol>
  </nav>

  <header style="margin-bottom: 40px;">
    <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 12px;">AI Foundations</h1>
    <p style="font-size: 1.2rem; color: var(--color-text-secondary); line-height: 1.6;">
      Welcome to AI Foundations. This course demystifies artificial intelligence before you use it, 
      establishes a professional framework for prompting (RTCF), analyzes how AI is used across various 
      professions, explores local private offline AI models, and covers ethical guidelines like algorithmic bias 
      and human dignity.
    </p>
  </header>

  <section aria-labelledby="lessons-list-title" style="background: white; padding: 32px; border-radius: var(--radius-lg); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);">
    <h2 id="lessons-list-title" style="font-size: 1.6rem; margin-bottom: 24px; border-bottom: 1px solid var(--color-border); padding-bottom: 12px;">Course Lessons</h2>
    
    <ol style="list-style: none; display: flex; flex-direction: column; gap: 16px;">
      {% assign current_topic = site.data.topics | where: "id", "ai-foundations" | first %}
      {% for lesson in current_topic.lessons %}
        <li style="display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; background-color: var(--color-bg-base); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
          <div style="display: flex; align-items: center; gap: 16px;">
            <span style="display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background-color: var(--color-primary); color: white; font-weight: 700; font-family: var(--font-display);">{{ forloop.index }}</span>
            <div>
              <h3 style="font-size: 1.15rem; font-weight: 600; margin: 0;">{{ lesson.title }}</h3>
            </div>
          </div>
          <a href="{{ '/topics/ai-foundations/' | append: lesson.slug | relative_url }}" class="course-card-link" style="padding: 8px 16px; font-size: 0.95rem;" aria-label="Start lesson {{ forloop.index }}: {{ lesson.title }}">
            Start Lesson
          </a>
        </li>
      {% endfor %}
    </ol>
  </section>
</div>
