import PageLayout from '../components/PageLayout';
import { useNavigate } from 'react-router-dom';

function Breadcrumb({ crumbs }) {
  const navigate = useNavigate();
  return (
    <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
      {crumbs.map((c, i) => (
        <span key={c.label}>
          {i > 0 && <span className="mx-1">›</span>}
          {c.to
            ? <button onClick={() => navigate(c.to)} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>{c.label}</button>
            : <span style={{ color: '#bbaf9e', fontWeight: 600 }}>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export default function CorreirePeligno() {
  return (
    <PageLayout activePage="CorreirePeligno" initialOpen={{ Media: true, LocalPub: true }}>

      <div className="px-6 py-4 mb-1 border-4" style={{ background: 'linear-gradient(to right, #432616, #5a3d28)', borderColor: '#5a3d28', borderStyle: 'double' }}>
        <Breadcrumb crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Media', to: '/media' },
          { label: 'Local Publications', to: '/media/local-publications' },
          { label: 'Corriere Peligno' },
        ]} />
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
          Corriere Peligno
        </h2>
      </div>

      <div className="ornamental-border bg-[#f5f0e8] px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <img
            src="/corriere-peligno.jpg"
            alt="Corriere Peligno cover"
            className="shadow-lg mx-auto sm:mx-0"
            style={{ width: '220px', borderRadius: '2px' }}
          />
          <div>
            <p className="leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}>
              The Corriere Peligno is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it's director, Sestino Casasanta, legal heir.
            </p>
            <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}>
              We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.
            </p>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
