import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { P, GH, LI, RES, EM } from './data.js';
import { Tags, SkillGroups, Arch, Thumb } from './components.jsx';

const Sec = ({ children }) => <section><div className="w">{children}</div></section>;
const Big = ({ children }) => <div className="cs-h"><h1 style={{ fontSize: 'clamp(36px,6vw,72px)' }}>{children}</h1></div>;
const Row = ({ t, children }) => <div className="cs"><h2 style={{ fontSize: 28 }}>{t}</h2><div>{children}</div></div>;
const Ext = ({ href, children, ...r }) => <a href={href} target="_blank" rel="noopener noreferrer" {...r}>{children}</a>;

const Rows = () => (<>
{P.map(p => (
      <div className="pr" key={p.id}>
        <Link className="th" to={`/projects/${p.id}`} aria-label={`${p.n} case study`}><Thumb id={p.id} /></Link>
        <div><span className="when">{p.cat}</span><h2 style={{ marginTop: 6 }}>{p.n}</h2><p>{p.d}</p><Tags t={p.tech} />
          <div className="row" style={{ marginTop: 12 }}><Link className="btn p s" to={`/projects/${p.id}`}>Read case study</Link><Ext className="btn s" href={p.url}>Live demo</Ext></div></div>
      </div>))}
</>);
export function Home() {
  return (<>
    <div className="w"><div className="hero"><div>
      <div className="avail"><i />Open to opportunities, 2027 batch</div>
      <h1>Engineering Web Experiences.<br /><em>Building Intelligent Solutions.</em></h1>
      <div className="role">Shubham Tiwari · Full Stack Developer | MERN Stack | AI/ML Developer</div>
      <p>I build scalable web applications and intelligent solutions using modern web technologies, machine learning, and AI.</p>
      <div className="row" style={{ marginTop: 28 }}>
        <Link className="btn p" to="/projects">View My Projects</Link>
        <Ext className="btn" href={RES}>Download Resume</Ext>
        <Ext className="btn s" href={GH}>GitHub</Ext>
        <Ext className="btn s" href={LI}>LinkedIn</Ext>
        <a className="btn s" href={`mailto:${EM}`}>Email</a>
      </div></div>
      <div className="stack"><Thumb id="loanx" /><div className="s2"><Thumb id="shubh-gpt" /></div></div></div></div>
    <div className="w"><div className="stats">{[['3', 'Live projects'], ['0.9896', 'LoanX ROC-AUC'], ['200+', 'DSA problems in Java'], ['2027', 'B.Tech CSE graduation']].map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div></div>
    <Sec><h2>Selected work</h2><p>Three projects, each live and deployed.</p><Rows /></Sec>
    <Sec><div className="sh"><div><h2>Technical expertise</h2></div><div className="sk" style={{ gridTemplateColumns: '1fr 1fr' }}><SkillGroups /></div></div></Sec>
    <Sec><div className="sh"><div><h2>Experience</h2></div><div>
      <span className="when">March 2026 – May 2026</span>
      <h3>AI/ML & Full Stack Development Intern, Deepaarogya AI Pvt. Ltd.</h3>
      <p>React development, responsive UI and API integration for AI-powered healthcare applications.</p>
      <Link className="btn s" to="/experience">Full timeline</Link></div></div></Sec>
    <Sec><div className="sh"><div><h2>Achievements</h2></div><div>
      <h3>200+ DSA problems solved in Java</h3>
      <p>Steady problem-solving practice that sits behind the way I write and structure code.</p></div></div></Sec>
    <Sec><div className="cta"><h2>Have an opportunity or an interesting idea?</h2><a className="big" href={`mailto:${EM}`}>{EM}</a><Link className="btn" to="/contact">Send a message</Link></div></Sec>
  </>);
}

export const About = () => (
  <div className="w">
    <Big>Computer science, built through shipping things.</Big>
    <Row t="Introduction">
      <p>I'm Shubham Tiwari, a Computer Science and Engineering undergraduate at Moradabad Institute of Technology (MIT Moradabad), affiliated to AKTU. I expect to graduate in 2027.</p>
      <p>I started with full stack development on the MERN stack and moved toward AI and machine learning, where I build intelligent applications on top of working web products.</p>
    </Row>
    <Row t="How I work"><p>I like to understand a problem before choosing tools, then build it end to end: interface, API, data and model. I deploy what I build so it can be used and judged in the open.</p></Row>
    <Row t="Journey"><div className="tl">
      <div><span className="when">2023</span><h3>Began B.Tech in CSE</h3><p>MIT Moradabad, AKTU.</p></div>
      <div><span className="when">Ongoing</span><h3>Full stack development</h3><p>React, Node.js, MongoDB; projects deployed on Vercel.</p></div>
      <div><span className="when">March 2026 – May 2026</span><h3>AI/ML & Full Stack Development Intern, Deepaarogya AI</h3><p>Worked on AI-powered healthcare applications.</p></div>
      <div><span className="when">2027</span><h3>Expected graduation</h3></div></div></Row>
  </div>
);

export const Skills = () => (
  <div className="w"><div className="cs-h"><h1 style={{ fontSize: 'clamp(36px,6vw,72px)' }}>Skills</h1><p>Grouped by what they are used for.</p></div><div className="sk"><SkillGroups /></div></div>
);

export const Projects = () => (
  <div className="w">
    <div className="cs-h" style={{ paddingBottom: 8 }}><h1 style={{ fontSize: 'clamp(36px,6vw,72px)' }}>Projects</h1><p>Three projects, from machine learning to real-time communication.</p></div>
    <Rows />
  </div>
);

export function Study() {
  const { id } = useParams();
  const i = P.findIndex(p => p.id === id);
  if (i < 0) return <Navigate to="/projects" replace />;
  const p = P[i], pv = P[(i + 2) % 3], nx = P[(i + 1) % 3];
  const Ul = ({ a }) => <ul>{a.map(x => <li key={x}>{x}</li>)}</ul>;
  return (
    <div className="w">
      <div className="cs-h">
        <Link className="back" to="/projects">← Back to all projects</Link><br />
        <span className="when">{p.cat}</span>
        <h1 style={{ fontSize: 'clamp(40px,7vw,88px)' }}>{p.n}</h1>
        <p>{p.d}</p><Tags t={p.tech} />
        <div className="row" style={{ marginTop: 16 }}><Ext className="btn p" href={p.url}>Live Demo</Ext><Ext className="btn" href={GH}>GitHub Repository</Ext></div>
      </div>
      <div className="cover"><Thumb id={p.id} /></div>
      <Row t="Problem"><p>{p.prob}</p></Row>
      <Row t="Solution"><p>{p.sol}</p></Row>
      <Row t="Key features"><Ul a={p.feat} /></Row>
      <Row t="Architecture"><Arch a={p.arch} /></Row>
      <Row t="Technical implementation"><Ul a={p.imp} /></Row>
      <Row t="Challenges and solutions">{p.ch.map(c => <div key={c[0]}><h3>{c[0]}</h3><p>{c[1]}</p></div>)}</Row>
      <Row t="Key learnings"><Ul a={p.learn} /></Row>
      <div className="pn"><Link to={`/projects/${pv.id}`}><small>Previous project</small>{pv.n}</Link><Link to={`/projects/${nx.id}`}><small>Next project</small>{nx.n}</Link></div>
    </div>
  );
}

export const Experience = () => (
  <div className="w"><Big>Experience</Big><div className="tl">
    <div><span className="when">March 2026 – May 2026</span><h2 style={{ fontSize: 28 }}>AI/ML & Full Stack Development Intern, Deepaarogya AI Pvt. Ltd.</h2>
      <p>An internship focused on building the interface and connecting it to services for AI-powered healthcare applications.</p>
      <ul style={{ color: 'var(--mu)' }}><li>React development</li><li>Responsive UI development</li><li>API integration</li><li>Contributions to AI-enabled healthcare application workflows, including digital medical records and healthcare user interactions</li></ul></div>
    <div><span className="when">Achievements</span><ul style={{ color: 'var(--mu)' }}><li>Solved 200+ DSA problems using Java</li><li>Developed and deployed full-stack applications</li><li>Hands-on experience in machine learning and AI integration</li></ul></div>
    <div><span className="when">Expected graduation 2027</span><h2 style={{ fontSize: 28 }}>B.Tech Computer Science and Engineering</h2><p>MIT Moradabad, AKTU University.</p></div>
  </div></div>
);

const FIELDS = [['name', 'Name'], ['email', 'Email'], ['subject', 'Subject'], ['message', 'Message']];
export function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '', company: '' });
  const [err, setErr] = useState({});
  const [st, setSt] = useState('idle'); // idle | sending | sent | failed
  const submit = async e => {
    e.preventDefault();
    const er = {};
    FIELDS.forEach(([k]) => {
      const x = v[k].trim();
      if (!x) er[k] = `Enter your ${k}.`;
      else if (k === 'email' && !/^\S+@\S+\.\S+$/.test(x)) er[k] = 'Enter a valid email address.';
    });
    setErr(er);
    if (Object.keys(er).length) return;
    setSt('sending');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(v) });
      setSt(r.ok ? 'sent' : 'failed');
    } catch { setSt('failed'); }
  };
  return (
    <div className="w">
      <Big>Have an opportunity or an interesting idea? Let's connect.</Big>
      <div className="sh" style={{ paddingBottom: 72 }}>
        <div>
          <p><a className="btn" href={`mailto:${EM}`}>{EM}</a></p>
          <p><Ext className="btn" href={LI}>LinkedIn</Ext></p>
          <p><Ext className="btn" href={GH}>GitHub</Ext></p>
        </div>
        <div>
          {st === 'sent' ? (
            <div className="ok" style={{ display: 'block' }}><h3>Message sent</h3><p>Thanks for reaching out. I'll reply to the email address you entered.</p></div>
          ) : (
            <form onSubmit={submit} noValidate>
              {FIELDS.map(([k, l]) => (
                <div key={k}><label htmlFor={k}>{l}</label>
                  {k === 'message'
                    ? <textarea id={k} rows="5" value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} />
                    : <input id={k} type={k === 'email' ? 'email' : 'text'} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} />}
                  <div className="er">{err[k]}</div></div>))}
              <input name="company" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1 }} value={v.company} onChange={e => setV({ ...v, company: e.target.value })} />
              <button className="btn p" style={{ justifySelf: 'start' }} disabled={st === 'sending'}>{st === 'sending' ? 'Sending…' : 'Send Message'}</button>
              {st === 'failed' && <div className="er" role="alert">The message could not be sent. Please email {EM} directly.</div>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
