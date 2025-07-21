import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-purple-light to-bg-purple-dark p-4 sm:p-6">
      <div className="max-w-lg mx-auto">
        <main role="main" className="focus:outline-none" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}
