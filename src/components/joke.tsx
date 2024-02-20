'use client';

import useJoke from '@/hooks/useJoke';
import { Button } from './ui/button';
import { CardContent, CardFooter } from './ui/card';
import { Skeleton } from './ui/skeleton';

export const Joke = () => {
    const { joke, isError, isFetching, handleRefetch, loading } = useJoke();

    return (
        <>
            <CardContent>
                {isError ? (
                    <div>
                        <p className='font-semibold text-destructive'>Fetch Joke Failed, try again later!</p>
                    </div>
                ) : (
                    <div>{!isFetching ? joke : <Skeleton className='h-6 w-full rounded-xl' />}</div>
                )}
            </CardContent>
            <CardFooter>
                <Button onClick={handleRefetch} disabled={isFetching || loading}>
                    New Joke
                </Button>
            </CardFooter>
        </>
    );
};
