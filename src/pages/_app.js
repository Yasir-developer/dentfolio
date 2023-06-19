import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
