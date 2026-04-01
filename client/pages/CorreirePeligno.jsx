import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const R = 'https://github.com/shahedbitar/ICAP-London/releases/download/media-assets/';

const issues = {
  '1989': [
    {
      label: 'April 1989',
      pdf: `${R}cp_apr_1989.pdf`,
      metadata: {
        title: 'April 1989',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '1997': [
    {
      label: 'July - August 1997',
      pdf: `${R}cp_augjul_1997.pdf`,
      metadata: {
        title: 'July - August 1997',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '1999': [
    {
      label: 'January - February 1999',
      pdf: `${R}cp_febjan_1999.pdf`,
      metadata: {
        title: 'January - February 1999',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2000': [
    {
      label: 'November - December 2000',
      pdf: `${R}cp_decnov_2000.pdf`,
      metadata: {
        title: 'November - December 2000',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2001': [
    {
      label: 'July - August 2001',
      pdf: `${R}cp_augjul_2001.pdf`,
      metadata: {
        title: 'July - August 2001',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2001',
      pdf: `${R}cp_octsep_2001.pdf`,
      metadata: {
        title: 'September - October 2001',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2001',
      pdf: `${R}cp_decnov_2001.pdf`,
      metadata: {
        title: 'November - December 2001',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2002': [
    {
      label: 'March - April 2002',
      pdf: `${R}cp_aprmar_2002.pdf`,
      metadata: {
        title: 'March - April 2002',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'May - June 2002',
      pdf: `${R}cp_junmay_2002.pdf`,
      metadata: {
        title: 'May - June 2002',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2002',
      pdf: `${R}cp_decnov_2002.pdf`,
      metadata: {
        title: 'November - December 2002',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2003': [
    {
      label: 'January - February 2003',
      pdf: `${R}cp_febjan_2003.pdf`,
      metadata: {
        title: 'January - February 2003',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'March - April 2003',
      pdf: `${R}cp_aprmar_2003.pdf`,
      metadata: {
        title: 'March - April 2003',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'May - June 2003',
      pdf: `${R}cp_junmay_2003.pdf`,
      metadata: {
        title: 'May - June 2003',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2003',
      pdf: `${R}cp_augjul_2003.pdf`,
      metadata: {
        title: 'July - August 2003',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2003',
      pdf: `${R}cp_octsep_2003.pdf`,
      metadata: {
        title: 'September - October 2003',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2003',
      pdf: `${R}cp_decnov_2003.pdf`,
      metadata: {
        title: 'November - December 2003',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2004': [
    {
      label: 'May - June 2004',
      pdf: `${R}cp_junmay_2004.pdf`,
      metadata: {
        title: 'May - June 2004',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2004',
      pdf: `${R}cp_octsep_2004.pdf`,
      metadata: {
        title: 'September - October 2004',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2005': [
    {
      label: 'January - February 2005',
      pdf: `${R}cp_febjan_2005.pdf`,
      metadata: {
        title: 'January - February 2005',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'March - April 2005',
      pdf: `${R}cp_aprmar_2005.pdf`,
      metadata: {
        title: 'March - April 2005',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'May - June 2005',
      pdf: `${R}cp_junmay_2005.pdf`,
      metadata: {
        title: 'May - June 2005',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2005',
      pdf: `${R}cp_augjul_2005.pdf`,
      metadata: {
        title: 'July - August 2005',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2005',
      pdf: `${R}cp_octsep_2005.pdf`,
      metadata: {
        title: 'September - October 2005',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2005',
      pdf: `${R}cp_decnov_2005.pdf`,
      metadata: {
        title: 'November - December 2005',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2006': [
    {
      label: 'January - February 2006',
      pdf: `${R}cp_febjan_2006.pdf`,
      metadata: {
        title: 'January - February 2006',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2006',
      pdf: `${R}cp_augjul_2006.pdf`,
      metadata: {
        title: 'July - August 2006',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2006',
      pdf: `${R}cp_octsep_2006.pdf`,
      metadata: {
        title: 'September - October 2006',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2006',
      pdf: `${R}cp_decnov_2006.pdf`,
      metadata: {
        title: 'November - December 2006',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2007': [
    {
      label: 'March - April 2007',
      pdf: `${R}cp_aprmar_2007.pdf`,
      metadata: {
        title: 'March - April 2007',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'May - June 2007',
      pdf: `${R}cp_junmay_2007.pdf`,
      metadata: {
        title: 'May - June 2007',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2007',
      pdf: `${R}cp_augjul_2007.pdf`,
      metadata: {
        title: 'July - August 2007',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2007',
      pdf: `${R}cp_decnov_2007.pdf`,
      metadata: {
        title: 'November - December 2007',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2008': [
    {
      label: 'January - February 2008',
      pdf: `${R}cp_febjan_2008.pdf`,
      metadata: {
        title: 'January - February 2008',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'March - April 2008',
      pdf: `${R}cp_aprmar_2008.pdf`,
      metadata: {
        title: 'March - April 2008',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'May - June 2008',
      pdf: `${R}cp_junmay_2008.pdf`,
      metadata: {
        title: 'May - June 2008',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2008',
      pdf: `${R}cp_augjul_2008.pdf`,
      metadata: {
        title: 'July - August 2008',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2008',
      pdf: `${R}cp_octsep_2008.pdf`,
      metadata: {
        title: 'September - October 2008',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2008',
      pdf: `${R}cp_decnov_2008.pdf`,
      metadata: {
        title: 'November - December 2008',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2009': [
    {
      label: 'January - February 2009',
      pdf: `${R}cp_febjan_2009.pdf`,
      metadata: {
        title: 'January - February 2009',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2009',
      pdf: `${R}cp_octsep_2009.pdf`,
      metadata: {
        title: 'September - October 2009',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2009',
      pdf: `${R}cp_decnov_2009.pdf`,
      metadata: {
        title: 'November - December 2009',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2010': [
    {
      label: 'January - February 2010',
      pdf: `${R}cp_febjan_2010.pdf`,
      metadata: {
        title: 'January - February 2010',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'March - April 2010',
      pdf: `${R}cp_aprmar_2010.pdf`,
      metadata: {
        title: 'March - April 2010',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'May - June 2010',
      pdf: `${R}cp_junmay_2010.pdf`,
      metadata: {
        title: 'May - June 2010',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2010',
      pdf: `${R}cp_augjul_2010.pdf`,
      metadata: {
        title: 'July - August 2010',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2010',
      pdf: `${R}cp_octsep_2010.pdf`,
      metadata: {
        title: 'September - October 2010',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'November - December 2010',
      pdf: `${R}cp_decnov_2010.pdf`,
      metadata: {
        title: 'November - December 2010',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2011': [
    {
      label: 'January - February 2011',
      pdf: `${R}cp_febjan_2011.pdf`,
      metadata: {
        title: 'January - February 2011',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'July - August 2011',
      pdf: `${R}cp_augjul_2011.pdf`,
      metadata: {
        title: 'July - August 2011',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2011',
      pdf: `${R}cp_octsep_2011.pdf`,
      metadata: {
        title: 'September - October 2011',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2012': [
    {
      label: 'September - October 2012',
      pdf: `${R}cp_octsep_2012.pdf`,
      metadata: {
        title: 'September - October 2012',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
  '2013': [
    {
      label: 'January - February 2013',
      pdf: `${R}cp_febjan_2013.pdf`,
      metadata: {
        title: 'January - February 2013',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'March - April 2013',
      pdf: 'CP_MarchApril_2013.pdf',
      metadata: {
        title: 'March - April 2013',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
        citation: 'https://www.icaplondon.ca/items/show/401',
      },
    },
    {
      label: 'May - June 2013',
      pdf: 'CP_MayJune_2013.pdf',
      metadata: {
        title: 'May - June 2013',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
        citation: 'https://www.icaplondon.ca/items/show/384',
      },
    },
    {
      label: 'July - August 2013',
      pdf: `${R}cp_augjul_2013.pdf`,
      metadata: {
        title: 'July - August 2013',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
    {
      label: 'September - October 2013',
      pdf: 'CP_SepOct_2013.pdf',
      metadata: {
        title: 'September - October 2013',
        subject: 'Corriere Peligno',
        language: 'Italian / English',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
        citation: 'https://www.icaplondon.ca/items/show/386',
      },
    },
    {
      label: 'November - December 2013',
      pdf: 'CP_NovDec_2013.pdf',
      metadata: {
        title: 'November - December 2013',
        type: 'Newspaper',
        collection: 'Corriere Peligno (Newspapers)',
      },
    },
  ],
};

export default function CorreirePeligno() {
  const base = import.meta.env.BASE_URL;
  const [viewing, setViewing] = useState(null);

  return (
    <PageLayout activePage="CorreirePeligno" initialOpen={{ Media: true, LocalPub: true }}>

      <div className="ornamental-border bg-[#f5f0e8] p-8">

        {/* Cover + info */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          <img
            src={`${base}corriere-peligno.jpg`}
            alt="Corriere Peligno cover"
            className="shadow-lg flex-shrink-0 mx-auto sm:mx-0"
            style={{ width: '200px', borderRadius: '2px' }}
          />
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
              Corriere Peligno
            </h2>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}>
              The Corriere Peligno is hosted by the Icap-London webpage, in fair dealing and with the purpose of preserving the stories and the voices of the Italian-Canadian community of London, thus contributing to documenting the history of Canada at large. It is posted with permission of it's director, Sestino Casasanta, legal heir.
            </p>
            <p className="mb-5 leading-relaxed" style={{ fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616', fontStyle: 'italic' }}>
              We have made all reasonable efforts to locate the holders of the intellectual rights and to receive permission to make the Corriere available through our site. Should you feel that your rights have been infringed by any material, please contact us and we will remove the content concerned.
            </p>
            <div className="p-4" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '1rem', color: '#432616' }}>
              <p className="mb-1"><strong>Publication Type:</strong> Local Periodical</p>
              <p className="mb-1"><strong>Language:</strong> Italian / English</p>
              <p><strong>Years Available:</strong> 1989 – 2013 (selected issues)</p>
            </div>
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #c4943e, transparent)' }} />

        {/* Available Issues */}
        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>
          Available Issues
        </h3>

        <div className="flex flex-wrap gap-4">
          {Object.entries(issues).map(([year, items]) => (
            <div key={year} className="p-4 min-w-[180px]" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.3)' }}>
              <p className="font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#432616' }}>
                {year}
              </p>
              <ul className="space-y-2">
                {items.map((issue) => (
                  <li key={issue.label}>
                    {issue.pdf ? (
                      <button
                        onClick={() => setViewing(viewing?.label === issue.label ? null : issue)}
                        className="underline hover:opacity-75 transition text-left"
                        style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}
                      >
                        › {issue.label}
                      </button>
                    ) : (
                      <span style={{ fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}>
                        › {issue.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Inline issue viewer */}
        {viewing && (
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#432616' }}>{viewing.label}</p>
              <button onClick={() => setViewing(null)} className="text-sm underline hover:opacity-75" style={{ fontFamily: 'Crimson Text, serif', color: '#432616' }}>Close</button>
            </div>
            <iframe
              src={viewing.pdf.startsWith('http') ? viewing.pdf : `${base}${viewing.pdf}`}
              title={viewing.label}
              className="w-full shadow-md mb-4"
              style={{ borderRadius: '2px', height: '900px', border: 'none' }}
            />
            {viewing.metadata && (
              <div className="p-4" style={{ border: '1px solid #bbaf9e', borderRadius: '2px', fontFamily: 'Crimson Text, serif', fontSize: '0.95rem', color: '#432616' }}>
                <p className="font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Dublin Core Metadata</p>
                <p className="mb-1"><strong>Title:</strong> {viewing.metadata.title}</p>
                {viewing.metadata.subject && <p className="mb-1"><strong>Subject:</strong> {viewing.metadata.subject}</p>}
                {viewing.metadata.creator && <p className="mb-1"><strong>Creator:</strong> {viewing.metadata.creator}</p>}
                {viewing.metadata.language && <p className="mb-1"><strong>Language:</strong> {viewing.metadata.language}</p>}
                <p className="mb-1"><strong>Type:</strong> {viewing.metadata.type}</p>
                <p className="mb-1"><strong>Collection:</strong> {viewing.metadata.collection}</p>
                {viewing.metadata.citation && (
                  <p><strong>Citation:</strong> <a href={viewing.metadata.citation} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-75" style={{ color: '#2c6e8a' }}>{viewing.metadata.citation}</a></p>
                )}
              </div>
            )}
          </div>
        )}

      </div>

    </PageLayout>
  );
}
