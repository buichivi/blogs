import PostItem from '../Home/PostItem';

const RecentBlogPostsDetail = () => {
  return (
    <div className='w-full'>
      <h2 className='capitalize text-2xl font-semibold mb-8'>Recent blog posts</h2>
      <ul className='w-full flex flex-col gap-y-8'>
        {[1, 2, 3, 4].map((_, index) => {
          return (
            <li key={index}>
              <PostItem
                post={{
                  id: '1234',
                  userId: 'asjcba',
                  title: 'Hello world',
                  content: 'Hello world',
                  slug: 'Hello world',
                  thumbImage: '',
                  createdAt: '1 Oct, 2024',
                }}
                layout='medium'
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentBlogPostsDetail;
