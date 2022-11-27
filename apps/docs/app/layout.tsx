import 'design-system/global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html className='bg-zinc-600 antialiased' lang='en'>
            <body>
                <div className=''>{children}</div>
            </body>
        </html>
    );
}
