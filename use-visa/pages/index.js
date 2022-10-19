import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Card } from "antd";

export default function Home() {
  const carouselStyle = {
    height: "500px",
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item style={carouselStyle}>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}
          <Carousel.Caption>
            <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              First slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle}>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          /> */}

          <Carousel.Caption>
            <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Second slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselStyle}>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          /> */}

          <Carousel.Caption>
            <h3 style={{ lineHeight: "400px", color: "#fff" }}>
              Third slide label
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col>
            <Card title="EB1A特殊人才移民">
              <p>Content</p>
              <a href="#">More</a>
            </Card>
          </Col>
          <Col>
            <Card title="NIW国家利益豁免移民">
              <p>Content</p>
              <a href="#">More</a>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
