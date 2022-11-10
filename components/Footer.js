/* eslint-disable @next/next/no-html-link-for-pages */
/*
 * @Date: 2022-10-19 16:24:21
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-11-10 00:29:38
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
              <h5><a href="/about-us" style={{color: "#fff"}}>关于我们</a></h5>
              <ul>
                <li><a href="/about-us" style={{color: "#fff"}}>律所介绍</a></li>
                <li><a href="/about-us" style={{color: "#fff"}}>团队介绍</a></li>
                <li><a href="/about-us" style={{color: "#fff"}}>服务流程</a></li>
                <li><a href="/about-us" style={{color: "#fff"}}>联系方式</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>成功案例</h5>
              <ul>
                <li><a>EB-1 A 特殊人才</a></li>
                <li><a>NIW 国家利益豁免</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>视频和文章</h5>
              <ul>
                <li><a>视频合集</a></li>
                <li><a>文章合集</a></li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>联系我们</h5>
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
