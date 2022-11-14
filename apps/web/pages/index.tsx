import Head from 'next/head';
import { Button } from 'design-system';

export default function Web() {
    return (
        <>
            <Head>
                <title>Web App</title>
            </Head>

            <div className="flex min-h-screen w-full items-center justify-center">
                <div className="flex items-center space-x-3">
                    <h1 className="text-lg  font-bold">Web</h1>
                    <Button />
                </div>
            </div>
        </>
    );
}
