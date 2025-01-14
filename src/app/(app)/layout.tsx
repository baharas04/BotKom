// components/layout.tsx

import Navbar from '@/components/navigasi/navigasi';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow mt-16">{children}</main>
      <footer className="text-light text-center">
      <p>&copy; 2024 Sy.COM | Pendidikan Teknik Informatika | UMS</p>
    </footer>
    <Link href="/chat-bot">
      <span className="fixed bottom-5 right-5 w-16 h-16 cursor-pointer z-50 transition-transform transform hover:scale-110">
        <Avatar>
          <AvatarImage src="https://placekitten.com/200/200" alt="Logo Avatar" />
          <AvatarFallback>SHDCN</AvatarFallback>
        </Avatar>
      </span>
    </Link>
    </div>
  );
};

export default Layout;
