import React from 'react';
import PostItem from './PostItem';

export default function RecentBlogPost() {
  return (
    <div className='pt-[30px]'>
      <h2 className='capitalize text-2xl font-semibold'>Recent blog posts</h2>
      <div className='mt-8 py-[30px] flex items-center justify-between gap-8 md:flex-col lg:flex-row'>
        <div className='lg:flex-1 md:w-full'>
          <PostItem
            post={{
              id: '1234',
              userId: 'asjcba',
              title: 'Hello world',
              content: 'Hello world',
              slug: 'Hello world',
              createdAt: '1 Oct, 2024',
            }}
          />
        </div>
        <div className='lg:flex-1 flex flex-col justify-between gap-8'>
          <PostItem
            post={{
              id: '1234',
              userId: 'asjcba',
              title: 'Hello world',
              content: 'Hello world',
              slug: 'Hello world',
              createdAt: '1 Oct, 2024',
            }}
            layout='small'
          />
          <PostItem
            post={{
              id: '1234',
              userId: 'asjcba',
              title: 'Hello world',
              content: 'Hello world',
              slug: 'Hello world',
              createdAt: '1 Oct, 2024',
            }}
            layout='small'
          />
        </div>
      </div>
      <div className='py-[30px]'>
        <PostItem
          post={{
            id: '1234',
            userId: 'asjcba',
            title: 'Hello world',
            content: 'Hello world',
            slug: 'Hello world',
            createdAt: '1 Oct, 2024',
          }}
          layout='large'
        />
      </div>
    </div>
  );
}
