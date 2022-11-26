import 'design-system/global.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Documentation Example</title>
            </head>
            <body>
                <div className="bg-slate-500">{children}</div>
            </body>
        </html>
    );
}
