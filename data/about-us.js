/*
 * @Author: Jinqi Li
 * @Date: 2022-11-10 01:07:41
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-11-10 01:15:32
 * @FilePath: /NewBrightLaw/data/about-us.js
 */
import { Card } from "antd";
import React from "react";
const { Meta } = Card;

const AboutUsData = [
  {
    label: `律所介绍`,
    children: (
      <div
        style={{
          margin: "10px 20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <p>
            Newbright新锦达律师事务所是在美国加州政府注册成立并经加州律师公会认证许可的一家专业、精品法律服务机构，同时我们也是格林纳达（Grenada）政府官方授权的投资入籍业务代理机构，提供格林纳达投资入籍项目，美国E2条约国投资商签证，及后续绿卡申请的全方位一站式服务。
          </p>
          <p>
            Newbright新锦达的律师拥有比美国加州、纽约州、华盛顿州等多地区的执业牌照，有些律师还同时持有中国的律师执业牌照，在多个法律实践邻域有着丰富深厚的实践经验。我们专精各类美国工作签证(E2、H1B、L1、O-1)
            ，美国杰出人才移民 (EB1A、NIW) 、职业技术移民 (PERM、EB2、EB3、EB1B)
            、商业投资移民 (EB1C、EB5)
            ，也提供公司注册，商业合同和企业资产收购等业务。
          </p>
          <p>
            新锦达不断在各类移民项目上投入精力，以期为想要实现美国梦的人士提供多元化的产品选择；同时基于对低风险的偏好，新锦达设身处地站从客户利益最大化角度出发，戮力提升团队一致的专业化服务水平，為客戶提供高效、優質、專業、負責的服務，与您相约美国，实现美国梦。
          </p>
        </div>
      </div>
    ),
  },
  {
    label: `团队介绍`,
    children: (
      <div className="aboutus-team">
        <a
          href="https://www.newbrightlaw.com/productinfo/793328.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer1.png" />}
          >
            <Meta
              title="薛良权 律师"
              description="创始人、主任"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/793462.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer2.png" />}
          >
            <Meta
              title="严亦婷 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/816850.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer3.jpg" />}
          >
            <Meta
              title="孙景伟 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/819257.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer4.jpg" />}
          >
            <Meta
              title="刘静 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/816651.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer5.jpg" />}
          >
            <Meta
              title="潘华章 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/816652.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer6.jpg" />}
          >
            <Meta
              title="申娟 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/835894.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer7.jpg" />}
          >
            <Meta
              title="邓妩 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/845567.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer8.jpg" />}
          >
            <Meta
              title="陈丽梅 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
        <a
          href="https://www.newbrightlaw.com/productinfo/910121.html"
          target="_blank"
          rel="noreferrer"
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="lawyers" src="/assets/lawyer9.jpg" />}
          >
            <Meta
              title="林其祖 律师"
              description="律师"
              style={{ justifyContent: "center" }}
            />
          </Card>
        </a>
      </div>
    ),
  },
  {
    label: `服务流程`,
    children: ``,
  },
  {
    label: `联系方式`,
    children: ``,
  },
];

export { AboutUsData };
