import { ModeToggle } from '@/components/ui/themeswitch';
import Link from 'next/link';
import MenuMobile from './MenuMobile';

export default function Header() {
  return (
    <header className='sticky h-[80px] flex items-center justify-center top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='w-full h-[65px] max-w-screen-2xl flex items-center justify-between'>
        <Link href='/'>Blogs</Link>
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
          <MenuMobile />
        </div>
      </div>
    </header>
  );
}
