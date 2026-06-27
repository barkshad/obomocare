import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { CheckCircle, Users, Shield, Settings, BarChart3, Banknote, Gavel } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { BRAND } from '../brand';

export const Home: React.FC = () => {
  const { content } = useContent();

  const stats = content.homePage?.stats || [
    { id: '1', value: 2000, suffix: '+', label: 'Families served since 2020' },
    { id: '2', value: 5, suffix: ' yrs', label: 'Community-funded operation' },
    { id: '3', value: 40, suffix: '', label: 'Volunteer caregivers' },
    { id: '4', value: 1900000, suffix: '', label: 'People in the Gusii Region' }
  ];

  const aboutPreviewTitle = content.homePage?.aboutPreviewTitle || 'Who we are';
  const aboutPreviewHeadline = content.homePage?.aboutPreviewHeadline || 'A community that refuses to leave its most vulnerable behind';
  const programsTitle = content.homePage?.programsTitle || 'Four pillars. One integrated model.';
  const programsSubtitle = content.homePage?.programsSubtitle || "We don't choose between food or healthcare or dignity. The needs don't arrive separately — and neither do our interventions.";

  if (!content || !content.hero) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: 48, height: 48, border: '3px solid var(--color-brand)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
          <p style={{ fontWeight: 700, color: 'var(--color-brand)' }}>Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* HERO — Editorial split */}
      <section className="hero">
        <div className="hero__content">
          <div className="hero__eyebrow">Gusii Region, Kenya &middot; Est. 2020</div>
          <h1>{content.hero.headline}</h1>
          <p>{content.hero.subheadline}</p>
          <ReactRouterDOM.Link to="/get-involved" className="btn btn--accent">
            Support our work
          </ReactRouterDOM.Link>
        </div>
        <div className="hero__visual">
          <div className="hero__pattern"></div>
        </div>
      </section>

      {/* STATS — bordered grid */}
      <section className="full-bleed">
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat.id} className="stat">
              <div className="stat__number">{Number(stat.value).toLocaleString()}{stat.suffix}</div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT — asymmetric editorial */}
      <section className="section" style={{ background: 'var(--surface-elevated)' }}>
        <div className="container">
          <div className="split-layout">
            <div>
              <div className="features-head__tag">{aboutPreviewTitle}</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 'var(--space-6)' }}>
                {aboutPreviewHeadline}
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink-500)', lineHeight: 1.7, marginBottom: 'var(--space-8)' }}>
                {content.about.founderStory.substring(0, 400)}
              </p>
              <ReactRouterDOM.Link to="/about" className="btn btn--ghost">
                Read our full story
              </ReactRouterDOM.Link>
            </div>
            <div className="feature-row__visual">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — staggered feature rows */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Our work</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '16ch', marginInline: 'auto', marginBottom: 'var(--space-4)' }}>
              {programsTitle}
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>{programsSubtitle}</p>
          </div>

          {content.programs.map((program, i) => (
            <div key={program.id} className="feature-row">
              <div className="feature-row__content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>
              <div className="feature-row__visual">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {i === 0 && <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>}
                  {i === 1 && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                  {i === 2 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}
                  {i === 3 && <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></>}
                </svg>
              </div>
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
            <ReactRouterDOM.Link to="/programs" className="btn">
              View all programmes
            </ReactRouterDOM.Link>
          </div>
        </div>
      </section>

      {/* SITUATION — numbered editorial list */}
      <section className="section" style={{ background: 'var(--surface-elevated)' }}>
        <div className="container">
          <div className="features-head">
            <div className="features-head__tag">The context</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '16ch' }}>
              Why the Gusii Region, and why now
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', marginTop: 'var(--space-4)', lineHeight: 1.7 }}>
              Kisii and Nyamira Counties are home to nearly 1.9 million people. Food poverty rates exceed the national average. Healthcare access barriers are acute.
            </p>
          </div>

          <div className="situation-list">
            {[
              { title: 'Food poverty', text: '39.7% food poverty in Kisii County and 35.9% in Nyamira — both significantly above Kenya\'s national rate. Chronic malnutrition weakens immunity and worsens disease.' },
              { title: 'Healthcare access barriers', text: 'A boda boda trip to a clinic represents a significant share of daily household income. Missed appointments lead to treatment failure.' },
              { title: 'The caregiving gap', text: 'As working-age adults migrate to cities, elderly parents are left without daily care. Without personal support, hygiene-related conditions develop, dignity erodes.' },
              { title: 'Social isolation', text: 'Many individuals OBOMOCARE serves have no regular visitor. This isolation accelerates cognitive decline, deepens depression.' },
              { title: 'Structural absence', text: 'Kenya\'s formal health system operates at facility level. Social protection programmes don\'t reach the majority of households OBOMOCARE serves.' },
              { title: 'Compounding cycles', text: 'Poor nutrition weakens health. Poor health increases medical needs. Limited transport prevents clinic attendance. Missed appointments worsen illness. Worsening illness increases caregiving needs. Lack of caregivers reduces quality of life. Isolation contributes to depression. Depression reduces motivation to seek help. This cycle continues unless multiple interventions are delivered together.' }
            ].map((card, i) => (
              <div key={i} className="situation-item">
                <div className="situation-item__num">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="section" style={{ background: 'var(--color-brand-light)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Theory of change</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em', marginInline: 'auto' }}>
              Breaking the cycle
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', margin: 'var(--space-4) auto 0', lineHeight: 1.7 }}>
              Each of the four root problems causes and amplifies the others. OBOMOCARE's integrated response interrupts all four simultaneously.
            </p>
          </div>

          <div className="toc">
            <div className="toc__problems">
              {[
                { title: 'Food insecurity', text: 'Malnutrition weakens immunity and worsens chronic illness' },
                { title: 'Mobility barriers', text: 'No affordable transport to clinic visits, treatment failure' },
                { title: 'Caregiving gaps', text: 'No personal care, hygiene illness, pressure sores' },
                { title: 'Social isolation', text: 'Depression, cognitive decline, withdrawal' }
              ].map((item, i) => (
                <div key={i} className="toc__item">
                  <strong>{item.title}</strong>
                  {item.text}
                </div>
              ))}
            </div>
            <div className="toc__arrow">&rarr;</div>
            <div className="toc__center">
              <div className="toc__center-title">OBOMOCARE<br />Integrated Model</div>
              <div className="toc__center-sub">Food &middot; Transport<br />Personal care &middot; Companionship</div>
            </div>
          </div>

          <div className="impact-chain">
            {['Improved clinic attendance', 'Better nutrition', 'Restored dignity', 'Reduced isolation', 'Household wellbeing', 'Community resilience'].map((item, i) => {
              const isLast = i >= 4;
              return (
                <React.Fragment key={i}>
                  <span className={`impact-chain__item${isLast ? ' impact-chain__item--final' : ''}`}>{item}</span>
                  {i < 5 && <span className="impact-chain__arrow">&rarr;</span>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* KPI / IMPACT TARGETS */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Impact targets</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              What success looks like at month 24
            </h2>
          </div>

          <div className="kpi-grid">
            {[
              { num: '1,500', label: 'Vulnerable households enrolled and receiving full programme support', target: 'By month 24' },
              { num: '80%', label: 'Of enrolled households with adequate food access (2+ meals/day)', target: 'Up from below 50%' },
              { num: '85%', label: 'Clinic appointment attendance rate among beneficiaries', target: 'Up from below 60%' },
              { num: '90%', label: 'Beneficiaries reporting improved dignity and respect', target: 'Not yet measured' },
              { num: '60%', label: 'Reduction in social isolation score from baseline', target: 'Baseline at month 1' },
              { num: '85%', label: 'Volunteer caregiver retention rate', target: 'Up from ~70%' }
            ].map((kpi, i) => (
              <div key={i} className="kpi">
                <div className="kpi__number">{kpi.num}</div>
                <div className="kpi__label">{kpi.label}</div>
                <span className="kpi__target">{kpi.target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER CAREGIVER CORPS */}
      <section className="section" style={{ background: 'var(--surface-elevated)' }}>
        <div className="container">
          <div className="features-head">
            <div className="features-head__tag">Volunteer caregiver corps</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '16ch' }}>
              Forty trained caregivers. One community.
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', marginTop: 'var(--space-4)', lineHeight: 1.7 }}>
              Our volunteer caregivers are the heart of OBOMOCARE. Drawn from the communities they serve, trained to a professional standard, and supported to stay.
            </p>
          </div>

          <div className="split-layout">
            <div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-500)', lineHeight: 1.8, marginBottom: 'var(--space-6)' }}>
                The programme will train and deploy 40 community volunteers drawn from the target sub-counties. Training is delivered in partnership with a qualified health institution and covers:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {[
                  'Personal care techniques — bathing, dressing, grooming, wound care',
                  'Safeguarding and dignity principles',
                  'Basic health literacy and referral documentation',
                  'First Aid and CPR',
                  'Basic mental health support',
                  'Documentation and communication skills'
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-3)', border: '1px solid var(--ink-100)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-sm)', color: 'var(--ink-500)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: 'var(--color-brand)', borderRadius: 'var(--radius-md)', padding: 'var(--space-8)', color: '#fff', marginBottom: 'var(--space-6)' }}>
                <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>A career pathway, not just a volunteer role</h4>
                <p style={{ fontSize: 'var(--text-sm)', opacity: 0.8, lineHeight: 1.7 }}>
                  Volunteers receive a monthly support stipend, transport reimbursements, peer support groups, and formal recognition. Skills gained through the programme qualify volunteers for progression into community health assistant roles within the county government system.
                </p>
              </div>
              <div style={{ background: 'var(--surface-primary)', borderRadius: 'var(--radius-md)', padding: 'var(--space-6)', border: '1px solid var(--ink-100)' }}>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-500)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>Current volunteer base</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-accent)' }}>22</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-300)' }}>Active caregivers</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--color-accent)' }}>18</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-300)' }}>CHV partners linked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNDING REQUEST */}
      <section className="section" style={{ background: 'var(--surface-primary)' }}>
        <div className="container">
          <div className="features-head">
            <div className="features-head__tag">Funding request</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
              USD 1,801,697 over 24 months
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', marginTop: 'var(--space-4)', lineHeight: 1.7 }}>
              This is not a request for charity directed at an untested idea. OBOMOCARE has operated for five years without a single dollar of international funding. We ask to be supported to scale what already works.
            </p>
          </div>

          <div className="budget-total">
            <div className="budget-total__label">Total international funding requested</div>
            <div className="budget-total__num">USD 1,801,697</div>
            <div className="budget-total__sub">24-month programme &middot; Kisii and Nyamira Counties &middot; 1,500 households</div>
          </div>

          <div className="budget-lines" style={{ maxWidth: '48rem' }}>
            {[
              { name: 'Food support packages (1,500 households &times; 24 months)', pct: '60%', amt: 'USD 1,080,000', width: '60%' },
              { name: 'Personal care and hygiene supply kits', pct: '14%', amt: 'USD 252,000', width: '14%' },
              { name: 'Transport facilitation fund', pct: '6%', amt: 'USD 108,000', width: '6%' },
              { name: 'Volunteer stipends (40 caregivers &times; 24 months)', pct: '7.5%', amt: 'USD 134,400', width: '7.5%' },
              { name: 'Administration and staffing (below 15% of total)', pct: '8%', amt: 'USD 143,440', width: '8%' },
              { name: 'Digital coordination system + outreach + contingency', pct: '4.5%', amt: 'USD 83,857', width: '4.5%' }
            ].map((line, i) => (
              <div key={i} className="budget-line">
                <div>
                  <div className="budget-line__name">{line.name}</div>
                  <div className="budget-line__bar">
                    <div className="budget-line__bar-fill" style={{ width: line.width }}></div>
                  </div>
                </div>
                <div className="budget-line__pct">{line.pct}</div>
                <div className="budget-line__amt">{line.amt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="section" style={{ background: 'var(--surface-elevated)' }}>
        <div className="container">
          <div className="features-head" style={{ textAlign: 'center' }}>
            <div className="features-head__tag">Sustainability</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 700, color: 'var(--ink-900)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Built to last beyond any single donor
            </h2>
            <p style={{ color: 'var(--ink-500)', maxWidth: '40ch', margin: 'var(--space-4) auto 0', lineHeight: 1.7 }}>
              OBOMOCARE is committed to revenue diversification, volunteer retention, and generating rigorous programme evidence that attracts future partners independently.
            </p>
          </div>

          <div className="grid-auto">
            {[
              { title: 'Local business partnerships', text: 'In-kind food donations and seasonal campaigns with regional supermarkets and retailers across Kisii and Nyamira.', status: 'Active &middot; 6 partners' },
              { title: 'Church and faith networks', text: 'Regular collections, volunteer mobilization, and community outreach facilitation through four active congregations.', status: 'Active &middot; 4 congregations' },
              { title: 'Diaspora fundraising', text: 'Online campaigns targeting the Gusii diaspora within Kenya and internationally.', status: 'Growing' },
              { title: 'Boda boda partnerships', text: 'Negotiated subsidised transport rates for clinic visits. Two associations currently engaged in pilot arrangements.', status: 'Pilot' },
              { title: 'County government integration', text: 'Integration dialogue underway with county social protection and community health departments.', status: 'In dialogue' },
              { title: 'NGO sub-granting', text: 'Positioning OBOMOCARE as a credible CBO implementing partner for larger development organisations.', status: 'Prospecting' }
            ].map((card, i) => (
              <div key={i} className="card">
                <div className="card__body">
                  <div className="card__tag">{card.status}</div>
                  <h3 className="card__title">{card.title}</h3>
                  <p className="card__text">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>The people we serve are our neighbours.</h2>
          <p>Each one has a name, a story, and a right to care. OBOMOCARE exists to make that care real. We invite you to make it possible at scale. Full financial transparency, quarterly reporting, and open donor access guaranteed.</p>
          <div className="cta-actions">
            <ReactRouterDOM.Link to="/get-involved" className="btn btn--light">
              Partner with us
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link to="/programs" className="btn btn--outline">
              Read the full proposal
            </ReactRouterDOM.Link>
          </div>
        </div>
      </section>
    </>
  );
};
