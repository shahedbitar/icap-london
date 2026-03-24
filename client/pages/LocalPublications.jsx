import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

function Breadcrumb({ crumbs }) {
  const navigate = useNavigate();
  return (
    <nav className="mb-6 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
      {crumbs.map((c, i) => (
        <span key={c.label}>
          {i > 0 && <span className="mx-1">›</span>}
          {c.to
            ? <button onClick={() => navigate(c.to)} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>{c.label}</button>
            : <span style={{ color: '#432616', fontWeight: 600 }}>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

const publications = [
  {
    id: 'abruzzo',
    title: 'Abruzzo Canada',
    disclaimerTitle: 'Disclaimer Abruzzo Canada',
    disclaimers: [
      'The periodical Abruzzo Canada. Rassegna Periodica della Confederazione Abruzzese is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it\'s director\'s, Sestino Casasanta, legal heir.',
      'We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.',
    ],
  },
  {
    id: 'corriere',
    title: 'Corriere Peligno',
    disclaimerTitle: 'Disclaimer Corriere Peligno',
    disclaimers: [
      'The Corriere Peligno is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it\'s director, Sestino Casasanta, legal heir.',
      'We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.',
    ],
  },
  {
    id: 'valle',
    title: 'Valle Peligna',
    disclaimerTitle: 'Disclaimer Valle Peligna',
    disclaimers: [
      'The Valle Peligna is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large.',
      'We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make this publication available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.',
    ],
  },
];

export default function LocalPublications() {
  return (
    <PageLayout activePage="LocalPublications" initialOpen={{ Media: true, LocalPub: true }}>
      <div className="ornamental-border bg-yellow-50 p-8">
        <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Media', to: '/media' }, { label: 'Local Publications' }]} />

        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Local Publications
        </h2>

        {/* Quick links */}
        <ul className="space-y-2 mb-8">
          {publications.map((pub) => (
            <li key={pub.id}>
              <a
                href={`#${pub.id}`}
                className="underline font-semibold transition hover:opacity-75"
                style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#2c6e8a' }}
              >
                {pub.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Disclaimer sections */}
        <div className="space-y-10">
          {publications.map((pub, i) => (
            <div key={pub.id} id={pub.id}>
              <h3 className="font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#432616' }}>
                {pub.disclaimerTitle}
              </h3>
              <div className="space-y-4">
                {pub.disclaimers.map((text, j) => (
                  <p
                    key={j}
                    className="leading-relaxed"
                    style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}
                  >
                    {text}
                  </p>
                ))}
              </div>
              {i < publications.length - 1 && (
                <div className="h-px mt-8" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
