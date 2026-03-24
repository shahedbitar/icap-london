import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const issues = {
  '2000': [
    {
      label: 'Winter 2000',
      pdf: 'AC_Winter2000.pdf',
      metadata: {
        title: 'Winter 2000',
        creator: null,
        type: 'Newspaper',
        collection: 'Abruzzo Canada (Newspapers)',
        citation: null,
      },
    },
    {
      label: 'Summer 2000',
      pdf: 'AC_Summer2000.pdf',
      metadata: {
        title: 'Summer 2000',
        creator: 'Bella Dong',
        type: 'Newspaper',
        collection: 'Abruzzo Canada (Newspapers)',
        citation: 'https://www.icaplondon.ca/items/show/464',
      },
    },
  ],
  '2001': [
    {
      label: 'Winter - Spring 2001',
      pdf: 'AC_SpringWinter2001.pdf',
      metadata: {
        title: 'Winter - Spring 2001',
        creator: null,
        type: 'Newspaper',
        collection: 'Abruzzo Canada (Newspapers)',
        citation: null,
      },
    },
  ],
};

export default function AbruzzoCanada() {
  const base = import.meta.env.BASE_URL;
  const [viewing, setViewing] = useState(null);

  return (
    <PageLayout activePage="AbruzzoCanada" initialOpen={{ Media: true, LocalPub: true }}>

      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Cover + info */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          <img
            src={`${base}AC_main.jpg`}
            alt="Abruzzo Canada cover"
            className="shadow-lg flex-shrink-0 mx-auto sm:mx-0"
            style={{ width: '200px', borderRadius: '2px' }}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
              Abruzzo Canada
            </h2>
            <p className="mb-5 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              A local Italian-Canadian periodical documenting cultural events, community news, and Italian-Canadian life.
            </p>
            <div className="p-4" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              <p className="mb-1"><strong>Publication Type:</strong> Local Periodical</p>
              <p className="mb-1"><strong>Language:</strong> Italian / English</p>
              <p><strong>Years Available:</strong> 2000 – 2001</p>
            </div>
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Available Issues */}
        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Available Issues
        </h3>

        <div className="flex flex-wrap gap-4">
          {Object.entries(issues).map(([year, items]) => (
            <div key={year} className="p-4 min-w-[180px]" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <p className="font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#432616' }}>
                {year}
              </p>
              <ul className="space-y-2">
                {items.map((issue) => (
                  <li key={issue.label}>
                    {issue.pdf ? (
                      <button
                        onClick={() => setViewing(viewing?.label === issue.label ? null : issue)}
                        className="underline hover:opacity-75 transition text-left"
                        style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                      >
                        › {issue.label}
                      </button>
                    ) : (
                      <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}>
                        › {issue.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inline issue viewer */}
        {viewing && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>{viewing.label}</p>
              <button onClick={() => setViewing(null)} className="text-sm underline hover:opacity-75" style={{ fontFamily: 'Crimson Text, serif', color: '#432616' }}>Close</button>
            </div>
            <iframe
              src={`${base}${viewing.pdf}`}
              title={viewing.label}
              className="w-full shadow-md mb-4"
              style={{ borderRadius: '2px', height: '900px', border: 'none' }}
            />
            {viewing.metadata && (
              <div className="p-4" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}>
                <p className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Dublin Core Metadata</p>
                <p className="mb-1"><strong>Title:</strong> {viewing.metadata.title}</p>
                {viewing.metadata.creator && <p className="mb-1"><strong>Creator:</strong> {viewing.metadata.creator}</p>}
                <p className="mb-1"><strong>Type:</strong> {viewing.metadata.type}</p>
                <p className="mb-1"><strong>Collection:</strong> {viewing.metadata.collection}</p>
                {viewing.metadata.citation && (
                  <p><strong>Citation:</strong> <a href={viewing.metadata.citation} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75" style={{ color: '#2c6e8a' }}>{viewing.metadata.citation}</a></p>
                )}
              </div>
            )}
          </div>
        )}

      </div>

    </PageLayout>
  );
}
