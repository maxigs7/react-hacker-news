import React from 'react';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';

interface IProps {
  nextPage(): void;
  page: number;
  prevPage(): void;
  totalPages: number;
}

export const Paginator: React.FC<IProps & ButtonGroupProps> = ({
  nextPage,
  page,
  prevPage,
  totalPages,
  ...buttonProps
}) => (
  <ButtonGroup colorScheme="hn-orange" isAttached {...buttonProps}>
    <IconButton
      aria-label="Previous page"
      disabled={page === 1}
      icon={<ArrowBackIcon />}
      onClick={prevPage}
    />
    {page > 1 && <Button onClick={prevPage}>{page - 1}</Button>}
    <Button disabled>{page}</Button>
    {page < totalPages && <Button onClick={nextPage}>{page + 1}</Button>}
    <IconButton
      aria-label="Next page"
      disabled={page === totalPages}
      icon={<ArrowForwardIcon />}
      onClick={nextPage}
    />
  </ButtonGroup>
);
