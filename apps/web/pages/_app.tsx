import type { AppProps } from 'next/app';
import 'design-system/global.css';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
