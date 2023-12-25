import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/react-fontawesome";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}