/*
 * @Date: 2022-11-08 17:03:51
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-09 16:09:34
 * @FilePath: \newbrightlaw\pages\about-us.js
 */
import React from "react";
import { Tabs, Card } from "antd";
import { AboutUsData } from "../data/about-us";
import { Container, Row, Col } from "react-bootstrap";
const { Meta } = Card;

export default function AboutUs() {
  return (
    <Container style={{ paddingTop: "100px", paddingBottom: "50px" }}>
      <Row>
        {/* <Col xs={12} sm={3}></Col> */}
        {/* <Col xs={12} sm={9}> */}
          <Tabs
            defaultActiveKey="1"
            centered
            items={AboutUsData.map((item, i) => {
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
