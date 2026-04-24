import PageLayout from '../components/PageLayout';

function Divider() {
  return <div className="h-px my-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />;
}

export default function Events() {
  return (
    <PageLayout activePage="Events" initialOpen={{ Events: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8">

        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Events &amp; Association
        </h2>

        <p className="leading-relaxed mb-6" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
          Stay up to date with events from the Italian-Canadian Archives Project and happenings in the community.
        </p>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, #c4943e, #432616, #c4943e)' }} />

        <div className="space-y-0">

          {/* Events in London */}
          <div className="py-6">
            <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#432616' }}>
              Events in London
            </h3>
            <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              Content coming soon. Check back for upcoming Italian-Canadian events in the London area.
            </p>
          </div>

          <Divider />

          {/* Events in Canada */}
          <div className="py-6">
            <h3 className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#432616' }}>
              Events in Canada
            </h3>
            <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              Content coming soon. Check back for upcoming Italian-Canadian events across Canada.
            </p>
          </div>

          <Divider />

          {/* Associations */}
          <div className="py-6">
            <h3 className="font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.25rem', color: '#432616' }}>
              Associations
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Sicilia', url: 'https://www.facebook.com/groups/1671500219737809/?notif_id=1619294599458432&notif_t=group_invited_to_group&ref=notif' },
                { name: 'London Italian Canadians', url: 'https://www.facebook.com/groups/618953731599054/?multi_permalinks=1809470345880714%2C1808809132613502%2C1808802372614178%2C1808802102614205%2C1808306092663806&notif_id=1616945834634698&notif_t=group_activity&ref=notif' },
                { name: 'Curinga Italian Canadian Multicultural Sport Club', url: 'https://www.facebook.com/groups/94912309991' },
                { name: 'Marconi Club', url: 'https://londonmarconiclub.com/about-us/' },
              ].map((assoc) => (
                <li key={assoc.name} className="flex items-center gap-3">
                  <span style={{ color: '#c4943e' }}>»</span>
                  <a
                    href={assoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold transition hover:opacity-75"
                    style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.05rem', color: '#2c6e8a' }}
                  >
                    {assoc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
