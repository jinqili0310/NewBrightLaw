/*
 * @Author: Jinqi Li
 * @Date: 2022-10-18 23:33:12
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-10-19 16:28:26
 * @FilePath: \newbrightlaw\use-visa\pages\_app.js
 */
import React, { useEffect } from "react";
import NavMenu from "../components/NavMenu";
import { SSRProvider } from "react-bootstrap";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NavMenu />
      <Component {...pageProps} />
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
