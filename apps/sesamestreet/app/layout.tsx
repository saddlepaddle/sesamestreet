import 'design-system/global.css';
import { ReactNode } from 'react';
import { Inter } from '@next/font/google';

const inter = Inter({
    subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang='en'
            className='bg-zinc-600 font-sans antialiased md:subpixel-antialiased'
        >
            <body>
                <div className=''>{children}</div>
            </body>
        </html>
    );
}
