import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      {/* Header */}
      <header className="border-b-4 px-8 py-2 shadow-md" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)', backgroundSize: 'cover', backgroundPosition: 'center', borderBottomColor: '#432616' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Shield Emblems */}
            <div className="flex gap-0 items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2F74fb149cfe2e40cca27864d9189065da?format=webp&width=800&height=1200"
                alt="Italian and Canadian Flag Shields"
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
                Italian-Canadian Archives Project
              </h1>
              <p className="text-sm mt-1 font-light" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                Preserving Heritage & History
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="text-yellow-50 px-8 py-3 shadow-md" style={{ backgroundColor: '#4e311f', borderColor: '#371e10', borderWidth: '2px', borderStyle: 'double', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto flex gap-8 justify-center">
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-96 bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2F8088e4dc69ad4fad9dc2b6450d56b09f?format=webp&width=800&height=1200")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      </div>

      {/* Main Content Area with Overlapping Box */}
      <div className="max-w-7xl mx-auto px-8 relative" style={{ paddingTop: '120px' }}>
        {/* Hero Overlay Box - Rectangle overlapping image and content */}
        <div className="absolute left-8 right-8 bg-opacity-95 px-6 py-4 text-center border-4 shadow-2xl" style={{ background: 'linear-gradient(to right, #432616, #5a3d28, #432616)', borderColor: '#5a3d28', borderStyle: 'double', top: '-130px', zIndex: 10, boxShadow: '0 0 51px 242px rgba(0, 0, 0, 0)' }}>
          <p className="script-font mb-1" style={{ border: '1px solid rgba(129, 72, 35, 0)', color: 'rgba(219, 209, 198, 1)', textShadow: '1px 1px 3px rgba(0, 0, 0, 1)' }}>Explore our heritage through historical documents, photos and records</p>
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fd31cc4bf021a489cbf71065086150e84?format=webp&width=800&height=1200" alt="Decorative divider" className="mx-auto" style={{ maxWidth: '280px', height: 'auto', padding: 0, margin: '4px auto' }} />
          <p className="text-sm mb-2" style={{ fontFamily: 'Crimson Text, serif', color: '#bbaf9e', fontWeight: 500, fontSize: '18px', letterSpacing: '3px' }}>
            Preserving the history of London's Italian Canadians
          </p>
          <button
            className="font-bold px-6 py-2 rounded transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
            style={{ backgroundColor: '#371e10', color: 'rgba(255, 255, 255, 1)', border: '4px double rgba(78, 48, 32, 1)', fontFamily: 'Helvetica, sans-serif' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#371e10'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#371e10'; }}
            onClick={() => document.getElementById('explore-sidebar').scrollIntoView({ behavior: 'smooth' })}
          >
            Browse Archives
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside id="explore-sidebar" className="md:col-span-1 space-y-6">
            <Sidebar activePage="Welcome" />
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            {/* Top Info Box */}
            <div className="ornamental-border bg-yellow-50 p-7 mb-8">
              <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                <strong style={{ fontFamily: 'Playfair Display, serif' }}>The Italian-Canadian Archives Project</strong> is a nation-wide network of researchers and organizations that gather and digitalize oral memories as well as written and visual documentation concerning Italian-Canadians. Their arrival in this country and their deeds. We seek to write the history of Italian-Canadians and recognize their role in shaping the history of Canada.
              </p>
              <div className="h-px my-4" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }}></div>
              <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                ICAP London is working in partnership with the <a href="#" className="underline font-semibold transition hover:opacity-75" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#2c6e8a' }}>Italian-Canadian Archives Project</a>.
              </p>
            </div>

            {/* Our Site */}
            <div className="ornamental-border bg-yellow-50 p-7">
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
                Our Site
              </h3>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                We are using the ICAP London site to gather stories from our region. Our site provides the <a href="#" className="underline font-semibold transition hover:opacity-75" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#2c6e8a' }}>Internet Forms</a> which you may open and print.
              </p>
              <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                We are here to listen and help preserve your family stories. Since 2001, the ICAP London office is actively working with local communities to interview and record life stories of Italian-Canadians, especially seniors. We welcome any individual, document, picture or artifact that you might want to archive for accessibility and future research through our databases.
              </p>
            </div>

            {/* Bottom Contact */}
            <div className="ornamental-border bg-yellow-50 p-7 mt-8">
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>Get in Touch</h4>
              <p className="leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                We would love to hear from you! Share your stories or contribute to our archives.
              </p>
              <a onClick={() => navigate('/contact')} className="underline font-semibold transition hover:opacity-75 cursor-pointer" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#2c6e8a' }}>
                Click here to contact us
              </a>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-yellow-50 px-8 py-8 mt-12 border-t-4 shadow-lg" style={{ background: 'linear-gradient(to right, #432616, #5a3d28)', borderColor: '#2a1810' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em' }}>
            Italian-Canadian Archives Project London
          </p>
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fd31cc4bf021a489cbf71065086150e84?format=webp&width=800&height=1200" alt="Decorative divider" className="mx-auto" style={{ maxWidth: '200px', height: 'auto', padding: 0, margin: '8px auto' }} />
          <p className="text-yellow-100 text-xs font-light" style={{ fontFamily: 'Crimson Text, serif' }}>
            Preserving our heritage for future generations
          </p>
        </div>
      </footer>
    </div>
  );
}
