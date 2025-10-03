'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store email in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('userEmail', email);
    }
    // Navigate to quiz with animation
    router.push('/quiz');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Navigation - Fixed Top */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="flex justify-center">
          <h1 
            className="text-xl md:text-2xl font-bold"
            style={{ color: '#1E90FF' }}
          >
            CarConnect
          </h1>
        </div>
      </nav>

      {/* Left Side - Form (1/3) */}
      <div 
        className="w-full md:w-1/3 flex flex-col justify-center items-center p-4 md:p-8 relative min-h-screen"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%)'
        }}
      >
        <div className="w-full max-w-sm mt-16 md:mt-0">
          <div 
            className="glass rounded-2xl p-6 md:p-8 shadow-2xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                {isSignUp ? 'Join CarConnect today' : 'Sign in to your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-10 md:h-11 px-3 py-2 rounded-md border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-10 md:h-11 px-3 py-2 rounded-md border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full h-11 md:h-12 px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:scale-105 active:scale-95"
                style={{
                  background: '#1E90FF',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1B82E6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#1E90FF';
                }}
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </button>
            </form>

            <div className="mt-4 md:mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-medium transition-colors text-sm md:text-base hover:opacity-80"
                style={{ color: '#1E90FF' }}
              >
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Image (2/3) */}
      <div 
        className="w-full md:w-2/3 relative overflow-hidden order-first md:order-last"
      >
        <img 
          src="https://images.unsplash.com/photo-1611651568466-8795b6ae1831?auto=format&fit=crop&w=1380&q=80" 
          alt="Range Rover Sport SVR" 
          className="w-full h-screen object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        
        {/* Overlay content */}
        <div className="absolute bottom-6 md:bottom-8 left-4 md:left-8 text-white">
          <h3 
            className="text-2xl md:text-4xl font-bold mb-1 md:mb-2"
          >
            Range Rover Sport SVR
          </h3>
          <p 
            className="text-lg md:text-xl opacity-90"
          >
            Experience luxury redefined
          </p>
        </div>
      </div>

      {/* Footer - Relative on mobile, absolute on desktop */}
      <footer 
        className="relative md:absolute bottom-0 left-0 right-0 z-40 p-4 md:p-6"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm" style={{ color: '#6B7280' }}>
          <div className="flex space-x-4 md:space-x-6 mb-3 md:mb-0">
            <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#1E90FF' }}>About</a>
            <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#1E90FF' }}>Privacy</a>
            <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#1E90FF' }}>Terms</a>
          </div>
          <div className="flex space-x-3 md:space-x-4">
            <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#1E90FF' }}>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80 transition-colors" style={{ color: '#1E90FF' }}>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
