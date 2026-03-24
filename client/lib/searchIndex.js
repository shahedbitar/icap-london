// Each entry: title shown in results, route to navigate to,
// open keys to expand in the sidebar, and keywords to match against.
export const searchIndex = [
  {
    title: 'Welcome',
    description: 'About the Italian-Canadian Archives Project',
    route: '/',
    open: {},
    keywords: ['welcome', 'home', 'icap', 'italian', 'canadian', 'archives', 'london', 'heritage', 'history', 'project'],
  },
  {
    title: 'Media',
    description: 'Publications and media coverage',
    route: '/',
    open: { Media: true },
    keywords: ['media', 'publication', 'newspaper', 'press', 'coverage'],
  },
  {
    title: 'Local Publications',
    description: 'Abruzzo Canada, Corriere Peligno, Valle Peligna',
    route: '/',
    open: { Media: true, LocalPub: true },
    keywords: ['local', 'publications', 'publication', 'abruzzo', 'corriere', 'valle', 'peligna'],
  },
  {
    title: 'Abruzzo Canada',
    description: 'Rassegna Periodica della Confederazione Abruzzese',
    route: '/',
    open: { Media: true, LocalPub: true },
    keywords: ['abruzzo', 'canada', 'periodical', 'confederazione', 'abruzzese', 'casasanta'],
  },
  {
    title: 'Corriere Peligno',
    description: 'Local Italian-Canadian newspaper',
    route: '/',
    open: { Media: true, LocalPub: true },
    keywords: ['corriere', 'peligno', 'newspaper', 'peligno'],
  },
  {
    title: 'Valle Peligna',
    description: 'Local Italian-Canadian publication',
    route: '/',
    open: { Media: true, LocalPub: true },
    keywords: ['valle', 'peligna', 'publication'],
  },
  {
    title: 'In the Media',
    description: 'Coverage of ICAP London in the news',
    route: '/',
    open: { Media: true },
    keywords: ['in the media', 'news', 'coverage', 'press', 'articles'],
  },
  {
    title: 'People and their Stories',
    description: 'Personal histories and autobiographies',
    route: '/',
    open: { People: true },
    keywords: ['people', 'stories', 'personal', 'history', 'community', 'family'],
  },
  {
    title: 'History',
    description: 'Beginnings, documentary and immigrant experience',
    route: '/',
    open: { People: true, History: true },
    keywords: ['history', 'historical', 'origins', 'beginnings', 'documentary', 'immigrant'],
  },
  {
    title: 'Beginnings',
    description: 'The origins of the Italian-Canadian community',
    route: '/',
    open: { People: true, History: true },
    keywords: ['beginnings', 'origins', 'start', 'founding', 'early'],
  },
  {
    title: 'Documentary',
    description: 'Documentary films about Italian-Canadians',
    route: '/',
    open: { People: true, History: true },
    keywords: ['documentary', 'film', 'video', 'documentary film'],
  },
  {
    title: 'The Immigrant Experience',
    description: 'Stories of Italian immigration to Canada',
    route: '/',
    open: { People: true, History: true },
    keywords: ['immigrant', 'immigration', 'experience', 'journey', 'arrival', 'settle'],
  },
  {
    title: 'Contributions from the Community',
    description: 'Community contributions to Canadian society',
    route: '/',
    open: { People: true, History: true },
    keywords: ['contributions', 'community', 'contribution', 'society', 'impact'],
  },
  {
    title: 'Autobiographies',
    description: 'Personal life stories submitted by community members',
    route: '/',
    open: { People: true },
    keywords: ['autobiography', 'autobiographies', 'memoir', 'life story', 'personal'],
  },
  {
    title: 'Events and Association',
    description: 'ICAP events and associated organizations',
    route: '/',
    open: { Events: true },
    keywords: ['events', 'association', 'associations', 'organizations', 'clubs', 'activities'],
  },
  {
    title: 'ICAP Events',
    description: 'Events organized by ICAP London',
    route: '/',
    open: { Events: true, ICAPEvents: true },
    keywords: ['icap events', 'events', 'organized', 'icap'],
  },
  {
    title: 'Events in London',
    description: 'Local events in London, Ontario',
    route: '/',
    open: { Events: true, ICAPEvents: true },
    keywords: ['london', 'local events', 'events london', 'ontario'],
  },
  {
    title: 'Events in Canada',
    description: 'National Italian-Canadian events across Canada',
    route: '/',
    open: { Events: true, ICAPEvents: true },
    keywords: ['canada', 'national', 'events canada', 'canada events'],
  },
  {
    title: 'Associations',
    description: 'Italian-Canadian associations and organizations',
    route: '/',
    open: { Events: true },
    keywords: ['associations', 'association', 'organizations', 'clubs', 'groups', 'society'],
  },
  {
    title: 'Interviews',
    description: 'Video and audio oral history interviews',
    route: '/',
    open: { Interviews: true },
    keywords: ['interviews', 'interview', 'oral history', 'audio', 'video', 'recordings'],
  },
  {
    title: 'Interview By Students',
    description: 'Oral history interviews conducted by students',
    route: '/',
    open: { Interviews: true, IntStudents: true },
    keywords: ['students', 'student', 'school', 'youth', 'student interviews'],
  },
  {
    title: 'Video (Student Interviews)',
    description: 'Video interviews conducted by students',
    route: '/',
    open: { Interviews: true, IntStudents: true },
    keywords: ['video', 'student video', 'video students'],
  },
  {
    title: 'Audio (Student Interviews)',
    description: 'Audio interviews conducted by students',
    route: '/',
    open: { Interviews: true, IntStudents: true },
    keywords: ['audio', 'student audio', 'audio students'],
  },
  {
    title: 'Interview By Community Members',
    description: 'Oral history interviews by community members',
    route: '/',
    open: { Interviews: true, IntCommunity: true },
    keywords: ['community', 'members', 'community interviews', 'community members'],
  },
  {
    title: 'Video Interviews By the Community',
    description: 'Video interviews conducted by community members',
    route: '/',
    open: { Interviews: true, IntCommunity: true },
    keywords: ['video community', 'community video', 'video interviews community'],
  },
  {
    title: 'Audio Interviews By Community',
    description: 'Audio interviews conducted by community members',
    route: '/',
    open: { Interviews: true, IntCommunity: true },
    keywords: ['audio community', 'community audio', 'audio interviews community'],
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with ICAP London',
    route: '/contact',
    open: {},
    keywords: ['contact', 'reach', 'touch', 'email', 'message', 'form', 'oral history', 'consent', 'send'],
  },
];

export function searchContent(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return searchIndex.filter(
    (entry) =>
      entry.title.toLowerCase().includes(q) ||
      entry.description.toLowerCase().includes(q) ||
      entry.keywords.some((k) => k.includes(q))
  ).slice(0, 6);
}
