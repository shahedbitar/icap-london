import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Media() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Local Publications',
      image: '/local-publications.png',
      imageAlt: 'Abruzzo Canada, Corriere Peligno and Valle Peligna newspapers',
      description: 'Abruzzo Canada, Corriere Peligno, and Valle Peligna — local Italian-Canadian periodicals hosted on this site.',
      linkLabel: 'Browse the collection →',
      onClick: () => navigate('/media/local-publications'),
    },
    {
      title: 'In The Media',
      image: '/in-the-media.png',
      imageAlt: 'Italian-Canadians reading the newspaper',
      description: 'News articles and press coverage featuring the Italian-Canadian community of London.',
      linkLabel: 'View press coverage →',
      onClick: null,
    },
  ];

  return (
    <PageLayout activePage="Media" initialOpen={{ Media: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Title */}
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Media
        </h2>

        {/* Intro */}
        <p className="leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          Explore Italian-Canadian publications and media coverage that document the history and stories of our community in London and across Canada.
        </p>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, #c4943e, #432616, #c4943e)' }} />

        {/* Section entries */}
        <div className="space-y-0">
          {sections.map((s, i) => (
            <div key={s.title}>
              <div className="flex gap-5 items-start py-6">
                {/* Thumbnail */}
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="flex-shrink-0 object-cover"
                  style={{ width: '90px', height: '90px', borderRadius: '2px', filter: 'sepia(20%)' }}
                />

                {/* Text */}
                <div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#432616' }}>
                    {s.title}
                  </h3>
                  <p className="mb-3 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                    {s.description}
                  </p>
                  {s.onClick ? (
                    <button
                      onClick={s.onClick}
                      className="underline transition hover:opacity-75 text-left"
                      style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                    >
                      {s.linkLabel}
                    </button>
                  ) : (
                    <span
                      className="underline transition hover:opacity-75 cursor-pointer"
                      style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                    >
                      {s.linkLabel}
                    </span>
                  )}
                </div>
              </div>

              {i < sections.length - 1 && (
                <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
