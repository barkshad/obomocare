import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';

const BRAND_BLUE = '#1A0FAB';
const BRAND_ORANGE = '#E8751A';
const SURFACE_1 = '#f7f7f5';

export const Programs: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: SURFACE_1 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block rounded-full px-4 py-2 text-xs font-bold tracking-[0.15em] uppercase mb-6" style={{ backgroundColor: '#FEF0E4', color: BRAND_ORANGE }}>
            Our work
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-6">Four pillars. One integrated model.</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            We don't choose between food or healthcare or dignity. The needs don't arrive separately — and neither do our interventions.
          </p>
        </div>

        <div className="space-y-8">
          {content.programs.map((program, index) => (
            <ReactRouterDOM.Link to={`/programs/${program.id}`} key={program.id} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 50, damping: 20 }}
              >
                <GlassCard hoverEffect={true} className="overflow-hidden">
                  <div className={`flex flex-col md:flex-row gap-0 items-stretch ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 h-64 md:h-auto min-h-[350px] relative overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg" style={{ backgroundColor: BRAND_ORANGE }}>
                          {program.stats}
                        </span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                      <h2
                        className="font-serif text-3xl md:text-4xl font-bold mb-4 group-hover:opacity-80 transition-colors"
                        style={{ color: BRAND_BLUE }}
                      >
                        {program.title}
                      </h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8 line-clamp-3">
                        {program.description}
                      </p>
                      <div className="mt-auto flex items-center justify-between">
                        <span className="inline-block px-4 py-2 rounded-lg font-bold text-sm border" style={{ backgroundColor: '#FEF0E4', color: BRAND_ORANGE, borderColor: `${BRAND_ORANGE}30` }}>
                          Programme pillar {index + 1}
                        </span>
                        <span className="font-bold flex items-center gap-2 text-sm group-hover:translate-x-2 transition-transform duration-300" style={{ color: BRAND_BLUE }}>
                          Learn more <ArrowRight size={16} style={{ color: BRAND_ORANGE }} />
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </ReactRouterDOM.Link>
          ))}
        </div>

        <div className="text-center mt-20">
          <ReactRouterDOM.Link
            to="/about"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all hover:shadow-xl border shadow-sm text-white"
            style={{ backgroundColor: BRAND_BLUE }}
          >
            About OBOMOCARE <ArrowRight size={16} />
          </ReactRouterDOM.Link>
        </div>
      </div>
    </div>
  );
};
