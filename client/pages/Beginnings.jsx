import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Beginnings() {
  const navigate = useNavigate();
  const base = import.meta.env.BASE_URL;

  return (
    <PageLayout activePage="Beginnings" initialOpen={{ People: true, History: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          <button onClick={() => navigate('/')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Home</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>People and their Stories</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/people-and-their-stories/history')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>History</button>
          <span className="mx-1">›</span>
          <span style={{ color: '#432616' }}>Beginnings</span>
        </nav>

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Beginnings
        </h2>

        <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Main content */}
        <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          First Two Italian Immigrants in London, Ontario
        </h3>

        <p className="leading-relaxed mb-5" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          According to <em>The Canada Directory for 1857-58: Names of Professional and Business Men, and of the Principal Inhabitants</em>, the first two Italian immigrants in the London region we know of nowadays are Lucignani Joseph and Nanni Giovanni.
        </p>

        <p className="leading-relaxed mb-3" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          <strong>Lucignani Joseph</strong> is listed as a "wax figure maker", who lived in "Dundas near Wellington St".
        </p>

        <p className="leading-relaxed mb-8" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          <strong>Nanni Jovanni</strong> (his last name is probably Giovanni) was a "plaster figure maker" who also lived in Dundas near Wellington St.
        </p>

        {/* Images */}
        <div className="flex flex-col sm:flex-row gap-6">
          <figure className="flex-1">
            <img
              src={`${base}beginnings_image1.jpg`}
              alt="Canada Directory 1857-58 entry for Lucignani Joseph"
              className="w-full shadow-md"
              style={{ borderRadius: '2px', border: '1px solid #bbaf9e' }}
            />
          </figure>
          <figure className="flex-1">
            <img
              src={`${base}beginnings_image2.jpg`}
              alt="Canada Directory 1857-58 entry for Nanni Giovanni"
              className="w-full shadow-md"
              style={{ borderRadius: '2px', border: '1px solid #bbaf9e' }}
            />
          </figure>
        </div>

      </div>
    </PageLayout>
  );
}
