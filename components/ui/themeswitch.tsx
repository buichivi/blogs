'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='!ring-transparent'>
          <Sun
            className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-100 dark:-rotate-90 dark:scale-0'
            onClick={() => setTheme('dark')}
          />
          <Moon
            className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-100 dark:rotate-0 dark:scale-100'
            onClick={() => setTheme('light')}
          />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}
