// proxy.js (in the root or src/ directory)

import { clerkMiddleware } from '@clerk/nextjs/server';

// 1. This remains the default export, which is what Clerk expects.
//    Next.js will recognize the default export in the proxy.js file.
export default clerkMiddleware();

// 2. The matcher config remains the same.
export const config = {
  matcher: [
    // Skips Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
