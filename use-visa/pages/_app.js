/*
 * @Author: Jinqi Li
 * @Date: 2022-10-18 23:33:12
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-10-19 01:37:30
 * @FilePath: /NewBrightLaw/use-visa/pages/_app.js
 */
import React from "react";
import NavMenu from "../components/NavMenu";
import { SSRProvider } from "react-bootstrap";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NavMenu />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
