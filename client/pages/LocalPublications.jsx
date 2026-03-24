import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

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

const publications = [
  {
    id: 'abruzzo',
    title: 'Abruzzo Canada',
    image: '/abruzzo-canada.jpg',
    disclaimerTitle: 'Disclaimer Abruzzo Canada',
    disclaimers: [
      "The periodical Abruzzo Canada. Rassegna Periodica della Confederazione Abruzzese is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it's director's, Sestino Casasanta, legal heir.",
      "We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.",
    ],
  },
  {
    id: 'corriere',
    title: 'Corriere Peligno',
    image: '/corriere-peligno.jpg',
    disclaimerTitle: 'Disclaimer Corriere Peligno',
    disclaimers: [
      "The Corriere Peligno is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it's director, Sestino Casasanta, legal heir.",
      "We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.",
    ],
  },
  {
    id: 'valle',
    title: 'Valle Peligna',
    image: '/valle-peligna.jpg',
    disclaimerTitle: 'Disclaimer Valle Peligna',
    disclaimers: [
      "The Valle Peligna is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large.",
      "We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make this publication available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.",
    ],
  },
];

export default function LocalPublications() {
  return (
    <PageLayout activePage="LocalPublications" initialOpen={{ Media: true, LocalPub: true }}>

      {/* Title bar */}
      <div className="px-6 py-4 mb-1 border-4" style={{ background: 'linear-gradient(to right, #432616, #5a3d28)', borderColor: '#5a3d28', borderStyle: 'double' }}>
        <Breadcrumb crumbs={[{ label: 'Home', to: '/' }, { label: 'Media', to: '/media' }, { label: 'Local Publications' }]} />
        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#f5f0e8' }}>
          Local Publications
        </h2>
      </div>

      {/* Quick links */}
      <div className="ornamental-border bg-[#f5f0e8] px-6 py-4 mb-1">
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
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
      </div>

      {/* One box per publication */}
      <div className="space-y-1">
        {publications.map((pub) => (
          <div key={pub.id} id={pub.id} className="ornamental-border bg-[#f5f0e8] px-6 py-6">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Cover image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={pub.image}
                  alt={`${pub.title} cover`}
                  className="shadow-md"
                  style={{ width: '140px', objectFit: 'cover', borderRadius: '2px' }}
                />
              </div>

              {/* Disclaimer text */}
              <div className="flex-1">
                <h3 className="font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#432616' }}>
                  {pub.disclaimerTitle}
                </h3>
                <div className="space-y-3">
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
              </div>
            </div>
          </div>
        ))}
      </div>

    </PageLayout>
  );
}
