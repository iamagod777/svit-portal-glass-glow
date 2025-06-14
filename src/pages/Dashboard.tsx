
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Award, 
  Bell, 
  Download,
  FileText,
  Clock,
  TrendingUp,
  LogOut
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));

    // GSAP Animations
    gsap.fromTo('.dashboard-header', 
      { opacity: 0, y: -30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    gsap.fromTo('.dashboard-card', 
      { opacity: 0, y: 40, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out',
        delay: 0.3
      }
    );
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate('/');
  };

  const quickActions = [
    { icon: FileText, title: 'Course Materials', color: 'bg-blue-600/20 text-blue-400' },
    { icon: Calendar, title: 'Schedule', color: 'bg-green-600/20 text-green-400' },
    { icon: Award, title: 'Grades', color: 'bg-purple-600/20 text-purple-400' },
    { icon: Users, title: 'Study Groups', color: 'bg-orange-600/20 text-orange-400' },
  ];

  const recentActivities = [
    { title: 'Assignment submitted: Data Structures', time: '2 hours ago', type: 'success' },
    { title: 'New announcement in Computer Networks', time: '4 hours ago', type: 'info' },
    { title: 'Upcoming exam: Database Management', time: '1 day ago', type: 'warning' },
    { title: 'Grade updated: Software Engineering', time: '2 days ago', type: 'success' },
  ];

  const upcomingEvents = [
    { title: 'Tech Symposium 2025', date: 'Dec 20, 2024', type: 'event' },
    { title: 'Final Exams Begin', date: 'Dec 15, 2024', type: 'deadline' },
    { title: 'Project Submission', date: 'Dec 10, 2024', type: 'assignment' },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen p-4">
      {/* Dashboard Header */}
      <div className="dashboard-header mb-8">
        <div className="glass-card p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, {user.email?.split('@')[0]}!
              </h1>
              <p className="text-gray-400">Here's what's happening with your studies today.</p>
            </div>
            <button
              onClick={handleLogout}
              className="glass-button flex items-center space-x-2 text-sm"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <div className="dashboard-card glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <p className="text-white text-sm font-medium">{action.title}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Academic Overview */}
          <div className="dashboard-card glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Academic Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-600/10 border border-blue-400/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 font-medium">Current GPA</span>
                  <TrendingUp className="text-blue-400" size={20} />
                </div>
                <p className="text-2xl font-bold text-white">8.7</p>
                <p className="text-sm text-gray-400">+0.2 from last semester</p>
              </div>
              
              <div className="bg-green-600/10 border border-green-400/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-400 font-medium">Completed</span>
                  <Award className="text-green-400" size={20} />
                </div>
                <p className="text-2xl font-bold text-white">12/15</p>
                <p className="text-sm text-gray-400">Assignments this month</p>
              </div>
              
              <div className="bg-purple-600/10 border border-purple-400/20 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 font-medium">Attendance</span>
                  <Clock className="text-purple-400" size={20} />
                </div>
                <p className="text-2xl font-bold text-white">94%</p>
                <p className="text-sm text-gray-400">This semester</p>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="dashboard-card glass-card p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activities</h2>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-400' :
                    activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.title}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="dashboard-card glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Notifications</h3>
              <Bell className="text-gray-400" size={20} />
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-400/20">
                <p className="text-blue-400 font-medium text-sm">New Assignment</p>
                <p className="text-white text-sm">Database Management System</p>
              </div>
              <div className="p-3 rounded-lg bg-green-600/10 border border-green-400/20">
                <p className="text-green-400 font-medium text-sm">Grade Updated</p>
                <p className="text-white text-sm">Software Engineering: A+</p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="dashboard-card glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-white font-medium text-sm">{event.title}</p>
                  <p className="text-gray-400 text-xs">{event.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Downloads */}
          <div className="dashboard-card glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Downloads</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Download size={16} className="text-gray-400" />
                <span className="text-white text-sm">Academic Calendar</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Download size={16} className="text-gray-400" />
                <span className="text-white text-sm">Course Handbook</span>
              </button>
              <button className="w-full flex items-center space-x-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Download size={16} className="text-gray-400" />
                <span className="text-white text-sm">Exam Schedule</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
