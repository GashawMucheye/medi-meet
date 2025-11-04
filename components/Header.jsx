import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className='fixed top-0 w-full bg-background/80 backdrop-blur-md z-10 supports-backdrop-filter:bg-background/60 border-b border-border'>
      <nav className='container mx-auto flex h-16 items-center px-4 justify-between'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Medical-Meet Logo'
            width={40}
            height={40}
          />
        </Link>
        <div className='flex items-center space-x-2 '>
          <SignedOut>
            <SignInButton>
              <Button variant='secondary'>Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold',
                },
              }}
              afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
