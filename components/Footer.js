/* eslint-disable @next/next/no-img-element */
/*
 * @Author: Jinqi Li
 * @Date: 2022-10-20 00:01:58
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-11-10 01:13:02
 * @FilePath: /NewBrightLaw/components/Footer.js
 */
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Divider } from 'antd';

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footerDiv">
        <Container>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <img src="https://placehold.jp/150x150.png" alt="logo"></img>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <ul>
                <li>热门E-2条约国家</li>
                <li>E-2条约国投资人签证</li>
                <li>从E-2到绿卡</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <ul>
                <li>关于我们</li>
                <li>成功案例</li>
                <li>联系我们</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <ul>
                <li>美国电话:</li>
                <li>中国电话:</li>
                <li>电子邮件:</li>
                <li>微信号:</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Divider style={{borderColor: "rgb(0 0 0 / 50%)"}} />
        <p style={{textAlign: "center"}}>© 2022 NewBright Law Group 版权所有</p>
      </div>
    </React.Fragment>
  );
}