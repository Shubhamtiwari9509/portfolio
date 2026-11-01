import { useEffect, useLayoutEffect, useState } from 'react';
import { reveal, spot } from './fx.js';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { GH, LI, RES } from './data.js';
import { About, Contact, Experience, Home, Projects, Skills, Study } from './pages.jsx';

const LINKS = [['/', 'Home'], ['/about', 'About'], ['/skills', 'Skills'], ['/projects', 'Projects'], ['/experience', 'Experience'], ['/contact', 'Contact']];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [top, setTop] = useState(false);
  const { pathname } = useLocation();
  useLayoutEffect(() => reveal(), [pathname]);
  useEffect(() => spot(), []);
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('theme', theme); } catch {} }, [theme]);
  useEffect(() => { scrollTo(0, 0); setMenu(false); }, [pathname]);
  useEffect(() => {
    const s = () => setTop(scrollY > 600);
    addEventListener('scroll', s, { passive: true });
    const k = e => e.key === 'Escape' && setMenu(false);
    addEventListener('keydown', k);
    return () => { removeEventListener('scroll', s); removeEventListener('keydown', k); };
  }, []);
  return (<>
    <header><div className="w"><nav>
      <Link className="logo" to="/">SHUBHAM<span>.DEV</span></Link>
      {LINKS.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => 'l' + (isActive ? ' on' : '')}>{t}</NavLink>)}
      <a className="btn s rs" href={RES} target="_blank" rel="noopener noreferrer">Resume</a>
      <button className="btn ic" aria-label="Toggle light and dark theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>◐</button>
      <button className="btn ic burger" aria-label="Open menu" onClick={() => setMenu(true)}>☰</button>
    </nav></div></header>
    <div id="menu" className={menu ? 'open' : ''} role="dialog" aria-label="Menu">
      <button className="btn ic" aria-label="Close menu" onClick={() => setMenu(false)}>✕</button>
      {LINKS.map(([to, t]) => <Link key={to} to={to}>{t}</Link>)}
    </div>
    <main key={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Study />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <footer><div className="w"><div className="wm" aria-hidden="true">Shubham Tiwari</div><span>Shubham Tiwari · B.Tech CSE, 2027</span>
      <span><a href={GH} target="_blank" rel="noopener noreferrer">GitHub</a> &nbsp; <a href={LI} target="_blank" rel="noopener noreferrer">LinkedIn</a></span></div></footer>
    <button className={'btn ic' + (top ? ' show' : '')} id="top" aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
  </>);
}
