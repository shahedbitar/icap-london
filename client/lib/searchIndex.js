// Each entry's `content` field contains the actual text from that page.
// Search matches against that content, not tab/nav names.
export const searchIndex = [
  {
    title: 'Welcome',
    description: 'About the Italian-Canadian Archives Project',
    route: '/',
    open: {},
    content: `The Italian-Canadian Archives Project is a nation-wide network of researchers and organizations that gather and digitalize oral memories as well as written and visual documentation concerning Italian-Canadians. Their arrival in this country and their deeds. We seek to write the history of Italian-Canadians and recognize their role in shaping the history of Canada. ICAP London is working in partnership with the Italian-Canadian Archives Project. We are using the ICAP London site to gather stories from our region. Our site provides the Internet Forms which you may open and print. We are here to listen and help preserve your family stories. Since 2001, the ICAP London office is actively working with local communities to interview and record life stories of Italian-Canadians, especially seniors. We welcome any individual, document, picture or artifact that you might want to archive for accessibility and future research through our databases.`,
  },
  {
    title: 'Media',
    description: 'Publications and media coverage',
    route: '/media',
    open: { Media: true },
    content: `Explore Italian-Canadian publications and media coverage that document the history and stories of our community in London and across Canada. Local Publications Abruzzo Canada Corriere Peligno Valle Peligna local Italian-Canadian periodicals hosted on this site. In The Media News articles and press coverage featuring the Italian-Canadian community of London.`,
  },
  {
    title: 'Local Publications',
    description: 'Abruzzo Canada, Corriere Peligno, Valle Peligna',
    route: '/media/local-publications',
    open: { Media: true, LocalPub: true },
    content: `Local Publications Abruzzo Canada Corriere Peligno Valle Peligna. Disclaimer Abruzzo Canada The periodical Abruzzo Canada Rassegna Periodica della Confederazione Abruzzese is hosted by the Icap-London webpage in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London thus contributing to documenting the history of Canada at large. It is posted with permission of its director Sestino Casasanta legal heir. Disclaimer Corriere Peligno The Corriere Peligno is hosted by the Icap-London webpage in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London. Disclaimer Valle Peligna The Valle Peligna is hosted by the Icap-London webpage in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London.`,
  },
  {
    title: 'Abruzzo Canada',
    description: 'Rassegna Periodica della Confederazione Abruzzese',
    route: '/media/local-publications/abruzzo-canada',
    open: { Media: true, LocalPub: true },
    content: `Abruzzo Canada Rassegna Periodica della Confederazione Abruzzese is hosted by the Icap-London webpage in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London thus contributing to documenting the history of Canada at large. It is posted with permission of its directors Sestino Casasanta legal heir. We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material please contact us and we will remove the content concerned.`,
  },
  {
    title: 'Corriere Peligno',
    description: 'Italian-Canadian newspaper published in London, Ontario',
    route: '/media/local-publications/corriere-peligno',
    open: { Media: true, LocalPub: true },
    content: `Corriere Peligno Gente Italica is hosted by the Icap-London webpage in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London thus contributing to documenting the history of Canada at large. It is posted with permission of its director Sestino Casasanta legal heir. Rassegna Bimestrale di Cultura Italiana Storia Arte Tradizioni Informazioni di Attualita. We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material please contact us and we will remove the content concerned.`,
  },
  {
    title: 'Valle Peligna',
    description: 'Bollettino Associazione Socio-Culturale Valle Peligna di Toronto',
    route: '/media/local-publications/valle-peligna',
    open: { Media: true, LocalPub: true },
    content: `Valle Peligna Bollettino edito dall Associazione Socio-Culturale Valle Peligna di Toronto. Responsabile della Pubblicazione Aldo Di Cristofaro. The Valle Peligna is hosted by the Icap-London webpage in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London thus contributing to documenting the history of Canada at large. We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make this publication available through our site. Should you feel that your rights have been infringed by any material please contact us and we will remove the content concerned.`,
  },
  {
    title: 'People and their Stories',
    description: 'History and autobiographies of London\'s Italian-Canadian community',
    route: '/people-and-their-stories',
    open: { People: true },
    content: `People and their Stories Italian-Canadian community London Ontario history autobiographies immigrant experience beginnings contributions documentary personal accounts life stories.`,
  },
  {
    title: 'History',
    description: 'Beginnings, Documentary, The Immigrant Experience, Contributions from the Community',
    route: '/people-and-their-stories/history',
    open: { People: true, History: true },
    content: `History Italian-Canadian London Ontario. Beginnings earliest arrivals immigrant journeys early communities. Documentary film records voices images. The Immigrant Experience language labour identity belonging new homeland. Contributions from the Community business arts education civic leadership shaped London cultural economic.`,
  },
  {
    title: 'Beginnings',
    description: 'First Italian immigrants in London, Ontario — Lucignani Joseph and Nanni Giovanni',
    route: '/people-and-their-stories/history/beginnings',
    open: { People: true, History: true },
    content: `Beginnings first Italian immigrants London Ontario Canada Directory 1857-58 Lucignani Joseph wax figure maker Dundas Wellington St Nanni Giovanni Jovanni plaster figure maker earliest arrivals Italian-Canadian history.`,
  },
  {
    title: 'The Immigrant Experience',
    description: 'Roundtable video with Italian-Canadian community members hosted by Western University',
    route: '/people-and-their-stories/history/immigrant-experience',
    open: { People: true, History: true },
    content: `The Immigrant Experience roundtable video Italian-Canadian community London Ontario Italian Studies Western University Tuesday March 11 2014 language labour identity belonging new homeland settlement arrival.`,
  },
  {
    title: 'Documentary',
    description: 'In Our Own Words — documentary film about Italian-Canadians in London',
    route: '/people-and-their-stories/history/documentary',
    open: { People: true, History: true },
    content: `Documentary In Our Own Words Italian-Canadian London Ontario film documentary voices stories immigrant experience personal recollections memories preserved.`,
  },
  {
    title: 'Autobiographies',
    description: 'Personal life stories by Italian-Canadian community members',
    route: '/people-and-their-stories/autobiographies',
    open: { People: true },
    content: `Autobiographies personal accounts life stories Italian-Canadian community London immigration family work belonging first-hand perspectives.`,
  },
  {
    title: 'In the Media',
    description: 'Press coverage and newspaper features on Italian-Canadian community members',
    route: '/media/in-the-media',
    open: { Media: true },
    content: `In the Media news articles press coverage newspaper features Italian-Canadian community London Ontario. The Olivia Family newspaper feature spotlighting contributions to the Italian-Canadian community of London. Guy Lombardo born London Ontario Italian-Canadian bandleader Royal Canadians orchestra New Year's Eve sweetest music this side of heaven Canadian Music Hall of Fame inducted.`,
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with ICAP London',
    route: '/contact',
    open: {},
    content: `Contact Us We are using the ICAP London site to gather stories from our region. We provide the Interview Forms which you may open and print. Oral History Identification and Consent Form. Oral History Participant Consent Form. Oral History Interview Log Form. How much do you know about Italian-Canadian community in London and their journeys to Canada? Would you like to share your family memories or simply come by to find out more about our mutual past? Either way we want to hear from you. Please send us your comments and suggestions. Your Name Your Email Your Message Send Message.`,
  },
];

export function searchContent(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return searchIndex.filter(
    (entry) =>
      entry.title.toLowerCase().includes(q) ||
      entry.description.toLowerCase().includes(q) ||
      entry.content.toLowerCase().includes(q)
  ).slice(0, 6);
}
