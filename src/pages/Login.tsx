import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Eye, EyeOff, GraduationCap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo('.login-container', 
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
      if (formData.username && formData.password) {
        toast({
          title: "Login Successful!",
          description: "Welcome to SVIT Student Portal",
        });
        localStorage.setItem('user', JSON.stringify({ username: formData.username }));
        
        // Redirect to the specified website
        window.location.href = 'https://svit-campus-connect.vercel.app/';
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
      <div className="login-container w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-blue-400/30">
            <GraduationCap size={40} className="text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Swami Vivekananda Institute of Technology
          </h1>
          <p className="text-blue-400 text-sm font-medium tracking-wider">LEARN • LEAD • SERVE</p>
        </div>

        {/* Login Form Card */}
        <div className="glass-card p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">Login to Student Portal</h2>
            <p className="text-gray-400 text-sm">Access your academic dashboard securely</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="glass-input w-full px-4 py-3 text-white placeholder:text-gray-500"
                placeholder="Enter Username"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="glass-input w-full px-4 py-3 pr-12 text-white placeholder:text-gray-500"
                  placeholder="Enter Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-600 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-300">Remember me</span>
              </label>
              <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors">
                Forgot Password ?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25"
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </button>

            <div className="text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                Register here
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Need help? Contact{' '}
            <a href="mailto:support@svit.edu" className="text-blue-400 hover:text-blue-300 transition-colors">
              support@svit.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
