import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "components/Layouts/Footer";
import Header from "components/Layouts/Header";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
