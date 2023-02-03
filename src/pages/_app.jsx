import "@/styles/globals.css";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";

const clientSideEmotionCache = createCache({ key: "css", prepend: true });

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </CacheProvider>
  );
}
