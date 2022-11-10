/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 01:03:25
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-09 17:44:50
 * @FilePath: \newbrightlaw\components\NavMenu.js
 */
import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";

export default function NavMenu() {
  const [search, setSearch] = useState(false);
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="newbright"
            src="/newbright-icon2.jpg"
            width="42"
            height="39"
            className="d-inline-block align-top"
          />
          {"   "}
          <h1
            style={{
              display: "inline-block",
              lineHeight: "39px",
              fontSize: "29px",
              paddingLeft: "12px"
            }}
          >
            美国优才移民
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav style={{ marginRight: "1em !important" }}>
            <NavDropdown title="关于我们" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">律所介绍</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">团队介绍</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">服务流程</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">联系方式</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="EB-1 A 杰出人才" id="basic-nav-dropdown">
              <NavDropdown.Item href="/eb1a">简要概述</NavDropdown.Item>
              <NavDropdown.Item href="/eb1a">申请群体</NavDropdown.Item>
              {/* <NavDropdown.Item href="/eb1a">审理标准</NavDropdown.Item> */}
              <NavDropdown.Item href="/eb1a">申请流程</NavDropdown.Item>
              <NavDropdown.Item href="/eb1a">材料清单</NavDropdown.Item>
              <NavDropdown.Item href="/eb1a">视频讲解</NavDropdown.Item>
              <NavDropdown.Item href="/eb1a">相关文章</NavDropdown.Item>
              <NavDropdown.Item href="/eb1a">常见问题</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="NIW 国家利益豁免" id="basic-nav-dropdown">
              <NavDropdown.Item href="/niw">简要概述</NavDropdown.Item>
              <NavDropdown.Item href="/niw">申请群体</NavDropdown.Item>
              {/* <NavDropdown.Item href="/niw">审理标准</NavDropdown.Item> */}
              <NavDropdown.Item href="/niw">申请流程</NavDropdown.Item>
              <NavDropdown.Item href="/niw">材料清单</NavDropdown.Item>
              <NavDropdown.Item href="/niw">视频讲解</NavDropdown.Item>
              <NavDropdown.Item href="/niw">相关文章</NavDropdown.Item>
              <NavDropdown.Item href="/niw">常见问题</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="成功案例" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">批准样板</NavDropdown.Item>
              <NavDropdown.Item href="#">案例分享</NavDropdown.Item>
              <NavDropdown.Item href="#">客户见证</NavDropdown.Item>
              <NavDropdown.Item href="#">视频讲解</NavDropdown.Item>
              <NavDropdown.Item href="#">相关文章</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="视频和文章" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">视频合集</NavDropdown.Item>
              <NavDropdown.Item href="#">文章合集</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">联系我们</Nav.Link>
          </Nav>

          {/* <SearchOutlined
            onClick={() => {
              setSearch(!search);
            }}
          />

          {search === true ? (
            <Form
              className="d-flex"
              style={{
                position: "fixed",
                top: "50px",
                right: "0",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                style={{ backgroundColor: "#364d79", borderColor: "#364d79" }}
              >
                Search
              </Button>
            </Form>
          ) : null} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
