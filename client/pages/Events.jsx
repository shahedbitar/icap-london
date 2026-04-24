import PageLayout from '../components/PageLayout';

const icapEvents = [
  {
    id: 'gmm-making-of',
    title: 'ICAP GMM and "Making Of" Event',
    date: 'March 16, 2020',
    description:
      '"Making Of: Separated from Santo, a Graphic Novel by Brian Barazzoul and Cam Drysdale" Thursday April 16, 2020 at 6pm EST. Join us for a presentation of this remarkable work exploring the Italian-Canadian experience.',
  },
  {
    id: 'fall-conference-2025',
    title: "Register Now for ICAP's Fall Conference!",
    date: 'September 19, 2025',
    description:
      'We are thrilled to invite you to our upcoming ICAP fall conference: "Saving Stories: Communities in Conversation" 23–26 October 2025. Venue: Columbus Centre in Toronto, Ontario. Join researchers, community members, and storytellers from across Canada.',
  },
  {
    id: 'national-conference-2026',
    title: "ICAP's 14th National Conference, Toronto",
    date: 'April 17, 2026',
    description:
      'Our 2025 conference planning committee is thrilled to share a date and location for the 14th National Conference. The conference will be held October 24–26 in Toronto. Details on registration and programming to follow.',
  },
];

const associations = [
  {
    id: 'sicilia',
    name: 'Sicilia',
    url: 'https://www.facebook.com/groups/1671500219737809/?notif_id=1619294599458432&notif_t=group_invited_to_group&ref=notif',
  },
  {
    id: 'london-italian-canadians',
    name: 'London Italian Canadians',
    url: 'https://www.facebook.com/groups/618953731599054/?multi_permalinks=1809470345880714%2C1808809132613502%2C1808802372614178%2C1808802102614205%2C1808306092663806&notif_id=1616945834634698&notif_t=group_activity&ref=notif',
  },
  {
    id: 'curinga',
    name: 'Curinga Italian Canadian Multicultural Sport Club',
    url: 'https://www.facebook.com/groups/94912309991',
  },
  {
    id: 'marconi',
    name: 'Marconi Club',
    url: 'https://londonmarconiclub.com/about-us/',
  },
];

const londonEvents = [
  {
    id: 'mamma-mia',
    title: 'Mamma Mia!',
    type: 'Musical theatre',
    date: 'Thu, May 28 · 7:30 p.m.',
    venue: 'Palace Theatre, Old East Village',
  },
  {
    id: 'kranium',
    title: 'Kranium',
    type: 'Dancehall reggae',
    date: 'Apr 24 · 10:00 p.m.',
    venue: 'Vice Supper Club, London, Canada',
  },
  {
    id: 'capochino',
    title: 'Capochino At System Saturdays',
    type: 'Live music',
    date: 'Sat, May 2 · 10:00 p.m.',
    venue: 'Rum Runners, London, Canada',
  },
];

function Divider() {
  return <div className="h-px my-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />;
}

export default function Events() {
  return (
    <PageLayout activePage="Events" initialOpen={{ Events: true }}>
      <div className="ornamental-border bg-[#f5f0e8] p-8 space-y-10">

        {/* Page title */}
        <div>
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
            Events &amp; Association
          </h2>
          <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
            Stay up to date with events from the Italian-Canadian Archives Project and happenings in the London community.
          </p>
        </div>

        <Divider />

        {/* ICAP Events */}
        <section>
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
            ICAP Events
          </h3>
          <div className="space-y-0">
            {icapEvents.map((ev, i) => (
              <div key={ev.id}>
                <div className="py-5">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: 'Crimson Text, serif', color: '#c4943e' }}>
                    {ev.date}
                  </p>
                  <h4 className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
                    {ev.title}
                  </h4>
                  <p className="leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#5a3d28' }}>
                    {ev.description}
                  </p>
                </div>
                {i < icapEvents.length - 1 && (
                  <div className="h-px" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />
                )}
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* London Events */}
        <section>
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
            Events in London
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {londonEvents.map((ev) => (
              <div
                key={ev.id}
                className="border p-5 shadow-sm"
                style={{ borderColor: '#bbaf9e', backgroundColor: '#faf7f2' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ fontFamily: 'Crimson Text, serif', color: '#c4943e' }}>
                  {ev.type}
                </p>
                <h4 className="text-lg font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
                  {ev.title}
                </h4>
                <p className="text-sm mb-1" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                  📅 {ev.date}
                </p>
                <p className="text-sm" style={{ fontFamily: 'Crimson Text, serif', color: '#5a3d28' }}>
                  📍 {ev.venue}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Associations */}
        <section>
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
            Associations
          </h3>
          <ul className="space-y-3">
            {associations.map((assoc) => (
              <li key={assoc.id} className="flex items-center gap-3">
                <span style={{ color: '#c4943e', fontSize: '1rem' }}>»</span>
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
        </section>

      </div>
    </PageLayout>
  );
}
