'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import { cn } from './lib/utils';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/issues',
    },
  ];

  return (
    <nav className="h-14 mb-5 px-5 flex items-center space-x-6 border-b">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-zinc-500 hover:text-zinc-800 transition-colors',
              { 'text-zinc-900': link.href === currentPath }
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
