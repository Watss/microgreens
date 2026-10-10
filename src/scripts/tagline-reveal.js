document.documentElement.classList.add('js-enabled');

const tagline = document.querySelector('[data-tagline]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (tagline && !reducedMotion && 'IntersectionObserver' in window) {
  const textNodes = [];
  const walker = document.createTreeWalker(tagline, NodeFilter.SHOW_TEXT);

  while (walker.nextNode()) textNodes.push(walker.currentNode);

  let wordIndex = 0;
  textNodes.forEach((node) => {
    const words = node.textContent.split(/(\s+)/);
    const fragment = document.createDocumentFragment();
    words.forEach((word) => {
      if (!word.trim()) {
        fragment.append(document.createTextNode(word));
        return;
      }
      const span = document.createElement('span');
      span.className = 'tagline-word';
      span.dataset.wordIndex = String(wordIndex++);
      span.textContent = word;
      fragment.append(span);
    });
    node.replaceWith(fragment);
  });

  const words = tagline.querySelectorAll('.tagline-word');
  const observer = new IntersectionObserver((entries) => {
    entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => Number(a.target.dataset.wordIndex) - Number(b.target.dataset.wordIndex))
      .forEach((entry) => {
        entry.target.classList.add('is-lit');
        observer.unobserve(entry.target);
      });
  }, { threshold: 0.8, rootMargin: '0px 0px -38% 0px' });

  words.forEach((word) => observer.observe(word));
}

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.querySelectorAll('.reveal').forEach((node) => revealObserver.observe(node));
}
