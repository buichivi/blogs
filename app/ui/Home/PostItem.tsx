import { Post } from '@/app/lib/definition';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
type Props = {
  post: Post;
  layout?: 'large' | 'medium' | 'small';
};
const PostItem = ({ post, layout = 'medium' }: Props) => {
  return (
    <div
      className={clsx('flex gap-8 w-full', {
        'flex-row justify-between': layout === 'large' || layout === 'small',
        'flex-col': layout === 'medium',
      })}
    >
      <img
        src='https://i.ytimg.com/vi/iw5Dd0-gh3Q/maxresdefault.jpg'
        alt=''
        className={clsx(`flex-1 w-full h-[50%] max-h-[228px] object-cover shrink-0`, {
          'w-1/2 min-h-[200px]': layout === 'large' || layout === 'small',
        })}
      />
      <div className='flex-1 flex flex-col gap-6 justify-between'>
        <div className='flex flex-col'>
          <p className='text-[#6941C6] font-semibold text-sm mb-3'>
            <span>Olivia Rhye</span>
            <span> • </span>
            <span>{post.createdAt}</span>
          </p>
          <Link
            href={`/post/${post.slug}`}
            className={clsx(`font-semibold mb-3 text-2xl text-[#1A1A1A] dark:text-white`, {
              'text-[18px] mb-2': layout === 'large' || layout === 'small',
            })}
          >
            <div className='flex items-center justify-between'>
              <span>UX review presentations</span>
              {(layout === 'medium' || layout === 'large') && (
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 17L17 7M17 7H7M17 7V17'
                    stroke='white'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              )}
            </div>
          </Link>
          <p className='text-base text-[#667085] dark:text-[#C0C5D0] line-clamp-3 text-wrap'>
            How do you create compelling presentations that wow your colleagues and impress your
            managers?
          </p>
        </div>
        <div className='flex items-center gap-2'>
          <Badge>Design</Badge>
          <Badge>Research</Badge>
          <Badge>Presentation</Badge>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
