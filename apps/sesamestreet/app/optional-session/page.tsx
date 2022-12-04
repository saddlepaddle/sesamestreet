'server-only';

import createClient from '../../utils/supabase-server';

// do not cache this page
export const revalidate = 0;

// this page will display with or without a user session
export default async function OptionalSession() {
    const supabase = createClient();

    const { data } = await supabase.from('shows').select('*');

    return <pre>{JSON.stringify({ data }, null, 2)}</pre>;
}
