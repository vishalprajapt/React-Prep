'use client';
// auth/SignupForm.jsx

import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { registerApi } from '@/services';
import { saveAuthData } from '@/utils/loginUserData';

/* Password strength helper */
const getStrength = (pwd) => {
  if (!pwd) return { score: 0, label: '', color: '' };
  let score = 0;
  if (pwd.length >= 6)               score++;
  if (pwd.length >= 10)              score++;
  if (/[A-Z]/.test(pwd))            score++;
  if (/[0-9]/.test(pwd))            score++;
  if (/[^A-Za-z0-9]/.test(pwd))     score++;

  const levels = [
    { label: '',         color: '' },
    { label: 'Weak',     color: 'bg-red-500' },
    { label: 'Fair',     color: 'bg-orange-400' },
    { label: 'Good',     color: 'bg-yellow-400' },
    { label: 'Strong',   color: 'bg-green-400' },
    { label: 'Very Strong', color: 'bg-green-500' },
  ];
  return { score, ...levels[score] };
};

export default function SignupForm({ dark, onSwitchToLogin, onLoginSuccess }) {
  const [form, setForm] = useState({
    name: '', email: '', password: '', confirm: '', agree: false,
  });
  const [showPwd, setShowPwd]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');

  const strength     = getStrength(form.password);
  const passwordsMatch = form.confirm && form.password === form.confirm;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.password || !form.confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.agree) {
      setError('Please agree to the Terms of Service.');
      return;
    }

    try {
      setLoading(true);
      const res  = await registerApi({ name: form.name, email: form.email, password: form.password });
      const data = res.data;

      if (data?.token) {
        saveAuthData(data.token, data.user ?? {});
        onLoginSuccess();
      } else {
        setError(data?.message || 'Registration failed. Please try again.');
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = `w-full px-4 py-3 rounded-xl text-sm outline-none border transition-colors
    ${dark
      ? 'bg-[#0d0b1e] border-indigo-800 text-indigo-100 placeholder-indigo-600 focus:border-indigo-500'
      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-400'}`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

      {/* Full Name */}
      <div>
        <label className={`text-xs font-semibold mb-1.5 block ${dark ? 'text-indigo-300' : 'text-gray-600'}`}>
          Full Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Vivek Saini"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
          className={inputCls}
        />
      </div>

      {/* Email */}
      <div>
        <label className={`text-xs font-semibold mb-1.5 block ${dark ? 'text-indigo-300' : 'text-gray-600'}`}>
          Email Address
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
          className={inputCls}
        />
      </div>

      {/* Password + strength */}
      <div>
        <label className={`text-xs font-semibold mb-1.5 block ${dark ? 'text-indigo-300' : 'text-gray-600'}`}>
          Password
        </label>
        <div className="relative">
          <input
            type={showPwd ? 'text' : 'password'}
            name="password"
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            className={`${inputCls} pr-11`}
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer
              ${dark ? 'text-indigo-500 hover:text-indigo-300' : 'text-gray-400 hover:text-gray-600'}`}
          >
            {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Strength bar */}
        {form.password && (
          <div className="mt-2 flex items-center gap-2">
            <div className={`flex-1 h-1.5 rounded-full ${dark ? 'bg-indigo-900/60' : 'bg-gray-100'}`}>
              <div
                className={`h-1.5 rounded-full transition-all ${strength.color}`}
                style={{ width: `${(strength.score / 5) * 100}%` }}
              />
            </div>
            <span className={`text-xs font-medium ${strength.color.replace('bg-', 'text-')}`}>
              {strength.label}
            </span>
          </div>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label className={`text-xs font-semibold mb-1.5 block ${dark ? 'text-indigo-300' : 'text-gray-600'}`}>
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirm ? 'text' : 'password'}
            name="confirm"
            placeholder="••••••••"
            value={form.confirm}
            onChange={handleChange}
            autoComplete="new-password"
            className={`${inputCls} pr-11`}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {form.confirm
              ? passwordsMatch
                ? <CheckCircle2 size={16} className="text-green-500" />
                : <EyeOff size={16} className="text-red-400 cursor-pointer" onClick={() => setShowConfirm(v => !v)} />
              : (
                <button type="button" onClick={() => setShowConfirm((v) => !v)}
                  className={`cursor-pointer ${dark ? 'text-indigo-500' : 'text-gray-400'}`}>
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              )
            }
          </span>
        </div>
      </div>

      {/* Terms checkbox */}
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="w-4 h-4 rounded accent-indigo-600 cursor-pointer"
        />
        <span className={`text-xs ${dark ? 'text-indigo-400' : 'text-gray-500'}`}>
          I agree to the{' '}
          <button type="button" className="text-indigo-500 hover:underline font-medium">
            Terms of Service
          </button>
        </span>
      </label>

      {/* Error */}
      {error && (
        <p className="text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl
          bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500
          text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-500/30
          disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {loading
          ? <><Loader2 size={16} className="animate-spin" /> Creating account...</>
          : <> Create Account <ArrowRight size={16} /></>
        }
      </button>

      {/* Switch to login */}
      <p className={`text-center text-xs ${dark ? 'text-indigo-500' : 'text-gray-500'}`}>
        Already have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="text-indigo-500 font-semibold hover:underline cursor-pointer"
        >
          Sign In Instead
        </button>
      </p>
    </form>
  );
}
