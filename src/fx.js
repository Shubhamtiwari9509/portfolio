const still = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

function count(b) {
  const m = (b.dataset.t || '').match(/^([\d.]+)(\+?)$/);
  if (!m || +m[1] > 1900) return;
  const n = +m[1], d = (m[1].split('.')[1] || '').length, t0 = performance.now();
  const f = t => {
    const k = Math.min(1, (t - t0) / 1200), e = 1 - Math.pow(1 - k, 3);
    b.textContent = (n * e).toFixed(d) + m[2];
    if (k < 1) requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
}

// Scroll reveal + count-up for the stats strip.
export function reveal() {
  if (still()) return;
  const els = [...document.querySelectorAll('.sh,.cta,.stats,.cs,div.pr')];
  document.querySelectorAll('.stats b').forEach(b => (b.dataset.t = b.textContent));
  els.forEach(e => e.classList.add('rv'));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add('in');
    io.unobserve(en.target);
    en.target.querySelectorAll('b[data-t]').forEach(count);
  }), { threshold: 0.12 });
  els.forEach(e => io.observe(e));
  return () => io.disconnect();
}

// Soft light that follows the cursor over skill cards and the CTA panel.
export function spot() {
  const m = e => {
    const t = e.target.closest && e.target.closest('.sk>div,.cta');
    if (!t) return;
    const r = t.getBoundingClientRect();
    t.style.setProperty('--mx', e.clientX - r.left + 'px');
    t.style.setProperty('--my', e.clientY - r.top + 'px');
  };
  addEventListener('mousemove', m, { passive: true });
  return () => removeEventListener('mousemove', m);
}
