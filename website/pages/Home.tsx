import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ArrowRight, Heart, CheckCircle } from 'lucide-react';
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

  const aboutPreviewTitle = content.homePage?.aboutPreviewTitle || "Who we are";
  const aboutPreviewHeadline = content.homePage?.aboutPreviewHeadline || "A community that refuses to leave its most vulnerable behind";
  const programsTitle = content.homePage?.programsTitle || "Four pillars. One integrated model.";
  const programsSubtitle = content.homePage?.programsSubtitle || "We don't choose between food or healthcare or dignity. The needs don't arrive separately — and neither do our interventions.";

  if (!content || !content.hero) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: BRAND.blue }}></div>
          <p className="font-bold animate-pulse" style={{ color: BRAND.blue }}>Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-transparent">
      {/* HERO SECTION */}
      <section className="relative h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden" style={{ backgroundColor: BRAND.blue }}>
        <div className="absolute inset-0 z-0">
          <img
            src={content.hero.heroImage}
            alt="OBOMOCARE Community"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0" style={{ backgroundColor: BRAND.blue, opacity: 0.7 }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 mt-12">
          <div>
            <div>
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl" style={{ background: `rgba(232,117,26,0.25)` }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.orange }}></span>
                Gusii Region, Kenya · Est. 2020
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[1.05] tracking-tight drop-shadow-xl text-balance">
              {content.hero.headline}
            </h1>

            <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md text-balance">
              {content.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <div>
                <ReactRouterDOM.Link
                  to="/get-involved"
                  className="px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 border transition-colors text-white"
                  style={{ backgroundColor: BRAND.orange, borderColor: BRAND.orange }}
                >
                  <Heart fill="white" size={20} className="text-white" /> Support our work
                </ReactRouterDOM.Link>
              </div>
              <div>
                <ReactRouterDOM.Link
                  to="/programs"
                  className="px-10 py-5 text-white border border-white/30 rounded-full font-bold text-lg flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  Read the proposal
                </ReactRouterDOM.Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative z-20 px-4 mb-32" style={{ backgroundColor: BRAND.orange }}>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center text-white">
              <div className="text-2xl md:text-3xl font-medium leading-tight">
                {Number(stat.value).toLocaleString()}{stat.suffix}
              </div>
              <div className="text-xs opacity-85 mt-2 leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / WHO WE ARE */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
                {aboutPreviewTitle}
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                {aboutPreviewHeadline}
              </h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed mb-10">
                <p className="text-lg font-light leading-relaxed">
                  {content.about.founderStory.substring(0, 400)}
                </p>
              </div>
              <ReactRouterDOM.Link to="/about" className="group flex items-center gap-3 text-lg font-bold transition-all" style={{ color: BRAND.blue }}>
                <span className="border-b-2 border-slate-200 group-hover:border-current transition-colors pb-1">Read our full story</span>
                <span className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 group-hover:text-white transition-all">
                  <ArrowRight size={16} />
                </span>
              </ReactRouterDOM.Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
              <div className="col-span-1 mt-12">
                <img
                  src={content.about.homePreviewImage1 || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop"}
                  alt="Community care"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover rotate-[-3deg] hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="col-span-1">
                <img
                  src={content.about.homePreviewImage2 || "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=500&fit=crop"}
                  alt="Volunteer caregivers"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover rotate-[3deg] hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS / OUR WORK */}
      <section className="py-24" style={{ backgroundColor: BRAND.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              Our work
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              {programsTitle}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              {programsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.programs.map((program) => (
              <div key={program.id}>
                <ReactRouterDOM.Link to={`/programs/${program.id}`} className="block h-full group">
                  <div className="h-full flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2" style={{ backgroundColor: BRAND.orange }}>
                          {program.stats}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-white leading-tight">{program.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-slate-600 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                        {program.description}
                      </p>
                      <span className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all" style={{ color: BRAND.blue }}>
                        Learn more <ArrowRight size={14} style={{ color: BRAND.orange }} />
                      </span>
                    </div>
                  </div>
                </ReactRouterDOM.Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <ReactRouterDOM.Link
              to="/programs"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl border shadow-sm text-white"
              style={{ backgroundColor: BRAND.blue }}
            >
              View all programmes <ArrowRight size={16} />
            </ReactRouterDOM.Link>
          </div>
        </div>
      </section>

      {/* SITUATION / THE CONTEXT */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              The context
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Why the Gusii Region, and why now
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              Kisii and Nyamira Counties are home to nearly 1.9 million people. Food poverty rates exceed the national average. Healthcare access barriers are acute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Food poverty', text: '39.7% food poverty in Kisii County and 35.9% in Nyamira — both significantly above Kenya\'s national rate. Chronic malnutrition weakens immunity and worsens disease.' },
              { title: 'Healthcare access barriers', text: 'A boda boda trip to a clinic represents a significant share of daily household income. Missed appointments lead to treatment failure.' },
              { title: 'The caregiving gap', text: 'As working-age adults migrate to cities, elderly parents are left without daily care. Without personal support, hygiene-related conditions develop, dignity erodes.' },
              { title: 'Social isolation', text: 'Many individuals OBOMOCARE serves have no regular visitor. This isolation accelerates cognitive decline, deepens depression.' },
              { title: 'Structural absence', text: 'Kenya\'s formal health system operates at facility level. Social protection programmes don\'t reach the majority of households OBOMOCARE serves.' },
              { title: 'Compounding cycles', text: 'Poor nutrition weakens health. Poor health increases medical needs. Limited transport prevents clinic attendance. Missed appointments worsen illness. Worsening illness increases caregiving needs. Lack of caregivers reduces quality of life. Isolation contributes to depression. Depression reduces motivation to seek help. This cycle continues unless multiple interventions are delivered together.' }
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border border-slate-200"
                style={{ borderTop: `3px solid ${BRAND.orange}`, backgroundColor: '#fff' }}
              >
                <h4 className="text-sm font-medium mb-3" style={{ color: BRAND.blue }}>{card.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEORY OF CHANGE */}
      <section className="py-24" style={{ backgroundColor: BRAND.blueLight }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              Theory of change
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Breaking the cycle
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              Each of the four root problems causes and amplifies the others. OBOMOCARE's integrated response interrupts all four simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-8">
            <div className="space-y-3">
              {[
                { title: 'Food insecurity', text: 'Malnutrition weakens immunity and worsens chronic illness' },
                { title: 'Mobility barriers', text: 'No affordable transport → missed clinic visits → treatment failure' },
                { title: 'Caregiving gaps', text: 'No personal care → hygiene illness, pressure sores, loss of dignity' },
                { title: 'Social isolation', text: 'No companionship → depression, cognitive decline, withdrawal' }
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-3 border border-slate-200 bg-white text-sm text-slate-600">
                  <strong className="block text-slate-900 text-sm">{item.title}</strong>
                  {item.text}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="text-4xl" style={{ color: BRAND.orange }}>→</div>
            </div>
            <div className="rounded-xl p-8 text-center text-white" style={{ backgroundColor: BRAND.blue }}>
              <div className="text-sm font-medium leading-tight mb-2">OBOMOCARE<br />Integrated Model</div>
              <div className="text-xs opacity-75 mt-2">Food · Transport<br />Personal care · Companionship</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 justify-center">
            {['Improved clinic attendance', 'Better nutrition', 'Restored dignity', 'Reduced isolation', 'Household wellbeing', 'Community resilience'].map((item, i) => {
              const isLast = i >= 4;
              return (
                <React.Fragment key={i}>
                  <span className="px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: isLast ? BRAND.blue : BRAND.blueLight, color: isLast ? '#fff' : BRAND.blue }}>
                    {item}
                  </span>
                  {i < 5 && <span className="text-lg" style={{ color: BRAND.orange }}>→</span>}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT TARGETS / KPIs */}
      <section className="py-24" style={{ backgroundColor: BRAND.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              Impact targets
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              What success looks like at month 24
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '1,500', label: 'Vulnerable households enrolled and receiving full programme support', target: 'By month 24' },
              { num: '80%', label: 'Of enrolled households with adequate food access (2+ meals/day)', target: 'Up from below 50%' },
              { num: '85%', label: 'Clinic appointment attendance rate among beneficiaries', target: 'Up from below 60%' },
              { num: '90%', label: 'Beneficiaries reporting improved dignity and respect', target: 'Not yet measured' },
              { num: '60%', label: 'Reduction in social isolation score from baseline', target: 'Baseline at month 1' },
              { num: '85%', label: 'Volunteer caregiver retention rate', target: 'Up from ~70%' }
            ].map((kpi, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border border-slate-200 bg-white text-center"
              >
                <div className="text-3xl font-medium mb-2" style={{ color: BRAND.orange }}>{kpi.num}</div>
                <div className="text-xs text-slate-500 leading-relaxed mb-3">{kpi.label}</div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
                  {kpi.target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEER CAREGIVER CORPS */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              Volunteer caregiver corps
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Forty trained caregivers. One community.
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              Our volunteer caregivers are the heart of OBOMOCARE. Drawn from the communities they serve, trained to a professional standard, and supported to stay.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                The programme will train and deploy 40 community volunteers drawn from the target sub-counties. Training is delivered in partnership with a qualified health institution and covers:
              </p>
              <div className="space-y-3">
                {[
                  'Personal care techniques — bathing, dressing, grooming, wound care',
                  'Safeguarding and dignity principles',
                  'Basic health literacy and referral documentation',
                  'First Aid and CPR',
                  'Waste management',
                  'Basic mental health support',
                  'Documentation and communication skills',
                  'Professional ethics',
                  'Confidentiality',
                  'Community engagement'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-lg p-3 border border-slate-200 bg-white text-sm text-slate-600">
                    <CheckCircle size={16} style={{ color: BRAND.orange }} className="flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-xl p-6 text-white mb-6" style={{ backgroundColor: BRAND.blue }}>
                <h4 className="font-medium mb-2">A career pathway, not just a volunteer role</h4>
                <p className="text-sm opacity-80 leading-relaxed">
                  Volunteers receive a monthly support stipend, transport reimbursements, peer support groups, and formal recognition. Skills gained through the programme qualify volunteers for progression into community health assistant roles within the county government system.
                </p>
              </div>
              <div className="rounded-xl p-6 border border-slate-200" style={{ backgroundColor: BRAND.surface }}>
                <p className="text-xs text-slate-500 mb-3 font-medium">Current volunteer base</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-medium" style={{ color: BRAND.orange }}>22</div>
                    <div className="text-xs text-slate-400">Active caregivers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium" style={{ color: BRAND.orange }}>18</div>
                    <div className="text-xs text-slate-400">CHV partners linked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNDING REQUEST / BUDGET */}
      <section className="py-24" style={{ backgroundColor: BRAND.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              Funding request
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              USD 1,801,697 over 24 months
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              This is not a request for charity directed at an untested idea. OBOMOCARE has operated for five years without a single dollar of international funding. We ask to be supported to scale what already works.
            </p>
          </div>

          <div className="rounded-xl p-8 md:p-12 text-white text-center mb-10" style={{ backgroundColor: BRAND.blue }}>
            <div className="text-sm opacity-75 mb-2">Total international funding requested</div>
            <div className="text-4xl md:text-5xl font-medium mb-2">USD 1,801,697</div>
            <div className="text-sm opacity-70">24-month programme · Kisii and Nyamira Counties · 1,500 households</div>
          </div>

          <div className="space-y-4 max-w-4xl">
            {[
              { name: 'Food support packages (1,500 households × 24 months)', pct: '60%', amt: 'USD 1,080,000', width: '60%' },
              { name: 'Personal care and hygiene supply kits', pct: '14%', amt: 'USD 252,000', width: '14%' },
              { name: 'Transport facilitation fund', pct: '6%', amt: 'USD 108,000', width: '6%' },
              { name: 'Volunteer stipends (40 caregivers × 24 months)', pct: '7.5%', amt: 'USD 134,400', width: '7.5%' },
              { name: 'Administration and staffing (below 15% of total)', pct: '8%', amt: 'USD 143,440', width: '8%' },
              { name: 'Digital coordination system + outreach + contingency', pct: '4.5%', amt: 'USD 83,857', width: '4.5%' }
            ].map((line, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-3 md:gap-6 items-center bg-white p-4 rounded-lg border border-slate-200">
                <div>
                  <div className="text-sm text-slate-600">{line.name}</div>
                  <div className="h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: line.width, backgroundColor: BRAND.orange }}></div>
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-medium whitespace-nowrap">{line.pct}</div>
                <div className="text-sm font-medium text-slate-900 whitespace-nowrap">{line.amt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
              Sustainability
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Built to last beyond any single donor
            </h2>
            <p className="text-slate-500 max-w-2xl text-lg font-light">
              OBOMOCARE is committed to revenue diversification, volunteer retention, and generating rigorous programme evidence that attracts future partners independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Local business partnerships', text: 'In-kind food donations and seasonal campaigns with regional supermarkets and retailers across Kisii and Nyamira.', status: 'Active · 6 partners', statusType: 'active' },
              { title: 'Church and faith networks', text: 'Regular collections, volunteer mobilization, and community outreach facilitation through four active congregations.', status: 'Active · 4 congregations', statusType: 'active' },
              { title: 'Diaspora fundraising', text: 'Online campaigns targeting the Gusii diaspora within Kenya and internationally. A digital platform will be formalized under the proposed programme.', status: 'Growing', statusType: 'growing' },
              { title: 'Boda boda partnerships', text: 'Negotiated subsidised transport rates for clinic visits. Two associations currently engaged in pilot arrangements.', status: 'Pilot', statusType: 'pilot' },
              { title: 'County government', text: 'Integration dialogue underway with county social protection and community health departments. Potential co-funding pathway.', status: 'In dialogue', statusType: 'growing' },
              { title: 'NGO sub-granting', text: 'Positioning OBOMOCARE as a credible CBO implementing partner for larger development organisations operating in the region.', status: 'Prospecting', statusType: 'growing' }
            ].map((card, i) => {
              const statusColors: Record<string, { bg: string; color: string }> = {
                active: { bg: '#e6f7ef', color: '#0a6e45' },
                growing: { bg: BRAND.blueLight, color: BRAND.blue },
                pilot: { bg: BRAND.orangeLight, color: BRAND.orange }
              };
              const colors = statusColors[card.statusType];
              return (
                <div key={i} className="rounded-xl p-6 border border-slate-200 bg-white">
                  <h4 className="font-medium text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">{card.text}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: colors.bg, color: colors.color }}>
                    {card.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: BRAND.orange }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
            The people we serve are our neighbours.
          </h2>
          <p className="text-white/85 mb-10 leading-relaxed max-w-2xl mx-auto">
            Each one has a name, a story, and a right to care. OBOMOCARE exists to make that care real. We invite you to make it possible at scale. Full financial transparency, quarterly reporting, and open donor access guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ReactRouterDOM.Link
              to="/get-involved"
              className="px-8 py-4 rounded-lg font-bold shadow-lg text-white transition-all hover:opacity-90"
              style={{ backgroundColor: '#fff', color: BRAND.orange }}
            >
              Partner with us
            </ReactRouterDOM.Link>
            <ReactRouterDOM.Link
              to="/programs"
              className="px-8 py-4 rounded-lg font-bold border border-white/60 text-white transition-all hover:bg-white/10"
              style={{ background: 'transparent' }}
            >
              Read the full proposal
            </ReactRouterDOM.Link>
          </div>
        </div>
      </section>
    </div>
  );
};
