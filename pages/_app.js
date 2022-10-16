

import Footer from "src/components/footer";
import Header from "src/components/header";
import 'src/styles/styles.scss'

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
