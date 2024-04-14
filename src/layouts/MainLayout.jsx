import React from 'react';
import { Outlet } from 'react-router';
import Header from '../features/Header/pages/Header.jsx';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
