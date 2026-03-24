import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, XCircle } from 'lucide-react';
import { searchContent } from '../lib/searchIndex';

const BASE  = { color: '#432616', borderBottom: '1px solid rgba(255,255,255,1)', backgroundColor: 'transparent' };
const ACTIVE = { color: '#5a3d28', borderBottom: '1px solid rgba(255,255,255,1)', backgroundColor: 'rgba(255,255,255,1)' };

function NavBtn({ label, indent = 0, expandable, expanded, onClick, highlight, children }) {
  const style = { ...(highlight ? ACTIVE : BASE), paddingLeft: `${8 + indent * 16}px`, paddingRight: '8px' };
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
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    const found = searchContent(val);
    setResults(found);
    setShowResults(found.length > 0);
  };

  const handleResultClick = (entry) => {
    setOpen(entry.open);
    setQuery('');
    setResults([]);
    setShowResults(false);
    navigate(entry.route);
  };

  const handleSearch = () => {
    if (results.length > 0) handleResultClick(results[0]);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* Search Box */}
      <div className="ornamental-border bg-yellow-50 p-5">
        <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: 'rgba(0,0,0,1)' }}>
          SEARCH THE ARCHIVES
        </h2>
        <label className="text-xs block mb-3 font-semibold uppercase tracking-wide" style={{ color: '#5a3d28' }}>
          Try keywords or phrases...
        </label>
        <div className="relative" ref={searchRef}>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              onFocus={() => results.length > 0 && setShowResults(true)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search archives..."
              className="flex-1 px-3 py-2 bg-white border-2 text-sm focus:outline-none focus:ring-2"
              style={{ borderColor: '#bbaf9e', borderStyle: 'double', borderRadius: '1px', '--tw-ring-color': '#432616' }}
            />
          </div>

          {/* Results dropdown */}
          {showResults && (
            <div
              className="absolute left-0 right-0 z-50 bg-white shadow-lg border"
              style={{ borderColor: '#bbaf9e', top: '100%', marginTop: '-8px' }}
            >
              {results.map((entry) => (
                <button
                  key={entry.title}
                  onClick={() => handleResultClick(entry)}
                  className="w-full text-left px-3 py-2 border-b text-sm transition"
                  style={{ borderColor: '#f0ece4', color: '#432616' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f5f0e8'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                >
                  <div className="font-semibold" style={{ fontFamily: 'Playfair Display, serif', fontSize: '0.8rem' }}>{entry.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: '#5a3d28' }}>{entry.description}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={handleSearch}
          className="w-full font-bold transition transform hover:-translate-y-0.5 shadow-md"
          style={{ backgroundColor: '#432616', color: '#ffffff', border: '4px groove #4e2f20', borderRadius: '1px', overflow: 'hidden', padding: '2px 0', fontFamily: 'Helvetica, sans-serif' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a1810'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#432616'}
        >
          Search
        </button>
      </div>

      {/* Explore Box */}
      <div className="ornamental-border bg-yellow-50 p-5">
        <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
          EXPLORE
        </h2>
        <nav className="space-y-0">

          <NavBtn label="Welcome" highlight={activePage === 'Welcome'} onClick={() => navigate('/')} />

          <NavBtn label="Media" expandable expanded={open.Media} onClick={() => toggle('Media')}>
            <NavBtn label="Local Publications" indent={1} expandable expanded={open.LocalPub} onClick={() => toggle('LocalPub')}>
              {['Abruzzo Canada', 'Corriere Peligno', 'Valle Peligna'].map((p) => (
                <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
              ))}
            </NavBtn>
            <NavBtn label="In the Media" indent={1} onClick={() => {}} />
          </NavBtn>

          <NavBtn label="People and their Stories" expandable expanded={open.People} onClick={() => toggle('People')}>
            <NavBtn label="History" indent={1} expandable expanded={open.History} onClick={() => toggle('History')}>
              {['Beginnings', 'Documentary', 'The Immigrant Experience', 'Contributions from the Community'].map((p) => (
                <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
              ))}
            </NavBtn>
            <NavBtn label="Autobiographies" indent={1} onClick={() => {}} />
          </NavBtn>

          <NavBtn label="Events and Association" expandable expanded={open.Events} onClick={() => toggle('Events')}>
            <NavBtn label="ICAP Events" indent={1} expandable expanded={open.ICAPEvents} onClick={() => toggle('ICAPEvents')}>
              {['Events in London', 'Events in Canada'].map((p) => (
                <NavBtn key={p} label={p} indent={2} onClick={() => {}} />
              ))}
            </NavBtn>
            <NavBtn label="Associations" indent={1} onClick={() => {}} />
          </NavBtn>

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

          <NavBtn label="Contact Us" highlight={activePage === 'Contact'} onClick={() => navigate('/contact')} />

        </nav>
      </div>
    </>
  );
}
