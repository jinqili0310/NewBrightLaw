/*
 * @Date: 2022-11-08 17:03:51
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-08 17:13:33
 * @FilePath: \newbrightlaw\pages\about-us.js
 */
import React from "react";
import { Tabs } from 'antd';

export default function AboutUs() {
  return (
    <Tabs
    defaultActiveKey="1"
    centered
    items={new Array(3).fill(null).map((_, i) => {
      const id = String(i + 1);
      return {
        label: `Tab ${id}`,
        key: id,
        children: `Content of Tab Pane ${id}`,
      };
    })}
    style={{margin: "100px 20px"}}
  />
  );
}
