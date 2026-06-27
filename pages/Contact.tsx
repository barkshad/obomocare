import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { MapPin, Mail, Phone, Clock, MessageCircle } from 'lucide-react';

const BRAND_BLUE = '#1A0FAB';
const BRAND_ORANGE = '#E8751A';

export const Contact: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 pb-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full mb-6" style={{ backgroundColor: '#FEF0E4', color: BRAND_ORANGE }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_ORANGE }}></span>
            Contact us
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-4">Get in touch</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Whether you have a question about our programmes, partnership opportunities, or just want to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: BRAND_BLUE_LIGHT || '#E8E6FA', color: BRAND_BLUE }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Visit Us</h3>
                  <p className="text-slate-600">{content.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: BRAND_BLUE_LIGHT || '#E8E6FA', color: BRAND_BLUE }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <a href={`mailto:${content.contact.email}`} className="text-slate-600 hover:underline" style={{ color: BRAND_BLUE }}>
                    {content.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: BRAND_BLUE_LIGHT || '#E8E6FA', color: BRAND_BLUE }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <p className="text-slate-600">{content.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEF0E4', color: BRAND_ORANGE }}>
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">WhatsApp</h3>
                  <p className="text-slate-600 mb-1">{content.contact.whatsapp}</p>
                  <a
                    href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold hover:underline"
                    style={{ color: BRAND_ORANGE }}
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg" style={{ backgroundColor: '#FEF0E4', color: BRAND_ORANGE }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office Hours</h3>
                  <p className="text-slate-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Sat: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl p-8 border border-slate-100" style={{ backgroundColor: '#f7f7f5' }}>
            <h2 className="text-2xl font-bold mb-6 text-slate-900">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
              <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 bg-white" style={{ '--tw-ring-color': BRAND_BLUE } as React.CSSProperties} />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Last Name</label>
            <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 bg-white" style={{ '--tw-ring-color': BRAND_BLUE } as React.CSSProperties} />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <input type="email" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 bg-white" style={{ '--tw-ring-color': BRAND_BLUE } as React.CSSProperties} />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Organisation (optional)</label>
          <input type="text" className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 bg-white" style={{ '--tw-ring-color': BRAND_BLUE } as React.CSSProperties} />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Message</label>
          <textarea rows={5} className="w-full p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 bg-white" style={{ '--tw-ring-color': BRAND_BLUE } as React.CSSProperties}></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 text-white font-bold rounded-lg transition-colors shadow-lg"
                style={{ backgroundColor: BRAND_ORANGE }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-20 rounded-3xl p-8 md:p-12 border border-slate-100" style={{ backgroundColor: '#f7f7f5' }}>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8">Donation & Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-4" style={{ color: BRAND_BLUE }}>Bank Details</h3>
              <p className="text-slate-600 whitespace-pre-line text-sm leading-relaxed font-mono">
                {content.contact.bankDetails}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4" style={{ color: BRAND_BLUE }}>M-Pesa</h3>
              <p className="text-slate-600 text-sm font-mono">{content.contact.mpesa}</p>
              <p className="text-xs text-slate-400 mt-2">Use the Paybill number above to make donations via M-Pesa.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
