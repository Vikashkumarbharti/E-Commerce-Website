import React, { useState } from 'react';
import { X, Lock, User, KeyRound, ShieldAlert, CheckCircle2, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (username: string) => void;
  currentPasswordHash: string; // The saved admin password
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  currentPasswordHash
}) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      // Check credentials
      const validUsernames = ['admin', 'admin@nestora.com', 'superadmin'];
      const normalizedUser = username.trim().toLowerCase();

      if (validUsernames.includes(normalizedUser) && password === currentPasswordHash) {
        setIsLoading(false);
        onLoginSuccess(username);
        onClose();
      } else {
        setIsLoading(false);
        setErrorMessage('Invalid username or password. Default demo password is "admin123"');
      }
    }, 400);
  };

  const handleFillDemoCredentials = () => {
    setUsername('admin');
    setPassword(currentPasswordHash);
    setErrorMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                Admin Gateway
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-indigo-950 tracking-tight">
            Nestora Management Portal
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Sign in with your administrative credentials to manage listings, inquiries, and scheduled tours.
          </p>
        </div>

        {/* Demo Credentials Quick Fill Banner */}
        <div className="bg-indigo-50/70 rounded-2xl p-3.5 border border-indigo-100/80 mb-5 flex items-center justify-between gap-3">
          <div className="text-xs text-indigo-950">
            <p className="font-bold text-indigo-900">Default Demo Credentials</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              User: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-indigo-700">admin</code> | Pass: <code className="bg-white px-1.5 py-0.5 rounded font-mono font-bold text-indigo-700">{currentPasswordHash}</code>
            </p>
          </div>
          <button
            type="button"
            onClick={handleFillDemoCredentials}
            className="text-xs font-bold text-indigo-600 bg-white hover:bg-indigo-600 hover:text-white px-3 py-1.5 rounded-xl border border-indigo-200 transition-all flex-shrink-0 cursor-pointer shadow-xs"
          >
            Auto Fill
          </button>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-700 text-xs">
            <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-600" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Admin Username or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full pl-10 pr-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Admin Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 active:scale-98"
          >
            {isLoading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Admin Panel</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Encrypted Session</span>
          </div>
          <span>Role: Super Administrator</span>
        </div>
      </div>
    </div>
  );
};
