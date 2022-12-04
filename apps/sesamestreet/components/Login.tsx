'use client';

import supabase from '../utils/supabase-browser';
import { Button } from 'design-system';

// Supabase auth needs to be triggered client-side
export default function Login() {
    return (
        <>
            <div className='flex w-[400px] flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-center'>
                <div className=' h-[450px] w-full flex-col items-start'>
                    <span className='text-3xl font-extrabold text-green-900'>Welcome!</span>
                    <Button
                        onClick={() => {
                            supabase.auth.signInWithPassword({
                                email: 'satyapatel111@gmail.com',
                                password: 'ngWGVc5nwuA6qEj',
                            });
                        }}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
        </>
    );
}
