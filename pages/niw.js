/*
 * @Date: 2022-11-08 17:04:39
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-09 17:45:21
 * @FilePath: \newbrightlaw\pages\niw.js
 */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tabs, Card } from "antd";
import { NiwData } from "../data/niw";

export default function Niw() {
  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <Row>
        {/* <Col xs={12} sm={3}></Col> */}
        {/* <Col xs={12} sm={9}> */}
        <Tabs
          defaultActiveKey="1"
          centered
          items={NiwData.map((item, i) => {
            return {
              label: <h6>{item.label}</h6>,
              key: i + 1,
              children: item.children,
            };
          })}
        />
        {/* </Col> */}
      </Row>
    </Container>
  );
}
