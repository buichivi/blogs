import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/themeswitch';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky h-[80px] flex items-center justify-center top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='wrapper w-full h-[65px] max-w-screen-2xl flex items-center justify-between'>
        <div>Blogs</div>
        <div>
          <ul className='hidden md:flex items-center gap-[14px]'>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
          <Button size='icon' variant='ghost' className='md:hidden'>
            <HamburgerMenuIcon className='size-5' />
          </Button>
        </div>
      </div>
    </header>
  );
}
