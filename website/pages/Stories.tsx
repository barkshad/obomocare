import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { Film } from 'lucide-react';
import { BRAND } from '../brand';

export const Stories: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-5xl font-bold text-slate-900 mb-12 text-center">Impact Stories</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {content.stories.map((story) => (
            <div key={story.id} className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
              <div className="h-64 overflow-hidden relative bg-black">
                {story.mediaType === 'video' ? (
                    <video 
                        src={story.image} 
                        className="w-full h-full object-cover"
                        controls
                        muted={false}
                    />
                ) : (
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                    />
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>{story.category}</span>
                  <span>{story.date}</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">{story.title}</h2>
                <p className="text-slate-600 mb-6 line-clamp-3">{story.excerpt}</p>
                <button className="font-bold hover:opacity-80 transition-colors" style={{ color: BRAND.orange }}>Read Full Story &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
