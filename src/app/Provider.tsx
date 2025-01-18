'use client';
import { ThemeProvider } from 'next-themes';
import { useState, useEffect } from 'react';

const Provider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div />;  
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="  min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Provider;
