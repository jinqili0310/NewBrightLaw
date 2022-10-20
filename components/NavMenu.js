/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 23:54:09
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-10-19 23:59:33
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
        <Navbar.Brand href="#home">NewBright Law Group</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Nav style={{ marginRight: "0 !important" }}>
            <NavDropdown title="关于我们" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">认识我们</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">网站宗旨</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">律师团队</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">选择我们</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="热门E2条约国" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">格林纳达</NavDropdown.Item>
              <NavDropdown.Item href="#">土耳其</NavDropdown.Item>
              <NavDropdown.Item href="#">摩尔多瓦</NavDropdown.Item>
              <NavDropdown.Item href="#">保加利亚</NavDropdown.Item>
              <NavDropdown.Item href="#">护照项目对比</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="E2条约国投资商签证" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">签证综述</NavDropdown.Item>
              <NavDropdown.Item href="#">程序要求</NavDropdown.Item>
              <NavDropdown.Item href="#">审理标准</NavDropdown.Item>
              <NavDropdown.Item href="#">文件清单</NavDropdown.Item>
              <NavDropdown.Item href="#">常见问题解答</NavDropdown.Item>
              <NavDropdown.Item href="#">深度解析</NavDropdown.Item>
              <NavDropdown.Item href="#">E2投资项目介绍</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="从E2到绿卡" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">EB1C</NavDropdown.Item>
              <NavDropdown.Item href="#">EB2/3</NavDropdown.Item>
              <NavDropdown.Item href="#">EB5</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="成功故事" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">批准通知与签证</NavDropdown.Item>
              <NavDropdown.Item href="#">成功案例</NavDropdown.Item>
              <NavDropdown.Item href="#">客户见证</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="联系我们" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">联络方式</NavDropdown.Item>
            </NavDropdown>
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