import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function PageLayout({ activePage, initialOpen = {}, children }) {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-yellow-50"
      style={{
        backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Header */}
      <header
        className="border-b-4 px-8 py-2 shadow-md"
        style={{
          backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottomColor: '#432616',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex gap-0 items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2F74fb149cfe2e40cca27864d9189065da?format=webp&width=800&height=1200"
                alt="Italian and Canadian Flag Shields"
                className="h-20 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div>
              <h1
                className="text-4xl font-bold cursor-pointer"
                style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.05em', color: '#432616' }}
                onClick={() => navigate('/')}
              >
                Italian-Canadian Archives Project
              </h1>
              <p className="text-sm mt-1 font-light" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                Preserving Heritage & History
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Nav bar */}
      <nav
        className="text-yellow-50 px-8 py-3 shadow-md"
        style={{ backgroundColor: '#4e311f', borderColor: '#371e10', borderWidth: '2px', borderStyle: 'double', overflow: 'hidden' }}
      >
        <div className="max-w-7xl mx-auto flex gap-8 justify-center" />
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        className="text-yellow-50 px-8 py-8 mt-12 border-t-4 shadow-lg"
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
          <p className="text-yellow-100 text-xs font-light" style={{ fontFamily: 'Crimson Text, serif' }}>
            Preserving our heritage for future generations
          </p>
        </div>
      </footer>
    </div>
  );
}
