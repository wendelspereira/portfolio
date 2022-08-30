import "../styles/globals.css";
import "../styles/projects.css";
import "../styles/contact.css";
import "../../node_modules/nprogress/nprogress.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import dynamic from "next/dynamic";

// const TopProgressBar = dynamic(
//   () => {
//     return import("../components/TopProgressBar/TopProgressBar");
//   },
//   { ssr: true }
// );

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <TopProgressBar /> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
