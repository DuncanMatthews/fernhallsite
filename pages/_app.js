import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
    <Head>
  <title>Orgarium - Agriculture Farming React Template</title>
  {/*====== Favicon Icon ======*/}
  <link
    rel="shortcut icon"
    href="assets/images/favicon.ico"
    type="image/png"
  />
</Head>

      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
