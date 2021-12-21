import { Fragment } from "react";
import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/layout/layout";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <title>Document</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
