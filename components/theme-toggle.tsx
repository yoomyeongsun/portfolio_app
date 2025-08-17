'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors group"
      aria-label="테마 전환"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-300" />
      )}
    </button>
  );
}

