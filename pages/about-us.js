/*
 * @Date: 2022-11-08 17:03:51
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-11-09 00:11:55
 * @FilePath: /NewBrightLaw/pages/about-us.js
 */
import React from "react";
import { Tabs } from 'antd';
import { AboutUsData } from "../data/about-us";

export default function AboutUs() {
  return (
    <Tabs
    defaultActiveKey="1"
    centered
    items={AboutUsData.map((item, i) => {
      return {
        label: item.label,
        key: i+1,
        children: item.children,
      };
    })}
    style={{margin: "100px 20px"}}
  />
  );
}
