import { P, SK } from './data.js';

export const Tags = ({ t }) => t.map(x => <span className="tag" key={x}>{x}</span>);

export const SkillGroups = () =>
  Object.entries(SK).map(([k, v]) => (
    <div key={k}>
      <h3>{k}</h3>
      {v.split(' ').map(x => <span className="chip" key={x}>{x.replace(/\u00A0/g, ' ')}</span>)}
    </div>
  ));

export function Arch({ a }) {
  return (
    <div className="arch">
      <svg viewBox="0 0 560 70" role="img" aria-label={'Architecture: ' + a.join(', ')}>
        <g fill="var(--card)" stroke="var(--bd)">{a.map((_, i) => <rect key={i} x={i * 200} y={10} width={160} height={50} rx={6} />)}</g>
        <g fill="var(--tx)" fontSize="13" textAnchor="middle" fontFamily="Geist,sans-serif">{a.map((t, i) => <text key={i} x={i * 200 + 80} y={40}>{t}</text>)}</g>
        <g stroke="var(--ac)" strokeWidth="1.5">{[0, 1].map(i => <path key={i} d={`M${i * 200 + 160} 35H${i * 200 + 200}`} />)}</g>
      </svg>
    </div>
  );
}

const PC = { loanx: '#3B82F6', 'shubh-gpt': '#8B5CF6', bondchat: '#14B8A6' };
function Win({ id, children }) {
  const p = P.find(x => x.id === id);
  return <div className="win" style={{ '--pc': PC[id] }}><div className="win-b"><i /><i /><i /><span>{p.url.replace('https://', '')}</span></div><div className="win-c">{children}</div></div>;
}
const G = { display: 'grid', height: '100%', gap: 12 };
export function Thumb({ id }) {
  let b;
  if (id === 'loanx') b = (
    <div style={{ ...G, gridTemplateColumns: '.35fr 2fr' }}>
      <div><div className="bar a" style={{ width: '70%' }} /><div className="bar" /><div className="bar" /><div className="bar" /></div>
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr', gap: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>{[['ROC-AUC', '0.9896'], ['Accuracy', '96.84%'], ['Model', 'XGBoost']].map(([a, v]) => <div className="k" key={a}>{a}<b>{v}</b></div>)}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 10 }}>
          <div className="k" style={{ display: 'grid', placeItems: 'center' }}><svg viewBox="0 0 120 70" width="100%"><path d="M10 64A50 50 0 0 1 110 64" fill="none" stroke="var(--bd)" strokeWidth="9" /><path d="M10 64A50 50 0 0 1 106 46" fill="none" stroke="var(--ac)" strokeWidth="9" /><text x="60" y="58" textAnchor="middle" fill="var(--tx)" fontSize="11">Approval</text></svg></div>
          <div className="k"><svg viewBox="0 0 160 70" width="100%" height="100%" preserveAspectRatio="none"><polyline points="0,60 25,52 50,55 75,35 100,38 125,18 160,8" fill="none" stroke="var(--ac2)" strokeWidth="2.5" /></svg></div>
        </div></div></div>);
  else if (id === 'shubh-gpt') b = (
    <div style={{ ...G, gridTemplateColumns: '.6fr 2fr' }}>
      <div><div className="bar a" /><div className="bar" /><div className="bar" /><div className="bar" /></div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1 }}><div className="msg me">Explain REST vs GraphQL</div><div className="msg" style={{ maxWidth: '90%' }}><div className="bar a" style={{ width: '80%' }} /><div className="bar" style={{ width: '60%' }} /></div></div>
        <div className="k" style={{ borderRadius: 99, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>Message Shubh GPT<span style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg,var(--ac),var(--ac2))' }} /></div>
      </div></div>);
  else b = (
    <div style={{ ...G, gridTemplateColumns: '.7fr 2fr' }}>
      <div>{[0, 1, 2].map(i => <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}><span style={{ width: 22, height: 22, borderRadius: '50%', background: i ? 'var(--bd)' : 'var(--ac2)', flex: 'none' }} /><div className="bar" style={{ flex: 1, margin: 0 }} /></div>)}</div>
      <div style={{ position: 'relative', borderRadius: 10, background: 'linear-gradient(135deg,var(--ac),var(--ac2))' }}>
        <div style={{ position: 'absolute', right: 10, top: 10, width: '28%', aspectRatio: '4/3', borderRadius: 8, background: 'var(--bg2)' }} />
        <div style={{ position: 'absolute', left: '50%', bottom: 10, transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>{['var(--bg2)', 'var(--bg2)', '#EF4444'].map((c, i) => <span key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: c }} />)}</div>
      </div></div>);
  return <Win id={id}>{b}</Win>;
}
