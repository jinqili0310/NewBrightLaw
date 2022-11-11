/* eslint-disable @next/next/no-img-element */
/*
 * @Author: Jinqi Li
 * @Date: 2022-10-19 23:44:30
 * @LastEditors: jinqili0310 jinqi.li.310@gmail.com
 * @LastEditTime: 2022-11-10 15:41:40
 * @FilePath: \newbrightlaw\pages\index.js
 */
import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Divider } from "antd";
import { FileDoneOutlined, PlusCircleOutlined } from "@ant-design/icons";

export default function Home() {
  const carouselStyle = {
    height: "600px",
    color: "#fff",
    textAlign: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage: "url(/assets/grenada-g26982be43_1920.jpg)",
            backgroundPosition: "50% 20%",
          }}
        >
          <Carousel.Caption>
            {/* <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              First slide label
            </h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage:
              "url(/assets/closeup-shot-waving-flag-grenada-with-interesting-textures.jpg)",
            backgroundPosition: "100% 20%",
          }}
        >
          <Carousel.Caption>
            {/* <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Second slide label
            </h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage: "url(/assets/pexels-fauxels-3184418.jpg)",
            backgroundPosition: "50% 30%",
          }}
        >
          <Carousel.Caption>
            {/* <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Third slide label
            </h3> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          style={{
            ...carouselStyle,
            backgroundImage: "url(/assets/pexels-anastasiya-gepp-3995913.jpg)",
            backgroundPosition: "80% 20%",
          }}
        >
          <Carousel.Caption>
            {/* <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Fourth slide label
            </h3> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 style={{ textAlign: "center", margin: "40px 0" }}>热门E-2条约国家</h2>
      <Container id="countryGroup" style={{ width: "90%", maxWidth: "unset" }}>
        <Row>
          <Col sm={12} md={6} style={{ paddingRight: "0" }}>
            <a href="/country">
              <Card
                className="bg-dark text-black card-grenada"
                style={{
                  borderRadius: "0",
                  border: "none",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card.Img
                  src="/assets/view-g103cdf0f6_1920.jpg"
                  alt="Card image"
                  style={{
                    borderRadius: "0",
                    border: "none",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top right"
                  }}
                />
                <Card.ImgOverlay style={{ top: "unset" }}>
                  <Card.Title>格林纳达</Card.Title>
                  <Card.Text>GRENADA</Card.Text>
                </Card.ImgOverlay>
              </Card>
            </a>
          </Col>
          <Col sm={12} md={6}>
            <Row>
              <Col style={{ paddingLeft: "0" }}>
                <a href="/country">
                  <Card
                    className="bg-dark text-black card-turkey"
                    style={{
                      borderRadius: "0",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Card.Img
                      src="/assets/river-gb57579bdb_1920.jpg"
                      alt="Card image"
                      style={{
                        borderRadius: "0",
                        border: "none",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Card.ImgOverlay style={{ top: "unset" }}>
                      <Card.Title>土耳其</Card.Title>
                      <Card.Text>TURKEY</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </a>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
                <a href="/country">
                  <Card
                    className="bg-dark text-black card-moldova"
                    style={{
                      borderRadius: "0",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Card.Img
                      src="/assets/prague-gabbd3dbeb_1920.jpg"
                      alt="Card image"
                      style={{
                        borderRadius: "0",
                        border: "none",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Card.ImgOverlay style={{ top: "unset" }}>
                      <Card.Title>摩尔多瓦</Card.Title>
                      <Card.Text>MOLDOVA</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </a>
              </Col>
              <Col style={{ paddingLeft: "0" }}>
                <a href="/country">
                  <Card
                    className="bg-dark text-black card-bulgaria"
                    style={{
                      borderRadius: "0",
                      border: "none",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Card.Img
                      src="/assets/fortress-gb108456bb_1920.jpg"
                      alt="Card image"
                      style={{
                        borderRadius: "0",
                        border: "none",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Card.ImgOverlay style={{ top: "unset" }}>
                      <Card.Title>保加利亚</Card.Title>
                      <Card.Text>BULGARIA</Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container id="benefitGroup" style={{ width: "100%", maxWidth: "unset", margin: "40px 0" }}>
        <Row style={{backgroundImage: "url(/assets/grenada-g26982be43_1920.jpg)", backgroundPosition: "center", backgroundSize: "100%", height: "400px", marginLeft: "calc(var(--bs-gutter-x) * .5)", marginRight: "calc(var(--bs-gutter-x) * .5)"}}>
          <Col style={{ padding: "0" }}>
            <Card
              className="bg-dark text-dark gerenadaCard"
              style={{ borderRadius: "0", border: "none" }}
            >
              {/* <Card.Img
                src="https://placehold.jp/600x600.png"
                alt="Card image"
                style={{ borderRadius: "0", border: "none" }}
              /> */}
              <Card.ImgOverlay style={{ textAlign: "center" }}>
                <Card.Title>
                  格林纳达国籍优势
                </Card.Title>
                <Card.Text>content</Card.Text>
                <Card.Text className="hoverContent">
                  content
                  <br />
                  content
                  <br />
                  content
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col style={{ padding: "0" }}>
            <Card
              className="bg-dark text-dark gerenadaCard"
              style={{ borderRadius: "0", border: "none" }}
            >
              {/* <Card.Img
                src="https://placehold.jp/600x600.png"
                alt="Card image"
                style={{ borderRadius: "0", border: "none" }}
              /> */}
              <Card.ImgOverlay style={{ textAlign: "center" }}>
                <Card.Title>
                  美国E-2签证优势
                </Card.Title>
                <Card.Text>content</Card.Text>
                <Card.Text className="hoverContent">
                  content
                  <br />
                  content
                  <br />
                  content
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

      <h2 style={{ textAlign: "center", margin: "40px 0" }}>
        E-2条约国投资人签证
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "0 20px",
          justifyContent: "space-around",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FileDoneOutlined
            style={{ fontSize: "40px", marginBottom: "10px" }}
          />
          <h5>签证综述</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FileDoneOutlined
            style={{ fontSize: "40px", marginBottom: "10px" }}
          />
          <h5>签证综述</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FileDoneOutlined
            style={{ fontSize: "40px", marginBottom: "10px" }}
          />
          <h5>签证综述</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FileDoneOutlined
            style={{ fontSize: "40px", marginBottom: "10px" }}
          />
          <h5>签证综述</h5>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FileDoneOutlined
            style={{ fontSize: "40px", marginBottom: "10px" }}
          />
          <h5>签证综述</h5>
        </div>
      </div>

      <h2 style={{ textAlign: "center", margin: "40px 0" }}>成功案例</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: "0 0 40px 0",
        }}
      >
        <Card style={{ width: "300px" }}>
          <Card.Img variant="top" src="https://placehold.jp/300x300.png" />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>X小姐</Card.Title>
            <Divider></Divider>
            <Card.Text>content</Card.Text>
            <a>
              <PlusCircleOutlined style={{ fontSize: "40px" }} />
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "300px" }}>
          <Card.Img variant="top" src="https://placehold.jp/300x300.png" />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>X小姐</Card.Title>
            <Divider></Divider>
            <Card.Text>content</Card.Text>
            <a>
              <PlusCircleOutlined style={{ fontSize: "40px" }} />
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "300px" }}>
          <Card.Img variant="top" src="https://placehold.jp/300x300.png" />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>X小姐</Card.Title>
            <Divider></Divider>
            <Card.Text>content</Card.Text>
            <a>
              <PlusCircleOutlined style={{ fontSize: "40px" }} />
            </a>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
}
