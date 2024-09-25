import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins } from '@next/font/google';
import AppContext from "@/context/AppContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content={process.env.NEXT_PUBLIC_APP_NAME} />
        <meta name="keywords" content={process.env.NEXT_PUBLIC_APP_NAME} />
      </Head>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </main>
  );
}
