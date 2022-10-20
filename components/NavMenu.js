/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 01:03:25
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-10-19 16:23:49
 * @FilePath: \newbrightlaw\use-visa\components\NavMenu.js
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
          <Nav style={{ marginRight: "1em !important" }}>
            <NavDropdown title="关于我们" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1.1">认识我们</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">网站宗旨</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">律师团队</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">选择我们</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="EB1A特殊人才" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">综述</NavDropdown.Item>
              <NavDropdown.Item href="#">程序要求</NavDropdown.Item>
              <NavDropdown.Item href="#">审理标准</NavDropdown.Item>
              <NavDropdown.Item href="#">文件清单</NavDropdown.Item>
              <NavDropdown.Item href="#">常见问题解答</NavDropdown.Item>
              <NavDropdown.Item href="#">深度解析</NavDropdown.Item>
              <NavDropdown.Item href="#">案件点评</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="NIW国家利益豁免" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">综述</NavDropdown.Item>
              <NavDropdown.Item href="#">程序要求</NavDropdown.Item>
              <NavDropdown.Item href="#">审理标准</NavDropdown.Item>
              <NavDropdown.Item href="#">文件清单</NavDropdown.Item>
              <NavDropdown.Item href="#">常见问题解答</NavDropdown.Item>
              <NavDropdown.Item href="#">深度解析</NavDropdown.Item>
              <NavDropdown.Item href="#">案件点评</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="成功案例" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">批准通知</NavDropdown.Item>
              <NavDropdown.Item href="#">成功案例摘要</NavDropdown.Item>
              <NavDropdown.Item href="#">客户见证</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="服务合约" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">选择EB1A或NIW合约</NavDropdown.Item>
              <NavDropdown.Item href="#">不成功退款程序</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">联系我们</Nav.Link>
          </Nav>

          <SearchOutlined
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
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
