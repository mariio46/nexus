import { InputError } from '@/components/input-error';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils/tailwind-merge';
import Link from 'next/link';

export default function RegisterForm() {
    return (
        <form>
            <div className='mt-4 space-y-1'>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' name='name' type='text' required />
                <InputError message={'Error'} />
            </div>
            <div className='mt-4 space-y-1'>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email' autoComplete='email' required />
                <InputError message={'Error'} />
            </div>
            <div className='mt-4 space-y-1'>
                <Label htmlFor='password'>Password</Label>
                <Input id='password' name='password' type='password' autoComplete='new-password' required />
                <InputError message={'Error'} />
            </div>
            <div className='mt-4 space-y-1'>
                <Label htmlFor='password_confirmation'>Confirm Password</Label>
                <Input
                    type='password'
                    id='password_confirmation'
                    name='password_confirmation'
                    autoComplete='confirm-new-password'
                    required
                />
            </div>
            <div className='flex flex-col gap-2'>
                <Button className='mt-6 w-full' type='submit'>
                    Register
                </Button>
                <div className='flex w-full items-center gap-2'>
                    <Link href='/' className={cn('w-full', buttonVariants({ variant: 'outline' }))}>
                        Home
                    </Link>
                    <Link href='/login' className={cn('w-full', buttonVariants({ variant: 'outline' }))}>
                        Login
                    </Link>
                </div>
            </div>
        </form>
    );
}
