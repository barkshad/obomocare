import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const BankDetailRow = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-3) 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <span style={{ color: '#fff', fontWeight: 600, fontSize: 'var(--text-sm)' }}>{value}</span>
        <button onClick={handleCopy} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-accent)', padding: '4px' }}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};

export const GetInvolved: React.FC = () => {
  return (
    <div className="section" style={{ background: 'var(--surface-primary)', paddingTop: '6rem' }}>
      <div className="container" style={{ maxWidth: '48rem' }}>
        <div className="features-head" style={{ textAlign: 'center' }}>
          <div className="features-head__tag">Get involved</div>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>
            Get Involved
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7 }}>
            Cash, supplies, or your time. Pick what fits. Everything reaches a household that needs it.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>

          <div style={{ padding: 'var(--space-8)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-6)' }}>Financial Support</h2>
            <div style={{ padding: 'var(--space-6)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', marginBottom: 'var(--space-6)' }}>
              <h3 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                Bank Details
              </h3>
              <BankDetailRow label="Bank Name" value="Equity Bank Kenya" />
              <BankDetailRow label="Account Name" value="OBOMOCARE CBO" />
              <BankDetailRow label="Account Number" value="0123456789" />
              <BankDetailRow label="Branch" value="Kisii" />
              <BankDetailRow label="SWIFT Code" value="EQBLKENA" />
            </div>
            <div style={{ padding: 'var(--space-4)', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)' }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 'var(--text-sm)', lineHeight: 1.6 }}>
                Every shilling goes to beneficiaries. Nothing is deducted for admin. We publish quarterly reports — any donor can see them.
              </p>
            </div>
          </div>

          <div style={{ padding: 'var(--space-8)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-4)' }}>Donate Supplies</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
              We need food, sanitary towels, soap, clothing, and mobility aids. A bag of maize flour feeds a household for two weeks. A bar of soap stops a skin infection. Drop-off points in Kisii and Nyamira.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {['Food items', 'Sanitary supplies', 'Clothing', 'Mobility aids'].map(item => (
                <span key={item} style={{ padding: 'var(--space-2) var(--space-4)', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div style={{ padding: 'var(--space-8)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 600, color: '#fff', marginBottom: 'var(--space-4)' }}>Volunteer With Us</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
              Are you a trained caregiver, a nurse, a community health volunteer? We train and deploy 40 caregivers across Kisii and Nyamira. You get a stipend, transport money, and a clear career path into county health roles.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <input type="text" placeholder="Name" style={{ padding: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none' }} />
                <input type="email" placeholder="Email" style={{ padding: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none' }} />
              </div>
              <input type="text" placeholder="Skills / Background" style={{ padding: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none' }} />
              <textarea placeholder="How would you like to help?" style={{ padding: 'var(--space-3)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 'var(--radius-sm)', color: '#fff', outline: 'none', minHeight: '80px', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn--accent" style={{ alignSelf: 'flex-start' }}>
                Send Inquiry
              </button>
            </form>
          </div>

          <div style={{ padding: 'var(--space-10)', background: 'var(--surface-elevated)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: '#fff', marginBottom: 'var(--space-4)' }}>Partner with us</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '40ch', marginInline: 'auto', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
              We also welcome partnerships with businesses, churches, diaspora groups, and larger organisations. Full proposals available on request.
            </p>
            <a href="mailto:obomocare@gmail.com?subject=Partnership enquiry" className="btn btn--accent">
              Enquire about partnership
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
