import PageLayout from '../components/PageLayout';

export default function ReligiousLife() {
  const base = import.meta.env.BASE_URL;

  return (
    <PageLayout activePage="ReligiousLife" initialOpen={{ People: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Religious Life
        </h2>

        <p className="leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          A glimpse into the spiritual traditions and religious celebrations that shaped the Italian-Canadian community in London, from local feast days to enduring devotions brought from the homeland.
        </p>

        <div className="h-px mb-8" style={{ background: 'linear-gradient(to right, #c4943e, #432616, #c4943e)' }} />

        <div className="flex flex-col sm:flex-row gap-8">
          <figure className="flex-1 text-center">
            <img
              src={`${base}religiousLife/Madonna_ReligiousLife.jpg`}
              alt="Madonna del Carmine Festa"
              className="w-full object-cover rounded shadow-md"
            />
            <figcaption className="mt-3 text-sm italic" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
              Madonna del Carmine Festa – July 16
            </figcaption>
          </figure>
          <figure className="flex-1 text-center">
            <img
              src={`${base}religiousLife/SanRocco_religious_life.jpg`}
              alt="San Rocco Confessore - Carpinone, Molise"
              className="w-full object-cover rounded shadow-md"
            />
            <figcaption className="mt-3 text-sm italic" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
              San Rocco Confessore – Carpinone, Molise
            </figcaption>
          </figure>
        </div>

      </div>
    </PageLayout>
  );
}
