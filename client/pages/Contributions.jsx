import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Contributions() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  return (
    <PageLayout activePage="Contributions" initialOpen={{ People: true, History: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          <button onClick={() => navigate('/')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Home</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>People and their Stories</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories/history')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>History</button>
          <span className="mx-1">›</span>
          <span style={{ color: '#432616' }}>Contributions from the Community</span>
        </nav>

        <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Contributions from the Community
        </h2>

        <p className="leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          The many ways in which Italian-Canadians shaped London's cultural, economic, and civic life — through business, the arts, education, and community leadership.
        </p>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Scrollable PDF */}
        <iframe
          src={`${base}italian_canadian_community.pdf`}
          title="Italian Canadian Community"
          className="w-full shadow-md"
          style={{
            height: '900px',
            border: '1px solid #bbaf9e',
            borderRadius: '2px',
            display: 'block',
          }}
        />

      </div>
    </PageLayout>
  );
}
