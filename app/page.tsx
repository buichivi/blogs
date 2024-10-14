import RecentBlogPost from '@/app/ui/Home/RecentBlogPosts';
import AllBlogPosts from '@/app/ui/Home/AllBlogPosts';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='flex items-center justify-center pb-[30px]'>
        <h1 className='w-full text-[72px] md:text-[160px] lg:text-[245px] text-center uppercase font-bold border-t-[1px] border-b-[1px] border-slate-400 dark:border-slate-300 py-[25px]'>
          The blog
        </h1>
      </div>
      <RecentBlogPost />
      <AllBlogPosts />
    </div>
  );
}
