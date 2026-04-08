import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Documentary() {
  const navigate = useNavigate();

  return (
    <PageLayout activePage="Documentary" initialOpen={{ People: true, History: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          <button onClick={() => navigate('/')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Home</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>People and their Stories</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories/history')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>History</button>
          <span className="mx-1">›</span>
          <span style={{ color: '#432616' }}>Documentary</span>
        </nav>

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Documentary
        </h2>

        <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* In Our Own Words */}
        <div>
          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
            In Our Own Words
          </h3>
          <p className="mb-5 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
            A documentary capturing the stories of Italian-Canadians in London, Ontario — told in their own voices. Through personal recollections and shared memories, this film preserves the immigrant experience for future generations.
          </p>

          <div className="w-full shadow-md" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '2px', overflow: 'hidden' }}>
            <iframe
              src="https://www.youtube.com/embed/tUJ4mGtJrWU"
              title="In Our Own Words"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
        </div>

      </div>
    </PageLayout>
  );
}
