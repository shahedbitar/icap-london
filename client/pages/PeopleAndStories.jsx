import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function PeopleAndStories() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  const sections = [
    {
      title: 'History',
      description: 'Explore the history of the Italian-Canadian community in London — from the earliest arrivals and the immigrant experience, to the contributions that shaped the city and the documentary record that preserves it all.',
      linkLabel: 'Browse history →',
      onClick: () => navigate('/people-and-their-stories/history'),
    },
    {
      title: 'Autobiographies',
      description: 'Personal accounts and life stories written by members of the Italian-Canadian community of London, offering first-hand perspectives on immigration, family, work, and belonging.',
      linkLabel: 'Read autobiographies →',
      onClick: () => navigate('/people-and-their-stories/autobiographies'),
    },
  ];

  return (
    <PageLayout activePage="PeopleAndStories" initialOpen={{ People: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          People and their Stories
        </h2>

        <p className="leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          Discover the lives, memories, and histories of Italian-Canadians who settled in London and the surrounding region. This section gathers both the broad historical narrative and the intimate personal stories that together form the fabric of our community.
        </p>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, #c4943e, #432616, #c4943e)' }} />

        <div className="space-y-0">
          {sections.map((s, i) => (
            <div key={s.title}>
              <div className="py-6">
                <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#432616' }}>
                  {s.title}
                </h3>
                <p className="mb-3 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                  {s.description}
                </p>
                <button
                  onClick={s.onClick}
                  className="underline transition hover:opacity-75 text-left"
                  style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                >
                  {s.linkLabel}
                </button>
              </div>
              <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
            </div>
          ))}

          {/* Religious Life */}
          <div className="py-6">
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#432616' }}>
              Religious Life
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <figure className="flex-1 text-center">
                <img
                  src={`${base}religiousLife/Madonna_ReligiousLife.jpg`}
                  alt="Madonna del Carmine Festa"
                  className="w-full object-cover rounded shadow-md"
                />
                <figcaption className="mt-2 text-sm italic" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                  Madonna del Carmine Festa – July 16
                </figcaption>
              </figure>
              <figure className="flex-1 text-center">
                <img
                  src={`${base}religiousLife/SanRocco_religious_life.jpg`}
                  alt="San Rocco Confessore - Carpinone, Molise"
                  className="w-full object-cover rounded shadow-md"
                />
                <figcaption className="mt-2 text-sm italic" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                  San Rocco Confessore – Carpinone, Molise
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
