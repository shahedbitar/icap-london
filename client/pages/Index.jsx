import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f0e8]" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>

      {/* Header */}
      <header className="border-b-4 px-4 md:px-8 py-2 shadow-md" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)', backgroundSize: 'cover', backgroundPosition: 'center', borderBottomColor: '#432616' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2F74fb149cfe2e40cca27864d9189065da?format=webp&width=800&height=1200"
                alt="Italian and Canadian Flag Shields"
                className="h-12 md:h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
                Italian-Canadian Archives Project
              </h1>
              <p className="text-xs md:text-sm mt-1 font-light" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                Preserving Heritage & History
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation bar */}
      <nav className="text-yellow-50 px-4 md:px-8 py-3 shadow-md" style={{ backgroundColor: '#4e311f', borderColor: '#371e10', borderWidth: '2px', borderStyle: 'double', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto flex gap-8 justify-center" />
      </nav>

      {/* Hero Section */}
      <div className="relative h-48 md:h-96 bg-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2F8088e4dc69ad4fad9dc2b6450d56b09f?format=webp&width=800&height=1200")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </div>

      {/* Hero Banner */}
      <div
        className="mx-4 md:mx-0 px-4 md:px-6 py-4 text-center border-4 shadow-2xl md:relative md:-top-16 md:max-w-7xl md:mx-auto"
        style={{ background: 'linear-gradient(to right, #432616, #5a3d28, #432616)', borderColor: '#5a3d28', borderStyle: 'double', zIndex: 10 }}
      >
        <p className="script-font mb-1 text-sm md:text-base" style={{ color: 'rgba(219,209,198,1)', textShadow: '1px 1px 3px rgba(0,0,0,1)' }}>
          Explore our heritage through historical documents, photos and records
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fd31cc4bf021a489cbf71065086150e84?format=webp&width=800&height=1200"
          alt="Decorative divider"
          className="mx-auto"
          style={{ maxWidth: '200px', height: 'auto', margin: '4px auto' }}
        />
        <p className="mb-2 text-sm md:text-lg" style={{ fontFamily: 'Crimson Text, serif', color: '#bbaf9e', fontWeight: 500, letterSpacing: '2px' }}>
          Preserving the history of London's Italian Canadians
        </p>
        <button
          className="font-bold px-6 py-2 rounded transition shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
          style={{ backgroundColor: '#371e10', color: '#ffffff', border: '4px double rgba(78,48,32,1)', fontFamily: 'Helvetica, sans-serif' }}
          onClick={() => document.getElementById('explore-sidebar').scrollIntoView({ behavior: 'smooth' })}
        >
          Browse Archives
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

          {/* Sidebar */}
          <aside id="explore-sidebar" className="md:col-span-1 space-y-6">
            <Sidebar activePage="Welcome" />
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3 space-y-6 md:space-y-8">
            {/* Top Info Box */}
            <div className="ornamental-border bg-[#f5f0e8] p-5 md:p-7">
              <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                <strong style={{ fontFamily: 'Playfair Display, serif' }}>The Italian-Canadian Archives Project</strong> is a nation-wide network of researchers and organizations that gather and digitalize oral memories as well as written and visual documentation concerning Italian-Canadians. Their arrival in this country and their deeds. We seek to write the history of Italian-Canadians and recognize their role in shaping the history of Canada.
              </p>
              <div className="h-px my-4" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
              <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                ICAP London is working in partnership with the <a href="#" className="underline font-semibold transition hover:opacity-75" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#2c6e8a' }}>Italian-Canadian Archives Project</a>.
              </p>
            </div>

            {/* Our Site */}
            <div className="ornamental-border bg-[#f5f0e8] p-5 md:p-7">
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

            {/* Get in Touch */}
            <div className="ornamental-border bg-[#f5f0e8] p-5 md:p-7">
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
      <footer className="text-yellow-50 px-4 md:px-8 py-8 border-t-4 shadow-lg" style={{ background: 'linear-gradient(to right, #432616, #5a3d28)', borderColor: '#2a1810' }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em' }}>
            Italian-Canadian Archives Project London
          </p>
          <img src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fd31cc4bf021a489cbf71065086150e84?format=webp&width=800&height=1200" alt="Decorative divider" className="mx-auto" style={{ maxWidth: '200px', height: 'auto', margin: '8px auto' }} />
          <p className="text-xs font-light" style={{ fontFamily: 'Crimson Text, serif', color: '#bbaf9e' }}>
            Preserving our heritage for future generations
          </p>
        </div>
      </footer>
    </div>
  );
}
