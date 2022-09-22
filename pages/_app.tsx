import "../styles/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
