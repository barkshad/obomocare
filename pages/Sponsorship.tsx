import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { GlassCard } from '../components/GlassCard';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const BRAND_BLUE = '#1A0FAB';
const BRAND_BLUE_LIGHT = '#E8E6FA';
const BRAND_ORANGE = '#E8751A';

export const Sponsorship: React.FC = () => {
  const { content } = useContent();
  const [selectedChild, setSelectedChild] = useState<any | null>(null);

  return (
    <div className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#f7f7f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full mb-6" style={{ backgroundColor: '#FEF0E4', color: BRAND_ORANGE }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRAND_ORANGE }}></span>
            Programme profiles
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-4">Our Programme Pillars</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Each pillar addresses a critical gap in the care continuum for vulnerable households in Kisii and Nyamira Counties. Together, they form an integrated model of community care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.children.map((child, i) => (
            <motion.div
              key={child.id}
              onClick={() => setSelectedChild(child)}
              className="cursor-pointer"
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: i * 0.1, type: "spring" }
              } as any)}
            >
              <GlassCard hoverEffect={true} className="h-full">
                <div className="relative h-64 overflow-hidden">
                  <img src={child.image} alt={child.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm" style={{ backgroundColor: BRAND_ORANGE, color: '#fff' }}>
                    {child.dream}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">{child.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{child.bio}</p>
                  <button
                    className="mt-4 w-full py-2 text-white rounded-lg font-bold hover:opacity-90 transition-colors shadow-lg"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    View details
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Programme Detail Modal */}
      <AnimatePresence>
        {selectedChild && (
          <motion.div
            {...({
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto",
              style: { backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }
            } as any)}
            onClick={() => setSelectedChild(null)}
          >
            <motion.div
              {...({
                initial: { scale: 0.9, opacity: 0, y: 50 },
                animate: { scale: 1, opacity: 1, y: 0 },
                exit: { scale: 0.95, opacity: 0, y: 50 },
                transition: { type: "spring", damping: 25, stiffness: 300 },
                className: "bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-white/50 my-8 max-h-[90vh] flex flex-col"
              } as any)}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedChild(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors z-20"
                style={{ backdropFilter: 'blur(4px)' }}
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
                    <span className="px-3 py-1 rounded-full text-sm font-bold border" style={{ backgroundColor: BRAND_BLUE_LIGHT || '#E8E6FA', color: BRAND_BLUE, borderColor: `${BRAND_BLUE}20` }}>
                      {selectedChild.dream}
                    </span>
                  </div>

                  <div className="overflow-y-auto pr-2 flex-1 mb-6">
                    <h4 className="font-bold text-slate-700 mb-2 mt-0">About this pillar</h4>
                    <p className="text-slate-600 mb-4 leading-relaxed">{selectedChild.bio}</p>

                    <h4 className="font-bold text-slate-700 mb-2">What this programme delivers</h4>
                    <ul className="text-sm text-slate-500 space-y-2 list-none pl-0">
                      <li className="flex gap-2 items-center"><CheckCircle size={16} style={{ color: BRAND_ORANGE }} /> Direct household support</li>
                      <li className="flex gap-2 items-center"><CheckCircle size={16} style={{ color: BRAND_ORANGE }} /> Community volunteer caregivers</li>
                      <li className="flex gap-2 items-center"><CheckCircle size={16} style={{ color: BRAND_ORANGE }} /> Transparent quarterly reporting</li>
                    </ul>
                  </div>

                  <motion.a
                    href="/get-involved"
                    className="w-full py-3 text-white text-center rounded-xl font-bold hover:opacity-90 transition-colors shadow-lg shrink-0"
                    style={{ backgroundColor: BRAND_ORANGE }}
                    {...({ whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } } as any)}
                  >
                    Support this pillar
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
