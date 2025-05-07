'use client';

import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';


export default function RootLayout({ children }) {
  // Initialize QueryClient only once
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </QueryClientProvider>
    </SessionProvider>
  );
}
