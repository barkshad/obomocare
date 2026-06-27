import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { BRAND } from '../brand';

export const Impact: React.FC = () => {
  const { content } = useContent();

  const risks = [
    { risk: 'Volunteer attrition', likelihood: 'Medium', impact: 'High', mitigation: 'Monthly stipend, training, peer support, recognition, clear role boundaries' },
    { risk: 'Food supply disruption', likelihood: 'Medium', impact: 'High', mitigation: 'Four+ supplier base; emergency reserve covering two months of food costs' },
    { risk: 'Transport cost increases', likelihood: 'Medium', impact: 'Medium', mitigation: 'MOUs with two boda boda associations; cash reserve; bicycle ambulance exploration' },
    { risk: 'Donor funding interruption', likelihood: 'Low', impact: 'High', mitigation: 'Diversified funding base; three-month operating reserve; phased milestone spending' },
    { risk: 'Safeguarding risk to beneficiaries', likelihood: 'Low', impact: 'Very High', mitigation: 'Safeguarding policy in place; mandatory training for all volunteers; incident reporting; Board oversight' }
  ];

  const impactBadgeClass: Record<string, { bg: string; color: string }> = {
    'High': { bg: '#fde8e8', color: '#b91c1c' },
    'Medium': { bg: '#fef3c7', color: '#b45309' },
    'Low': { bg: '#d1fae5', color: '#065f46' },
    'Very High': { bg: '#fee2e2', color: '#991b1b' }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: BRAND.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.orange }}></span>
            Impact
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-4">Our Impact & Risk Management</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Structured governance and proactive risk management ensure OBOMOCARE delivers lasting impact with accountability.
          </p>
        </div>

        {/* Governance recap */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-16">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Governance structure</h2>
          <p className="text-slate-600 mb-8">
            OBOMOCARE is governed by a constitution adopted at its inaugural General Assembly. Authority is distributed across six independent organs with clear mandates and checks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'General Assembly', desc: 'Supreme decision-making organ. All registered members in good standing.' },
              { title: 'Board of Trustees', desc: 'Five to nine members elected for 3-year terms. Strategic direction and financial oversight.' },
              { title: 'Executive Committee', desc: 'Nine elected officers including Chairperson, Secretary, Treasurer, and others.' },
              { title: 'Programmes Committee', desc: 'Oversight and strategic guidance on all four programme pillars.' },
              { title: 'Finance and Audit Committee', desc: 'Annual external audit. Full financial transparency to all donors.' },
              { title: 'Disciplinary Committee', desc: 'Independent body handling all disciplinary matters.' }
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border border-slate-200 bg-white"
              >
                <h4 className="font-medium text-slate-900 mb-2">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk table */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 overflow-x-auto">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Risks identified and mitigated</h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Risk</th>
                <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Likelihood</th>
                <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Impact</th>
                <th className="pb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {risks.map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0">
                  <td className="py-4 text-slate-700 font-medium">{row.risk}</td>
                  <td className="py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: impactBadgeClass[row.likelihood]?.bg, color: impactBadgeClass[row.likelihood]?.color }}>
                      {row.likelihood}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: impactBadgeClass[row.impact]?.bg, color: impactBadgeClass[row.impact]?.color }}>
                      {row.impact}
                    </span>
                  </td>
                  <td className="py-4 text-slate-500 leading-relaxed">{row.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
