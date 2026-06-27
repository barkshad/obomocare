import React, { useState, useMemo } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, ZoomIn, Play, Film } from 'lucide-react';
import { MediaItem } from '../types';
import { BRAND } from '../brand';

export const Gallery: React.FC = () => {
  const { content } = useContent();
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(content.gallery.map(item => item.category)))];

  const filteredItems = useMemo(() => {
    if (filter === 'All') return content.gallery;
    return content.gallery.filter(item => item.category === filter);
  }, [content.gallery, filter]);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-6">Our Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-8">
            Witness the daily moments of joy, learning, and growth within our community.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:opacity-80'
                }`}
                style={filter === cat ? { backgroundColor: BRAND.orange } : { color: BRAND.orange }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="aspect-square rounded-2xl overflow-hidden shadow-md group relative cursor-pointer bg-slate-200 border-4 border-white"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'video' ? (
                <div className="w-full h-full relative bg-black">
                   <video 
                     src={item.url} 
                     className="w-full h-full object-cover opacity-90" 
                     muted 
                     loop 
                     playsInline 
                     onMouseOver={e => (e.target as HTMLVideoElement).play().catch(() => {})}
                     onMouseOut={e => (e.target as HTMLVideoElement).pause()}
                   />
                   <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center">
                        <Play fill="white" className="text-white ml-1" size={20} />
                     </div>
                   </div>
                   <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-md font-bold flex items-center gap-1">
                      <Film size={10} /> Video
                   </div>
                </div>
              ) : (
                <img 
                  src={item.url} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
              )}
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: `${BRAND.blue}66` }}>
                <div className="text-white text-center">
                  <ZoomIn className="w-10 h-10 mx-auto mb-2" />
                  <span className="font-bold text-sm tracking-widest uppercase">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(15,23,42,0.95)' }}
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-6 md:right-6 p-3 text-white rounded-full transition-colors z-50 hover:bg-white/20"
            onClick={() => setSelectedItem(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[80vh] md:max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === 'video' ? (
              <video
                src={selectedItem.url}
                className="max-w-full max-h-[80vh] md:max-h-[85vh] rounded-xl shadow-2xl bg-black"
                controls
                autoPlay
              />
            ) : (
              <img
                src={selectedItem.url}
                alt={selectedItem.category}
                className="max-w-full max-h-[80vh] md:max-h-[90vh] object-contain rounded-xl shadow-2xl"
              />
            )}
            
            <div className="absolute bottom-[-3rem] left-0 right-0 text-center text-white/80">
               <span className="px-3 py-1 border border-white/30 rounded-full text-sm font-light">
                 {selectedItem.category}
               </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
