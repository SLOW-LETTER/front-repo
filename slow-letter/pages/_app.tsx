import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react"


export default function Myapp({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles:{
      global: {
        body: {
          width: "100%",
          height: "45rem",
          backgroundColor: "#EDF2F4"
        }
      }
    }
  })
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Slow Letter</title>
        <link rel="icon" href="/project-logo.svg" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
