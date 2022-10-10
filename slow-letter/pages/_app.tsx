import { AppContext, AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import cookies from "next-cookies";
import { setToken } from "../function/token/tokenHandler";
import { useStore } from "../components/zustand_stores/store";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookies } from "../function/cookie-handler/cookieHandler";

export default function Myapp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const saveUserToken = useStore((state: any) => state.saveUserToken);
  useEffect(() => {
    pageProps.accessToken !== undefined
      ? saveUserToken(pageProps.accessToken)
      : saveUserToken("");
  }, [pageProps]);

  useEffect(() => {
    getCookies("accessToken") === undefined ? router.push("/signin") : null
  }, [router.pathname])

  const theme = extendTheme({
    styles: {
      global: {
        body: {
          width: "100vw",
          height: "100vh",
          backgroundColor: "#EDF2F4",
        },
      },
    },
  });
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
      <style jsx global>
        {`
          #__next {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </>
  );
}

Myapp.getInitialProps = async (appContext: AppContext) => {
  let pageProps = {};

  const { ctx } = appContext;
  const allCookies = cookies(ctx);
  if (
    allCookies["accessToken"] !== undefined &&
    allCookies["refreshToken"] !== undefined
  ) {
    setToken(allCookies["accessToken"], allCookies["refreshToken"]);
  }

  pageProps = {
    ...pageProps,
    accessToken: allCookies["accessToken"],
    refreshToken: allCookies["refreshToken"],
  };

  return { pageProps };
};
