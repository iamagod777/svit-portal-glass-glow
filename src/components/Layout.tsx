
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
