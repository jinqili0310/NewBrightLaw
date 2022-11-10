/*
 * @Date: 2022-11-08 17:04:35
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-09 16:49:31
 * @FilePath: \newbrightlaw\pages\eb1a.js
 */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tabs, Card } from "antd";
import { Eb1aData } from "../data/eb1a";

export default function Eb1a() {
  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <Row>
        {/* <Col xs={12} sm={3}></Col> */}
        {/* <Col xs={12} sm={9}> */}
        <Tabs
          defaultActiveKey="1"
          centered
          items={Eb1aData.map((item, i) => {
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
