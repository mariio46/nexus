import { Joke } from '@/components/joke';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils/tailwind-merge';
import Link from 'next/link';

export default function Home() {
    return (
        <div className='flex min-h-screen items-center justify-center'>
            <div className='w-full max-w-3xl'>
                <Card>
                    <CardHeader className='flex-row justify-between space-y-0'>
                        <div className='space-y-1.5'>
                            <CardTitle>Home Page</CardTitle>
                            <CardDescription>
                                Hii, Welcome to my starterkit. here some joke from{' '}
                                <Link
                                    className='font-medium hover:underline'
                                    href='https://api.chucknorris.io/'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    chucknorris.io
                                </Link>
                            </CardDescription>
                        </div>
                        <div className='flex gap-2'>
                            <Link href='/login' className={cn(buttonVariants({ variant: 'default' }))}>
                                Login
                            </Link>
                            <Link href='/register' className={cn(buttonVariants({ variant: 'outline' }))}>
                                Register
                            </Link>
                        </div>
                    </CardHeader>
                    <Joke />
                </Card>
            </div>
        </div>
    );
}
