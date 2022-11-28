'use client';

import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

// Supabase auth needs to be triggered client-side
export default function Login() {
    return (
        <>
            <div className='flex w-[400px] flex-col items-center justify-center rounded-lg bg-gray-100 p-4 text-center'>
                <div className=' h-[450px] w-full flex-col items-start'>
                    <span className='text-3xl font-extrabold text-green-900'>Welcome!</span>
                    <Auth
                        appearance={{ theme: ThemeSupa }}
                        supabaseClient={supabase}
                        providers={['google', 'github']}
                        socialLayout='horizontal'
                    />
                </div>
            </div>
        </>
    );
}
