'use client';

import React from 'react';
import RecentBlogPostsDetail from '../ui/Blog/RecentBlogPostsDetail';
import BlogDetail from '../ui/Blog/BlogDetail';

type Props = {
  params: {
    postId: string;
  };
};

const Page: React.FC<Props> = ({ params: { postId } }) => {
  console.log(postId);
  return (
    <div className='flex items-start justify-between gap-8 mt-[30px] px-8'>
      <div className='basis-1/3 shrink-0'>
        <RecentBlogPostsDetail />
      </div>
      <div className='basis-2/3 shrink-0'>
        <BlogDetail />
      </div>
    </div>
  );
};

export default Page;
