import 'design-system/global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html className='bg-zinc-900' lang='en'>
            <head>
                <title>Documentation Example</title>
            </head>
            <body>
                <div className=''>{children}</div>
            </body>
        </html>
    );
}
