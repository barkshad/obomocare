import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { motion } from 'framer-motion';
import * as ReactRouterDOM from 'react-router-dom';
import { Users, Shield, Settings, BarChart3, Banknote, Gavel, X, ArrowRight } from 'lucide-react';

const BRAND_BLUE = '#1A0FAB';
const BRAND_ORANGE = '#E8751A';
const BRAND_BLUE_LIGHT = '#E8E6FA';
const BRAND_ORANGE_LIGHT = '#FEF0E4';

export const About: React.FC = () => {
  const { content } = useContent();

  const orgCards = [
    { icon: Users, title: 'General Assembly', desc: 'Supreme decision-making organ. All registered members in good standing. Adopts constitution, elects trustees, approves annual accounts.', badge: 'Supreme organ' },
    { icon: Shield, title: 'Board of Trustees', desc: 'Five to nine members elected for 3-year terms. Responsible for strategic direction, financial oversight, and ensuring legal compliance.', badge: 'Meets quarterly' },
    { icon: Settings, title: 'Executive Committee', desc: 'Nine elected officers including Chairperson, Secretary, Treasurer, Programmes Officer, Volunteer Coordinator, and Community Liaison Officer.', badge: 'Meets monthly' },
    { icon: BarChart3, title: 'Programmes Committee', desc: 'Oversight and strategic guidance on all four programme pillars. Submits quarterly programme reports to the Board of Trustees.', badge: 'Oversight body' },
    { icon: Banknote, title: 'Finance and Audit Committee', desc: 'Reviews all financial statements before Board presentation. Annual external audit by independent qualified auditor. Full financial transparency to all donors.', badge: 'Annual audit' },
    { icon: Gavel, title: 'Disciplinary Committee', desc: 'Independent body handling all disciplinary matters. No Executive Committee member may sit on it. Operates free from interference by any other organ.', badge: 'Independent' },
  ];

  return (
    <div className="pt-24 pb-16" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full mb-6" style={{ backgroundColor: BRAND_ORANGE_LIGHT, color: BRAND_ORANGE }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_ORANGE }}></span>
            Who we are
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-6">About OBOMOCARE</h1>
          <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: BRAND_ORANGE }}></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            className="p-10 rounded-3xl border"
            style={{ backgroundColor: BRAND_BLUE_LIGHT, borderColor: `${BRAND_BLUE}20` }}
            {...({ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 } } as any)}
          >
            <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: BRAND_BLUE }}>Our Mission</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{content.about.mission}</p>
          </motion.div>
          <motion.div
            className="p-10 rounded-3xl border border-slate-100 shadow-xl"
            style={{ backgroundColor: '#fff' }}
            {...({ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 0.2 } } as any)}
          >
            <h2 className="font-serif text-3xl font-bold mb-6" style={{ color: BRAND_BLUE }}>Our Vision</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{content.about.vision}</p>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          className="rounded-3xl p-10 md:p-14 text-white mb-24 relative overflow-hidden"
          style={{ backgroundColor: BRAND_BLUE }}
          {...({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } } as any)}
        >
          <div className="relative z-10 max-w-3xl">
            <p className="text-xl md:text-2xl leading-relaxed mb-8 italic opacity-90">
              "Families were struggling not with one problem but with several problems simultaneously, and the absence of any coordinating support structure meant that individuals fell through every available gap. OBOMOCARE was founded to close those gaps."
            </p>
            <div className="text-sm font-medium mb-2" style={{ color: BRAND_ORANGE }}>
              — OBOMOCARE Proposal, June 2026
            </div>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-xs opacity-70 mb-2">Motto</div>
              <div className="text-lg font-medium" style={{ color: BRAND_ORANGE }}>Care. Unity. Dignity.</div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="font-serif text-4xl font-bold text-slate-900 mb-10 text-center">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {content.about.values.map((value, idx) => (
              <span
                key={idx}
                className="px-8 py-4 rounded-full font-bold border shadow-md"
                style={{ backgroundColor: '#fff', color: BRAND_BLUE, borderColor: `${BRAND_BLUE}15` }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* Governance */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: BRAND_ORANGE_LIGHT, color: BRAND_ORANGE }}>
              Governance and accountability
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Structured from the start
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              OBOMOCARE is governed by a constitution adopted at its inaugural General Assembly. Authority is distributed across six independent organs with clear mandates and checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orgCards.map((card, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-6 border border-slate-200 bg-white text-center"
                {...({
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.05 }
                } as any)}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: BRAND_BLUE_LIGHT }}>
                  <card.icon size={22} style={{ color: BRAND_BLUE }} />
                </div>
                <h4 className="font-medium text-slate-900 mb-2">{card.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{card.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: BRAND_ORANGE_LIGHT, color: BRAND_ORANGE }}>
                  {card.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl p-10 md:p-16 text-center" style={{ backgroundColor: BRAND_BLUE_LIGHT }}>
          <h3 className="font-serif text-3xl font-bold text-slate-900 mb-4">Join our mission</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 text-lg font-light">
            Whether you volunteer, donate, or spread the word, your support helps us close the gaps that leave vulnerable households behind.
          </p>
          <ReactRouterDOM.Link
            to="/get-involved"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: BRAND_ORANGE }}
          >
            Get involved
            <ArrowRight size={18} />
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};
