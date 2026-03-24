import { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

const issues = {
  '2000': [
    { label: 'Winter 2000', image: 'AC_Winter2000.jpg' },
    { label: 'Summer 2000', image: null },
  ],
  '2001': [
    { label: 'Winter - Spring 2001', image: null },
  ],
};

export default function AbruzzoCanada() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;
  const [viewing, setViewing] = useState(null);

  return (
    <PageLayout activePage="AbruzzoCanada" initialOpen={{ Media: true, LocalPub: true }}>

      {/* Breadcrumb + Title */}
      <div className="ornamental-border bg-[#f5f0e8] p-8 mb-1">
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif' }}>
          {[
            { label: 'Home', to: '/' },
            { label: 'Media', to: '/media' },
            { label: 'Local Publications', to: '/media/local-publications' },
            { label: 'Abruzzo Canada', to: null },
          ].map((c, i) => (
            <span key={c.label}>
              {i > 0 && <span className="mx-1" style={{ color: '#5a3d28' }}>›</span>}
              {c.to
                ? <button onClick={() => navigate(c.to)} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>{c.label}</button>
                : <span style={{ color: '#432616' }}>{c.label}</span>}
            </span>
          ))}
        </nav>

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Abruzzo Canada
        </h2>

        {/* Cover + info row */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <img
            src={`${base}abruzzo-canada.jpg`}
            alt="Abruzzo Canada cover"
            className="shadow-lg flex-shrink-0 mx-auto sm:mx-0"
            style={{ width: '180px', borderRadius: '2px' }}
          />
          <div className="flex-1">
            <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', color: '#432616' }}>
              Abruzzo Canada
            </h3>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              A local Italian-Canadian periodical documenting cultural events, community news, and Italian-Canadian life.
            </p>
            <div className="border p-4" style={{ borderColor: '#bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}>
              <p className="mb-1"><strong>Publication Type:</strong> Local Periodical</p>
              <p className="mb-1"><strong>Language:</strong> Italian / English</p>
              <p><strong>Years Available:</strong> 2000 – 2001</p>
            </div>
          </div>
        </div>

        {/* Available Issues */}
        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Available Issues
        </h3>

        <div className="flex flex-wrap gap-4">
          {Object.entries(issues).map(([year, items]) => (
            <div key={year} className="border p-4 min-w-[180px]" style={{ borderColor: '#bbaf9e', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.4)' }}>
              <p className="font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#432616' }}>
                {year}
              </p>
              <ul className="space-y-2">
                {items.map((issue) => (
                  <li key={issue.label}>
                    {issue.image ? (
                      <button
                        onClick={() => setViewing(issue)}
                        className="underline hover:opacity-75 transition text-left"
                        style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                      >
                        › {issue.label}
                      </button>
                    ) : (
                      <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#5a3d28' }}>
                        › {issue.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Issue viewer */}
      {viewing && (
        <div className="ornamental-border bg-[#f5f0e8] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#432616' }}>
              {viewing.label}
            </h3>
            <button
              onClick={() => setViewing(null)}
              className="text-sm underline hover:opacity-75 transition"
              style={{ fontFamily: 'Crimson Text, serif', color: '#432616' }}
            >
              Close
            </button>
          </div>
          <img
            src={`${base}${viewing.image}`}
            alt={viewing.label}
            className="w-full shadow-md"
            style={{ borderRadius: '2px', maxHeight: '800px', objectFit: 'contain' }}
          />
        </div>
      )}

    </PageLayout>
  );
}
