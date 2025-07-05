import { ReactNode } from 'react';
import Header from './Header';
import TabBar from './TabBar';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout — общий каркас для всех страниц с фиксированными элементами
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-primary">
      <Header />
      <main className="flex-grow">{children}</main>
      <TabBar />
    </div>
  );
};

export default Layout;
