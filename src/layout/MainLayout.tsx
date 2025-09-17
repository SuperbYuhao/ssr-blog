import React from 'react';
import './MainLayout.less';
import ThemeToggle from './components/ThemeToggle.tsx';
import MainAuthor from './components/MainAuthor.tsx';
import MainNav from './components/MainNav.tsx';
import MainFooter from './components/MainFooter.tsx';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='main-layout'>
      <main className='main-content'>

        <header className='main-header'>
          <MainAuthor />
          <MainNav />
          <ThemeToggle></ThemeToggle>
        </header>

        <main className='main-children'>
          {children}
        </main>

        <footer className='main-footer'>
          <MainFooter />
        </footer>

        <div className='right-content'>
          <header className='right-header'>
            <MainAuthor />
          </header>
          <MainNav />
          <ThemeToggle></ThemeToggle>
          <footer className='right-footer'>
            <MainFooter />
          </footer>
        </div>
      </main >
    </div>
  );
};
