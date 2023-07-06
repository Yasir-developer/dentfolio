import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/nprogress.css";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  NProgress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 500,
    showSpinner: false,
  });

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };
    router.events.on("routeChangeStart", () => handleStart);
    router.events.on("routeChangeComplete", () => handleComplete);
    router.events.on("routeChangeError", () => handleComplete);
  }, []);
  return (
    <>
      <Layout>
        {pageLoading ? <div>Loading</div> : <Component {...pageProps} />}
      </Layout>
    </>
  );
}
