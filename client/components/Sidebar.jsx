import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, XCircle } from 'lucide-react';

const BASE = { color: '#432616', borderBottom: '1px solid rgba(255,255,255,1)', backgroundColor: 'transparent' };
const ACTIVE = { color: '#5a3d28', borderBottom: '1px solid rgba(255,255,255,1)', backgroundColor: 'rgba(255,255,255,1)' };

function NavBtn({ label, indent = 0, expandable, expanded, onClick, highlight, children }) {
  const style = { ...( highlight ? ACTIVE : BASE), paddingLeft: `${8 + indent * 16}px`, paddingRight: '8px' };
  return (
    <>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left transition py-3"
        style={style}
        onMouseEnter={(e) => { if (!highlight) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,1)'; }}
        onMouseLeave={(e) => { if (!highlight) e.currentTarget.style.backgroundColor = 'transparent'; }}
      >
        <span className="font-semibold text-sm">» {label}</span>
        {expandable && (
          expanded
            ? <XCircle size={16} className="flex-shrink-0" style={{ color: '#432616' }} />
            : <PlusCircle size={16} className="flex-shrink-0" style={{ color: '#432616' }} />
        )}
      </button>
      {expanded && children}
    </>
  );
}

export default function Sidebar({ activePage }) {
  const [open, setOpen] = useState({});
  const navigate = useNavigate();

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="ornamental-border bg-yellow-50 p-5">
      <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
        EXPLORE
      </h2>
      <nav className="space-y-0">

        {/* Welcome */}
        <NavBtn label="Welcome" highlight={activePage === 'Welcome'} onClick={() => navigate('/')} />

        {/* Media */}
        <NavBtn label="Media" expandable expanded={open.Media} onClick={() => toggle('Media')}>
          <NavBtn label="Local Publications" indent={1} expandable expanded={open.LocalPub} onClick={() => toggle('LocalPub')}>
            {['Abruzzo Canada', 'Corriere Peligno', 'Valle Peligna'].map((p) => (
              <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
            ))}
          </NavBtn>
          <NavBtn label="In the Media" indent={1} onClick={() => {}} />
        </NavBtn>

        {/* People and their Stories */}
        <NavBtn label="People and their Stories" expandable expanded={open.People} onClick={() => toggle('People')}>
          <NavBtn label="History" indent={1} expandable expanded={open.History} onClick={() => toggle('History')}>
            {['Beginnings', 'Documentary', 'The Immigrant Experience', 'Contributions from the Community'].map((p) => (
              <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
            ))}
          </NavBtn>
          <NavBtn label="Autobiographies" indent={1} onClick={() => {}} />
        </NavBtn>

        {/* Events and Association */}
        <NavBtn label="Events and Association" expandable expanded={open.Events} onClick={() => toggle('Events')}>
          <NavBtn label="ICAP Events" indent={1} expandable expanded={open.ICAPEvents} onClick={() => toggle('ICAPEvents')}>
            {['Events in London', 'Events in Canada'].map((p) => (
              <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
            ))}
          </NavBtn>
          <NavBtn label="Associations" indent={1} onClick={() => {}} />
        </NavBtn>

        {/* Interviews */}
        <NavBtn label="Interviews" expandable expanded={open.Interviews} onClick={() => toggle('Interviews')}>
          <NavBtn label="Interview By Students" indent={1} expandable expanded={open.IntStudents} onClick={() => toggle('IntStudents')}>
            {['Video', 'Audio'].map((p) => (
              <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
            ))}
          </NavBtn>
          <NavBtn label="Interview By Community Members" indent={1} expandable expanded={open.IntCommunity} onClick={() => toggle('IntCommunity')}>
            {['Video Interviews By the Community', 'Audio Interviews By Community'].map((p) => (
              <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
            ))}
          </NavBtn>
        </NavBtn>

        {/* Contact Us */}
        <NavBtn label="Contact Us" highlight={activePage === 'Contact'} onClick={() => navigate('/contact')} />

      </nav>
    </div>
  );
}
