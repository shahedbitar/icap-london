import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const entries = [
  {
    id: 'olivia-family',
    label: 'The Olivia Family',
    type: 'pdf',
    pdf: 'oliva_newspaper.pdf',
    description:
      'A newspaper feature spotlighting the Olivia family and their contributions to the Italian-Canadian community of London, Ontario.',
    metadata: {
      title: 'The Olivia Family',
      creator: null,
      type: 'Newspaper Article',
      collection: 'In the Media',
      citation: null,
    },
  },
  {
    id: 'guy-lombardo',
    label: 'Guy Lombardo',
    type: 'external',
    href: 'https://canadianmusichalloffame.ca/inductee/guy-lombardo/',
    description:
      'Guy Lombardo (1902–1977) was born in London, Ontario, to Italian-Canadian parents from Sicily. As leader of the Royal Canadians orchestra, he became one of the most celebrated bandleaders in North American history — renowned for his annual New Year\'s Eve broadcasts and his enduring motto, "the sweetest music this side of heaven." He was inducted into the Canadian Music Hall of Fame in recognition of his extraordinary legacy.',
  },
];

export default function InTheMedia() {
  const base = import.meta.env.BASE_URL;
  const [viewing, setViewing] = useState(null);

  return (
    <PageLayout activePage="InTheMedia" initialOpen={{ Media: true, InTheMedia: true }}>

      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Header */}
        <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          In the Media
        </h2>

        <p className="mb-6 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          This section brings together newspaper articles, features, and press coverage in which members of London's Italian-Canadian community have appeared in the broader Canadian media. From profiles of prominent families to celebrated figures whose stories reached a national audience, these records reflect the lasting impact of Italian-Canadians on the cultural and social fabric of Canada.
        </p>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Entries */}
        <div className="space-y-0">
          {entries.map((entry, i) => (
            <div key={entry.id}>
              <div className="py-5">
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#432616' }}>
                  {entry.label}
                </h3>
                <p className="mb-3 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                  {entry.description}
                </p>

                {entry.type === 'pdf' && (
                  <button
                    onClick={() => setViewing(viewing?.id === entry.id ? null : entry)}
                    className="underline hover:opacity-75 transition text-left"
                    style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                  >
                    {viewing?.id === entry.id ? 'Close document ↑' : '› View newspaper feature'}
                  </button>
                )}

                {entry.type === 'external' && (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-75 transition"
                    style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                  >
                    › View Canadian Music Hall of Fame profile
                  </a>
                )}

                {/* Inline PDF viewer */}
                {viewing?.id === entry.id && entry.type === 'pdf' && (
                  <div className="mt-4">
                    <iframe
                      src={`${base}${entry.pdf}`}
                      title={entry.label}
                      className="w-full shadow-md mb-4"
                      style={{ borderRadius: '2px', height: '900px', border: 'none' }}
                    />
                    {entry.metadata && (
                      <div className="p-4" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}>
                        <p className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Dublin Core Metadata</p>
                        <p className="mb-1"><strong>Title:</strong> {entry.metadata.title}</p>
                        {entry.metadata.creator && <p className="mb-1"><strong>Creator:</strong> {entry.metadata.creator}</p>}
                        <p className="mb-1"><strong>Type:</strong> {entry.metadata.type}</p>
                        <p className="mb-1"><strong>Collection:</strong> {entry.metadata.collection}</p>
                        {entry.metadata.citation && (
                          <p><strong>Citation:</strong> <a href={entry.metadata.citation} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75" style={{ color: '#2c6e8a' }}>{entry.metadata.citation}</a></p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {i < entries.length - 1 && (
                <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
              )}
            </div>
          ))}
        </div>

      </div>

    </PageLayout>
  );
}
