import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function Breadcrumb({ crumbs }) {
  const navigate = useNavigate();
  return (
    <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
      {crumbs.map((c, i) => (
        <span key={c.label}>
          {i > 0 && <span className="mx-1">›</span>}
          {c.to
            ? <button onClick={() => navigate(c.to)} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>{c.label}</button>
            : <span style={{ color: '#bbaf9e', fontWeight: 600 }}>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export default function Media() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Local Publications',
      description: 'Abruzzo Canada, Corriere Peligno, and Valle Peligna: local Italian-Canadian periodicals hosted on this site.',
      onClick: () => navigate('/media/local-publications'),
    },
    {
      title: 'In The Media',
      description: 'News articles and press coverage featuring the Italian-Canadian community of London.',
      onClick: null,
    },
  ];

  return (
    <PageLayout activePage="Media" initialOpen={{ Media: true }}>
      {/* Title bar */}
      <div className="px-6 py-4 mb-1 border-4" style={{ background: 'linear-gradient(to right, #432616, #5a3d28)', borderColor: '#5a3d28', borderStyle: 'double' }}>
        <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Media' }]} />
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
          Media
        </h2>
      </div>

      {/* Content boxes */}
      <div className="space-y-1">
        {sections.map((s) => (
          <div key={s.title} className="ornamental-border bg-[#f5f0e8] px-6 py-5">
            {s.onClick ? (
              <button
                onClick={s.onClick}
                className="underline font-semibold transition hover:opacity-75 text-left block mb-2"
                style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#2c6e8a' }}
              >
                {s.title}
              </button>
            ) : (
              <p className="font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', color: '#432616' }}>
                {s.title}
              </p>
            )}
            <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
