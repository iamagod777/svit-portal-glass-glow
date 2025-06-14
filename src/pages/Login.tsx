
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo('.login-card', 
      { opacity: 0, y: 50, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password) {
        toast({
          title: "Login Successful!",
          description: "Welcome to SVIT Student Portal",
        });
        localStorage.setItem('user', JSON.stringify({ email: formData.email }));
        // You can redirect to dashboard or handle successful login here
      } else {
        toast({
          title: "Login Failed",
          description: "Please fill in all fields",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-slate-900">
      <div className="login-card glass-card p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-blue">
            <LogIn size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">SVIT Student Portal</h1>
          <p className="text-gray-400">Sign in to access your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="glass-input w-full pl-12 pr-4 text-white placeholder:text-gray-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 z-10" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="glass-input w-full pl-12 pr-12 text-white placeholder:text-gray-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors z-10"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-300">Remember me</span>
            </label>
            <button type="button" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full glass-button glow-blue-hover py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
