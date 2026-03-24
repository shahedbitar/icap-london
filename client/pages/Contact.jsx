import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleNavClick = (item) => {
    if (item === 'Contact') return;
    if (item === 'Welcome') { navigate('/'); return; }
    toggleSection(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-yellow-50" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      {/* Header */}
      <header className="border-b-4 px-8 py-2 shadow-md" style={{ backgroundImage: 'url(https://cdn.builder.io/api/v1/image/assets%2Fddec25cc54e94f77878a49c8b0ea7d6c%2Fed0ff00c7841474d9616a78366a162f1?format=webp&width=800&height=1200)', backgroundSize: 'cover', backgroundPosition: 'center', borderBottomColor: '#432616' }}>
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
        <div className="max-w-7xl mx-auto flex gap-8 justify-center" />
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-10">
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
                  style={{ borderColor: '#bbaf9e', borderStyle: 'double', borderRadius: '1px', '--tw-ring-color': '#432616' }}
                />
              </div>
              <button
                className="w-full font-bold transition transform hover:-translate-y-0.5 shadow-md"
                style={{ backgroundColor: '#432616', color: '#ffffff', border: '4px groove #4e2f20', borderRadius: '1px', overflow: 'hidden', padding: '2px 0', fontFamily: 'Helvetica, sans-serif' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a1810'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#432616'}
              >
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
                    onClick={() => handleNavClick(item)}
                    className="w-full flex items-center justify-between text-left transition py-3 px-2 last:border-b-0 group"
                    style={{
                      color: item === 'Contact' ? '#5a3d28' : '#432616',
                      borderBottom: '1px solid rgba(255, 255, 255, 1)',
                      backgroundColor: item === 'Contact' ? 'rgba(255,255,255,1)' : 'transparent',
                      fontWeight: item === 'Contact' ? 700 : undefined,
                    }}
                    onMouseEnter={(e) => { if (item !== 'Contact') { e.currentTarget.style.color = '#5a3d28'; e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)'; } }}
                    onMouseLeave={(e) => { if (item !== 'Contact') { e.currentTarget.style.color = '#432616'; e.currentTarget.style.backgroundColor = 'transparent'; } }}
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
            <div className="ornamental-border bg-yellow-50 p-8">
              <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
                Contact Us
              </h2>

              <p className="text-sm mb-5 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.05rem', color: '#432616' }}>
                We are using the ICAP London site to gather stories from our region. We provide the Interview Forms which you may open and print.
              </p>

              <ul className="mb-6 space-y-2">
                {[
                  'Oral History Identification & Consent Form',
                  'Oral History Participant Consent Form',
                  'Oral History Interview Log Form',
                ].map((form) => (
                  <li key={form}>
                    <a
                      href="#"
                      className="text-sm underline transition"
                      style={{ color: '#432616', fontFamily: 'Crimson Text, serif', fontSize: '1rem' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#2a1810'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#432616'}
                    >
                      {form}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

              <p className="text-sm mb-8 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.05rem', color: '#432616' }}>
                How much do you know about Italian-Canadian community in London and their journeys to Canada? Would you like to share your family memories or simply come by to find out more about our mutual past? Either way, we want to hear from you! Please send us your comments and suggestions.
              </p>

              {submitted ? (
                <div className="p-5 text-center border-2" style={{ borderColor: '#432616', borderStyle: 'double', backgroundColor: 'rgba(255,255,255,0.7)' }}>
                  <p className="font-semibold" style={{ fontFamily: 'Playfair Display, serif', color: '#432616', fontSize: '1.1rem' }}>
                    Thank you for reaching out!
                  </p>
                  <p className="text-sm mt-2" style={{ color: '#5a3d28', fontFamily: 'Crimson Text, serif' }}>
                    We will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { label: 'Your Name:', name: 'name', type: 'text' },
                    { label: 'Your Email:', name: 'email', type: 'email' },
                  ].map(({ label, name, type }) => (
                    <div key={name} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <label className="font-semibold text-sm" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        required
                        className="md:col-span-2 px-3 py-2 bg-white border text-sm focus:outline-none focus:ring-2"
                        style={{ borderColor: '#bbaf9e', borderRadius: '1px', '--tw-ring-color': '#432616' }}
                      />
                    </div>
                  ))}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <label className="font-semibold text-sm pt-2" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
                      Your Message:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="md:col-span-2 px-3 py-2 bg-white border text-sm focus:outline-none focus:ring-2 resize-vertical"
                      style={{ borderColor: '#bbaf9e', borderRadius: '1px', '--tw-ring-color': '#432616' }}
                    />
                  </div>

                  <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="font-bold px-8 py-2 transition transform hover:-translate-y-0.5 shadow-md"
                      style={{ backgroundColor: '#432616', color: '#ffffff', border: '4px groove #4e2f20', borderRadius: '1px', fontFamily: 'Helvetica, sans-serif' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2a1810'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#432616'}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
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
