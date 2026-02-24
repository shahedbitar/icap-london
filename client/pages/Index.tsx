import { ChevronDown, Search, FileText, Users, Calendar, PhoneIcon } from 'lucide-react';
import { useState } from 'react';

export default function Index() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
          >
            Browse Archives
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-6">
            {/* Search Box */}
            <div className="ornamental-border bg-yellow-50 p-5">
              <h2 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: 'rgba(0, 0, 0, 1)' }}>
                SEARCH THE ARCHIVES
              </h2>
              <label className="text-xs block mb-3 font-semibold uppercase tracking-wide" style={{ color: '#5a3d28' }}>Try keywords or phrases...</label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="Search archives..."
                  className="flex-1 px-3 py-2 bg-white border-2 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: '#bbaf9e', borderStyle: 'double', borderRadius: '1px', '--tw-ring-color': '#432616' } as any}
                />
              </div>
              <button className="w-full font-bold transition transform hover:-translate-y-0.5 shadow-md" style={{ backgroundColor: '#432616', color: '#ffffff', border: '4px groove #4e2f20', borderRadius: '1px', overflow: 'hidden', padding: '2px 0', fontFamily: 'Helvetica, sans-serif' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a1810'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#432616'}>
                Search
              </button>
            </div>

            {/* Explore Box */}
            <div className="ornamental-border bg-yellow-50 p-5">
              <h2 className="text-xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
                EXPLORE
              </h2>
              <nav className="space-y-0">
                {['Welcome', 'Media', 'People and their Stories', 'Events and Association', 'Interviews', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleSection(item)}
                    className="w-full flex items-center justify-between text-left transition py-3 px-2 last:border-b-0 group"
                    style={{ color: '#432616', borderBottom: '1px solid rgba(255, 255, 255, 1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#5a3d28'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#432616'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <span className="font-semibold text-sm group-hover:translate-x-1 transition">{item}</span>
                    <ChevronDown size={16} className={`transition flex-shrink-0 ${expandedSection === item ? 'rotate-180' : ''}`} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            {/* Top Info Box */}
            <div className="ornamental-border bg-yellow-50 p-7 mb-8">
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.05rem', color: '#432616' }}>
                <strong style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1em' }}>The Italian-Canadian Archives Project</strong> is a nation-wide network of researchers and organizations that gather and digitalize oral memories as well as written and visual documentation concerning Italian-Canadians. Their arrival in this country and their deeds. We seek to write the history of Italian-Canadians and recognize their role in shaping the history of Canada.
              </p>
              <div className="h-px my-4" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }}></div>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: '#5a3d28' }}>
                ICAP London is working in partnership with the <a href="#" className="text-blue-600 underline hover:text-blue-700 font-semibold">Italian-Canadian Archives Project</a>.
              </p>
            </div>

            {/* Our Site */}
            <div className="ornamental-border bg-yellow-50 p-7">
              <h3 className="text-xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}>
                Our Site
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', color: '#432616' }}>
                We are using the ICAP London site to gather stories from our region. Our site provides the <a href="#" className="text-blue-600 underline hover:text-blue-700 font-semibold">Internet Forms</a> which you may open and print.
              </p>
              <p className="text-xs leading-relaxed" style={{ color: '#5a3d28' }}>
                We are here to listen and help preserve your family stories. Since 2001, the ICAP London office is actively working with local communities to interview and record life stories of Italian-Canadians, especially seniors. We welcome individual, document, picture or artifact that you might want to archive for accessibility for future research through our databases.
              </p>
            </div>

            {/* Bottom Contact */}
            <div className="ornamental-border bg-yellow-50 p-7 mt-8">
              <div>
                <div>
                  <h4 className="font-bold mb-2 text-lg" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>Get in Touch</h4>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: '#5a3d28' }}>
                    We would love to hear from you! Share your stories or contribute to our archives.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline text-sm font-semibold transition">
                    Click here to contact us
                  </a>
                </div>
              </div>
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
