import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { cn } from '@/lib/utils/tailwind-merge';
import TanStackProvider from '@/providers/tanstack-provider';

export const metadata: Metadata = {
    title: 'Nexus',
    description: 'Simple starterkit for your new website.',
    authors: { name: 'Mario', url: 'https://github.com/mariio46' },
    keywords: ['nextjs', 'nextjs14', 'starterkit', 'shadcnui', 'tailwindcss', 'tanstack query'],
    applicationName: 'Nexus',
    creator: '@mario46',
    openGraph: {
        type: 'website',
        countryName: 'indonesia',
        emails: 'mariomad2296@gmail.com',
        siteName: 'Nexus',
        locale: 'id-ID',
        title: 'Nexus - Simple Starterkit for your new website.',
        url: 'https://nexus-14.vercel.app/',
    },
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
