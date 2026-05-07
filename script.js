/* ============================================================
   NORTHRISE DIGITAL — script.js
   ============================================================ */

/* --- Sticky header --- */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* --- Mobile nav --- */
(function () {
  const btn  = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* --- Active nav link --- */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html') || (page === 'index.html' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* --- FAQ Accordion --- */
(function () {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all in same container
      const parent = item.closest('.faq');
      if (parent) {
        parent.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.faq-answer').style.maxHeight = null;
          }
        });
      }

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

/* ============================================================
   CHATBOT
   ============================================================ */
(function () {
  const QA = [
    {
      triggers: ['price', 'cost', 'how much', 'pricing', '💰'],
      label: '💰 Pricing',
      answer: 'Our Starter site is <strong>$450</strong> (1 page). Professional is <strong>$850</strong> (5 pages). First 3 clients get founding rates: <strong>$299/$599</strong>. Monthly hosting is $79/month.'
    },
    {
      triggers: ['how long', 'timeline', 'time', 'days', '⏱', 'fast', 'quick'],
      label: '⏱ Timeline',
      answer: 'Starter sites go live in <strong>7 days</strong>. Professional sites in <strong>14 days</strong>. Once you book a call, we can give you exact timing for your project.'
    },
    {
      triggers: ['city', 'area', 'serve', 'where', 'location', '📍', 'edmonton', 'calgary', 'alberta', 'canada'],
      label: '📍 Service Area',
      answer: 'Yes — we serve <strong>all of Alberta</strong> and across Canada. We work remotely so location isn\'t a barrier.'
    },
    {
      triggers: ['industry', 'industries', 'hvac', 'roofing', 'landscaping', 'plumbing', 'trades', '🏗'],
      label: '🏗 Industries',
      answer: 'We specialize in home service businesses: <strong>HVAC, roofing, landscaping, plumbing, electrical, painting, snow removal</strong>, and similar trades.'
    },
    {
      triggers: ['own', 'ownership', 'files', 'mine'],
      label: null,
      answer: '<strong>100% yes.</strong> The website is yours forever. If you ever cancel hosting, we hand over all the files.'
    },
    {
      triggers: ['design', 'like', 'happy', 'revisions', 'changes', 'revision'],
      label: null,
      answer: 'Every project includes <strong>1-2 revision rounds</strong> (depending on package). We work until you\'re happy with the final result.'
    },
    {
      triggers: ['fix', 'existing', 'current', 'redesign', 'rebuild', 'already have'],
      label: null,
      answer: 'Yes — we can <strong>rebuild or redesign existing sites</strong>. Book a free call and we\'ll review your current site.'
    },
    {
      triggers: ['seo', 'google', 'search', 'rank', 'find'],
      label: null,
      answer: 'Every site we build is <strong>SEO-optimized for local search</strong>. We can also help with Google Business Profile ($99 one-time).'
    },
    {
      triggers: ['maintenance', 'hosting', 'monthly', 'update', '$79'],
      label: null,
      answer: '<strong>$79/month</strong> covers hosting, up to 2 content updates monthly, and direct access to us for any questions.'
    },
    {
      triggers: ['start', 'begin', 'get started', '📞', 'book', 'call'],
      label: '📞 Book a Call',
      answer: 'Book a free call — we\'ll discuss your business, your goals, and give you a clear quote. No obligation, no pressure.'
    }
  ];

  const QUICK_BTNS = QA.filter(q => q.label);
  const BOOK_LINK  = '<a href="contact.html">Book a Free Call →</a>';
  const SUFFIX     = `<br><br>Want to talk to a real person? ${BOOK_LINK}`;

  // Build HTML
  const html = `
    <div class="chatbot-tooltip" id="chatbot-tooltip">Chat with us 👋</div>
    <button class="chatbot-btn" id="chatbot-btn" aria-label="Open chat" aria-expanded="false">
      <span class="chatbot-pulse"></span>
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    </button>
  `;

  const winHtml = `
    <div class="chatbot-window" id="chatbot-window" role="dialog" aria-label="Chat with Northrise Digital">
      <div class="chatbot-header">
        <div class="chatbot-header-info">
          <div class="chatbot-avatar">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
          </div>
          <div class="chatbot-header-text">
            <div class="chatbot-name">Northrise Digital</div>
            <div class="chatbot-status">Typically replies within minutes</div>
          </div>
        </div>
        <button class="chatbot-close" id="chatbot-close" aria-label="Close chat">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="chatbot-messages" id="chatbot-messages"></div>
      <div class="chatbot-quick-btns" id="chatbot-quick-btns"></div>
      <div class="chatbot-footer">
        Don't see your question? <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hello.northrisedigital@gmail.com" target="_blank" rel="noopener">Email us</a> or <a href="contact.html">Book a free call</a>
      </div>
    </div>
  `;

  const bubble = document.createElement('div');
  bubble.className = 'chatbot-bubble';
  bubble.innerHTML = html;
  document.body.appendChild(bubble);

  const win = document.createElement('div');
  win.innerHTML = winHtml;
  document.body.appendChild(win.firstElementChild);

  const btnEl    = document.getElementById('chatbot-btn');
  const winEl    = document.getElementById('chatbot-window');
  const closeEl  = document.getElementById('chatbot-close');
  const msgsEl   = document.getElementById('chatbot-messages');
  const quickEl  = document.getElementById('chatbot-quick-btns');
  const tipEl    = document.getElementById('chatbot-tooltip');

  // Remove tooltip after animation
  setTimeout(() => tipEl && tipEl.remove(), 5000);

  function addMsg(text, type = 'bot') {
    const div = document.createElement('div');
    div.className = `chat-msg chat-msg--${type}`;
    div.innerHTML = text;
    msgsEl.appendChild(div);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function buildQuickBtns() {
    quickEl.innerHTML = '';
    QUICK_BTNS.forEach(q => {
      const b = document.createElement('button');
      b.className = 'quick-btn';
      b.textContent = q.label;
      b.addEventListener('click', () => {
        addMsg(q.label, 'user');
        setTimeout(() => addMsg(q.answer + SUFFIX, 'bot'), 400);
      });
      quickEl.appendChild(b);
    });
  }

  function findAnswer(input) {
    const low = input.toLowerCase();
    return QA.find(q => q.triggers.some(t => low.includes(t)));
  }

  function openChat() {
    winEl.classList.add('open');
    btnEl.setAttribute('aria-expanded', 'true');
    if (!msgsEl.children.length) {
      setTimeout(() => addMsg('Hi! I\'m here to answer quick questions about Northrise Digital. What can I help with?'), 200);
      buildQuickBtns();
    }
  }

  function closeChat() {
    winEl.classList.remove('open');
    btnEl.setAttribute('aria-expanded', 'false');
  }

  btnEl.addEventListener('click', () => winEl.classList.contains('open') ? closeChat() : openChat());
  closeEl.addEventListener('click', closeChat);

  // Keyword matching for typed input (future-proof — no input field needed for now)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && winEl.classList.contains('open')) closeChat();
  });
})();

/* --- Scroll animations (Change 6) --- */
(function () {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
})();
