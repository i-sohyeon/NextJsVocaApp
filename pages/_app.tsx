import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;