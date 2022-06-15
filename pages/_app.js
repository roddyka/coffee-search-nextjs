import '../styles/globals.css'
import Footer from '../components/footer';
import Banner from '../components/banner';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Footer />
    </div>);
}

export default MyApp
