import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import React from 'react';

type Props = {
  className?: string;
};

const Newletters: React.FC<Props> = ({ className }) => {
  return (
    <div className={`mt-8 ${className}`}>
      <div>
        <p className='text-center'>
          <span className='h-6 w-fullfont-semibold text-base text-[#7F56D9]'>Newletters</span>
        </p>
        <h3 className='pt-3 pb-6 text-3xl lg:text-5xl text-center font-semibold'>
          Stories and interviews
        </h3>
        <p className='text-center'>
          <span className='w-3/5 text-base lg:text-xl font-normal text-[#C0C5D0]'>
            Subscribe to learn about new product features, the latest in technology, solutions, and
            updates.
          </span>
        </p>
      </div>
      <div className='flex items-start justify-between gap-4 w-full lg:w-3/5 mx-auto mt-10'>
        <div className='w-full flex flex-col gap-2'>
          <Input
            type='email'
            placeholder='Enter your email'
            className='pl-4 py-3 pr-[14px] w-full h-12'
          />
          <p className='text-sm text-[#C0C5D0]'>
            We care about your data in our{' '}
            <Link href='#' className='underline'>
              privacy policy
            </Link>
          </p>
        </div>
        <Button className='bg-[#7F56D9] hover:bg-[#7F56D9]/80 text-white h-12 px-5 py-3'>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Newletters;
