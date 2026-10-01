// الهيدر والفوتر المشتركان لكل صفحات موقع فذ
(function () {
  const page = document.body.dataset.page || '';
  const playPages = ['play', 'console', 'store', 'hub', 'parents'];

  const link = (href, label, key) =>
    `<a href="${href}" class="px-3 py-2 rounded-lg transition hover:text-white hover:bg-white/5 ${
      page === key ? 'text-white bg-white/10' : 'text-slate-300'
    }">${label}</a>`;

  const playMenu = [
    ['play.html', 'نظرة عامة على فذ بلاي', 'play'],
    ['console.html', 'جهاز فذ — Fath Console', 'console'],
    ['store.html', 'متجر فذ — Fath Store', 'store'],
    ['hub.html', 'فذ هب — للمطوّرين', 'hub'],
    ['parents.html', 'تطبيق فذ للأهل', 'parents'],
  ];

  const header = `
  <header class="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <a href="index.html" class="flex items-center gap-3">
        <span class="logo-crop h-11 w-11"><img src="assets/fath-logo-white.png" alt="شعار فذ" /></span>
        <span class="leading-tight">
          <span class="block font-display text-xl font-black text-white">فذ</span>
          <span class="block text-[11px] tracking-[.3em] text-slate-400">FATH</span>
        </span>
      </a>
      <nav class="hidden items-center gap-1 text-sm font-medium lg:flex">
        ${link('index.html', 'الرئيسية', 'home')}
        ${link('index.html#vision', 'الرؤية والرسالة', '')}
        ${link('competitions.html', 'مسابقات فذ', 'competitions')}
        <div class="group relative">
          <button class="flex items-center gap-1 px-3 py-2 rounded-lg transition hover:text-white hover:bg-white/5 ${
            playPages.includes(page) ? 'text-white bg-white/10' : 'text-slate-300'
          }">فذ بلاي
            <svg class="h-4 w-4 transition group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="invisible absolute right-0 top-full w-64 translate-y-2 rounded-2xl border border-white/10 bg-ink-900/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100">
            ${playMenu.map(([h, l, k]) => `<a href="${h}" class="block rounded-xl px-4 py-2.5 text-sm transition hover:bg-white/5 ${page === k ? 'text-neon-cyan' : 'text-slate-300 hover:text-white'}">${l}</a>`).join('')}
          </div>
        </div>
        ${link('index.html#contact', 'تواصل معنا', '')}
      </nav>
      <div class="hidden items-center gap-2 lg:flex">
        <a href="https://register.fath-app.com/" target="_blank" rel="noopener" class="rounded-xl bg-gradient-to-l from-gold-400 to-gold-500 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-gold transition hover:brightness-110">سجّل في المسابقة</a>
      </div>
      <button id="menuBtn" class="rounded-lg p-2 text-slate-200 hover:bg-white/10 lg:hidden" aria-label="القائمة">
        <svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
    <div id="mobileMenu" class="hidden border-t border-white/5 bg-ink-950 px-4 pb-6 pt-2 lg:hidden">
      <a href="index.html" class="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">الرئيسية</a>
      <a href="index.html#vision" class="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">الرؤية والرسالة</a>
      <a href="competitions.html" class="block rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5">مسابقات فذ</a>
      <p class="px-3 pb-1 pt-4 text-xs font-bold tracking-wider text-neon-cyan">فذ بلاي</p>
      ${playMenu.map(([h, l]) => `<a href="${h}" class="block rounded-lg px-6 py-2.5 text-slate-300 hover:bg-white/5">${l}</a>`).join('')}
      <a href="https://register.fath-app.com/" target="_blank" rel="noopener" class="mt-4 block rounded-xl bg-gold-400 px-5 py-3 text-center font-bold text-ink-950">سجّل في المسابقة</a>
    </div>
  </header>`;

  const footer = `
  <footer class="relative mt-24 border-t border-white/5 bg-ink-950">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="logo-crop h-14 w-14"><img src="assets/fath-logo-white.png" alt="شعار فذ" /></span>
          <span class="font-display text-2xl font-black text-white">فذ <span class="text-sm font-medium tracking-[.3em] text-slate-500">FATH</span></span>
        </div>
        <p class="mt-4 text-sm leading-7 text-slate-400">منظومة عربية تجمع التعلّم والمنافسة والحركة في تجربة واحدة ممتعة — من طاولة المسابقات إلى شاشة البيت.</p>
      </div>
      <div>
        <h4 class="mb-4 font-bold text-white">مسابقات فذ</h4>
        <ul class="space-y-2 text-sm text-slate-400">
          <li><a class="hover:text-gold-400" href="competitions.html">عن المسابقة</a></li>
          <li><a class="hover:text-gold-400" href="https://register.fath-app.com/" target="_blank" rel="noopener">التسجيل</a></li>
          <li><a class="hover:text-gold-400" href="https://instructions.fath-app.com/" target="_blank" rel="noopener">التعليمات</a></li>
          <li><a class="hover:text-gold-400" href="https://sponsors.fath-app.com/" target="_blank" rel="noopener">الرعاة</a></li>
        </ul>
      </div>
      <div>
        <h4 class="mb-4 font-bold text-white">فذ بلاي</h4>
        <ul class="space-y-2 text-sm text-slate-400">
          ${playMenu.map(([h, l]) => `<li><a class="hover:text-neon-cyan" href="${h}">${l}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 class="mb-4 font-bold text-white">تواصل معنا</h4>
        <ul class="space-y-2 text-sm text-slate-400">
          <li>الهاتف: <a class="hover:text-white" dir="ltr" href="tel:0592825997">0592825997</a></li>
          <li>الموقع: <a class="hover:text-white" href="https://www.fath-app.com/" target="_blank" rel="noopener">fath-app.com</a></li>
          <li>السبت – الخميس: 9:00 ص – 5:00 م</li>
        </ul>
        <div class="mt-4 flex gap-3">
          <a href="https://www.facebook.com/thefathapp" target="_blank" rel="noopener" aria-label="فيسبوك" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-neon-cyan hover:text-neon-cyan">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 9h3V5h-3c-2.8 0-4 1.7-4 4.3V11H7v4h3v8h4v-8h3l1-4h-4V9.5c0-.3.2-.5.5-.5Z"/></svg>
          </a>
          <a href="https://www.instagram.com/thefathapp/" target="_blank" rel="noopener" aria-label="انستجرام" class="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-neon-pink hover:text-neon-pink">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="border-t border-white/5 py-6 text-center text-xs text-slate-500">© <span id="year"></span> فذ — Fath. جميع الحقوق محفوظة. <span class="mx-1">·</span> @thefathapp</div>
  </footer>`;

  document.getElementById('site-header').outerHTML = header;
  document.getElementById('site-footer').outerHTML = footer;
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('menuBtn').addEventListener('click', () =>
    document.getElementById('mobileMenu').classList.toggle('hidden'));

  // ظهور تدريجي للعناصر عند التمرير
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
})();
