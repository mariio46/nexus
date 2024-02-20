import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { cn } from '@/lib/utils/tailwind-merge';
import TanStackProvider from '@/providers/tanstack-provider';

export const metadata: Metadata = {
    title: 'Save Spot',
    description: 'Simple saving your url.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='en'>
            <body className={cn('mx-auto max-w-screen-2xl text-[0.900rem]/[1.35rem] antialiased', GeistSans.className)}>
                <TanStackProvider>{children}</TanStackProvider>
            </body>
        </html>
    );
}
