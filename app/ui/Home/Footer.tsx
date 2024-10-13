import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-[30px] text-center flex items-center justify-between'>
      <p>© 2024</p>
      <div className='flex items-center gap-4'>
        <Link href='#'>
          <GitHubLogoIcon className='size-6' />
        </Link>
        <Link href='#'>
          <TwitterLogoIcon className='size-6' />
        </Link>
        <Link href='#'>
          <InstagramLogoIcon className='size-6' />
        </Link>
      </div>
    </footer>
  );
}
