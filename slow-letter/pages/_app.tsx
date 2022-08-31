import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function Myapp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Slow Letter</title>
        <link rel="icon" href="/project-logo.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
