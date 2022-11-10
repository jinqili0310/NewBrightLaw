/*
 * @Author: Jinqi Li
 * @Date: 2022-11-08 22:51:10
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-09 17:19:41
 * @FilePath: \newbrightlaw\data\about-us.js
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
            Newbright新锦达律师事务所是在美国加州政府注册成立并经加州律师公会认证许可的一家专业、精品法律服务机构。
          </p>
          <p>
            Newbright新锦达的律师拥有美国加州、纽约州、华盛顿州等多地的执业牌照，有些律师还同时持有中国的执业牌照，而且执业经验非常丰富。
          </p>
          <p>
            Newbright新锦达律师事务所专注于服务全球华人和企业，主要执业领域包括：移民、商业、婚姻、投资、诉讼争议。
          </p>
          <p>
            Newbright新锦达律师事务所的全体律师和员工致力于为客户提供高效、优质、专业、负责的法律服务。
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
