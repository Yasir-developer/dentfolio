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
import "react-toastify/dist/ReactToastify.css";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  NProgress.configure({
    minimum: 0.3,
    easing: "ease",
    speed: 500,
    showSpinner: false,
  });

  useEffect(() => {
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
