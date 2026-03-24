import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function Breadcrumb({ crumbs }) {
  const navigate = useNavigate();
  return (
    <nav className="mb-6 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
      {crumbs.map((c, i) => (
        <span key={c.label}>
          {i > 0 && <span className="mx-1">›</span>}
          {c.to
            ? <button onClick={() => navigate(c.to)} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>{c.label}</button>
            : <span style={{ color: '#432616', fontWeight: 600 }}>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export default function Media() {
  const navigate = useNavigate();

  return (
    <PageLayout activePage="Media" initialOpen={{ Media: true }}>
      <div className="ornamental-border bg-yellow-50 p-8">
        <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Media' }]} />

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Media
        </h2>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        <p className="leading-relaxed mb-8" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          Explore Italian-Canadian publications and media coverage that document the history and stories of our community in London and across Canada.
        </p>

        <ul className="space-y-4">
          <li>
            <button
              onClick={() => navigate('/media/local-publications')}
              className="underline font-semibold transition hover:opacity-75 text-left"
              style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', color: '#2c6e8a' }}
            >
              Local Publications
            </button>
            <p className="mt-1" style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#5a3d28' }}>
              Abruzzo Canada, Corriere Peligno, and Valle Peligna — local Italian-Canadian periodicals hosted on this site.
            </p>
          </li>

          <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

          <li>
            <button
              className="underline font-semibold transition hover:opacity-75 text-left"
              style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.1rem', color: '#2c6e8a' }}
            >
              In The Media
            </button>
            <p className="mt-1" style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#5a3d28' }}>
              News articles and press coverage featuring the Italian-Canadian community of London.
            </p>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
