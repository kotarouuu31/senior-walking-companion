import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-purple-light to-bg-purple-dark p-4">
      <div className="max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}
