import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { useContent } from '../contexts/ContentContext';
import { ArrowLeft, Heart, CheckCircle, Target } from 'lucide-react';
import { BRAND } from '../brand';

export const ProgramDetail: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const { content } = useContent();
  
  // Find program by ID
  const program = content.programs.find(p => p.id === id);

  if (!program) {
    return <ReactRouterDOM.Navigate to="/programs" replace />;
  }

  const programIcons: Record<string, string> = {
    'p1': 'Food basket',
    'p2': 'Transport',
    'p3': 'Personal care',
    'p4': 'Companionship'
  };
  const pillarLabel = programIcons[program.id] || 'Programme pillar';

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden" style={{ backgroundColor: BRAND.blue }}>
        {program.mediaType === 'video' ? (
          <video
            src={program.image}
            className="w-full h-full object-cover opacity-50"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover opacity-50"
          />
        )}
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${BRAND.blue}, ${BRAND.blue}cc, transparent)` }}></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="max-w-7xl mx-auto">
            <ReactRouterDOM.Link to="/programs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-bold text-sm uppercase tracking-wider">
              <ArrowLeft size={16} className="mr-2" /> All programmes
            </ReactRouterDOM.Link>
            <h1
              className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            >
              {program.title}
            </h1>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 text-white rounded-full text-sm font-bold flex items-center gap-2 shadow-lg border border-white/20" style={{ backgroundColor: BRAND.orange }}>
                <Target size={16} /> {program.stats}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
              <h2 className="font-serif text-2xl font-bold mb-6" style={{ color: BRAND.blue }}>About this pillar</h2>
              <div className="prose prose-lg text-slate-600 leading-relaxed whitespace-pre-wrap">
                {program.description}
              </div>

              <div className="mt-10 p-8 rounded-2xl border relative overflow-hidden" style={{ backgroundColor: BRAND.blueLight, borderColor: `${BRAND.blue}15` }}>
                <div className="relative z-10">
                  <h3 className="font-bold mb-3 flex items-center gap-2" style={{ color: BRAND.blue }}>
                    <Heart size={20} style={{ color: BRAND.orange }} />
                    Our commitment
                  </h3>
                  <p className="text-slate-700 italic text-lg font-serif leading-relaxed">
                    "Through the {program.title} pillar, we are restoring dignity and building a sustainable future for the households of Kisii and Nyamira."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-3">Support this pillar</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Your contribution directly supports the {program.title} initiative. Help us reach more households in Kisii and Nyamira Counties.
                </p>

                <ReactRouterDOM.Link
                  to="/get-involved"
                  className="w-full py-4 text-white rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 group mb-6 active:scale-95"
                  style={{ backgroundColor: BRAND.orange }}
                >
                  <Heart className="fill-white/20 group-hover:fill-white transition-colors" />
                  Support programme
                </ReactRouterDOM.Link>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle size={18} style={{ color: BRAND.orange }} className="flex-shrink-0" />
                    <span>100% direct to beneficiaries</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle size={18} style={{ color: BRAND.orange }} className="flex-shrink-0" />
                    <span>Quarterly donor reporting</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle size={18} style={{ color: BRAND.orange }} className="flex-shrink-0" />
                    <span>Community-led accountability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
