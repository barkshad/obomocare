import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, Lock, ArrowRight, MessageCircle, Twitter, Linkedin } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';
import { BRAND } from '../brand';

export const Footer: React.FC = () => {
  const { content } = useContent();
  const year = new Date().getFullYear();
  const socials = content.contact.socials;

  return (
    <footer className="text-white font-sans" style={{ backgroundColor: BRAND.blue }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg" style={{ backgroundColor: BRAND.orange }}>
                O
              </div>
              <h3 className="font-serif text-2xl text-white font-bold tracking-tight">OBOMOCARE</h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/70">
              {content.about.mission}
            </p>
            <div className="flex space-x-4 pt-2">
              {socials?.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Facebook size={18} />
                </a>
              )}
              {socials?.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Instagram size={18} />
                </a>
              )}
              {socials?.twitter && (
                <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Twitter size={18} />
                </a>
              )}
              {socials?.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:opacity-80 transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <Linkedin size={18} />
                </a>
              )}
              {(!socials?.facebook && !socials?.instagram && !socials?.twitter && !socials?.linkedin) && (
                <span className="text-xs text-white/40 italic">Follow our journey</span>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <ReactRouterDOM.Link to="/about" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px transition-all" style={{ backgroundColor: BRAND.orange }}></span> Who we are
                </ReactRouterDOM.Link>
              </li>
              <li>
                <ReactRouterDOM.Link to="/programs" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px transition-all" style={{ backgroundColor: BRAND.orange }}></span> Our work
                </ReactRouterDOM.Link>
              </li>
              <li>
                <ReactRouterDOM.Link to="/stories" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px transition-all" style={{ backgroundColor: BRAND.orange }}></span> Impact
                </ReactRouterDOM.Link>
              </li>
              <li>
                <ReactRouterDOM.Link to="/sponsorship" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px transition-all" style={{ backgroundColor: BRAND.orange }}></span>
                  Programme pillars
                </ReactRouterDOM.Link>
              </li>
              <li>
                <ReactRouterDOM.Link to="/impact" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-2 h-px transition-all" style={{ backgroundColor: BRAND.orange }}></span>
                  Governance & Risk
                </ReactRouterDOM.Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" style={{ color: BRAND.orange }} />
                <span className="text-white/70">{content.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" style={{ color: BRAND.orange }} />
                <a href={`mailto:${content.contact.email}`} className="hover:text-white transition-colors" style={{ color: BRAND.orange }}>
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" style={{ color: BRAND.orange }} />
                <span className="text-white/70">{content.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={18} className="flex-shrink-0" style={{ color: BRAND.orange }} />
                <a
                  href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  style={{ color: BRAND.orange }}
                >
                  {content.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Stay Updated</h4>
            <p className="text-xs mb-4 text-white/70">Join our community of supporters for updates on our programmes and impact.</p>
            <form className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 transition-all"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 p-2 text-white rounded-md hover:opacity-90 transition-colors"
                  style={{ backgroundColor: BRAND.orange }}
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)' }}>
          <p>&copy; {year} OBOMOCARE Community Based Organisation. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <ReactRouterDOM.Link to="/admin" className="flex items-center gap-2 hover:text-white transition-colors opacity-40 hover:opacity-100">
              <Lock size={12} />
              <span>Staff Login</span>
            </ReactRouterDOM.Link>
            <div className="flex items-center gap-1.5 opacity-60">
              <span>Care. Unity. Dignity.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
