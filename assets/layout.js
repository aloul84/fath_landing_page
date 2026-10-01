// الهيدر والفوتر المشتركان لمنظومة فذ: FATH Design System
(function () {
  const page = document.body.dataset.page || '';
  const playPages = ['play', 'console', 'store', 'hub', 'parents'];

  function t(key, fallback) {
    if (window.FATH_I18N && typeof window.FATH_I18N.t === 'function') {
      return window.FATH_I18N.t(key, fallback);
    }
    return fallback || key;
  }

  function getLang() {
    return (window.FATH_I18N && window.FATH_I18N.getLang()) || document.documentElement.lang || 'en';
  }

  function renderLayout() {
    const isAr = getLang() === 'ar';
    const langBtnText = isAr ? 'English' : 'العربية';
    const link = (href, label, key) => {
      const isActive = page === key;
      return `<a href="${href}" class="px-3.5 py-2 rounded-lg text-sm font-medium transition ${
        isActive
          ? 'text-[#0F766E] bg-[#F0FDF9] font-semibold border border-[#CCFBF1]'
          : 'text-slate-600 hover:text-[#0F766E] hover:bg-[#F0FDF9]'
      }">${label}</a>`;
    };

    const playMenu = [
      ['play.html', t('nav.play_overview', 'Fath Play Overview'), 'play', t('nav.play_overview_desc', 'Platform overview')],
      ['console.html', t('nav.console', 'Fath Console'), 'console', t('nav.console_desc', 'Hardware specs')],
      ['store.html', t('nav.store', 'Fath Store'), 'store', t('nav.store_desc', 'Hardware & games')],
      ['hub.html', t('nav.hub', 'Fath Hub (Developers)'), 'hub', t('nav.hub_desc', 'SDK & API')],
      ['parents.html', t('nav.parents', 'Fath Parents App'), 'parents', t('nav.parents_desc', 'Parental controls')],
    ];

    const header = `
    <header class="sticky top-0 z-50 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md transition-shadow duration-200 level-1">
      <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="index.html" class="flex items-center gap-3 group">
          <span class="logo-badge h-11 w-11 transition-transform group-hover:scale-105">
            <span class="logo-crop h-9 w-9"><img src="assets/fath-logo-white.png" alt="FATH logo" /></span>
          </span>
          <span class="leading-tight">
            <span class="block font-display text-xl font-bold text-[#0F172A]">فذ</span>
            <span class="block text-[11px] font-semibold tracking-[0.25em] text-slate-400">FATH</span>
          </span>
        </a>

        <nav class="hidden items-center gap-1.5 lg:flex">
          ${link('index.html', t('nav.home', 'Home'), 'home')}
          ${link('index.html#vision', t('nav.vision', 'Vision'), '')}
          ${link('competitions.html', t('nav.competitions', 'Competitions'), 'competitions')}
          <div class="group relative">
            <button class="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition ${
              playPages.includes(page)
                ? 'text-[#0F766E] bg-[#F0FDF9] font-semibold border border-[#CCFBF1]'
                : 'text-slate-600 hover:text-[#0F766E] hover:bg-[#F0FDF9]'
            }">
              <span>${t('nav.play', 'Fath Play')}</span>
              <svg class="h-4 w-4 transition group-hover:rotate-180 text-slate-400 group-hover:text-[#0F766E]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="invisible absolute ${isAr ? 'right-0' : 'left-0'} top-full w-72 translate-y-2 rounded-xl border border-[#E2E8F0] bg-white p-2 opacity-0 shadow-lg level-2 transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
              ${playMenu
                .map(
                  ([h, l, k, d]) => `
                <a href="${h}" class="block rounded-lg px-3.5 py-2.5 transition ${
                    page === k
                      ? 'bg-[#F0FDF9] text-[#0F766E]'
                      : 'text-slate-700 hover:bg-[#F8FAFC] hover:text-[#159A85]'
                  }">
                  <div class="text-sm font-semibold">${l}</div>
                  <div class="text-xs text-slate-400 mt-0.5">${d}</div>
                </a>`
                )
                .join('')}
            </div>
          </div>
          ${link('index.html#contact', t('nav.contact', 'Contact Us'), '')}
        </nav>

        <div class="hidden items-center gap-3 lg:flex">
          <button id="langToggleBtn" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border border-slate-200 text-slate-700 hover:text-[#0F766E] hover:border-[#159A85] hover:bg-[#F0FDF9] transition">
            <svg class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-4 4-8.5 4-9s-1.5-5-4-9m0 18c-2.5-4-4-8.5-4-9s1.5-5 4-9m-9 9h18"/></svg>
            <span>${langBtnText}</span>
          </button>
          <a href="https://register.fath-app.com/" target="_blank" rel="noopener" class="btn btn-primary text-sm py-2 px-4 shadow-sm">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span>${t('nav.register', 'Register Contestant')}</span>
          </a>
        </div>

        <div class="flex items-center gap-2 lg:hidden">
          <button id="mobileLangBtn" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 text-slate-700">
            <span>${langBtnText}</span>
          </button>
          <button id="menuBtn" class="rounded-lg p-2 text-slate-700 hover:bg-[#F1F5F9]" aria-label="Menu">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <div id="mobileMenu" class="hidden border-t border-[#E2E8F0] bg-white px-4 pb-6 pt-3 lg:hidden shadow-lg">
        <div class="space-y-1">
          <a href="index.html" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#F8FAFC]">${t('nav.home', 'Home')}</a>
          <a href="index.html#vision" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#F8FAFC]">${t('nav.vision', 'Vision')}</a>
          <a href="competitions.html" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#F8FAFC]">${t('nav.competitions', 'Competitions')}</a>
          <div class="pt-2 pb-1 border-t border-[#E2E8F0] my-2">
            <p class="px-3 text-xs font-semibold uppercase tracking-wider text-[#159A85]">${t('nav.play', 'Fath Play')}</p>
          </div>
          ${playMenu
            .map(
              ([h, l]) =>
                `<a href="${h}" class="block rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-[#F0FDF9] hover:text-[#0F766E]">${l}</a>`
            )
            .join('')}
          <a href="index.html#contact" class="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#F8FAFC]">${t('nav.contact', 'Contact Us')}</a>
        </div>
        <div class="mt-4 pt-3 border-t border-[#E2E8F0] space-y-2">
          <button id="mobileMenuLangToggle" class="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <svg class="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0c2.5-4 4-8.5 4-9s-1.5-5-4-9m0 18c-2.5-4-4-8.5-4-9s1.5-5 4-9m-9 9h18"/></svg>
            <span>${langBtnText}</span>
          </button>
          <a href="https://register.fath-app.com/" target="_blank" rel="noopener" class="btn btn-primary w-full text-center py-2.5 flex items-center justify-center gap-2">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            <span>${t('nav.register', 'Register Contestant')}</span>
          </a>
        </div>
      </div>
    </header>`;

    const footer = `
    <footer class="relative mt-24 border-t border-[#E2E8F0] bg-[#0E1726] text-white">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="flex items-center gap-3">
            <span class="logo-badge h-12 w-12 border border-white/10">
              <span class="logo-crop h-10 w-10"><img src="assets/fath-logo-white.png" alt="FATH logo" /></span>
            </span>
            <span class="font-display text-2xl font-bold text-white">فذ <span class="text-xs font-semibold tracking-[0.25em] text-slate-400">FATH</span></span>
          </div>
          <p class="mt-4 text-sm leading-7 text-slate-200">
            ${t('footer.desc')}
          </p>
        </div>

        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">${t('footer.competitions_title', 'Fath Competitions')}</h4>
          <ul class="space-y-2.5 text-sm text-slate-300">
            <li><a class="transition hover:text-[#38B2AC]" href="competitions.html">${t('footer.rules', 'Rules & Round Regulations')}</a></li>
            <li><a class="transition hover:text-[#38B2AC]" href="https://register.fath-app.com/" target="_blank" rel="noopener">${t('footer.field_reg', 'Field Registration')}</a></li>
            <li><a class="transition hover:text-[#38B2AC]" href="https://instructions.fath-app.com/" target="_blank" rel="noopener">${t('footer.guide', 'Contestant Guide')}</a></li>
            <li><a class="transition hover:text-[#38B2AC]" href="https://sponsors.fath-app.com/" target="_blank" rel="noopener">${t('footer.sponsors', 'Sponsors Portal')}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">${t('footer.play_title', 'Fath Play System')}</h4>
          <ul class="space-y-2.5 text-sm text-slate-300">
            ${playMenu.map(([h, l]) => `<li><a class="transition hover:text-[#38B2AC]" href="${h}">${l}</a></li>`).join('')}
          </ul>
        </div>

        <div>
          <h4 class="mb-4 text-sm font-bold uppercase tracking-wider text-slate-100">${t('footer.contact_title', 'Direct Contact')}</h4>
          <ul class="space-y-2.5 text-sm text-slate-300">
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-[#159A85] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>${t('footer.phone_label', 'Phone:')} <a class="transition hover:text-white" dir="ltr" href="tel:0592825997">0592825997</a></span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-[#159A85] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
              <span>${t('footer.website_label', 'Website:')} <a class="transition hover:text-white" href="https://www.fath-app.com/" target="_blank" rel="noopener">fath-app.com</a></span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="h-4 w-4 text-[#159A85] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>${t('footer.hours', 'Sunday to Thursday: 9:00 AM to 5:00 PM')}</span>
            </li>
          </ul>
          <div class="mt-5 flex gap-3">
            <a href="https://www.facebook.com/thefathapp" target="_blank" rel="noopener" aria-label="Facebook" class="grid h-10 w-10 place-items-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-300 transition hover:border-[#159A85] hover:text-[#38B2AC] hover:bg-slate-800">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14 9h3V5h-3c-2.8 0-4 1.7-4 4.3V11H7v4h3v8h4v-8h3l1-4h-4V9.5c0-.3.2-.5.5-.5Z"/></svg>
            </a>
            <a href="https://www.instagram.com/thefathapp/" target="_blank" rel="noopener" aria-label="Instagram" class="grid h-10 w-10 place-items-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-300 transition hover:border-[#159A85] hover:text-[#38B2AC] hover:bg-slate-800">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-slate-800 py-6 text-center text-xs text-slate-300">
        <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 sm:px-6">
          <p>© <span id="year"></span> ${t('footer.rights')}</p>
          <p class="text-slate-400">${t('footer.handle')}</p>
        </div>
      </div>
    </footer>`;

    let headerMount = document.getElementById('site-header');
    let footerMount = document.getElementById('site-footer');
    if (headerMount) headerMount.innerHTML = header;
    if (footerMount) footerMount.innerHTML = footer;

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    const bindToggle = (btnId) => {
      const b = document.getElementById(btnId);
      if (b && window.FATH_I18N) {
        b.addEventListener('click', () => {
          window.FATH_I18N.toggleLang();
        });
      }
    };
    bindToggle('langToggleBtn');
    bindToggle('mobileLangBtn');
    bindToggle('mobileMenuLangToggle');
  }

  // Initial render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderLayout);
  } else {
    renderLayout();
  }

  // Re-render when language changes
  window.addEventListener('languageChanged', renderLayout);

  // Smooth hash navigation & cross-page anchor handling
  function handleHashScroll() {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }

  window.addEventListener('DOMContentLoaded', handleHashScroll);
  window.addEventListener('load', handleHashScroll);
  window.addEventListener('hashchange', handleHashScroll);

  // In-page smooth scroll interceptor for hash links on the same page
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href');
    if (!href) return;

    if (href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', href);
      }
    } else if (href.startsWith('index.html#') && page === 'home') {
      const hash = href.replace('index.html', '');
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', hash);
      }
    }
  });

  // Scroll reveal observer
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  window.scanReveals = function () {
    document.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
  };

  window.scanReveals();
  window.addEventListener('DOMContentLoaded', window.scanReveals);
  window.addEventListener('load', window.scanReveals);
})();
