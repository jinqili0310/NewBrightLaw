/*
 * @Date: 2022-10-19 16:24:21
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-10-19 16:41:49
 * @FilePath: \newbrightlaw\use-visa\components\Footer.js
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
              <h5>关于我们</h5>
              <ul>
                <li>认识我们</li>
                <li>律师团队</li>
                <li>选择我们</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>常用链接</h5>
              <ul>
                <li>服务合约</li>
                <li>免费资质评估</li>
                <li>预约付费咨询</li>
              </ul>
            </Col>
            <Col xs={12} sm={6} md={3}>
              <h5>成功案例</h5>
              <ul>
                <li>EB1A特殊人才</li>
                <li>NIW国家利益豁免</li>
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
