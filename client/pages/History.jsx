import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const subsections = [
  {
    id: 'beginnings',
    title: 'Beginnings',
    description: 'The story of how Italian immigrants first arrived in London, Ontario — the conditions they left behind, the journeys they undertook, and the early communities they built upon arrival.',
    route: '/people-and-their-stories/history/beginnings',
  },
  {
    id: 'documentary',
    title: 'Documentary',
    description: 'Film and documentary records that capture the Italian-Canadian experience in London, preserving voices, images, and stories for future generations.',
    route: '/people-and-their-stories/history/documentary',
  },
  {
    id: 'immigrant-experience',
    title: 'The Immigrant Experience',
    description: 'A closer look at what it meant to arrive and settle as an Italian immigrant in Canada — the challenges of language, labour, identity, and belonging in a new homeland.',
    route: '/people-and-their-stories/history/immigrant-experience',
  },
  {
    id: 'contributions',
    title: 'Contributions from the Community',
    description: 'The many ways in which Italian-Canadians shaped London\'s cultural, economic, and civic life — through business, the arts, education, and community leadership.',
    route: '/people-and-their-stories/history/contributions',
  },
];

export default function History() {
  const navigate = useNavigate();

  return (
    <PageLayout activePage="History" initialOpen={{ People: true, History: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          <button onClick={() => navigate('/')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Home</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>People and their Stories</button>
          <span className="mx-1">›</span>
          <span style={{ color: '#432616' }}>History</span>
        </nav>

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          History
        </h2>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Subsection descriptions */}
        <div className="space-y-0">
          {subsections.map((s, i) => (
            <div key={s.id} id={s.id}>
              <div className="py-6">
                <h3 className="font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#432616' }}>
                  {s.title}
                </h3>
                <p className="leading-relaxed mb-3" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}>
                  {s.description}
                </p>
                {s.route && (
                  <button
                    onClick={() => navigate(s.route)}
                    className="underline hover:opacity-75 transition text-left"
                    style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                  >
                    › View {s.title.toLowerCase()}
                  </button>
                )}
              </div>
              {i < subsections.length - 1 && (
                <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
              )}
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
