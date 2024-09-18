import type { Metadata } from 'next';
import React from 'react';
import './globals.css';
 
export const metadata: Metadata = {
  title: 'Country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-200'>{children}</body>
    </html>
  )
}