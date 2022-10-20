/* eslint-disable @next/next/no-img-element */
/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 23:44:30
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-10-20 00:09:13
 * @FilePath: /NewBrightLaw/pages/_app.js
 */
import "../styles/globals.css";
import { SSRProvider } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NavMenu></NavMenu>
      <Component {...pageProps} />
      <Footer></Footer>
    </SSRProvider>
  );
}

export default MyApp;
