'use client';
// auth/LoginForm.jsx

import { useState } from 'react';
import { Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import { loginApi } from '@/services';
import { saveAuthData } from '@/utils/loginUserData';

export default function LoginForm({ dark, onSwitchToSignup, onLoginSuccess }) {
  const [form, setForm]       = useState({ email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!form.email.trim() || !form.password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      const res  = await loginApi({ email: form.email, password: form.password });
      const data = res.data;

      if (data?.token) {
        saveAuthData(data.token, data.user ?? {});
        onLoginSuccess();
      } else {
        setError(data?.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError(err?.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  /* ── styles shorthand ── */
  const inputCls = `w-full px-4 py-3 rounded-xl text-sm outline-none border transition-colors
    ${dark
      ? 'bg-[#0d0b1e] border-indigo-800 text-indigo-100 placeholder-indigo-600 focus:border-indigo-500'
      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-400'}`;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>

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

      {/* Password */}
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
            autoComplete="current-password"
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
      </div>

      {/* Forgot password */}
      <div className="text-right -mt-2">
        <button type="button" className="text-xs text-indigo-500 hover:underline cursor-pointer">
          Forgot Password?
        </button>
      </div>

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
          ? <><Loader2 size={16} className="animate-spin" /> Signing in...</>
          : <> Sign In <ArrowRight size={16} /></>
        }
      </button>

      {/* Switch to signup */}
      <p className={`text-center text-xs ${dark ? 'text-indigo-500' : 'text-gray-500'}`}>
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={onSwitchToSignup}
          className="text-indigo-500 font-semibold hover:underline cursor-pointer"
        >
          Sign Up Instead
        </button>
      </p>
    </form>
  );
}
