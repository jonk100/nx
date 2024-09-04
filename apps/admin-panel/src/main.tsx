// apps/admin-panel/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './app/app';
import Dashboard from './app/pages/Dashboard';
import UserManagement from './app/pages/UserManagement';
import Settings from './app/pages/Settings';
import Layout from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/admin">
      <Layout>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  );
