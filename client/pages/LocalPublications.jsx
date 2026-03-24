import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const publications = [
  {
    id: 'abruzzo',
    title: 'Abruzzo Canada',
    route: '/media/local-publications/abruzzo-canada',
    disclaimerTitle: 'Disclaimer Abruzzo Canada',
    disclaimers: [
      "The periodical Abruzzo Canada. Rassegna Periodica della Confederazione Abruzzese is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it's director's, Sestino Casasanta, legal heir.",
      "We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.",
    ],
  },
  {
    id: 'corriere',
    title: 'Corriere Peligno',
    route: '/media/local-publications/corriere-peligno',
    disclaimerTitle: 'Disclaimer Corriere Peligno',
    disclaimers: [
      "The Corriere Peligno is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it's director, Sestino Casasanta, legal heir.",
      "We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.",
    ],
  },
  {
    id: 'valle',
    title: 'Valle Peligna',
    route: '/media/local-publications/valle-peligna',
    disclaimerTitle: 'Disclaimer Valle Peligna',
    disclaimers: [
      "The Valle Peligna is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large.",
      "We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make this publication available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.",
    ],
  },
];

export default function LocalPublications() {
  const navigate = useNavigate();

  return (
    <PageLayout activePage="LocalPublications" initialOpen={{ Media: true, LocalPub: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Breadcrumb */}
        <nav className="mb-4 text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
          <button onClick={() => navigate('/')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Home</button>
          <span className="mx-1">›</span>
          <button onClick={() => navigate('/media')} className="underline hover:opacity-75 transition" style={{ color: '#2c6e8a' }}>Media</button>
          <span className="mx-1">›</span>
          <span style={{ color: '#432616' }}>Local Publications</span>
        </nav>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Local Publications
        </h2>

        {/* Quick links */}
        <ul className="space-y-2 mb-8">
          {publications.map((pub) => (
            <li key={pub.id}>
              <button
                onClick={() => navigate(pub.route)}
                className="underline hover:opacity-75 transition text-left"
                style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}
              >
                {pub.title}
              </button>
            </li>
          ))}
        </ul>

        {/* Disclaimers */}
        <div className="space-y-8">
          {publications.map((pub) => (
            <div key={pub.id} id={pub.id}>
              <h3 className="font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#432616' }}>
                {pub.disclaimerTitle}
              </h3>
              <div className="space-y-4">
                {pub.disclaimers.map((text, j) => (
                  <p key={j} className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
