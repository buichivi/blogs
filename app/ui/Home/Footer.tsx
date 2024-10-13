import { Button } from '@/components/ui/button';
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-[30px] text-center flex items-center justify-between wrapper'>
      <p>© 2024</p>
      <div className='flex items-center gap-2'>
        <Link href='#'>
          <Button variant='ghost'>
            <GitHubLogoIcon className='size-4' />
          </Button>
        </Link>
        <Link href='#'>
          <Button variant='ghost'>
            <TwitterLogoIcon className='size-4' />
          </Button>
        </Link>
        <Link href='#'>
          <Button variant='ghost'>
            <InstagramLogoIcon className='size-4' />
          </Button>
        </Link>
      </div>
    </footer>
  );
}
