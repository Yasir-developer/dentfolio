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
import "react-tagsinput/react-tagsinput.css";

import { ToastContainer } from "react-toastify";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const App = ({ Component, pageProps, reduxStore }) => {
  const persistor = persistStore(reduxStore);

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
      <Provider store={reduxStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
};
export default withReduxStore(App);
