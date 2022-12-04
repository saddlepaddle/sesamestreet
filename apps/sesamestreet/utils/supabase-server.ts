import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { cookies, headers } from 'next/headers';

import { Database } from '../db_types';

export default function createClient() {
    return createServerComponentSupabaseClient<Database>({
        headers,
        cookies,
    });
}
