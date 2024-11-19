import { Button } from '@/components/ui/button';
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-[30px] mt-5 md:mt-2 text-center flex items-center justify-between'>
      <p>© 2024</p>
      <div className='flex items-center gap-2'>
        <Link href='#'>
          <Button variant='ghost' size='icon'>
            <GitHubLogoIcon className='size-5' />
          </Button>
        </Link>
        <Link href='#'>
          <Button variant='ghost' size='icon'>
            <TwitterLogoIcon className='size-5' />
          </Button>
        </Link>
        <Link href='#'>
          <Button variant='ghost' size='icon'>
            <InstagramLogoIcon className='size-5' />
          </Button>
        </Link>
      </div>
    </footer>
  );
}
