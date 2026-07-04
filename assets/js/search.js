/**
 * course-hub - Live Search and Tag Filtering Script
 * Client-side index search across news and lesson pages.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupSearchAndFilters();
});

function setupSearchAndFilters() {
  const searchInput = document.getElementById('search-input');
  const newsGrid = document.getElementById('news-grid');
  const tagButtons = document.querySelectorAll('.filter-tag-pill');
  
  if (!searchInput || !newsGrid) return;
  
  // Cache original HTML list for when search is cleared
  const originalNewsHtml = newsGrid.innerHTML;
  
  let searchIndex = [];
  let indexLoaded = false;
  let activeTag = '';
  
  // Check if tag is passed in URL query param
  const urlParams = new URLSearchParams(window.location.search);
  const tagParam = urlParams.get('tag');
  if (tagParam) {
    activeTag = decodeURIComponent(tagParam);
    highlightActiveTag(activeTag);
  }

  // Load search index JSON asynchronously
  async function loadIndex() {
    if (indexLoaded) return;
    try {
      // Relative baseurl is /course-hub
      const response = await fetch('/course-hub/search.json');
      searchIndex = await response.json();
      indexLoaded = true;
      
      // Perform initial filter if tagParam was set
      if (activeTag) {
        performSearchAndFilter();
      }
    } catch (err) {
      console.error('Failed to load search index:', err);
    }
  }

  // Pre-load index on focus or page load
  searchInput.addEventListener('focus', loadIndex);
  
  // Also load immediately if tag filter was present in URL
  if (activeTag) {
    loadIndex();
  }

  // Input event handler
  searchInput.addEventListener('input', () => {
    loadIndex().then(() => {
      performSearchAndFilter();
    });
  });

  // Tag filter button handler
  tagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTag = btn.getAttribute('data-tag');
      
      loadIndex().then(() => {
        if (activeTag === selectedTag) {
          activeTag = ''; // toggle off
          btn.classList.remove('active');
        } else {
          activeTag = selectedTag;
          highlightActiveTag(selectedTag);
        }
        performSearchAndFilter();
      });
    });
  });

  function highlightActiveTag(tag) {
    tagButtons.forEach(btn => {
      if (btn.getAttribute('data-tag') === tag) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function performSearchAndFilter() {
    const query = searchInput.value.toLowerCase().trim();
    
    // If no query and no active tag, restore original HTML
    if (!query && !activeTag) {
      newsGrid.innerHTML = originalNewsHtml;
      return;
    }
    
    // Filter index entries
    const results = searchIndex.filter(item => {
      // Tag filter check
      const matchesTag = !activeTag || item.tags.includes(activeTag);
      
      // Query search check (title, tags, or content body)
      const matchesQuery = !query || 
        item.title.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query)) ||
        item.content.toLowerCase().includes(query);
        
      return matchesTag && matchesQuery;
    });
    
    renderResults(results);
  }

  function renderResults(results) {
    if (results.length === 0) {
      newsGrid.innerHTML = `
        <div class="search-no-results" style="grid-column: 1 / -1; text-align: center; padding: 48px; background: white; border-radius: var(--radius-lg); border: 1px solid var(--color-border);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 16px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <p style="font-size: 1.2rem; font-weight: 600; color: var(--color-text-primary);">No matches found</p>
          <p style="color: var(--color-text-secondary); margin-top: 8px;">Try searching for another keyword or clearing filters.</p>
        </div>
      `;
      return;
    }
    
    newsGrid.innerHTML = results.map(item => {
      const typeLabel = item.type === 'Lesson' ? 
        `<span class="tag-pill" style="background-color: var(--color-accent-teal-light); color: var(--color-accent-teal);">Course Lesson</span>` :
        `<span class="tag-pill">News Post</span>`;
        
      const dateLabel = item.date ? 
        `<span class="post-card-date">${item.date}</span>` : 
        `<span class="post-card-date">Course Content</span>`;
        
      const tagsList = item.tags.map(t => `<span class="tag-pill">${t}</span>`).join('');
      
      return `
        <article class="post-card">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            ${dateLabel}
            ${typeLabel}
          </div>
          <h3 class="post-card-title"><a href="${item.url}">${item.title}</a></h3>
          <p class="post-card-excerpt">${truncateText(item.content, 140)}</p>
          <div class="post-card-tags" aria-label="Tags">
            ${tagsList}
          </div>
          <a href="${item.url}" class="post-card-link" aria-label="Read ${item.title}">
            Read More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
        </article>
      `;
    }).join('');
  }
  
  function truncateText(text, length) {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  }
}
