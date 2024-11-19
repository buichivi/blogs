'use client';

import React from 'react';
import RecentBlogPostsDetail from '../ui/Blog/RecentBlogPostsDetail';
import BlogDetail from '../ui/Blog/BlogDetail';
import Newletters from '../ui/Blog/Newletters';

type Props = {
  params: {
    postId: string;
  };
};

const Page: React.FC<Props> = ({ params: { postId } }) => {
  console.log(postId);
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between gap-8 mt-[30px] lg:px-8'>
      <div className='basis-1/3 shrink-0'>
        <RecentBlogPostsDetail />
        <Newletters className='block lg:hidden' />
      </div>
      <div className='basis-2/3 shrink-0'>
        <BlogDetail />
        <Newletters className='hidden lg:block' />
      </div>
    </div>
  );
};

export default Page;
