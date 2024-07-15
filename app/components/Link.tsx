import { Link as RadixLink } from '@radix-ui/themes';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

interface Props {
  href: string;
}

const Link = ({ href, children }: PropsWithChildren<Props>) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{children}</RadixLink>
    </NextLink>
  );
};

export default Link;
