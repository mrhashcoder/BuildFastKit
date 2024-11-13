
import { PrimeReactProvider } from 'primereact/api';

export default function PrimeContext({ Component, pageProps }: {Component: any, pageProps: any}) {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}
        