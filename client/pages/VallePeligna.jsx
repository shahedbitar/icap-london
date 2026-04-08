import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const issues = {
  '2004': [
    {
      label: 'Summer-Autumn 2004',
      pdf: 'valle-peligna/vp_summerAutumn_2004.pdf',
      metadata: {
        title: 'Summer-Autumn 2004',
        creator: null,
        type: 'Newspaper',
        collection: 'Valle Peligna (Newspapers)',
        citation: null,
      },
    },
    {
      label: 'Summer-Autumn 2004 (Blue Edition)',
      pdf: 'valle-peligna/vp_summerAutumnBlue_2004.pdf',
      metadata: {
        title: 'Summer-Autumn 2004 (Blue Edition)',
        creator: null,
        type: 'Newspaper',
        collection: 'Valle Peligna (Newspapers)',
        citation: null,
      },
    },
  ],
  '2005': [
    {
      label: 'Spring 2005',
      pdf: 'valle-peligna/vp_spring_2005.pdf',
      metadata: {
        title: 'Spring 2005',
        creator: null,
        type: 'Newspaper',
        collection: 'Valle Peligna (Newspapers)',
        citation: null,
      },
    },
  ],
};

export default function VallePeligna() {
  const base = import.meta.env.BASE_URL;
  const [viewing, setViewing] = useState(null);

  return (
    <PageLayout activePage="VallePeligna" initialOpen={{ Media: true, LocalPub: true }}>

      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Cover + info */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          <img
            src={`${base}valle-peligna.jpg`}
            alt="Valle Peligna cover"
            className="shadow-lg flex-shrink-0 mx-auto sm:mx-0"
            style={{ width: '200px', borderRadius: '2px' }}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
              Valle Peligna
            </h2>
            <p className="mb-5 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              The Valle Peligna is hosted by the ICAP-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large.
            </p>
            <div className="p-4" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              <p className="mb-1"><strong>Publication Type:</strong> Local Periodical</p>
              <p className="mb-1"><strong>Language:</strong> Italian / English</p>
              <p><strong>Years Available:</strong> 2004 – 2005</p>
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

        <div className="h-px mt-8 mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        <p className="leading-relaxed text-sm italic" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make this publication available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.
        </p>

      </div>

    </PageLayout>
  );
}
