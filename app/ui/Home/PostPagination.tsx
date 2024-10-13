import { generatePagination } from '@/app/lib/utils';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export default function PostPagination() {
  const pageNumbers = generatePagination(1, 8);

  return (
    <Pagination>
      <PaginationContent className='mt-5 w-full h-10 flex items-center justify-between'>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <div className='flex items-center gap-2'>
          {pageNumbers.map((page, index) => {
            return (
              <PaginationItem key={index}>
                {page === '...' ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink href='#' isActive={page === 1}>
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            );
          })}
        </div>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
