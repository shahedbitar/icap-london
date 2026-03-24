import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function PageLayout({ activePage, initialOpen = {}, children }) {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-[#f5f0e8]"
      style={{
        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header */}
      <header
        className="border-b-4 px-4 md:px-8 py-2 shadow-md"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomColor: '#432616',
        }}
      >
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
              <h1
                className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight cursor-pointer"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}
                onClick={() => navigate('/')}
              >
                Italian-Canadian Archives Project
              </h1>
              <p className="text-xs md:text-sm mt-1 font-light" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                Preserving Heritage & History
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Nav bar */}
      <nav
        className="text-yellow-50 px-4 md:px-8 py-3 shadow-md"
        style={{ backgroundColor: '#4e311f', borderColor: '#371e10', borderWidth: '2px', borderStyle: 'double', overflow: 'hidden' }}
      >
        <div className="max-w-7xl mx-auto flex gap-8 justify-center" />
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-6">
            <Sidebar activePage={activePage} initialOpen={initialOpen} />
          </aside>

          {/* Page content */}
          <main className="md:col-span-3">
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-yellow-50 px-4 md:px-8 py-8 mt-8 md:mt-12 border-t-4 shadow-lg"
        style={{ background: 'linear-gradient(to right, #432616, #5a3d28)', borderColor: '#2a1810' }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em' }}>
            Italian-Canadian Archives Project London
          </p>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fd31cc4bf021a489cbf71065086150e84?format=webp&width=800&height=1200"
            alt="Decorative divider"
            className="mx-auto"
            style={{ maxWidth: '200px', height: 'auto', padding: 0, margin: '8px auto' }}
          />
          <p className="text-xs font-light" style={{ fontFamily: 'Crimson Text, serif', color: '#bbaf9e' }}>
            Preserving our heritage for future generations
          </p>
        </div>
      </footer>
    </div>
  );
}
