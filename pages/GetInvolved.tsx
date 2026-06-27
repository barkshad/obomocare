import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { GlassCard } from '../components/GlassCard';
import { CreditCard, Package, UserPlus, Copy, Check } from 'lucide-react';

const BRAND_BLUE = '#1A0FAB';
const BRAND_ORANGE = '#E8751A';
const BRAND_BLUE_LIGHT = '#E8E6FA';
const BRAND_ORANGE_LIGHT = '#FEF0E4';

const BankDetailRow = ({ label, value }: { label: string, value: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center py-3 border-b border-slate-200 last:border-0 group gap-1">
      <span className="text-slate-500 font-medium text-sm">{label}</span>
      <div className="flex items-center gap-3 justify-between sm:justify-end w-full sm:w-auto">
        <span className="font-mono text-slate-900 font-bold text-sm">{value}</span>
        <button
          onClick={handleCopy}
          className="p-1.5 text-slate-400 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check size={14} className="text-orange-600" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
};

export const GetInvolved: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 pb-16 min-h-screen" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full mb-6" style={{ backgroundColor: BRAND_ORANGE_LIGHT, color: BRAND_ORANGE }}>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: BRAND_ORANGE }}></span>
            Get involved
          </div>
          <h1 className="font-serif text-5xl font-bold text-slate-900 mb-4">Get Involved</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Whether you contribute funds, supplies, or your time as a volunteer caregiver, you are making a tangible difference in the lives of vulnerable households across Kisii and Nyamira Counties.
          </p>
        </div>

        <div className="space-y-8">
          {/* Financial Donation */}
          <GlassCard className="p-8 border-l-4" style={{ borderLeftColor: BRAND_ORANGE }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full hidden sm:block" style={{ backgroundColor: BRAND_ORANGE_LIGHT, color: BRAND_ORANGE }}>
                <CreditCard size={32} />
              </div>
              <div className="flex-grow w-full">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Financial Support</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-6 rounded-xl shadow-inner border border-slate-200 w-full" style={{ backgroundColor: '#f7f7f5' }}>
                    <h3 className="text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2" style={{ color: BRAND_ORANGE }}>
                      Bank Details
                    </h3>
                    <div className="flex flex-col">
                      <BankDetailRow label="Bank Name" value="Equity Bank Kenya" />
                      <BankDetailRow label="Account Name" value="OBOMOCARE CBO" />
                      <BankDetailRow label="Account Number" value="0123456789" />
                      <BankDetailRow label="Branch" value="Kisii" />
                      <BankDetailRow label="SWIFT Code" value="EQBLKENA" />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="p-6 rounded-xl border border-slate-200">
                      <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2" style={{ color: BRAND_ORANGE }}>
                        M-Pesa Donation
                      </h3>
                      <p className="font-mono text-slate-900 font-bold text-lg mb-2">Paybill: 123456</p>
                      <p className="font-mono text-slate-900 font-bold text-lg mb-2">Account: Donation</p>
                      <p className="text-xs text-slate-400">Use the Paybill number above to make donations via M-Pesa.</p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                      <h4 className="font-bold text-slate-800 mb-2 text-sm">Why Donate?</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {content.getInvolved.financialText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Supplies */}
          <GlassCard className="p-8 border-l-4" style={{ borderLeftColor: BRAND_ORANGE }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full text-orange-500 hidden sm:block" style={{ backgroundColor: BRAND_ORANGE_LIGHT }}>
                <Package size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">Donate Supplies</h2>
                <p className="text-slate-600 mb-4">{content.getInvolved.suppliesText}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Food items</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Sanitary supplies</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Clothing</span>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-sm">Mobility aids</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Volunteer */}
          <GlassCard className="p-8 border-l-4" style={{ borderLeftColor: BRAND_BLUE }}>
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-full hidden sm:block" style={{ backgroundColor: BRAND_BLUE_LIGHT, color: BRAND_BLUE }}>
                <UserPlus size={32} />
              </div>
              <div className="w-full">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-4">Volunteer With Us</h2>
                <p className="text-slate-600 mb-6">{content.getInvolved.volunteerText}</p>
                <form className="grid grid-cols-1 gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Name" className="p-3 border rounded-lg bg-white" />
                    <input type="email" placeholder="Email" className="p-3 border rounded-lg bg-white" />
                  </div>
                  <input type="text" placeholder="Skills / Background" className="p-3 border rounded-lg bg-white" />
                  <textarea placeholder="How would you like to help?" className="p-3 border rounded-lg h-24 bg-white"></textarea>
                  <button
                    type="submit"
                    className="text-white font-bold py-3 rounded-lg hover:opacity-90 transition-colors shadow-lg"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="mt-16 text-center">
          <div className="rounded-3xl p-10" style={{ backgroundColor: BRAND_BLUE_LIGHT }}>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Partner with us</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              We also welcome partnerships with businesses, churches, diaspora groups, and larger development organisations. Full partnership proposals available on request.
            </p>
            <a
              href={`mailto:${content.contact.email}?subject=Partnership enquiry`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 shadow-lg"
              style={{ backgroundColor: BRAND_ORANGE }}
            >
              Enquire about partnership
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
