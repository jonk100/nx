// apps/admin-panel/src/app/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/users">User Management</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
