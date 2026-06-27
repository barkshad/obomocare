import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, CheckCircle } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
import { BRAND } from '../brand';

export const Sponsorship: React.FC = () => {
  const { content } = useContent();
  const [selectedChild, setSelectedChild] = useState<any | null>(null);

  return (
    <div className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: BRAND.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full mb-6" style={{ backgroundColor: BRAND.orangeLight, color: BRAND.orange }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND.orange }}></span>
            Programme profiles
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-4">Our Programme Pillars</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Each pillar addresses a critical gap in the care continuum for vulnerable households in Kisii and Nyamira Counties. Together, they form an integrated model of community care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.children.map((child, i) => (
            <div
              key={child.id}
              onClick={() => setSelectedChild(child)}
              className="cursor-pointer bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={child.image} alt={child.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm" style={{ backgroundColor: BRAND.orange, color: '#fff' }}>
                  {child.dream}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">{child.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{child.bio}</p>
                <button
                  className="mt-4 w-full py-2 text-white rounded-lg font-bold hover:opacity-90 transition-colors shadow-lg"
                  style={{ backgroundColor: BRAND.blue }}
                >
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Programme Detail Modal */}
      {selectedChild && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          onClick={() => setSelectedChild(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedChild(null)}
              className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full overflow-y-auto">
              <div className="md:w-1/2 h-64 md:h-auto flex-shrink-0">
                <img src={selectedChild.image} alt={selectedChild.name} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-2">{selectedChild.name}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full text-sm font-bold border" style={{ backgroundColor: BRAND.blueLight, color: BRAND.blue, borderColor: `${BRAND.blue}20` }}>
                    {selectedChild.dream}
                  </span>
                </div>

                <div className="overflow-y-auto pr-2 flex-1 mb-6">
                  <h4 className="font-bold text-slate-700 mb-2 mt-0">About this pillar</h4>
                  <p className="text-slate-600 mb-4 leading-relaxed">{selectedChild.bio}</p>

                  <h4 className="font-bold text-slate-700 mb-2">What this programme delivers</h4>
                  <ul className="text-sm text-slate-500 space-y-2 list-none pl-0">
                    <li className="flex gap-2 items-center"><CheckCircle size={16} style={{ color: BRAND.orange }} /> Direct household support</li>
                    <li className="flex gap-2 items-center"><CheckCircle size={16} style={{ color: BRAND.orange }} /> Community volunteer caregivers</li>
                    <li className="flex gap-2 items-center"><CheckCircle size={16} style={{ color: BRAND.orange }} /> Transparent quarterly reporting</li>
                  </ul>
                </div>

                <a
                  href="/get-involved"
                  className="w-full py-3 text-white text-center rounded-xl font-bold hover:opacity-90 transition-colors shadow-lg shrink-0"
                  style={{ backgroundColor: BRAND.orange }}
                >
                  Support this pillar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
