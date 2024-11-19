'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cross1Icon, HamburgerMenuIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';

const MenuMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <React.Fragment>
      <Button
        size='icon'
        variant='ghost'
        className='md:hidden'
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <HamburgerMenuIcon className='size-5' />
      </Button>
      <input
        type='checkbox'
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
        className='hidden [&:checked+div]:opacity-100 [&:checked+div]:pointer-events-auto'
      />
      <div className='w-screen h-screen flex items-end justify-center fixed top-0 left-0 opacity-0 pointer-events-none transition-all'>
        <div className='bg-white/90 dark:bg-black/90 absolute top-0 left-0 size-full'></div>
        <div className='size-1/2 text-black dark:text-white z-10 p-10 flex flex-col justify-between'>
          <div>
            <h3
              className={clsx('text-center pb-6 capitalize text-lg transition-all', {
                '-translate-y-5 opacity-0': isOpen === false,
                'translate-y-0 opacity-100': isOpen === true,
              })}
            >
              The Blog
            </h3>
            <ul className='flex flex-col items-center gap-2'>
              {['Blog', 'About'].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={clsx('transition-all', {
                      '-translate-y-5 opacity-0': isOpen === false,
                      'translate-y-0 opacity-100': isOpen === true,
                    })}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <div className='mt-4 flex items-center justify-between'>
              <div className='p-2 z-10'>
                <SunIcon suppressHydrationWarning className='size-5 text-black dark:text-white' />
              </div>
              <Switch
                onCheckedChange={() => {
                  if (theme === 'light') setTheme('dark');
                  else setTheme('light');
                }}
              />
              <div className='p-2 z-10'>
                <MoonIcon suppressHydrationWarning className='size-5 text-black dark:text-white' />
              </div>
            </div>
          </div>
          <span
            className={clsx('w-full flex items-center justify-center transition-all', {
              'translate-y-5 opacity-0': isOpen === false,
              'translate-y-0 opacity-100': isOpen === true,
            })}
            onClick={() => setIsOpen(false)}
          >
            <Cross1Icon className='size-5' />
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MenuMobile;
