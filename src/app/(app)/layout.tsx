// components/layout.tsx

import Navbar from '@/components/navigasi/navigasi';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">{children}</main>
      
    </div>
  );
};

export default Layout;
