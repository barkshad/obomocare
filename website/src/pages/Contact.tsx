import React from 'react';
import { useContent } from '../contexts/ContentContext';
import { MapPin, Mail, Phone, MessageCircle, Clock } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, children }: { icon: React.FC<{ size?: number }>; title: string; children: React.ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
    <div style={{ padding: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-sm)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={20} />
    </div>
    <div>
      <h3 style={{ fontWeight: 600, color: '#fff', marginBottom: 'var(--space-1)' }}>{title}</h3>
      {children}
    </div>
  </div>
);

export const Contact: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '48rem' }}>
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Contact us</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            Get in touch
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', padding: 'var(--space-8)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)' }}>
            <ContactItem icon={MapPin} title="Location">
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>{content.contact.address}</p>
            </ContactItem>
            <ContactItem icon={Mail} title="Email">
              <a href={`mailto:${content.contact.email}`} style={{ color: 'var(--color-accent)' }}>{content.contact.email}</a>
            </ContactItem>
            <ContactItem icon={Phone} title="Phone">
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>{content.contact.phone}</p>
            </ContactItem>
            <ContactItem icon={MessageCircle} title="WhatsApp">
              <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-1)' }}>{content.contact.whatsapp}</p>
              <a href={`https://wa.me/${content.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                Chat on WhatsApp &rarr;
              </a>
            </ContactItem>
            <ContactItem icon={Clock} title="Office Hours">
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p style={{ color: 'rgba(255,255,255,0.6)' }}>Sat: 9:00 AM - 1:00 PM</p>
            </ContactItem>
          </div>

          <div style={{ padding: 'var(--space-8)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-6)' }}>Donation Information</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)' }}>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bank Details</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  {content.contact.bankDetails}
                </p>
              </div>
              <div>
                <h3 style={{ fontWeight: 600, color: 'var(--color-accent)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-sm)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>M-Pesa</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)' }}>Paybill: 123456</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)' }}>Account: Donation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
