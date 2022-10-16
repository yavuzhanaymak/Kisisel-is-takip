

import Footer from "src/components/Footer";
import Header from "src/components/Header";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
    <title>
      Yavuzhan Aymak  
    </title>
  </Head>
    <Header/>
      <Component {...pageProps} />
      <Footer/>
    
    </>
  );
}

export default MyApp;
