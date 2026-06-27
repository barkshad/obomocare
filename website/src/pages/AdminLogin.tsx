import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import * as ReactRouterDOM from 'react-router-dom';
import { Lock } from 'lucide-react';
import { BRAND } from '../config/brand';

export const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = ReactRouterDOM.useNavigate();
  const [showReset, setShowReset] = useState(false);

  const handleReset = () => {
    localStorage.removeItem('obomo_admin_password');
    localStorage.removeItem('obomo_admin_auth');
    setShowReset(true);
    setError('');
    setPassword('');
    setTimeout(() => setShowReset(false), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login(password);
      if (success) {
        navigate('/admin');
      } else {
        setError('Incorrect Access Key');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-slate-200">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: BRAND.blueLight, color: BRAND.blue }}>
            <Lock size={32} />
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-800">Admin Access</h1>
          <p className="text-slate-500 text-sm mt-2">Restricted area for foundation staff.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Access Key</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#1A0FAB] outline-none transition-all text-center text-lg tracking-widest"
              placeholder="•••••"
              required 
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className={`w-full bg-slate-900 text-white py-4 rounded-xl font-bold transition-all ${isLoading ? 'opacity-70' : 'hover:bg-slate-800 hover:shadow-lg'}`}
          >
            {isLoading ? 'Verifying...' : 'Enter Dashboard'}
          </button>

          {showReset && (
            <div className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-lg border border-green-200">
              Password reset to <strong>12345678</strong>. Enter it above.
            </div>
          )}

          <div className="text-center">
            <button
              type="button"
              onClick={handleReset}
              className="text-sm text-slate-400 hover:text-slate-600 underline underline-offset-2"
            >
              Forgot password? Reset to default
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <button onClick={() => navigate('/')} className="text-slate-400 text-sm hover:text-slate-600">
            &larr; Return to Website
          </button>
        </div>
      </div>
    </div>
  );
};
