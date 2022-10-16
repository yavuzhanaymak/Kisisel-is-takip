

import Footer from "src/components/Footer";
import Header from "src/components/Header";
import 'src/styles/Styles.scss'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header/>
      <Component {...pageProps} />
      <Footer/>
    
    </>
  );
}

export default MyApp;
