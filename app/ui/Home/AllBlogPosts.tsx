import PostPagination from '@/app/ui/Home/PostPagination';
import PostItem from '@/app/ui/Home/PostItem';

export default function AllBlogPosts() {
  return (
    <div className='py-[30px]' id='all-post'>
      <h2 className='capitalize text-2xl font-semibold mb-8'>All blog posts</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-6 lg:gap-x-8 lg:gap-y-12 pb-[30px] border-b-[1px] border-slate-400 dark:border-slate-300'>
        {Array(6)
          .fill(0)
          .map((post, index) => {
            return (
              <PostItem
                key={index}
                post={{
                  id: '1234',
                  userId: 'asjcba',
                  title: 'Hello world',
                  content: 'Hello world',
                  slug: 'Hello world',
                  createdAt: '1 Oct, 2024',
                }}
              />
            );
          })}
      </div>
      <PostPagination />
    </div>
  );
}
