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
      className={clsx('flex gap-8 w-full flex-col lg:flex-row', {
        'justify-between md:flex-col': layout === 'large',
        'md:flex-col lg:flex-col': layout === 'medium',
      })}
    >
      <img
        src='https://i.ytimg.com/vi/iw5Dd0-gh3Q/maxresdefault.jpg'
        alt=''
        className={clsx(`flex-1 w-full h-[50%] max-h-[228px] object-cover shrink-0`, {
          'w-1/2': layout === 'large',
          'w-1/2 md:max-w-[320px] md:max-h-[200px]': layout === 'small',
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
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-6'
                >
                  <path
                    d='M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z'
                    fill='currentColor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
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
