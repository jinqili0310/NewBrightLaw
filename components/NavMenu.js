/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 23:54:09
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-11-10 01:12:14
 * @FilePath: /NewBrightLaw/components/NavMenu.js
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
            美国小绿卡
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav style={{ marginRight: "0 !important" }}>
            <NavDropdown title="关于我们" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about-us">律所介绍</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">团队介绍</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">服务流程</NavDropdown.Item>
              <NavDropdown.Item href="/about-us">联系方式</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="小国护照" id="basic-nav-dropdown">
              <NavDropdown.Item href="/country">简要概述</NavDropdown.Item>
              <NavDropdown.Item href="/country">格林纳达</NavDropdown.Item>
              <NavDropdown.Item href="/country">土耳其</NavDropdown.Item>
              <NavDropdown.Item href="/country">摩尔多瓦</NavDropdown.Item>
              <NavDropdown.Item href="/country">保加利亚</NavDropdown.Item>
              <NavDropdown.Item href="/country">对比分析</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="美国 E-2" id="basic-nav-dropdown">
              <NavDropdown.Item href="/e2">简要概述</NavDropdown.Item>
              <NavDropdown.Item href="/e2">审理标准</NavDropdown.Item>
              <NavDropdown.Item href="/e2">申请流程</NavDropdown.Item>
              <NavDropdown.Item href="/e2">材料清单</NavDropdown.Item>
              <NavDropdown.Item href="/e2">深度讲解</NavDropdown.Item>
              <NavDropdown.Item href="/e2">常见问题</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="从E-2到绿卡" id="basic-nav-dropdown">
              <NavDropdown.Item href="/greencard">简要概述</NavDropdown.Item>
              <NavDropdown.Item href="/greencard">EB1C</NavDropdown.Item>
              <NavDropdown.Item href="/greencard">EB2/3</NavDropdown.Item>
              <NavDropdown.Item href="/greencard">EB5</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="成功案例" id="basic-nav-dropdown">
              <NavDropdown.Item href="/success">批准样板</NavDropdown.Item>
              <NavDropdown.Item href="/success">案例分享</NavDropdown.Item>
              <NavDropdown.Item href="/success">客户见证</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">联系我们</Nav.Link>
          </Nav>

          {/* <SearchOutlined
            onClick={() => {
              setSearch(!search);
            }}
          />

          {search === true ? (
            <Form className="d-flex" style={{position: "fixed", top: "50px", right: "0", padding: "10px", borderRadius: "10px", backgroundColor: "#fff"}}>
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
